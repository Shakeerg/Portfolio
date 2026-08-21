'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'motion/react'

const Contact = () => {
  const [result, setResult] = useState('')
  const [isSending, setIsSending] = useState(false)

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    setIsSending(true)
    setResult('')

    const formData = new FormData(form)
    formData.append('access_key', 'de77bfe7-adac-4bce-9849-1142f66eabdf')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      })
      const data = await response.json()

      if (data.success) {
        setResult('Message transmitted successfully.')
        form.reset()
      } else {
        setResult(data.message || 'Something went wrong.')
      }
    } catch {
      setResult('Unable to send the message. Please try again.')
    } finally {
      setIsSending(false)
    }
  }

  const handleCalClick = () => {
    window.open('https://app.cal.com/shakeer-gittola/30min?overlayCalendar=true', '_blank', 'noopener,noreferrer')
  }

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8 }}
      className="relative w-full overflow-hidden px-[8%] lg:px-[12%] py-28 scroll-mt-20"
    >

      <div className="pointer-events-none absolute right-[5%] top-[15%] h-72 w-72 rounded-full bg-[#2F5CFF]/5 blur-3xl" />
      <div className="pointer-events-none absolute left-[10%] bottom-[5%] h-48 w-48 rounded-full bg-[#2F5CFF]/5 blur-3xl" />

      <div className="relative z-10">

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-[#2F5CFF] shadow-[0_0_12px_rgba(47,92,255,0.7)]" />
            <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-black/60 dark:text-white/60">Connection</h4>
          </div>

          <h2 className="max-w-3xl font-display font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight">
            Let&apos;s build something<span className="text-[#2F5CFF]"> worth shipping.</span>
          </h2>

          <p className="mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-black/70 dark:text-white/70">
            Open to new opportunities, technical challenges, and interesting products.
            Send a message or connect directly through my calendar.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-10 lg:gap-16">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="rounded-3xl border border-black/10 dark:border-white/10 bg-black/[0.015] dark:bg-white/[0.025] p-6 sm:p-8"
          >
            <div className="mb-8 flex items-center justify-between">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#2F5CFF]">Direct channel</p>
                <h3 className="mt-2 font-display text-xl font-semibold">Send a message</h3>
              </div>

              <div className="hidden sm:flex items-center gap-2 rounded-full border border-black/10 dark:border-white/10 px-3 py-1.5">
                <motion.span
                  animate={{ opacity: [1, 0.4, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="h-1.5 w-1.5 rounded-full bg-[#2F5CFF]"
                />
                <span className="font-mono text-[9px] uppercase tracking-widest text-black/60 dark:text-white/60">Online</span>
              </div>
            </div>

            <form onSubmit={onSubmit} className="flex flex-col gap-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="mb-2 block font-mono text-[10px] uppercase tracking-widest text-black/60 dark:text-white/60">
                    Your name
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    required
                    className="w-full rounded-xl border border-black/10 dark:border-white/10 bg-transparent px-4 py-3.5 text-sm outline-none transition-all placeholder:text-black/30 dark:placeholder:text-white/30 focus:border-[#2F5CFF] focus:ring-4 focus:ring-[#2F5CFF]/5"
                  />
                </div>

                <div>
                  <label className="mb-2 block font-mono text-[10px] uppercase tracking-widest text-black/60 dark:text-white/60">
                    Email address
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    required
                    className="w-full rounded-xl border border-black/10 dark:border-white/10 bg-transparent px-4 py-3.5 text-sm outline-none transition-all placeholder:text-black/30 dark:placeholder:text-white/30 focus:border-[#2F5CFF] focus:ring-4 focus:ring-[#2F5CFF]/5"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block font-mono text-[10px] uppercase tracking-widest text-black/60 dark:text-white/60">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={6}
                  placeholder="Tell me about your project, opportunity, or idea..."
                  required
                  className="w-full resize-none rounded-xl border border-black/10 dark:border-white/10 bg-transparent px-4 py-3.5 text-sm leading-relaxed outline-none transition-all placeholder:text-black/30 dark:placeholder:text-white/30 focus:border-[#2F5CFF] focus:ring-4 focus:ring-[#2F5CFF]/5"
                />
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <button
                  type="submit"
                  disabled={isSending}
                  className="group inline-flex w-fit items-center gap-3 rounded-full bg-[#0E0E10] px-7 py-3.5 font-mono text-[11px] uppercase tracking-[0.15em] text-white transition-all hover:bg-[#2F5CFF] hover:shadow-lg hover:shadow-[#2F5CFF]/20 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-white dark:text-black dark:hover:bg-[#2F5CFF] dark:hover:text-white"
                >
                  {isSending ? 'Transmitting...' : 'Send message'}
                  {!isSending && <span className="text-sm transition-transform group-hover:translate-x-1">&rarr;</span>}
                </button>

                {result && (
                  <motion.p
                    initial={{ opacity: 0, x: -5 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-xs text-black/70 dark:text-white/70"
                  >
                    {result}
                  </motion.p>
                )}
              </div>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col gap-4"
          >
            <motion.button
              whileHover={{ y: -4 }}
              onClick={handleCalClick}
              type="button"
              className="group relative overflow-hidden rounded-2xl border border-black/10 dark:border-white/10 bg-black/[0.015] dark:bg-white/[0.025] p-6 text-left transition-all hover:border-[#2F5CFF]/40 hover:shadow-xl hover:shadow-[#2F5CFF]/5"
            >
              <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-[#2F5CFF]/10 blur-2xl transition-opacity group-hover:opacity-100" />

              <div className="relative">
                <div className="mb-8 flex h-10 w-10 items-center justify-center rounded-xl border border-[#2F5CFF]/20 bg-[#2F5CFF]/5 text-[#2F5CFF]">&#8599;</div>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#2F5CFF]">Prefer a conversation?</p>
                <h3 className="mt-2 font-display text-lg font-semibold">Book a 30-min call</h3>
                <p className="mt-2 text-xs leading-relaxed text-black/65 dark:text-white/65">Pick a time that works for you and let&apos;s talk.</p>
                <div className="mt-5 font-mono text-[10px] uppercase tracking-widest text-black/60 transition-colors group-hover:text-[#2F5CFF] dark:text-white/60">Open calendar &rarr;</div>
              </div>
            </motion.button>

            <Link
              href="mailto:gshakeer650@gmail.com"
              className="group rounded-2xl border border-black/10 dark:border-white/10 bg-black/[0.015] dark:bg-white/[0.025] p-6 transition-all hover:-translate-y-1 hover:border-[#2F5CFF]/40 hover:shadow-xl hover:shadow-black/5"
            >
              <div className="mb-8 flex h-10 w-10 items-center justify-center rounded-xl border border-black/10 dark:border-white/10 text-sm">@</div>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-black/60 dark:text-white/60">Email</p>
              <p className="mt-2 break-all font-display text-sm font-semibold transition-colors group-hover:text-[#2F5CFF]">gshakeer650@gmail.com</p>
            </Link>

            <div className="mt-auto rounded-2xl border border-[#2F5CFF]/15 bg-[#2F5CFF]/[0.03] p-5">
              <div className="flex items-center gap-2">
                <motion.span
                  animate={{ scale: [1, 1.2, 1], opacity: [1, 0.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="h-2 w-2 rounded-full bg-[#2F5CFF] shadow-[0_0_10px_rgba(47,92,255,0.6)]"
                />
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#2F5CFF]">Open to opportunities</span>
              </div>
              <p className="mt-3 text-xs leading-relaxed text-black/65 dark:text-white/65">
                Full-time roles, freelance projects, and interesting technical collaborations.
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="mt-20 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-t border-black/10 dark:border-white/10 pt-5"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-black/60 dark:text-white/60">CONNECTION_CHANNEL // ACTIVE</span>
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-black/60 dark:text-white/60">NODE_READY</span>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Contact