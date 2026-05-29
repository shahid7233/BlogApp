import React from "react"
import { Link } from 'react-router-dom'
import authSlice from '../store/authSlice'
import { useSelector } from "react-redux";
 function LearnMorePage() {
  const CurrentStatus = useSelector((state)=>(state.auth.status))
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      
      <section className="bg-blue-600 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">
            Learn More About Our Platform
          </h1>

          <p className="text-lg max-w-3xl mx-auto leading-8 text-blue-100">
            Create blogs, share ideas, manage content, and build your online presence with a fast and modern web platform.
          </p>

          {!CurrentStatus && <Link to={'/login'} className="mt-8 bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 transition duration-300">
            Get Started
          </Link>}

          
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition duration-300">
            <div className="text-4xl mb-4">⚡</div>
            <h2 className="text-2xl font-bold mb-4">
              Fast Performance
            </h2>
            <p className="text-gray-600 leading-7">
              Optimized frontend and backend architecture for smooth user experience and quick loading times.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition duration-300">
            <div className="text-4xl mb-4">🔒</div>
            <h2 className="text-2xl font-bold mb-4">
              Secure Authentication
            </h2>
            <p className="text-gray-600 leading-7">
              User authentication system powered with secure login, signup, and session management.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition duration-300">
            <div className="text-4xl mb-4">📝</div>
            <h2 className="text-2xl font-bold mb-4">
              Easy Content Creation
            </h2>
            <p className="text-gray-600 leading-7">
              Write, edit, and publish blog posts with a clean and user friendly interface.
            </p>
          </div>

        </div>
      </section>

      <section className="bg-white py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-4xl font-bold mb-6">
            Why Choose Us?
          </h2>

          <p className="text-gray-600 leading-8 text-lg max-w-3xl mx-auto">
            Our platform is built for developers, creators, and businesses who want a clean and scalable blogging experience.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 text-left">

            <div className="bg-gray-100 rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-3">
                Responsive Design
              </h3>

              <p className="text-gray-600 leading-7">
                Fully responsive layout that works smoothly on desktop, tablet, and mobile devices.
              </p>
            </div>

            <div className="bg-gray-100 rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-3">
                Clean UI
              </h3>

              <p className="text-gray-600 leading-7">
                Minimal and modern interface using Tailwind CSS for better readability and user experience.
              </p>
            </div>

            <div className="bg-gray-100 rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-3">
                Easy Integration
              </h3>

              <p className="text-gray-600 leading-7">
                Connect APIs, databases, and authentication systems easily with scalable architecture.
              </p>
            </div>

            <div className="bg-gray-100 rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-3">
                Developer Friendly
              </h3>

              <p className="text-gray-600 leading-7">
                Organized code structure with reusable components and clean development workflow.
              </p>
            </div>

          </div>
        </div>
      </section>

      <section className="bg-blue-600 text-white py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">

          <h2 className="text-4xl font-bold mb-6">
            Ready to Start?
          </h2>

          <p className="text-lg text-blue-100 leading-8 mb-8">
            Join today and start building your own blogs and content platform with modern web technologies.
          </p>
          {!CurrentStatus && <Link to={"/login"} className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-200 transition duration-300">
            Explore More
          </Link>}

          

        </div>
      </section>

    </div>
  )
}
export default  LearnMorePage