'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import emailjs from '@emailjs/browser'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    emailjs
      .send(
        'YOUR_SERVICE_ID',     // ✅ EmailJS Service ID
        'YOUR_TEMPLATE_ID',    // ✅ EmailJS Template ID
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        'YOUR_PUBLIC_KEY'      // ✅ EmailJS Public Key
      )
      .then(
        () => {
          alert('✅ Message sent successfully!')
          setFormData({ name: '', email: '', message: '' })
          setLoading(false)
        },
        (error) => {
          console.error('EmailJS Error:', error)
          alert('❌ Failed to send message. Please try again.')
          setLoading(false)
        }
      )
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Get In Touch</h2>

        <div className="grid md:grid-cols-2 gap-8">

          {/* LEFT SIDE */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <Mail className="text-blue-500 mr-4 mt-1" size={20} />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-gray-600">
                    vishalsharma965352@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="text-blue-500 mr-4 mt-1" size={20} />
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-gray-600">+91 9653523424</p>
                </div>
              </div>

              <div className="flex items-start">
                <MapPin className="text-blue-500 mr-4 mt-1" size={20} />
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-gray-600">Haryana, India</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows="4"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 flex items-center justify-center disabled:opacity-60"
              >
                {loading ? 'Sending...' : 'Send Message'}
                <Send className="ml-2" size={20} />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  )
}
