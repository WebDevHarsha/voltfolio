"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Zap } from "lucide-react"

export default function FloatingPromptButton() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Floating Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 w-16 h-16 bg-electric text-background rounded-full shadow-2xl flex items-center justify-center z-50 hover:shadow-electric/50 transition-shadow"
      >
        <Zap className="w-8 h-8" />
      </motion.button>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-background/90 backdrop-blur-sm z-50"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 50 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl max-h-[80vh] overflow-y-auto bg-card border-4 border-electric rounded-3xl p-8 shadow-2xl z-50"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-4xl font-black text-electric flex items-center gap-3">
                  <Zap className="w-10 h-10" />
                  Try My Prompts!
                </h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-10 h-10 flex items-center justify-center bg-foreground text-background rounded-full hover:scale-110 transition-transform"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="space-y-6">
                <PromptCard
                  emoji="⚡"
                  title="Lightning Fast Code Gen"
                  description="Perfect for building full-stack applications with modern frameworks"
                  prompt="Create a responsive dashboard with real-time data visualization using React, TypeScript, and Recharts. Include dark mode toggle and smooth animations."
                />
                <PromptCard
                  emoji="✨"
                  title="AI-Powered Creativity"
                  description="Ideal for designing unique and memorable user experiences"
                  prompt="Design a creative portfolio landing page with bold typography, electric blue accents, and interactive hover effects that showcase personality."
                />
                <PromptCard
                  emoji="🤖"
                  title="Smart Automation"
                  description="Great for streamlining development workflows"
                  prompt="Build an intelligent Git commit message generator that analyzes code changes and creates meaningful, conventional commit messages automatically."
                />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

function PromptCard({
  emoji,
  title,
  description,
  prompt,
}: {
  emoji: string
  title: string
  description: string
  prompt: string
}) {
  return (
    <motion.div whileHover={{ scale: 1.02 }} className="bg-background border-2 border-neon rounded-2xl p-6">
      <div className="flex items-start gap-4 mb-3">
        <span className="text-4xl">{emoji}</span>
        <div>
          <h4 className="text-xl font-bold text-neon mb-1">{title}</h4>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
      <div className="bg-card border border-electric/30 rounded-xl p-4">
        <p className="text-sm text-foreground leading-relaxed font-mono">{prompt}</p>
      </div>
    </motion.div>
  )
}
