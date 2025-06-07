"use client"

import { useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface NavbarProps {
  activeSection: string
}

export default function Navbar({ activeSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)
  const { scrollYProgress } = useScroll()

  const navbarBg = useTransform(scrollYProgress, [0, 0.05], ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.98)"])
  const navbarShadow = useTransform(
    scrollYProgress,
    [0, 0.05],
    ["0 0 0 rgba(0, 0, 0, 0)", "0 4px 30px rgba(0, 0, 0, 0.08)"],
  )

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "why-us", label: "Solutions" },
    { id: "testimonials", label: "Clients" },
    { id: "founders", label: "Team" },
    { id: "contact", label: "Contact" },
  ]

  return (
    <>
      <motion.header
        style={{
          backgroundColor: navbarBg,
          boxShadow: navbarShadow,
          backdropFilter: "blur(20px)",
        }}
        className="fixed top-0 left-0 right-0 z-50 border-b border-white/20"
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="flex items-center">
              <a href="#hero" className="font-heading text-2xl font-bold">
                <span className="gradient-text">Recover Right</span>
              </a>
            </motion.div>

            <nav className="hidden lg:flex space-x-2">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.id}
                  href={`#${item.id}`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    activeSection === item.id
                      ? "text-white bg-gradient-to-r from-yellow-500 to-sky-500 shadow-lg"
                      : "text-gray-700 hover:bg-gray-100/80 hover:text-gray-900"
                  }`}
                >
                  {item.label}
                </motion.a>
              ))}
            </nav>

            <div className="hidden lg:block">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className="bg-gradient-to-r from-gray-900 to-gray-800 hover:from-gray-800 hover:to-gray-700 text-white shadow-lg rounded-lg px-6 font-heading font-semibold">
                  Get Started
                </Button>
              </motion.div>
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg bg-gray-100/80 backdrop-blur-sm"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Progress bar */}
        <motion.div
          className="h-1 bg-gradient-to-r from-yellow-500 via-purple-500 to-sky-500"
          style={{ scaleX: scrollYProgress, transformOrigin: "0%" }}
        />
      </motion.header>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isOpen ? 1 : 0,
          height: isOpen ? "auto" : 0,
        }}
        className="fixed top-20 left-0 right-0 z-40 lg:hidden bg-white/98 backdrop-blur-lg border-b border-gray-200/50"
      >
        <nav className="container mx-auto px-6 py-6">
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setIsOpen(false)}
                className={`px-4 py-3 rounded-lg text-base font-medium transition-all ${
                  activeSection === item.id
                    ? "text-white bg-gradient-to-r from-yellow-500 to-sky-500"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {item.label}
              </a>
            ))}
            <Button className="bg-gradient-to-r from-gray-900 to-gray-800 text-white mt-4 font-heading">
              Get Started
            </Button>
          </div>
        </nav>
      </motion.div>
    </>
  )
}
