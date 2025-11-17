import React from 'react';

export default function ManagementTeam() {
  const team = [
    {
      name: 'John Doe',
      role: 'Head Coach',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCbZAz-J19cFQvWfeLM7SYIRSHGaukzYQqyaUttNP-YGoTg2zlIS7wkFpGt2bvZW0TbOh5BHcYbuMBn9hLvQRCjzgI0CJ2ezLfMX0cSjunjIGHSiqizkyMqmTd_ZPG8-wWHZmZivN77YtltB10aJwnP8xEStmxMHK-erOIy7NeOTFVeOR4catuVZa7AVxBWo8u-08rU78USxCJgHTwi9vomZGsc9WPIH-1BRwoyYVI4Ub0MXXbRapfiBFUr2cv1kNh0QFxa-35W2go',
    },
    {
      name: 'Jane Smith',
      role: 'Assistant Coach',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDIj2KtZFK1MDjZlqJh9PZQiH3ds_ttKDD7ZdKC-521tnasRMGuHv9bc_i7zqNKrYOqO5coRHz8mg7lT8CLy2cBT0TAy7uFq1kT9j_rshKqcZj9HyIMtg528TgYVT1THgsG1PgQ5__XCJAQuC-XFgj10j22p7sQS9g3qTiYAjrXT8pQqqil0lFK9VeyEzJnruOXYYgO5_2n3-0mNGx6v5t_LoaW5qzCbSpwrvsJXnomx3OAi9B2cslU-223oOP21xBU5DeMdLl3zT0',
    },
    {
      name: 'Michael Brown',
      role: 'Director',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuC1cvQ7hHcUhJir5nXxg0W1w_rtDh5kc1LjZDYtSCnzq5lFHVC-ijP16k_f8uUs163HRb-h3CUVlg3JVYpR9dMZJaxaSdUJQfls67nGy1Dy2TdeWsbyDj_FIUPPm26LEBQwaoQBmv6_jUu7leIn4JroF7cQZxQnS6H94x8X_hE9WV3TDPDCs3NEMpdofvdYRgHvIJrWdp3uMTcL4kulFGoxG8SZSY6sPVL05G7TJAAJ9GTKueEo0-R5ja1tjRx7l_1a4I4VI1zxlLA',
    },
    {
      name: 'Emily White',
      role: 'Youth Director',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDhd5-3j0uarXAmLiuPNmx35ZEGeQKWACpRSo2BHLY01cJ80B1hdPqiyxR5J-fBj9skGiHlfLEOpemhlhQphuS_A0u-P-6tArQPGS0JmhIsy6GbEls-LbriCu4GQIJ2v1KVZKm9ojN2OL35PjwwttAzhkf1Kh8xFpadV_PoA7zZluCs6qD-8K-CKecATN6Og1hv7-J5UT1zT2KCfAi2tHNhnNIKq_7wuLftPBB99hURmA6ZfYR7bE9qxe0CeiPi2j0OQq_PsnkwXL0',
    },
  ];

  return (
    <div>
      <h2 className="text-[#10478B]  text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5 mt-10">
        Team Behind The Team
      </h2>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-4 p-4 mt-10">
        {team.map((member, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center gap-3 p-4 bg-[#f5f6f8] dark:bg-background-dark rounded-lg transition-shadow hover:shadow-lg dark:border border-[#10478B]/10"
          >
            <div
              className="w-24 h-24 bg-center bg-no-repeat bg-cover rounded-full"
              data-alt={`Portrait of ${member.name}, ${member.role}`}
              style={{ backgroundImage: `url(${member.image})` }}
            ></div>
            <div>
              <p className="text-[#10478B]  text-base font-medium leading-normal">
                {member.name}
              </p>
              <p className="text-[#606e8a] dark:text-gray-400 text-sm font-normal leading-normal">
                {member.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
