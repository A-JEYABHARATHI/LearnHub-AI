"use client";

import {
  ArrowRight,
  Brain,
  CheckCircle2,
  ChevronRight,
  Clock3,
  Code2,
  Database,
  GraduationCap,
  Menu,
  PlayCircle,
  Sparkles,
  Star,
  Target,
  Trophy,
  Users,
  X,
  Zap,
} from "lucide-react";
import { useState } from "react";

const courses = [
  {
    title: "React & TypeScript",
    description: "Build modern and scalable web applications with React.",
    level: "Beginner",
    lessons: 32,
    rating: 4.9,
    icon: Code2,
  },
  {
    title: "Java & Spring Boot",
    description: "Learn Java backend development and REST API design.",
    level: "Intermediate",
    lessons: 40,
    rating: 4.8,
    icon: Database,
  },
  {
    title: "Python Programming",
    description: "Master Python fundamentals and practical programming.",
    level: "Beginner",
    lessons: 28,
    rating: 4.9,
    icon: Brain,
  },
  {
    title: "Data Science",
    description: "Explore data analysis, visualization and machine learning.",
    level: "Intermediate",
    lessons: 36,
    rating: 4.8,
    icon: Target,
  },
  {
    title: "SQL & Database",
    description: "Learn database design, SQL queries and optimization.",
    level: "Beginner",
    lessons: 25,
    rating: 4.7,
    icon: Database,
  },
  {
    title: "Artificial Intelligence",
    description: "Understand AI concepts and build intelligent applications.",
    level: "Advanced",
    lessons: 45,
    rating: 4.9,
    icon: Sparkles,
  },
];

const features = [
  {
    icon: Brain,
    title: "AI-Powered Learning",
    description:
      "Get personalized explanations, summaries and learning recommendations.",
  },
  {
    icon: PlayCircle,
    title: "Interactive Courses",
    description:
      "Learn through structured lessons, practical examples and exercises.",
  },
  {
    icon: Target,
    title: "Smart Assessments",
    description:
      "Test your knowledge with quizzes and receive instant feedback.",
  },
  {
    icon: Trophy,
    title: "Track Your Progress",
    description:
      "Monitor your learning journey and celebrate every achievement.",
  },
];

export default function Home() {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 shadow-lg shadow-cyan-500/20">
              <GraduationCap className="h-6 w-6 text-white" />
            </div>

            <div>
              <h1 className="text-xl font-bold tracking-tight">
                LearnHub<span className="text-cyan-400"> AI</span>
              </h1>
              <p className="hidden text-[10px] font-medium uppercase tracking-[0.2em] text-slate-400 sm:block">
                Learn • Practice • Grow
              </p>
            </div>
          </a>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden items-center gap-8 md:flex">
            <a
              href="#home"
              className="text-sm font-medium text-cyan-400 transition hover:text-cyan-300"
            >
              Home
            </a>
            <a
              href="#courses"
              className="text-sm font-medium text-slate-300 transition hover:text-white"
            >
              Courses
            </a>
            <a
              href="#features"
              className="text-sm font-medium text-slate-300 transition hover:text-white"
            >
              Features
            </a>
            <a
              href="#about"
              className="text-sm font-medium text-slate-300 transition hover:text-white"
            >
              About
            </a>
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <a
              href="/login"
              className="rounded-xl px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:bg-white/5"
            >
              Sign In
            </a>
            <a
              href="/register"
              className="rounded-xl bg-cyan-500 px-5 py-2.5 text-sm font-bold text-slate-950 transition hover:bg-cyan-400"
            >
              Get Started
            </a>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="rounded-lg p-2 text-slate-200 md:hidden"
            aria-label="Toggle menu"
          >
            {mobileMenu ? <X /> : <Menu />}
          </button>
        </div>

        {/* MOBILE NAVIGATION */}
        {mobileMenu && (
          <div className="border-t border-white/10 bg-slate-950 px-6 py-5 md:hidden">
            <div className="flex flex-col gap-4">
              <a href="#home" onClick={() => setMobileMenu(false)}>
                Home
              </a>
              <a href="#courses" onClick={() => setMobileMenu(false)}>
                Courses
              </a>
              <a href="#features" onClick={() => setMobileMenu(false)}>
                Features
              </a>
              <a href="#about" onClick={() => setMobileMenu(false)}>
                About
              </a>

              <div className="mt-2 flex gap-3">
                <a
                  href="/login"
                  className="flex-1 rounded-xl border border-white/10 px-4 py-3 text-center"
                >
                  Sign In
                </a>

                <a
                  href="/register"
                  className="flex-1 rounded-xl bg-cyan-500 px-4 py-3 text-center font-bold text-slate-950"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section id="home" className="relative overflow-hidden">
        <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute right-0 top-40 h-80 w-80 rounded-full bg-blue-600/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-300">
              <Sparkles className="h-4 w-4" />
              AI-powered learning platform
            </div>

            <h2 className="max-w-3xl text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Learn Smarter.
              <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
                Build Your Future.
              </span>
            </h2>

            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-400">
              LearnHub AI helps students learn faster through interactive
              courses, smart assessments, personalized progress tracking and
              AI-powered assistance.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href="#courses"
                className="group flex items-center justify-center gap-2 rounded-xl bg-cyan-500 px-7 py-4 font-bold text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-400"
              >
                Explore Courses
                <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
              </a>

              <a
                href="/register"
                className="flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-7 py-4 font-bold text-white transition hover:bg-white/10"
              >
                Get Started
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3 text-sm text-slate-400">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-cyan-400" />
                Expert-led courses
              </span>

              <span className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-cyan-400" />
                AI assistance
              </span>

              <span className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-cyan-400" />
                Certificates
              </span>
            </div>
          </div>

          {/* HERO VISUAL */}
          <div className="relative">
            <div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-r from-cyan-500/10 to-blue-600/10 blur-2xl" />

            <div className="relative rounded-3xl border border-white/10 bg-white/[0.04] p-5 shadow-2xl backdrop-blur-xl">
              <div className="rounded-2xl border border-white/10 bg-slate-900 p-5">
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-400">Your Learning</p>
                    <h3 className="mt-1 text-xl font-bold">Dashboard</h3>
                  </div>

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400/10">
                    <Brain className="h-5 w-5 text-cyan-400" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                    <Users className="mb-3 h-5 w-5 text-cyan-400" />
                    <p className="text-2xl font-bold">10K+</p>
                    <p className="mt-1 text-xs text-slate-500">Learners</p>
                  </div>

                  <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                    <GraduationCap className="mb-3 h-5 w-5 text-blue-400" />
                    <p className="text-2xl font-bold">500+</p>
                    <p className="mt-1 text-xs text-slate-500">Courses</p>
                  </div>
                </div>

                <div className="mt-4 rounded-xl border border-white/10 bg-white/[0.03] p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-slate-500">
                        Continue Learning
                      </p>
                      <p className="mt-1 font-semibold">React & TypeScript</p>
                    </div>

                    <span className="text-sm font-bold text-cyan-400">
                      78%
                    </span>
                  </div>

                  <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-800">
                    <div className="h-full w-[78%] rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />
                  </div>

                  <button className="mt-4 flex items-center gap-2 text-sm font-semibold text-cyan-400">
                    Continue learning
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>

                <div className="mt-4 rounded-xl border border-cyan-400/10 bg-cyan-400/5 p-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-400/10">
                      <Sparkles className="h-5 w-5 text-cyan-400" />
                    </div>

                    <div>
                      <p className="text-sm font-semibold">AI Study Assistant</p>
                      <p className="text-xs text-slate-500">
                        Ask anything about your course
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto grid max-w-7xl grid-cols-2 px-6 py-10 lg:grid-cols-4 lg:px-8">
          {[
            ["10K+", "Active Learners"],
            ["500+", "Quality Courses"],
            ["50+", "Expert Instructors"],
            ["95%", "Completion Rate"],
          ].map(([number, label]) => (
            <div
              key={label}
              className="border-white/10 px-5 py-4 text-center first:border-l-0 lg:border-l"
            >
              <p className="text-3xl font-black text-white">{number}</p>
              <p className="mt-1 text-sm text-slate-500">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">
            Why LearnHub AI?
          </p>

          <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
            Everything you need to learn better
          </h2>

          <p className="mt-5 text-slate-400">
            A complete learning environment designed to help you build real
            skills and achieve your goals.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[0.05]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400/10">
                  <Icon className="h-6 w-6 text-cyan-400" />
                </div>

                <h3 className="mt-6 text-lg font-bold">{feature.title}</h3>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* COURSES */}
      <section id="courses" className="bg-white/[0.02] py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">
                Learn something new
              </p>

              <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
                Popular Courses
              </h2>
            </div>

            <button className="flex items-center gap-2 self-start rounded-xl border border-white/10 px-5 py-3 text-sm font-semibold text-slate-300 transition hover:bg-white/5 sm:self-auto">
              View all courses
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {courses.map((course) => {
              const Icon = course.icon;

              return (
                <article
                  key={course.title}
                  className="group overflow-hidden rounded-2xl border border-white/10 bg-slate-950 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30"
                >
                  <div className="flex h-32 items-center justify-center bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-violet-500/10">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                      <Icon className="h-8 w-8 text-cyan-400" />
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between gap-3">
                      <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-400">
                        {course.level}
                      </span>

                      <span className="flex items-center gap-1 text-sm text-slate-400">
                        <Star className="h-4 w-4 fill-current text-yellow-400" />
                        {course.rating}
                      </span>
                    </div>

                    <h3 className="mt-5 text-xl font-bold">{course.title}</h3>

                    <p className="mt-2 min-h-12 text-sm leading-6 text-slate-400">
                      {course.description}
                    </p>

                    <div className="mt-5 flex items-center gap-5 border-t border-white/10 pt-5 text-xs text-slate-500">
                      <span className="flex items-center gap-1.5">
                        <PlayCircle className="h-4 w-4" />
                        {course.lessons} Lessons
                      </span>

                      <span className="flex items-center gap-1.5">
                        <Clock3 className="h-4 w-4" />
                        Self-paced
                      </span>
                    </div>

                    <button className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-white/5 py-3 text-sm font-bold text-white transition group-hover:bg-cyan-500 group-hover:text-slate-950">
                      View Course
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* AI ASSISTANT */}
      <section id="about" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="overflow-hidden rounded-3xl border border-cyan-400/10 bg-gradient-to-br from-cyan-400/10 via-blue-500/5 to-transparent p-8 sm:p-12 lg:p-16">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-400/10">
                <Sparkles className="h-7 w-7 text-cyan-400" />
              </div>

              <p className="mt-7 text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">
                Your AI Learning Partner
              </p>

              <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
                Learn with an assistant that is always ready to help.
              </h2>

              <p className="mt-6 leading-8 text-slate-400">
                Stuck on a concept? Need a quick summary? Want more practice
                questions? The LearnHub AI assistant helps you understand
                difficult topics and stay on track.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "Explain difficult concepts",
                  "Generate practice questions",
                  "Summarize lessons",
                  "Recommend what to learn next",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-cyan-400" />
                    <span className="text-sm text-slate-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-slate-950/80 p-5 shadow-2xl">
              <div className="mb-5 flex items-center gap-3 border-b border-white/10 pb-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10">
                  <Sparkles className="h-5 w-5 text-cyan-400" />
                </div>

                <div>
                  <p className="font-bold">LearnHub AI Assistant</p>
                  <p className="text-xs text-slate-500">Online • Ready to help</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="ml-auto max-w-[85%] rounded-2xl rounded-br-sm bg-cyan-500 p-4 text-sm font-medium text-slate-950">
                  Explain React Hooks in simple words.
                </div>

                <div className="max-w-[90%] rounded-2xl rounded-bl-sm border border-white/10 bg-white/5 p-4 text-sm leading-6 text-slate-300">
                  React Hooks are special functions that allow functional
                  components to use features like state and lifecycle
                  behavior. For example, <strong>useState</strong> manages
                  component data while <strong>useEffect</strong> handles side
                  effects.
                </div>

                <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] p-3 text-sm text-slate-500">
                  <Zap className="h-4 w-4 text-cyan-400" />
                  Ask another question...
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="border-y border-white/10 bg-white/[0.02] py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">
              Simple process
            </p>

            <h2 className="mt-3 text-4xl font-black sm:text-5xl">
              How LearnHub AI works
            </h2>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-4">
            {[
              ["01", "Choose a Course", "Find the right course for your goals."],
              ["02", "Learn", "Complete structured lessons at your pace."],
              ["03", "Practice", "Test your knowledge with smart quizzes."],
              ["04", "Get Certified", "Complete your course and earn a certificate."],
            ].map(([number, title, description]) => (
              <div key={number} className="relative text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-xl font-black text-cyan-400">
                  {number}
                </div>

                <h3 className="mt-5 font-bold">{title}</h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-5xl px-6 py-24 text-center lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 px-6 py-16 sm:px-12">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-400/10">
            <GraduationCap className="h-7 w-7 text-cyan-400" />
          </div>

          <h2 className="mt-7 text-4xl font-black sm:text-5xl">
            Start Learning Today
          </h2>

          <p className="mx-auto mt-5 max-w-xl leading-7 text-slate-400">
            Build valuable skills, track your progress and use AI to make your
            learning journey smarter.
          </p>

          <a
            href="/register"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-7 py-4 font-bold text-slate-950 transition hover:bg-cyan-400"
          >
            Create Your Account
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-8 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-400/10">
              <GraduationCap className="h-5 w-5 text-cyan-400" />
            </div>

            <span className="font-bold">
              LearnHub<span className="text-cyan-400"> AI</span>
            </span>
          </div>

          <p className="text-sm text-slate-500">
            © 2026 LearnHub AI. Intelligent learning for everyone.
          </p>

          <div className="flex gap-5 text-sm text-slate-500">
            <span className="cursor-pointer hover:text-white">Privacy</span>
            <span className="cursor-pointer hover:text-white">Terms</span>
            <span className="cursor-pointer hover:text-white">Contact</span>
          </div>
        </div>
      </footer>
    </main>
  );
}