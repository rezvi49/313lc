"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function Scene() {
  const ref = useRef(null);
  useEffect(() => {
    const cv = ref.current;
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const r = new THREE.WebGLRenderer({ canvas: cv, alpha: true, antialias: true });
    r.setPixelRatio(Math.min(devicePixelRatio, 2));
    const s = new THREE.Scene(), c = new THREE.PerspectiveCamera(50, 1, 0.1, 100);
    c.position.z = 7;
    const g = new THREE.Group(); s.add(g);
    const knot = new THREE.Mesh(new THREE.TorusKnotGeometry(1.7, 0.45, 160, 20),
      new THREE.MeshBasicMaterial({ color: 0x6ee7ff, wireframe: true, transparent: true, opacity: 0.28 }));
    const core = new THREE.Mesh(new THREE.IcosahedronGeometry(0.9, 1),
      new THREE.MeshBasicMaterial({ color: 0xa78bfa, wireframe: true, transparent: true, opacity: 0.7 }));
    g.add(knot, core);
    const n = 700, p = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) {
      const rad = 4 + Math.random() * 5, t = Math.random() * 6.283, u = Math.acos(2 * Math.random() - 1);
      p[i * 3] = rad * Math.sin(u) * Math.cos(t); p[i * 3 + 1] = rad * Math.sin(u) * Math.sin(t); p[i * 3 + 2] = rad * Math.cos(u) - 2;
    }
    const gg = new THREE.BufferGeometry(); gg.setAttribute("position", new THREE.BufferAttribute(p, 3));
    const pts = new THREE.Points(gg, new THREE.PointsMaterial({ color: 0xe8ecff, size: 0.03 })); s.add(pts);
    let mx = 0, my = 0, sy = 0, raf;
    const move = (e) => { mx = e.clientX / innerWidth - 0.5; my = e.clientY / innerHeight - 0.5; };
    const scroll = () => { sy = Math.min(scrollY / innerHeight, 3); };
    const size = () => { const w = innerWidth, h = innerHeight; r.setSize(w, h, false); c.aspect = w / h; c.updateProjectionMatrix();
      g.position.x = w > 760 ? 2.4 : 0; g.scale.setScalar(w > 760 ? 1 : 0.75); };
    addEventListener("pointermove", move); addEventListener("scroll", scroll); addEventListener("resize", size); size();
    const tick = (t) => {
      const k = reduce ? 0 : t * 0.0003;
      g.rotation.y += ((mx * 1.2 + k + sy * 0.8) - g.rotation.y) * 0.05;
      g.rotation.x += ((my * 0.8 + sy * 0.4) - g.rotation.x) * 0.05;
      core.rotation.y = -k * 3; pts.rotation.y = k * 0.4; g.position.y = sy * 1.5;
      r.render(s, c); if (!reduce) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => { cancelAnimationFrame(raf); removeEventListener("pointermove", move); removeEventListener("scroll", scroll); removeEventListener("resize", size); r.dispose(); };
  }, []);
  return <canvas id="scene" ref={ref} aria-hidden="true" />;
}
