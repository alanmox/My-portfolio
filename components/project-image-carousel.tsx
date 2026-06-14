'use client'

import { useState } from 'react'
import Image from 'next/image'

interface ProjectImageCarouselProps {
  images: string[]
  alt: string
}

export function ProjectImageCarousel({ images, alt }: ProjectImageCarouselProps) {
  const [current, setCurrent] = useState(0)

  if (images.length === 0) return null

  return (
    <div className="relative h-48 sm:h-56 overflow-hidden bg-black/20">
      <Image
        src={images[current]}
        alt={`${alt} - image ${current + 1}`}
        fill
        className="object-contain p-2 transition-opacity duration-300"
        sizes="(max-width: 768px) 100vw, 50vw"
        priority={current === 0}
      />
      {images.length > 1 && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`size-2 rounded-full transition-all duration-200 ${
                i === current
                  ? 'bg-white w-4'
                  : 'bg-white/50 hover:bg-white/80'
              }`}
              aria-label={`View image ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
