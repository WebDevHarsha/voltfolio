"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Mail, Github, Linkedin, Youtube } from "lucide-react"

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
        className="fixed bottom-8 right-8 bg-electric text-background rounded-full shadow-2xl flex items-center gap-2 px-6 py-4 z-50 hover:shadow-electric/50 transition-shadow font-black text-lg"
      >
        <Mail className="w-6 h-6" />
        Let's Connect
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
                  <Mail className="w-10 h-10" />
                  Let's Connect!
                </h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-10 h-10 flex items-center justify-center bg-foreground text-background rounded-full hover:scale-110 transition-transform"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="space-y-6">
                <div className="bg-background border-2 border-neon rounded-2xl p-6">
                  <h4 className="text-2xl font-bold text-neon mb-4">Get in Touch</h4>
                  <p className="text-foreground mb-6 leading-relaxed">
                    I'm always excited to collaborate on new projects or discuss opportunities. Feel free to reach out!
                  </p>

                  <div className="space-y-4">
                    <a
                      href="mailto:vasriharsha@gmail.com"
                      className="flex items-center gap-3 text-foreground hover:text-electric transition-colors group"
                    >
                      <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                      <span className="font-mono">vasriharsha@gmail.com</span>
                    </a>
                  </div>
                </div>

                <div className="bg-background border-2 border-electric rounded-2xl p-6">
                  <h4 className="text-2xl font-bold text-electric mb-4">Find Me Online</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <SocialLink
                      href="https://github.com/WebDevHarsha"
                      icon={<Github className="w-6 h-6" />}
                      label="GitHub"
                    />
                    <SocialLink
                      href="https://www.linkedin.com/in/sri-harsha-v-a-a64643273/"
                      icon={<Linkedin className="w-6 h-6" />}
                      label="LinkedIn"
                    />
                    <SocialLink
                      href="https://www.youtube.com/@VASRIHARSHA"
                      icon={<Youtube className="w-6 h-6" />}
                      label="YouTube"
                    />
                    <SocialLink
                      href="https://x.com/WeberHarsha"
                      icon={
                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                      }
                      label="Twitter"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

function SocialLink({
  href,
  icon,
  label,
}: {
  href: string
  icon: React.ReactNode
  label: string
}) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="flex items-center gap-3 bg-card border border-neon/30 rounded-xl p-4 hover:border-electric hover:shadow-lg hover:shadow-electric/20 transition-all group"
    >
      <span className="text-neon group-hover:text-electric transition-colors">{icon}</span>
      <span className="font-bold text-foreground group-hover:text-electric transition-colors">{label}</span>
    </motion.a>
  )
}
