"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Briefcase, GraduationCap } from "lucide-react"

interface ExperienceProps {
  work: Array<{ company: string; title: string; years: string }>
  education: Array<{ school: string; degree: string; graduated: string }>
}

export default function Experience({ work, education }: ExperienceProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="relative py-24 px-4" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-black text-neon mb-16 text-center"
        >
          Experience & Education
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Work Experience */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold text-electric mb-6 flex items-center gap-3">
              <Briefcase className="w-8 h-8" />
              Work
            </h3>
            <div className="space-y-6">
              {work.map((job, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="bg-card border-2 border-electric rounded-2xl p-6 cursor-pointer transition-all hover:shadow-lg hover:shadow-electric/30"
                >
                  <h4 className="text-xl font-bold text-foreground mb-2">{job.title}</h4>
                  <p className="text-electric font-semibold mb-1">{job.company}</p>
                  <p className="text-muted-foreground text-sm">{job.years}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold text-neon mb-6 flex items-center gap-3">
              <GraduationCap className="w-8 h-8" />
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                  whileHover={{ scale: 1.02, x: -10 }}
                  className="bg-card border-2 border-neon rounded-2xl p-6 cursor-pointer transition-all hover:shadow-lg hover:shadow-neon/30"
                >
                  <h4 className="text-xl font-bold text-foreground mb-2">{edu.degree}</h4>
                  <p className="text-neon font-semibold mb-1">{edu.school}</p>
                  <p className="text-muted-foreground text-sm">Graduating {edu.graduated}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
