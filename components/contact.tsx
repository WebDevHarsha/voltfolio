"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Mail, Phone, Github, Linkedin, Twitter, Youtube } from "lucide-react"

interface ContactProps {
  data: {
    email: string
    phone: string
    social: Array<{ name: string; url: string }>
  }
}

export default function Contact({ data }: ContactProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const getIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case "github":
        return <Github className="w-6 h-6" />
      case "linkedin":
        return <Linkedin className="w-6 h-6" />
      case "twitter":
        return <Twitter className="w-6 h-6" />
      case "youtube":
        return <Youtube className="w-6 h-6" />
      default:
        return null
    }
  }

  return (
    <section className="relative py-24 px-4" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-black text-electric mb-16 text-center"
        >
          Let's Connect! ⚡
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="bg-card border-4 border-electric rounded-3xl p-8 md:p-12 shadow-2xl"
        >
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <motion.a
              href={`mailto:${data.email}`}
              whileHover={{ scale: 1.05, x: 10 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-4 bg-electric text-background p-6 rounded-2xl font-bold text-lg shadow-lg hover:shadow-electric/50 transition-shadow"
            >
              <Mail className="w-8 h-8" />
              <span className="break-all">{data.email}</span>
            </motion.a>

            <motion.a
              href={`tel:${data.phone}`}
              whileHover={{ scale: 1.05, x: -10 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-4 bg-neon text-background p-6 rounded-2xl font-bold text-lg shadow-lg hover:shadow-neon/50 transition-shadow"
            >
              <Phone className="w-8 h-8" />
              <span>{data.phone}</span>
            </motion.a>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {data.social.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.4 }}
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
                className="w-16 h-16 flex items-center justify-center bg-foreground text-background rounded-full shadow-lg hover:shadow-xl transition-shadow"
              >
                {getIcon(social.name)}
              </motion.a>
            ))}
          </div>
        </motion.div>

        
      </div>
    </section>
  )
}
