"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Linkedin, Twitter, Github } from "lucide-react"

interface FounderCardProps {
  name: string
  role: string
  bio: string
  image: string
  side: string
  expertise: string[]
  index: number
}

export default function FounderCard({ name, role, bio, image, side, expertise, index }: FounderCardProps) {
  const isCyber = side === "cyber"

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className="group"
    >
      <div className="relative">
        <div
          className={`absolute -inset-4 rounded-3xl blur-xl transition-all duration-300 group-hover:blur-2xl ${
            isCyber
              ? "bg-gradient-to-r from-yellow-300/20 to-yellow-400/20 group-hover:from-yellow-300/30 group-hover:to-yellow-400/30"
              : "bg-gradient-to-r from-sky-300/20 to-cyan-400/20 group-hover:from-sky-300/30 group-hover:to-cyan-400/30"
          }`}
        ></div>

        <Card
          className={`relative overflow-hidden border-none shadow-2xl ${
            isCyber
              ? "bg-gradient-to-br from-white via-yellow-50/30 to-yellow-100/30"
              : "bg-gradient-to-br from-white/90 via-sky-50/30 to-cyan-50/30 backdrop-blur-lg"
          }`}
        >
          <div className="p-8">
            <div className="flex flex-col items-center text-center">
              <div className="relative mb-6">
                <div
                  className={`absolute inset-0 rounded-full ${
                    isCyber
                      ? "bg-gradient-to-r from-yellow-300/30 to-yellow-400/30"
                      : "bg-gradient-to-r from-sky-300/30 to-cyan-400/30"
                  }`}
                  style={{ transform: "scale(1.15)" }}
                ></div>
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  src={image || "/placeholder.svg"}
                  alt={name}
                  className="w-40 h-40 rounded-full object-cover relative z-10 border-4 border-white shadow-xl"
                />
              </div>

              <h3 className="text-2xl font-bold text-gray-800 mb-2">{name}</h3>
              <p className={`text-lg font-semibold mb-4 ${isCyber ? "text-yellow-600" : "text-sky-600"}`}>{role}</p>

              <div className="flex flex-wrap gap-2 mb-6 justify-center">
                {expertise.map((skill, skillIndex) => (
                  <Badge
                    key={skillIndex}
                    variant="secondary"
                    className={`${
                      isCyber
                        ? "bg-yellow-100 text-yellow-700 hover:bg-yellow-200"
                        : "bg-sky-100 text-sky-700 hover:bg-sky-200"
                    } transition-colors`}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>

              <p className="text-gray-600 leading-relaxed mb-6">{bio}</p>

              <div className="flex space-x-4">
                {[
                  { icon: Linkedin, href: "#" },
                  { icon: Twitter, href: "#" },
                  { icon: Github, href: "#" },
                ].map((social, socialIndex) => (
                  <motion.a
                    key={socialIndex}
                    href={social.href}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className={`p-3 rounded-full transition-all duration-300 ${
                      isCyber
                        ? "bg-yellow-100 text-yellow-600 hover:bg-yellow-200 hover:shadow-lg hover:shadow-yellow-400/25"
                        : "bg-sky-100 text-sky-600 hover:bg-sky-200 hover:shadow-lg hover:shadow-sky-400/25"
                    }`}
                  >
                    <social.icon className="h-5 w-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </Card>
      </div>
    </motion.div>
  )
}
