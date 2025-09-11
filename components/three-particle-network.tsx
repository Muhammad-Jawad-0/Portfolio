"use client"

import { useRef, useMemo } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { useTheme } from "next-themes"
import type * as THREE from "three"

interface ParticleNetworkProps {
  count?: number
}

function ParticleSystem({ count = 100 }: ParticleNetworkProps) {
  const meshRef = useRef<THREE.Points>(null!)
  const linesRef = useRef<THREE.LineSegments>(null!)
  const { theme } = useTheme()
  const { mouse, viewport } = useThree()

  // Generate particle positions
  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3)
    const velocities = new Float32Array(count * 3)

    for (let i = 0; i < count; i++) {
      // Random positions within viewport
      positions[i * 3] = (Math.random() - 0.5) * 20
      positions[i * 3 + 1] = (Math.random() - 0.5) * 15
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10

      // Random velocities
      velocities[i * 3] = (Math.random() - 0.5) * 0.02
      velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.02
      velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.02
    }

    return { positions, velocities }
  }, [count])

  // Create line connections
  const connections = useMemo(() => {
    const linePositions: number[] = []
    const maxDistance = 3

    for (let i = 0; i < count; i++) {
      for (let j = i + 1; j < count; j++) {
        const dx = particles.positions[i * 3] - particles.positions[j * 3]
        const dy = particles.positions[i * 3 + 1] - particles.positions[j * 3 + 1]
        const dz = particles.positions[i * 3 + 2] - particles.positions[j * 3 + 2]
        const distance = Math.sqrt(dx * dx + dy * dy + dz * dz)

        if (distance < maxDistance) {
          linePositions.push(
            particles.positions[i * 3],
            particles.positions[i * 3 + 1],
            particles.positions[i * 3 + 2],
            particles.positions[j * 3],
            particles.positions[j * 3 + 1],
            particles.positions[j * 3 + 2],
          )
        }
      }
    }

    return new Float32Array(linePositions)
  }, [particles.positions, count])

  useFrame((state) => {
    if (!meshRef.current || !linesRef.current) return

    const positions = meshRef.current.geometry.attributes.position.array as Float32Array
    const linePositions = linesRef.current.geometry.attributes.position.array as Float32Array

    // Update particle positions
    for (let i = 0; i < count; i++) {
      // Apply velocity
      positions[i * 3] += particles.velocities[i * 3]
      positions[i * 3 + 1] += particles.velocities[i * 3 + 1]
      positions[i * 3 + 2] += particles.velocities[i * 3 + 2]

      // Boundary checks
      if (positions[i * 3] > 10 || positions[i * 3] < -10) particles.velocities[i * 3] *= -1
      if (positions[i * 3 + 1] > 7.5 || positions[i * 3 + 1] < -7.5) particles.velocities[i * 3 + 1] *= -1
      if (positions[i * 3 + 2] > 5 || positions[i * 3 + 2] < -5) particles.velocities[i * 3 + 2] *= -1

      // Mouse interaction - attract particles to cursor
      const mouseX = (mouse.x * viewport.width) / 2
      const mouseY = (mouse.y * viewport.height) / 2

      const dx = mouseX - positions[i * 3]
      const dy = mouseY - positions[i * 3 + 1]
      const distance = Math.sqrt(dx * dx + dy * dy)

      if (distance < 3) {
        const force = (3 - distance) / 3
        particles.velocities[i * 3] += dx * force * 0.0001
        particles.velocities[i * 3 + 1] += dy * force * 0.0001
      }
    }

    // Update line connections
    let lineIndex = 0
    const maxDistance = 3

    for (let i = 0; i < count; i++) {
      for (let j = i + 1; j < count; j++) {
        const dx = positions[i * 3] - positions[j * 3]
        const dy = positions[i * 3 + 1] - positions[j * 3 + 1]
        const dz = positions[i * 3 + 2] - positions[j * 3 + 2]
        const distance = Math.sqrt(dx * dx + dy * dy + dz * dz)

        if (distance < maxDistance && lineIndex < linePositions.length / 6) {
          linePositions[lineIndex * 6] = positions[i * 3]
          linePositions[lineIndex * 6 + 1] = positions[i * 3 + 1]
          linePositions[lineIndex * 6 + 2] = positions[i * 3 + 2]
          linePositions[lineIndex * 6 + 3] = positions[j * 3]
          linePositions[lineIndex * 6 + 4] = positions[j * 3 + 1]
          linePositions[lineIndex * 6 + 5] = positions[j * 3 + 2]
          lineIndex++
        }
      }
    }

    meshRef.current.geometry.attributes.position.needsUpdate = true
    linesRef.current.geometry.attributes.position.needsUpdate = true
  })

  const particleColor = theme === "dark" ? "#8b5cf6" : "#6366f1"
  const lineColor = theme === "dark" ? "#4c1d95" : "#3730a3"

  return (
    <>
      {/* Particles */}
      <points ref={meshRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" count={count} array={particles.positions} itemSize={3} />
        </bufferGeometry>
        <pointsMaterial color={particleColor} size={0.1} sizeAttenuation={true} transparent={true} opacity={0.8} />
      </points>

      {/* Connection Lines */}
      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={connections.length / 3}
            array={connections}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial color={lineColor} transparent={true} opacity={0.3} />
      </lineSegments>
    </>
  )
}

export function ThreeParticleNetwork() {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas camera={{ position: [0, 0, 10], fov: 60 }} style={{ background: "transparent" }}>
        <ParticleSystem count={80} />
      </Canvas>
    </div>
  )
}
