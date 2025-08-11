import { ArrowDown } from "lucide-react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useState, useEffect } from "react";
import Typewriter from "./Typewriter";

function StylizedAstronaut() {
  const groupRef = useRef();
  const [hovered, setHovered] = useState(false);

  useFrame((state, delta) => {
    if (!groupRef.current) return;
    const { pointer, clock } = state;
    const t = clock.getElapsedTime();
    const bobX = Math.sin(t * 1.2) * 0.06;
    const bobY = Math.sin(t * 1.4) * 0.08;
    // Wider rotation range (±110° yaw) and added roll for more dynamic motion
    const yawMax = Math.PI * 0.61; // ~110°
    const targetRotY = Math.max(-yawMax, Math.min(yawMax, (hovered ? pointer.x : 0) * yawMax));
    const targetRotX = (hovered ? -pointer.y : 0) * 0.7;
    const targetRotZ = (hovered ? pointer.x : 0) * 0.25;
    // Larger translation so it feels more mobile
    const targetPosX = (hovered ? pointer.x : 0) * 0.9 + bobX;
    const targetPosY = (hovered ? pointer.y : 0) * 0.6 - 0.02 + bobY;
    groupRef.current.rotation.y += (targetRotY - groupRef.current.rotation.y) * 0.28;
    groupRef.current.rotation.x += (targetRotX - groupRef.current.rotation.x) * 0.24;
    groupRef.current.rotation.z += (targetRotZ - groupRef.current.rotation.z) * 0.2;
    groupRef.current.position.x += (targetPosX - groupRef.current.position.x) * 0.18;
    groupRef.current.position.y += (targetPosY - groupRef.current.position.y) * 0.18;
    // Subtle scale-in on hover for depth
    const currentScale = groupRef.current.scale.x;
    const targetScale = hovered ? 1.58 : 1.48;
    const nextScale = currentScale + (targetScale - currentScale) * 0.12;
    groupRef.current.scale.set(nextScale, nextScale, nextScale);
  });

  return (
    <group
      ref={groupRef}
      position={[0, -0.25, 0]}
      scale={1.5}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onPointerLeave={() => setHovered(false)}
    >
      {/* Helmet shell (lighter) */}
      <mesh castShadow position={[0, 0.78, 0]}>
        <sphereGeometry args={[0.64, 64, 64]} />
        <meshPhysicalMaterial color="#e9edf6" metalness={0.25} roughness={0.35} clearcoat={1} clearcoatRoughness={0.06} />
      </mesh>
      {/* Inner head for depth behind visor */}
      <mesh position={[0, 0.78, -0.05]}>
        <sphereGeometry args={[0.46, 48, 48]} />
        <meshStandardMaterial color="#0f172a" metalness={0.35} roughness={0.25} />
      </mesh>
      {/* Visor (brighter, more glow) */}
      <mesh position={[0, 0.78, 0.035]}>
        <sphereGeometry args={[0.49, 64, 64]} />
        <meshPhysicalMaterial color="#cfe3ff" emissive="#7aa7ff" emissiveIntensity={0.95} transparent opacity={0.32} reflectivity={1} metalness={0.55} roughness={0.1} />
      </mesh>
      {/* Visor frame ring */}
      <mesh position={[0, 0.78, 0.24]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.52, 0.03, 24, 64]} />
        <meshStandardMaterial color="#c7d2fe" metalness={0.6} roughness={0.25} />
      </mesh>
      {/* Simple glowing eyes inside visor */}
      <mesh position={[-0.16, 0.78, 0.28]}>
        <sphereGeometry args={[0.05, 24, 24]} />
        <meshStandardMaterial color="#e6f0ff" emissive="#bfdbfe" emissiveIntensity={1.2} />
      </mesh>
      <mesh position={[0.16, 0.78, 0.28]}>
        <sphereGeometry args={[0.05, 24, 24]} />
        <meshStandardMaterial color="#e6f0ff" emissive="#bfdbfe" emissiveIntensity={1.2} />
      </mesh>
      {/* Body brighter */}
      <mesh castShadow position={[0, 0.07, 0]}>
        <capsuleGeometry args={[0.48, 1.2, 16, 32]} />
        <meshStandardMaterial color="#ffffff" roughness={0.5} metalness={0.12} />
      </mesh>
      {/* Arms */}
      <mesh position={[-0.68, 0.18, 0]} rotation={[0, 0, 0.38]}>
        <capsuleGeometry args={[0.14, 0.6, 12, 24]} />
        <meshStandardMaterial color="#e5e7eb" />
      </mesh>
      <mesh position={[0.68, 0.18, 0]} rotation={[0, 0, -0.38]}>
        <capsuleGeometry args={[0.14, 0.6, 12, 24]} />
        <meshStandardMaterial color="#e5e7eb" />
      </mesh>
      {/* Legs */}
      <mesh position={[-0.24, -1.02, 0]}>
        <capsuleGeometry args={[0.14, 0.7, 12, 24]} />
        <meshStandardMaterial color="#eef2ff" />
      </mesh>
      <mesh position={[0.24, -1.02, 0]}>
        <capsuleGeometry args={[0.14, 0.7, 12, 24]} />
        <meshStandardMaterial color="#eef2ff" />
      </mesh>
      {/* Backpack with glow */}
      <mesh position={[0, 0.28, -0.42]}>
        <boxGeometry args={[0.6, 0.88, 0.3]} />
        <meshStandardMaterial color="#dbeafe" />
      </mesh>
      <mesh position={[0, 0.55, -0.6]}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshStandardMaterial color="#93c5fd" emissive="#60a5fa" emissiveIntensity={0.8} />
      </mesh>
    </group>
  );
}

// Always render the built-in astronaut; no external GLB required

function Astronaut() {
  // Simple placeholder: a floating sphere helmet with a body capsule
  return (
    <group>
      <Float speed={1.2} rotationIntensity={0.4} floatIntensity={0.5}>
        <group position={[0, 0.2, 0]}>
          <mesh castShadow position={[0, 0.6, 0]}>
            <sphereGeometry args={[0.6, 32, 32]} />
            <meshStandardMaterial color="#111827" metalness={0.3} roughness={0.2} />
          </mesh>
          <mesh position={[0, 0.6, 0]}>
            <sphereGeometry args={[0.45, 32, 32]} />
            <meshStandardMaterial color="#4f46e5" transparent opacity={0.25} />
          </mesh>
          <mesh castShadow position={[0, -0.2, 0]}>
            <capsuleGeometry args={[0.4, 1, 8, 16]} />
            <meshStandardMaterial color="#374151" />
          </mesh>
          {/* Arms */}
          <mesh position={[-0.55, 0.1, 0]} rotation={[0, 0, 0.4]}>
            <capsuleGeometry args={[0.12, 0.5, 6, 12]} />
            <meshStandardMaterial color="#4b5563" />
          </mesh>
          <mesh position={[0.55, 0.1, 0]} rotation={[0, 0, -0.4]}>
            <capsuleGeometry args={[0.12, 0.5, 6, 12]} />
            <meshStandardMaterial color="#4b5563" />
          </mesh>
          {/* Legs */}
          <mesh position={[-0.2, -0.9, 0]}>
            <capsuleGeometry args={[0.12, 0.6, 6, 12]} />
            <meshStandardMaterial color="#6b7280" />
          </mesh>
          <mesh position={[0.2, -0.9, 0]}>
            <capsuleGeometry args={[0.12, 0.6, 6, 12]} />
            <meshStandardMaterial color="#6b7280" />
          </mesh>
        </group>
      </Float>
    </group>
  );
}

export const HeroSection = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mql = window.matchMedia('(max-width: 640px)');
    const handler = () => setIsMobile(mql.matches);
    handler();
    mql.addEventListener ? mql.addEventListener('change', handler) : mql.addListener(handler);
    return () => {
      mql.removeEventListener ? mql.removeEventListener('change', handler) : mql.removeListener(handler);
    };
  }, []);

  const keyIntensity = isMobile ? 0.85 : 1.3;
  const fillIntensity = isMobile ? 0.5 : 0.9;
  const pointIntensity = isMobile ? 0.7 : 1.1;
  const wrapperOpacity = isMobile ? 0.7 : 1;
  const wrapperClass =
    "pointer-events-none sm:pointer-events-auto absolute right-[-12%] sm:right-[-6%] md:right-0 top-[38%] sm:top-1/2 -translate-y-1/2 w-[58vw] h-[40vh] sm:w-[50vw] sm:h-[50vh] md:w-[42vw] md:h-[70vh] lg:w-[36vw] lg:h-[78vh] xl:w-[30vw] xl:h-[82vh]";

  return (
    <section id="hero" className="relative min-h-screen px-4 flex items-center justify-center overflow-hidden">
      {/* Astronaut background on the right */}
      <div className={wrapperClass} style={{ opacity: wrapperOpacity }}>
        <Canvas camera={{ position: [0, 0, 3.2] }} dpr={[1, 2]}>
          <ambientLight intensity={0.35} />
          <hemisphereLight intensity={0.5} groundColor={0x0b0b0b} color={0x9aa0ff} />
          <directionalLight position={[3, 4, 2]} intensity={keyIntensity} color={0x8aa0ff} />
          <directionalLight position={[-4, 2, -3]} intensity={fillIntensity} color={0xffe6aa} />
          <pointLight position={[-3, 1, -2]} intensity={pointIntensity} color={0x8da2fb} />
          <StylizedAstronaut />
        </Canvas>
      </div>

      <div className="container mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left: Text */}
        <div className="text-left space-y-6 relative z-10 flex flex-col justify-center min-h-[60vh] sm:min-h-[70vh]">
          <h1 className="fluid-h1 font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in"> Hi👋, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1"> Shreyas</span>
            <span className="ml-2 opacity-0 animate-fade-in-delay-2"> Bandekar</span>
          </h1>
          <div className="fluid-subtitle text-primary/90 font-medium">
            <Typewriter
              words={["Web Developer", "AI/ML Enthusiast", "Software Engineer"]}
              typingSpeed={110}
              deletingSpeed={60}
              pauseBetween={1200}
            />
          </div>
          <p className="fluid-body text-muted-foreground max-w-2xl opacity-0 animate-fade-in-delay-3">
            I’m a passionate Web Developer and AI/ML enthusiast, creating seamless digital experiences while exploring the possibilities of intelligent technology. My work blends creativity, code, and curiosity to build solutions that are both functional and future-ready.
          </p>
          <div className="pt-2 opacity-0 animate-fade-in-delay-4 flex flex-wrap gap-3">
            <a href="#projects" className="cosmic-button">View My Work</a>
            <a href="/SHREYASBANDEKAR.pdf" target="_blank" rel="noopener noreferrer" className="cosmic-button">
              View Resume
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
