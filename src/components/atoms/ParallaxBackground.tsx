"use client"

import { useEffect, useState } from "react"

export default function ParallaxBackground() {
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.pageYOffset)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div
      className="absolute inset-0 z-0"
      style={{
        background: "linear-gradient(45deg, #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d)",
        backgroundSize: "400% 400%",
        animation: "gradient 15s ease infinite",
        transform: `translateY(${offset * 0.5}px)`,
      }}
    >
      <div className="absolute inset-0 bg-white/30 backdrop-blur-[100px]" />
    </div>
  )
}

