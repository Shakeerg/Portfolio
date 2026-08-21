'use client'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Playfair_Display } from 'next/font/google'

const playfair = Playfair_Display({ subsets: ['latin'], weight: '700', style: 'italic' })

const NAME = "Shakeer"

const LoadingScreen = () => {
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    document.documentElement.style.overflow = 'hidden'

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + Math.floor(Math.random() * 15) + 5
      })
    }, 120)

    const timeout = setTimeout(() => {
      setLoading(false)
      document.documentElement.style.overflow = ''
    }, 2200)

    return () => {
      clearInterval(interval)
      clearTimeout(timeout)
      document.documentElement.style.overflow = ''
    }
  }, [])

  const letterVariants = {
    hidden: { opacity: 0, y: 20, filter: 'blur(4px)' },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { delay: i * 0.05, duration: 0.5, ease: 'easeOut' as const },
    }),
  }

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="loading-wrapper"
          className='fixed inset-0 z-[100] flex'
        >
          {/* left curtain panel */}
          <motion.div
            initial={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
            className='absolute inset-y-0 left-0 w-1/2 bg-[#FAFAF7] dark:bg-darkTheme'
          />
          {/* right curtain panel */}
          <motion.div
            initial={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
            className='absolute inset-y-0 right-0 w-1/2 bg-[#FAFAF7] dark:bg-darkTheme'
          />

          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className='relative w-full flex flex-col items-center justify-center gap-6'
          >
            {/* pulsing ring behind wordmark */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: [0.8, 1.15, 1], opacity: [0, 0.5, 0.15] }}
              transition={{ duration: 1.6, repeat: Infinity, repeatType: 'loop', ease: 'easeInOut' }}
              className='absolute w-40 h-40 rounded-full border border-[#2F5CFF]'
            />
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: [0.8, 1.3, 1], opacity: [0, 0.3, 0.1] }}
              transition={{ duration: 1.6, repeat: Infinity, repeatType: 'loop', ease: 'easeInOut', delay: 0.3 }}
              className='absolute w-56 h-56 rounded-full border border-[#2F5CFF]'
            />

            <div className={`relative text-5xl sm:text-6xl flex ${playfair.className}`}>
              {NAME.split("").map((char, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  initial="hidden"
                  animate="visible"
                  variants={letterVariants}
                >
                  {char}
                </motion.span>
              ))}
              <motion.span
                custom={NAME.length}
                initial="hidden"
                animate="visible"
                variants={letterVariants}
                className='text-[#2F5CFF]'
              >
                .
              </motion.span>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.4 }}
              className='relative w-48 h-[2px] bg-black/10 dark:bg-white/10 overflow-hidden rounded-full'
            >
              <motion.div
                className='h-full bg-[#2F5CFF]'
                animate={{ width: `${Math.min(progress, 100)}%` }}
                transition={{ duration: 0.2 }}
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.4 }}
              className='relative font-mono text-xs uppercase tracking-widest text-black/40 dark:text-white/40'
            >
              {Math.min(progress, 100)}%
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default LoadingScreen