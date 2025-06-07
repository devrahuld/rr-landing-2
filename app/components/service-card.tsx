"use client"

import type React from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ServiceCardProps {
  title: string
  description: string
  icon: React.ReactNode
  color: string
  features: string[]
  index: number
}

export default function ServiceCard({ title, description, icon, color, features, index }: ServiceCardProps) {
  const isCyber = color === "cyber"
  const cyberColors = {
    gradient: "from-yellow-300/20 to-yellow-400/20 group-hover:from-yellow-300/30 group-hover:to-yellow-400/30",
    bg: "bg-gradient-to-br from-white via-yellow-50/30 to-yellow-100/30",
    iconBg: "bg-gradient-to-r from-yellow-400 to-yellow-500 shadow-lg shadow-yellow-400/25",
    text: "text-yellow-500",
    button:
      "bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 shadow-lg shadow-yellow-400/25",
  }
  const web3Colors = {
    gradient: "from-sky-300/20 to-cyan-400/20 group-hover:from-sky-300/30 group-hover:to-cyan-400/30",
    bg: "bg-gradient-to-br from-white/80 via-sky-50/30 to-cyan-50/30 backdrop-blur-lg",
    iconBg: "bg-gradient-to-r from-sky-400 to-cyan-500 shadow-lg shadow-sky-400/25",
    text: "text-sky-500",
    button:
      "bg-gradient-to-r from-sky-400 to-cyan-500 hover:from-sky-500 hover:to-cyan-600 shadow-lg shadow-sky-400/25",
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group"
    >
      <div className="relative">
        <div
          className={`absolute -inset-4 rounded-3xl blur-xl transition-all duration-300 group-hover:blur-2xl ${
            isCyber ? cyberColors.gradient : web3Colors.gradient
          }`}
        ></div>

        <Card
          className={`relative overflow-hidden border-none shadow-2xl transition-all duration-300 ${
            isCyber ? cyberColors.bg : web3Colors.bg
          }`}
        >
          <CardHeader className="pb-4">
            <div className="flex items-center justify-between mb-4">
              <div
                className={`p-4 rounded-2xl transition-all duration-300 group-hover:scale-110 ${
                  isCyber ? cyberColors.iconBg : web3Colors.iconBg
                }`}
              >
                <div className="text-white">{icon}</div>
              </div>
              <motion.div
                whileHover={{ rotate: 45 }}
                className={`p-2 rounded-full ${isCyber ? "bg-amber-100" : "bg-blue-100"}`}
              >
                <ArrowRight className={`h-5 w-5 ${isCyber ? "text-yellow-600" : "text-sky-600"}`} />
              </motion.div>
            </div>
            <CardTitle className="text-2xl font-bold text-gray-800 group-hover:text-gray-900 transition-colors">
              {title}
            </CardTitle>
          </CardHeader>

          <CardContent className="space-y-6">
            <p className="text-gray-600 leading-relaxed">{description}</p>

            <div className="space-y-3">
              <h4 className="font-semibold text-gray-800">Key Features:</h4>
              {features.map((feature, featureIndex) => (
                <motion.div
                  key={featureIndex}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + featureIndex * 0.05, duration: 0.4 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3"
                >
                  <CheckCircle className={`h-5 w-5 flex-shrink-0 ${isCyber ? "text-yellow-500" : "text-sky-500"}`} />
                  <span className="text-gray-700 font-medium">{feature}</span>
                </motion.div>
              ))}
            </div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="pt-4">
              <Button
                className={`w-full rounded-xl font-semibold transition-all duration-300 ${
                  isCyber ? cyberColors.button : web3Colors.button
                }`}
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  )
}
