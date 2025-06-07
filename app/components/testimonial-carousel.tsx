"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CTO, TechStart Inc.",
    content:
      "Recover Right's rapid response team helped us regain control of our compromised systems within hours. Their expertise and professionalism during our crisis was exceptional. The 24/7 support made all the difference.",
    image: "/placeholder.svg?height=120&width=120",
    side: "cyber",
    rating: 5,
    company: "TechStart Inc.",
  },
  {
    name: "Michael Chen",
    role: "DeFi Protocol Founder",
    content:
      "The smart contract audit conducted by Recover Right identified critical vulnerabilities that could have cost us millions. Their detailed report and recommendations helped us launch with confidence. Absolutely essential for any Web3 project.",
    image: "/placeholder.svg?height=120&width=120",
    side: "web3",
    rating: 5,
    company: "DeFi Protocol",
  },
  {
    name: "Emily Rodriguez",
    role: "Digital Marketing Director",
    content:
      "After a major data breach exposed our customer information, Recover Right's team quickly contained the situation and implemented robust security measures. Their data leak removal service was thorough and effective.",
    image: "/placeholder.svg?height=120&width=120",
    side: "cyber",
    rating: 5,
    company: "Marketing Solutions",
  },
  {
    name: "David Park",
    role: "NFT Marketplace CEO",
    content:
      "The Web3 penetration testing revealed security gaps we never knew existed. Recover Right's comprehensive approach to blockchain security is unmatched. They've become our trusted security partner.",
    image: "/placeholder.svg?height=120&width=120",
    side: "web3",
    rating: 5,
    company: "NFT Marketplace",
  },
]

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [autoplay])

  const next = () => {
    setAutoplay(false)
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setAutoplay(false)
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="relative max-w-5xl mx-auto">
      <div className="relative h-96 md:h-80">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 100, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -100, scale: 0.9 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <div className="relative">
              <div
                className={`absolute -inset-4 rounded-3xl blur-xl ${
                  testimonials[current].side === "cyber"
                    ? "bg-gradient-to-r from-yellow-300/20 to-yellow-400/20"
                    : "bg-gradient-to-r from-sky-300/20 to-cyan-400/20"
                }`}
              ></div>

              <Card
                className={`relative p-8 md:p-10 h-full ${
                  testimonials[current].side === "cyber"
                    ? "bg-gradient-to-br from-white via-yellow-50/30 to-yellow-100/30 border-l-4 border-yellow-400"
                    : "bg-gradient-to-br from-white/90 via-sky-50/30 to-cyan-50/30 backdrop-blur-lg border-r-4 border-sky-400"
                } shadow-2xl`}
              >
                <div className="flex flex-col md:flex-row gap-6 h-full">
                  <div className="flex-shrink-0 text-center md:text-left">
                    <div className="relative mx-auto md:mx-0 w-24 h-24 mb-4">
                      <div
                        className={`absolute inset-0 rounded-full ${
                          testimonials[current].side === "cyber"
                            ? "bg-gradient-to-r from-yellow-300/30 to-yellow-400/30"
                            : "bg-gradient-to-r from-sky-300/30 to-cyan-400/30"
                        }`}
                        style={{ transform: "scale(1.2)" }}
                      ></div>
                      <img
                        src={testimonials[current].image || "/placeholder.svg"}
                        alt={testimonials[current].name}
                        className="w-24 h-24 rounded-full object-cover relative z-10 border-4 border-white shadow-lg"
                      />
                    </div>

                    <div className="mb-4">
                      <h4 className="font-bold text-xl text-gray-800">{testimonials[current].name}</h4>
                      <p
                        className={`text-sm font-medium ${
                          testimonials[current].side === "cyber" ? "text-yellow-600" : "text-sky-600"
                        }`}
                      >
                        {testimonials[current].role}
                      </p>
                      <p className="text-xs text-gray-500">{testimonials[current].company}</p>
                    </div>

                    <div className="flex justify-center md:justify-start space-x-1 mb-4">
                      {[...Array(testimonials[current].rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>

                  <div className="flex-1 flex flex-col justify-center">
                    <Quote
                      className={`h-10 w-10 mb-4 ${
                        testimonials[current].side === "cyber" ? "text-yellow-500" : "text-sky-500"
                      }`}
                    />
                    <p className="text-gray-700 text-lg leading-relaxed italic">"{testimonials[current].content}"</p>
                  </div>
                </div>
              </Card>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex justify-center mt-8 gap-4 items-center">
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Button
            variant="outline"
            size="icon"
            onClick={prev}
            className="rounded-full bg-white/80 backdrop-blur-sm border-gray-200 hover:bg-gray-50"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
        </motion.div>

        <div className="flex items-center gap-2">
          {testimonials.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => {
                setAutoplay(false)
                setCurrent(index)
              }}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              className={`rounded-full transition-all duration-300 ${
                current === index
                  ? "w-8 h-3 bg-gradient-to-r from-purple-500 to-pink-500"
                  : "w-3 h-3 bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>

        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Button
            variant="outline"
            size="icon"
            onClick={next}
            className="rounded-full bg-white/80 backdrop-blur-sm border-gray-200 hover:bg-gray-50"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </div>
  )
}
