import React from 'react'

function About() {
  return (
    <div className="min-h-screen text-white font-sans">
  <div className="container mx-auto min-h-screen px-4 py-10">
    {/* Header Section */}
    <section className="text-center mb-16">
      <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-none text-fuchsia-500 mb-4">
        How Our Virtual Gym Works
      </h1>
      <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
        Follow these simple steps to get fit from the comfort of your home.
      </p>
    </section>

    {/* Steps Section */}
    <section className="grid md:grid-cols-3 gap-10 text-center">
      {[
        { title: "Register",text:"Sign up and create your personal account to start your fitness journey instantly.", emoji: "📝" },
        { title: "Generate Plan",text:"Get a customized workout plan based on your goals, fitness level, and preferences." ,emoji: "📊" },
        { title: "Follow Routine And Be Consistent",text:"Stick to your personalized routine, track your progress, and achieve results step by step.", emoji: "💪" },
      ].map((step, index) => (
        <div
          key={index}
          className="bg-gradient-to-r from-fuchsia-600 to-fuchsia-500 hover:from-fuchsia-700 hover:to-fuchsia-600 text-white font-bold py-8 px-6 rounded-2xl shadow-xl transition-all duration-300 transform hover:scale-105 flex flex-col items-center justify-center"
        >
          <span className="text-6xl mb-4">{step.emoji}</span>
          <h2 className="text-xl md:text-2xl mb-4">{step.title}</h2>
          <p className='text-gray-300'>{step.text}</p>
        </div>
      ))}
    </section>
  </div>
</div>

  )
}

export default About
