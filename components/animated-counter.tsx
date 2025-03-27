"use client"

import { useEffect, useState, useRef } from "react"
import { useInView } from "react-intersection-observer"

interface AnimatedCounterProps {
  end: number
  duration?: number
  prefix?: string
  suffix?: string
  className?: string
}

export default function AnimatedCounter({
  end,
  duration = 2000,
  prefix = "",
  suffix = "",
  className = "text-4xl font-bold text-blue-primary",
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const countRef = useRef(0)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    if (inView) {
      const startTime = Date.now()
      const timer = setInterval(() => {
        const timePassed = Date.now() - startTime
        const progress = Math.min(timePassed / duration, 1)

        // Use easeOutQuad for smoother animation
        const easeOutQuad = (t: number) => t * (2 - t)
        const nextCount = Math.floor(easeOutQuad(progress) * end)

        if (nextCount !== countRef.current) {
          countRef.current = nextCount
          setCount(nextCount)
        }

        if (progress === 1) {
          clearInterval(timer)
        }
      }, 16)

      return () => clearInterval(timer)
    }
  }, [inView, end, duration])

  return (
    <div ref={ref} className={className}>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </div>
  )
}

