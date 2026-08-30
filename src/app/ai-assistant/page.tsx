"use client";

import { useState } from "react";

import {
  Bot,
  Send,
  Sparkles,
  BookOpen,
  Lightbulb,
  Code2,
  MessageCircle,
  Trash2,
  User,
} from "lucide-react";

type Message = {
  role: "user" | "assistant";
  text: string;
};

export default function AIAssistantPage() {
  const [input, setInput] = useState("");

  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      text: "Hi Jeyabharathi! 👋 I'm your AI Study Assistant. Ask me anything about your courses, programming, assignments, or learning topics.",
    },
  ]);

  const sendMessage = () => {
    const trimmedInput = input.trim();

    if (!trimmedInput) {
      return;
    }

    const userMessage: Message = {
      role: "user",
      text: trimmedInput,
    };

    const assistantMessage: Message = {
      role: "assistant",
      text: getAIResponse(trimmedInput),
    };

    setMessages((previous) => [
      ...previous,
      userMessage,
      assistantMessage,
    ]);

    setInput("");
  };

  const clearChat = () => {
    setMessages([
      {
        role: "assistant",
        text: "Chat cleared! 👋 What would you like to learn today?",
      },
    ]);
  };

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "Enter") {
      sendMessage();
    }
  };

  const askQuestion = (question: string) => {
    setInput(question);
  };

  return (
    <main className="min-h-screen bg-[#020617] text-white">

      {/* =====================================================
          HEADER
      ===================================================== */}

      <header className="border-b border-white/10 bg-[#020617] px-6 py-5 lg:px-10">

        <div className="flex items-center justify-between">

          <div className="flex items-center gap-4">

            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400/10">

              <Bot
                size={25}
                className="text-cyan-400"
              />

            </div>

            <div>

              <div className="flex items-center gap-2">

                <h1 className="text-2xl font-bold">
                  AI Study Assistant
                </h1>

                <span className="rounded-full bg-cyan-400/10 px-2.5 py-1 text-[9px] font-bold text-cyan-400">
                  AI
                </span>

              </div>

              <p className="mt-1 text-sm text-slate-500">
                Your personal AI-powered learning companion
              </p>

            </div>

          </div>


          {/* CLEAR CHAT */}

          <button
            type="button"
            onClick={clearChat}
            className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-xs text-slate-400 transition hover:border-red-400/20 hover:text-red-400"
          >

            <Trash2 size={14} />

            Clear Chat

          </button>

        </div>

      </header>


      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="grid min-h-[calc(100vh-89px)] lg:grid-cols-[260px_1fr]">


        {/* ===================================================
            LEFT SIDEBAR
        =================================================== */}

        <aside className="hidden border-r border-white/10 bg-[#06101f] p-5 lg:block">

          <p className="text-[9px] font-semibold uppercase tracking-widest text-slate-600">
            Study Tools
          </p>


          <div className="mt-4 space-y-2">

            <ToolCard
              icon={<Lightbulb size={17} />}
              title="Explain a Topic"
              description="Get simple explanations"
              onClick={() =>
                askQuestion(
                  "Explain a programming topic in simple words."
                )
              }
            />

            <ToolCard
              icon={<Code2 size={17} />}
              title="Coding Help"
              description="Understand programming"
              onClick={() =>
                askQuestion(
                  "Help me understand Java programming."
                )
              }
            />

            <ToolCard
              icon={<BookOpen size={17} />}
              title="Study Notes"
              description="Create quick notes"
              onClick={() =>
                askQuestion(
                  "Create simple study notes for me."
                )
              }
            />

            <ToolCard
              icon={<Sparkles size={17} />}
              title="Quiz Me"
              description="Test your knowledge"
              onClick={() =>
                askQuestion(
                  "Give me a short programming quiz."
                )
              }
            />

          </div>


          {/* QUICK PROMPTS */}

          <div className="mt-8">

            <p className="text-[9px] font-semibold uppercase tracking-widest text-slate-600">
              Quick Prompts
            </p>

            <div className="mt-3 space-y-2">

              <button
                onClick={() =>
                  askQuestion("Explain React in simple terms.")
                }
                className="w-full rounded-lg border border-white/5 bg-white/[0.02] p-3 text-left text-[10px] text-slate-500 transition hover:border-cyan-400/20 hover:text-cyan-400"
              >
                Explain React in simple terms
              </button>

              <button
                onClick={() =>
                  askQuestion(
                    "What is the difference between Java and JavaScript?"
                  )
                }
                className="w-full rounded-lg border border-white/5 bg-white/[0.02] p-3 text-left text-[10px] text-slate-500 transition hover:border-cyan-400/20 hover:text-cyan-400"
              >
                Java vs JavaScript
              </button>

              <button
                onClick={() =>
                  askQuestion(
                    "Explain SQL joins with an example."
                  )
                }
                className="w-full rounded-lg border border-white/5 bg-white/[0.02] p-3 text-left text-[10px] text-slate-500 transition hover:border-cyan-400/20 hover:text-cyan-400"
              >
                Explain SQL joins
              </button>

            </div>

          </div>

        </aside>


        {/* ===================================================
            CHAT AREA
        =================================================== */}

        <section className="flex min-h-[calc(100vh-89px)] flex-col">

          {/* CHAT MESSAGES */}

          <div className="flex-1 overflow-y-auto px-5 py-8 lg:px-10">

            <div className="mx-auto max-w-4xl space-y-5">

              {messages.map((message, index) => (

                <ChatMessage
                  key={index}
                  role={message.role}
                  text={message.text}
                />

              ))}

            </div>

          </div>


          {/* =================================================
              INPUT AREA
          ================================================= */}

          <div className="border-t border-white/10 bg-[#020617] px-5 py-5 lg:px-10">

            <div className="mx-auto max-w-4xl">

              {/* SUGGESTIONS */}

              <div className="mb-4 flex gap-2 overflow-x-auto">

                <Suggestion
                  text="Explain React"
                  onClick={() =>
                    askQuestion(
                      "Explain React in simple terms."
                    )
                  }
                />

                <Suggestion
                  text="Help with Java"
                  onClick={() =>
                    askQuestion(
                      "Help me understand Java."
                    )
                  }
                />

                <Suggestion
                  text="Give me a quiz"
                  onClick={() =>
                    askQuestion(
                      "Give me a short programming quiz."
                    )
                  }
                />

                <Suggestion
                  text="Study plan"
                  onClick={() =>
                    askQuestion(
                      "Create a study plan for me."
                    )
                  }
                />

              </div>


              {/* INPUT */}

              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-2 focus-within:border-cyan-400/30">

                <input
                  value={input}
                  onChange={(event) =>
                    setInput(event.target.value)
                  }
                  onKeyDown={handleKeyDown}
                  placeholder="Ask your AI Study Assistant..."
                  className="flex-1 bg-transparent px-4 py-3 text-sm text-white outline-none placeholder:text-slate-600"
                />

                <button
                  type="button"
                  onClick={sendMessage}
                  className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400 text-slate-950 transition hover:bg-cyan-300"
                >

                  <Send size={18} />

                </button>

              </div>


              <p className="mt-3 text-center text-[9px] text-slate-700">
                AI Study Assistant can make mistakes. Verify important information.
              </p>

            </div>

          </div>

        </section>

      </div>


      {/* =====================================================
          BACK TO DASHBOARD
      ===================================================== */}

      <a
        href="/dashboard"
        className="fixed bottom-5 left-5 rounded-xl bg-white/10 px-4 py-2.5 text-xs font-semibold text-slate-400 backdrop-blur transition hover:bg-white/20 hover:text-white lg:left-[275px]"
      >
        ← Dashboard
      </a>

    </main>
  );
}


/* =========================================================
   CHAT MESSAGE
========================================================= */

function ChatMessage({
  role,
  text,
}: {
  role: "user" | "assistant";
  text: string;
}) {
  const isUser = role === "user";

  return (
    <div
      className={`flex gap-3 ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >

      {!isUser && (
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
          <Bot size={18} />
        </div>
      )}

      <div
        className={`max-w-[80%] rounded-2xl px-5 py-4 text-sm leading-6 ${
          isUser
            ? "bg-cyan-400 text-slate-950"
            : "border border-white/10 bg-white/[0.03] text-slate-300"
        }`}
      >
        {text}
      </div>

      {isUser && (
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/10 text-slate-400">
          <User size={17} />
        </div>
      )}

    </div>
  );
}


/* =========================================================
   TOOL CARD
========================================================= */

function ToolCard({
  icon,
  title,
  description,
  onClick,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex w-full items-center gap-3 rounded-xl border border-white/5 bg-white/[0.02] p-3 text-left transition hover:border-cyan-400/20 hover:bg-cyan-400/[0.03]"
    >

      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-cyan-400/10 text-cyan-400">
        {icon}
      </div>

      <div>

        <p className="text-xs font-semibold text-slate-300">
          {title}
        </p>

        <p className="mt-1 text-[9px] text-slate-600">
          {description}
        </p>

      </div>

    </button>
  );
}


/* =========================================================
   SUGGESTION
========================================================= */

function Suggestion({
  text,
  onClick,
}: {
  text: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="whitespace-nowrap rounded-full border border-white/10 bg-white/[0.02] px-4 py-2 text-[10px] text-slate-500 transition hover:border-cyan-400/20 hover:text-cyan-400"
    >
      {text}
    </button>
  );
}


/* =========================================================
   SIMPLE FRONTEND AI RESPONSE
========================================================= */

function getAIResponse(question: string) {
  const text = question.toLowerCase();

  if (text.includes("react")) {
    return "React is a JavaScript library used to build user interfaces. It uses reusable components, which makes it easier to build and maintain modern web applications.";
  }

  if (text.includes("javascript")) {
    return "JavaScript is a programming language mainly used to make web applications interactive. It can run in browsers and also on servers using environments such as Node.js.";
  }

  if (text.includes("java")) {
    return "Java is a strongly typed, object-oriented programming language. It is commonly used for backend applications, Android development, enterprise software and Spring Boot applications.";
  }

  if (text.includes("sql")) {
    return "SQL stands for Structured Query Language. It is used to create, read, update and delete data in relational databases. Common commands include SELECT, INSERT, UPDATE and DELETE.";
  }

  if (text.includes("quiz")) {
    return "Sure! Here's a quick question: Which data structure follows the LIFO principle? A) Queue  B) Stack  C) Array  D) Graph. Answer: B) Stack.";
  }

  if (text.includes("study plan")) {
    return "A simple study plan is: 1) Learn the concept for 30 minutes, 2) Practice examples for 30 minutes, 3) Solve problems for 30 minutes, and 4) Review what you learned for 15 minutes.";
  }

  return "That's a good question! I can help you understand programming, React, Java, SQL, databases, assignments and other learning topics. Ask me a specific question and I'll explain it step by step.";
}