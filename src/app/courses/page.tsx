"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import type { ReactNode } from "react";

import {
  Bell,
  BookOpen,
  CheckCircle2,
  ChevronRight,
  Clock3,
  Code2,
  Database,
  Filter,
  GraduationCap,
  Heart,
  LayoutDashboard,
  Menu,
  PlayCircle,
  Search,
  Settings,
  Star,
  Target,
  Trophy,
  Users,
  X,
} from "lucide-react";

type Course = {
  id: number;
  title: string;
  description: string;
  image: string;
  instructor: string;
  category: string;
  level: string;
  duration: string;
  lessons: number;
  students: string;
  rating: number;
  progress: number;
  color: string;
  icon: ReactNode;
  enrolled: boolean;
};

const courses: Course[] = [
  {
    id: 1,
    title: "React & TypeScript",
    description:
      "Build modern and scalable web applications using React, TypeScript and reusable components.",
    image: "/courses/react.jpeg",
    instructor: "John Mathews",
    category: "Web Development",
    level: "Intermediate",
    duration: "18h 30m",
    lessons: 42,
    students: "12.4K",
    rating: 4.9,
    progress: 78,
    color: "from-cyan-500/20 to-blue-600/20",
    icon: <Code2 size={30} />,
    enrolled: true,
  },

  {
    id: 2,
    title: "Java Spring Boot",
    description:
      "Learn REST APIs, Spring Boot architecture, database integration and backend development.",
    image: "/courses/springboot.jpeg",
    instructor: "David Wilson",
    category: "Backend Development",
    level: "Intermediate",
    duration: "22h 15m",
    lessons: 52,
    students: "9.8K",
    rating: 4.8,
    progress: 52,
    color: "from-green-500/20 to-emerald-600/20",
    icon: <Database size={30} />,
    enrolled: true,
  },

  {
    id: 3,
    title: "Database Management",
    description:
      "Master SQL, database design, relationships, queries and MySQL database management.",
    image: "/courses/mysql.jpeg",
    instructor: "Sarah Thomas",
    category: "Database",
    level: "Beginner",
    duration: "14h 20m",
    lessons: 36,
    students: "15.2K",
    rating: 4.7,
    progress: 65,
    color: "from-purple-500/20 to-indigo-600/20",
    icon: <Database size={30} />,
    enrolled: true,
  },

  {
    id: 4,
    title: "UI/UX Design",
    description:
      "Create beautiful user interfaces and learn practical UX principles for modern products.",
    image: "/courses/uiux.jpeg",
    instructor: "Emily Johnson",
    category: "Design",
    level: "Beginner",
    duration: "10h 45m",
    lessons: 28,
    students: "8.7K",
    rating: 4.8,
    progress: 35,
    color: "from-pink-500/20 to-rose-600/20",
    icon: <Target size={30} />,
    enrolled: true,
  },

  {
    id: 5,
    title: "Python Programming",
    description:
      "Start programming with Python and learn variables, functions, OOP, files and projects.",
    image: "/courses/python.jpg",
    instructor: "Michael Brown",
    category: "Programming",
    level: "Beginner",
    duration: "16h 40m",
    lessons: 40,
    students: "21.3K",
    rating: 4.9,
    progress: 0,
    color: "from-yellow-500/20 to-orange-600/20",
    icon: <Code2 size={30} />,
    enrolled: false,
  },

  {
    id: 6,
    title: "Data Structures & Algorithms",
    description:
      "Prepare for coding interviews with arrays, strings, linked lists, trees, graphs and algorithms.",
    image: "/courses/datastructure.jpg",
    instructor: "Alex Martin",
    category: "Programming",
    level: "Advanced",
    duration: "25h 10m",
    lessons: 65,
    students: "18.9K",
    rating: 4.9,
    progress: 0,
    color: "from-blue-500/20 to-violet-600/20",
    icon: <Trophy size={30} />,
    enrolled: false,
  },

  {
    id: 7,
    title: "Artificial Intelligence",
    description:
      "Understand AI concepts, machine learning fundamentals and practical intelligent applications.",
    image: "/courses/ai.jpeg",
    instructor: "Dr. Robert Lee",
    category: "AI & Machine Learning",
    level: "Intermediate",
    duration: "20h 30m",
    lessons: 48,
    students: "14.6K",
    rating: 4.8,
    progress: 0,
    color: "from-fuchsia-500/20 to-purple-600/20",
    icon: <GraduationCap size={30} />,
    enrolled: false,
  },

  {
    id: 8,
    title: "Cloud Computing",
    description:
      "Learn cloud concepts, deployment, virtual machines, containers and cloud architecture.",
    image: "/courses/fullstack.jpg",
    instructor: "Daniel Smith",
    category: "Cloud",
    level: "Intermediate",
    duration: "17h 50m",
    lessons: 38,
    students: "11.2K",
    rating: 4.7,
    progress: 0,
    color: "from-sky-500/20 to-cyan-600/20",
    icon: <Users size={30} />,
    enrolled: false,
  },
];

const categories = [
  "All Courses",
  "Web Development",
  "Backend Development",
  "Programming",
  "Database",
  "Design",
  "AI & Machine Learning",
  "Cloud",
];

export default function CoursesPage() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] =
    useState("All Courses");

  const [selectedLevel, setSelectedLevel] =
    useState("All Levels");

  const [showFilters, setShowFilters] = useState(false);

  const [favorites, setFavorites] = useState<number[]>([]);

  const [mobileMenu, setMobileMenu] = useState(false);

  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const searchText = search.toLowerCase();

      const matchesSearch =
        course.title.toLowerCase().includes(searchText) ||
        course.description.toLowerCase().includes(searchText) ||
        course.instructor.toLowerCase().includes(searchText);

      const matchesCategory =
        selectedCategory === "All Courses" ||
        course.category === selectedCategory;

      const matchesLevel =
        selectedLevel === "All Levels" ||
        course.level === selectedLevel;

      return (
        matchesSearch &&
        matchesCategory &&
        matchesLevel
      );
    });
  }, [search, selectedCategory, selectedLevel]);

  const toggleFavorite = (id: number) => {
    setFavorites((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    );
  };

  const resetFilters = () => {
    setSearch("");
    setSelectedCategory("All Courses");
    setSelectedLevel("All Levels");
  };

  return (
    <main className="min-h-screen bg-[#020617] text-white">

      {/* Mobile Overlay */}
      {mobileMenu && (
        <div
          className="fixed inset-0 z-40 bg-black/60 lg:hidden"
          onClick={() => setMobileMenu(false)}
        />
      )}

      {/* ================= SIDEBAR ================= */}
      <aside
        className={`fixed left-0 top-0 z-50 flex h-screen w-[250px] flex-col border-r border-white/10 bg-[#050b1d] transition-transform duration-300 ${
          mobileMenu
            ? "translate-x-0"
            : "-translate-x-full lg:translate-x-0"
        }`}
      >

        {/* Logo */}
        <div className="flex h-[88px] items-center border-b border-white/10 px-6">

          <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 shadow-lg shadow-cyan-500/20">
            <GraduationCap size={22} />
          </div>

          <div>
            <h1 className="text-lg font-bold">
              Learn
              <span className="text-cyan-400">
                Hub AI
              </span>
            </h1>

            <p className="text-[8px] tracking-[2px] text-slate-500">
              LEARN • PRACTICE • GROW
            </p>
          </div>

          <button
            onClick={() => setMobileMenu(false)}
            className="ml-auto rounded-lg p-2 text-slate-400 hover:bg-white/5 lg:hidden"
          >
            <X size={20} />
          </button>
        </div>

        {/* Navigation */}
        <div className="flex-1 overflow-y-auto px-4 py-6">

          <p className="mb-3 px-3 text-[10px] font-semibold uppercase tracking-widest text-slate-600">
            Main Menu
          </p>

          <SidebarLink
            href="/dashboard"
            icon={<LayoutDashboard size={17} />}
            label="Dashboard"
          />

          <SidebarLink
            href="/courses"
            icon={<BookOpen size={17} />}
            label="My Courses"
            active
          />

          <SidebarLink
            href="/assignments"
            icon={<CheckCircle2 size={17} />}
            label="Assignments"
          />

          <SidebarLink
            href="/quizzes"
            icon={<Target size={17} />}
            label="Quizzes"
          />

          <SidebarLink
            href="/progress"
            icon={<Clock3 size={17} />}
            label="Progress"
          />

          <SidebarLink
            href="/achievements"
            icon={<Trophy size={17} />}
            label="Achievements"
          />

          <p className="mb-3 mt-8 px-3 text-[10px] font-semibold uppercase tracking-widest text-slate-600">
            AI Learning
          </p>

          <SidebarLink
            href="/ai-assistant"
            icon={<GraduationCap size={17} />}
            label="AI Study Assistant"
            ai
          />

          <p className="mb-3 mt-8 px-3 text-[10px] font-semibold uppercase tracking-widest text-slate-600">
            Account
          </p>

          <SidebarLink
            href="/settings"
            icon={<Settings size={17} />}
            label="Settings"
          />
        </div>

        {/* User */}
        <div className="border-t border-white/10 p-4">

          <div className="flex items-center gap-3 rounded-xl bg-white/[0.03] p-3">

            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-cyan-500 font-bold text-slate-950">
              J
            </div>

            <div className="min-w-0">
              <p className="truncate text-xs font-semibold">
                Jeyabharathi
              </p>

              <p className="text-[10px] text-slate-500">
                Student
              </p>
            </div>

          </div>

          <Link
            href="/login"
            className="mt-3 block px-3 text-xs text-slate-500 hover:text-white"
          >
            Logout
          </Link>

        </div>
      </aside>

      {/* ================= MAIN CONTENT ================= */}
      <section className="lg:ml-[250px]">

        {/* Header */}
        <header className="sticky top-0 z-30 flex h-[72px] items-center justify-between border-b border-white/10 bg-[#020617]/95 px-5 backdrop-blur-xl lg:px-8">

          <div className="flex items-center gap-4">

            {/* Mobile Menu */}
            <button
              onClick={() => setMobileMenu(true)}
              className="rounded-lg border border-white/10 p-2 text-slate-300 lg:hidden"
            >
              <Menu size={20} />
            </button>

            {/* Search */}
            <div className="relative hidden sm:block">

              <Search
                size={17}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600"
              />

              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search courses, lessons..."
                className="h-10 w-[300px] rounded-xl border border-white/10 bg-white/[0.03] pl-11 pr-4 text-xs text-white outline-none placeholder:text-slate-600 focus:border-cyan-500/50"
              />

            </div>

          </div>

          {/* User Header */}
          <div className="flex items-center gap-4">

            <button className="relative rounded-xl border border-white/10 p-2 text-slate-400 hover:text-white">
              <Bell size={18} />

              <span className="absolute right-1 top-1 h-1.5 w-1.5 rounded-full bg-cyan-400" />
            </button>

            <div className="flex items-center gap-2">

              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-cyan-500 font-bold text-slate-950">
                J
              </div>

              <div className="hidden md:block">

                <p className="text-xs font-semibold">
                  Jeyabharathi
                </p>

                <p className="text-[10px] text-slate-500">
                  Student
                </p>

              </div>

            </div>

          </div>
        </header>

        {/* Page */}
        <div className="px-5 py-7 lg:px-8 lg:py-9">

          {/* Page Heading */}
          <div className="mb-8">

            <div className="mb-2 flex items-center gap-2 text-xs text-cyan-400">
              <BookOpen size={14} />
              Learning Library
            </div>

            <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">

              <div>

                <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                  My Courses
                </h2>

                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
                  Learn new skills, improve your knowledge and build your
                  future with expert-led courses.
                </p>

              </div>

              <div className="flex items-center gap-2">

                <div className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">

                  <p className="text-[10px] text-slate-500">
                    Available Courses
                  </p>

                  <p className="text-lg font-bold">
                    {courses.length}+
                  </p>

                </div>

                <div className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">

                  <p className="text-[10px] text-slate-500">
                    Your Courses
                  </p>

                  <p className="text-lg font-bold">
                    {
                      courses.filter(
                        (course) => course.enrolled
                      ).length
                    }
                  </p>

                </div>

              </div>

            </div>
          </div>

          {/* Mobile Search */}
          <div className="relative mb-5 sm:hidden">

            <Search
              size={17}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600"
            />

            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search courses..."
              className="h-12 w-full rounded-xl border border-white/10 bg-white/[0.03] pl-11 pr-4 text-sm text-white outline-none placeholder:text-slate-600 focus:border-cyan-500/50"
            />

          </div>

          {/* Categories */}
          <div className="mb-7 flex flex-col gap-4">

            <div className="flex items-center gap-2 overflow-x-auto pb-2">

              {categories.map((category) => (

                <button
                  key={category}
                  onClick={() =>
                    setSelectedCategory(category)
                  }
                  className={`whitespace-nowrap rounded-xl px-4 py-2.5 text-xs font-medium transition ${
                    selectedCategory === category
                      ? "bg-cyan-400 text-slate-950"
                      : "border border-white/10 bg-white/[0.02] text-slate-400 hover:bg-white/[0.05] hover:text-white"
                  }`}
                >
                  {category}
                </button>

              ))}

            </div>

            {/* Filter Row */}
            <div className="flex items-center justify-between border-b border-white/10 pb-5">

              <p className="text-xs text-slate-500">
                Showing{" "}
                <span className="font-semibold text-white">
                  {filteredCourses.length}
                </span>{" "}
                courses
              </p>

              <button
                onClick={() =>
                  setShowFilters(!showFilters)
                }
                className="flex items-center gap-2 rounded-xl border border-white/10 px-4 py-2.5 text-xs text-slate-300 hover:bg-white/[0.04]"
              >
                <Filter size={15} />
                Filters
              </button>

            </div>

            {/* Filters */}
            {showFilters && (

              <div className="flex flex-wrap gap-3 rounded-2xl border border-white/10 bg-white/[0.02] p-4">

                <div>

                  <label className="mb-2 block text-[10px] uppercase tracking-wider text-slate-600">
                    Level
                  </label>

                  <select
                    value={selectedLevel}
                    onChange={(e) =>
                      setSelectedLevel(e.target.value)
                    }
                    className="rounded-xl border border-white/10 bg-[#0b1225] px-4 py-2.5 text-xs text-white outline-none"
                  >

                    <option>All Levels</option>
                    <option>Beginner</option>
                    <option>Intermediate</option>
                    <option>Advanced</option>

                  </select>

                </div>

                <button
                  onClick={resetFilters}
                  className="self-end rounded-xl px-4 py-2.5 text-xs text-slate-400 hover:text-white"
                >
                  Clear Filters
                </button>

              </div>

            )}

          </div>

          {/* Course Grid */}
          {filteredCourses.length > 0 ? (

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">

              {filteredCourses.map((course) => (

                <CourseCard
                  key={course.id}
                  course={course}
                  favorite={favorites.includes(course.id)}
                  onFavorite={() =>
                    toggleFavorite(course.id)
                  }
                />

              ))}

            </div>

          ) : (

            <div className="flex min-h-[350px] flex-col items-center justify-center rounded-2xl border border-dashed border-white/10 bg-white/[0.02]">

              <Search
                size={35}
                className="mb-4 text-slate-700"
              />

              <h3 className="text-lg font-semibold">
                No courses found
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                Try changing your search or filters.
              </p>

              <button
                onClick={resetFilters}
                className="mt-5 rounded-xl bg-cyan-400 px-5 py-2.5 text-xs font-semibold text-slate-950"
              >
                Reset Filters
              </button>

            </div>

          )}

          {/* CTA */}
          <div className="relative mt-10 overflow-hidden rounded-3xl border border-cyan-500/20 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 p-7 md:p-9">

            <div className="relative z-10 max-w-2xl">

              <div className="mb-3 flex items-center gap-2 text-xs font-semibold text-cyan-400">
                <GraduationCap size={16} />
                KEEP LEARNING
              </div>

              <h3 className="text-2xl font-bold">
                Build skills that move your career forward.
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                Continue your learning journey with personalized courses,
                practice exercises and AI-powered learning assistance.
              </p>

              <Link
                href="/dashboard"
                className="mt-5 inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-5 py-3 text-xs font-bold text-slate-950 transition hover:bg-cyan-300"
              >
                Continue Learning
                <ChevronRight size={16} />
              </Link>

            </div>

            <div className="absolute -right-10 -top-20 h-60 w-60 rounded-full bg-cyan-500/10 blur-3xl" />

            <div className="absolute -bottom-20 right-40 h-40 w-40 rounded-full bg-purple-500/10 blur-3xl" />

          </div>

          {/* Footer */}
          <footer className="py-8 text-center text-[10px] text-slate-600">
            © 2026 LearnHub AI • Learn • Practice • Grow
          </footer>

        </div>
      </section>
    </main>
  );
}


/* =====================================================
   SIDEBAR LINK
===================================================== */

function SidebarLink({
  href,
  icon,
  label,
  active = false,
  ai = false,
}: {
  href: string;
  icon: ReactNode;
  label: string;
  active?: boolean;
  ai?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`group mb-1 flex items-center gap-3 rounded-xl px-3 py-3 text-xs transition ${
        active
          ? "bg-cyan-400/10 font-semibold text-cyan-400"
          : "text-slate-400 hover:bg-white/[0.04] hover:text-white"
      }`}
    >

      <span
        className={
          active || ai
            ? "text-cyan-400"
            : "text-slate-500 group-hover:text-cyan-400"
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

    </Link>
  );
}


/* =====================================================
   COURSE CARD
===================================================== */

function CourseCard({
  course,
  favorite,
  onFavorite,
}: {
  course: Course;
  favorite: boolean;
  onFavorite: () => void;
}) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-white/10 bg-[#080e20] transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:shadow-2xl hover:shadow-cyan-500/5">

      {/* Image */}
      <div className="relative h-40 w-full overflow-hidden bg-slate-900">

        <Image
          src={course.image}
          alt={course.title}
          fill
          priority={course.id <= 3}
          className="object-cover transition duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

        {/* Level */}
        <span className="absolute right-4 top-4 rounded-full border border-white/10 bg-black/50 px-2.5 py-1 text-[9px] font-medium text-white backdrop-blur">
          {course.level}
        </span>

        {/* Favorite */}
        <button
          type="button"
          onClick={onFavorite}
          aria-label={
            favorite
              ? `Remove ${course.title} from favorites`
              : `Add ${course.title} to favorites`
          }
          className="absolute left-4 top-4 flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-black/50 backdrop-blur transition hover:bg-black/70"
        >
          <Heart
            size={15}
            className={
              favorite
                ? "fill-red-400 text-red-400"
                : "text-white"
            }
          />
        </button>

        {/* Icon */}
        <div className="absolute bottom-4 left-4 flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-black/40 text-cyan-400 backdrop-blur">
          {course.icon}
        </div>

      </div>

      {/* Content */}
      <div className="p-5">

        {/* Category */}
        <p className="mb-2 text-[9px] font-semibold uppercase tracking-wider text-cyan-400">
          {course.category}
        </p>

        {/* Title */}
        <h3 className="text-lg font-bold leading-6 transition group-hover:text-cyan-400">
          {course.title}
        </h3>

        {/* Description */}
        <p className="mt-2 line-clamp-2 text-xs leading-5 text-slate-500">
          {course.description}
        </p>

        {/* Instructor */}
        <div className="mt-4 flex items-center gap-2">

          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-800 text-[9px] font-bold text-cyan-400">
            {course.instructor
              .split(" ")
              .map((word) => word[0])
              .join("")
              .slice(0, 2)}
          </div>

          <div>

            <p className="text-[10px] text-slate-500">
              Instructor
            </p>

            <p className="text-xs font-medium text-slate-300">
              {course.instructor}
            </p>

          </div>

        </div>

        {/* Stats */}
        <div className="mt-4 flex items-center gap-4 border-y border-white/5 py-3">

          <div className="flex items-center gap-1.5 text-[10px] text-slate-500">
            <Clock3 size={13} />
            {course.duration}
          </div>

          <div className="flex items-center gap-1.5 text-[10px] text-slate-500">
            <PlayCircle size={13} />
            {course.lessons} lessons
          </div>

        </div>

        {/* Rating */}
        <div className="mt-4 flex items-center justify-between">

          <div className="flex items-center gap-1.5">

            <Star
              size={14}
              className="fill-yellow-400 text-yellow-400"
            />

            <span className="text-xs font-semibold">
              {course.rating}
            </span>

            <span className="text-[10px] text-slate-600">
              ({course.students})
            </span>

          </div>

          {course.enrolled && (
            <span className="flex items-center gap-1 text-[9px] font-medium text-emerald-400">
              <CheckCircle2 size={12} />
              Enrolled
            </span>
          )}

        </div>

        {/* Progress */}
        {course.enrolled &&
          course.progress > 0 && (

            <div className="mt-4">

              <div className="mb-2 flex items-center justify-between">

                <span className="text-[9px] text-slate-500">
                  Your progress
                </span>

                <span className="text-[9px] font-semibold text-cyan-400">
                  {course.progress}%
                </span>

              </div>

              <div className="h-1.5 overflow-hidden rounded-full bg-slate-800">

                <div
                  className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
                  style={{
                    width: `${course.progress}%`,
                  }}
                />

              </div>

            </div>

          )}

        {/* Button */}
        <Link
          href={`/courses/${course.id}`}
          className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-400 px-4 py-3 text-xs font-bold text-slate-950 transition hover:bg-cyan-300"
        >
          {course.enrolled
            ? "Continue Learning"
            : "Start Learning"}

          <ChevronRight size={15} />
        </Link>

      </div>
    </div>
  );
}