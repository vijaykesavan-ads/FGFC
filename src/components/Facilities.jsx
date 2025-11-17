import React from 'react'

export default function Facilities() {
    return (
        <div>
            <section className="container mx-auto px-4 py-10 sm:py-16">
                <div className="flex flex-col gap-8">
                    <div className="flex flex-col gap-4 text-center">
                        <h2 className="text-text-primary text-[#10487B] dark:text-text-light text-3xl font-bold tracking-tight">State-of-the-Art Campus</h2>
                        <p className="text-text-secondary dark:text-slate-400 text-base font-normal leading-relaxed max-w-2xl mx-auto">Explore the environment where our athletes train, learn, and live. Our facilities are designed to support peak performance and a balanced lifestyle.</p>
                    </div>
                    <div className="grid grid-cols-2 grid-rows-2 gap-4 h-[600px]">
                        <div className="col-span-1 row-span-2 rounded-lg overflow-hidden">
                            <img className="w-full h-full object-cover" data-alt="A pristine, green football pitch with perfectly marked lines under a clear blue sky." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCoZrZEV1M8Xp2F0vAFvzQWSPgDmQAugdhl5DqkGoL51v9zL4muJc2umtweuHFAdERfZCGmVrpsgESymr7a6veXxrbeKvIB00R2JOYPB84IDDDIBNCS-NZ2AYVmnsIe__WA5s8zwEAG4iP9CyQS8LepzpdDGIOmAidOWNuuf5m00sR5k_YVaRlveXsLmDD3PM5GzByCH9GD2xqpDqKjsCN2uCMIaUfajpjjv_qH2Pd8OoFGAap0hxnsg7tlkEKNpAHcFfB3Y1NN5zE" />
                        </div>
                        <div className="col-span-1 row-span-1 rounded-lg overflow-hidden">
                            <img className="w-full h-full object-cover" data-alt="A modern, well-equipped gym with weights and cardio machines." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnAPj7e1yLuY5b-a9G53X9TARVToFHaGQ4OG2_aVIqHd2vkhFCIztvPm-NbzbsngV9B3Y0Hmxp1AW5dFuDOoENFctI56eCfKpO_I4PBPL18qAeVrTZ_RH6AnLcpPcKoPrOioTxPwraNayMFJeK7JT0wXKXs2rJFOn0-Hwxzfr4Tazr-qLxb5KQRooc-fBbBTTxgoF96fEMQaxArvsH3mSGuTqy4BFdzwT8IvBbujBCcx7Fz8LRj1mftK3owdvQB_AQCuIWGh1WNfg" />
                        </div>
                        <div className="col-span-1 row-span-1 rounded-lg overflow-hidden">
                            <img className="w-full h-full object-cover" data-alt="A bright, modern classroom with students engaged in a lesson." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0BE8FLKJ0upoyjD_2x7hkr_tCg8YUXfL0kzVuhq9G1GSfnZAKUPI4LBO0gc6Umw-q1ry6AlVvEzfoTMs4ESrSoiP88nxweB6ZSVz_WvoXGodAuBZjIgXR2xhewfl3_5vjNZdC2LIU0R3wsDFp5n5sRxiQ_pD9f0HLDngsCPyg_g1ItmSo6578DFWRzxUZ2mj3C8iH2FhSnvPcqbhbYqwp7dsvuePZpHSYdyLj9PWbYRPgQZ5XwMnDinhMQ9LMT1nGm-wzP5p3rSg" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
