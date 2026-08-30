"use client";
import Link from "next/link";
import {
  LayoutDashboard,
  BookOpen,
  Compass,
  ClipboardList,
  FileQuestion,
  BarChart3,
  Trophy,
  Bot,
  Settings,
  Bell,
  Clock,
  Award,
  TrendingUp,
  PlayCircle,
  ChevronRight,
  LogOut,
} from "lucide-react";

/* =========================================================
   DASHBOARD PAGE
========================================================= */

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-[#020617] text-white">

      {/* =====================================================
          SIDEBAR
      ===================================================== */}

      <aside className="fixed left-0 top-0 z-50 flex h-screen w-60 flex-col border-r border-white/10 bg-[#06101f]">

        {/* LOGO */}

        <div className="border-b border-white/10 px-5 py-5">

          <Link
            href="/dashboard"
            className="flex items-center gap-3"
          >

            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-400 text-slate-950">
              <BookOpen size={20} />
            </div>

            <div>
              <h1 className="text-sm font-bold text-white">
                LearnHub AI
              </h1>

              <p className="text-[9px] uppercase tracking-wider text-slate-500">
                Learn • Practice • Grow
              </p>
            </div>

          </Link>

        </div>


        {/* NAVIGATION */}

        <nav className="flex-1 overflow-y-auto px-3 py-6">

          {/* MAIN MENU */}

          <p className="mb-3 px-3 text-[9px] font-semibold uppercase tracking-widest text-slate-600">
            Main Menu
          </p>

          <div className="space-y-1">

            {/* DASHBOARD */}

            <SidebarItem
              icon={<LayoutDashboard size={17} />}
              label="Dashboard"
              active
              href="/dashboard"
            />

            {/* MY COURSES */}

            <SidebarItem
              icon={<BookOpen size={17} />}
              label="My Courses"
              href="/courses"
            />

           

            

            {/* ASSIGNMENTS */}

            <SidebarItem
              icon={<ClipboardList size={17} />}
              label="Assignments"
              href="/assignments"
            />

            {/* QUIZZES */}

            <SidebarItem
              icon={<FileQuestion size={17} />}
              label="Quizzes"
              href="/quizzes"
            />

            {/* PROGRESS */}

            <SidebarItem
              icon={<BarChart3 size={17} />}
              label="Progress"
              href="/progress"
            />

            {/* ACHIEVEMENTS */}

            <SidebarItem
              icon={<Trophy size={17} />}
              label="Achievements"
              href="/achievements"
            />

          </div>


          {/* AI LEARNING */}

          <p className="mb-3 mt-8 px-3 text-[9px] font-semibold uppercase tracking-widest text-slate-600">
            AI Learning
          </p>

          <SidebarItem
            icon={<Bot size={17} />}
            label="AI Study Assistant"
            ai
            href="/ai-assistant"
          />


          {/* ACCOUNT */}

          <p className="mb-3 mt-8 px-3 text-[9px] font-semibold uppercase tracking-widest text-slate-600">
            Account
          </p>

          <SidebarItem
            icon={<Settings size={17} />}
            label="Settings"
            href="/settings"
          />

        </nav>


        {/* USER PROFILE */}

        <div className="border-t border-white/10 p-3">

          <div className="flex items-center gap-3 rounded-xl bg-white/[0.03] p-3">

            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-400 text-xs font-bold text-slate-950">
              J
            </div>

            <div className="min-w-0 flex-1">

              <p className="truncate text-xs font-semibold text-white">
                Jeyabharathi
              </p>

              <p className="text-[9px] text-slate-500">
                Student
              </p>

            </div>

          </div>


          <button
            type="button"
            className="mt-2 flex w-full items-center gap-2 px-3 py-2 text-xs text-slate-500 transition hover:text-red-400"
          >
            <LogOut size={14} />
            Logout
          </button>

        </div>

      </aside>


      {/* =====================================================
          MAIN AREA
      ===================================================== */}

      <div className="ml-60 min-h-screen">

        {/* ===================================================
            TOP BAR
        =================================================== */}

        <header className="sticky top-0 z-40 flex h-16 items-center justify-between border-b border-white/10 bg-[#020617]/95 px-6 backdrop-blur">

          {/* SEARCH */}

          <div className="relative w-72">

            <input
              type="text"
              placeholder="Search courses, lessons..."
              className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-xs text-white outline-none placeholder:text-slate-600 focus:border-cyan-400/40"
            />

          </div>


          {/* RIGHT SIDE */}

          <div className="flex items-center gap-4">

            {/* NOTIFICATION */}

            <button
              type="button"
              className="relative flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 text-slate-400 transition hover:text-cyan-400"
            >

              <Bell size={17} />

              <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-cyan-400" />

            </button>


            {/* USER */}

            <div className="flex items-center gap-2">

              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-400 text-xs font-bold text-slate-950">
                J
              </div>

              <div className="hidden md:block">

                <p className="text-[10px] font-semibold">
                  Jeyabharathi
                </p>

                <p className="text-[8px] text-slate-500">
                  Student
                </p>

              </div>

            </div>

          </div>

        </header>


        {/* ===================================================
            DASHBOARD CONTENT
        =================================================== */}

        <main className="p-6 lg:p-8">

          {/* WELCOME BANNER */}

          <section className="relative overflow-hidden rounded-2xl border border-cyan-400/10 bg-gradient-to-r from-cyan-400/10 via-blue-500/5 to-transparent p-7">

            <div className="relative z-10">

              <div className="mb-2 flex items-center gap-2 text-[10px] text-cyan-400">
                <TrendingUp size={13} />
                Keep your learning streak going!
              </div>

              <h1 className="text-2xl font-bold md:text-3xl">
                Welcome back, Jeyabharathi! 👋
              </h1>

              <p className="mt-2 max-w-xl text-xs leading-5 text-slate-400">
                Continue your learning journey and achieve your goals.
                You are making great progress this week.
              </p>


              {/* BUTTONS */}

              <div className="mt-5 flex gap-3">

                <a
                  href="/courses"
                  className="rounded-lg bg-cyan-400 px-5 py-2.5 text-[11px] font-bold text-slate-950 transition hover:bg-cyan-300"
                >
                  Continue Learning
                </a>

                <a
                  href="/courses"
                  className="rounded-lg border border-white/10 bg-white/[0.03] px-5 py-2.5 text-[11px] font-semibold text-slate-300 transition hover:bg-white/10 hover:text-white"
                >
                  Explore Courses
                </a>

              </div>

            </div>

          </section>


          {/* =================================================
              STATISTICS
          ================================================= */}

          <section className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-4">

            <StatCard
              icon={<BookOpen size={18} />}
              value="6"
              title="Enrolled Courses"
              subtitle="+2 this month"
            />

            <StatCard
              icon={<CheckCircleIcon />}
              value="2"
              title="Completed Courses"
              subtitle="Keep going!"
            />

            <StatCard
              icon={<Clock size={18} />}
              value="48h"
              title="Learning Hours"
              subtitle="+6h this week"
            />

            <StatCard
              icon={<Award size={18} />}
              value="3"
              title="Certificates"
              subtitle="Great achievement!"
            />

          </section>


          {/* =================================================
              LOWER CONTENT
          ================================================= */}

          <div className="mt-6 grid gap-6 xl:grid-cols-[1.5fr_0.8fr]">

            {/* =================================================
                CONTINUE LEARNING
            ================================================= */}

            <section>

              <div className="mb-4 flex items-center justify-between">

                <div>

                  <h2 className="text-base font-bold">
                    Continue Learning
                  </h2>

                  <p className="mt-1 text-[10px] text-slate-500">
                    Pick up where you left off
                  </p>

                </div>

                <a
                  href="/courses"
                  className="text-[10px] font-semibold text-cyan-400 hover:text-cyan-300"
                >
                  View all →
                </a>

              </div>


              {/* COURSE CARDS */}

              <div className="grid gap-4 md:grid-cols-2">

                <CourseCard
                  title="React & TypeScript"
                  instructor="John Mathew"
                  progress={78}
                  lessons="18 / 24 lessons"
                  level="Intermediate"
                />

                <CourseCard
                  title="Java Spring Boot"
                  instructor="David Wilson"
                  progress={52}
                  lessons="13 / 25 lessons"
                  level="Intermediate"
                />

                <CourseCard
                  title="Database Management"
                  instructor="Sarah Thomas"
                  progress={65}
                  lessons="16 / 24 lessons"
                  level="Beginner"
                />

                <CourseCard
                  title="UI/UX Design"
                  instructor="Emily Johnson"
                  progress={35}
                  lessons="7 / 20 lessons"
                  level="Beginner"
                />

              </div>

            </section>


            {/* =================================================
                WEEKLY ACTIVITY
            ================================================= */}

            <section className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">

              <div className="flex items-center justify-between">

                <div>

                  <h2 className="text-base font-bold">
                    Weekly Activity
                  </h2>

                  <p className="mt-1 text-[10px] text-slate-500">
                    Your learning activity
                  </p>

                </div>

                <BarChart3
                  size={17}
                  className="text-cyan-400"
                />

              </div>


              {/* SIMPLE BAR CHART */}

              <div className="mt-8 flex h-36 items-end justify-between gap-3">

                <ActivityBar day="Mon" height="55%" />
                <ActivityBar day="Tue" height="75%" />
                <ActivityBar day="Wed" height="42%" />
                <ActivityBar day="Thu" height="88%" />
                <ActivityBar day="Fri" height="62%" />
                <ActivityBar day="Sat" height="80%" />
                <ActivityBar day="Sun" height="30%" />

              </div>


              <div className="mt-5 border-t border-white/10 pt-4">

                <p className="text-[9px] text-slate-500">
                  This week
                </p>

                <div className="mt-1 flex items-center justify-between">

                  <p className="text-xl font-bold">
                    8.5 hours
                  </p>

                  <span className="rounded-md bg-emerald-400/10 px-2 py-1 text-[9px] font-semibold text-emerald-400">
                    +15%
                  </span>

                </div>

              </div>

            </section>

          </div>


          {/* =================================================
              QUICK ACTIONS
          ================================================= */}

          <section className="mt-7">

            <h2 className="text-base font-bold">
              Quick Actions
            </h2>

            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

              <QuickAction
                icon={<BookOpen size={20} />}
                title="My Courses"
                description="View your enrolled courses"
                href="/courses"
              />

              <QuickAction
                icon={<ClipboardList size={20} />}
                title="Assignments"
                description="Check your pending work"
                href="/assignments"
              />

              <QuickAction
                icon={<FileQuestion size={20} />}
                title="Take a Quiz"
                description="Test your knowledge"
                href="/quizzes"
              />

              <QuickAction
                icon={<Bot size={20} />}
                title="AI Assistant"
                description="Get help with learning"
                href="/ai-assistant"
              />

            </div>

          </section>

        </main>

      </div>

    </div>
  );
}


/* =========================================================
   SIDEBAR ITEM
========================================================= */

function SidebarItem({
  icon,
  label,
  active = false,
  ai = false,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  ai?: boolean;
  href?: string;
}) {

  const className = `
    flex
    w-full
    items-center
    gap-3
    rounded-lg
    px-3
    py-2.5
    text-xs
    transition
    cursor-pointer
    ${
      active
        ? "bg-cyan-400/10 font-semibold text-cyan-400"
        : "text-slate-400 hover:bg-white/[0.04] hover:text-white"
    }
  `;


  const content = (
    <>
      <span
        className={
          active || ai
            ? "text-cyan-400"
            : "text-slate-500"
        }
      >
        {icon}
      </span>

      <span>{label}</span>

      {ai && (
        <span className="ml-auto rounded-full bg-cyan-400/10 px-2 py-0.5 text-[8px] font-bold text-cyan-400">
          AI
        </span>
      )}
    </>
  );


  /*
    IMPORTANT:
    Normal <a> navigation is being used.
    This is what made your My Courses navigation work.
  */

  if (href) {

    return (
      <a
        href={href}
        className={className}
      >
        {content}
      </a>
    );

  }


  return (
    <button
      type="button"
      className={className}
    >
      {content}
    </button>
  );
}


/* =========================================================
   STAT CARD
========================================================= */

function StatCard({
  icon,
  value,
  title,
  subtitle,
}: {
  icon: React.ReactNode;
  value: string;
  title: string;
  subtitle: string;
}) {

  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5 transition hover:border-cyan-400/20">

      <div className="flex items-center justify-between">

        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-400/10 text-cyan-400">
          {icon}
        </div>

        <span className="text-[9px] text-emerald-400">
          ↗
        </span>

      </div>

      <p className="mt-4 text-2xl font-bold">
        {value}
      </p>

      <p className="mt-1 text-[11px] font-medium text-slate-400">
        {title}
      </p>

      <p className="mt-1 text-[9px] text-slate-600">
        {subtitle}
      </p>

    </div>
  );
}


/* =========================================================
   COURSE CARD
========================================================= */

function CourseCard({
  title,
  instructor,
  progress,
  lessons,
  level,
}: {
  title: string;
  instructor: string;
  progress: number;
  lessons: string;
  level: string;
}) {

  return (
    <div className="overflow-hidden rounded-xl border border-white/10 bg-white/[0.02] transition hover:border-cyan-400/20">

      {/* TOP */}

      <div className="flex h-24 items-center justify-center bg-gradient-to-br from-cyan-500/10 to-blue-500/5">

        <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/20 bg-[#020617]/60 text-cyan-400">

          <BookOpen size={21} />

        </div>

        <span className="absolute ml-56 mt-[-70px] rounded-full border border-white/10 bg-black/20 px-2 py-1 text-[8px] text-slate-400">
          {level}
        </span>

      </div>


      {/* CONTENT */}

      <div className="p-4">

        <h3 className="text-sm font-bold">
          {title}
        </h3>

        <p className="mt-1 text-[9px] text-slate-500">
          Instructor: {instructor}
        </p>


        {/* PROGRESS */}

        <div className="mt-4">

          <div className="flex justify-between text-[9px]">

            <span className="text-slate-600">
              Progress
            </span>

            <span className="font-semibold text-cyan-400">
              {progress}%
            </span>

          </div>


          <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-slate-800">

            <div
              className="h-full rounded-full bg-cyan-400"
              style={{
                width: `${progress}%`,
              }}
            />

          </div>

        </div>


        {/* BOTTOM */}

        <div className="mt-3 flex items-center justify-between">

          <span className="text-[9px] text-slate-600">
            {lessons}
          </span>

          <a
            href="/courses"
            className="flex items-center gap-1 text-[9px] font-semibold text-cyan-400"
          >
            <PlayCircle size={12} />
            Continue
          </a>

        </div>

      </div>

    </div>
  );
}


/* =========================================================
   ACTIVITY BAR
========================================================= */

function ActivityBar({
  day,
  height,
}: {
  day: string;
  height: string;
}) {

  return (
    <div className="flex h-full flex-1 flex-col items-center justify-end gap-2">

      <div
        className="w-full max-w-5 rounded-t-md bg-cyan-400/80"
        style={{
          height,
        }}
      />

      <span className="text-[8px] text-slate-600">
        {day}
      </span>

    </div>
  );
}


/* =========================================================
   QUICK ACTION
========================================================= */

function QuickAction({
  icon,
  title,
  description,
  href,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
}) {

  return (
    <a
      href={href}
      className="group rounded-xl border border-white/10 bg-white/[0.02] p-4 transition hover:border-cyan-400/30 hover:bg-cyan-400/[0.03]"
    >

      <div className="flex items-center gap-3">

        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-400/10 text-cyan-400 transition group-hover:bg-cyan-400/20">
          {icon}
        </div>

        <div className="flex-1">

          <h3 className="text-xs font-bold">
            {title}
          </h3>

          <p className="mt-1 text-[9px] text-slate-600">
            {description}
          </p>

        </div>

        <ChevronRight
          size={15}
          className="text-slate-600 transition group-hover:text-cyan-400"
        />

      </div>

    </a>
  );
}


/* =========================================================
   CHECK ICON
========================================================= */

function CheckCircleIcon() {

  return (
    <div className="flex h-5 w-5 items-center justify-center rounded-full border-2 border-cyan-400">
      <div className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
    </div>
  );
}