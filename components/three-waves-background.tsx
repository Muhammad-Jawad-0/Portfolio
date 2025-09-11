"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { useRef, useMemo } from "react"
import type { Mesh } from "three"
import { useTheme } from "next-themes"

const WaveShader = {
  vertexShader: `
    uniform float uTime;
    uniform float uAmplitude;
    varying vec2 vUv;
    varying float vElevation;

    void main() {
      vUv = uv;
      
      vec4 modelPosition = modelMatrix * vec4(position, 1.0);
      
      float elevation = sin(modelPosition.x * 0.5 + uTime * 0.8) * 
                       sin(modelPosition.z * 0.3 + uTime * 0.6) * 
                       uAmplitude;
      
      elevation += sin(modelPosition.x * 0.8 + uTime * 1.2) * 
                   sin(modelPosition.z * 0.5 + uTime * 0.9) * 
                   uAmplitude * 0.5;
      
      modelPosition.y += elevation;
      vElevation = elevation;
      
      vec4 viewPosition = viewMatrix * modelPosition;
      vec4 projectedPosition = projectionMatrix * viewPosition;
      
      gl_Position = projectedPosition;
    }
  `,
  fragmentShader: `
    uniform float uTime;
    uniform vec3 uColorA;
    uniform vec3 uColorB;
    uniform vec3 uColorC;
    varying vec2 vUv;
    varying float vElevation;

    void main() {
      float mixStrength = (vElevation + 0.25) * 2.0;
      mixStrength = smoothstep(0.0, 1.0, mixStrength);
      
      vec3 color = mix(uColorA, uColorB, mixStrength);
      color = mix(color, uColorC, vUv.y * 0.3);
      
      float alpha = 0.6 + sin(uTime * 0.5 + vUv.x * 3.14159) * 0.2;
      
      gl_FragColor = vec4(color, alpha);
    }
  `,
}

function WaveMesh() {
  const meshRef = useRef<Mesh>(null)
  const { theme } = useTheme()

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uAmplitude: { value: 0.15 },
      uColorA: { value: theme === "dark" ? [0.4, 0.2, 0.8] : [0.6, 0.3, 0.9] },
      uColorB: { value: theme === "dark" ? [0.2, 0.1, 0.6] : [0.8, 0.5, 1.0] },
      uColorC: { value: theme === "dark" ? [0.1, 0.05, 0.3] : [0.9, 0.7, 1.0] },
    }),
    [theme],
  )

  useFrame((state) => {
    if (meshRef.current) {
      uniforms.uTime.value = state.clock.elapsedTime
      // Update colors based on theme
      if (theme === "dark") {
        uniforms.uColorA.value = [0.4, 0.2, 0.8]
        uniforms.uColorB.value = [0.2, 0.1, 0.6]
        uniforms.uColorC.value = [0.1, 0.05, 0.3]
      } else {
        uniforms.uColorA.value = [0.6, 0.3, 0.9]
        uniforms.uColorB.value = [0.8, 0.5, 1.0]
        uniforms.uColorC.value = [0.9, 0.7, 1.0]
      }
    }
  })

  return (
    <mesh ref={meshRef} rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]}>
      <planeGeometry args={[20, 20, 128, 128]} />
      <shaderMaterial
        uniforms={uniforms}
        vertexShader={WaveShader.vertexShader}
        fragmentShader={WaveShader.fragmentShader}
        transparent
        wireframe={false}
      />
    </mesh>
  )
}

export function ThreeWavesBackground() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 5, 8], fov: 45 }} style={{ background: "transparent" }} dpr={[1, 2]}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <WaveMesh />
      </Canvas>
    </div>
  )
}
