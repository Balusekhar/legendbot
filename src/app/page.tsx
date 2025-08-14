import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white-gradient-start to-white-gradient-end flex items-center justify-center">
      {/* Hero Section */}
      <section className="relative px-4 py-20 sm:px-6 lg:px-8">
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
            <button className="group relative px-8 py-4 text-sm font-semibold text-white bg-primary-red rounded-full shadow-lg hover:bg-primary-red-dark transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary-red focus:ring-offset-2 z-10">
              <span className="relative z-20">Browse Characters</span>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-red to-primary-red-light opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
