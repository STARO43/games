/* ============================================================
   НЕОН-СИТИ 2.0 — ПВО на рогатке
   Three.js r160 (CDN) · models/slingshot.glb · models/an-196_lutiy.glb
   ============================================================ */
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

/* ---------- утилиты ---------- */
const rand = (a, b) => a + Math.random() * (b - a);
const randi = (a, b) => Math.floor(rand(a, b + 1));
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const lerp = (a, b, t) => a + (b - a) * t;
const V3 = (x, y, z) => new THREE.Vector3(x, y, z);

/* ---------- рендер ---------- */
const canvas = document.getElementById('scene');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
renderer.setSize(innerWidth, innerHeight);
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.12;

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x05060f);
scene.fog = new THREE.FogExp2(0x05060f, 0.0034);

const camera = new THREE.PerspectiveCamera(72, innerWidth / innerHeight, 0.1, 1400);
camera.rotation.order = 'YXZ';
scene.add(camera);

addEventListener('resize', () => {
  camera.aspect = innerWidth / innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(innerWidth, innerHeight);
});

/* ---------- свет ---------- */
const hemi = new THREE.HemisphereLight(0x35508a, 0x0a0a16, 0.55);
scene.add(hemi);
const moonLight = new THREE.DirectionalLight(0x8fb4ff, 0.4);
moonLight.position.set(-160, 240, -180);
scene.add(moonLight);

/* ---------- общие текстуры ---------- */
function canvasTex(w, h, draw) {
  const c = document.createElement('canvas'); c.width = w; c.height = h;
  draw(c.getContext('2d'), w, h);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 4;
  return t;
}
const glowTex = canvasTex(128, 128, (ctx) => {
  const g = ctx.createRadialGradient(64, 64, 2, 64, 64, 62);
  g.addColorStop(0, 'rgba(255,255,255,1)');
  g.addColorStop(0.35, 'rgba(255,255,255,.45)');
  g.addColorStop(1, 'rgba(255,255,255,0)');
  ctx.fillStyle = g; ctx.fillRect(0, 0, 128, 128);
});
glowTex.colorSpace = THREE.SRGBColorSpace;

const NEON = ['#00f0ff', '#ff2bd6', '#ffb43a', '#7cff4f', '#ff5a3c', '#5a7bff'];

/* ---------- фасады зданий (карта + эмиссив) ---------- */
function makeFacade(cols, rows, palette) {
  const W = 256, H = 512;
  const lit = [];
  const c1 = document.createElement('canvas'); c1.width = W; c1.height = H;
  const x1 = c1.getContext('2d');
  x1.fillStyle = '#0c0f18'; x1.fillRect(0, 0, W, H);
  const c2 = document.createElement('canvas'); c2.width = W; c2.height = H;
  const x2 = c2.getContext('2d');
  x2.fillStyle = '#000'; x2.fillRect(0, 0, W, H);
  const cw = W / cols, ch = H / rows;
  for (let i = 0; i < cols; i++) for (let j = 0; j < rows; j++) {
    const x = i * cw + cw * 0.18, y = j * ch + ch * 0.2, w = cw * 0.62, h = ch * 0.55;
    const on = Math.random() < 0.34;
    x1.fillStyle = on ? '#3a4a66' : '#151a26';
    x1.fillRect(x, y, w, h);
    if (on) {
      const col = palette[randi(0, palette.length - 1)];
      x2.fillStyle = col;
      x2.globalAlpha = rand(0.5, 1);
      x2.fillRect(x, y, w, h);
      x2.globalAlpha = 1;
      if (Math.random() < 0.2) lit.push([x, y, w, h, col]);
    }
  }
  const map = new THREE.CanvasTexture(c1); map.colorSpace = THREE.SRGBColorSpace;
  const em = new THREE.CanvasTexture(c2); em.colorSpace = THREE.SRGBColorSpace;
  return { map, em };
}
const facades = [];
const palettes = [
  ['#00f0ff', '#0ea5c9', '#0d6a8a'],
  ['#ff2bd6', '#c92bb0', '#8a1b7a'],
  ['#ffb43a', '#ff8a3c', '#c96a20'],
  ['#7cff4f', '#3cff9e', '#2bd67c'],
  ['#5a7bff', '#9a5aff', '#ff5a3c'],
];
for (const rows of [26, 44, 64]) for (const p of palettes) facades.push(makeFacade(7, rows, p));

/* ---------- город ---------- */
const city = new THREE.Group();
scene.add(city);
const blockGeo = new THREE.BoxGeometry(1, 1, 1);
const trimMats = NEON.map(c => new THREE.MeshBasicMaterial({ color: c }));
const signTexts = ['НЕОН', 'СУШИ 24/7', 'КАЗИНО', 'ОТЕЛЬ 夢', '2077', 'ДРОН-ТАКСИ', 'РАМЕН', 'ПВО-РТИ'];

function makeSignTex(txt, col) {
  return canvasTex(512, 160, (ctx) => {
    ctx.fillStyle = 'rgba(0,0,0,0)'; ctx.clearRect(0, 0, 512, 160);
    ctx.font = 'bold 84px Arial';
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.shadowColor = col; ctx.shadowBlur = 34;
    ctx.fillStyle = col; ctx.fillText(txt, 256, 84);
    ctx.shadowBlur = 10; ctx.fillStyle = '#ffffff';
    ctx.globalAlpha = 0.85; ctx.fillText(txt, 256, 84);
  });
}
let signPlanes = 0;
function addSign(b, w, h, d, x, z) {
  if (signPlanes > 26 || h < 22 || Math.random() < 0.55) return;
  const col = NEON[randi(0, NEON.length - 1)];
  const tex = makeSignTex(signTexts[randi(0, signTexts.length - 1)], col);
  const m = new THREE.Mesh(
    new THREE.PlaneGeometry(1, 1),
    new THREE.MeshBasicMaterial({ map: tex, transparent: true, depthWrite: false, side: THREE.FrontSide })
  );
  const sw = clamp(w * rand(0.7, 1.1), 6, 16), sh = sw * 160 / 512;
  m.scale.set(sw, sh, 1);
  const side = randi(0, 3), yy = rand(10, Math.max(12, h - 8));
  if (side === 0) { m.position.set(x, yy, z - d / 2 - 0.3); }
  else if (side === 1) { m.position.set(x, yy, z + d / 2 + 0.3); m.rotation.y = Math.PI; }
  else if (side === 2) { m.position.set(x - w / 2 - 0.3, yy, z); m.rotation.y = Math.PI / 2; }
  else { m.position.set(x + w / 2 + 0.3, yy, z); m.rotation.y = -Math.PI / 2; }
  city.add(m); signPlanes++;
}

function buildCity() {
  const step = 30;
  for (let gx = -280; gx <= 280; gx += step) {
    for (let gz = -280; gz <= 280; gz += step) {
      const px = gx + rand(-4, 4), pz = gz + rand(-4, 4);
      if (pz > 40 && Math.abs(px) < 60) continue;                    // площадь игрока
      if (Math.random() < 0.14) continue;                            // пустыри
      const dc = Math.hypot(px, pz) / 300;
      const h = clamp(rand(14, 34) + (1 - dc) * rand(20, 72), 14, 108);
      const w = rand(14, 22), d = rand(14, 22);
      const fi = (h > 70 ? 2 : h > 38 ? 1 : 0) * palettes.length + randi(0, palettes.length - 1);
      const f = facades[Math.min(fi, facades.length - 1)];
      const mat = new THREE.MeshStandardMaterial({
        map: f.map, emissiveMap: f.em, emissive: 0xffffff, emissiveIntensity: 0.85,
        roughness: 0.85, metalness: 0.15,
      });
      const b = new THREE.Mesh(blockGeo, mat);
      b.scale.set(w, h, d); b.position.set(px, h / 2, pz);
      city.add(b);
      if (Math.random() < 0.4) {                                    // неоновая кромка крыши
        const trim = new THREE.Mesh(blockGeo, trimMats[randi(0, trimMats.length - 1)]);
        trim.scale.set(w * 1.02, 0.28, d * 1.02);
        trim.position.set(px, h + 0.1, pz);
        city.add(trim);
      }
      if (h > 78) {                                                 // проблесковые маячки
        const s = new THREE.Sprite(new THREE.SpriteMaterial({
          map: glowTex, color: 0xff2038, transparent: true, depthWrite: false,
        }));
        s.position.set(px, h + 2.2, pz); s.scale.setScalar(2.6);
        s.userData.ph = rand(0, 6); city.add(s); blinkers.push(s);
      }
      addSign(b, w, h, d, px, pz);
    }
  }
}
const blinkers = [];
buildCity();

/* мокрый асфальт + цветные «отражения» */
const ground = new THREE.Mesh(
  new THREE.PlaneGeometry(1500, 1500),
  new THREE.MeshStandardMaterial({ color: 0x05070c, roughness: 0.16, metalness: 0.75 })
);
ground.rotation.x = -Math.PI / 2;
scene.add(ground);
const streetCols = [0x00c8dc, 0xd42bb0, 0x8a5aff, 0x35b0ff, 0xff7a3c, 0x00c8dc];
for (let i = 0; i < 9; i++) {
  const p = new THREE.PointLight(streetCols[i % streetCols.length], 220, 190, 1.6);
  p.position.set(rand(-240, 240), 8, rand(-240, 240));
  scene.add(p);
}

/* гигантский экран в центре (анимированный) */
const bigCanvas = document.createElement('canvas'); bigCanvas.width = 512; bigCanvas.height = 256;
const bigCtx = bigCanvas.getContext('2d');
const bigTex = new THREE.CanvasTexture(bigCanvas); bigTex.colorSpace = THREE.SRGBColorSpace;
const bigScreen = new THREE.Mesh(
  new THREE.PlaneGeometry(70, 35),
  new THREE.MeshBasicMaterial({ map: bigTex, transparent: false })
);
bigScreen.position.set(0, 92, -180);
scene.add(bigScreen);
let bigT = 0;
function drawBig(t) {
  const ctx = bigCtx;
  ctx.fillStyle = '#03040a'; ctx.fillRect(0, 0, 512, 256);
  const words = ['НЕОН-СИТИ', '///', 'СБОЙ БПЛА', '///', 'ГОРОД-7 ОНЛАЙН', '///', 'ВОЛНА ' + (state ? state.wave : 1)];
  ctx.font = 'bold 54px Arial'; ctx.textBaseline = 'middle';
  const off = (t * 90) % 900;
  for (let i = 0; i < words.length; i++) {
    ctx.shadowColor = NEON[i % NEON.length]; ctx.shadowBlur = 26;
    ctx.fillStyle = NEON[i % NEON.length];
    ctx.fillText(words[i], ((i * 210 - off) % 900 + 900) % 900 - 190, 84);
    ctx.fillText(words[i], ((i * 210 - off - 450) % 900 + 900) % 900 - 190, 170);
  }
  if (Math.random() < 0.25) {                                       // глитч-полосы
    ctx.shadowBlur = 0; ctx.fillStyle = 'rgba(0,240,255,.28)';
    ctx.fillRect(0, Math.random() * 256, 512, rand(2, 9));
  }
  bigTex.needsUpdate = true;
}

/* голограммы-кольца у небоскрёбов */
const holos = [];
for (let i = 0; i < 3; i++) {
  const ring = new THREE.Mesh(
    new THREE.TorusGeometry(rand(9, 14), 0.55, 8, 40),
    new THREE.MeshBasicMaterial({ color: NEON[randi(0, 5)], transparent: true, opacity: 0.5, blending: THREE.AdditiveBlending, depthWrite: false })
  );
  ring.position.set(rand(-190, 190), rand(55, 95), rand(-190, 190));
  ring.rotation.x = Math.PI / 2;
  scene.add(ring); holos.push(ring);
}

/* далёкие дежурные прожекторы */
const decorBeams = [];
for (let i = 0; i < 3; i++) {
  const len = 230;
  const geo = new THREE.CylinderGeometry(0.4, 9, len, 12, 1, true);
  geo.translate(0, len / 2, 0);
  const g = new THREE.Group();
  const cone = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({
    color: 0x9fc8ff, transparent: true, opacity: 0.05,
    blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide, fog: false,
  }));
  g.add(cone);
  g.position.set(rand(-220, 220), 0, rand(-260, -120));
  scene.add(g); decorBeams.push({ g, ph: rand(0, 6), sp: rand(0.12, 0.3) * (Math.random() < 0.5 ? 1 : -1) });
}

/* летающие авто */
const cars = [];
const carBody = new THREE.MeshBasicMaterial({ color: 0xffd9a0 });
for (let i = 0; i < 12; i++) {
  const g = new THREE.Group();
  const m = new THREE.Mesh(new THREE.BoxGeometry(2.4, 0.35, 0.9), carBody);
  g.add(m);
  const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTex, color: 0xbfe8ff, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending }));
  s.position.set(-1.6, 0, 0); s.scale.setScalar(1.6); g.add(s);
  const dir = Math.random() < 0.5 ? 1 : -1;
  g.position.set(rand(-300, 300), rand(26, 78), rand(-260, 260));
  g.userData.v = dir * rand(24, 46);
  scene.add(g); cars.push(g);
}

/* звёзды + луна */
{
  const n = 700, pos = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) {
    const a = rand(0, Math.PI * 2), e = rand(0.12, 1.2), r = 900;
    pos[i * 3] = Math.cos(a) * Math.cos(e) * r;
    pos[i * 3 + 1] = Math.sin(e) * r;
    pos[i * 3 + 2] = Math.sin(a) * Math.cos(e) * r;
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  scene.add(new THREE.Points(g, new THREE.PointsMaterial({ color: 0xbdd2ff, size: 2.4, sizeAttenuation: false, fog: false })));
  const moon = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTex, color: 0xcfe0ff, fog: false, depthWrite: false, transparent: true }));
  moon.position.set(-260, 330, -700); moon.scale.setScalar(160);
  scene.add(moon);
}

/* ---------- дождь ---------- */
const RAIN_N = 1900;
const rainPos = new Float32Array(RAIN_N * 6);
const rainV = new Float32Array(RAIN_N);
function rainReset(i, top) {
  const x = rand(-150, 150), z = rand(-190, 90), y = top ? rand(30, 130) : 128;
  rainPos[i * 6] = x; rainPos[i * 6 + 1] = y; rainPos[i * 6 + 2] = z;
  rainPos[i * 6 + 3] = x - 1.1; rainPos[i * 6 + 4] = y + 4.6; rainPos[i * 6 + 5] = z + 0.15;
  rainV[i] = rand(72, 98);
}
for (let i = 0; i < RAIN_N; i++) rainReset(i, true);
const rainGeo = new THREE.BufferGeometry();
rainGeo.setAttribute('position', new THREE.BufferAttribute(rainPos, 3));
const rain = new THREE.LineSegments(rainGeo, new THREE.LineBasicMaterial({
  color: 0x86a8e8, transparent: true, opacity: 0.42, blending: THREE.AdditiveBlending, depthWrite: false,
}));
rain.frustumCulled = false;
scene.add(rain);

/* ---------- молния ---------- */
const flashEl = document.getElementById('flash');
let boltT = rand(4, 9), boltSeq = 0, boltTimer = 0;
function lightning(dt) {
  boltT -= dt;
  if (boltT <= 0) { boltT = rand(6, 14); boltSeq = 3; boltTimer = 0; }
  if (boltSeq > 0) {
    boltTimer -= dt;
    if (boltTimer <= 0) {
      boltSeq--;
      boltTimer = rand(0.08, 0.22);
      flashEl.style.opacity = String(rand(0.12, 0.34));
      hemi.intensity = 1.7;
      setTimeout(() => { flashEl.style.opacity = '0'; hemi.intensity = 0.55; }, 90);
      if (boltSeq === 2) sfx.thunder();
    }
  }
}

/* ---------- позиция игрока ---------- */
const ROOF_Y = 46;
const PLAYER = V3(0, ROOF_Y, 92);
camera.position.set(0, ROOF_Y + 1.7, PLAYER.z);
{
  const plinth = new THREE.Mesh(blockGeo, new THREE.MeshStandardMaterial({ color: 0x10141f, roughness: 0.9 }));
  plinth.scale.set(26, ROOF_Y, 22); plinth.position.set(PLAYER.x, ROOF_Y / 2, PLAYER.z + 4);
  scene.add(plinth);
  const slab = new THREE.Mesh(blockGeo, new THREE.MeshStandardMaterial({ color: 0x1a2130, roughness: 0.7, metalness: 0.3 }));
  slab.scale.set(30, 0.7, 26); slab.position.set(PLAYER.x, ROOF_Y - 0.35, PLAYER.z + 4);
  scene.add(slab);
  const railMat = new THREE.MeshStandardMaterial({ color: 0x2a3244, roughness: 0.5, metalness: 0.8 });
  for (const [dx, dz, sw, sd] of [[0, -10.8, 30, 0.3], [-14.8, 3, 0.3, 26], [14.8, 3, 0.3, 26]]) {
    const r = new THREE.Mesh(blockGeo, railMat);
    r.scale.set(sw, 1.1, sd); r.position.set(PLAYER.x + dx, ROOF_Y + 0.2, PLAYER.z + 4 + dz);
    scene.add(r);
  }
  const trim = new THREE.Mesh(blockGeo, trimMats[0]);
  trim.scale.set(30.3, 0.22, 26.3); trim.position.set(PLAYER.x, ROOF_Y + 0.02, PLAYER.z + 4);
  scene.add(trim);
}

/* ---------- модели ---------- */
const gltfLoader = new GLTFLoader();
function stripLights(root) {
  const kill = [];
  root.traverse(o => { if (o.isLight || o.isCamera) kill.push(o); });
  kill.forEach(o => o.parent && o.parent.remove(o));
}
function normalize(obj, targetLen) {
  const box = new THREE.Box3().setFromObject(obj);
  const size = box.getSize(new THREE.Vector3());
  const c = box.getCenter(new THREE.Vector3());
  const s = targetLen / Math.max(size.x, size.y, size.z, 0.001);
  obj.scale.setScalar(s);
  obj.position.set(-c.x * s, -c.y * s, -c.z * s);
  const wrap = new THREE.Group(); wrap.add(obj);
  return wrap;
}
function normalizeStanding(obj, targetH) {
  const box = new THREE.Box3().setFromObject(obj);
  const size = box.getSize(new THREE.Vector3());
  const c = box.getCenter(new THREE.Vector3());
  const s = targetH / Math.max(size.y, 0.001);
  obj.scale.setScalar(s);
  obj.position.set(-c.x * s, -box.min.y * s, -c.z * s);
  const wrap = new THREE.Group(); wrap.add(obj);
  return wrap;
}

function makeFallbackDrone() {
  const g = new THREE.Group();
  const body = new THREE.MeshStandardMaterial({ color: 0x2a2f3a, roughness: 0.45, metalness: 0.7 });
  const dark = new THREE.MeshStandardMaterial({ color: 0x14161c, roughness: 0.6, metalness: 0.4 });
  const add = (geo, mat, x, y, z) => { const m = new THREE.Mesh(geo, mat); m.position.set(x, y, z); g.add(m); return m; };
  add(new THREE.ConeGeometry(0.45, 1.6, 12), body, 0, 0, -3.0);
  add(new THREE.BoxGeometry(0.95, 0.85, 5.6), body, 0, 0, 0.4);
  add(new THREE.BoxGeometry(9.4, 0.14, 1.5), body, 0, 0.15, 0.2);
  add(new THREE.BoxGeometry(3.2, 0.1, 0.9), body, 0, 0.3, 2.9);
  add(new THREE.BoxGeometry(0.12, 1.3, 0.9), dark, 0, 0.85, 2.95);
  const eng = add(new THREE.SphereGeometry(0.3, 8, 8), new THREE.MeshBasicMaterial({ color: 0xff5522 }), 0, 0, 3.3);
  eng.material.fog = false;
  return g;
}

/* кибер-шар (по мотивам «Крутейшие шары»: Neon Ceramic) */
const ballTex = canvasTex(512, 512, (ctx) => {
  ctx.fillStyle = '#050510'; ctx.fillRect(0, 0, 512, 512);
  const cols = ['#ff00ff', '#00ffff', '#ff0055'];
  ctx.globalCompositeOperation = 'screen'; ctx.globalAlpha = 0.85;
  for (let i = 0; i < 14; i++) {
    const x = Math.random() * 512, y = Math.random() * 512, r = rand(30, 70);
    const g = ctx.createRadialGradient(x, y, 0, x, y, r);
    g.addColorStop(0, cols[randi(0, 2)]); g.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = g; ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fill();
  }
  ctx.globalCompositeOperation = 'source-over';
  ctx.strokeStyle = '#00ffff'; ctx.lineWidth = 1.4; ctx.globalAlpha = 0.65;
  for (let i = 0; i < 26; i++) {                                    // микросхемы
    ctx.beginPath();
    let x = Math.random() * 512, y = Math.random() * 512;
    ctx.moveTo(x, y);
    for (let k = 0; k < 4; k++) { x += rand(-90, 90); y += rand(-90, 90); ctx.lineTo(x, y); }
    ctx.stroke();
  }
  ctx.fillStyle = '#ffffff'; ctx.globalAlpha = 0.5;
  for (let i = 0; i < 30; i++) { ctx.beginPath(); ctx.arc(Math.random() * 512, Math.random() * 512, rand(1, 3), 0, Math.PI * 2); ctx.fill(); }
});
const ballMat = new THREE.MeshStandardMaterial({
  map: ballTex, emissiveMap: ballTex, emissive: 0xffffff, emissiveIntensity: 0.55,
  roughness: 0.12, metalness: 0.35,
});
const ballGeo = new THREE.SphereGeometry(0.38, 24, 24);

/* ---------- рогатка от первого лица ---------- */
const SLING_LOCAL = V3(0.42, -0.5, -1.3);
const slingRig = new THREE.Group();           // всё в координатах камеры
slingRig.position.copy(SLING_LOCAL);
camera.add(slingRig);

let slingWrap = null;
let TIP_L = V3(-0.13, 0.62, -0.07), TIP_R = V3(0.13, 0.62, -0.07);
let POUCH_REST = V3(0, 0.44, -0.04);

function fitSlingAnchors() {
  if (!slingWrap) return;                      // модель нормализована — якоря фиксированы
  TIP_L = V3(-0.13, 0.62, -0.07);
  TIP_R = V3(0.13, 0.62, -0.07);
  POUCH_REST = V3(0, 0.44, -0.04);
  pouch.position.copy(POUCH_REST);
}
/* процедурная рогатка — стальные трубки + неоновое кольцо */
function makeSlingModel() {
  const g = new THREE.Group();
  const steel = new THREE.MeshStandardMaterial({ color: 0x5a6a86, roughness: 0.25, metalness: 0.92 });
  const rubber = new THREE.MeshStandardMaterial({ color: 0x111418, roughness: 0.9, metalness: 0 });
  const neon = new THREE.MeshBasicMaterial({ color: 0x00f0ff });
  const add = (geo, mat, pos, rot) => {
    const m = new THREE.Mesh(geo, mat);
    if (pos) m.position.set(...pos);
    if (rot) m.rotation.set(...rot);
    g.add(m); return m;
  };
  add(new THREE.CylinderGeometry(0.045, 0.062, 0.62, 12), rubber, [0, 0.06, 0]);      // рукоять
  add(new THREE.CylinderGeometry(0.05, 0.05, 0.1, 12), steel, [0, 0.4, 0]);           // муфта
  add(new THREE.TorusGeometry(0.055, 0.009, 8, 24), neon, [0, 0.13, 0], [Math.PI / 2, 0, 0]); // неон-кольцо
  const shoulder = (sx) => {                                                          // изогнутые плечи вилки
    const curve = new THREE.CatmullRomCurve3([
      V3(0, 0.42, 0), V3(sx * 0.06, 0.55, 0), V3(sx * 0.13, 0.68, -0.03), V3(sx * 0.17, 0.8, -0.08),
    ]);
    add(new THREE.TubeGeometry(curve, 16, 0.034, 10), steel);
    add(new THREE.TorusGeometry(0.034, 0.012, 8, 16), rubber, [sx * 0.17, 0.8, -0.08], [0, sx * 0.9, 0]); // обмотка под резину
  };
  shoulder(-1); shoulder(1);
  return g;
}

const rubberMat = new THREE.MeshStandardMaterial({ color: 0x6e1830, roughness: 0.5, metalness: 0.05, emissive: 0x4a0d1c, emissiveIntensity: 0.8 });
const bandGeo = new THREE.CylinderGeometry(0.02, 0.028, 1, 6);
const bandL = new THREE.Mesh(bandGeo, rubberMat);
const bandR = new THREE.Mesh(bandGeo, rubberMat);
slingRig.add(bandL, bandR);
const pouch = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.1, 0.045),
  new THREE.MeshStandardMaterial({ color: 0x241812, roughness: 0.85 }));
slingRig.add(pouch);
pouch.position.copy(POUCH_REST);
const ballInPouch = new THREE.Mesh(ballGeo, ballMat.clone());
ballInPouch.material.emissiveIntensity = 0.95;
ballInPouch.scale.setScalar(0.45);
pouch.add(ballInPouch);

slingWrap = makeSlingModel();                 // рогатка в руках
slingWrap.scale.setScalar(0.72);
slingRig.add(slingWrap);
fitSlingAnchors();

function stretchBand(band, tip) {
  const from = tip, to = pouch.position;
  const dir = new THREE.Vector3().subVectors(to, from);
  const len = dir.length();
  band.position.copy(from).addScaledVector(dir, 0.5);
  band.scale.set(1, len, 1);
  band.quaternion.setFromUnitVectors(V3(0, 1, 0), dir.normalize());
}

/* ---------- прожектор игрока ---------- */
const BEAM_ORIGIN = V3(-3.2, ROOF_Y + 0.9, 85);   // чуть впереди игрока — луч виден в кадре
const searchGrp = new THREE.Group();
searchGrp.position.set(-4.8, ROOF_Y + 0.72, 92);  // корпус на крыше, доворачивается за прицелом
scene.add(searchGrp);
{
  const metal = new THREE.MeshStandardMaterial({ color: 0x2b3345, roughness: 0.4, metalness: 0.9 });
  const base = new THREE.Mesh(new THREE.CylinderGeometry(0.32, 0.42, 0.5, 12), metal);
  base.position.y = -0.65; searchGrp.add(base);
  const yoke = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.5, 0.16), metal);
  yoke.position.y = 0.12; searchGrp.add(yoke);
  const lamp = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.36, 0.6, 14),
    new THREE.MeshStandardMaterial({ color: 0x121822, roughness: 0.35, metalness: 0.8, emissive: 0x88bbff, emissiveIntensity: 0.7 }));
  lamp.rotation.x = Math.PI / 2; lamp.position.z = 0.1; searchGrp.add(lamp);
  const lens = new THREE.Mesh(new THREE.CircleGeometry(0.27, 16),
    new THREE.MeshBasicMaterial({ color: 0xdfeeff, fog: false }));
  lens.position.z = 0.42; searchGrp.add(lens);
}
const spot = new THREE.SpotLight(0xcfe4ff, 6, 900, 0.06, 0.45, 0);   // decay 0 — свет виден и далеко
spot.position.copy(BEAM_ORIGIN);
scene.add(spot);
scene.add(spot.target);

const BEAM_LEN = 300;
// мягкий объёмный столб света: крест из двух трапеций с градиентной текстурой
const beamTex = canvasTex(128, 256, (ctx) => {
  const img = ctx.createImageData(128, 256);
  for (let y = 0; y < 256; y++) {
    const v = y / 255;
    for (let x = 0; x < 128; x++) {
      const u = Math.abs(x / 127 - 0.5) * 2;               // 0 центр → 1 край
      const a = Math.pow(Math.max(0, 1 - u), 1.8) * Math.pow(1 - v, 1.5) * 255;
      const i = (y * 128 + x) * 4;
      img.data[i] = 200; img.data[i + 1] = 226; img.data[i + 2] = 255;
      img.data[i + 3] = a;
    }
  }
  ctx.putImageData(img, 0, 0);
});
function beamBladeGeo() {
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(new Float32Array([
    -0.35, 0, 0,  0.35, 0, 0,  5, BEAM_LEN, 0,  -5, BEAM_LEN, 0,
  ]), 3));
  g.setAttribute('uv', new THREE.BufferAttribute(new Float32Array([0, 0, 1, 0, 1, 1, 0, 1]), 2));
  g.setIndex([0, 1, 2, 0, 2, 3]);
  return g;
}
const beamMat = new THREE.MeshBasicMaterial({
  map: beamTex, transparent: true, opacity: 0.45, blending: THREE.AdditiveBlending,
  depthWrite: false, side: THREE.DoubleSide, fog: false,
});
const blade1 = new THREE.Mesh(beamBladeGeo(), beamMat);
const blade2 = new THREE.Mesh(beamBladeGeo(), beamMat);
blade2.rotation.y = Math.PI / 2;
const beamRig = new THREE.Group();
beamRig.position.copy(BEAM_ORIGIN);
beamRig.add(blade1, blade2);
scene.add(beamRig);
// цепочка мягких glow-сфер вдоль луча — столб света виден с любого ракурса
const beamGlows = [];
for (const [d, sc, op] of [[3, 1.8, 0.55], [5, 2.3, 0.5], [7.5, 2.8, 0.45], [10, 3.3, 0.4], [13, 3.9, 0.36], [16.5, 4.5, 0.32], [20, 5.2, 0.28], [24, 6, 0.25], [28, 7, 0.22], [33, 8.3, 0.19], [39, 9.7, 0.17], [46, 11.4, 0.15], [55, 13.6, 0.12], [65, 16, 0.1], [78, 19, 0.09], [95, 23, 0.08], [115, 28, 0.07]]) {
  const s = new THREE.Sprite(new THREE.SpriteMaterial({
    map: glowTex, color: 0xbfdcff, transparent: true, opacity: op,
    blending: THREE.AdditiveBlending, depthWrite: false, fog: false,
  }));
  s.position.y = d; s.scale.setScalar(sc);
  s.userData.baseOp = op;
  beamRig.add(s);
  beamGlows.push(s);
}

/* ---------- HUD ---------- */
const $ = id => document.getElementById(id);
const ui = {
  score: $('score'), best: $('best'), kills: $('kills'), wave: $('wave'), targets: $('targets'),
  lives: $('lives').children, msg: $('msg'), ammo: $('ammo').children,
  lock: $('lock'), lockTxt: $('lockTxt'), cross: $('cross'), power: $('power'), hint: $('hint'),
};
const pips = [...ui.ammo];

/* ---------- звук ---------- */
let actx = null;
const sfx = {
  init() {
    if (actx) return;
    actx = new (window.AudioContext || window.webkitAudioContext)();
    const len = actx.sampleRate * 2;
    const buf = actx.createBuffer(1, len, actx.sampleRate);
    const d = buf.getChannelData(0);
    for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
    this.noiseBuf = buf;
    const src = actx.createBufferSource(); src.buffer = buf; src.loop = true;
    const f = actx.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = 700;
    const g = actx.createGain(); g.gain.value = 0.045;
    src.connect(f).connect(g).connect(actx.destination); src.start();
  },
  _noise(dur, freq, type, vol, slideTo) {
    if (!actx) return;
    const src = actx.createBufferSource(); src.buffer = this.noiseBuf;
    const f = actx.createBiquadFilter(); f.type = type; f.frequency.value = freq;
    if (slideTo) f.frequency.exponentialRampToValueAtTime(slideTo, actx.currentTime + dur);
    const g = actx.createGain();
    g.gain.setValueAtTime(vol, actx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.001, actx.currentTime + dur);
    src.connect(f).connect(g).connect(actx.destination);
    src.start(); src.stop(actx.currentTime + dur);
  },
  _tone(freq, dur, type, vol, slideTo) {
    if (!actx) return;
    const o = actx.createOscillator(); o.type = type; o.frequency.setValueAtTime(freq, actx.currentTime);
    if (slideTo) o.frequency.exponentialRampToValueAtTime(slideTo, actx.currentTime + dur);
    const g = actx.createGain();
    g.gain.setValueAtTime(vol, actx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.001, actx.currentTime + dur);
    o.connect(g).connect(actx.destination);
    o.start(); o.stop(actx.currentTime + dur);
  },
  shot(p) { this._noise(0.16, 900, 'bandpass', 0.5, 120); this._tone(150 + 120 * p, 0.18, 'sine', 0.5, 55); },
  charge() { this._tone(90, 0.45, 'sawtooth', 0.05, 330); },
  click() { this._tone(1400, 0.05, 'square', 0.08); },
  hit() { this._noise(0.5, 300, 'lowpass', 0.8, 60); this._tone(90, 0.4, 'sine', 0.6, 40); this._noise(0.25, 2500, 'highpass', 0.25); },
  thunder() { setTimeout(() => this._noise(1.6, 160, 'lowpass', 0.5, 40), rand(100, 800)); },
  alarm() { this._tone(880, 0.14, 'square', 0.14); setTimeout(() => this._tone(660, 0.2, 'square', 0.14), 160); },
  wave() { this._tone(520, 0.16, 'triangle', 0.16, 780); },
};

/* ---------- состояние ---------- */
let state = null;
function newState() {
  return {
    running: false, score: 0, kills: 0, lives: 3, wave: 1,
    toSpawn: 0, spawnT: 1.2, betweenWaves: 0,
    charging: false, power: 0, balls: [], drones: [], fx: [],
    combo: 0, comboT: 0, msgT: 0, recoil: 0, t: 0,
  };
}

/* ---------- ввод ---------- */
const mouse = { x: 0.5, y: 0.42, down: false };
let yaw = 0, pitch = 0.18;
const YAW_MAX = THREE.MathUtils.degToRad(80);
const PITCH_MIN = THREE.MathUtils.degToRad(-7);
const PITCH_MAX = THREE.MathUtils.degToRad(82);

addEventListener('mousemove', e => {
  mouse.x = e.clientX / innerWidth;
  mouse.y = e.clientY / innerHeight;
  ui.cross.style.transform = `translate(${e.clientX}px,${e.clientY}px)`;
});
addEventListener('mousedown', e => {
  if (e.button !== 0 || !state || !state.running) return;
  if (ballsInFlight() >= 4) { sfx.click(); return; }
  state.charging = true; state.power = 0; sfx.charge();
});
addEventListener('mouseup', e => {
  if (e.button !== 0 || !state || !state.running || !state.charging) return;
  state.charging = false;
  fire(Math.max(state.power, 0.12));
  state.power = 0;
});
addEventListener('contextmenu', e => e.preventDefault());
addEventListener('blur', () => { if (state) state.charging = false; });
const ballsInFlight = () => state ? state.balls.length : 0;

/* ---------- шары ---------- */
const trailPool = [];
function spawnTrail(pos) {
  let s = trailPool.find(t => !t.on);
  if (!s) {
    s = { spr: new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTex, color: 0xff6bff, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending })), on: false, life: 0 };
    scene.add(s.spr); trailPool.push(s);
  }
  s.on = true; s.life = 0.4;
  s.spr.visible = true;
  s.spr.position.copy(pos);
  s.spr.scale.setScalar(0.9);
  s.spr.material.opacity = 0.7;
}
function updateTrail(dt) {
  for (const t of trailPool) {
    if (!t.on) continue;
    t.life -= dt;
    if (t.life <= 0) { t.on = false; t.spr.visible = false; continue; }
    t.spr.material.opacity = t.life / 0.4 * 0.7;
    t.spr.scale.setScalar(0.4 + t.life * 1.3);
  }
}

function fire(power) {
  const dir = camera.getWorldDirection(new THREE.Vector3());
  const start = new THREE.Vector3();
  pouch.getWorldPosition(start);
  const speed = 30 + 46 * power;
  const mesh = new THREE.Mesh(ballGeo, ballMat);
  mesh.position.copy(start);
  scene.add(mesh);
  state.balls.push({ mesh, vel: dir.multiplyScalar(speed), life: 6, trailT: 0 });
  state.recoil = 1.4 * power + 0.4;
  sfx.shot(power);
  updatePips();
}
function updatePips() {
  const free = 4 - ballsInFlight();
  pips.forEach((p, i) => p.classList.toggle('empty', i >= free));
}

function updateBalls(dt) {
  for (let i = state.balls.length - 1; i >= 0; i--) {
    const b = state.balls[i];
    b.vel.y -= 22 * dt;
    b.vel.multiplyScalar(1 - 0.045 * dt);
    b.mesh.position.addScaledVector(b.vel, dt);
    b.mesh.rotation.x += 6 * dt; b.mesh.rotation.y += 7.5 * dt;
    b.life -= dt;
    b.trailT -= dt;
    if (b.trailT <= 0) { spawnTrail(b.mesh.position); b.trailT = 0.028; }
    let dead = b.life <= 0 || b.mesh.position.y < 0.3;
    if (!dead) {
      for (const d of state.drones) {
        if (d.state !== 'fly') continue;
        const r = d.hitR + 0.4;
        if (b.mesh.position.distanceToSquared(d.wrap.position) < r * r) {
          damageDrone(d, b.mesh.position.clone());
          dead = true; break;
        }
      }
    }
    if (dead) {
      if (b.mesh.position.y < 0.3) spawnTrail(b.mesh.position);
      scene.remove(b.mesh);
      state.balls.splice(i, 1);
      updatePips();
    }
  }
}

/* ---------- дроны ---------- */
const navRedMat = new THREE.SpriteMaterial({ map: glowTex, color: 0xff3040, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, fog: false });
const navGrnMat = new THREE.SpriteMaterial({ map: glowTex, color: 0x30ff70, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, fog: false });
const fireMat = new THREE.SpriteMaterial({ map: glowTex, color: 0xff7722, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, fog: false });

let droneProto = null;
gltfLoader.load('models/an-196_lutiy.glb', g => {
  stripLights(g.scene);
  droneProto = normalize(g.scene, 10);
}, undefined, () => { droneProto = null; });

// GLB-рогатка (модель пользователя) — как реквизит на крыше, рядом с позицией игрока
gltfLoader.load('models/slingshot.glb', g => {
  stripLights(g.scene);
  const decor = normalizeStanding(g.scene, 1.9);
  decor.position.set(7.5, ROOF_Y, 100);
  decor.rotation.y = Math.PI * 0.95;
  scene.add(decor);
});

function spawnDrone() {
  const heavy = state.wave >= 2 && Math.random() < 0.28;
  let wrap;
  if (droneProto) wrap = droneProto.clone();
  else wrap = normalize(makeFallbackDrone(), 10);
  const scale = heavy ? 1.45 : 1;
  wrap.scale.multiplyScalar(scale);
  const dir = Math.random() < 0.5 ? 1 : -1;
  const z = rand(-70, 50), y = rand(38, 88);
  wrap.position.set(-dir * 240, y, z);
  wrap.rotation.y = dir > 0 ? -Math.PI / 2 : Math.PI / 2;
  const sRed = new THREE.Sprite(navRedMat.clone());
  sRed.position.set(-dir * 4.4, 0.5, 0); sRed.scale.setScalar(1.9);
  const sGrn = new THREE.Sprite(navGrnMat.clone());
  sGrn.position.set(dir * 4.4, 0.5, 0); sGrn.scale.setScalar(1.9);
  wrap.add(sRed, sGrn);
  scene.add(wrap);
  state.drones.push({
    wrap, dir, hp: heavy ? 2 : 1, hitR: (heavy ? 4.6 : 3.3),
    speed: (16 + state.wave * 1.5 + rand(0, 4)) * (heavy ? 0.75 : 1),
    t: rand(0, 9), ph: rand(0, 6), zAmp: rand(0.6, 2.4), z0: z, y0: y,
    lit: 0, state: 'fly', fireSpr: null, vy: 0, score: heavy ? 250 : 100, heavy,
  });
}

function damageDrone(d, at) {
  d.hp--;
  if (d.hp > 0) { sfx.click(); d.lit = 0.35; return; }
  explosion(at, d.heavy ? 1.5 : 1);
  sfx.hit();
  state.combo = state.comboT > 0 ? state.combo + 1 : 1;
  state.comboT = 2.4;
  const pts = d.score * state.combo;
  state.score += pts;
  state.kills++;
  showMsg(state.combo > 1 ? `СБИТ +${pts} · КОМБО ×${state.combo}` : `СБИТ +${pts}`);
  d.state = 'falling';
  d.vy = 0;
  d.fireSpr = new THREE.Sprite(fireMat);
  d.fireSpr.scale.setScalar(3.4);
  d.wrap.add(d.fireSpr);
  updateHUD();
}
function killDrone(i) {
  const d = state.drones[i];
  if (d.fireSpr) d.fireSpr.material.dispose();
  scene.remove(d.wrap);
  state.drones.splice(i, 1);
}
function updateDrones(dt) {
  for (let i = state.drones.length - 1; i >= 0; i--) {
    const d = state.drones[i];
    d.t += dt;
    if (d.state === 'fly') {
      d.wrap.position.x += d.dir * d.speed * dt;
      d.wrap.position.y = d.y0 + Math.sin(d.t * 1.7 + d.ph) * 1.6;
      d.wrap.position.z = d.z0 + Math.sin(d.t * 0.9 + d.ph) * d.zAmp;
      d.wrap.rotation.z = -d.dir * 0.07 + Math.sin(d.t * 2.3 + d.ph) * 0.05;
      if (d.lit > 0) d.lit -= dt;
      // улетел за город
      if (Math.abs(d.wrap.position.x) > 320) {
        killDrone(i);
        state.lives--;
        state.combo = 0;
        sfx.alarm();
        showMsg('ПРОРЫВ! ЩИТ -1');
        updateHUD();
        if (state.lives <= 0) gameOver();
        continue;
      }
    } else { // falling
      d.vy -= 26 * dt;
      d.wrap.position.y += d.vy * dt;
      d.wrap.position.x += d.dir * d.speed * 0.4 * dt;
      d.wrap.rotation.z += 2.6 * dt;
      d.fireSpr.material.opacity = rand(0.5, 1);
      if (d.wrap.position.y < 1) { explosion(d.wrap.position.clone(), 1.3); killDrone(i); continue; }
    }
    // подсветка прожектором
    const toD = new THREE.Vector3().subVectors(d.wrap.position, BEAM_ORIGIN);
    const distA = toD.length();
    toD.normalize();
    const aimFromBeam = camera.getWorldDirection(new THREE.Vector3());
    const ang = toD.angleTo(aimFromBeam);
    const inBeam = ang < 0.1 && d.state === 'fly';
    if (inBeam) {
      spot.target.position.copy(d.wrap.position);
      d.lit = Math.max(d.lit, 0.2);
      if (!lockTarget || lockTarget.d !== d) lockTarget = { d, t: 0.2 };
    }
  }
}
let lockTarget = null;

/* ---------- взрывы/эффекты ---------- */
function explosion(at, power) {
  const flash = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTex, color: 0xfff2c8, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, fog: false }));
  flash.position.copy(at); flash.scale.setScalar(7 * power);
  scene.add(flash);
  state.fx.push({ spr: flash, life: 0.28, max: 0.28, type: 'flash', power });
  for (let i = 0; i < 22; i++) {
    const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTex, color: NEON[randi(0, 5)], transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, fog: false }));
    s.position.copy(at); s.scale.setScalar(rand(0.5, 1.3));
    scene.add(s);
    state.fx.push({ spr: s, life: rand(0.5, 0.9), max: 0.9, type: 'spark', power,
      vel: V3(rand(-1, 1), rand(-0.4, 1.2), rand(-1, 1)).normalize().multiplyScalar(rand(9, 24) * power) });
  }
}
function updateFx(dt) {
  if (!state) return;
  for (let i = state.fx.length - 1; i >= 0; i--) {
    const f = state.fx[i];
    f.life -= dt;
    if (f.life <= 0) { scene.remove(f.spr); f.spr.material.dispose(); state.fx.splice(i, 1); continue; }
    const k = f.life / f.max;
    if (f.type === 'flash') { f.spr.scale.setScalar((7 + (1 - k) * 9) * f.power); f.spr.material.opacity = k; }
    else { f.vel.y -= 18 * dt; f.spr.position.addScaledVector(f.vel, dt); f.spr.material.opacity = k; f.spr.scale.setScalar(0.4 + k * 0.7); }
  }
}

/* ---------- HUD helpers ---------- */
function showMsg(txt) {
  ui.msg.textContent = txt;
  ui.msg.style.opacity = '1';
  state.msgT = 1.6;
}
let bestScore = +(localStorage.getItem('neonPvoBest') || 0);
function updateHUD() {
  ui.score.textContent = state.score;
  if (state.score > bestScore) bestScore = state.score;
  ui.best.textContent = bestScore;
  ui.kills.textContent = state.kills;
  ui.wave.textContent = state.wave;
  ui.targets.textContent = state.drones.length + state.toSpawn;
  for (let i = 0; i < 3; i++) ui.lives[i].classList.toggle('off', i >= state.lives);
}

/* ---------- курсор-прицел и кольцо силы ---------- */
function updatePowerRing() {
  const p = state && state.charging ? state.power : 0;
  ui.power.style.background = p > 0
    ? `conic-gradient(#ffb43a ${p * 360}deg, rgba(0,240,255,.14) 0deg)`
    : 'none';
  ui.power.style.boxShadow = p > 0 ? '0 0 12px rgba(255,180,58,.6)' : 'none';
}

/* ---------- захват цели (рамка) ---------- */
function updateLock(dt) {
  if (lockTarget) { lockTarget.t -= dt; if (lockTarget.t <= 0) lockTarget = null; }
  if (!lockTarget || !state.drones.includes(lockTarget.d)) { ui.lock.style.display = 'none'; return; }
  const d = lockTarget.d;
  const v = d.wrap.position.clone().project(camera);
  if (v.z > 1) { ui.lock.style.display = 'none'; return; }
  const x = (v.x * 0.5 + 0.5) * innerWidth;
  const y = (-v.y * 0.5 + 0.5) * innerHeight;
  ui.lock.style.display = 'block';
  ui.lock.style.transform = `translate(${x}px,${y}px)`;
  ui.lockTxt.textContent = d.heavy ? 'ТЯЖЁЛЫЙ · HP 1' : 'ЦЕЛЬ ЗАХВАЧЕНА';
}

/* ---------- волны ---------- */
function updateWaves(dt) {
  if (state.betweenWaves > 0) {
    state.betweenWaves -= dt;
    if (state.betweenWaves <= 0) startWave();
    return;
  }
  if (state.toSpawn > 0) {
    state.spawnT -= dt;
    if (state.spawnT <= 0) {
      spawnDrone();
      state.toSpawn--;
      state.spawnT = Math.max(0.7, rand(1.6, 2.6) - state.wave * 0.12);
      updateHUD();
    }
  } else if (state.drones.length === 0) {
    state.betweenWaves = 2.6;
    showMsg(`ВОЛНА ${state.wave} ОТБИТА`);
    state.score += 150;
    updateHUD();
  }
}
function startWave() {
  state.wave++;
  state.toSpawn = 3 + Math.ceil(state.wave * 1.6);
  state.spawnT = 0.6;
  showMsg(`ВОЛНА ${state.wave} · ЦЕЛЕЙ ${state.toSpawn}`);
  sfx.wave();
  updateHUD();
}

/* ---------- камера / рогатка / прожектор ---------- */
const camBase = camera.position.clone();
const lookDir = new THREE.Vector3();
const tmpAim = new THREE.Vector3();
function updateCameraRig(dt) {
  const nx = clamp(mouse.x * 2 - 1, -1, 1);
  const ny = clamp(mouse.y * 2 - 1, -1, 1);
  yaw = -nx * YAW_MAX;
  pitch = lerp(PITCH_MAX, PITCH_MIN, (ny + 1) / 2);
  if (state && state.recoil > 0) { state.recoil = Math.max(0, state.recoil - dt * 6); pitch += state.recoil * 0.035; }
  camera.rotation.y = yaw;
  camera.rotation.x = pitch;
  camera.position.set(
    camBase.x + Math.sin(state ? state.t * 0.5 : 0) * 0.05,
    camBase.y + Math.sin(state ? state.t * 0.9 : 0) * 0.045,
    camBase.z
  );
  // натяжение
  const p = state && state.charging ? state.power : 0;
  const pull = p * 0.18;
  pouch.position.set(POUCH_REST.x, POUCH_REST.y, POUCH_REST.z + pull);
  ballInPouch.visible = ballsInFlight() < 4;
  stretchBand(bandL, TIP_L);
  stretchBand(bandR, TIP_R);
  // FOV-зум при натяжении
  camera.fov = lerp(camera.fov, 72 - p * 9, 1 - Math.exp(-10 * dt));
  camera.updateProjectionMatrix();
  // прожектор: housing доворачивается к направлению взгляда
  camera.getWorldDirection(lookDir);
  const beamDir = lookDir.clone();
  beamRig.quaternion.setFromUnitVectors(V3(0, 1, 0), beamDir);
  tmpAim.copy(BEAM_ORIGIN).addScaledVector(beamDir, 240);
  spot.target.position.copy(tmpAim);
  searchGrp.lookAt(tmpAim);
  const inten = 5 + p * 9;
  spot.intensity = lerp(spot.intensity, inten, 1 - Math.exp(-8 * dt));
  beamMat.opacity = 0.3 + p * 0.4;
  for (const s of beamGlows) s.material.opacity = s.userData.baseOp * (1 + p * 1.1);
}

/* ---------- декор ---------- */
function updateDecor(dt, t) {
  for (const b of blinkers) b.material.opacity = 0.35 + 0.65 * (Math.sin(t * 3 + b.userData.ph) > 0.3 ? 1 : 0);
  for (const r of holos) { r.rotation.z += dt * 0.7; r.position.y += Math.sin(t + r.position.x) * 0.02; }
  for (const db of decorBeams) db.g.rotation.y = Math.sin(t * db.sp + db.ph) * 1.1;
  for (const c of cars) {
    c.position.x += c.userData.v * dt;
    if (c.position.x > 330) c.position.x = -330;
    if (c.position.x < -330) c.position.x = 330;
  }
  bigT += dt;
  if (bigT > 0.1) { drawBig(state ? state.t : 0); bigT = 0; }
}

function updateRain(dt) {
  const arr = rainGeo.attributes.position.array;
  for (let i = 0; i < RAIN_N; i++) {
    const dy = rainV[i] * dt;
    arr[i * 6 + 1] -= dy; arr[i * 6 + 4] -= dy;
    arr[i * 6] -= dt * 9; arr[i * 6 + 3] -= dt * 9;
    if (arr[i * 6 + 1] < 0) rainReset(i, false);
  }
  rainGeo.attributes.position.needsUpdate = true;
}

/* ---------- главный цикл ---------- */
let lastT = performance.now();
function loop() {
  requestAnimationFrame(loop);
  const now = performance.now();
  const dt = Math.min(0.05, (now - lastT) / 1000);
  lastT = now;

  updateCameraRig(dt);
  updateRain(dt);
  updateDecor(dt, now / 1000);
  lightning(dt);
  updateTrail(dt);
  updateFx(dt);

  if (state && state.running) {
    state.t += dt;
    if (state.charging) state.power = Math.min(1, state.power + dt / 0.7);
    if (state.comboT > 0) state.comboT -= dt; else state.combo = 0;
    if (state.msgT > 0) { state.msgT -= dt; if (state.msgT <= 0) ui.msg.style.opacity = '0'; }
    updateBalls(dt);
    updateDrones(dt);
    updateWaves(dt);
    updateHUD();
    updateLock(dt);
    updatePowerRing();
  }

  renderer.render(scene, camera);
}
drawBig(0);
loop();

/* ---------- старт / рестарт / конец ---------- */
function startGame() {
  sfx.init();
  if (state) {                                   // очистка прошлой партии
    for (const d of state.drones) scene.remove(d.wrap);
    for (const b of state.balls) scene.remove(b.mesh);
    for (const f of state.fx) scene.remove(f.spr);
  }
  state = newState();
  state.running = true;
  state.toSpawn = 3 + Math.ceil(state.wave * 1.6);
  $('startOverlay').classList.add('hidden');
  $('overOverlay').classList.add('hidden');
  showMsg('ВОЛНА 1 · ЦЕЛЕЙ ' + state.toSpawn);
  updateHUD();
  updatePips();
}
function gameOver() {
  state.running = false;
  localStorage.setItem('neonPvoBest', String(bestScore));
  $('finalStats').textContent = `Сбито ${state.kills} БПЛА · счёт ${state.score} · волна ${state.wave}`;
  $('overOverlay').classList.remove('hidden');
  ui.lock.style.display = 'none';
}
$('startBtn').addEventListener('click', startGame);
$('restartBtn').addEventListener('click', startGame);
