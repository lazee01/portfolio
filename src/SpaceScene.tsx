import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { useMemo, useRef } from 'react'
import type { Group, Mesh, MeshStandardMaterial, Points } from 'three'
import type { ThreeElements } from '@react-three/fiber'

declare global {
  namespace JSX {
    interface IntrinsicElements extends ThreeElements {}
  }
}

function NeuralCore() {
  const mesh = useRef<Mesh>(null)
  const material = useRef<MeshStandardMaterial>(null)

  useFrame(({ clock }, delta) => {
    if (!mesh.current) return
    mesh.current.rotation.y += delta * 0.22
    mesh.current.rotation.x += delta * 0.08
    mesh.current.scale.setScalar(1 + Math.sin(clock.getElapsedTime() * 1.7) * 0.035)
    if (material.current) material.current.emissiveIntensity = 1.25 + Math.sin(clock.getElapsedTime() * 2) * 0.2
  })

  return (
    <mesh ref={mesh}>
      <icosahedronGeometry args={[1.2, 2]} />
      <meshStandardMaterial ref={material} color="#173b5a" emissive="#0b758f" emissiveIntensity={1.4} roughness={0.25} metalness={0.65} wireframe />
    </mesh>
  )
}

function OrbitalRing({ radius, rotation, color }: { radius: number; rotation: [number, number, number]; color: string }) {
  const ring = useRef<Mesh>(null)
  useFrame((_, delta) => {
    if (ring.current) ring.current.rotation.z += delta * 0.08
  })
  return (
    <mesh ref={ring} rotation={rotation}>
      <torusGeometry args={[radius, 0.008, 8, 96]} />
      <meshBasicMaterial color={color} transparent opacity={0.46} />
    </mesh>
  )
}

function OrbitingSignal({ radius, speed, color }: { radius: number; speed: number; color: string }) {
  const mesh = useRef<Mesh>(null)

  useFrame(({ clock }) => {
    if (!mesh.current) return
    const time = clock.getElapsedTime() * speed
    mesh.current.position.set(Math.cos(time) * radius, Math.sin(time * 1.25) * 0.45, Math.sin(time) * radius)
  })

  return (
    <mesh ref={mesh}>
      <sphereGeometry args={[0.07, 12, 12]} />
      <meshBasicMaterial color={color} />
    </mesh>
  )
}

function Starfield() {
  const points = useMemo(() => {
    const positions = new Float32Array(420 * 3)
    for (let index = 0; index < positions.length; index += 3) {
      const radius = 5 + ((index * 17) % 120) / 10
      const theta = (index * 13.37) % (Math.PI * 2)
      const phi = ((index * 7.11) % Math.PI) - Math.PI / 2
      positions[index] = Math.cos(theta) * Math.cos(phi) * radius
      positions[index + 1] = Math.sin(phi) * radius
      positions[index + 2] = Math.sin(theta) * Math.cos(phi) * radius
    }
    return positions
  }, [])
  const pointsObject = useRef<Points>(null)

  useFrame((_, delta) => {
    if (pointsObject.current) pointsObject.current.rotation.y += delta * 0.006
  })

  return (
    <points ref={pointsObject}>
      <bufferGeometry attach="geometry">
        <bufferAttribute attach="attributes-position" args={[points, 3]} />
      </bufferGeometry>
      <pointsMaterial attach="material" color="#9cecf5" size={0.035} sizeAttenuation transparent opacity={0.78} />
    </points>
  )
}

function InteractiveSpace() {
  const group = useRef<Group>(null)
  const { pointer } = useThree()

  useFrame((_, delta) => {
    if (!group.current) return
    group.current.rotation.y += delta * 0.025
    group.current.rotation.x += (pointer.y * 0.12 - group.current.rotation.x) * delta * 2
    group.current.rotation.z += (pointer.x * 0.16 - group.current.rotation.z) * delta * 2
  })

  return (
    <group ref={group}>
      <NeuralCore />
      <OrbitalRing radius={1.48} rotation={[0.72, 0.2, 0.1]} color="#67e8f9" />
      <OrbitalRing radius={1.82} rotation={[-0.42, 0.55, 0.8]} color="#aa8bfa" />
      <OrbitingSignal radius={1.9} speed={0.52} color="#67e8f9" />
      <OrbitingSignal radius={1.55} speed={-0.78} color="#aa8bfa" />
      <OrbitingSignal radius={2.2} speed={0.32} color="#d9f99d" />
    </group>
  )
}

export function SpaceScene() {
  return (
    <Canvas
      className="space-canvas"
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 5.2], fov: 38 }}
      gl={{ alpha: true, antialias: true, powerPreference: 'high-performance' }}
      aria-label="Animated 3D neural network orbit"
    >
      <ambientLight intensity={0.4} />
      <pointLight position={[3, 2, 4]} color="#67e8f9" intensity={18} distance={8} />
      <pointLight position={[-3, -2, 2]} color="#aa8bfa" intensity={12} distance={7} />
      <Starfield />
      <InteractiveSpace />
    </Canvas>
  )
}
