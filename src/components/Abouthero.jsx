import React from 'react'
import About from '../assets/About.png';

export default function Abouthero() {
    return (
        <div className="@container">
            <div className="@[5000px]:p-4">
                <div
                    className="flex min-h-[500px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-center justify-center p-4"
                    data-alt="Football players celebrating a goal on a green field under stadium lights."
                    style={{
                        backgroundImage:`linear-gradient(rgba(0, 25, 75, 0.2) 0%, rgba(0, 25, 75, 0.6) 100%),url(${About})`,
                    }}
                >
                    <div className="flex flex-col gap-2 text-center">
                        <h1 className="text-white text-5xl font-black leading-tight tracking-[-0.033em] @[480px]:text-7xl">
                            About First Goal Football Club
                        </h1>
                        <h2 className="text-white text-2xl font-normal leading-normal @[480px]:text-base">
                            Nurturing young talent and promoting grassroots football in our community.
                        </h2>
                    </div>

                    <button className="flex min-w-[96px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-6 @[480px]:h-12 @[480px]:px-5 bg-[#10487B] text-white text-sm font-bold tracking-[0.015em] hover:bg-[#0d3a65] transition-colors">
                        <span className="truncate">Learn More</span>
                    </button>
                </div>
            </div>
        </div>
    )
}
