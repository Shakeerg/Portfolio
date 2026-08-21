'use client'

import React from 'react'
import { motion } from 'motion/react'
import type { Service } from '@prisma/client'

interface ServicesProps {
  services: Service[]
}

const Services = ({ services }: ServicesProps) => {
  return (
    <motion.section
      id="services"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.8 }}
      className="w-full px-[8%] lg:px-[12%] py-24 scroll-mt-20"
    >
      {/* Header */}
      <div className="max-w-3xl mb-14">
        <motion.p
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="
            font-mono text-xs uppercase tracking-[0.2em]
            text-black/50 dark:text-white/50 mb-4
          "
        >
          What I offer
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="
            font-display font-bold
            text-4xl sm:text-5xl lg:text-6xl
            tracking-tight leading-[0.95]
          "
        >
          Services<span className="text-[#2F5CFF]">.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="
            mt-5 max-w-2xl
            text-sm sm:text-base
            leading-relaxed
            text-black/60 dark:text-white/60
          "
        >
          From scalable web applications to polished digital experiences,
          I build products that combine clean engineering with thoughtful
          design.
        </motion.p>
      </div>

      {/* Services grid */}
      <div
        className="
          grid grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4
          gap-4 lg:gap-5
        "
      >
        {services.map((service, index) => (
          <motion.article
            key={service.id}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.55,
              delay: index * 0.08,
            }}
            whileHover={{
              y: -8,
            }}
            className="
              group relative overflow-hidden
              min-h-[280px]
              p-7
              rounded-2xl
              bg-white
              border border-black/10
              transition-all duration-300

              hover:border-[#2F5CFF]/40
              hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]

              dark:bg-white/[0.04]
              dark:border-white/10
              dark:hover:border-[#2F5CFF]/40
              dark:hover:shadow-[0_20px_60px_rgba(0,0,0,0.2)]
            "
          >
            {/* Hover glow */}
            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute -right-20 -top-20
                w-40 h-40
                rounded-full
                bg-[#2F5CFF]/10
                blur-3xl
                opacity-0
                transition-opacity duration-500
                group-hover:opacity-100
              "
            />

            {/* Number */}
            <div className="relative flex items-center justify-between mb-8">
              <span
                className="
                  font-mono text-[10px]
                  uppercase tracking-[0.2em]
                  text-black/30
                  dark:text-white/30
                "
              >
                0{index + 1}
              </span>

              <span
                className="
                  h-2 w-2
                  rounded-full
                  bg-[#2F5CFF]
                  shadow-[0_0_12px_rgba(47,92,255,0.6)]
                "
              />
            </div>

            {/* Content */}
            <div className="relative">
              <h3
                className="
                  font-display
                  font-semibold
                  text-xl
                  tracking-tight
                  mb-3
                  transition-colors duration-300
                  group-hover:text-[#2F5CFF]
                "
              >
                {service.title}
              </h3>

              <p
                className="
                  text-sm
                  leading-relaxed
                  text-black/60
                  dark:text-white/60
                "
              >
                {service.description}
              </p>
            </div>

            {/* Link */}
            {service.link && (
              <div className="absolute left-7 bottom-7">
                <a
                  href={service.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex items-center gap-2
                    font-mono text-[10px]
                    uppercase tracking-[0.16em]
                    text-[#2F5CFF]
                    transition-all duration-300
                  "
                >
                  <span>View work</span>

                  <span
                    className="
                      inline-block
                      transition-transform duration-300
                      group-hover:translate-x-1
                    "
                  >
                    →
                  </span>
                </a>
              </div>
            )}

            {/* Bottom accent */}
            <div
              aria-hidden="true"
              className="
                absolute bottom-0 left-0
                h-[2px] w-0
                bg-[#2F5CFF]
                transition-all duration-500
                group-hover:w-full
              "
            />
          </motion.article>
        ))}
      </div>
    </motion.section>
  )
}

export default Services