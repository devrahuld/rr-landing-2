"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const visionSteps = [
  {
    year: "2024",
    title: "Foundation & Growth",
    description:
      "Establishing Recover Right as the premier cybersecurity and Web3 security provider with expanded team and enhanced service offerings.",
    color: "amber",
    icon: "🚀",
    achievements: ["Team Expansion", "Service Portfolio Growth", "Client Base 10K+"],
  },
  {
    year: "2025",
    title: "AI-Powered Security",
    description:
      "Integrating artificial intelligence and machine learning for automated threat detection, smart contract analysis, and predictive security measures.",
    color: "blue",
    icon: "🤖",
    achievements: ["AI Threat Detection", "Automated Auditing", "Predictive Analytics"],
  },
  {
    year: "2026",
    title: "Global Expansion",
    description:
      "Establishing international presence with offices in key technology hubs worldwide, serving clients across all continents.",
    color: "purple",
    icon: "🌍",
    achievements: ["International Offices", "24/7 Global Support", "Multi-language Services"],
  },
  {
    year: "2027",
    title: "Industry Leadership",
    description:
      "Leading industry standards for Web3 security, contributing to blockchain security frameworks, and pioneering next-generation protection protocols.",
    color: "emerald",
    icon: "👑",
    achievements: ["Industry Standards", "Research Publications", "Security Frameworks"],
  },
]

export default function VisionTimeline() {
  return (
    <div className="relative max-w-6xl mx-auto">
      {/* Timeline line */}
      <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-yellow-400 via-sky-400 via-purple-400 to-emerald-400 transform md:-translate-x-px rounded-full"></div>

      <div className="relative space-y-12">
        {visionSteps.map((step, index) => (
          <div key={index} className="relative">
            {/* Timeline dot */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              viewport={{ once: true }}
              className={`absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 rounded-full border-4 border-white shadow-lg ${
                step.color === "amber"
                  ? "bg-yellow-400"
                  : step.color === "blue"
                    ? "bg-sky-400"
                    : step.color === "purple"
                      ? "bg-purple-400"
                      : "bg-emerald-400"
              }`}
              style={{ top: "2rem" }}
            />

            {/* Content */}
            <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:ml-auto md:pl-12"}`}>
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <div className="relative">
                  <div
                    className={`absolute -inset-4 rounded-3xl blur-xl transition-all duration-300 group-hover:blur-2xl ${
                      step.color === "amber"
                        ? "bg-gradient-to-r from-yellow-300/20 to-yellow-400/20 group-hover:from-yellow-300/30 group-hover:to-yellow-400/30"
                        : step.color === "blue"
                          ? "bg-gradient-to-r from-sky-300/20 to-cyan-400/20 group-hover:from-sky-300/30 group-hover:to-cyan-400/30"
                          : step.color === "purple"
                            ? "bg-gradient-to-r from-purple-300/20 to-pink-400/20 group-hover:from-purple-300/30 group-hover:to-pink-400/30"
                            : "bg-gradient-to-r from-emerald-300/20 to-teal-400/20 group-hover:from-emerald-300/30 group-hover:to-teal-400/30"
                    }`}
                  ></div>

                  <Card
                    className={`relative p-8 shadow-2xl border-none ${
                      step.color === "amber"
                        ? "bg-gradient-to-br from-white via-yellow-50/30 to-yellow-100/30"
                        : step.color === "blue"
                          ? "bg-gradient-to-br from-white/90 via-sky-50/30 to-cyan-50/30 backdrop-blur-lg"
                          : step.color === "purple"
                            ? "bg-gradient-to-br from-white via-purple-50/30 to-pink-50/30"
                            : "bg-gradient-to-br from-white via-emerald-50/30 to-teal-50/30"
                    }`}
                  >
                    <div className="flex items-center mb-4">
                      <div className="text-3xl mr-4">{step.icon}</div>
                      <Badge
                        variant="secondary"
                        className={`text-sm font-bold ${
                          step.color === "amber"
                            ? "bg-yellow-100 text-yellow-700"
                            : step.color === "blue"
                              ? "bg-sky-100 text-sky-700"
                              : step.color === "purple"
                                ? "bg-purple-100 text-purple-700"
                                : "bg-emerald-100 text-emerald-700"
                        }`}
                      >
                        {step.year}
                      </Badge>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-800 mb-4">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-6">{step.description}</p>

                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-800">Key Milestones:</h4>
                      <div className="flex flex-wrap gap-2">
                        {step.achievements.map((achievement, achievementIndex) => (
                          <Badge
                            key={achievementIndex}
                            variant="outline"
                            className={`${
                              step.color === "amber"
                                ? "border-yellow-300 text-yellow-700"
                                : step.color === "blue"
                                  ? "border-sky-300 text-sky-700"
                                  : step.color === "purple"
                                    ? "border-purple-300 text-purple-700"
                                    : "border-emerald-300 text-emerald-700"
                            }`}
                          >
                            {achievement}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </Card>
                </div>
              </motion.div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
