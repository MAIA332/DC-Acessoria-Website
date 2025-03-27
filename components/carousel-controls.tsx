"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"

interface CarouselControlsProps {
  prevSlide: () => void
  nextSlide: () => void
  totalSlides: number
  currentIndex: number
  goToSlide: (index: number) => void
  visibleSlides?: number
}

export default function CarouselControls({
  prevSlide,
  nextSlide,
  totalSlides,
  currentIndex,
  goToSlide,
  visibleSlides = 1,
}: CarouselControlsProps) {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="flex justify-between w-full absolute top-1/2 -translate-y-1/2 left-0 right-0 px-4 md:px-0">
        <button
          onClick={prevSlide}
          className="bg-background/80 hover:bg-background rounded-full p-2 shadow-md hidden md:flex items-center justify-center"
          aria-label="Anterior"
        >
          <ChevronLeft className="h-6 w-6 text-blue-primary" />
        </button>
        <button
          onClick={nextSlide}
          className="bg-background/80 hover:bg-background rounded-full p-2 shadow-md hidden md:flex items-center justify-center"
          aria-label="Próximo"
        >
          <ChevronRight className="h-6 w-6 text-blue-primary" />
        </button>
      </div>

      <div className="flex justify-center mt-8 space-x-2">
        {Array.from({ length: totalSlides }).map((_, index) => {
          // Calculate if this indicator should be active
          const isActive = index >= currentIndex && index < currentIndex + visibleSlides
          // For wrapping around at the end
          const isWrappedActive =
            currentIndex + visibleSlides > totalSlides && index < (currentIndex + visibleSlides) % totalSlides

          return (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                isActive || isWrappedActive ? "bg-blue-primary" : "bg-blue-primary/30"
              }`}
              aria-label={`Ir para slide ${index + 1}`}
            />
          )
        })}
      </div>
    </div>
  )
}

