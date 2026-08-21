import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from 'motion/react'
import type { DarkModeProps } from '@/types'

const About = ({ isDarkMode }: DarkModeProps) => {
  return (
    <motion.section
      id="about"
      className="w-full px-[8%] sm:px-[10%] lg:px-[12%] py-24 scroll-mt-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="mb-16">
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-3"
        >
          <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-[#2F5CFF]">Introduction</span>
          <span className="h-px w-10 bg-[#2F5CFF]/40" />
          <span className="font-mono text-[10px] uppercase tracking-widest text-black/65 dark:text-white/65">SYS_01</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight"
        >
          About Me
        </motion.h2>

        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: '100%' }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-6 h-px max-w-5xl bg-gradient-to-r from-black/10 via-black/5 to-transparent dark:from-white/10 dark:via-white/5"
        />
      </div>

      <div className="flex w-full flex-col lg:flex-row items-start gap-14 lg:gap-20">

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative w-64 sm:w-72 shrink-0 mx-auto lg:mx-0"
        >
          <div className="absolute -inset-4 rounded-[2rem] bg-[#2F5CFF]/10 blur-3xl" />
          <div className="absolute -left-2 -top-2 h-8 w-8 border-l border-t border-[#2F5CFF]/60 rounded-tl-lg" />
          <div className="absolute -right-2 -bottom-2 h-8 w-8 border-r border-b border-[#2F5CFF]/60 rounded-br-lg" />

          <div className="relative overflow-hidden rounded-2xl border border-black/10 dark:border-white/10 bg-black/[0.03] dark:bg-white/[0.03]">
            <Image src={assets.user_image} alt="Shakeer" className="w-full" priority />

            <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-4 py-3 backdrop-blur-xl bg-black/50 text-white">
              <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/80">Developer_Profile</span>
              <span className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-widest">
                <motion.span
                  animate={{ opacity: [1, 0.4, 1], scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="h-1.5 w-1.5 rounded-full bg-[#2F5CFF]"
                />
                Online
              </span>
            </div>
          </div>

          <div className="mt-3 flex items-center justify-between font-mono text-[9px] uppercase tracking-widest text-black/65 dark:text-white/65">
            <span>Identity_01</span>
            <span>Verified</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex-1 w-full"
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#2F5CFF]">Developer Profile</span>
            <span className="h-px w-12 bg-[#2F5CFF]/30" />
          </div>

          <h3 className="mb-6 max-w-3xl font-display text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight leading-tight">
            Building full-stack systems with <span className="text-[#2F5CFF]">AI at the core.</span>
          </h3>

          <p className="mb-10 max-w-3xl text-base sm:text-lg leading-relaxed text-black/75 dark:text-white/75">
            Full Stack Developer with close to a year of production experience building, deploying, and maintaining
            full-stack applications with Next.js, React, Node.js, and Python. Currently at Genpact, working on API
            and integration workflows for Meta Platforms. Outside of work, I&apos;ve built AI-powered systems
            including a RAG pipeline using OpenAI and Pinecone, along with payment and OAuth integrations on
            applications built end-to-end.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-10 grid grid-cols-2 sm:grid-cols-4 border-y border-black/10 dark:border-white/10"
          >
            {[
              ['01', 'Experience', '1+ Year'],
              ['02', 'Focus', 'Full Stack'],
              ['03', 'Core', 'Next.js'],
              ['04', 'AI', 'RAG / LLM'],
            ].map(([id, label, value]) => (
              <div key={id} className="border-r last:border-r-0 border-black/10 dark:border-white/10 px-3 sm:px-4 py-5">
                <div className="mb-4 flex items-center justify-between font-mono text-[9px] uppercase tracking-widest text-black/60 dark:text-white/60">
                  <span>{id}</span>
                  <span>SYS</span>
                </div>
                <p className="text-[10px] uppercase tracking-widest text-black/60 dark:text-white/60">{label}</p>
                <p className="mt-1 font-display text-sm sm:text-base font-semibold">{value}</p>
              </div>
            ))}
          </motion.div>

          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4"
          >
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.55 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group relative overflow-hidden rounded-2xl border border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.025] p-5 sm:p-6 transition-all duration-300 hover:border-[#2F5CFF]/30 hover:bg-[#2F5CFF]/[0.025]"
              >
                <div className="pointer-events-none absolute -right-8 -top-8 h-20 w-20 rounded-full bg-[#2F5CFF]/10 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-black/10 dark:border-white/10 bg-white dark:bg-white/5">
                    <Image src={isDarkMode ? iconDark : icon} alt={title} className="w-5" />
                  </div>
                  <h3 className="mt-5 mb-2 font-display font-semibold text-black dark:text-white">{title}</h3>
                  <p className="text-sm leading-relaxed text-black/70 dark:text-white/75">{description}</p>
                </div>
              </motion.li>
            ))}
          </motion.ul>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-14"
          >
            <div className="mb-5 flex items-end justify-between">
              <div>
                <div className="flex items-center gap-3">
                  <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-black/70 dark:text-white/70">Technical Stack</h4>
                  <span className="h-1.5 w-1.5 rounded-full bg-[#2F5CFF]" />
                </div>
                <p className="mt-1 text-xs text-black/55 dark:text-white/55">Systems and tools I work with</p>
              </div>
              <span className="hidden sm:block font-mono text-[10px] uppercase tracking-widest text-black/60 dark:text-white/60">{toolsData.length} Modules</span>
            </div>

            <div className="flex flex-wrap gap-3">
              {toolsData.map((tool, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.04 }}
                  whileHover={{ y: -5, scale: 1.04 }}
                  className="group relative flex h-14 w-14 items-center justify-center rounded-xl border border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.025] cursor-pointer transition-all duration-300 hover:border-[#2F5CFF]/40 hover:bg-[#2F5CFF]/5"
                >
                  <div className="absolute inset-0 rounded-xl bg-[#2F5CFF]/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <Image src={tool} alt="Technology" className="relative z-10 w-6 transition-transform duration-300 group-hover:scale-110" />
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1 }}
            className="mt-10 flex items-center justify-between border-t border-black/10 dark:border-white/10 pt-4 font-mono text-[9px] uppercase tracking-[0.2em] text-black/60 dark:text-white/60"
          >
            <span>Profile_System // Online</span>
            <span>AI_ASSISTED // VERIFIED</span>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default About