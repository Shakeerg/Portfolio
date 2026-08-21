import React from 'react'
import { motion } from 'motion/react'

interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  points: string[];
}

const experienceData: ExperienceItem[] = [
  {
    role: "Software Development Engineer, Associate",
    company: "Genpact (Client: Meta Platforms Inc.)",
    period: "Oct 2025 — Present",
    points: [
      "Maintain the Node.js and Python backend behind WhatsApp Business, Facebook, and Instagram integrations for enterprise clients.",
      "Build Python automation for webhook-driven workflows, tracking down root causes rather than patching symptoms.",
      "Use Claude Code and Copilot daily, reviewing their output line by line rather than treating it as final.",
      "Work in an Agile team, reviewing teammates' code and taking PR feedback seriously enough to change approach.",
    ],
  },
  {
    role: "Full Stack Developer Intern",
    company: "Zaalima Development (E-Commerce Platform)",
    period: "Feb 2025 — Jun 2025",
    points: [
      "Built an e-commerce platform from scratch on a 2-3 person team with no existing codebase to inherit.",
      "Designed and optimised MongoDB and PostgreSQL schemas, including indexing strategy and query optimisation.",
      "Integrated Razorpay payment gateway with webhook-based async processing, plus Google and Facebook OAuth.",
      "Wrote Jest tests, containerised services with Docker, and deployed to AWS using S3 for asset storage.",
    ],
  },
];

const Experience = () => {
  return (
    <motion.div
      id='experience'
      className='w-full px-[12%] py-24 scroll-mt-20'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className='font-mono text-xs uppercase tracking-widest text-black/60 dark:text-white/60 mb-3'
      >
        Experience
      </motion.h4>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className='font-display font-bold text-4xl sm:text-5xl tracking-tight mb-16'
      >
        Where I&apos;ve worked
      </motion.h2>

      <div className="relative max-w-3xl">
        <div className="absolute left-[11px] top-0 bottom-0 w-px bg-black/10 dark:bg-white/10" />

        {experienceData.map((item, index) => (
          <motion.div
            key={item.company}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: index * 0.15 }}
            className="relative pl-10 pb-14 last:pb-0"
          >
            <div className="absolute left-0 top-2 flex items-center justify-center">
              <div className={`h-[23px] w-[23px] rounded-full border ${index === 0 ? "border-[#2F5CFF] bg-[#2F5CFF]/10" : "border-black/20 dark:border-white/20 bg-white dark:bg-black"}`}>
                {index === 0 && (
                  <motion.div
                    className="h-2 w-2 rounded-full bg-[#2F5CFF] m-[6px]"
                    animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                )}
              </div>
            </div>

            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.25 }}
              className="group relative overflow-hidden rounded-2xl border border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.025] p-6 sm:p-8 backdrop-blur-xl transition-all duration-300 hover:border-[#2F5CFF]/30 hover:bg-[#2F5CFF]/[0.025]"
            >
              <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-[#2F5CFF]/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <div className="mb-3 flex items-center gap-3">
                    <span className="font-mono text-[11px] tracking-[0.25em] text-black/60 dark:text-white/60">{String(index + 1).padStart(2, "0")}</span>
                    {index === 0 && (
                      <span className="flex items-center gap-2 rounded-full border border-[#2F5CFF]/20 bg-[#2F5CFF]/5 px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-[#2F5CFF]">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#2F5CFF]" />
                        Active
                      </span>
                    )}
                  </div>
                  <h3 className="font-display text-xl sm:text-2xl font-semibold tracking-tight">{item.role}</h3>
                  <p className="mt-1 text-sm font-medium text-[#2F5CFF]">{item.company}</p>
                </div>

                <div className="shrink-0 rounded-lg border border-black/10 dark:border-white/10 px-3 py-2 font-mono text-[11px] uppercase tracking-widest text-black/60 dark:text-white/60">
                  {item.period}
                </div>
              </div>

              <div className="my-6 h-px bg-gradient-to-r from-black/10 via-black/5 to-transparent dark:from-white/10 dark:via-white/5" />

              <div className="relative space-y-3">
                {item.points.map((point, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -5 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.15 + i * 0.05 }}
                    className="flex gap-3"
                  >
                    <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#2F5CFF]" />
                    <p className="text-sm leading-relaxed text-black/70 dark:text-white/70">{point}</p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-7 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-black/60 dark:text-white/60">
                <span>Experience_Log_{String(index + 1).padStart(2, "0")}</span>
                <span className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-current" />
                  Verified
                </span>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default Experience