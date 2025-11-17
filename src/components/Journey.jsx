import React from 'react'

export default function Journey() {
    return (
        <div>
            <h2 className="text-[#10487B] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5 mt-10">Our Journey &amp; Milestones</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 mt-10">
                <div className="bg-[#f5f6f8] dark:bg-background-dark rounded-lg p-6 dark:border dark:border-white/10">
                    <h3 className="text-[#10487B] text-lg font-bold mb-3">WE ARE HERE</h3>
                    <ul className="space-y-2 text-sm text-[#606e8a] dark:text-gray-400">
                        <li className="flex items-start"><span className="material-symbols-outlined text-[#10487B] mr-2 text-base">emoji_events</span>Santhosh Trophy</li>
                        <li className="flex items-start"><span className="material-symbols-outlined text-[#10487B] mr-2 text-base">emoji_events</span>TDFA League</li>
                        <li className="flex items-start"><span className="material-symbols-outlined text-[#10487B] mr-2 text-base">emoji_events</span>MDFA League</li>
                        <li className="flex items-start"><span className="material-symbols-outlined text-[#10487B] mr-2 text-base">emoji_events</span>Junior NFC</li>
                        <li className="flex items-start"><span className="material-symbols-outlined text-[#10487B] mr-2 text-base">emoji_events</span>Sub-Junior NFC</li>
                    </ul>
                </div>
                <div className="bg-[#f5f6f8] dark:bg-background-dark rounded-lg p-6 dark:border dark:border-white/10">
                    <h3 className="text-[#10487B] text-lg font-bold mb-3">PARTICIPATIONS</h3>
                    <ul className="space-y-2 text-sm text-[#606e8a] dark:text-gray-400">
                        <li className="flex items-start"><span className="material-symbols-outlined text-[#10487B] mr-2 text-base">sports_soccer</span>Mumbai 3rd division league</li>
                        <li className="flex items-start"><span className="material-symbols-outlined text-[#10487B] mr-2 text-base">sports_soccer</span>BDFA C division league</li>
                        <li className="flex items-start"><span className="material-symbols-outlined text-[#10487B] mr-2 text-base">sports_soccer</span>Porkkalam 2025</li>
                        <li className="flex items-start"><span className="material-symbols-outlined text-[#10487B] mr-2 text-base">sports_soccer</span>Tamil Nadu youth league</li>
                        <li className="flex items-start"><span className="material-symbols-outlined text-[#10487B] mr-2 text-base">sports_soccer</span>TDFA 3rd division league</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
