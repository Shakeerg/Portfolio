'use client'

import Link from 'next/link'
import React from 'react'
import { motion } from 'motion/react'
import type { Project } from '@prisma/client'

interface WorkProps {
  projects: Project[]
}

const Work = ({ projects }: WorkProps) => {
  return (
    <motion.section
      id="work"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.8 }}
      className="w-full px-[8%] lg:px-[12%] py-24 scroll-mt-20"
    >
      <div className="max-w-3xl mb-14">
        <motion.p
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-mono text-xs uppercase tracking-[0.2em] text-black/50 dark:text-white/50 mb-4"
        >
          My portfolio
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[0.95]"
        >
          Selected Work<span className="text-[#2F5CFF]">.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-5 max-w-2xl text-sm sm:text-base leading-relaxed text-black/70 dark:text-white/70"
        >
          A selection of applications, experiments, and products I&apos;ve built across full-stack development, real-time systems, and AI-powered experiences.
        </motion.p>
      </div>

      <div className="border-t border-black/10 dark:border-white/10">
        {projects.length === 0 ? (
          <div className="py-16 text-center font-mono text-xs uppercase tracking-widest text-black/50 dark:text-white/50">
            No projects available.
          </div>
        ) : (
          projects.map((project, index) => (
            <Link href={`/projects/${project.slug}`} key={project.id} className="block">
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                whileHover={{ x: 8 }}
                className="group relative flex flex-col sm:flex-row sm:items-center justify-between gap-6 py-8 border-b border-black/10 dark:border-white/10 transition-colors duration-300"
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-y-0 left-[-3%] right-[-3%] -z-10 bg-[#2F5CFF]/[0.025] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />

                <div className="min-w-0">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-black/50 dark:text-white/50">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="h-px w-6 bg-black/20 dark:bg-white/20" />
                    <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#2F5CFF]">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="font-display font-semibold text-2xl sm:text-3xl lg:text-4xl tracking-tight transition-colors duration-300 group-hover:text-[#2F5CFF]">
                    {project.title}
                  </h3>

                  <p className="max-w-2xl text-sm leading-relaxed text-black/65 dark:text-white/65 mt-2">
                    {project.description}
                  </p>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-black/50 dark:text-white/50 transition-colors duration-300 group-hover:text-[#2F5CFF]">
                    View project
                  </span>

                  <motion.span
                    initial={{ x: 0 }}
                    whileHover={{ x: 4 }}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-black/10 dark:border-white/10 text-sm transition-all duration-300 group-hover:border-[#2F5CFF] group-hover:bg-[#2F5CFF] group-hover:text-white"
                  >
                    &rarr;
                  </motion.span>
                </div>

                <div
                  aria-hidden="true"
                  className="absolute bottom-[-1px] left-0 h-[2px] w-0 bg-[#2F5CFF] transition-all duration-500 group-hover:w-full"
                />
              </motion.article>
            </Link>
          ))
        )}
      </div>

      {projects.length > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-center gap-4 mt-8 font-mono text-[10px] uppercase tracking-[0.18em] text-black/50 dark:text-white/50"
        >
          <span className="h-px w-8 bg-black/20 dark:bg-white/20" />
          <span>{projects.length} projects</span>
        </motion.div>
      )}
    </motion.section>
  )
}

export default Work