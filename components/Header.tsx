'use client'

import React from 'react'
import { motion } from 'motion/react'
import type { DarkModeProps } from '@/types'
import MagneticButton from '@/components/MagneticButton'
import Hero3D from '@/components/Hero3D'

const Header = ({}: DarkModeProps) => {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden flex items-center px-[8%] lg:px-[12%] pt-28 pb-20">

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[45%] top-[20%] h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#2F5CFF]/[0.045] blur-[120px]" />
        <div className="absolute right-[5%] bottom-[5%] h-[300px] w-[300px] rounded-full bg-[#2F5CFF]/[0.035] blur-[100px]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_0.9fr] items-center gap-12 lg:gap-4">

        <div className="flex flex-col items-start">

          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 rounded-full border border-black/10 bg-black/[0.015] px-4 py-2 dark:border-white/10 dark:bg-white/[0.025]"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#2F5CFF] opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#2F5CFF] shadow-[0_0_12px_rgba(47,92,255,0.8)]" />
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-black/65 dark:text-white/65">Node System</span>
            <span className="text-black/20 dark:text-white/20">//</span>
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#2F5CFF]">Online</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mt-7 font-display font-bold leading-[0.9] tracking-[-0.045em] text-6xl sm:text-7xl lg:text-[clamp(5rem,8vw,8.5rem)]"
          >
            Shakeer
            <br />
            <span className="relative">
              Gittola
              <span className="text-[#2F5CFF]">.</span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-7 max-w-xl text-base sm:text-lg leading-relaxed text-black/70 dark:text-white/75"
          >
            Full Stack Developer building modern web applications, backend systems, APIs, and AI-powered experiences with
            <span className="text-black dark:text-white"> Next.js, React, Node.js</span> and LLM technologies.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-8 flex flex-col sm:flex-row items-start gap-3"
          >
            <MagneticButton
              href="#contact"
              className="group flex items-center gap-3 rounded-full bg-[#0E0E10] px-7 py-3.5 font-mono text-[9px] uppercase tracking-[0.15em] text-white transition-all hover:bg-[#2F5CFF] hover:shadow-xl hover:shadow-[#2F5CFF]/20 dark:bg-white dark:text-black dark:hover:bg-[#2F5CFF] dark:hover:text-white"
            >
              Get in touch
              <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
            </MagneticButton>

            <MagneticButton
              href="/Resume.pdf"
              download
              className="flex items-center gap-3 rounded-full border border-black/10 px-7 py-3.5 font-mono text-[9px] uppercase tracking-[0.15em] transition-all hover:border-[#2F5CFF] hover:text-[#2F5CFF] dark:border-white/10"
            >
              Resume
              <span className="text-xs">&darr;</span>
            </MagneticButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.75 }}
            className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-[10px] uppercase tracking-[0.18em] text-black/70 dark:text-white/70">
            <span>Next.js</span>
            <span className="text-[#2F5CFF]">/</span>
            <span>React</span>
            <span className="text-[#2F5CFF]">/</span>
            <span>Node.js</span>
            <span className="text-[#2F5CFF]">/</span>
            <span>TypeScript</span>
            <span className="text-[#2F5CFF]">/</span>
            <span>AI / LLM</span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.25 }}
          className="relative flex min-h-[420px] items-center justify-center lg:min-h-[620px]"
        >
          <div className="absolute h-[280px] w-[280px] rounded-full bg-[#2F5CFF]/5 blur-3xl" />

          <Hero3D />

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="absolute bottom-[7%] left-1/2 -translate-x-1/2 whitespace-nowrap"
          >
            <div className="flex items-center gap-3 rounded-full border border-black/10 bg-white/60 px-4 py-2 backdrop-blur-md dark:border-white/10 dark:bg-black/20">
              <span className="h-1.5 w-1.5 rounded-full bg-[#2F5CFF] shadow-[0_0_10px_rgba(47,92,255,0.8)]" />
              <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-black/70 dark:text-white/70">NODE // AI CORE</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 md:flex"
      >
        <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-black/65 dark:text-white/65">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
          className="h-8 w-px bg-gradient-to-b from-[#2F5CFF] to-transparent"
        />
      </motion.div>
    </section>
  )
}

export default Header