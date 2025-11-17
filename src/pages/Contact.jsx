import React from 'react'
import Reveal from '../components/Reveal'

export default function Contact() {
  return (
    <main className="flex flex-1 justify-center py-10 md:py-16">
      <div className="layout-content-container flex flex-col w-full max-w-5xl gap-10 px-4">
        {/* Header */}
        <Reveal delay={0.3}>
        <div className="flex flex-col items-center text-center gap-4">
          <h1 className="text-4xl font-black leading-tight text-[#10478B] tracking-[-0.033em] md:text-5xl">
            Contact Us
          </h1>
          <p className="text-base font-normal leading-normal max-w-2xl text-text-light/80 dark:text-text-dark/80">
            We'd love to hear from you! Whether you have a question about our teams, registration, or anything else,
            our team is ready to answer all your questions.
          </p>
        </div>
        </Reveal>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left - Get In Touch */}
          <Reveal delay={0.3}>
          <div className="flex flex-col gap-8 bg-neutral-light dark:bg-neutral-dark p-6 md:p-8 rounded-xl self-start">
            <h2 className="text-2xl text-[#10478B] font-bold">Get In Touch</h2>
            <form className="flex flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium" htmlFor="name">Full Name</label>
                <input
                  className="w-full h-10 px-3 rounded-lg bg-background-light dark:bg-background-dark border-neutral-light/50 dark:border-neutral-dark/50 border focus:border-primary focus:ring-primary/50 text-sm"
                  id="name"
                  placeholder="John Doe"
                  type="text"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium" htmlFor="email">Email Address</label>
                <input
                  className="w-full h-10 px-3 rounded-lg bg-background-light dark:bg-background-dark border-neutral-light/50 dark:border-neutral-dark/50 border focus:border-primary focus:ring-primary/50 text-sm"
                  id="email"
                  placeholder="you@example.com"
                  type="email"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium" htmlFor="email">Contact Number</label>
                <input
                  className="w-full h-10 px-3 rounded-lg bg-background-light dark:bg-background-dark border-neutral-light/50 dark:border-neutral-dark/50 border focus:border-primary focus:ring-primary/50 text-sm"
                  id="phone"
                  placeholder="Your Mobile Number"
                  type="text"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium" htmlFor="message">Message</label>
                <textarea
                  className="w-full p-3 rounded-lg bg-background-light dark:bg-background-dark border-neutral-light/50 dark:border-neutral-dark/50 border focus:border-primary focus:ring-primary/50 text-sm"
                  id="message"
                  placeholder="Your message here..."
                  rows="5"
                ></textarea>
              </div>

              <button
                className="flex w-full min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-5 bg-[#10478B] text-white text-base font-bold leading-normal tracking-[0.015em]"
                type="submit"
              >
                <span className="truncate">Send Message</span>
              </button>
            </form>
          </div>
          </Reveal>

          {/* Right - Contact Information */}
          <Reveal delay={0.6}>
          <div className="flex flex-col gap-8 bg-neutral-light dark:bg-neutral-dark p-6 md:p-8 rounded-xl self-start">
            <div className="flex flex-col gap-4">
              <h3 className="text-xl text-[#10478B] font-bold">Contact Information</h3>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary !text-2xl">location_on</span>
                  <p className="text-sm">123 Football Lane, Soccer City, 45678</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary !text-2xl">mail</span>
                  <p className="text-sm">info@firstgoal.com</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary !text-2xl">call</span>
                  <p className="text-sm">(123) 456-7890</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="text-xl font-bold">Follow Us</h3>
              <p className="text-sm text-text-light/80 dark:text-text-dark/80">
                Stay connected with the club and get the latest updates by following us on our social media channels.
              </p>
              <div className="flex items-center gap-4">
                {/* Facebook */}
                <a
                  aria-label="Facebook"
                  href="https://www.facebook.com/Firstgoalfc/"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="flex items-center justify-center size-10 rounded-full bg-[#1877F2] text-white hover:opacity-80 transition-all duration-200"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="h-5 w-5">
                    <path d="M22.675 0h-21.35C.595 0 0 .595 0 1.325v21.351C0 23.406.595 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.794.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.405 24 24 23.406 24 22.676V1.325C24 .595 23.405 0 22.675 0z" />
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  className="flex items-center justify-center size-10 rounded-full text-white hover:opacity-80 transition-all duration-200"
                  href="https://www.instagram.com/first_goal_fc/?hl=en"
                  aria-label="Instagram"
                  target="_blank"
                  style={{
                    background: 'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)'
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6">
                    <path d="M7.5 2C4.462 2 2 4.462 2 7.5v9C2 19.538 4.462 22 7.5 22h9c3.038 0 5.5-2.462 5.5-5.5v-9C22 4.462 19.538 2 16.5 2h-9zm0 2h9A3.5 3.5 0 0 1 20 7.5v9a3.5 3.5 0 0 1-3.5 3.5h-9A3.5 3.5 0 0 1 4 16.5v-9A3.5 3.5 0 0 1 7.5 4zm4.5 3a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm4.75-.25a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                  </svg>
                </a>

                {/* YouTube */}
                <a
                  className="flex items-center justify-center size-10 rounded-full bg-[#FF0000] text-white hover:opacity-80 transition-all duration-200"
                  href="https://www.youtube.com/channel/UCwumbbnS67nTqXGB_su0XGw"
                  aria-label="YouTube"
                  target="_blank"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6">
                    <path d="M23.498 6.186a2.996 2.996 0 0 0-2.112-2.117C19.402 3.5 12 3.5 12 3.5s-7.402 0-9.386.569A2.996 2.996 0 0 0 .502 6.186 31.637 31.637 0 0 0 0 12a31.637 31.637 0 0 0 .502 5.814 2.996 2.996 0 0 0 2.112 2.117C4.598 20.5 12 20.5 12 20.5s7.402 0 9.386-.569a2.996 2.996 0 0 0 2.112-2.117A31.637 31.637 0 0 0 24 12a31.637 31.637 0 0 0-.502-5.814zM9.75 15.02v-6.04l6 3.02-6 3.02z" />
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  className="flex items-center justify-center size-10 rounded-full bg-[#0A66C2] text-white hover:opacity-80 transition-all duration-200"
                  href="https://www.linkedin.com/company/first-goal-football-club/"
                  aria-label="LinkedIn"
                  target="_blank"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="h-5 w-5">
                    <path d="M20.447 20.452H16.9v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.364V9h3.4v1.561h.046c.474-.9 1.635-1.852 3.366-1.852 3.598 0 4.266 2.368 4.266 5.448v6.295zM5.337 7.433a1.974 1.974 0 1 1 0-3.949 1.974 1.974 0 0 1 0 3.949zM6.812 20.452H3.862V9h2.95v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.728v20.543C0 23.226.792 24 1.771 24h20.451C23.2 24 24 23.226 24 22.271V1.728C24 .774 23.2 0 22.225 0z" />
                  </svg>
                </a>
              </div>

            </div>
          </div>
          </Reveal>
        </div>
      </div>
    </main>
  )
}
