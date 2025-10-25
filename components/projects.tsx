"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { ExternalLink } from "lucide-react"

interface ProjectsProps {
  projects: Array<{
    title: string
    about: string
    image: string
    url: string
  }>
}

export default function Projects({ projects }: ProjectsProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="relative py-24 px-4" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-black text-electric mb-16 text-center"
        >
          ⚡ Projects ⚡
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.a
              key={index}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group bg-card border-2 border-electric rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-electric/40 transition-all cursor-pointer"
            >
              <div className="relative h-48 bg-muted overflow-hidden">
                <div className="absolute inset-0 bg-electric/10 group-hover:bg-electric/20 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center text-6xl">✨</div>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-electric transition-colors">
                    {project.title}
                  </h3>
                  <ExternalLink className="w-5 h-5 text-electric group-hover:scale-125 transition-transform" />
                </div>
                <p className="text-muted-foreground leading-relaxed">{project.about}</p>

                <motion.div
                  className="mt-4 inline-flex items-center gap-2 text-electric font-bold"
                  whileHover={{ x: 5 }}
                >
                  View Project
                  <span className="text-xl">→</span>
                </motion.div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
