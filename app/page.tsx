"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { ArrowDown, CheckCircle, ChevronRight, ExternalLink, Lock, Shield, Zap, Star, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import Navbar from "./components/navbar"
import ServiceCard from "./components/service-card"
import TestimonialCarousel from "./components/testimonial-carousel"
import FounderCard from "./components/founder-card"
import VisionTimeline from "./components/vision-timeline"
import ContactForm from "./components/contact-form"
import Footer from "./components/footer"
import FloatingParticles from "./components/floating-particles"
import StatsCounter from "./components/stats-counter"
import TechLogos from "./components/tech-logos"

export default function Home() {
  const [activeSection, setActiveSection] = useState("hero")
  const heroRef = useRef<HTMLDivElement>(null)
  const aboutRef = useRef<HTMLDivElement>(null)
  const servicesRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  const whyUsRef = useRef<HTMLDivElement>(null)
  const testimonialsRef = useRef<HTMLDivElement>(null)
  const foundersRef = useRef<HTMLDivElement>(null)
  const visionRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 })
  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0])
  const y = useTransform(scrollYProgress, [0, 1], [0, -100])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.3 },
    )

    const sections = [
      heroRef.current,
      aboutRef.current,
      servicesRef.current,
      statsRef.current,
      whyUsRef.current,
      testimonialsRef.current,
      foundersRef.current,
      visionRef.current,
      contactRef.current,
    ]

    sections.forEach((section) => {
      if (section) observer.observe(section)
    })

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section)
      })
    }
  }, [])

  const services = [
    {
      title: "Enterprise Cybersecurity",
      description:
        "Advanced threat detection and response solutions designed for enterprise-scale operations with 99.9% uptime guarantee.",
      icon: <Shield className="h-8 w-8" />,
      color: "cyber",
      features: [
        "24/7 SOC Monitoring",
        "AI-Powered Threat Detection",
        "Incident Response Team",
        "Compliance Management",
      ],
    },
    {
      title: "Digital Asset Recovery",
      description:
        "Specialized recovery services for compromised digital assets using cutting-edge forensic techniques and legal frameworks.",
      icon: <Lock className="h-8 w-8" />,
      color: "cyber",
      features: ["Forensic Analysis", "Legal Support", "Asset Tracing", "Recovery Guarantee"],
    },
    {
      title: "Smart Contract Auditing",
      description:
        "Comprehensive blockchain security audits performed by certified experts using industry-leading methodologies.",
      icon: <Zap className="h-8 w-8" />,
      color: "web3",
      features: ["Automated Testing", "Manual Code Review", "Gas Optimization", "Security Reports"],
    },
    {
      title: "Web3 Security Solutions",
      description:
        "End-to-end security solutions for decentralized applications, DeFi protocols, and blockchain infrastructure.",
      icon: <ExternalLink className="h-8 w-8" />,
      color: "web3",
      features: ["DeFi Protocol Security", "NFT Platform Audits", "Cross-chain Analysis", "Ongoing Monitoring"],
    },
  ]

  const founders = [
    {
      name: "Dr. Alexandra Chen",
      role: "Chief Executive Officer",
      bio: "Former NSA cybersecurity director with 20+ years of experience leading enterprise security operations. PhD in Computer Science from MIT, published researcher in cybersecurity frameworks.",
      image: "/placeholder.svg?height=400&width=400",
      side: "cyber",
      expertise: ["Enterprise Security", "Threat Intelligence", "Regulatory Compliance", "Team Leadership"],
    },
    {
      name: "Marcus Rodriguez",
      role: "Chief Technology Officer",
      bio: "Blockchain security pioneer and former lead security engineer at major DeFi protocols. Expert in smart contract security with 50+ successful audits completed.",
      image: "/placeholder.svg?height=400&width=400",
      side: "web3",
      expertise: ["Blockchain Security", "Smart Contract Auditing", "DeFi Protocols", "Security Research"],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-gray-50 overflow-x-hidden">
      <FloatingParticles />
      <Navbar activeSection={activeSection} />

      {/* Hero Section */}
      <section id="hero" ref={heroRef} className="min-h-screen relative overflow-hidden">
        {/* Professional Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-gray-50"></div>
          <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-br from-yellow-50/30 to-transparent"></div>
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-sky-50/30 to-transparent"></div>

          {/* Subtle geometric patterns */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 left-20 w-64 h-64 border border-yellow-300 rounded-full"></div>
            <div className="absolute bottom-20 right-20 w-80 h-80 border border-sky-300 rounded-full"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-purple-300 rounded-full"></div>
          </div>
        </div>

        <div className="container mx-auto px-6 relative z-10 h-screen flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center mb-12"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="mb-8"
            >
              <span className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium text-gray-700 border border-gray-200/50 shadow-lg">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></div>
                Trusted by Fortune 500 companies worldwide
              </span>
            </motion.div>

            <h1 className="font-heading text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight tracking-tight">
              <motion.span
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="block gradient-text"
              >
                Recover Right
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="block text-4xl md:text-5xl lg:text-6xl font-light text-gray-600 mt-4"
              >
                Enterprise Security Solutions
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed mb-12"
            >
              Protecting enterprise digital assets with{" "}
              <span className="font-semibold text-gray-800">advanced cybersecurity</span> and{" "}
              <span className="font-semibold text-gray-800">blockchain security solutions</span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex flex-col sm:flex-row justify-center gap-6 mb-16"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white shadow-xl shadow-yellow-500/25 px-10 py-6 text-lg font-semibold rounded-xl border-0 font-heading"
                >
                  <Shield className="mr-3 h-6 w-6" />
                  Enterprise Security Audit
                  <ChevronRight className="ml-3 h-6 w-6" />
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-gray-300 hover:border-sky-400 text-gray-700 hover:text-sky-600 bg-white/80 backdrop-blur-sm px-10 py-6 text-lg font-semibold rounded-xl font-heading"
                >
                  <Play className="mr-3 h-6 w-6" />
                  Watch Demo
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            style={{ opacity, y }}
            className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
          >
            <motion.p
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              className="text-sm text-gray-500 mb-3 font-medium"
            >
              Discover our solutions
            </motion.p>
            <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}>
              <ArrowDown className="h-6 w-6 text-gray-400" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Tech Logos Section */}
      <section className="py-16 bg-white border-y border-gray-100">
        <div className="container mx-auto px-6">
          <TechLogos />
        </div>
      </section>

      {/* About Section */}
      <section id="about" ref={aboutRef} className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white"></div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-block px-6 py-3 bg-gradient-to-r from-yellow-100 to-sky-100 rounded-full text-sm font-semibold text-gray-700 mb-6 font-heading"
            >
              About Recover Right
            </motion.span>
            <h2 className="font-heading text-5xl md:text-6xl font-bold mb-8 text-gray-900 tracking-tight">
              Enterprise-Grade Security
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-yellow-500 to-sky-500 mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Trusted by Fortune 500 companies to protect their most critical digital assets with our comprehensive
              security solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-6 bg-gradient-to-r from-yellow-400/10 to-orange-400/10 rounded-3xl blur-2xl"></div>
              <div className="relative bg-white rounded-3xl p-10 shadow-professional border border-gray-100">
                <div className="flex items-center mb-8">
                  <div className="p-4 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl mr-6">
                    <Shield className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="font-heading text-3xl font-bold text-gray-900">Cybersecurity Leadership</h3>
                </div>
                <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                  Our cybersecurity division provides enterprise-grade protection with advanced threat detection,
                  incident response, and comprehensive security frameworks designed for large-scale operations.
                </p>
                <div className="space-y-4">
                  {[
                    "24/7 Security Operations Center",
                    "AI-Powered Threat Intelligence",
                    "Certified Security Professionals",
                    "99.9% Uptime Guarantee",
                  ].map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      viewport={{ once: true }}
                      className="flex items-center"
                    >
                      <CheckCircle className="h-6 w-6 text-yellow-500 mr-4 flex-shrink-0" />
                      <span className="text-gray-700 font-medium text-lg">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-6 bg-gradient-to-r from-sky-400/10 to-cyan-400/10 rounded-3xl blur-2xl"></div>
              <div className="relative bg-white/90 backdrop-blur-lg rounded-3xl p-10 shadow-professional border border-gray-100">
                <div className="flex items-center mb-8">
                  <div className="p-4 bg-gradient-to-r from-sky-500 to-cyan-500 rounded-2xl mr-6">
                    <Zap className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="font-heading text-3xl font-bold text-gray-900">Web3 Innovation</h3>
                </div>
                <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                  Leading blockchain security with comprehensive smart contract auditing, DeFi protocol analysis, and
                  Web3 infrastructure protection for the decentralized economy.
                </p>
                <div className="space-y-4">
                  {[
                    "Smart Contract Security Audits",
                    "DeFi Protocol Analysis",
                    "Cross-chain Security Testing",
                    "Blockchain Research & Development",
                  ].map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      viewport={{ once: true }}
                      className="flex items-center"
                    >
                      <CheckCircle className="h-6 w-6 text-sky-500 mr-4 flex-shrink-0" />
                      <span className="text-gray-700 font-medium text-lg">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" ref={servicesRef} className="py-32 relative overflow-hidden bg-white">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-block px-6 py-3 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full text-sm font-semibold text-gray-700 mb-6 font-heading"
            >
              Our Services
            </motion.span>
            <h2 className="font-heading text-5xl md:text-6xl font-bold mb-8 text-gray-900 tracking-tight">
              Enterprise Security Solutions
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Comprehensive security services designed for enterprise clients with the highest standards of protection
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                color={service.color}
                features={service.features}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section
        id="stats"
        ref={statsRef}
        className="py-32 relative overflow-hidden bg-gradient-to-br from-gray-50 to-white"
      >
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Our track record speaks for itself</p>
          </motion.div>
          <StatsCounter />
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-us" ref={whyUsRef} className="py-32 relative overflow-hidden bg-white">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-block px-6 py-3 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full text-sm font-semibold text-gray-700 mb-6 font-heading"
            >
              Why Choose Recover Right
            </motion.span>
            <h2 className="font-heading text-5xl md:text-6xl font-bold mb-8 text-gray-900 tracking-tight">
              Industry-Leading Expertise
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-6 bg-gradient-to-r from-yellow-400/10 to-orange-400/10 rounded-3xl blur-2xl"></div>
              <div className="relative bg-white rounded-3xl p-10 shadow-professional border border-gray-100">
                <div className="flex items-center mb-10">
                  <div className="p-4 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl mr-6">
                    <Shield className="h-12 w-12 text-white" />
                  </div>
                  <h3 className="font-heading text-3xl font-bold text-gray-900">Cybersecurity Excellence</h3>
                </div>

                <div className="space-y-8">
                  {[
                    {
                      title: "Enterprise-Grade Response",
                      description:
                        "Dedicated security operations center with sub-minute response times for critical incidents",
                      icon: "⚡",
                    },
                    {
                      title: "Proven Methodologies",
                      description: "Industry-standard frameworks with 99.9% success rate in threat mitigation",
                      icon: "🎯",
                    },
                    {
                      title: "Comprehensive Coverage",
                      description:
                        "End-to-end security solutions covering all aspects of enterprise digital infrastructure",
                      icon: "🛡️",
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.6 }}
                      viewport={{ once: true }}
                      className="flex items-start space-x-6 p-6 rounded-2xl hover:bg-yellow-50/50 transition-colors"
                    >
                      <div className="text-3xl">{item.icon}</div>
                      <div>
                        <h4 className="font-heading font-bold text-gray-900 mb-3 text-xl">{item.title}</h4>
                        <p className="text-gray-600 leading-relaxed">{item.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-6 bg-gradient-to-r from-sky-400/10 to-cyan-400/10 rounded-3xl blur-2xl"></div>
              <div className="relative bg-white/90 backdrop-blur-lg rounded-3xl p-10 shadow-professional border border-gray-100">
                <div className="flex items-center mb-10">
                  <div className="p-4 bg-gradient-to-r from-sky-500 to-cyan-500 rounded-2xl mr-6">
                    <Zap className="h-12 w-12 text-white" />
                  </div>
                  <h3 className="font-heading text-3xl font-bold text-gray-900">Web3 Leadership</h3>
                </div>

                <div className="space-y-8">
                  {[
                    {
                      title: "Blockchain Security Experts",
                      description:
                        "Certified auditors with deep expertise in DeFi protocols and smart contract security",
                      icon: "🔍",
                    },
                    {
                      title: "Advanced Technology Stack",
                      description:
                        "Proprietary tools and AI-powered analysis for comprehensive blockchain security assessment",
                      icon: "🚀",
                    },
                    {
                      title: "Continuous Innovation",
                      description:
                        "Leading research in emerging Web3 security challenges and next-generation solutions",
                      icon: "🔬",
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.6 }}
                      viewport={{ once: true }}
                      className="flex items-start space-x-6 p-6 rounded-2xl hover:bg-sky-50/50 transition-colors"
                    >
                      <div className="text-3xl">{item.icon}</div>
                      <div>
                        <h4 className="font-heading font-bold text-gray-900 mb-3 text-xl">{item.title}</h4>
                        <p className="text-gray-600 leading-relaxed">{item.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        id="testimonials"
        ref={testimonialsRef}
        className="py-32 relative overflow-hidden bg-gradient-to-br from-gray-50 to-white"
      >
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-block px-6 py-3 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full text-sm font-semibold text-gray-700 mb-6 font-heading"
            >
              Client Success Stories
            </motion.span>
            <h2 className="font-heading text-5xl md:text-6xl font-bold mb-8 text-gray-900 tracking-tight">
              Trusted by Industry Leaders
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mb-8"></div>
            <div className="flex justify-center items-center space-x-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-8 w-8 text-yellow-400 fill-current" />
              ))}
              <span className="ml-4 text-gray-600 font-semibold text-lg">4.9/5 from 500+ enterprise clients</span>
            </div>
          </motion.div>

          <TestimonialCarousel />
        </div>
      </section>

      {/* Founders Section */}
      <section id="founders" ref={foundersRef} className="py-32 relative overflow-hidden bg-white">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-block px-6 py-3 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-full text-sm font-semibold text-gray-700 mb-6 font-heading"
            >
              Leadership Team
            </motion.span>
            <h2 className="font-heading text-5xl md:text-6xl font-bold mb-8 text-gray-900 tracking-tight">
              Meet Our Executive Team
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {founders.map((founder, index) => (
              <FounderCard
                key={index}
                name={founder.name}
                role={founder.role}
                bio={founder.bio}
                image={founder.image}
                side={founder.side}
                expertise={founder.expertise}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section
        id="vision"
        ref={visionRef}
        className="py-32 relative overflow-hidden bg-gradient-to-br from-gray-50 to-white"
      >
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-block px-6 py-3 bg-gradient-to-r from-emerald-100 to-teal-100 rounded-full text-sm font-semibold text-gray-700 mb-6 font-heading"
            >
              Strategic Roadmap
            </motion.span>
            <h2 className="font-heading text-5xl md:text-6xl font-bold mb-8 text-gray-900 tracking-tight">
              The Future of Enterprise Security
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Our strategic vision for advancing enterprise security in an increasingly digital world
            </p>
          </motion.div>

          <VisionTimeline />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" ref={contactRef} className="py-32 relative overflow-hidden bg-white">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-block px-6 py-3 bg-gradient-to-r from-rose-100 to-pink-100 rounded-full text-sm font-semibold text-gray-700 mb-6 font-heading"
            >
              Get Started Today
            </motion.span>
            <h2 className="font-heading text-5xl md:text-6xl font-bold mb-8 text-gray-900 tracking-tight">
              Secure Your Enterprise Today
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-rose-500 to-pink-500 mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Join industry leaders who trust Recover Right with their most critical security needs
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
