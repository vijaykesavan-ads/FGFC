import React from 'react'

export default function Pillers() {
    return (
        <div>

            <section class="container mx-auto px-4 py-10 sm:py-16">
                <div class="flex flex-col gap-10">
                    <div class="flex flex-col gap-4 text-center">
                        <h1 class="text-text-primary text-[#10487B] dark:text-text-light text-3xl font-bold tracking-tight">Our Core Pillars</h1>
                        <p class="text-text-secondary dark:text-slate-400 text-base font-normal leading-relaxed max-w-2xl mx-auto">We build champions on and off the field through a curriculum focused on four key areas of development.</p>
                    </div>
                    <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        <div class="flex flex-col flex-1 gap-4 rounded-lg border border-slate-200 dark:border-slate-700 bg-surface-light dark:bg-surface-dark p-6 text-center items-center">
                            <div class="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                                <span class="material-symbols-outlined text-3xl">sports</span>
                            </div>
                            <div class="flex flex-col gap-1">
                                <h2 class="text-text-primary dark:text-text-light text-lg font-bold leading-tight">Elite Coaching</h2>
                                <p class="text-text-secondary dark:text-slate-400 text-sm font-normal leading-normal">Learn from UEFA-licensed coaches with experience at the highest levels of the game.</p>
                            </div>
                        </div>
                        <div class="flex flex-col flex-1 gap-4 rounded-lg border border-slate-200 dark:border-slate-700 bg-surface-light dark:bg-surface-dark p-6 text-center items-center">
                            <div class="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                                <span class="material-symbols-outlined text-3xl">school</span>
                            </div>
                            <div class="flex flex-col gap-1">
                                <h2 class="text-text-primary dark:text-text-light text-lg font-bold leading-tight">Holistic Development</h2>
                                <p class="text-text-secondary dark:text-slate-400 text-sm font-normal leading-normal">Our program includes academic support, nutrition planning, and mental conditioning.</p>
                            </div>
                        </div>
                        <div class="flex flex-col flex-1 gap-4 rounded-lg border border-slate-200 dark:border-slate-700 bg-surface-light dark:bg-surface-dark p-6 text-center items-center">
                            <div class="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                                <span class="material-symbols-outlined text-3xl">trending_up</span>
                            </div>
                            <div class="flex flex-col gap-1">
                                <h2 class="text-text-primary dark:text-text-light text-lg font-bold leading-tight">Competitive Pathway</h2>
                                <p class="text-text-secondary dark:text-slate-400 text-sm font-normal leading-normal">Showcase your talent in top-tier youth leagues and tournaments with exposure to scouts.</p>
                            </div>
                        </div>
                        <div class="flex flex-col flex-1 gap-4 rounded-lg border border-slate-200 dark:border-slate-700 bg-surface-light dark:bg-surface-dark p-6 text-center items-center">
                            <div class="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                                <span class="material-symbols-outlined text-3xl">apartment</span>
                            </div>
                            <div class="flex flex-col gap-1">
                                <h2 class="text-text-primary dark:text-text-light text-lg font-bold leading-tight">World-Class Facilities</h2>
                                <p class="text-text-secondary dark:text-slate-400 text-sm font-normal leading-normal">Train, live, and learn in a professional environment designed for elite athletes.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
