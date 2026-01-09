'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here (e.g., send to API or email service)
    console.log({ name, email, subject, message });
  };
  return (
    <section className="bg-black text-white py-16 px-6 md:px-12 lg:px-24">
      {/* MAIN CONTACT */}
     <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-start">
          {/* Left Side - Text */}
          <div className="space-y-8">
            <h1 className="text-5xl md:text-6xl font-bold uppercase tracking-wider">
              Feel Free To Ask
              <br />
              Us Anything
            </h1>
            <p className="text-gray-400 leading-relaxed max-w-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <br />
              Suspendisse interdum nulla eu posuere scelerisque.
              <br />
              Donec sagittis adipiscing elit.
            </p>
          </div>

          {/* Right Side - Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <input
                type="text"
                placeholder="Your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-gray-900 border border-gray-800 rounded-md px-6 py-4 text-gray-300 placeholder-white placeholder:text-lg text-lg focus:outline-none focus:border-orange-500 transition"
                required
              />
              <input
                type="email"
                placeholder="E-mail address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-gray-900 border border-gray-800 rounded-md px-6 py-4 text-gray-300 placeholder-white placeholder:text-lg text-lg focus:outline-none focus:border-orange-500 transition"
                required
              />
            </div>

            <input
              type="text"
              placeholder="Subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full bg-gray-900 border border-gray-800 rounded-md px-6 py-4 text-gray-300 placeholder-white placeholder:text-lg focus:outline-none focus:border-orange-500 transition"
              required
            />

            <textarea
              placeholder="Your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={8}
              className="w-full bg-gray-900 border border-gray-800 rounded-md px-6 py-4 text-gray-300 placeholder-white placeholder:text-lg focus:outline-none focus:border-orange-500 transition resize-none"
              required
            />

            <button
              type="submit"
              className="bg-gray-800 text-white px-8 py-4 rounded-md border-l-4 border-orange-500 hover:bg-gray-700 transition font-medium"
            >
              GET STARTED TODAY +
            </button>
          </form>
        </div>

      {/* SUBSCRIBE BANNER */}
      <div className="mt-24 max-w-6xl mx-auto bg-orange-600 rounded-2xl px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <p className="uppercase text-sm tracking-wider text-white/90 mb-2">
            Get to know about all the exclusive offers
          </p>
          <h2 className="text-3xl md:text-4xl font-bold uppercase">
            Subscribe to Hardkaur
          </h2>
        </div>

        <button className="bg-white/20 text-white px-8 py-4 rounded-md border border-white hover:bg-white/30 transition font-medium focus:outline-none focus:ring-2 focus:ring-white">
          Subscribe Now
        </button>
      </div>

      {/* REUSABLE INPUT STYLE */}
      <style jsx>{`
        .contact-input {
          width: 100%;
          background: #111827;
          border: 1px solid #1f2937;
          border-radius: 0.375rem;
          padding: 1rem 1.5rem;
          color: #d1d5db;
          transition: border-color 0.2s ease;
        }
        .contact-input::placeholder {
          color: #6b7280;
        }
        .contact-input:focus {
          outline: none;
          border-color: #f97316;
        }
      `}</style>
    </section>
  );
}
