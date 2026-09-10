import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { RotateCw, Pause, Play, Sparkles } from 'lucide-react';

interface ThreeDnaSceneProps {
  interactive?: boolean;
}

export default function ThreeDnaScene({ interactive = true }: ThreeDnaSceneProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [rotationSpeed, setRotationSpeed] = useState(1);
  const isPlayingRef = useRef(true);
  isPlayingRef.current = isPlaying;
  const speedRef = useRef(1);
  speedRef.current = rotationSpeed;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let width = container.clientWidth || 380;
    let height = container.clientHeight || 320;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55, width / height, 0.1, 1000);
    camera.position.z = 28;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.85);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0x00f5d4, 3.5, 70);
    pointLight1.position.set(15, 15, 20);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x9d4edd, 3.5, 70);
    pointLight2.position.set(-15, -15, 20);
    scene.add(pointLight2);

    const pointLight3 = new THREE.PointLight(0x4edea3, 2, 50);
    pointLight3.position.set(0, -10, 15);
    scene.add(pointLight3);

    // DNA Double Helix Group
    const dnaGroup = new THREE.Group();
    const helixCount = 44;
    const radius = 5.2;
    const heightStep = 0.55;
    const sphereGeo = new THREE.SphereGeometry(0.38, 16, 16);

    const matCyan = new THREE.MeshPhongMaterial({
      color: 0x00f5d4,
      emissive: 0x005544,
      shininess: 90,
      specular: 0xd7fff3,
    });
    const matPurple = new THREE.MeshPhongMaterial({
      color: 0x9d4edd,
      emissive: 0x3d0066,
      shininess: 90,
      specular: 0xe0aaff,
    });
    const rungsMat = new THREE.LineBasicMaterial({
      color: 0x48cae4,
      transparent: true,
      opacity: 0.65,
    });

    for (let i = -helixCount / 2; i <= helixCount / 2; i++) {
      const angle = i * 0.28;
      const y = i * heightStep;
      const x1 = Math.cos(angle) * radius;
      const z1 = Math.sin(angle) * radius;
      const x2 = Math.cos(angle + Math.PI) * radius;
      const z2 = Math.sin(angle + Math.PI) * radius;

      // Strand 1 node
      const sphere1 = new THREE.Mesh(sphereGeo, matCyan);
      sphere1.position.set(x1, y, z1);
      dnaGroup.add(sphere1);

      // Strand 2 node
      const sphere2 = new THREE.Mesh(sphereGeo, matPurple);
      sphere2.position.set(x2, y, z2);
      dnaGroup.add(sphere2);

      // Connecting bridge (Base pair)
      if (i % 2 === 0) {
        const points = [new THREE.Vector3(x1, y, z1), new THREE.Vector3(x2, y, z2)];
        const lineGeo = new THREE.BufferGeometry().setFromPoints(points);
        const line = new THREE.Line(lineGeo, rungsMat);
        dnaGroup.add(line);
      }
    }

    // Surrounding Neural Dust / Cloud
    const particleCount = 220;
    const pGeo = new THREE.BufferGeometry();
    const pPos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      pPos[i] = (Math.random() - 0.5) * 40;
      pPos[i + 1] = (Math.random() - 0.5) * 40;
      pPos[i + 2] = (Math.random() - 0.5) * 25;
    }
    pGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3));
    const pMat = new THREE.PointsMaterial({
      size: 0.28,
      color: 0x00f5d4,
      transparent: true,
      opacity: 0.75,
    });
    const particles = new THREE.Points(pGeo, pMat);
    scene.add(particles);

    dnaGroup.rotation.z = 0.35;
    scene.add(dnaGroup);

    // Mouse / Pointer Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const handlePointerMove = (e: MouseEvent | TouchEvent) => {
      if (!interactive) return;
      let clientX = 0;
      let clientY = 0;
      if ('touches' in e && e.touches.length > 0) {
        clientX = e.touches[0].clientX;
        clientY = e.touches[0].clientY;
      } else if ('clientX' in e) {
        clientX = (e as MouseEvent).clientX;
        clientY = (e as MouseEvent).clientY;
      }
      targetMouseX = (clientX / window.innerWidth) * 2 - 1;
      targetMouseY = -(clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', handlePointerMove);
    window.addEventListener('touchmove', handlePointerMove, { passive: true });

    // Resize Observer
    const resizeObserver = new ResizeObserver(() => {
      if (!container) return;
      width = container.clientWidth || 380;
      height = container.clientHeight || 320;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    });
    resizeObserver.observe(container);

    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Smooth mouse lerp
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      const delta = clock.getDelta();
      if (isPlayingRef.current) {
        dnaGroup.rotation.y += delta * 0.55 * speedRef.current;
      }

      dnaGroup.rotation.x = Math.sin(clock.getElapsedTime() * 0.4) * 0.15 + mouseY * 0.35;
      dnaGroup.rotation.z = 0.35 + mouseX * 0.25;

      particles.rotation.y -= delta * 0.09 * speedRef.current;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('touchmove', handlePointerMove);
      resizeObserver.disconnect();
      renderer.dispose();
      sphereGeo.dispose();
      pGeo.dispose();
      matCyan.dispose();
      matPurple.dispose();
      rungsMat.dispose();
      pMat.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [interactive]);

  return (
    <div className="relative w-full h-80 rounded-xl overflow-hidden bg-[#0b0d1a]/90 flex items-center justify-center shadow-inner border border-[#00f5d4]/20 group">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-15 bg-[linear-gradient(to_right,#00f5d4_1px,transparent_1px),linear-gradient(to_bottom,#9d4edd_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      {/* 3D Canvas mount */}
      <div ref={containerRef} className="w-full h-full relative z-10 cursor-grab active:cursor-grabbing" />

      {/* Top telemetry badge */}
      <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-[#1d1f2c]/85 backdrop-blur-md font-code text-[11px] text-[#26fedc] border border-[#00f5d4]/25 pointer-events-none z-20 flex items-center gap-1.5 shadow-lg">
        <Sparkles className="w-3.5 h-3.5 text-[#00f5d4] animate-pulse" />
        <span>360° BIO-NEURAL 3D</span>
      </div>

      {/* Interactive Controls Pill */}
      <div className="absolute top-3 right-3 flex items-center gap-1 bg-[#1d1f2c]/80 backdrop-blur-md p-1 rounded-lg border border-white/10 z-20 shadow-md">
        <button
          type="button"
          onClick={() => setIsPlaying(!isPlaying)}
          title={isPlaying ? 'توقف موقت چرخش' : 'ادامه چرخش'}
          className="p-1 rounded hover:bg-[#272937] text-[#b9cac4] hover:text-[#00f5d4] transition-colors"
        >
          {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
        </button>
        <button
          type="button"
          onClick={() => setRotationSpeed((s) => (s === 1 ? 2 : s === 2 ? 0.5 : 1))}
          title="سرعت چرخش"
          className="px-1.5 py-0.5 rounded hover:bg-[#272937] text-[10px] font-code text-[#b9cac4] hover:text-[#00f5d4] transition-colors flex items-center gap-1"
        >
          <RotateCw className="w-3 h-3" />
          <span>{rotationSpeed}x</span>
        </button>
      </div>

      {/* Bottom telemetry overlay */}
      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between px-3 py-1.5 rounded-lg bg-[#191b28]/95 backdrop-blur-md border border-[#3a4a46]/40 z-20 pointer-events-none text-xs">
        <span className="font-code text-[11px] text-[#c77dff] flex items-center gap-1.5 font-medium">
          <span className="w-2 h-2 rounded-full bg-[#9d4edd] animate-ping" />
          GENOMIC 3D MODEL
        </span>
        <span className="font-code text-[11px] text-[#00f5d4] font-semibold">
          PRECISION: 100% (20.00)
        </span>
      </div>
    </div>
  );
}
