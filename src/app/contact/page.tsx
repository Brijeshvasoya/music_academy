'use client'
import React, { useState } from 'react'
import { Button } from '../../components/ui/moving-border'
import { BackgroundGradient } from '../../components/ui/background-gradient'
import { Meteors } from '../../components/ui/meteors';

const Page = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <Meteors number={50} />
      <div className="max-w-4xl mt-20 mx-auto">
        <h1 className="text-4xl font-extrabold text-center text-teal-600 mb-10">
          Contact Us
        </h1>
        <BackgroundGradient className="rounded-[22px] p-4 sm:p-10 bg-black/70">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-teal-400 mb-4">
                Get In Touch
              </h2>
              <div className="space-y-4 text-gray-300">
                <div>
                  <p className="font-semibold text-teal-300">Address</p>
                  <p>123 Music Lane, Harmony City, MC 12345</p>
                </div>
                <div>
                  <p className="font-semibold text-teal-300">Phone</p>
                  <p>+1 (555) 123-4567</p>
                </div>
                <div>
                  <p className="font-semibold text-teal-300">Email</p>
                  <p>contact@musicacademy.com</p>
                </div>
              </div>
              <div className="mt-6">
                <h3 className="text-xl font-bold text-teal-400 mb-3">
                  Business Hours
                </h3>
                <p className="text-gray-300">
                  Monday - Friday: 9 AM - 6 PM
                  <br />
                  Saturday: 10 AM - 4 PM
                  <br />
                  Sunday: Closed
                </p>
              </div>
            </div>
            <div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-teal-300 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-teal-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-teal-300 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-teal-300 mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                  ></textarea>
                </div>
                <Button 
                  type="submit"
                  className="w-full px-6 py-3 rounded-lg text-white bg-teal-600 hover:bg-teal-700 transition duration-300"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </BackgroundGradient>
      </div>
    </div>
  )
}

export default Page;
