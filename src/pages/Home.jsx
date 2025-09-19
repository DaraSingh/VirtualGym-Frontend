import React, { useEffect } from 'react'
function Home(props) {
  return (

    <div className="min-h-screen text-white font-sans">
      <div className="container mx-auto p-4 flex flex-col items-center justify-center">
        {/* Hero Section */}
        <section className="text-center py-20 px-4">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-none text-fuchsia-500 mb-4">
            Train Harder. <br className="md:hidden"/>
            Get Stronger.
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto text-gray-200 mb-8">
            Unleash your full potential with a platform designed for serious fitness.
          </p>
          {props.isloggedIn?
            <div className='flex flex-col space-y-8 items-center'>
            <a
            href="/workout"
            className=" w-70 inline-block bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-bold py-4 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            Starts Workout
          </a>
          <a
            href="/generatePlan"
            className="w-70 inline-block bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-bold py-4 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            Generate New Plan
          </a>
          </div>
          :<a
            href="/signup"
            className="inline-block bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-bold py-4 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            Start Your Free Trial
          </a>

          }
        </section>

        {/* Features Section */}
        <section className="w-full max-w-4xl py-12 px-4">
          <h2 className="text-3xl font-bold text-center mb-10">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature Card 1 */}
            <div className="bg-gradient-br grom-black/40 via-purple-800 to-black/40 border border-white/10 p-6 rounded-lg shadow-xl text-center">
              <h3 className="text-xl font-semibold mb-2">Personalized AI Workouts</h3>
              <p className="text-gray-400">
                Tailored to your goals and preferences. Choose yoga, gym, or bodyweight exercises—your plan adapts to you.
              </p>
            </div>
            {/* Feature Card 2 */}
            <div className="bg-gradient-br grom-black/40 via-purple-800 to-black/40 border border-white/10 p-6 rounded-lg shadow-xl text-center">
              <h3 className="text-xl font-semibold mb-2">No Expensive Equipment Needed</h3>
              <p className="text-gray-400">
               Stay fit without breaking the bank. All workouts use minimal or common equipment like mats, dumbbells, or resistance bands.
              </p>
            </div>
            {/* Feature Card 3 */}
            <div className="bg-gradient-br grom-black/40 via-purple-800 to-black/40 border border-white/10 p-6 rounded-lg shadow-xl text-center">
              <h3 className="text-xl font-semibold mb-2">Flexible & Diverse</h3>
              <p className="text-gray-400">
                Never get bored. Switch between exercise types, from strength training to mobility or cardio, all customized for you.
              </p>
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}

export default Home
