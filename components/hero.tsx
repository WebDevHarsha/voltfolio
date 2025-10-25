"use client"

import { motion } from "framer-motion"
import { Zap } from "lucide-react"

interface HeroProps {
  data: {
    name: string
    occupation: string
  }
}

export default function Hero({ data }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Lightning bolts decoration */}
      <motion.div
        className="absolute top-20 left-10 text-electric text-8xl opacity-20"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 10, 0],
        }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
      >
        ⚡
      </motion.div>
      <motion.div
        className="absolute bottom-20 right-10 text-neon text-8xl opacity-20"
        animate={{
          y: [0, 20, 0],
          rotate: [0, -10, 0],
        }}
        transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY }}
      >
        ⚡
      </motion.div>

      <div className="relative z-10 text-center max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <motion.h1
            className="text-7xl md:text-9xl font-black text-foreground mb-4 text-balance"
            animate={{
              textShadow: [
                "0 0 20px rgba(0, 255, 255, 0.5)",
                "0 0 40px rgba(0, 255, 255, 0.8)",
                "0 0 20px rgba(0, 255, 255, 0.5)",
              ],
            }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          >
            {data.name}
          </motion.h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex items-center justify-center gap-3 mb-8"
        >
          <Zap className="w-8 h-8 text-electric" />
          <h2 className="text-3xl md:text-5xl font-bold text-electric">{data.occupation}</h2>
          <Zap className="w-8 h-8 text-electric" />
        </motion.div>

        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-electric text-background font-bold text-xl rounded-full shadow-lg hover:shadow-electric/50 transition-shadow"
            onClick={() => {
              document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
            }}
          >
            Explore My Work ⚡
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
