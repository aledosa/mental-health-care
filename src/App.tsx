"use client"

import { useEffect, useState } from 'react'
import './App.css'
import SuicidePreventionCards from "./components/molecules/SuicidePreventionCards"
import ParallaxBackground from "./components/atoms/ParallaxBackground"
import WaveEffect from "./components/atoms/WaveEffect"


export const metadata = {
  title: "Líneas de prevención del suicidio en Yucatán",
  description: "Información sobre líneas de prevención del suicidio en Yucatán",
}

function App() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <main className="min-h-screen relative overflow-hidden">
      <ParallaxBackground />
      <div className="relative z-10 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-white mb-12">¡No estás solo!</h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-center text-white mb-8">
            Líneas de prevención del suicidio en Yucatán
          </h2>
          <SuicidePreventionCards />
          <p className="text-xl text-center text-white mt-12 font-semibold">
            Recuperar el sentido y las ganas de vivir es posible.
          </p>
        </div>
      </div>
      <WaveEffect />
    </main>
  )
}

export default App
