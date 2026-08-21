import React from 'react'
import type { DarkModeProps } from '@/types'

const Footer = ({}: DarkModeProps) => {
  return (
    <footer className="relative w-full overflow-hidden px-[8%] lg:px-[12%] pt-12 pb-8">

      <div className="absolute left-[8%] right-[8%] lg:left-[12%] lg:right-[12%] top-0 h-px bg-black/10 dark:bg-white/10" />

      <div className="pointer-events-none absolute right-[10%] bottom-0 h-40 w-40 rounded-full bg-[#2F5CFF]/5 blur-3xl" />

      <div className="relative">

        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10">

          <div className="max-w-md">
            <div className="flex items-center gap-3">
              <div className="relative flex h-9 w-9 items-center justify-center rounded-full border border-[#2F5CFF]/30 bg-[#2F5CFF]/5">
                <span className="h-2.5 w-2.5 rounded-full bg-[#2F5CFF] shadow-[0_0_15px_rgba(47,92,255,0.7)]" />
              </div>
              <div>
                <p className="font-display text-sm font-semibold">Shakeer Gittola</p>
                <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-black/60 dark:text-white/60">Full Stack Developer</p>
              </div>
            </div>

            <p className="mt-5 max-w-sm text-sm leading-relaxed text-black/60 dark:text-white/60">
              Building modern web applications, backend systems, APIs, and AI-powered experiences.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-10 gap-y-5">
            <div>
              <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-black/60 dark:text-white/60">Navigate</p>
              <div className="flex flex-col gap-3">
                <a href="#about" className="font-mono text-[11px] uppercase tracking-widest text-black/70 transition-colors hover:text-[#2F5CFF] dark:text-white/70">About</a>
                <a href="#experience" className="font-mono text-[11px] uppercase tracking-widest text-black/70 transition-colors hover:text-[#2F5CFF] dark:text-white/70">Experience</a>
                <a href="#work" className="font-mono text-[11px] uppercase tracking-widest text-black/70 transition-colors hover:text-[#2F5CFF] dark:text-white/70">Work</a>
                <a href="#contact" className="font-mono text-[11px] uppercase tracking-widest text-black/70 transition-colors hover:text-[#2F5CFF] dark:text-white/70">Contact</a>
              </div>
            </div>

            <div>
              <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-black/60 dark:text-white/60">Connect</p>
              <div className="flex flex-col gap-3">
                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/shakeer-gittolla" className="font-mono text-[11px] uppercase tracking-widest text-black/70 transition-colors hover:text-[#2F5CFF] dark:text-white/70">LinkedIn &#8599;</a>
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/Shakeerg" className="font-mono text-[11px] uppercase tracking-widest text-black/70 transition-colors hover:text-[#2F5CFF] dark:text-white/70">GitHub &#8599;</a>
                <a href="mailto:gshakeer650@gmail.com" className="font-mono text-[11px] uppercase tracking-widest text-black/70 transition-colors hover:text-[#2F5CFF] dark:text-white/70">Email</a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-black/10 dark:border-white/10 pt-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-black/60 dark:text-white/60">&copy; 2026 Shakeer Gittola</p>

          <div className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.2em] text-black/60 dark:text-white/60">
            <span className="h-1.5 w-1.5 rounded-full bg-[#2F5CFF] shadow-[0_0_8px_rgba(47,92,255,0.6)]" />
            <span>NODE_SYSTEM // ONLINE</span>
          </div>

          <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-black/60 dark:text-white/60">Built with Next.js &middot; React &middot; AI</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer