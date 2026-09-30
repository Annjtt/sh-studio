// 3D неоновый фон сайта: пользователь находится внутри пространства с кубом,
// острым конусом и кругом. Тёмный фон, подчёркнутые грани, лёгкая дымка.
// Рендер: Three.js (вендорен в js/vendor/three) + UnrealBloom для неона.
import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { LineSegments2 } from 'three/addons/lines/LineSegments2.js';
import { LineSegmentsGeometry } from 'three/addons/lines/LineSegmentsGeometry.js';
import { LineMaterial } from 'three/addons/lines/LineMaterial.js';

// Базовые цвета: белый неон с лёгким холодным подтоном для далёких объектов
const FOG_COLOR = 0x000000;
const NEON_NEAR = 0xffffff;
const NEON_FAR = 0xb8c8e4;
const FACE_COLOR = 0x04060a;

const CONFIG = {
    fogDensity: 0.06,
    fov: 62,
    fovNarrow: 76,

    // ===== СВЕЧЕНИЕ НЕОНА — всё настраивается здесь ==========================
    // Сила ореола вокруг рёбер. Поставьте 0 — свечение исчезнет совсем.
    bloomStrength: 0.32,
    // Насколько широко расползается свечение: 0 — узкий контур, 1 — заливает экран
    bloomRadius: 0.45,
    // Порог яркости, с которого начинается свечение. Больше — свечение только от
    // самых ярких рёбер
    bloomThreshold: 0.52,
    // Ореол-дымка вокруг каждого объекта: размер и прозрачность
    glowScale: 0.75,
    glowOpacity: 0.012,
    // Толщина неоновых рёбер в пикселях
    lineWidth: 1.2,
    lineWidthMobile: 1.1,
    // Взвесь дымки
    particleCount: 220,
    particleCountMobile: 120,
    particleSize: 0.35,
    particleOpacity: 0.022,
    // ==========================================================================

    // Движение объектов навстречу камере (имитация полёта сквозь пространство)
    // travelSpan заведомо больше fadeFar[1] (25), поэтому объект в момент
    // возврата гарантированно полностью прозрачен
    travelSpan: 27,
    baseTravel: 0.75,
    scrollBoost: 0.03,
    maxBoost: 14,
    // Параллакс от курсора
    parallaxX: 4.85,
    parallaxY: 1.1,
    damping: 0.06,

    // Рандом появления: каждый элемент выходит в случайный момент и в случайной
    // точке, поэтому картинка никогда не повторяется
    spawnDepth: 7,          // насколько глубоко сдвигается элемент при старте
    spawnX: 4,              // диапазон появления по X
    spawnY: 2.6,            // диапазон появления по Y
    speedMin: 0.7,          // разброс скорости полёта между элементами
    speedMax: 1.35,
    respawnSkipChance: 0.35, // вероятность, что элемент «отсидит» лишний цикл
    respawnSkip: 5,         // насколько глубоко уходит при скрипе

    // Насколько широко видна сцена по глубине. Диапазоны длинные — так объекты
    // не появляются и не исчезают рывком, а проявляются и растворяются плавно
    fadeNear: [0.3, 4.0],   // [где начинает исчезать у камеры, где полностью видна]
    fadeFar: [18, 25],      // [где начинает угасать в глубине, где полностью скрыта]
    // Случайный сдвиг этих границ у каждого объекта, в обе стороны
    fadeJitterNear: 0.8,
    fadeJitterFar: 1.5,
    // Точка возврата объекта вглубь. Держим её около нуля, где fade = 0,
    // чтобы смена позиции не была видна глазом
    recycleZ: 0.2
};

// Раскладка объектов. tone: 0 — ближний (яркий белый), 1 — далёкий (тусклый холодный).
// desktop: false — объект скрывается на мобильных.
const LAYOUT = [
    { type: 'cube',   pos: [-2.7, 0.9, -5.4], scale: 1.00, rot: [0.32, 0.62, 0.16], spin: [0.09, 0.17, 0.02], bob: 0.20, tone: 0.10 },
    { type: 'cube',   pos: [3.2, -1.5, -8.8], scale: 0.72, rot: [-0.2, 0.4, -0.35], spin: [-0.07, 0.12, 0.03], bob: 0.26, tone: 0.45 },
    { type: 'cube',   pos: [-1.3, -0.5, -2.9], scale: 0.52, rot: [0.5, -0.3, 0.2], spin: [0.16, -0.12, 0.05], bob: 0.14, tone: 0.00, desktop: false },

    { type: 'cone',   pos: [2.3, 0.7, -4.8], scale: 1.00, rot: [0.18, -0.5, 0.28], spin: [0.05, 0.11, 0.01], bob: 0.22, tone: 0.14 },
    { type: 'cone',   pos: [-3.5, -1.2, -7.6], scale: 0.82, rot: [-0.35, 0.6, -0.2], spin: [-0.04, 0.09, 0.02], bob: 0.24, tone: 0.42 },
    { type: 'cone',   pos: [1.0, 1.9, -2.4], scale: 0.46, rot: [1.25, 0.3, -0.15], spin: [0.12, 0.08, 0.03], bob: 0.12, tone: 0.05, desktop: false },

    { type: 'circle', pos: [-1.9, -1.7, -4.2], scale: 1.00, rot: [-0.55, 0.35, 0.12], spin: [0.03, 0.09, 0.02], bob: 0.18, tone: 0.08 },
    { type: 'circle', pos: [2.7, 1.6, -6.6], scale: 0.78, rot: [0.6, -0.4, 0.5], spin: [-0.02, 0.07, 0.01], bob: 0.21, tone: 0.40 },
    { type: 'circle', pos: [-0.5, 0.3, -12.5], scale: 1.70, rot: [0.3, 0.2, -0.1], spin: [0.01, 0.04, 0.01], bob: 0.30, tone: 0.75, desktop: false }
];

const MOBILE_BREAKPOINT = 768;
const canvas = document.getElementById('space-bg');

// Размер берём от самого canvas, а не от window: ширина окна включает
// полосу прокрутки, и картинка растягивалась бы на 1%
function getViewportSize() {
    return {
        width: canvas.clientWidth || window.innerWidth,
        height: canvas.clientHeight || window.innerHeight
    };
}

// Проверка поддержки WebGL — при отсутствии остаётся CSS-градиент из стилей
function isWebGLAvailable() {
    try {
        const probe = document.createElement('canvas');
        return Boolean(window.WebGLRenderingContext &&
            (probe.getContext('webgl2') || probe.getContext('webgl')));
    } catch (error) {
        return false;
    }
}

function randomBetween(min, max) {
    return min + Math.random() * (max - min);
}

// Процедурная мягкая текстура: круглый градиент для дымки и ореолов
function createGlowTexture() {
    const size = 128;
    const glowCanvas = document.createElement('canvas');
    glowCanvas.width = size;
    glowCanvas.height = size;

    const ctx = glowCanvas.getContext('2d');
    const gradient = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
    gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
    gradient.addColorStop(0.25, 'rgba(255, 255, 255, 0.45)');
    gradient.addColorStop(0.6, 'rgba(255, 255, 255, 0.12)');
    gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, size, size);

    return new THREE.CanvasTexture(glowCanvas);
}

if (canvas && isWebGLAvailable()) {
    try {
        startSpaceBackground();
    } catch (error) {
        console.warn('[space-bg] 3D фон не запущен, используется CSS-фон:', error);
    }
} else {
    console.warn('[space-bg] WebGL недоступен, используется CSS-фон');
}

function startSpaceBackground() {
    const isMobile = getViewportSize().width <= MOBILE_BREAKPOINT;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const maxPixelRatio = isMobile ? 1 : 1.75;
    const minFrameTime = isMobile ? 1000 / 40 : 0;
    const startSize = getViewportSize();

    // --- Рендерер, сцена, камера -------------------------------------------------
    const renderer = new THREE.WebGLRenderer({
        canvas,
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance'
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, maxPixelRatio));
    renderer.setSize(startSize.width, startSize.height, false);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.05;

    // Экспоненциальный туман: убирает границы мира и даёт базовую дымку
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(FOG_COLOR, CONFIG.fogDensity);

    const camera = new THREE.PerspectiveCamera(CONFIG.fov, startSize.width / startSize.height, 0.1, 80);
    camera.position.set(0, 0, 0);

    // На узких экранах вертикальный FOV шире, а сцена сжимается к центру:
    // иначе объекты уходят за границы кадра по горизонтали
    let spreadX = 1;
    let spreadY = 1;
    function applyProjection() {
        const size = getViewportSize();
        const aspect = size.width / size.height;
        camera.aspect = aspect;
        camera.fov = aspect < 1 ? CONFIG.fovNarrow : CONFIG.fov;
        camera.updateProjectionMatrix();
        spreadX = THREE.MathUtils.clamp(aspect / 1.7, 0.4, 1.2);
        spreadY = Math.max(spreadX, 0.7);
    }
    applyProjection();

    const glowTexture = createGlowTexture();
    const lineMaterials = [];
    const objects = [];

    // Вспомогательные материалы ------------------------------------------------
    function createFaceMaterial() {
        return new THREE.MeshBasicMaterial({
            color: FACE_COLOR,
            side: THREE.DoubleSide,
            transparent: true,
            opacity: 0.92,
            depthWrite: true,
            // Смещаем грань чуть назад, чтобы не было z-fighting с обводкой
            polygonOffset: true,
            polygonOffsetFactor: 1,
            polygonOffsetUnits: 1
        });
    }

    function createLineMaterial(color, opacity) {
        const material = new LineMaterial({
            color,
            linewidth: isMobile ? CONFIG.lineWidthMobile : CONFIG.lineWidth,
            worldUnits: false,
            transparent: true,
            opacity,
            blending: THREE.AdditiveBlending,
            depthWrite: false,
            depthTest: true
        });
        material.resolution.set(startSize.width, startSize.height);
        lineMaterials.push(material);
        return material;
    }

    // Неоновая обводка рёбер. LineBasicMaterial игнорирует толщину линии почти
    // на всех платформах, поэтому используем LineSegments2 (толщина в пикселях).
    function attachEdges(group, geometry, material, threshold) {
        const edgeGeometry = new THREE.EdgesGeometry(geometry, threshold);
        const lines = new LineSegments2(new LineSegmentsGeometry().fromEdgesGeometry(edgeGeometry), material);
        lines.renderOrder = 1;
        // Чуть увеличиваем, чтобы обводка не проваливалась внутрь грани
        lines.scale.setScalar(1.005);
        group.add(lines);
        return lines;
    }

    function createGlowSprite(scale) {
        const sprite = new THREE.Sprite(new THREE.SpriteMaterial({
            map: glowTexture,
            color: 0xffffff,
            blending: THREE.AdditiveBlending,
            transparent: true,
            opacity: CONFIG.glowOpacity,
            depthWrite: false,
            depthTest: false
        }));
        sprite.scale.setScalar(scale);
        sprite.renderOrder = 3;
        return sprite;
    }

    // --- Конструкторы объектов -------------------------------------------------
    function buildCube(materials) {
        const group = new THREE.Group();
        const geometry = new THREE.BoxGeometry(1.6, 1.6, 1.6);
        group.add(new THREE.Mesh(geometry, materials.face));
        attachEdges(group, geometry, materials.line, 1);
        return group;
    }

    function buildCone(materials) {
        const group = new THREE.Group();
        // Узкий радиус при большой высоте даёт именно острый конус.
        // Третий аргумент — число боковых граней: 24 многоугольный конус,
        // 6 — гексагональный (меньше граней, чётче силуэт)
        const geometry = new THREE.ConeGeometry(0.62, 2.3, 6, 1);
        group.add(new THREE.Mesh(geometry, materials.face));
        // Порог 5° убирает ложные рёбра, но оставляет силуэт и основание
        attachEdges(group, geometry, materials.line, 5);
        return group;
    }

    function buildCircle(materials) {
        const group = new THREE.Group();
        const disc = new THREE.CircleGeometry(0.85, 96);
        group.add(new THREE.Mesh(disc, materials.face));
        attachEdges(group, disc, materials.line, 1);

        // Тонкое светящееся кольцо даёт кругу объём в пространстве
        const hoop = new THREE.Mesh(
            new THREE.TorusGeometry(0.87, 0.015, 6, 120),
            new THREE.MeshBasicMaterial({
                color: materials.neonColor,
                transparent: true,
                opacity: 0.9,
                blending: THREE.AdditiveBlending,
                depthWrite: false
            })
        );
        hoop.renderOrder = 2;
        group.add(hoop);
        group.userData.extraMaterial = hoop.material;
        return group;
    }

    const builders = { cube: buildCube, cone: buildCone, circle: buildCircle };

    // --- Сборка сцены ----------------------------------------------------------
    LAYOUT.forEach((item) => {
        if (item.desktop === false && isMobile) return;

        const neonColor = new THREE.Color(NEON_NEAR).lerp(new THREE.Color(NEON_FAR), item.tone);
        const face = createFaceMaterial();
        const line = createLineMaterial(neonColor, 1);
        const group = builders[item.type]({ face, line, neonColor });

        // Разброс по глубине при старте: элементы выходят из глубины не одновременно
        const startZ = item.pos[2] - randomBetween(0, CONFIG.spawnDepth);
        group.position.set(item.pos[0] * spreadX, item.pos[1] * spreadY, startZ);
        group.rotation.set(item.rot[0], item.rot[1], item.rot[2]);
        group.scale.setScalar(item.scale);

        // Ореол масштабируется вместе с объектом через group.scale
        const glow = createGlowSprite(CONFIG.glowScale);
        glow.material.color.copy(neonColor);
        group.add(glow);

        group.userData = Object.assign(group.userData, {
            baseX: item.pos[0],
            baseY: item.pos[1],
            spin: item.spin,
            bob: item.bob,
            phase: Math.random() * Math.PI * 2,
            bobSpeed: randomBetween(0.25, 0.55),
            // Случайности: своя скорость полёта и свой темп вращения
            speed: randomBetween(CONFIG.speedMin, CONFIG.speedMax),
            spinScale: randomBetween(0.6, 1.45),
            face,
            line,
            lineBaseOpacity: 1 - item.tone * 0.4,
            glowBaseOpacity: CONFIG.glowOpacity * (1 - item.tone * 0.45),
            glow,
            extraMaterial: group.userData.extraMaterial || null
        });

        objects.push(group);
        randomizeFade(group.userData);
        scene.add(group);
    });

    // --- Дымка: медленно дрейфующие частицы -----------------------------------
    const particleCount = isMobile ? CONFIG.particleCountMobile : CONFIG.particleCount;
    const particlePositions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
        particlePositions[i * 3] = randomBetween(-16, 16);
        particlePositions[i * 3 + 1] = randomBetween(-10, 10);
        particlePositions[i * 3 + 2] = randomBetween(-20, 4);
    }

    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));

    const haze = new THREE.Points(particleGeometry, new THREE.PointsMaterial({
        map: glowTexture,
        color: 0x9db4d4,
        size: CONFIG.particleSize,
        sizeAttenuation: true,
        transparent: true,
        opacity: CONFIG.particleOpacity,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        fog: true
    }));
    scene.add(haze);

    // --- Пост-обработка: bloom для неонового свечения --------------------------
    const composer = new EffectComposer(renderer);
    composer.setPixelRatio(renderer.getPixelRatio());
    composer.setSize(startSize.width, startSize.height);
    composer.addPass(new RenderPass(scene, camera));

    const bloomPass = new UnrealBloomPass(
        new THREE.Vector2(startSize.width, startSize.height),
        isMobile ? CONFIG.bloomStrength * 0.8 : CONFIG.bloomStrength,
        CONFIG.bloomRadius,
        CONFIG.bloomThreshold
    );
    composer.addPass(bloomPass);
    composer.addPass(new OutputPass());

    // --- Взаимодействие: курсор и скролл ---------------------------------------
    const pointer = { x: 0, y: 0 };
    const pointerTarget = { x: 0, y: 0 };
    let boost = 0;
    let travelSign = 1;
    let lastScrollY = window.scrollY;
    let elapsed = 0;
    let isPaused = document.hidden;

    function onPointerMove(event) {
        const size = getViewportSize();
        pointerTarget.x = (event.clientX / size.width) * 2 - 1;
        pointerTarget.y = -((event.clientY / size.height) * 2 - 1);
    }

    function onScroll() {
        const currentY = window.scrollY;
        const delta = currentY - lastScrollY;
        lastScrollY = currentY;
        if (Math.abs(delta) < 0.01) return;
        travelSign = delta > 0 ? 1 : -1;
        boost = THREE.MathUtils.clamp(boost + Math.abs(delta) * CONFIG.scrollBoost, 0, CONFIG.maxBoost);
    }

    function onVisibilityChange() {
        isPaused = document.hidden;
    }

    window.addEventListener('pointermove', onPointerMove, { passive: true });
    window.addEventListener('scroll', onScroll, { passive: true });
    document.addEventListener('visibilitychange', onVisibilityChange);

    // У каждого объекта свои границы появления и растворения: они не
    // проявляются на одной и той же глубине, поэтому картинка живая
    function randomizeFade(data) {
        data.fadeNear = [
            CONFIG.fadeNear[0],
            CONFIG.fadeNear[1] + randomBetween(-CONFIG.fadeJitterNear, CONFIG.fadeJitterNear)
        ];
        data.fadeFar = [
            CONFIG.fadeFar[0] + randomBetween(-CONFIG.fadeJitterFar, CONFIG.fadeJitterFar),
            CONFIG.fadeFar[1]
        ];
    }

    // Плавное появление и растворение объектов по мере удаления
    function depthFade(z, data) {
        const distance = -z;
        if (distance <= 0) return 0;
        const appear = THREE.MathUtils.smoothstep(distance, data.fadeNear[0], data.fadeNear[1]);
        const vanish = 1 - THREE.MathUtils.smoothstep(distance, data.fadeFar[0], data.fadeFar[1]);
        return appear * vanish;
    }

    // --- Цикл рендера ----------------------------------------------------------
    const clock = new THREE.Clock();
    let lastFrame = 0;
    let frameRequest = 0;

    function updateScene(delta) {
        elapsed += delta;
        boost *= Math.max(0, 1 - delta * 3);
        if (boost < 0.05) travelSign = 1;

        // Камера плавно следует за курсором и медленно дышит в простое
        pointer.x += (pointerTarget.x - pointer.x) * CONFIG.damping;
        pointer.y += (pointerTarget.y - pointer.y) * CONFIG.damping;
        const driftX = Math.sin(elapsed * 0.13) * 0.3;
        const driftY = Math.sin(elapsed * 0.17 + 1.3) * 0.2;
        camera.position.x += (pointer.x * CONFIG.parallaxX + driftX - camera.position.x) * CONFIG.damping;
        camera.position.y += (pointer.y * CONFIG.parallaxY + driftY - camera.position.y) * CONFIG.damping;
        camera.lookAt(camera.position.x * 0.35, camera.position.y * 0.35, -8);

        const travel = (CONFIG.baseTravel + boost) * travelSign * delta;

        objects.forEach((object) => {
            const data = object.userData;

            object.rotation.x += data.spin[0] * data.spinScale * delta;
            object.rotation.y += data.spin[1] * data.spinScale * delta;
            object.rotation.z += data.spin[2] * data.spinScale * delta;

            object.position.z += travel * data.speed;
            object.position.y = (data.baseY + Math.sin(elapsed * data.bobSpeed + data.phase) * data.bob) * spreadY;
            object.position.x = (data.baseX + Math.cos(elapsed * data.bobSpeed * 0.7 + data.phase) * data.bob * 0.6) * spreadX;

            // Элемент подошёл к камере и стал полностью прозрачным — только
            // теперь меняем позицию, иначе перенос был бы виден как рывок
            if (object.position.z > CONFIG.recycleZ) {
                // Иногда элемент «отсиживает» лишний цикл в глубине, чтобы
                // появления не были синхронными
                const skip = Math.random() < CONFIG.respawnSkipChance ? randomBetween(0, CONFIG.respawnSkip) : 0;
                object.position.z -= CONFIG.travelSpan + skip;
                data.baseX = randomBetween(-CONFIG.spawnX, CONFIG.spawnX);
                data.baseY = randomBetween(-CONFIG.spawnY, CONFIG.spawnY);
                data.bob = randomBetween(0.12, 0.34);
                data.bobSpeed = randomBetween(0.2, 0.6);
                data.spinScale = randomBetween(0.6, 1.45);
                randomizeFade(data);
            }

            // Плавное появление вблизи и растворение вдали.
            // Считается только по глубине, поэтому первый кадр и режим
            // prefers-reduced-motion показывают ту же картинку
            const fade = depthFade(object.position.z, data);
            data.face.opacity = 0.92 * fade;
            data.line.opacity = data.lineBaseOpacity * fade;
            data.glow.material.opacity = data.glowBaseOpacity * fade;
            if (data.extraMaterial) data.extraMaterial.opacity = 0.9 * fade;
        });

        haze.rotation.y += delta * 0.012;
        haze.position.z += travel * 0.25;
        if (haze.position.z > 4) haze.position.z -= CONFIG.travelSpan;
    }

    function render() {
        composer.render();
    }

    function frame(timestamp) {
        frameRequest = requestAnimationFrame(frame);
        if (isPaused) return;
        if (minFrameTime && timestamp - lastFrame < minFrameTime) return;
        lastFrame = timestamp;

        const delta = Math.min(clock.getDelta(), 0.05);
        updateScene(delta);
        render();
    }

    // --- Ресайз ----------------------------------------------------------------
    let resizeTimer = 0;
    function onResize() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            const size = getViewportSize();

            applyProjection();

            renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, maxPixelRatio));
            renderer.setSize(size.width, size.height, false);
            composer.setPixelRatio(renderer.getPixelRatio());
            composer.setSize(size.width, size.height);

            const bufferSize = renderer.getDrawingBufferSize(new THREE.Vector2());
            lineMaterials.forEach((material) => material.resolution.set(bufferSize.x, bufferSize.y));

            if (reducedMotion) {
                updateScene(0);
                render();
            }
        }, 150);
    }

    window.addEventListener('resize', onResize, { passive: true });
    window.addEventListener('pagehide', () => {
        cancelAnimationFrame(frameRequest);
        frameRequest = 0;
        window.removeEventListener('pointermove', onPointerMove);
        window.removeEventListener('scroll', onScroll);
        window.removeEventListener('resize', onResize);
        document.removeEventListener('visibilitychange', onVisibilityChange);
        renderer.dispose();
    });

    // Возврат из bfcache — перезапускаем цикл, он был остановлен на pagehide
    window.addEventListener('pageshow', () => {
        if (frameRequest || reducedMotion) return;
        frameRequest = requestAnimationFrame(frame);
    });

    // Первый кадр: разрешение линий выставляем до рендера
    const initialBuffer = renderer.getDrawingBufferSize(new THREE.Vector2());
    lineMaterials.forEach((material) => material.resolution.set(initialBuffer.x, initialBuffer.y));
    updateScene(0);
    render();

    // Проверка в консоли: если 3D не видно, это будет здесь
    console.info(`[space-bg] 3D-фон запущен: объектов ${objects.length}, WebGL: ${renderer.getContext().getParameter(renderer.getContext().VERSION)}`);

    if (!reducedMotion) {
        frameRequest = requestAnimationFrame(frame);
    }
}
