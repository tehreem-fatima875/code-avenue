
"use client";

import {
  motion,
  useReducedMotion,
  type Variants,
} from "motion/react";

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const reveal: Variants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 24,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const stagger: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.13,
        delayChildren: shouldReduceMotion ? 0 : 0.12,
      },
    },
  };

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#f8fafc] px-6 py-20 sm:px-8 lg:px-12 lg:py-28"
    >
      {/* Animated background decoration */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-cyan-400/10 blur-3xl"
        animate={
          shouldReduceMotion
            ? {}
            : {
                x: [0, -24, 0],
                y: [0, 28, 0],
                scale: [1, 1.08, 1],
              }
        }
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-3xl"
        animate={
          shouldReduceMotion
            ? {}
            : {
                x: [0, 30, 0],
                y: [0, -20, 0],
                scale: [1, 1.06, 1],
              }
        }
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
        {/* Left Content */}
        <motion.div
          className="max-w-3xl"
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          {/* Eyebrow */}
          <motion.div
            variants={reveal}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 shadow-sm"
          >
            <motion.span
              className="h-2 w-2 rounded-full bg-cyan-500"
              animate={
                shouldReduceMotion ? {} : { opacity: [1, 0.45, 1] }
              }
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-600">
              Web Development &amp; Digital Growth
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={reveal}
            className="text-5xl font-bold leading-[1.05] tracking-[-0.03em] text-slate-950 sm:text-6xl lg:text-7xl"
          >
            We build digital
            <span className="block text-cyan-500">
              experiences that
            </span>
            help businesses grow.
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={reveal}
            className="mt-7 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg"
          >
            From high-performing websites and e-commerce platforms to
            Meta and Google advertising, Code Avenue helps businesses
            build their digital presence and reach the right customers.
          </motion.p>

          {/* CTA Button */}
          <motion.div variants={reveal} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <motion.a
              href="#contact"
              whileHover={
                shouldReduceMotion
                  ? undefined
                  : {
                      y: -3,
                      scale: 1.02,
                      boxShadow: "0 14px 32px rgba(6, 182, 212, 0.25)",
                    }
              }
              whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="inline-flex items-center justify-center rounded-full bg-cyan-500 px-7 py-3.5 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition-colors duration-300 hover:bg-cyan-400"
            >
              Start a Project
              <motion.span
                className="ml-2 text-base"
                animate={shouldReduceMotion ? {} : { x: [0, 3, 0], y: [0, -2, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                ↗
              </motion.span>
            </motion.a>
          </motion.div>

          {/* Supporting Points */}
          <motion.div
            variants={reveal}
            className="mt-10 flex flex-wrap gap-x-7 gap-y-3 border-t border-slate-200 pt-6"
          >
            {[
              "Responsive development",
              "Conversion-focused",
              "Business-focused solutions",
            ].map((point) => (
              <div
                key={point}
                className="flex items-center gap-2 text-sm text-slate-600"
              >
                <span className="text-cyan-500">✓</span>
                {point}
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Visual */}
        <motion.div
          className="relative hidden lg:block"
          initial={{
            opacity: 0,
            x: shouldReduceMotion ? 0 : 35,
            y: shouldReduceMotion ? 0 : 10,
          }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.9,
            delay: shouldReduceMotion ? 0 : 0.3,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <motion.div
            className="relative mx-auto aspect-[4/5] max-w-md overflow-hidden rounded-[2rem] bg-[#07111f] p-6 shadow-2xl shadow-slate-900/15"
            animate={
              shouldReduceMotion ? {} : { y: [0, -7, 0] }
            }
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {/* Decorative glow */}
            <motion.div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-cyan-400/20 blur-3xl"
              animate={
                shouldReduceMotion
                  ? {}
                  : { opacity: [0.5, 0.9, 0.5], scale: [1, 1.12, 1] }
              }
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Window */}
            <div className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0b1626]">
              {/* Window top bar */}
              <div className="flex items-center gap-2 border-b border-white/10 px-5 py-4">
                <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                <motion.span
                  className="h-2.5 w-2.5 rounded-full bg-cyan-400/70"
                  animate={
                    shouldReduceMotion ? {} : { opacity: [1, 0.45, 1] }
                  }
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <div className="ml-auto h-2 w-20 rounded-full bg-white/10" />
              </div>

              {/* Visual content */}
              <div className="flex flex-1 flex-col justify-between p-6">
                <div>
                  <motion.p
                    initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="text-xs font-medium uppercase tracking-[0.2em] text-cyan-400"
                  >
                    Digital Solutions
                  </motion.p>

                  <h2 className="mt-5 text-3xl font-bold leading-tight text-white">
                    Build.
                    <br />
                    Launch.
                    <br />
                    <span className="text-cyan-400">Grow.</span>
                  </h2>

                  <p className="mt-5 max-w-xs text-sm leading-6 text-slate-400">
                    Websites, e-commerce and digital advertising built
                    around real business goals.
                  </p>
                </div>

                {/* Mini Dashboard */}
                <motion.div
                  className="mt-10 space-y-3"
                  variants={stagger}
                  initial="hidden"
                  animate="visible"
                >
                  <motion.div
                    variants={reveal}
                    className="rounded-xl border border-white/10 bg-white/[0.04] p-4"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-400">
                        Digital Presence
                      </span>
                      <span className="text-xs text-cyan-400">Active</span>
                    </div>

                    <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10">
                      <motion.div
                        className="h-full rounded-full bg-cyan-400"
                        initial={{ width: "0%" }}
                        animate={{ width: "82%" }}
                        transition={{
                          duration: shouldReduceMotion ? 0 : 1.4,
                          delay: shouldReduceMotion ? 0 : 0.8,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                      />
                    </div>
                  </motion.div>

                  <div className="grid grid-cols-2 gap-3">
                    <motion.div
                      variants={reveal}
                      whileHover={shouldReduceMotion ? undefined : { y: -4 }}
                      className="rounded-xl border border-white/10 bg-white/[0.04] p-4"
                    >
                      <p className="text-xs text-slate-500">Web</p>
                      <p className="mt-2 text-lg font-semibold text-white">
                        Build
                      </p>
                    </motion.div>

                    <motion.div
                      variants={reveal}
                      whileHover={shouldReduceMotion ? undefined : { y: -4 }}
                      className="rounded-xl border border-white/10 bg-white/[0.04] p-4"
                    >
                      <p className="text-xs text-slate-500">Ads</p>
                      <p className="mt-2 text-lg font-semibold text-white">
                        Grow
                      </p>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Floating Accent Card */}
          <motion.div
            className="absolute -bottom-6 -left-8 rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-xl shadow-slate-900/10"
            initial={{
              opacity: 0,
              y: shouldReduceMotion ? 0 : 14,
              x: shouldReduceMotion ? 0 : -8,
            }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.65,
              delay: shouldReduceMotion ? 0 : 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={shouldReduceMotion ? undefined : { y: -4 }}
          >
            <p className="text-xs font-medium uppercase tracking-[0.15em] text-slate-500">
              Built for business
            </p>
            <p className="mt-1 text-sm font-semibold text-slate-900">
              Strategy × Technology
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
