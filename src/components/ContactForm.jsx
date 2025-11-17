import React, { useState } from "react";
import emailjs from "emailjs-com";

export default function ContactForm({ onClose }) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    contactNumber: "",
    message: "",
  });

  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
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
        "service_26qsucv",     // e.g. service_id
        "template_4fjquv4",    // e.g. template_id
        templateParams,
        "YwkNM39waHhwckF9h"      // public key
      );

      setShowSuccess(true);
    } catch (err) {
      console.error("Email send error:", err);
      setError("Failed to send message. Please try again later.");
    }
  };

  const handleDone = () => {
    setShowSuccess(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      {showSuccess ? (
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
            <h1 className="text-2xl font-bold text-slate-800">Message Sent!</h1>
            <p className="text-base text-slate-500 mt-2 max-w-sm">
              Thank you for reaching out. We have received your message and will
              get back to you within 24 hours.
            </p>
            <button
              onClick={handleDone}
              className="mt-8 flex w-full items-center justify-center rounded-lg bg-[#10487B] h-12 px-6 text-sm font-bold text-white transition-colors hover:bg-[#0d3a65]"
            >
              Done
            </button>
          </div>
        </div>
      ) : (
        <div className="relative z-10 mx-auto max-w-lg w-full">
          <div className="flex flex-col rounded-xl bg-white shadow-2xl overflow-hidden">
            <div className="flex items-start justify-between p-6 border-b border-slate-200">
              <h1 className="text-xl font-bold text-slate-800">Contact Us</h1>
              <button
                onClick={onClose}
                className="text-slate-400 hover:text-slate-600"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            <div className="p-6 flex flex-col gap-5">
              {["fullName", "email", "contactNumber", "message"].map((field) => (
                <div key={field} className="flex flex-col w-full">
                  <label className="text-sm font-medium text-slate-700 pb-2">
                    {field === "fullName"
                      ? "Full Name"
                      : field === "email"
                      ? "Email Address"
                      : field === "contactNumber"
                      ? "Contact Number"
                      : "Message"}
                  </label>
                  {field === "message" ? (
                    <textarea
                      name={field}
                      value={formData[field]}
                      onChange={handleChange}
                      className="form-textarea w-full rounded-lg border border-slate-300 bg-white focus:ring-2 focus:ring-[#10487B] px-4 py-3 text-sm"
                      placeholder="Enter your message here..."
                      rows="4"
                    />
                  ) : (
                    <input
                      name={field}
                      value={formData[field]}
                      onChange={handleChange}
                      className="form-input w-full rounded-lg border border-slate-300 bg-white focus:ring-2 focus:ring-[#10487B] h-12 px-4 text-sm"
                      placeholder={
                        field === "email"
                          ? "you@example.com"
                          : field === "contactNumber"
                          ? "Enter your contact number"
                          : "Enter your full name"
                      }
                      type={field === "email" ? "email" : "text"}
                    />
                  )}
                </div>
              ))}
              {error && (
                <p className="text-red-500 text-sm text-center">{error}</p>
              )}

              <button
                onClick={handleSubmit}
                className="flex w-full items-center justify-center rounded-lg bg-[#10487B] h-12 px-6 text-sm font-bold text-white transition-colors hover:bg-[#0d3a65]"
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
