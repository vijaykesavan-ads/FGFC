import React from "react";

export default function Session() {
  return (
    <div className="bg-gray-100">
      <section className="container mx-auto px-4 py-10 sm:py-16">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="flex flex-col gap-4 text-center mb-10">
            <h2 className="text-[#10487B] text-3xl font-bold tracking-tight">
              A Day in the Life
            </h2>
            <p className="text-gray-600 text-base leading-relaxed">
              Our structured daily schedule is designed to balance elite football
              training with academic excellence and personal time.
            </p>
          </div>

          {/* Accordion Section */}
          <div className="space-y-4">
            {/* Morning */}
            <details className="group rounded-lg bg-[#cedaed] p-6 [&_summary::-webkit-details-marker]:hidden" open>
              <summary className="flex cursor-pointer items-center justify-between gap-1.5">
                <h3 className="text-lg font-bold text-[#10487B]">
                  Morning Session: Skill Development & Academics
                </h3>
                <span className="relative h-5 w-5 shrink-0">
                  {/* + icon */}
                  <svg
                    className="absolute inset-0 h-5 w-5 opacity-100 group-open:opacity-0 transition-all duration-200"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v6m-3-3h6"
                    />
                  </svg>

                  {/* − icon */}
                  <svg
                    className="absolute inset-0 h-5 w-5 opacity-0 group-open:opacity-100 transition-all duration-200"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9" />
                  </svg>
                </span>
              </summary>

              <div className="mt-4 text-gray-600 leading-relaxed">
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>07:00 AM:</strong> Wake Up & Breakfast</li>
                  <li><strong>08:00 AM - 10:00 AM:</strong> Technical Skills Training</li>
                  <li><strong>10:30 AM - 01:00 PM:</strong> Academic Classes</li>
                  <li><strong>01:00 PM:</strong> Lunch & Rest</li>
                </ul>
              </div>
            </details>

            {/* Afternoon */}
            <details className="group rounded-lg bg-[#cedaed] p-6 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between gap-1.5">
                <h3 className="text-lg font-bold text-[#10487B]">
                  Afternoon Session: Tactical Training & Fitness
                </h3>
                <span className="relative h-5 w-5 shrink-0">
                  {/* + icon */}
                  <svg
                    className="absolute inset-0 h-5 w-5 opacity-100 group-open:opacity-0 transition-all duration-200"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m-3-3h6" />
                  </svg>
                  {/* − icon */}
                  <svg
                    className="absolute inset-0 h-5 w-5 opacity-0 group-open:opacity-100 transition-all duration-200"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9" />
                  </svg>
                </span>
              </summary>

              <div className="mt-4 text-gray-600 leading-relaxed">
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>02:30 PM - 04:30 PM:</strong> Team Tactical Session & Scrimmage</li>
                  <li><strong>05:00 PM - 06:00 PM:</strong> Strength & Conditioning</li>
                </ul>
              </div>
            </details>

            {/* Evening */}
            <details className="group rounded-lg bg-[#cedaed] p-6 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between gap-1.5">
                <h3 className="text-lg font-bold text-[#10487B]">
                  Evening: Recovery & Personal Time
                </h3>
                <span className="relative h-5 w-5 shrink-0">
                  {/* + icon */}
                  <svg
                    className="absolute inset-0 h-5 w-5 opacity-100 group-open:opacity-0 transition-all duration-200"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m-3-3h6" />
                  </svg>
                  {/* − icon */}
                  <svg
                    className="absolute inset-0 h-5 w-5 opacity-0 group-open:opacity-100 transition-all duration-200"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9" />
                  </svg>
                </span>
              </summary>

              <div className="mt-4 text-gray-600 leading-relaxed">
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>07:00 PM:</strong> Dinner</li>
                  <li><strong>08:00 PM - 09:00 PM:</strong> Study Hall / Video Analysis</li>
                  <li><strong>09:00 PM - 10:00 PM:</strong> Free Time & Socializing</li>
                  <li><strong>10:30 PM:</strong> Lights Out</li>
                </ul>
              </div>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
}
