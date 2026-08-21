'use client'

import { assets } from '@/assets/assets'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import type { NavbarProps } from '@/types'
import MagneticButton from '@/components/MagneticButton'

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Contact', href: '#contact' },
]

const Navbar = ({ isDarkMode, setIsDarkMode }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const sections = navItems.map((item) => document.querySelector(item.href)).filter(Boolean)
    if (!sections.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visibleSection?.target.id) {
          setActiveSection(`#${visibleSection.target.id}`)
        }
      },
      { rootMargin: '-25% 0px -60% 0px', threshold: [0.1, 0.25, 0.5] }
    )

    sections.forEach((section) => {
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  const openMenu = () => setIsMenuOpen(true)
  const closeMenu = () => setIsMenuOpen(false)

  useEffect(() => {
    if (!isMenuOpen) return
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeMenu()
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isMenuOpen])

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  useEffect(() => {
    if (!isMenuOpen) return
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        closeMenu()
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isMenuOpen])

  const handleNavClick = (href: string) => {
    setActiveSection(href)
    closeMenu()
  }

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 px-5 lg:px-8 xl:px-[8%] py-5 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#FAFAF7]/75 backdrop-blur-xl border-b border-black/10 shadow-[0_10px_40px_rgba(0,0,0,0.03)] dark:bg-darkTheme/75 dark:border-white/10 dark:shadow-none'
            : 'bg-transparent'
        }`}
      >
        <div className="flex items-center justify-between">
          <Link
            href="#home"
            onClick={() => handleNavClick('#home')}
            className="group relative font-display font-bold text-xl tracking-tight"
          >
            Shakeer<span className="text-[#2F5CFF]">.</span>
            <span className="absolute -inset-2 rounded-full bg-[#2F5CFF]/10 blur-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </Link>

          <ul className="hidden md:flex items-center gap-8 lg:gap-10 font-mono text-[11px] uppercase tracking-[0.16em]">
            {navItems.map((item) => {
              const isActive = activeSection === item.href
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => handleNavClick(item.href)}
                    className="group relative block py-2 text-black/70 dark:text-white/70 transition-colors duration-300 hover:text-black dark:hover:text-white"
                  >
                    <span className={isActive ? 'text-[#2F5CFF]' : ''}>{item.label}</span>

                    <motion.span
                      initial={false}
                      animate={{ width: isActive ? '100%' : '0%', opacity: isActive ? 1 : 0 }}
                      transition={{ duration: 0.25, ease: 'easeOut' }}
                      className="absolute left-0 bottom-0 h-px bg-[#2F5CFF]"
                    />

                    <span className="absolute left-0 bottom-0 h-px w-0 bg-black/30 transition-all duration-300 group-hover:w-full dark:bg-white/30" />
                  </Link>
                </li>
              )
            })}
          </ul>

          <div className="flex items-center gap-3 sm:gap-4">
            <motion.button
              whileHover={{ rotate: 15 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsDarkMode((prev) => !prev)}
              aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              className="relative flex h-9 w-9 items-center justify-center rounded-full transition-colors hover:bg-black/5 dark:hover:bg-white/10"
            >
              <Image src={isDarkMode ? assets.sun_icon : assets.moon_icon} alt="" className="w-5" />
            </motion.button>

            <MagneticButton
              href="#contact"
              strength={0.12}
              className="hidden lg:flex items-center gap-2 rounded-full bg-[#0E0E10] px-6 py-2.5 font-mono text-[11px] uppercase tracking-[0.16em] text-white transition-colors hover:bg-[#2F5CFF] dark:bg-white dark:text-black dark:hover:bg-[#2F5CFF] dark:hover:text-white"
            >
              Let&apos;s talk
              <span className="text-xs">&rarr;</span>
            </MagneticButton>

            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={openMenu}
              aria-label="Open navigation menu"
              aria-expanded={isMenuOpen}
              className="flex md:hidden h-9 w-9 items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/10"
            >
              <Image src={isDarkMode ? assets.menu_white : assets.menu_black} alt="" className="w-6" />
            </motion.button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-[55] bg-black/20 backdrop-blur-sm"
              aria-hidden="true"
              onClick={closeMenu}
            />

            <motion.div
              ref={menuRef}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.45, ease: [0.76, 0, 0.24, 1] }}
              className="fixed right-0 top-0 bottom-0 z-[60] flex w-[min(82vw,360px)] flex-col bg-[#FAFAF7] px-8 py-8 shadow-[-20px_0_60px_rgba(0,0,0,0.08)] dark:bg-darkTheme dark:shadow-none"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-black/65 dark:text-white/65">Navigation</span>

                <motion.button
                  whileHover={{ rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={closeMenu}
                  aria-label="Close navigation menu"
                  className="flex h-9 w-9 items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/10"
                >
                  <Image src={isDarkMode ? assets.close_white : assets.close_black} alt="" className="w-5" />
                </motion.button>
              </div>

              <nav className="mt-20">
                <ul className="flex flex-col">
                  {navItems.map((item, index) => {
                    const isActive = activeSection === item.href
                    return (
                      <motion.li
                        key={item.href}
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + index * 0.06, duration: 0.35 }}
                      >
                        <Link
                          href={item.href}
                          onClick={() => handleNavClick(item.href)}
                          className="group flex items-center justify-between border-b border-black/10 py-5 font-display text-2xl font-semibold tracking-tight dark:border-white/10"
                        >
                          <span className={isActive ? 'text-[#2F5CFF]' : ''}>{item.label}</span>
                          <motion.span
                            animate={{ x: isActive ? 0 : -8, opacity: isActive ? 1 : 0 }}
                            className="text-[#2F5CFF]"
                          >
                            &rarr;
                          </motion.span>
                        </Link>
                      </motion.li>
                    )
                  })}
                </ul>
              </nav>

              <div className="mt-auto">
                <div className="mb-6 h-px w-full bg-black/10 dark:bg-white/10" />
                <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.18em] text-black/65 dark:text-white/65">
                  Available for opportunities
                </p>
                <Link
                  href="mailto:gshakeer650@gmail.com"
                  onClick={closeMenu}
                  className="font-mono text-xs tracking-wide text-[#2F5CFF] transition-opacity hover:opacity-70"
                >
                  gshakeer650@gmail.com
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar