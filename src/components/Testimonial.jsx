import React from 'react'

export default function Testimonial() {
    return (
        <section className="container mx-auto px-4 py-10 sm:py-16">
            <div className="flex flex-col gap-10">
                <div className="flex flex-col gap-4 text-center">
                    <h2 className="text-text-primary text-[#10487B] dark:text-text-light text-3xl font-bold tracking-tight">What Our Players Say</h2>
                    <p className="text-text-secondary dark:text-slate-400 text-base font-normal leading-relaxed max-w-2xl mx-auto">Hear directly from the athletes who have lived the First Goal FC experience.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="flex flex-col gap-4 p-6 rounded-lg bg-surface-light dark:bg-surface-dark border border-slate-200 dark:border-slate-700">
                        <p className="text-text-secondary dark:text-slate-400">"The coaching here is next level. I've improved more in one year at First Goal than I did in the two years before. It's a challenging but incredibly rewarding environment."</p>
                        <div className="flex items-center gap-4 mt-auto">
                            <img
                                className="w-12 h-12 rounded-full border-2 border-[#10487B] object-cover"
                                src="https://api.dicebear.com/7.x/adventurer/svg?seed=Charan"
                                alt="Avatar"
                            />
                            <div>
                                <h4 className="font-bold text-text-primary dark:text-text-light">Charan</h4>
                                <p className="text-sm text-text-secondary dark:text-slate-400">Program Year 2023</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 p-6 rounded-lg bg-surface-light dark:bg-surface-dark border border-slate-200 dark:border-slate-700">
                        <p className="text-text-secondary dark:text-slate-400">"It's more than just a football academy; it's a family. The support from coaches and teammates is amazing, and the focus on academics helped me secure a college scholarship."</p>
                        <div className="flex items-center gap-4 mt-auto">
                        <img
                                className="w-12 h-12 rounded-full border-2 border-[#10487B] object-cover"
                                src="https://api.dicebear.com/7.x/adventurer/svg?seed=Jhon"
                                alt="Avatar"
                            />
                            <div>
                                <h4 className="font-bold text-text-primary dark:text-text-light">Jhon</h4>
                                <p className="text-sm text-text-secondary dark:text-slate-400">Program Year 2022</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 p-6 rounded-lg bg-surface-light dark:bg-surface-dark border border-slate-200 dark:border-slate-700">
                        <p className="text-text-secondary dark:text-slate-400">"The facilities are incredible, and the competitive schedule prepared me for the pressures of professional trials. First Goal gave me the platform to chase my dream."</p>
                        <div className="flex items-center gap-4 mt-auto">
                        <img
                                className="w-12 h-12 rounded-full border-2 border-[#10487B] object-cover"
                                src="https://api.dicebear.com/7.x/adventurer/svg?seed=Mural"
                                alt="Avatar"
                            />
                            <div>
                                <h4 className="font-bold text-text-primary dark:text-text-light">Murali</h4>
                                <p className="text-sm text-text-secondary dark:text-slate-400">Program Year 2025</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
