import React from 'react';

export default function TrainingGrounds() {
    return (
        <div className="px-4 mt-10">
            <h2 className="text-[#10478B] text-[22px] font-bold pb-3">
                FirstGoal FC Training Grounds
            </h2>

            <p className="text-[#10478B] leading-relaxed">
                Ignite your love for football! Choose a training ground close to you and get started with the beautiful game.
                Our Chennai and Trichy centers offer year-round coaching programs for every age group.
                <br /><br />
                Try us out with a free trial session!!!
            </p>

            <div className="overflow-x-auto mt-10">
                <table className="w-full border border-black border-collapse mt-4">

                    {/* HEADER */}
                    <thead>
                        <tr className="bg-[#10478B] text-white font-bold text-left border-b border-black border-dotted">
                            <th className="p-4 border-r border-black border-dotted">City</th>
                            <th className="p-4 border-r border-black border-dotted">Location</th>
                            <th className="p-4 border-r border-black border-dotted">Training Ground</th>
                            <th className="p-4 border-r border-black border-dotted">Age Groups</th>
                            <th className="p-4">Batches</th>
                        </tr>
                    </thead>

                    {/* BODY */}
                    <tbody className="text-[#10478B] font-medium mt-10">

                        {/* ROW 1 */}
                        <tr className="bg-[#E0E0E0] border-b border-[#BDBDBD] border-dotted">
                            <td className="p-4 border-r border-[#BDBDBD] border-dotted">Chennai</td>
                            <td className="p-4 border-r border-[#BDBDBD] border-dotted">Porur</td>
                            <td className="p-4 border-r border-[#BDBDBD] border-dotted">Eleven Seven</td>
                            <td className="p-4 border-r border-[#BDBDBD] border-dotted">
                                5 to 18 years <br />
                                (All Age Groups)
                            </td>
                            <td className="p-4">
                                Weekday Mornings <br />
                                Weekday Evenings <br />
                                Weekend Mornings
                            </td>
                        </tr>

                        {/* ROW 2 */}
                        <tr className="bg-white border-b border-[#BDBDBD] border-dotted">
                            <td className="p-4 border-r border-[#BDBDBD] border-dotted">Chennai</td>
                            <td className="p-4 border-r border-[#BDBDBD] border-dotted">Kovur</td>
                            <td className="p-4 border-r border-[#BDBDBD] border-dotted">S2 Turf</td>
                            <td className="p-4 border-r border-[#BDBDBD] border-dotted">
                                5 to 18 years <br />
                                (All Age Groups)
                            </td>
                            <td className="p-4">
                                Weekday Mornings <br />
                                Weekday Evenings <br />
                                Weekend Mornings
                            </td>
                        </tr>

                        {/* ROW 3 */}
                        <tr className="bg-[#E0E0E0] border-b border-[#BDBDBD] border-dotted">
                            <td className="p-4 border-r border-[#BDBDBD] border-dotted">Chennai</td>
                            <td className="p-4 border-r border-[#BDBDBD] border-dotted">Anakaputhur</td>
                            <td className="p-4 border-r border-[#BDBDBD] border-dotted">SS Sports Village</td>
                            <td className="p-4 border-r border-[#BDBDBD] border-dotted">
                                5 to 18 years <br />
                                (All Age Groups)
                            </td>
                            <td className="p-4">
                                Weekday Mornings <br />
                                Weekday Evenings <br />
                                Weekend Mornings
                            </td>
                        </tr>

                        {/* ROW 4 */}
                        <tr className="bg-white border-b border-[#BDBDBD] border-dotted">
                            <td className="p-4 border-r border-[#BDBDBD] border-dotted">Chennai</td>
                            <td className="p-4 border-r border-[#BDBDBD] border-dotted">Vanagaram</td>
                            <td className="p-4 border-r border-[#BDBDBD] border-dotted">Go Sports Turf</td>
                            <td className="p-4 border-r border-[#BDBDBD] border-dotted">
                                5 to 18 years <br />
                                (All Age Groups)
                            </td>
                            <td className="p-4">
                                Weekday Mornings <br />
                                Weekday Evenings <br />
                                Weekend Mornings
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    );
}
