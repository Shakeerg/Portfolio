'use client'

import { useChat } from 'ai/react'
import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { useChatStatus } from '@/context/ChatStatusContext'

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({ api: '/api/chat' })
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const { setStatus } = useChatStatus()

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isLoading])

  useEffect(() => {
    if (isLoading) setStatus('thinking')
    else if (isOpen) setStatus('listening')
    else setStatus('idle')
  }, [isLoading, isOpen, setStatus])

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="mb-4 w-[calc(100vw-3rem)] sm:w-[390px] h-[min(600px,calc(100vh-7rem))] flex flex-col overflow-hidden rounded-3xl border border-black/10 dark:border-white/10 bg-white/90 dark:bg-darkTheme/95 backdrop-blur-2xl shadow-2xl shadow-black/20"
          >
            {/* Header */}
            <div className="relative shrink-0 overflow-hidden border-b border-black/10 dark:border-white/10 px-5 py-4">
              <div className="pointer-events-none absolute -right-10 -top-16 h-36 w-36 rounded-full bg-[#2F5CFF]/10 blur-3xl" />

              <div className="relative flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <motion.div
                      animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.15, 0.5] }}
                      transition={{ duration: 2.5, repeat: Infinity }}
                      className="absolute -inset-2 rounded-full bg-[#2F5CFF]/20 blur-md"
                    />
                    <div className="relative flex h-10 w-10 items-center justify-center rounded-full border border-[#2F5CFF]/30 bg-[#2F5CFF]/10">
                      <motion.div
                        animate={{ scale: [1, 1.25, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="h-3 w-3 rounded-full bg-[#2F5CFF] shadow-[0_0_18px_rgba(47,92,255,0.8)]"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <p className="font-display text-sm font-semibold tracking-tight">Node</p>
                      <span className="rounded-full border border-[#2F5CFF]/20 bg-[#2F5CFF]/5 px-1.5 py-0.5 font-mono text-[7px] uppercase tracking-widest text-[#2F5CFF]">AI</span>
                    </div>
                    <div className="mt-0.5 flex items-center gap-2 font-mono text-[8px] uppercase tracking-widest text-black/40 dark:text-white/40">
                      <motion.span
                        animate={{ opacity: [1, 0.4, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="h-1.5 w-1.5 rounded-full bg-[#2F5CFF]"
                      />
                      {isLoading ? 'Processing' : 'Online · Ready'}
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => setIsOpen(false)}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-black/10 dark:border-white/10 text-black/50 dark:text-white/50 transition-all hover:bg-black/5 dark:hover:bg-white/10 hover:text-black dark:hover:text-white"
                  aria-label="Close chat"
                >
                  ×
                </button>
              </div>
            </div>

            {/* Message area */}
            <div className="flex-1 overflow-y-auto px-4 py-5 space-y-4 text-sm">
              {messages.length === 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex h-full flex-col items-center justify-center text-center"
                >
                  <motion.div
                    animate={{ scale: [1, 1.04, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="relative mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-[#2F5CFF]/20 bg-[#2F5CFF]/5"
                  >
                    <div className="absolute inset-3 rounded-full border border-[#2F5CFF]/20" />
                    <div className="absolute inset-6 rounded-full border border-[#2F5CFF]/20" />
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="h-4 w-4 rounded-full bg-[#2F5CFF] shadow-[0_0_25px_rgba(47,92,255,0.7)]"
                    />
                  </motion.div>

                  <h3 className="font-display text-lg font-semibold">Ask Node</h3>
                  <p className="mt-2 max-w-xs text-xs leading-relaxed text-black/45 dark:text-white/45">
                    Ask me about Shakeer&apos;s experience, projects, skills, or technical background.
                  </p>

                  <div className="mt-7 w-full space-y-2">
                    <p className="mb-2 text-left font-mono text-[8px] uppercase tracking-[0.2em] text-black/30 dark:text-white/30">Try asking</p>
                    {['What does Shakeer do?', 'What projects has he built?', 'What are his technical skills?'].map((prompt) => (
                      <button
                        key={prompt}
                        type="button"
                        onClick={() => handleInputChange({ target: { value: prompt } } as React.ChangeEvent<HTMLInputElement>)}
                        className="w-full rounded-xl border border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.025] px-4 py-3 text-left text-xs text-black/60 dark:text-white/60 transition-all hover:border-[#2F5CFF]/30 hover:bg-[#2F5CFF]/5 hover:text-black dark:hover:text-white"
                      >
                        {prompt}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {messages.map((m) => (
                <motion.div
                  key={m.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25 }}
                  className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[82%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${m.role === 'user' ? 'rounded-br-md bg-black text-white dark:bg-white dark:text-black' : 'rounded-bl-md border border-black/10 dark:border-white/10 bg-black/[0.03] dark:bg-white/[0.05] text-black/75 dark:text-white/75'}`}>
                    {m.role !== 'user' && (
                      <div className="mb-2 flex items-center gap-2 font-mono text-[8px] uppercase tracking-widest text-[#2F5CFF]">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#2F5CFF]" />
                        Node
                      </div>
                    )}
                    {m.content}
                  </div>
                </motion.div>
              ))}

              {isLoading && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="rounded-2xl rounded-bl-md border border-black/10 dark:border-white/10 bg-black/[0.03] dark:bg-white/[0.05] px-4 py-3">
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1">
                        {[0, 1, 2].map((dot) => (
                          <motion.span
                            key={dot}
                            animate={{ opacity: [0.25, 1, 0.25], y: [0, -3, 0] }}
                            transition={{ duration: 0.8, repeat: Infinity, delay: dot * 0.15 }}
                            className="h-1.5 w-1.5 rounded-full bg-[#2F5CFF]"
                          />
                        ))}
                      </div>
                      <span className="font-mono text-[8px] uppercase tracking-widest text-black/30 dark:text-white/30">Thinking</span>
                    </div>
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="shrink-0 border-t border-black/10 dark:border-white/10 p-3">
              <form
                onSubmit={handleSubmit}
                className="flex items-center gap-2 rounded-2xl border border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.03] p-1 transition-all focus-within:border-[#2F5CFF]/40 focus-within:shadow-[0_0_20px_rgba(47,92,255,0.05)]"
              >
                <input
                  value={input}
                  onChange={handleInputChange}
                  placeholder="Ask Node..."
                  disabled={isLoading}
                  className="flex-1 min-w-0 bg-transparent px-3 py-2.5 text-sm text-black dark:text-white placeholder:text-black/30 dark:placeholder:text-white/30 focus:outline-none"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  disabled={isLoading || !input.trim()}
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-black text-white transition-all disabled:cursor-not-allowed disabled:opacity-30 dark:bg-white dark:text-black"
                  aria-label="Send message"
                >
                  ↑
                </motion.button>
              </form>

              <div className="mt-2 flex items-center justify-between px-1 font-mono text-[7px] uppercase tracking-[0.18em] text-black/25 dark:text-white/25">
                <span>NODE_AI</span>
                <span>ONLINE</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating AI button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
        className="group relative flex h-14 w-14 items-center justify-center rounded-full border border-[#2F5CFF]/30 bg-white/90 dark:bg-darkTheme/90 backdrop-blur-xl shadow-xl shadow-black/10"
        aria-label="Toggle AI assistant"
      >
        {!isOpen && (
          <motion.span
            animate={{ scale: [1, 1.35, 1], opacity: [0.4, 0, 0.4] }}
            transition={{ duration: 2.5, repeat: Infinity }}
            className="absolute inset-0 rounded-full border border-[#2F5CFF]/30"
          />
        )}

        <div className="relative flex h-9 w-9 items-center justify-center rounded-full border border-[#2F5CFF]/20 bg-[#2F5CFF]/10">
          {isOpen ? (
            <span className="text-lg font-light text-black dark:text-white">×</span>
          ) : (
            <motion.div
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="h-3 w-3 rounded-full bg-[#2F5CFF] shadow-[0_0_15px_rgba(47,92,255,0.8)]"
            />
          )}
        </div>

        {!isOpen && (
          <span className="pointer-events-none absolute right-16 whitespace-nowrap rounded-lg border border-black/10 dark:border-white/10 bg-white dark:bg-darkTheme px-3 py-2 font-mono text-[8px] uppercase tracking-widest text-black/60 dark:text-white/60 opacity-0 translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0">
            Talk to Node
          </span>
        )}
      </motion.button>
    </div>
  )
}

export default ChatWidget