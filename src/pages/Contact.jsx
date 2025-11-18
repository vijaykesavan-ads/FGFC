import React, { useState } from "react";
import Reveal from "../components/Reveal";
import emailjs from "emailjs-com";

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    contactNumber: "",
    message: "",
  });

  const [error, setError] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleDone = () => {
    setShowSuccess(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { fullName, email, contactNumber, message } = formData;

    if (!fullName || !email || !contactNumber || !message) {
      setError("Please fill in all fields.");
      return;
    }

    setError("");

    const templateParams = {
      from_name: fullName,
      from_email: email,
      contact_number: contactNumber,
      message: message,
    };

    try {
      await emailjs.send(
        "service_26qsucv",
        "template_4fjquv4",
        templateParams,
        "YwkNM39waHhwckF9h"
      );

      setShowSuccess(true);

      setFormData({
        fullName: "",
        email: "",
        contactNumber: "",
        message: "",
      });
    } catch (err) {
      console.error("Email send error:", err);
      setError("Failed to send message. Please try again later.");
    }
  };

  return (
    <>
      {showSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="relative z-10 mx-auto max-w-lg">
            <div className="flex flex-col items-center rounded-xl bg-white shadow-2xl overflow-hidden p-8 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 mb-6">
                <span
                  className="material-symbols-outlined text-emerald-500"
                  style={{ fontSize: "36px" }}
                >
                  check_circle
                </span>
              </div>
              <h1 className="text-2xl font-bold text-slate-800">
                Message Sent!
              </h1>
              <p className="text-base text-slate-500 mt-2 max-w-sm">
                Thank you for reaching out. We have received your message and
                will get back to you within 24 hours.
              </p>
              <button
                onClick={handleDone}
                className="mt-8 flex w-full items-center justify-center rounded-lg bg-[#10487B] h-12 px-6 text-sm font-bold text-white hover:bg-[#0d3a65]"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}

      <main className="flex flex-1 justify-center py-10 md:py-16">
        <div className="layout-content-container flex flex-col w-full max-w-5xl gap-10 px-4">

          <Reveal delay={0.3}>
            <div className="flex flex-col items-center text-center gap-4">
              <h1 className="text-4xl font-black leading-tight text-[#10478B] tracking-[-0.033em] md:text-5xl">
                Contact Us
              </h1>
              <p className="text-base text-text-light/80 dark:text-text-dark/80 max-w-2xl">
                We'd love to hear from you! Whether you have a question about
                our teams, registration, or anything else, our team is ready to help.
              </p>
            </div>
          </Reveal>


          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">


            <Reveal delay={0.3}>
              <div className="flex flex-col gap-8 bg-neutral-light dark:bg-neutral-dark p-6 md:p-8 rounded-xl">
                <h2 className="text-2xl text-[#10478B] font-bold">
                  Get In Touch
                </h2>

                {error && (
                  <p className="text-red-600 text-sm font-medium">{error}</p>
                )}

                <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-medium">Full Name</label>
                    <input
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full h-10 px-3 rounded-lg border border-neutral-light/50 dark:border-neutral-dark/50 text-sm"
                      placeholder="John Doe"
                      type="text"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-medium">Email Address</label>
                    <input
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full h-10 px-3 rounded-lg border border-neutral-light/50 dark:border-neutral-dark/50 text-sm"
                      placeholder="you@example.com"
                      type="email"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-medium">Contact Number</label>
                    <input
                      name="contactNumber"
                      value={formData.contactNumber}
                      onChange={handleChange}
                      className="w-full h-10 px-3 rounded-lg border border-neutral-light/50 dark:border-neutral-dark/50 text-sm"
                      placeholder="Your Mobile Number"
                      type="text"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-medium">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full p-3 rounded-lg border border-neutral-light/50 dark:border-neutral-dark/50 text-sm"
                      placeholder="Your message here..."
                      rows="5"
                    ></textarea>
                  </div>


                  <button
                    className="flex w-full items-center justify-center rounded-full h-12 px-5 bg-[#10478B] text-white font-bold"
                    type="submit"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </Reveal>

            <Reveal delay={0.6}>
              <div className="flex flex-col gap-8 bg-neutral-light dark:bg-neutral-dark p-6 md:p-8 rounded-xl">
                <div className="flex flex-col gap-4">
                  <h3 className="text-xl text-[#10478B] font-bold">
                    Contact Information
                  </h3>
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-primary !text-2xl">location_on</span>
                      <p className="text-sm">
                        No 5/109, Iyyappan Nagar, Bharaniputhur, Chennai - 600122
                      </p>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-primary !text-2xl">
                        mail
                      </span>
                      <p className="text-sm">firstgoalfc@gmail.com</p>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-primary !text-2xl">
                        call
                      </span>
                      <p className="text-sm">+91 97106 60603</p>
                    </div>

                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  <h3 className="text-xl font-bold">Follow Us</h3>
                  <p className="text-sm text-text-light/80 dark:text-text-dark/80">
                    Stay connected and get the latest updates from our club.
                  </p>

                  <div className="flex items-center gap-4">
                    <a
                      aria-label="Facebook"
                      href="https://www.facebook.com/Firstgoalfc/"
                      rel="noopener noreferrer"
                      target="_blank"
                      className="flex items-center justify-center size-10 rounded-full bg-[#1877F2] text-white hover:opacity-80"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="h-5 w-5">
                        <path d="M22.675 0h-21.35C.595 0 0 .595 0 1.325v21.351C0 23.406.595 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.794.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.405 24 24 23.406 24 22.676V1.325C24 .595 23.405 0 22.675 0z" />
                      </svg>
                    </a>

                    <a
                      aria-label="Instagram"
                      href="https://www.instagram.com/first_goal_fc/?hl=en"
                      target="_blank"
                      className="flex items-center justify-center size-10 rounded-full text-white hover:opacity-80"
                      style={{
                        background:
                          "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)",
                      }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6">
                        <path d="M7.5 2C4.462 2 2 4.462 2 7.5v9C2 19.538 4.462 22 7.5 22h9c3.038 0 5.5-2.462 5.5-5.5v-9C22 4.462 19.538 2 16.5 2h-9zm0 2h9A3.5 3.5 0 0 1 20 7.5v9a3.5 3.5 0 0 1-3.5 3.5h-9A3.5 3.5 0 0 1 4 16.5v-9A3.5 3.5 0 0 1 7.5 4zm4.5 3a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm4.75-.25a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                      </svg>
                    </a>

                    <a
                      aria-label="YouTube"
                      href="https://www.youtube.com/channel/UCwumbbnS67nTqXGB_su0XGw"
                      target="_blank"
                      className="flex items-center justify-center size-10 rounded-full bg-[#FF0000] text-white hover:opacity-80"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6">
                        <path d="M23.498 6.186a2.996 2.996 0 0 0-2.112-2.117C19.402 3.5 12 3.5 12 3.5s-7.402 0-9.386.569A2.996 2.996 0 0 0 .502 6.186 31.637 31.637 0 0 0 0 12a31.637 31.637 0 0 0 .502 5.814 2.996 2.996 0 0 0 2.112 2.117C4.598 20.5 12 20.5 12 20.5s7.402 0 9.386-.569a2.996 2.996 0 0 0 2.112-2.117A31.637 31.637 0 0 0 24 12a31.637 31.637 0 0 0-.502-5.814zM9.75 15.02v-6.04l6 3.02-6 3.02z" />
                      </svg>
                    </a>

                    <a
                      aria-label="LinkedIn"
                      href="https://www.linkedin.com/company/first-goal-football-club/"
                      target="_blank"
                      className="flex items-center justify-center size-10 rounded-full bg-[#0A66C2] text-white hover:opacity-80"
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
    </>
  );
}
