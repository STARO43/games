import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

/* ================== БАЗА ================== */
const rand = (a, b) => a + Math.random() * (b - a);
const clamp = THREE.MathUtils.clamp;
const DEG = Math.PI / 180;

const canvas = document.getElementById('scene');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
renderer.setSize(innerWidth, innerHeight);
renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.2;

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x04060f);
scene.fog = new THREE.FogExp2(0x070b1a, 0.0042);

const ROOF_Y = 31.4;
const camera = new THREE.PerspectiveCamera(55, innerWidth / innerHeight, 0.1, 1100);
camera.position.set(0, ROOF_Y + 2.6, 42.5);
camera.lookAt(0, ROOF_Y - 2.2, -70);

addEventListener('resize', () => {
  camera.aspect = innerWidth / innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(innerWidth, innerHeight);
});

scene.add(new THREE.HemisphereLight(0x2a3f66, 0x0a0c14, 0.9));
const moonLight = new THREE.DirectionalLight(0x8fa8ff, 0.75);
moonLight.position.set(-80, 150, 60);
scene.add(moonLight);
const backGlow = new THREE.DirectionalLight(0xff2bd6, 0.12);
backGlow.position.set(30, 40, -160);
scene.add(backGlow);

/* ================== ТЕКСТУРЫ (canvas) ================== */
function canvasTex(size, draw) {
  const c = document.createElement('canvas');
  c.width = c.height = size;
  draw(c.getContext('2d'), size);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 4;
  return t;
}

// фасады с горящими окнами — 5 вариантов
function makeFacadeTextures() {
  const palette = ['#ffd77a', '#7ad7ff', '#ff7ae0', '#a0ffd0', '#ffffff'];
  const list = [];
  for (let v = 0; v < 5; v++) {
    list.push(canvasTex(256, (g, S) => {
      g.fillStyle = '#000000'; g.fillRect(0, 0, S, S);
      const cols = 7, rows = 16, cw = S / cols, rh = S / rows;
      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          if (Math.random() < 0.42) {
            g.fillStyle = palette[(Math.random() * palette.length) | 0];
            g.globalAlpha = rand(0.45, 1);
            g.fillRect(x * cw + cw * 0.22, y * rh + rh * 0.28, cw * 0.56, rh * 0.42);
          }
        }
      }
      g.globalAlpha = 1;
    }));
  }
  return list;
}
const facadeMats = makeFacadeTextures().map(t => new THREE.MeshStandardMaterial({
  color: 0x10131f, roughness: 0.75, metalness: 0.25,
  emissive: 0xffffff, emissiveMap: t, emissiveIntensity: 1.15,
}));

// земля с неоновой сеткой улиц
const groundTex = canvasTex(256, (g, S) => {
  g.fillStyle = '#0a0d16'; g.fillRect(0, 0, S, S);
  g.strokeStyle = 'rgba(0,246,255,0.45)'; g.lineWidth = 3;
  g.strokeRect(1, 1, S - 2, S - 2);
  g.strokeStyle = 'rgba(255,43,214,0.14)'; g.lineWidth = 1;
  for (let i = 1; i < 4; i++) {
    g.beginPath(); g.moveTo(i * S / 4, 0); g.lineTo(i * S / 4, S); g.stroke();
    g.beginPath(); g.moveTo(0, i * S / 4); g.lineTo(S, i * S / 4); g.stroke();
  }
});
groundTex.wrapS = groundTex.wrapT = THREE.RepeatWrapping;
groundTex.repeat.set(70, 70);

// мягкое свечение для спрайтов/частиц
const glowTex = canvasTex(128, (g, S) => {
  const grad = g.createRadialGradient(S / 2, S / 2, 0, S / 2, S / 2, S / 2);
  grad.addColorStop(0, 'rgba(255,255,255,1)');
  grad.addColorStop(0.35, 'rgba(255,255,255,0.5)');
  grad.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = grad; g.fillRect(0, 0, S, S);
});

// киберпанк-текстура шара (по мотивам generateNeonCeramic)
function makeNeonBallTexture() {
  const S = 512;
  const c = document.createElement('canvas');
  c.width = c.height = S;
  const g = c.getContext('2d');
  g.fillStyle = '#050510'; g.fillRect(0, 0, S, S);
  const colors = ['#ff00ff', '#00ffff', '#ff0055'];
  g.globalCompositeOperation = 'screen';
  g.globalAlpha = 0.85;
  for (let i = 0; i < 16; i++) {
    const x = Math.random() * S, y = Math.random() * S, r = Math.random() * 110 + 40;
    const grad = g.createRadialGradient(x, y, 0, x, y, r);
    grad.addColorStop(0, colors[(Math.random() * colors.length) | 0]);
    grad.addColorStop(1, 'transparent');
    g.fillStyle = grad;
    g.beginPath(); g.arc(x, y, r, 0, Math.PI * 2); g.fill();
  }
  g.globalCompositeOperation = 'source-over';
  g.globalAlpha = 0.12; g.fillStyle = '#ffffff';
  for (let i = 0; i < 40; i++) {
    g.beginPath(); g.arc(Math.random() * S, Math.random() * S, Math.random() * 4 + 1, 0, Math.PI * 2); g.fill();
  }
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = renderer.capabilities.getMaxAnisotropy();
  return t;
}
const ballMat = new THREE.MeshPhysicalMaterial({
  map: makeNeonBallTexture(), emissiveMap: makeNeonBallTexture(),
  emissive: 0xffffff, emissiveIntensity: 0.55,
  roughness: 0.12, metalness: 0.15, clearcoat: 1,
});

/* ================== НЕБО ================== */
{
  const n = 1300, pos = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) {
    const th = Math.random() * Math.PI * 2, ph = Math.acos(rand(0.15, 1));
    const r = 780;
    pos[i * 3] = r * Math.sin(ph) * Math.cos(th);
    pos[i * 3 + 1] = r * Math.cos(ph) + 30;
    pos[i * 3 + 2] = r * Math.sin(ph) * Math.sin(th);
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  const stars = new THREE.Points(geo, new THREE.PointsMaterial({
    color: 0xa8bdff, size: 1.7, sizeAttenuation: false, transparent: true, opacity: 0.85, fog: false,
  }));
  scene.add(stars);

  const moon = new THREE.Sprite(new THREE.SpriteMaterial({
    map: glowTex, color: 0xbfd2ff, transparent: true, opacity: 0.9, fog: false,
    blending: THREE.AdditiveBlending, depthWrite: false,
  }));
  moon.position.set(-320, 380, -560);
  moon.scale.setScalar(130);
  scene.add(moon);
}

/* ================== ГОРОД ================== */
const cityGroup = new THREE.Group();
scene.add(cityGroup);
const colliders = [];   // AABB для попаданий шаров
const blinkers = [];    // мигающие маячки на крышах
const beams = [];       // прожекторы

const ground = new THREE.Mesh(
  new THREE.PlaneGeometry(1000, 1000),
  new THREE.MeshStandardMaterial({ map: groundTex, roughness: 0.9, metalness: 0.1 }),
);
ground.rotation.x = -Math.PI / 2;
scene.add(ground);

const edgeColors = [0x00f6ff, 0xff2bd6, 0x7b2bff, 0x00ff9d];

function addBuilding(x, z, w, d, h, mat) {
  const mesh = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat || facadeMats[(Math.random() * facadeMats.length) | 0]);
  mesh.position.set(x, h / 2 + 0.2, z);
  cityGroup.add(mesh);
  colliders.push({ minX: x - w / 2, maxX: x + w / 2, minZ: z - d / 2, maxZ: z + d / 2, h });

  if (Math.random() < 0.35) {
    const e = new THREE.LineSegments(
      new THREE.EdgesGeometry(mesh.geometry),
      new THREE.LineBasicMaterial({ color: edgeColors[(Math.random() * edgeColors.length) | 0], transparent: true, opacity: 0.4 }),
    );
    e.position.copy(mesh.position);
    cityGroup.add(e);
  }
  if (h > 36) {
    const bcn = new THREE.Mesh(
      new THREE.SphereGeometry(0.5, 8, 8),
      new THREE.MeshBasicMaterial({ color: 0xff2244, fog: false }),
    );
    bcn.position.set(x, h + 0.8, z);
    cityGroup.add(bcn);
    blinkers.push({ m: bcn, ph: Math.random() * 6 });
    return { x, y: h + 0.6, z };
  }
  return null;
}

// жилая застройка (в центре ниже — коридоры для БПЛА)
for (let ix = -5; ix <= 5; ix++) {
  for (let iz = 0; iz < 12; iz++) {
    const cx = ix * 27 + rand(-4, 4);
    const cz = -16 - iz * 28 + rand(-4, 4);
    if (Math.abs(cx) < 15 && cz > -34) continue; // площадка башни игрока
    const n = Math.random() < 0.55 ? 2 : 1;
    for (let k = 0; k < n; k++) {
      const w = rand(11, 19), d = rand(11, 19);
      let h = rand(9, 28);
      if (Math.random() < 0.3 && (Math.abs(cx) > 85 || cz < -170)) h += rand(14, 36);
      addBuilding(cx + (n > 1 ? (k ? 10 : -10) : 0), cz, w, d, h);
    }
  }
}

// башня игрока + площадка
addBuilding(0, 42, 22, 22, ROOF_Y - 0.9, facadeMats[0]);
const slab = new THREE.Mesh(new THREE.BoxGeometry(26, 0.9, 26), new THREE.MeshStandardMaterial({ color: 0x161b2a, roughness: 0.6, metalness: 0.5 }));
slab.position.set(0, ROOF_Y - 0.45, 42);
scene.add(slab);
const rail = new THREE.LineSegments(
  new THREE.EdgesGeometry(new THREE.BoxGeometry(26, 1.1, 26)),
  new THREE.LineBasicMaterial({ color: 0x00f6ff, transparent: true, opacity: 0.55 }),
);
rail.position.set(0, ROOF_Y + 0.55, 42);
scene.add(rail);

// прожекторы с крыш (качающиеся конусы)
let placed = 0;
for (const c of colliders) {
  if (placed >= 3) break;
  if (c.h > 40) {
    const grp = new THREE.Group();
    grp.position.set(c.minX < 0 ? c.minX + 3 : c.maxX - 3, c.h, c.minZ + 4);
    const cone = new THREE.Mesh(
      new THREE.ConeGeometry(10, 90, 20, 1, true),
      new THREE.MeshBasicMaterial({
        color: 0x66d9ff, transparent: true, opacity: 0.06,
        blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide,
      }),
    );
    cone.position.y = 45;
    grp.add(cone);
    scene.add(grp);
    beams.push({ g: grp, ph: Math.random() * 6 });
    placed++;
  }
}

/* ================== МОДЕЛИ ================== */
const gltfLoader = new GLTFLoader();
function stripLights(root) {
  const kill = [];
  root.traverse(o => { if (o.isLight || o.isCamera) kill.push(o); });
  kill.forEach(o => o.parent && o.parent.remove(o));
}
function normalizeModel(obj, targetLen) {
  const box = new THREE.Box3().setFromObject(obj);
  const size = box.getSize(new THREE.Vector3());
  const center = box.getCenter(new THREE.Vector3());
  const s = targetLen / Math.max(size.x, size.y, size.z, 0.001);
  obj.scale.setScalar(s);
  obj.position.set(-center.x * s, -center.y * s, -center.z * s);
  const wrap = new THREE.Group();
  wrap.add(obj);
  return wrap;
}
function normalizeStanding(obj, targetH) {
  const box = new THREE.Box3().setFromObject(obj);
  const size = box.getSize(new THREE.Vector3());
  const center = box.getCenter(new THREE.Vector3());
  const s = targetH / Math.max(size.y, 0.001);
  obj.scale.setScalar(s);
  obj.position.set(-center.x * s, -box.min.y * s, -center.z * s);
  const wrap = new THREE.Group();
  wrap.add(obj);
  return wrap;
}

// --- запасные процедурные модели (если .glb не загрузился) ---
function makeFallbackDrone() {
  const g = new THREE.Group();
  const body = new THREE.MeshStandardMaterial({ color: 0x2a2f3a, roughness: 0.45, metalness: 0.7 });
  const dark = new THREE.MeshStandardMaterial({ color: 0x14161c, roughness: 0.6, metalness: 0.4 });
  const add = (geo, mat, x, y, z) => { const m = new THREE.Mesh(geo, mat); m.position.set(x, y, z); g.add(m); return m; };
  add(new THREE.ConeGeometry(0.45, 1.6, 12), body, 0, 0, -3.0);                    // нос
  add(new THREE.BoxGeometry(0.95, 0.85, 5.6), body, 0, 0, 0.4);                    // фюзеляж
  add(new THREE.BoxGeometry(9.4, 0.14, 1.5), body, 0, 0.15, 0.2);                  // крыло
  add(new THREE.BoxGeometry(3.2, 0.1, 0.9), body, 0, 0.3, 2.9);                    // хвост
  add(new THREE.BoxGeometry(0.12, 1.3, 0.9), dark, 0, 0.85, 2.95);                 // киль
  const eng = add(new THREE.SphereGeometry(0.3, 8, 8), new THREE.MeshBasicMaterial({ color: 0xff5522 }), 0, 0, 3.3);
  eng.material.fog = false;
  return g;
}
function makeFallbackSling() {
  const g = new THREE.Group();
  const m = new THREE.MeshStandardMaterial({ color: 0x1d232e, roughness: 0.35, metalness: 0.85 });
  const add = (geo, x, y, z, rz) => { const mm = new THREE.Mesh(geo, m); mm.position.set(x, y, z); if (rz) mm.rotation.z = rz; g.add(mm); };
  add(new THREE.CylinderGeometry(0.12, 0.16, 1.5, 10), 0, 0.75, 0);
  add(new THREE.CylinderGeometry(0.07, 0.09, 1.4, 8), -0.34, 1.9, 0, 0.24);
  add(new THREE.CylinderGeometry(0.07, 0.09, 1.4, 8), 0.34, 1.9, 0, -0.24);
  return g;
}

let droneProto = null;
let slingWrap = null;
const SLING_BASE = new THREE.Vector3(1.4, ROOF_Y - 0.7, 38.2);

gltfLoader.load('models/slingshot.glb', g => {
  stripLights(g.scene);
  slingWrap = normalizeStanding(g.scene, 1.7);
  slingWrap.position.copy(SLING_BASE);
  scene.add(slingWrap);
  fitSlingAnchors();
}, undefined, () => {
  slingWrap = normalizeStanding(makeFallbackSling(), 1.7);
  slingWrap.position.copy(SLING_BASE);
  scene.add(slingWrap);
  fitSlingAnchors();
});

gltfLoader.load('models/an-196_lutiy.glb', g => {
  stripLights(g.scene);
  droneProto = normalizeModel(g.scene, 10);
  addNavLights(droneProto);
}, undefined, () => { droneProto = null; });

// бортовые огни БПЛА
const navRed = new THREE.SpriteMaterial({ map: glowTex, color: 0xff3040, blending: THREE.AdditiveBlending, depthWrite: false, transparent: true, opacity: 0.9, fog: false });
const navGrn = new THREE.SpriteMaterial({ map: glowTex, color: 0x30ff70, blending: THREE.AdditiveBlending, depthWrite: false, transparent: true, opacity: 0.9, fog: false });
function addNavLights(wrap) {
  for (const [mat, x] of [[navRed, -4.2], [navGrn, 4.2]]) {
    const s = new THREE.Sprite(mat);
    s.position.set(x, 0.4, 0.4);
    s.scale.setScalar(2.0);
    wrap.add(s);
  }
}

/* ================== РОГАТКА: ТЕТИВА И КИШЕНЬ ================== */
const POUCH_REST = new THREE.Vector3(SLING_BASE.x, SLING_BASE.y + 1.2, SLING_BASE.z - 0.3);
const TIP_L = new THREE.Vector3(SLING_BASE.x - 0.45, SLING_BASE.y + 1.6, SLING_BASE.z - 1.0);
const TIP_R = new THREE.Vector3(SLING_BASE.x + 0.45, SLING_BASE.y + 1.6, SLING_BASE.z - 1.0);

// крепления тетивы — по фактическим габаритам загруженной модели
function fitSlingAnchors() {
  if (!slingWrap) return;
  const b = new THREE.Box3().setFromObject(slingWrap);
  const size = b.getSize(new THREE.Vector3());
  const cx = (b.min.x + b.max.x) / 2;
  TIP_L.set(cx - size.x * 0.26, b.max.y - size.y * 0.05, b.min.z + size.z * 0.22);
  TIP_R.set(cx + size.x * 0.26, b.max.y - size.y * 0.05, b.min.z + size.z * 0.22);
  POUCH_REST.set(cx, b.max.y - size.y * 0.38, b.min.z + size.z * 0.58);
  pouch.position.copy(POUCH_REST);
}

const pouch = new THREE.Mesh(new THREE.SphereGeometry(0.22, 10, 10), new THREE.MeshStandardMaterial({ color: 0x0b0d12, roughness: 0.8 }));
pouch.position.set(SLING_BASE.x, SLING_BASE.y + 1.2, SLING_BASE.z - 0.3);
scene.add(pouch);

function makeBand() {
  const geo = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(), new THREE.Vector3()]);
  const line = new THREE.Line(geo, new THREE.LineBasicMaterial({ color: 0x992233, transparent: true, opacity: 0.95 }));
  line.frustumCulled = false;
  scene.add(line);
  return line;
}
const bandL = makeBand(), bandR = makeBand();
function updateBands() {
  bandL.geometry.setFromPoints([TIP_L, pouch.position]);
  bandR.geometry.setFromPoints([TIP_R, pouch.position]);
}

/* ================== ЗВУК (WebAudio-синтез) ================== */
let AC = null;
function initAudio() {
  if (!AC) { try { AC = new (window.AudioContext || window.webkitAudioContext)(); } catch (e) {} }
  if (AC && AC.state === 'suspended') AC.resume();
}
function tone(f0, f1, dur, type = 'sine', vol = 0.2, delay = 0) {
  if (!AC) return;
  const t0 = AC.currentTime + delay;
  const o = AC.createOscillator(), g = AC.createGain();
  o.type = type;
  o.frequency.setValueAtTime(f0, t0);
  o.frequency.exponentialRampToValueAtTime(Math.max(f1, 1), t0 + dur);
  g.gain.setValueAtTime(vol, t0);
  g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
  o.connect(g); g.connect(AC.destination);
  o.start(t0); o.stop(t0 + dur + 0.05);
}
function noiseSfx(dur, vol, cutoff = 800, delay = 0) {
  if (!AC) return;
  const t0 = AC.currentTime + delay;
  const len = Math.max(1, (dur * AC.sampleRate) | 0);
  const buf = AC.createBuffer(1, len, AC.sampleRate);
  const d = buf.getChannelData(0);
  for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * (1 - i / len);
  const src = AC.createBufferSource(); src.buffer = buf;
  const f = AC.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = cutoff;
  const g = AC.createGain();
  g.gain.setValueAtTime(vol, t0);
  g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
  src.connect(f); f.connect(g); g.connect(AC.destination);
  src.start(t0);
}
const SFX = {
  shot() { tone(170, 55, 0.22, 'triangle', 0.5); noiseSfx(0.12, 0.3, 1600); },
  boom(big) { noiseSfx(big ? 0.75 : 0.45, big ? 0.85 : 0.55, 600); tone(95, 26, big ? 0.6 : 0.4, 'sine', 0.5); },
  hit() { tone(750, 1400, 0.12, 'square', 0.12); },
  alarm() { tone(330, 190, 0.35, 'sawtooth', 0.2); tone(330, 190, 0.35, 'sawtooth', 0.2, 0.4); },
  wave() { tone(440, 660, 0.16, 'square', 0.14); tone(660, 990, 0.2, 'square', 0.14, 0.18); },
  thud() { noiseSfx(0.2, 0.35, 300); },
};

/* ================== ВЗРЫВЫ ================== */
const systems = []; // частицы
const flashes = []; // вспышки света
const shocks = [];  // ударные волны

function explode(pos, colorA = 0x00f6ff, colorB = 0xff2bd6, big = false) {
  const N = big ? 150 : 80;
  const posArr = new Float32Array(N * 3);
  const colArr = new Float32Array(N * 3);
  const velArr = new Float32Array(N * 3);
  const ca = new THREE.Color(colorA), cb = new THREE.Color(colorB);
  for (let i = 0; i < N; i++) {
    posArr.set([pos.x, pos.y, pos.z], i * 3);
    const c = Math.random() < 0.5 ? ca : cb;
    colArr.set([c.r, c.g, c.b], i * 3);
    const v = new THREE.Vector3(rand(-1, 1), rand(-1, 1), rand(-1, 1)).normalize().multiplyScalar(rand(4, big ? 22 : 14));
    velArr.set([v.x, v.y, v.z], i * 3);
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(posArr, 3));
  geo.setAttribute('color', new THREE.BufferAttribute(colArr, 3));
  const pts = new THREE.Points(geo, new THREE.PointsMaterial({
    size: big ? 1.5 : 1.0, map: glowTex, vertexColors: true, transparent: true,
    blending: THREE.AdditiveBlending, depthWrite: false,
  }));
  pts.frustumCulled = false;
  scene.add(pts);
  systems.push({ pts, vel: velArr, life: big ? 1.15 : 0.8, max: big ? 1.15 : 0.8 });

  const light = flashLights[flashIdx++ % flashLights.length];
  light.color.set(colorA);
  light.position.copy(pos);
  light.intensity = big ? 900 : 400;
  flashes.push({ light, life: 0.28, max: 0.28, base: light.intensity });

  const shock = new THREE.Mesh(
    new THREE.SphereGeometry(1, 18, 14),
    new THREE.MeshBasicMaterial({ color: colorA, transparent: true, opacity: 0.5, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide }),
  );
  shock.position.copy(pos);
  scene.add(shock);
  shocks.push({ m: shock, life: 0.4, max: 0.4, r: big ? 12 : 7 });
}

/* ================== ШАРЫ И БАЛЛИСТИКА ================== */
const G = 10;
const BALL_R = 0.55;
const ballGeo = new THREE.SphereGeometry(BALL_R, 24, 24);
const balls = [];

function spawnBall(pos, vel) {
  const mesh = new THREE.Mesh(ballGeo, ballMat);
  mesh.position.copy(pos);
  const glow = new THREE.Sprite(new THREE.SpriteMaterial({
    map: glowTex, color: 0x8ae6ff, blending: THREE.AdditiveBlending, depthWrite: false, transparent: true, opacity: 0.75, fog: false,
  }));
  glow.scale.setScalar(2.6);
  mesh.add(glow);

  // шлейф: линия с затуханием к чёрному (additive = исчезает)
  const TP = 26;
  const tPos = new Float32Array(TP * 3);
  const tCol = new Float32Array(TP * 3);
  for (let i = 0; i < TP; i++) {
    const k = 1 - i / (TP - 1);
    tCol.set([0.0, 0.85 * k, 1.0 * k], i * 3);
    tPos.set([pos.x, pos.y, pos.z], i * 3);
  }
  const tg = new THREE.BufferGeometry();
  tg.setAttribute('position', new THREE.BufferAttribute(tPos, 3));
  tg.setAttribute('color', new THREE.BufferAttribute(tCol, 3));
  const trail = new THREE.Line(tg, new THREE.LineBasicMaterial({ vertexColors: true, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false }));
  trail.frustumCulled = false;
  scene.add(trail);

  const b = { mesh, vel: vel.clone(), trail, TP, life: 0 };
  scene.add(mesh);
  balls.push(b);
}

function removeBall(i) {
  const b = balls[i];
  scene.remove(b.mesh);
  scene.remove(b.trail);
  b.trail.geometry.dispose();
  balls.splice(i, 1);
}

function sphereHitsBuilding(p, r) {
  for (const c of colliders) {
    const cx = clamp(p.x, c.minX, c.maxX);
    const cz = clamp(p.z, c.minZ, c.maxZ);
    const cy = clamp(p.y, 0, c.h);
    const dx = p.x - cx, dy = p.y - cy, dz = p.z - cz;
    if (dx * dx + dy * dy + dz * dz < r * r) return true;
  }
  return false;
}

/* траектория-подсказка */
const TRAJ_N = 130;
const trajGeo = new THREE.BufferGeometry();
trajGeo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(TRAJ_N * 3), 3));
const trajLine = new THREE.Line(trajGeo, new THREE.LineBasicMaterial({ color: 0x00f6ff, transparent: true, opacity: 0.55, blending: THREE.AdditiveBlending, depthWrite: false }));
trajLine.frustumCulled = false;
trajLine.visible = false;
scene.add(trajLine);

/* ================== БПЛА ================== */
const drones = [];
const DRONE_HIT_R = 5.4;

// пул источников света — фиксированное число, чтобы WebGL не перекомпилировал шейдеры
const droneLights = Array.from({ length: 6 }, () => {
  const l = new THREE.PointLight(0x7fb4ff, 0, 60, 2);
  scene.add(l);
  return l;
});
const flashLights = Array.from({ length: 3 }, () => {
  const l = new THREE.PointLight(0xffffff, 0, 120, 2);
  scene.add(l);
  return l;
});
let flashIdx = 0;

function spawnDrone(wave) {
  const dirSign = Math.random() < 0.5 ? 1 : -1;
  const wrap = droneProto ? droneProto.clone() : makeFallbackDrone();
  const d = {
    wrap,
    dir: dirSign,
    speed: 11 + wave * 1.6 + rand(0, 5),
    baseY: rand(20, 42),
    z: -(40 + rand(0, 70)),
    x: 0,
    ph: rand(0, 6),
    t: 0,
    state: 'flying',
    vy: 0,
  };
  wrap.rotation.y = dirSign > 0 ? -Math.PI / 2 : Math.PI / 2;
  const xLim = 95 + Math.abs(d.z) * 0.85;
  wrap.position.set(-dirSign * xLim, d.baseY, d.z);
  d.x = wrap.position.x;
  scene.add(wrap);
  drones.push(d);
}

function removeDrone(i) {
  scene.remove(drones[i].wrap);
  drones.splice(i, 1);
}

function killDrone(d, pos) {
  explode(pos, 0x00f6ff, 0xff2bd6, true);
  SFX.boom(true);
  SFX.hit();
  d.state = 'falling';
  d.vy = 2;
  state.kills++;
  state.score += 150;
  updateHUD();
}

/* ================== СОСТОЯНИЕ / HUD / ВОЛНЫ ================== */
const $ = id => document.getElementById(id);
const ui = {
  score: $('score'), best: $('best'), wave: $('wave'), targets: $('targets'),
  lives: $('lives'), msg: $('msg'), hint: $('hint'), damage: $('damage'),
  startOv: $('startOverlay'), overOv: $('overOverlay'), final: $('finalStats'),
};

let best = 0;
try { best = parseInt(localStorage.getItem('uavBest') || '0') || 0; } catch (e) {}
ui.best.textContent = best;

const state = {
  mode: 'menu',           // menu | playing | over
  score: 0, lives: 3, wave: 0, kills: 0,
  toSpawn: 0, spawnT: 0, nextWaveT: 0, shotCd: 0,
};

function showMsg(text) {
  ui.msg.textContent = text;
  ui.msg.classList.remove('show');
  void ui.msg.offsetWidth;
  ui.msg.classList.add('show');
}

function updateHUD() {
  ui.score.textContent = state.score;
  ui.wave.textContent = Math.max(state.wave, 1);
  ui.targets.textContent = drones.filter(d => d.state === 'flying').length + state.toSpawn;
  ui.lives.textContent = '♥'.repeat(Math.max(state.lives, 0)) || '—';
}

function startWave() {
  state.wave++;
  state.toSpawn = 2 + state.wave;
  state.spawnT = 1.4;
  showMsg('ВОЛНА ' + state.wave);
  SFX.wave();
  updateHUD();
}

function startGame() {
  for (let i = drones.length - 1; i >= 0; i--) removeDrone(i);
  for (let i = balls.length - 1; i >= 0; i--) removeBall(i);
  state.mode = 'playing';
  state.score = 0; state.lives = 3; state.wave = 0; state.kills = 0;
  state.toSpawn = 0; state.nextWaveT = 0; state.shotCd = 0;
  ui.hint.classList.remove('hidden');
  updateHUD();
  startWave();
}

function gameOver() {
  state.mode = 'over';
  if (state.score > best) {
    best = state.score;
    try { localStorage.setItem('uavBest', String(best)); } catch (e) {}
    ui.best.textContent = best;
  }
  ui.final.textContent = `СЧЁТ ${state.score} · ВОЛНА ${state.wave} · СБИТО ${state.kills}`;
  ui.overOv.classList.remove('hidden');
}

function droneEscaped() {
  state.lives--;
  updateHUD();
  SFX.alarm();
  ui.damage.classList.add('on');
  setTimeout(() => ui.damage.classList.remove('on'), 350);
  if (state.lives <= 0) {
    gameOver();
  } else {
    showMsg('ЦЕЛЬ ПРОРВАЛАСЬ −♥');
  }
}

$('startBtn').addEventListener('click', () => {
  initAudio();
  ui.startOv.classList.add('hidden');
  startGame();
});
$('restartBtn').addEventListener('click', () => {
  initAudio();
  ui.overOv.classList.add('hidden');
  startGame();
});

/* ================== ПРИЦЕЛИВАНИЕ ================== */
const YAX = new THREE.Vector3(0, 1, 0);
const XAX = new THREE.Vector3(1, 0, 0);
const aim = { active: false, sx: 0, sy: 0, cx: 0, cy: 0, dir: new THREE.Vector3(), power: 0, speed: 0 };
let hintHidden = false;

function computeAim() {
  const dx = aim.sx - aim.cx;          // тянем влево → целимся вправо
  const dy = aim.cy - aim.sy;          // тянем вниз → сила и высота
  aim.power = clamp(Math.hypot(dx, dy) / 250, 0, 1);
  const pitch = (5 + 65 * clamp(dy / 220, 0, 1)) * DEG;
  const yaw = -dx * 0.0028;
  aim.speed = 30 + 55 * aim.power;
  aim.dir.set(0, 0, -1).applyAxisAngle(YAX, yaw).applyAxisAngle(XAX, pitch);
}

function fire() {
  if (aim.power < 0.05) return;
  const spawn = POUCH_REST.clone().addScaledVector(aim.dir, 1.0);
  spawnBall(spawn, aim.dir.clone().multiplyScalar(aim.speed));
  state.shotCd = 0.35;
  SFX.shot();
  if (!hintHidden) { hintHidden = true; ui.hint.classList.add('hidden'); }
}

canvas.addEventListener('pointerdown', e => {
  initAudio();
  if (state.mode !== 'playing' || state.shotCd > 0) return;
  aim.active = true;
  aim.sx = aim.cx = e.clientX;
  aim.sy = aim.cy = e.clientY;
});
addEventListener('pointermove', e => {
  if (!aim.active) return;
  aim.cx = e.clientX;
  aim.cy = e.clientY;
  computeAim();
});
addEventListener('pointerup', () => {
  if (!aim.active) return;
  aim.active = false;
  trajLine.visible = false;
  fire();
  aim.power = 0;
});
addEventListener('pointercancel', () => { aim.active = false; trajLine.visible = false; aim.power = 0; });

/* ================== ГЛАВНЫЙ ЦИКЛ ================== */
updateBands();
updateHUD();

const clock = new THREE.Clock();
let simT = 0;

renderer.setAnimationLoop(() => {
  const dt = Math.min(clock.getDelta(), 0.05);
  simT += dt;

  tick(dt);

  renderer.render(scene, camera);
});

function tick(dt) {
  /* --- спавн волн --- */
  if (state.mode === 'playing') {
    state.shotCd = Math.max(0, state.shotCd - dt);
    if (state.toSpawn > 0) {
      state.spawnT -= dt;
      if (state.spawnT <= 0) {
        spawnDrone(state.wave);
        state.toSpawn--;
        state.spawnT = Math.max(0.6, rand(1.0, 2.2) - state.wave * 0.06);
        updateHUD();
      }
    } else if (drones.length === 0) {
      state.nextWaveT += dt;
      if (state.nextWaveT > 2.2) { state.nextWaveT = 0; state.score += 100 * state.wave; updateHUD(); startWave(); }
    }
  }

  /* --- прицеливание: кишень + тетива + траектория --- */
  if (aim.active && aim.power > 0.03) {
    pouch.position.copy(POUCH_REST).addScaledVector(aim.dir, -(0.25 + 0.85 * aim.power));
    const p0 = POUCH_REST.clone().addScaledVector(aim.dir, 1.0);
    const v = aim.dir.clone().multiplyScalar(aim.speed);
    const arr = trajGeo.attributes.position.array;
    let n = 0;
    for (let i = 0; i < TRAJ_N; i++) {
      v.y -= G * (1 / 30);
      p0.addScaledVector(v, 1 / 30);
      arr[n * 3] = p0.x; arr[n * 3 + 1] = p0.y; arr[n * 3 + 2] = p0.z;
      n++;
      if (p0.y < 0.5) break;
    }
    trajGeo.setDrawRange(0, n);
    trajGeo.attributes.position.needsUpdate = true;
    trajLine.visible = true;
  } else {
    pouch.position.lerp(POUCH_REST, 1 - Math.exp(-14 * dt));
    trajLine.visible = false;
  }
  updateBands();

  /* --- шары --- */
  for (let i = balls.length - 1; i >= 0; i--) {
    const b = balls[i];
    b.life += dt;
    b.vel.y -= G * dt;
    b.mesh.position.addScaledVector(b.vel, dt);
    b.mesh.rotation.x -= 7 * dt;
    b.mesh.rotation.y += 3 * dt;

    const p = b.mesh.position;
    // шлейф — сдвигаем точки
    const arr = b.trail.geometry.attributes.position.array;
    for (let k = b.TP - 1; k > 0; k--) {
      arr[k * 3] = arr[(k - 1) * 3]; arr[k * 3 + 1] = arr[(k - 1) * 3 + 1]; arr[k * 3 + 2] = arr[(k - 1) * 3 + 2];
    }
    arr[0] = p.x; arr[1] = p.y; arr[2] = p.z;
    b.trail.geometry.attributes.position.needsUpdate = true;

    let dead = false;

    // попадание в БПЛА
    for (let j = drones.length - 1; j >= 0; j--) {
      const d = drones[j];
      if (d.state !== 'flying') continue;
      if (p.distanceToSquared(d.wrap.position) < DRONE_HIT_R * DRONE_HIT_R) {
        killDrone(d, d.wrap.position.clone());
        dead = true;
        break;
      }
    }

    // здания
    if (!dead && sphereHitsBuilding(p, BALL_R + 0.3)) {
      explode(p.clone(), 0xffb84d, 0xff5522, false);
      SFX.thud();
      dead = true;
    }
    // земля
    if (!dead && p.y < 0.5) {
      explode(p.clone(), 0x4466ff, 0x22aaff, false);
      SFX.thud();
      dead = true;
    }
    if (!dead && (b.life > 8 || Math.abs(p.x) > 460 || p.z < -460 || p.z > 460 || p.y > 320)) dead = true;

    if (dead) removeBall(i);
  }

  /* --- БПЛА --- */
  let li = 0;
  for (let i = drones.length - 1; i >= 0; i--) {
    const d = drones[i];
    if (d.state === 'flying') {
      d.t += dt;
      d.x += d.dir * d.speed * dt;
      d.wrap.position.set(d.x, d.baseY + Math.sin(d.t * 1.8 + d.ph) * 0.9, d.z);
      d.wrap.rotation.z = -d.dir * 0.07 + Math.sin(d.t * 2.3 + d.ph) * 0.05;
      d.wrap.rotation.x = Math.sin(d.t * 1.4 + d.ph) * 0.04;
      const dl = droneLights[li++];
      if (dl) { dl.position.copy(d.wrap.position).y += 3; dl.intensity = 80; }
      if ((d.dir > 0 && d.x > 90 + Math.abs(d.z) * 0.85) || (d.dir < 0 && d.x < -(90 + Math.abs(d.z) * 0.85))) {
        removeDrone(i);
        if (state.mode === 'playing') droneEscaped();
      }
    } else { // падение
      d.vy -= 26 * dt;
      d.wrap.position.y += d.vy * dt;
      d.wrap.position.x += d.dir * d.speed * 0.4 * dt;
      d.wrap.rotation.z += 2.5 * dt;
      if (d.wrap.position.y < 1.2) {
        explode(d.wrap.position.clone(), 0xffb84d, 0xff5522, true);
        SFX.boom(true);
        removeDrone(i);
      }
    }
  }
  for (; li < droneLights.length; li++) droneLights[li].intensity = 0;

  /* --- мигающие маячки --- */
  for (const b of blinkers) b.m.scale.setScalar(1 + 0.55 * Math.sin(simT * 3 + b.ph) > 1.2 ? 1.4 : 0.6);

  /* --- прожекторы --- */
  for (const b of beams) {
    b.g.rotation.z = Math.sin(simT * 0.32 + b.ph) * 0.4;
    b.g.rotation.x = Math.cos(simT * 0.23 + b.ph) * 0.3;
  }

  /* --- частицы --- */
  for (let i = systems.length - 1; i >= 0; i--) {
    const s = systems[i];
    s.life -= dt;
    if (s.life <= 0) {
      scene.remove(s.pts);
      s.pts.geometry.dispose();
      s.pts.material.dispose();
      systems.splice(i, 1);
      continue;
    }
    const pos = s.pts.geometry.attributes.position.array;
    for (let k = 0; k < pos.length; k += 3) {
      pos[k] += s.vel[k] * dt;
      pos[k + 1] += s.vel[k + 1] * dt;
      pos[k + 2] += s.vel[k + 2] * dt;
      s.vel[k + 1] -= 7 * dt;
      s.vel[k] *= 0.985; s.vel[k + 1] *= 0.985; s.vel[k + 2] *= 0.985;
    }
    s.pts.geometry.attributes.position.needsUpdate = true;
    s.pts.material.opacity = s.life / s.max;
  }
  for (let i = flashes.length - 1; i >= 0; i--) {
    const f = flashes[i];
    f.life -= dt;
    f.light.intensity = f.life <= 0 ? 0 : f.base * (f.life / f.max);
    if (f.life <= 0) flashes.splice(i, 1);
  }
  for (let i = shocks.length - 1; i >= 0; i--) {
    const s = shocks[i];
    s.life -= dt;
    if (s.life <= 0) {
      scene.remove(s.m);
      s.m.geometry.dispose();
      s.m.material.dispose();
      shocks.splice(i, 1);
      continue;
    }
    const k = 1 - s.life / s.max;
    s.m.scale.setScalar(1 + s.r * k);
    s.m.material.opacity = 0.5 * (1 - k);
  }

  /* --- HUD: целей в небе --- */
  if (state.mode === 'playing') ui.targets.textContent = drones.filter(d => d.state === 'flying').length + state.toSpawn;
}
