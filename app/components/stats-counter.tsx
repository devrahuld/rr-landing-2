"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"

const stats = [
  { number: 10000, suffix: "+", label: "Clients Protected", icon: "🛡️" },
  { number: 99.7, suffix: "%", label: "Success Rate", icon: "🎯" },
  { number: 500, suffix: "+", label: "Smart Contracts Audited", icon: "🔍" },
  { number: 24, suffix: "/7", label: "Emergency Support", icon: "⚡" },
]

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      const duration = 2000
      const steps = 60
      const increment = target / steps
      let current = 0

      const timer = setInterval(() => {
        current += increment
        if (current >= target) {
          setCount(target)
          clearInterval(timer)
        } else {
          setCount(Math.floor(current))
        }
      }, duration / steps)

      return () => clearInterval(timer)
    }
  }, [isInView, target])

  return (
    <span ref={ref} className="text-4xl md:text-5xl lg:text-6xl font-bold">
      {count}
      {suffix}
    </span>
  )
}

export default function StatsCounter() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.div whileHover={{ scale: 1.1, rotate: 10 }} className="text-4xl md:text-5xl mb-4">
            {stat.icon}
          </motion.div>
          <div className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-sky-500">
            <Counter target={stat.number} suffix={stat.suffix} />
          </div>
          <p className="text-gray-600 font-medium mt-2">{stat.label}</p>
        </motion.div>
      ))}
    </div>
  )
}
