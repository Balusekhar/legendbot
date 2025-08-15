"use client";

import { FocusCards } from "@/components/ui/focus-cards";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white-gradient-start to-white-gradient-end">
      {/* Hero Section */}
      <section className="relative px-4 py-20 sm:px-6 lg:px-8 flex items-center justify-center min-h-screen">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-dark sm:text-6xl">
            Chat with
            <span className="block text-primary-red">Legendary Minds</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-medium max-w-2xl mx-auto">
            Experience conversations with history's greatest thinkers,
            innovators, and visionaries. Ask questions, seek advice, and learn
            from the wisdom of legendary personalities.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <button
              onClick={() =>
                document
                  .getElementById("characters-section")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="group relative px-8 py-4 text-sm font-semibold text-white bg-primary-red rounded-full shadow-lg hover:bg-primary-red-dark transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary-red focus:ring-offset-2 z-10">
              <span className="relative z-20">Browse Characters</span>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-red to-primary-red-light opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>
      </section>

      {/* Characters Section */}
      <section id="characters-section" className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-dark sm:text-4xl">
              Meet Our Legendary Characters
            </h2>
            <p className="mt-4 text-lg text-gray-medium max-w-2xl mx-auto">
              Choose from a curated collection of history's most influential
              figures and start your conversation.
            </p>
          </div>

          <FocusCards
            cards={[
              {
                title: "Hitesh Choudhary",
                href: "/hitesh",
                slug: "hitesh",
                src: "https://yt3.googleusercontent.com/arHIKjc6JTqF_b4QJKPHhQC_Jr8q0XfI7LEpJ0-VuiI0ZRz9xFNz94TWl4CLOcozLx-iAhV_=s900-c-k-c0x00ffffff-no-rj",
                description:
                  "Hitesh is a software engineer and a YouTuber. He is the founder of Chai Code Academy and a very good teacher."
              },
              {
                title: "Piyush Garg",
                href: "/piyush",
                slug: "piyush",
                src: "https://yt3.googleusercontent.com/3acddexuFlA5yKRS2--11NeqhCiik-0cntUPjk_QjlsA4ScmQUPWNmeBLweVUQjWXTCLT26lsw=s900-c-k-c0x00ffffff-no-rj",
                description:
                  "Piyush Garg is a prominent software engineer, educator, and entrepreneur widely recognized for his popular YouTube channel focused on coding and technology tutorials."
              },
            ]}
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-light/50 border-t border-gray-light mt-20">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-medium text-sm mb-4">
              Made with ❤️ by Balu
            </p>
            <div className="flex items-center justify-center space-x-6">
              <a
                href="https://www.linkedin.com/in/baluchandrasekhar/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-medium hover:text-primary-red transition-colors duration-300">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://github.com/Balusekhar/legendbot"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-medium hover:text-primary-red transition-colors duration-300">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
