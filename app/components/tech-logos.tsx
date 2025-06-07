"use client"

import { motion } from "framer-motion"

const techLogos = [
  { name: "Microsoft", logo: "🏢" },
  { name: "Google", logo: "🔍" },
  { name: "Amazon", logo: "📦" },
  { name: "IBM", logo: "💼" },
  { name: "Oracle", logo: "🗄️" },
  { name: "Salesforce", logo: "☁️" },
]

export default function TechLogos() {
  return (
    <div className="text-center">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-gray-500 font-medium mb-8 text-sm uppercase tracking-wider"
      >
        Trusted by industry leaders
      </motion.p>

      <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
        {techLogos.map((company, index) => (
          <motion.div
            key={company.name}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.1, opacity: 1 }}
            className="flex items-center space-x-3 text-gray-400 hover:text-gray-600 transition-all duration-300"
          >
            <span className="text-3xl">{company.logo}</span>
            <span className="font-semibold text-lg">{company.name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
