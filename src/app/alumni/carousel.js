'use client'
import { useState, useEffect, useCallback } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import AlumniCard from "./alumni_card"

export default function Carousel({ alumnis }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [cardsPerView, setCardsPerView] = useState(1)

  const handleResize = useCallback(() => {
    if (window.innerWidth >= 1280) setCardsPerView(3)
    else if (window.innerWidth >= 768) setCardsPerView(2)
    else setCardsPerView(1)
  }, [])

  useEffect(() => {
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [handleResize])

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.max(alumnis.length - cardsPerView, 1))
  }, [alumnis.length, cardsPerView])

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + Math.max(alumnis.length - cardsPerView, 1)) % Math.max(alumnis.length - cardsPerView, 1))
  }, [alumnis.length, cardsPerView])

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 100000)
    return () => clearInterval(interval)
  }, [nextSlide])

  return (
    <div className="relative w-full px-12">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)` }}
        >
          {alumnis.map((alumni, index) => (
            <div
              key={index}
              className={`flex-shrink-0 px-4 ${cardsPerView === 1 ? "w-full" : cardsPerView === 2 ? "w-1/2" : "w-1/3"}`}
            >
              <AlumniCard alumni={alumni} />
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-gray-600" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-gray-600" />
      </button>
    </div>
  )
}
