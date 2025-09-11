"use client"

import { useEffect, useRef } from "react"
import { useTheme } from "next-themes"

export function ThreeBackground() {
  const mountRef = useRef<HTMLDivElement>(null)
  const { theme } = useTheme()

  useEffect(() => {
    let scene: any, camera: any, renderer: any, particles: any, animationId: number

    const init = async () => {
      // Dynamic import to avoid SSR issues
      const THREE = await import("three")

      if (!mountRef.current) return

      // Scene setup
      scene = new THREE.Scene()
      camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })

      renderer.setSize(window.innerWidth, window.innerHeight)
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
      mountRef.current.appendChild(renderer.domElement)

      // Particles
      const particlesCount = 100
      const positions = new Float32Array(particlesCount * 3)
      const colors = new Float32Array(particlesCount * 3)

      for (let i = 0; i < particlesCount * 3; i += 3) {
        positions[i] = (Math.random() - 0.5) * 10
        positions[i + 1] = (Math.random() - 0.5) * 10
        positions[i + 2] = (Math.random() - 0.5) * 10

        // Color based on theme
        const color = new THREE.Color()
        if (theme === "dark") {
          color.setHSL(0.7, 0.8, 0.6) // Purple-ish for dark mode
        } else {
          color.setHSL(0.7, 0.6, 0.4) // Darker purple for light mode
        }

        colors[i] = color.r
        colors[i + 1] = color.g
        colors[i + 2] = color.b
      }

      const geometry = new THREE.BufferGeometry()
      geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3))
      geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3))

      const material = new THREE.PointsMaterial({
        size: 0.02,
        vertexColors: true,
        transparent: true,
        opacity: 0.6,
        blending: THREE.AdditiveBlending,
      })

      particles = new THREE.Points(geometry, material)
      scene.add(particles)

      camera.position.z = 5

      // Animation
      const animate = () => {
        animationId = requestAnimationFrame(animate)

        particles.rotation.x += 0.001
        particles.rotation.y += 0.002

        // Gentle floating motion
        const positions = particles.geometry.attributes.position.array
        for (let i = 1; i < positions.length; i += 3) {
          positions[i] += Math.sin(Date.now() * 0.001 + i) * 0.0001
        }
        particles.geometry.attributes.position.needsUpdate = true

        renderer.render(scene, camera)
      }

      animate()

      // Handle resize
      const handleResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight
        camera.updateProjectionMatrix()
        renderer.setSize(window.innerWidth, window.innerHeight)
      }

      window.addEventListener("resize", handleResize)

      return () => {
        window.removeEventListener("resize", handleResize)
      }
    }

    init()

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
      if (mountRef.current && renderer) {
        mountRef.current.removeChild(renderer.domElement)
        renderer.dispose()
      }
    }
  }, [theme])

  return <div ref={mountRef} className="absolute inset-0 z-0" />
}
