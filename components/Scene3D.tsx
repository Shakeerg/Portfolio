'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { useMemo, useRef } from 'react'
import * as THREE from 'three'

type AIState = 'idle' | 'thinking' | 'listening' | 'responding'

interface AICoreProps {
  state?: AIState
}

const STATE_CONFIG = {
  idle: {
    speed: 0.35,
    pulse: 0.08,
    scale: 1,
  },
  thinking: {
    speed: 1.8,
    pulse: 0.22,
    scale: 1.08,
  },
  listening: {
    speed: 1.2,
    pulse: 0.18,
    scale: 1.04,
  },
  responding: {
    speed: 2.4,
    pulse: 0.28,
    scale: 1.12,
  },
}

function AICore({ state = 'idle' }: AICoreProps) {
  const groupRef = useRef<THREE.Group>(null)
  const coreRef = useRef<THREE.Mesh>(null)
  const ring1Ref = useRef<THREE.Mesh>(null)
  const ring2Ref = useRef<THREE.Mesh>(null)
  const ring3Ref = useRef<THREE.Mesh>(null)

  const config = STATE_CONFIG[state]

  const particles = useMemo(() => {
    const count = 180
    const positions = new Float32Array(count * 3)

    for (let i = 0; i < count; i++) {
      const radius = 1.55 + Math.random() * 0.8
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)

      positions[i * 3] =
        radius * Math.sin(phi) * Math.cos(theta)

      positions[i * 3 + 1] =
        radius * Math.sin(phi) * Math.sin(theta)

      positions[i * 3 + 2] =
        radius * Math.cos(phi)
    }

    return positions
  }, [])

  useFrame((frame, delta) => {
    const time = frame.clock.elapsedTime

    if (!groupRef.current) return

    groupRef.current.rotation.y += delta * config.speed * 0.15
    groupRef.current.rotation.x =
      Math.sin(time * 0.35) * 0.08

    if (coreRef.current) {
      const breathing =
        1 +
        Math.sin(time * 2.2 * config.speed) *
          config.pulse

      const targetScale =
        config.scale * breathing

      coreRef.current.scale.lerp(
        new THREE.Vector3(
          targetScale,
          targetScale,
          targetScale
        ),
        0.08
      )
    }

    if (ring1Ref.current) {
      ring1Ref.current.rotation.z +=
        delta * config.speed * 0.8

      ring1Ref.current.rotation.x =
        Math.sin(time * 0.4) * 0.3
    }

    if (ring2Ref.current) {
      ring2Ref.current.rotation.x -=
        delta * config.speed * 0.6

      ring2Ref.current.rotation.y =
        Math.cos(time * 0.3) * 0.4
    }

    if (ring3Ref.current) {
      ring3Ref.current.rotation.y +=
        delta * config.speed * 0.35

      ring3Ref.current.rotation.z =
        Math.sin(time * 0.25) * 0.5
    }
  })

  return (
    <group ref={groupRef}>
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[particles, 3]}
          />
        </bufferGeometry>

        <pointsMaterial
          color="#7c8cff"
          size={0.025}
          transparent
          opacity={0.45}
          sizeAttenuation
        />
      </points>

      <mesh>
        <sphereGeometry args={[0.72, 32, 32]} />
        <meshBasicMaterial
          color="#4f63ff"
          transparent
          opacity={0.035}
          depthWrite={false}
        />
      </mesh>

      <mesh ref={coreRef}>
        <sphereGeometry args={[0.42, 64, 64]} />

        <meshStandardMaterial
          color="#aeb7ff"
          emissive="#4355ff"
          emissiveIntensity={
            state === 'idle'
              ? 2
              : state === 'thinking'
                ? 4
                : 3
          }
          metalness={0.15}
          roughness={0.2}
          transparent
          opacity={0.95}
        />
      </mesh>

      <mesh ref={ring1Ref} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.62, 0.018, 12, 96]} />

        <meshBasicMaterial
          color="#7182ff"
          transparent
          opacity={0.75}
        />
      </mesh>

      <mesh ref={ring2Ref} rotation={[0.8, 0.4, 0]}>
        <torusGeometry args={[0.86, 0.012, 12, 128]} />

        <meshBasicMaterial
          color="#596cff"
          transparent
          opacity={0.5}
        />
      </mesh>

      <mesh ref={ring3Ref} rotation={[0.2, 0.8, 0.4]}>
        <torusGeometry args={[1.15, 0.008, 8, 128]} />

        <meshBasicMaterial
          color="#8794ff"
          transparent
          opacity={0.28}
        />
      </mesh>
    </group>
  )
}

interface Scene3DProps {
  state?: AIState
}

const Scene3D = ({
  state = 'idle',
}: Scene3DProps) => {
  return (
    <Canvas
      camera={{
        position: [0, 0, 4.5],
        fov: 40,
      }}
      dpr={[1, 2]}
      gl={{
        alpha: true,
        antialias: true,
        powerPreference: 'high-performance',
      }}
      style={{
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
      }}
    >
      <ambientLight intensity={0.3} />

      <pointLight
        position={[2, 2, 3]}
        intensity={3}
        color="#6475ff"
      />

      <AICore state={state} />
    </Canvas>
  )
}

export default Scene3D