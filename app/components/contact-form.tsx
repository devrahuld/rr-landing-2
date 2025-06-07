"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle, Mail, Phone, MapPin } from "lucide-react"

export default function ContactForm() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Contact Information */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="lg:col-span-1"
      >
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Get in Touch</h3>
            <p className="text-gray-600 leading-relaxed">
              Ready to secure your digital future? Our experts are standing by to help you with your cybersecurity and
              Web3 security needs.
            </p>
          </div>

          <div className="space-y-4">
            {[
              { icon: Mail, label: "Email", value: "team@recoverright.in" },
              { icon: Phone, label: "Phone", value: "+1 (555) 123-4567" },
              { icon: MapPin, label: "Address", value: "123 Security Blvd, Tech City, TC 12345" },
            ].map((contact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-50 transition-colors"
              >
                <div className="p-2 bg-gradient-to-r from-yellow-400 to-sky-400 rounded-lg">
                  <contact.icon className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="font-medium text-gray-800">{contact.label}</p>
                  <p className="text-gray-600">{contact.value}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Contact Message */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="lg:col-span-2 flex items-center justify-center"
      >
        <Card className="relative bg-white/90 backdrop-blur-sm border-none shadow-2xl rounded-3xl overflow-hidden p-8 text-center">
          <h3 className="text-3xl font-bold text-gray-800 mb-4">Contact Us</h3>
          <p className="text-gray-600 text-lg">
            Please contact us at <span className="font-semibold text-sky-600">team@recoverright.in</span>
          </p>
        </Card>
      </motion.div>
    </div>
  )
}


