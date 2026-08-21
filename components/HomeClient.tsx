'use client'
import { useEffect, useState } from 'react'
import type { Project, Service } from '@prisma/client'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Header from '@/components/Header'
import Navbar from '@/components/Navbar'
import Services from '@/components/Services'
import Work from '@/components/Work'
import Footer from '@/components/Footer'
import ChatWidget from '@/components/ChatWidget'
import Experience from '@/components/Experience'
import LoadingScreen from '@/components/LoadingScreen'
import { ChatStatusProvider } from '@/context/ChatStatusContext'

interface HomeClientProps {
  projects: Project[]
  services: Service[]
}

export default function HomeClient({
  projects,
  services,
}: HomeClientProps) {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [themeLoaded, setThemeLoaded] = useState(false)

  // Initial theme
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme === 'dark') {
      setIsDarkMode(true)
    } else if (savedTheme === 'light') {
      setIsDarkMode(false)
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      setIsDarkMode(prefersDark)
    }
    setThemeLoaded(true)
  }, [])

  // Apply theme
  useEffect(() => {
    if (!themeLoaded) return
    const root = document.documentElement
    if (isDarkMode) {
      root.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      root.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [isDarkMode, themeLoaded])

  return (
    <ChatStatusProvider>
      <LoadingScreen />

      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

      <main>
        <Header isDarkMode={isDarkMode} />
        <About isDarkMode={isDarkMode} />
        <Experience />
        <Services services={services} />
        <Work projects={projects} />
        <Contact />
      </main>

      <Footer isDarkMode={isDarkMode} />

      <ChatWidget />
    </ChatStatusProvider>
  )
}