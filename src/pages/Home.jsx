import React from "react";
import { Link } from 'react-router-dom'
import authSlice from '../store/authSlice'
import { useSelector } from "react-redux";


function Home() {
  const CurrentStatus = useSelector((state)=>(state.auth.status))
  return (
    <div className="min-h-screen bg-zinc-950 text-white">

      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid md:grid-cols-2 gap-12 items-center">

          <div>

            <p className="text-blue-400 font-semibold mb-4">
              Modern Blog Platform
            </p>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Write. Share. Grow.
            </h1>

            <p className="text-zinc-400 text-lg leading-8 mb-8">
              A clean and modern blogging platform where creators
              can publish ideas, share stories, and build communities.
            </p>

            <div className="flex gap-4">

              {!CurrentStatus && <Link to={"/login"} className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl font-medium transition">
                Get Started
              </Link>}

              

              <Link to={"/learnmore"} className="border border-zinc-700 hover:border-zinc-500 px-6 py-3 rounded-xl font-medium transition">
                Learn More
              </Link>

            </div>

          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 shadow-2xl">

            <div className="space-y-6">

              <div className="bg-zinc-800 rounded-2xl p-5">
                <h3 className="text-xl font-semibold mb-2">
                  Fast Publishing
                </h3>

                <p className="text-zinc-400 leading-7">
                  Create and publish articles instantly with a clean editor.
                </p>
              </div>

              <div className="bg-zinc-800 rounded-2xl p-5">
                <h3 className="text-xl font-semibold mb-2">
                  Secure Authentication
                </h3>

                <p className="text-zinc-400 leading-7">
                  User accounts protected using modern authentication systems.
                </p>
              </div>

              <div className="bg-zinc-800 rounded-2xl p-5">
                <h3 className="text-xl font-semibold mb-2">
                  Responsive Design
                </h3>

                <p className="text-zinc-400 leading-7">
                  Fully responsive UI built for mobile, tablet, and desktop.
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Home;