"use client";

import {
  Trophy,
  Award,
  Star,
  Flame,
  BookOpen,
  Target,
  CheckCircle2,
  Medal,
  Crown,
  Lock,
} from "lucide-react";

const achievements = [
  {
    title: "First Step",
    description: "Complete your first lesson",
    icon: <BookOpen size={26} />,
    unlocked: true,
    date: "Aug 10, 2026",
  },
  {
    title: "Quiz Master",
    description: "Complete 5 quizzes",
    icon: <Target size={26} />,
    unlocked: true,
    date: "Aug 14, 2026",
  },
  {
    title: "Perfect Score",
    description: "Score 100% in a quiz",
    icon: <Star size={26} />,
    unlocked: true,
    date: "Aug 17, 2026",
  },
  {
    title: "Learning Streak",
    description: "Maintain a 7 day learning streak",
    icon: <Flame size={26} />,
    unlocked: true,
    date: "Aug 20, 2026",
  },
  {
    title: "Course Champion",
    description: "Complete your first course",
    icon: <Trophy size={26} />,
    unlocked: false,
    date: null,
  },
  {
    title: "Knowledge Seeker",
    description: "Complete 100 lessons",
    icon: <Medal size={26} />,
    unlocked: false,
    date: null,
  },
  {
    title: "Dedicated Learner",
    description: "Study for 50 hours",
    icon: <Award size={26} />,
    unlocked: false,
    date: null,
  },
  {
    title: "Learning Legend",
    description: "Earn 10 achievements",
    icon: <Crown size={26} />,
    unlocked: false,
    date: null,
  },
];

export default function AchievementsPage() {
  return (
    <main className="min-h-screen bg-[#020617] text-white">

      {/* =====================================================
          HEADER
      ===================================================== */}

      <header className="border-b border-white/10 bg-[#020617] px-6 py-6 lg:px-10">

        <div className="flex items-center gap-4">

          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400/10">
            <Trophy
              size={25}
              className="text-cyan-400"
            />
          </div>

          <div>

            <h1 className="text-2xl font-bold">
              Achievements
            </h1>

            <p className="mt-1 text-sm text-slate-500">
              Celebrate your learning milestones and achievements
            </p>

          </div>

        </div>

      </header>


      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="px-6 py-8 lg:px-10">

        {/* ===================================================
            ACHIEVEMENT SUMMARY
        =================================================== */}

        <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">

          <StatCard
            icon={<Trophy size={20} />}
            value="4"
            title="Achievements Earned"
            subtitle="Keep going!"
          />

          <StatCard
            icon={<Target size={20} />}
            value="50%"
            title="Completion Rate"
            subtitle="4 of 8 unlocked"
          />

          <StatCard
            icon={<Flame size={20} />}
            value="7"
            title="Current Streak"
            subtitle="days"
          />

          <StatCard
            icon={<Star size={20} />}
            value="890"
            title="Total XP"
            subtitle="+120 this week"
          />

        </section>


        {/* ===================================================
            LEVEL CARD
        =================================================== */}

        <section className="mt-8 overflow-hidden rounded-2xl border border-cyan-400/10 bg-gradient-to-r from-cyan-400/[0.08] via-blue-500/[0.04] to-transparent p-6">

          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

            <div className="flex items-center gap-4">

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-400/10">

                <Crown
                  size={30}
                  className="text-cyan-400"
                />

              </div>

              <div>

                <p className="text-xs text-slate-500">
                  Current Level
                </p>

                <h2 className="mt-1 text-2xl font-bold">
                  Level 8 — Learner
                </h2>

                <p className="mt-1 text-xs text-slate-500">
                  890 / 1000 XP
                </p>

              </div>

            </div>


            <div className="w-full md:w-80">

              <div className="mb-2 flex justify-between text-[10px]">

                <span className="text-slate-500">
                  Next level
                </span>

                <span className="font-semibold text-cyan-400">
                  89%
                </span>

              </div>

              <div className="h-2 overflow-hidden rounded-full bg-slate-800">

                <div
                  className="h-full rounded-full bg-cyan-400"
                  style={{
                    width: "89%",
                  }}
                />

              </div>

              <p className="mt-2 text-[9px] text-slate-600">
                110 XP needed to reach Level 9
              </p>

            </div>

          </div>

        </section>


        {/* ===================================================
            ACHIEVEMENTS
        =================================================== */}

        <section className="mt-8">

          <div className="mb-5">

            <h2 className="text-xl font-bold">
              Your Achievements
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Unlock achievements by completing learning goals
            </p>

          </div>


          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

            {achievements.map((achievement) => (

              <AchievementCard
                key={achievement.title}
                {...achievement}
              />

            ))}

          </div>

        </section>


        {/* ===================================================
            RECENT ACHIEVEMENT
        =================================================== */}

        <section className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-6">

          <div className="flex items-center gap-4">

            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-400/10">

              <Star
                size={23}
                className="fill-yellow-400 text-yellow-400"
              />

            </div>

            <div>

              <p className="text-xs text-slate-500">
                Most Recent Achievement
              </p>

              <h3 className="mt-1 font-bold">
                Learning Streak 🔥
              </h3>

              <p className="mt-1 text-xs text-slate-600">
                You maintained a 7 day learning streak.
              </p>

            </div>

          </div>

        </section>


        {/* ===================================================
            BACK BUTTON
        =================================================== */}

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


/* =========================================================
   ACHIEVEMENT CARD
========================================================= */

function AchievementCard({
  title,
  description,
  icon,
  unlocked,
  date,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  unlocked: boolean;
  date: string | null;
}) {
  return (
    <div
      className={`relative rounded-2xl border p-6 transition ${
        unlocked
          ? "border-cyan-400/20 bg-white/[0.03] hover:border-cyan-400/40"
          : "border-white/5 bg-white/[0.015] opacity-60"
      }`}
    >

      {/* ICON */}

      <div
        className={`flex h-14 w-14 items-center justify-center rounded-2xl ${
          unlocked
            ? "bg-cyan-400/10 text-cyan-400"
            : "bg-slate-800 text-slate-600"
        }`}
      >
        {unlocked ? icon : <Lock size={24} />}
      </div>


      {/* TITLE */}

      <h3 className="mt-5 font-bold">
        {title}
      </h3>


      {/* DESCRIPTION */}

      <p className="mt-2 min-h-[40px] text-xs leading-5 text-slate-500">
        {description}
      </p>


      {/* STATUS */}

      <div className="mt-5">

        {unlocked ? (

          <div>

            <div className="flex items-center gap-2">

              <CheckCircle2
                size={14}
                className="text-emerald-400"
              />

              <span className="text-[10px] font-semibold text-emerald-400">
                Unlocked
              </span>

            </div>

            {date && (
              <p className="mt-1 text-[9px] text-slate-600">
                {date}
              </p>
            )}

          </div>

        ) : (

          <div className="flex items-center gap-2">

            <Lock
              size={13}
              className="text-slate-600"
            />

            <span className="text-[10px] text-slate-600">
              Locked
            </span>

          </div>

        )}

      </div>

    </div>
  );
}