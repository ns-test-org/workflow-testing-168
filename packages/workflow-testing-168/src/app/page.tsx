'use client';

export default function Landing() {
  return (
    <div className="h-screen w-full bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
      <main className="text-center px-6">
        <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 bg-clip-text text-transparent">
          Hello World
        </h1>
        <p className="text-xl bg-gradient-to-r from-blue-500 via-teal-400 to-green-400 bg-clip-text text-transparent">
          Welcome to your landing page
        </p>
      </main>
    </div>
  );
}


