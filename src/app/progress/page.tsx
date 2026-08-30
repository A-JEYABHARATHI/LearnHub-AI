"use client";

import {
  BarChart3,
  TrendingUp,
  Clock,
  BookOpen,
  Target,
  CheckCircle2,
  CalendarDays,
  Award,
} from "lucide-react";

const weeklyData = [
  { day: "Mon", hours: 1.2 },
  { day: "Tue", hours: 2.1 },
  { day: "Wed", hours: 1.5 },
  { day: "Thu", hours: 2.8 },
  { day: "Fri", hours: 1.9 },
  { day: "Sat", hours: 3.2 },
  { day: "Sun", hours: 1.4 },
];

const courses = [
  {
    name: "React & TypeScript",
    progress: 78,
    lessons: "18 / 24",
  },
  {
    name: "Java Spring Boot",
    progress: 52,
    lessons: "13 / 25",
  },
  {
    name: "Database Management",
    progress: 65,
    lessons: "16 / 24",
  },
  {
    name: "UI/UX Design",
    progress: 35,
    lessons: "7 / 20",
  },
];

export default function ProgressPage() {
  return (
    <main className="min-h-screen bg-[#020617] text-white">

      {/* HEADER */}

      <header className="border-b border-white/10 px-6 py-6 lg:px-10">

        <div className="flex items-center gap-4">

          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400/10">
            <BarChart3
              size={25}
              className="text-cyan-400"
            />
          </div>

          <div>
            <h1 className="text-2xl font-bold">
              My Progress
            </h1>

            <p className="mt-1 text-sm text-slate-500">
              Track your learning progress and achievements
            </p>
          </div>

        </div>

      </header>


      {/* CONTENT */}

      <div className="px-6 py-8 lg:px-10">

        {/* STATISTICS */}

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">

          <StatCard
            icon={<TrendingUp size={20} />}
            title="Overall Progress"
            value="68%"
            subtitle="+8% this month"
          />

          <StatCard
            icon={<Clock size={20} />}
            title="Learning Hours"
            value="48h"
            subtitle="+6h this week"
          />

          <StatCard
            icon={<BookOpen size={20} />}
            title="Lessons Completed"
            value="54"
            subtitle="Out of 93 lessons"
          />

          <StatCard
            icon={<Target size={20} />}
            title="Average Score"
            value="89%"
            subtitle="+5% improvement"
          />

        </div>


        {/* MAIN GRID */}

        <div className="mt-8 grid gap-6 xl:grid-cols-[1.5fr_0.8fr]">

          {/* WEEKLY LEARNING */}

          <section className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">

            <div className="flex items-center justify-between">

              <div>

                <h2 className="text-lg font-bold">
                  Weekly Learning Activity
                </h2>

                <p className="mt-1 text-xs text-slate-500">
                  Hours spent learning this week
                </p>

              </div>

              <CalendarDays
                size={19}
                className="text-cyan-400"
              />

            </div>


            {/* CHART */}

            <div className="mt-8 flex h-64 items-end gap-3 sm:gap-6">

              {weeklyData.map((item) => (

                <div
                  key={item.day}
                  className="flex h-full flex-1 flex-col items-center justify-end"
                >

                  <span className="mb-2 text-[10px] text-slate-500">
                    {item.hours}h
                  </span>

                  <div
                    className="w-full max-w-10 rounded-t-lg bg-cyan-400 transition hover:bg-cyan-300"
                    style={{
                      height: `${(item.hours / 3.5) * 100}%`,
                    }}
                  />

                  <span className="mt-3 text-[10px] text-slate-600">
                    {item.day}
                  </span>

                </div>

              ))}

            </div>


            {/* TOTAL */}

            <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5">

              <div>

                <p className="text-xs text-slate-500">
                  Total this week
                </p>

                <p className="mt-1 text-2xl font-bold">
                  14.1 hours
                </p>

              </div>

              <div className="rounded-xl bg-emerald-400/10 px-4 py-2">

                <p className="text-xs font-semibold text-emerald-400">
                  +15%
                </p>

                <p className="text-[9px] text-slate-500">
                  vs last week
                </p>

              </div>

            </div>

          </section>


          {/* LEARNING GOAL */}

          <section className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">

            <div className="flex items-center justify-between">

              <div>

                <h2 className="text-lg font-bold">
                  Learning Goal
                </h2>

                <p className="mt-1 text-xs text-slate-500">
                  Your weekly target
                </p>

              </div>

              <Target
                size={19}
                className="text-cyan-400"
              />

            </div>


            {/* CIRCLE */}

            <div className="mt-8 flex justify-center">

              <div className="relative flex h-44 w-44 items-center justify-center rounded-full border-[12px] border-cyan-400/10">

                <div className="absolute inset-[-12px] rounded-full border-[12px] border-transparent border-t-cyan-400 border-r-cyan-400 rotate-[25deg]" />

                <div className="text-center">

                  <p className="text-4xl font-bold">
                    71%
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    Goal completed
                  </p>

                </div>

              </div>

            </div>


            <div className="mt-7 text-center">

              <p className="text-sm font-semibold">
                14.1 / 20 hours
              </p>

              <p className="mt-1 text-xs text-slate-600">
                5.9 hours remaining this week
              </p>

            </div>

          </section>

        </div>


        {/* COURSE PROGRESS */}

        <section className="mt-8">

          <div className="mb-5">

            <h2 className="text-xl font-bold">
              Course Progress
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Track your progress across enrolled courses
            </p>

          </div>


          <div className="grid gap-4 md:grid-cols-2">

            {courses.map((course) => (

              <div
                key={course.name}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
              >

                <div className="flex items-center justify-between">

                  <div className="flex items-center gap-3">

                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10">

                      <BookOpen
                        size={18}
                        className="text-cyan-400"
                      />

                    </div>

                    <div>

                      <h3 className="text-sm font-bold">
                        {course.name}
                      </h3>

                      <p className="mt-1 text-[10px] text-slate-600">
                        {course.lessons} lessons
                      </p>

                    </div>

                  </div>

                  <span className="text-sm font-bold text-cyan-400">
                    {course.progress}%
                  </span>

                </div>


                {/* PROGRESS BAR */}

                <div className="mt-5 h-2 overflow-hidden rounded-full bg-slate-800">

                  <div
                    className="h-full rounded-full bg-cyan-400"
                    style={{
                      width: `${course.progress}%`,
                    }}
                  />

                </div>


                <div className="mt-3 flex justify-between">

                  <span className="text-[10px] text-slate-600">
                    Course completion
                  </span>

                  {course.progress >= 70 && (
                    <span className="flex items-center gap-1 text-[10px] text-emerald-400">
                      <TrendingUp size={11} />
                      On track
                    </span>
                  )}

                </div>

              </div>

            ))}

          </div>

        </section>


        {/* ACHIEVEMENT SUMMARY */}

        <section className="mt-8 rounded-2xl border border-cyan-400/10 bg-cyan-400/[0.03] p-6">

          <div className="flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">

            <div className="flex items-center gap-4">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400/10">

                <Award
                  size={23}
                  className="text-cyan-400"
                />

              </div>

              <div>

                <h2 className="font-bold">
                  Great progress, Jeyabharathi! 🎉
                </h2>

                <p className="mt-1 text-xs text-slate-500">
                  You are consistently improving your learning performance.
                </p>

              </div>

            </div>

            <a
              href="/achievements"
              className="rounded-xl bg-cyan-400 px-5 py-3 text-xs font-bold text-slate-950 hover:bg-cyan-300"
            >
              View Achievements →
            </a>

          </div>

        </section>


        {/* BACK */}

        <a
          href="/dashboard"
          className="mt-8 inline-block rounded-xl bg-white/10 px-6 py-3 text-sm font-semibold text-slate-300 transition hover:bg-white/20 hover:text-white"
        >
          ← Back to Dashboard
        </a>

      </div>

    </main>
  );
}


/* =========================================================
   STAT CARD
========================================================= */

function StatCard({
  icon,
  title,
  value,
  subtitle,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
  subtitle: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-cyan-400/20">

      <div className="flex items-center justify-between">

        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
          {icon}
        </div>

        <span className="text-xs text-emerald-400">
          ↗
        </span>

      </div>

      <p className="mt-5 text-3xl font-bold">
        {value}
      </p>

      <p className="mt-1 text-sm text-slate-400">
        {title}
      </p>

      <p className="mt-1 text-[10px] text-slate-600">
        {subtitle}
      </p>

    </div>
  );
}