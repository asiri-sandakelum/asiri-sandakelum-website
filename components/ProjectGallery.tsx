"use client"

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

type Props = {
  images: string[]
  title?: string
}

export default function ProjectGallery({ images, title }: Props) {
  const [isOpen, setIsOpen] = useState(false)
  const [idx, setIdx] = useState(0)

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (!isOpen) return
      if (e.key === 'Escape') setIsOpen(false)
      if (e.key === 'ArrowLeft') setIdx((i) => (i - 1 + images.length) % images.length)
      if (e.key === 'ArrowRight') setIdx((i) => (i + 1) % images.length)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [isOpen, images.length])

  function open(i: number) {
    setIdx(i)
    setIsOpen(true)
  }

  function prev() {
    setIdx((i) => (i - 1 + images.length) % images.length)
  }

  function next() {
    setIdx((i) => (i + 1) % images.length)
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {images.map((src, i) => (
          <button
            key={i}
            onClick={() => open(i)}
            className="relative w-full aspect-video overflow-hidden border border-[#1e1e1e] hover:border-[#00e5ff]/20 transition-colors"
            aria-label={`Open image ${i + 1}`}
          >
            <Image src={src} alt={`${title ?? 'Project'} - ${i + 1}`} fill className="object-cover" />
            <div className="absolute bottom-3 left-3 font-mono text-xs text-white/40 tracking-widest">FIG. {String(i + 1).padStart(2, '0')}</div>
          </button>
        ))}
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-6 right-6 p-2 rounded-md bg-black/40 hover:bg-black/30"
            aria-label="Close"
          >
            <X size={20} />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); prev() }}
            className="absolute left-6 top-1/2 -translate-y-1/2 p-2 rounded-md bg-black/40 hover:bg-black/30"
            aria-label="Previous"
          >
            <ChevronLeft size={28} />
          </button>

          <div className="w-[90vw] h-[80vh] max-w-5xl max-h-[80vh] relative">
            <Image src={images[idx]} alt={`${title ?? 'Project'} - ${idx + 1}`} fill className="object-contain" />
          </div>

          <button
            onClick={(e) => { e.stopPropagation(); next() }}
            className="absolute right-6 top-1/2 -translate-y-1/2 p-2 rounded-md bg-black/40 hover:bg-black/30"
            aria-label="Next"
          >
            <ChevronRight size={28} />
          </button>
        </div>
      )}
    </>
  )
}
