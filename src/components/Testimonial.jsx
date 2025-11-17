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
                        <p className="text-text-secondary dark:text-slate-400">"The coaching here is next level. I've improved more in one year at First Goal than I did in the five years before. It's a challenging but incredibly rewarding environment."</p>
                        <div className="flex items-center gap-4 mt-auto">
                            <img className="w-12 h-12 rounded-full object-cover" data-alt="Headshot of a smiling young man." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkY2iIwljYF1kaJdfqTxPMVbfDJIK1J3FlCqoknhcf9YyJtgGhgbNSgu9MLvxdO4t5Px_n6wqZendwYJWZLGi20UdvSBLuR2y9XiI3sX-f4M-YbIz0G82HyJtI4wIGVdp5GQmZdIpQlvjDID0RZ5mI_GygkUP24W8Fr4dWBjikMiJ0t9nnPtUr_lw6UbDwXOmlo4X4_jBAaikVYJ1G-uSnIljwI-7QFfh6ECYcNWmCrIyYD52Nt0w35pDyf7ZyX6snchN-TJT5K5k" />
                            <div>
                                <h4 className="font-bold text-text-primary dark:text-text-light">Leo Martinez</h4>
                                <p className="text-sm text-text-secondary dark:text-slate-400">Program Year 2023</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 p-6 rounded-lg bg-surface-light dark:bg-surface-dark border border-slate-200 dark:border-slate-700">
                        <p className="text-text-secondary dark:text-slate-400">"It's more than just a football academy; it's a family. The support from coaches and teammates is amazing, and the focus on academics helped me secure a college scholarship."</p>
                        <div className="flex items-center gap-4 mt-auto">
                            <img className="w-12 h-12 rounded-full object-cover" data-alt="Headshot of a confident young woman." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBAlbBHV08CnR_FLbnSYsvcTaslA1WU_BzCcKRPt8t7r1jSY7syqFkKlso7dhfwUrmyXjaDdgupUta-BOLU_0q0cqJvAGTwm3me4xmkvnGm4Gout02I6AQgD9ba86dW56WHIDmNgp2_FmY9I4gR_av8Xv3XwMoNSMEpCh0a2Z-xgXXOP0j5kHEN9RXi4yb3fO8yi0Jlw5B4ejrxHen11qGyWwd9wGz5hMqCF613aLJSA1xrxf7GOhPyRaOspwWG_zT759yHPKmQ4LY" />
                            <div>
                                <h4 className="font-bold text-text-primary dark:text-text-light">Samira Chen</h4>
                                <p className="text-sm text-text-secondary dark:text-slate-400">Program Year 2022</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 p-6 rounded-lg bg-surface-light dark:bg-surface-dark border border-slate-200 dark:border-slate-700">
                        <p className="text-text-secondary dark:text-slate-400">"The facilities are incredible, and the competitive schedule prepared me for the pressures of professional trials. First Goal gave me the platform to chase my dream."</p>
                        <div className="flex items-center gap-4 mt-auto">
                            <img className="w-12 h-12 rounded-full object-cover" data-alt="Headshot of a focused young man." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHPwVsGvw20-FK530jk_yxTBETe6wqkLHruqc-JArRd8XXOZobeE1jlcnbjEUOMWsHbyCIrzVBFYXh37NTX_AxKbj1YuSbtDbGstEd_5A_Woyti7sW0v0fN-y561lQ9O7DM33xpLNa2R8WyuXPzcCaVxhNJAfoIPWGZFD8TxcjIpi3tZTkXIXlr3IAZA7bWy2x16T_Ev7CRRi2RnguP7Qyly5TLmH5MqN_mDAAOryU4P3RDGuyW632-FXXiTt5y9dk-FfTR853mbU" />
                            <div>
                                <h4 className="font-bold text-text-primary dark:text-text-light">David Williams</h4>
                                <p className="text-sm text-text-secondary dark:text-slate-400">Program Year 2023</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
