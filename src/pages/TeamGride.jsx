import React from "react";

const teams = [
  {
    name: "First Goal U-9 Lions",
    subtitle: "Coached by John Smith",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCF6S2PVvC9wysqcpEdpPgj-VuC32AiYpyrhW0bS9sYXeJCmy7wwRE1Q2ZdqnX3VH8e1T3WjXQRzyDrlnloNWHhKQQVEUgEzbyLlUVcDxZqMwYrBgNKgRTllxooMPpzLYNfO4winyJo4Mua7LTusiRwVazpJ9kN-aUbm0SwqFq1ueYhhxqERHV16fdx3JTRbYlVBkJcLX0PITdgzIlcj2CTLabFblLAfuco-pgLRIdKVoZHARj5OaYhMPelenrPnV8MEtW0EFTRd3I",
  },
  {
    name: "First Goal U-9 Tigers",
    subtitle: "League Runners-Up 2023",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBG0bzIwXDkEjBEtsYeivx6sSYLsXAnX12aX_e6wKhutOIjjVK3o5y7Kt4_ZfXNXdxqBTlv9jsO3l8F-qtf33aVNpFMsjKe1MzGbglB3SW6jvKJNF7NLg1rYhICa4WgGc3fqjq_1pZBCj1Qy6hsNTzPdYhHWF7OLfk--QPcN0VGf2alAgVMj_1doAd9cdJX6jp_2tlpFUzLPk1sGN7fEZVhtNAgbrgZ-3p4KRk8sy4d2nZv45Cwb8Bfx-AlHoOg0Xh1Xfz-6rd7s3I",
  },
  {
    name: "First Goal U-11 Eagles",
    subtitle: "Division 2 Champions 2023",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAOTuLbTm9RzpQyDh0tpvWezOAjJ6e5JDmYRH_7tGGfe0uIe014Q4aFamot7qzSxWJqCvM51VxT1ovZ0io-7cQk6tmtju9CBbv7-P4NBQQVVoWmFld2HbM_IHlLi9BztlpCk1nSzagjINwAlKaMXO_6nBM995DatbnN9g7RBkmidadbBjuDoMcnOxLMlMixvTNdL-v30VjEY8uIeHY33vSV07ClAgXJhkQl8pDARhPhzXN7cNTRirGr2yl5e9mO1ETNTsucNK3yXWI",
  },
  {
    name: "First Goal U-9 Lions",
    subtitle: "Coached by John Smith",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCF6S2PVvC9wysqcpEdpPgj-VuC32AiYpyrhW0bS9sYXeJCmy7wwRE1Q2ZdqnX3VH8e1T3WjXQRzyDrlnloNWHhKQQVEUgEzbyLlUVcDxZqMwYrBgNKgRTllxooMPpzLYNfO4winyJo4Mua7LTusiRwVazpJ9kN-aUbm0SwqFq1ueYhhxqERHV16fdx3JTRbYlVBkJcLX0PITdgzIlcj2CTLabFblLAfuco-pgLRIdKVoZHARj5OaYhMPelenrPnV8MEtW0EFTRd3I",
  },
  {
    name: "First Goal U-9 Tigers",
    subtitle: "League Runners-Up 2023",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBG0bzIwXDkEjBEtsYeivx6sSYLsXAnX12aX_e6wKhutOIjjVK3o5y7Kt4_ZfXNXdxqBTlv9jsO3l8F-qtf33aVNpFMsjKe1MzGbglB3SW6jvKJNF7NLg1rYhICa4WgGc3fqjq_1pZBCj1Qy6hsNTzPdYhHWF7OLfk--QPcN0VGf2alAgVMj_1doAd9cdJX6jp_2tlpFUzLPk1sGN7fEZVhtNAgbrgZ-3p4KRk8sy4d2nZv45Cwb8Bfx-AlHoOg0Xh1Xfz-6rd7s3I",
  },
];

export default function TeamGrid() {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-6 p-4">
      {teams.map((team, index) => (
        <div key={index} className="flex flex-col gap-3 pb-3 group cursor-pointer">
          <div className="w-full bg-center bg-no-repeat aspect-[3/4] bg-cover rounded-xl overflow-hidden">
            <div
              className="w-full h-full bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
              style={{ backgroundImage: `url(${team.img})` }}
            ></div>
          </div>

          <div>
            <p className="text-base font-bold leading-normal">{team.name}</p>
            <p className="text-sm font-normal leading-normal text-slate-600 dark:text-slate-400">
              {team.subtitle}
            </p>
            <a className="text-sm font-medium leading-normal text-secondary mt-1" href="#">
              View Roster
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
