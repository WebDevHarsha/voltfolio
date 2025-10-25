"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Hero from "@/components/hero"
import About from "@/components/about"
import Experience from "@/components/experience"
import Projects from "@/components/projects"
import Contact from "@/components/contact"
import FloatingPromptButton from "@/components/floating-prompt-button"
import StormBackground from "@/components/storm-background"

interface ResumeData {
  main: {
    name: string
    occupation: string
    bio: string
    email: string
    phone: string
    social: Array<{ name: string; url: string; className: string }>
    profiles: Array<{ name: string; url: string; className: string }>
  }
  resume: {
    work: Array<{ company: string; title: string; years: string }>
    education: Array<{ school: string; degree: string; graduated: string }>
    skills: Array<{ name: string; level: string }>
  }
  portfolio: {
    projects: Array<{
      title: string
      about: string
      image: string
      url: string
    }>
  }
}

export default function Home() {
  const [resumeData, setResumeData] = useState<ResumeData | null>(null)

  useEffect(() => {
    fetch("/resumeData.json")
      .then((res) => res.json())
      .then((data) => setResumeData(data))
      .catch((err) => console.error("Error loading resume data:", err))
  }, [])

  if (!resumeData) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="text-electric text-6xl"
        >
          ⚡
        </motion.div>
      </div>
    )
  }

  return (
    <main className="relative min-h-screen bg-background overflow-hidden">
      <StormBackground />
      <Hero data={resumeData.main} />
      <About data={resumeData.main} />
      <Experience work={resumeData.resume.work} education={resumeData.resume.education} />
      <Projects projects={resumeData.portfolio.projects} />
      <Contact data={resumeData.main} />
      <FloatingPromptButton />
    </main>
  )
}
