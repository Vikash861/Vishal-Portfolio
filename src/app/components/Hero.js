'use client'

import { Download, ArrowRight } from 'lucide-react'

export default function Hero() {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="bg-gradient-to-r from-blue-600 to-purple-700 text-white">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Vishal Sharma
          </h1>
          <h2 className="text-2xl md:text-3xl mb-6 text-blue-200">
            MIS Professional
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            With 2 years of experience in Management Information Systems, 
            specializing in data analysis, system optimization, and business intelligence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition duration-300 flex items-center justify-center"
            >
              Get In Touch <ArrowRight className="ml-2" size={20} />
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition duration-300 flex items-center justify-center">
              Download Resume <Download className="ml-2" size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}