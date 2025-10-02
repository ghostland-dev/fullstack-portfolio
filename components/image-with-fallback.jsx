"use client"

import { useState } from "react"
import Image from "next/image"

export default function ImageWithFallback({ src, alt, fallbackSrc = "/placeholder.svg", ...props }) {
  const [imgSrc, setImgSrc] = useState(src)
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div className={`relative ${isLoading ? "bg-muted animate-pulse" : ""}`}>
      <Image
        src={imgSrc || "/placeholder.svg"}
        alt={alt}
        {...props}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setImgSrc(fallbackSrc)
          setIsLoading(false)
        }}
      />
    </div>
  )
}

