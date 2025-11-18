import logo from "../assets/fgfclogo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#10487B] text-white rounded-b w-full py-12 px-6 sm:px-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
        {/* Logo and About */}
        <div className="col-span-2 md:col-span-4 lg:col-span-2 flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <img
              src={logo}
              alt="First Goal FC Logo"
              className="h-10 w-10 object-contain"
            />
            <h2 className="text-xl font-bold text-white">First Goal FC</h2>
          </div>
          <p className="text-sm text-gray-300">
            Nurturing young talent and promoting grassroots football in our
            community.
          </p>
        </div>

        {/* Navigation */}
        <div className="flex flex-col">
          <h3 className="text-base font-bold text-white">Quick Links</h3>
          <nav className="mt-4 flex flex-col gap-2">
            {[
              { name: "Home", path: "/" },
              { name: "Residential", path: "/residential" },
              { name: "Grassroots", path: "/grassroots" },
              { name: "Program", path: "/program" },
              { name: "Team", path: "/team" },
            ].map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-sm text-gray-300 hover:text-white transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* Media */}
        <div className="flex flex-col">
          <h3 className="text-base font-bold text-white">Media</h3>
          <nav className="mt-4 flex flex-col gap-2">
            {["Videos", "Images", "Contact"].map((item) => (
              <a
                key={item}
                href={item === 'Videos' ? "https://www.youtube.com/channel/UCwumbbnS67nTqXGB_su0XGw" : item === 'Images' ? 'https://www.instagram.com/first_goal_fc/?hl=en' : '/contact'}
                className={"text-sm text-gray-300 hover:text-white"}
                target={item === 'Videos' ? "_blank" : item === 'Images' ? "_blank" : ""}
              >
                {item}
              </a>
            ))}
          </nav>
        </div>

        {/* Contact Us */}
        <div className="col-span-2 md:col-span-4 lg:col-span-2 flex flex-col">
          <h3 className="text-base font-bold text-white">Contact Us</h3>
          <div className="mt-4 flex flex-col gap-3 text-sm text-gray-300">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-base">email</span>
              <span>firstgoalfc@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-base">phone</span>
              <span>+91 97106 60603</span>
            </div>

            {/* Social Media */}
            <div className="mt-2 flex gap-4">
              {/* Facebook */}
              <a
                aria-label="Facebook"
                href="https://www.facebook.com/Firstgoalfc/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-all duration-200 text-white"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/facebook.svg"
                  alt="Facebook"
                  className="h-6 w-6"
                  style={{ filter: 'invert(32%) sepia(99%) saturate(3491%) hue-rotate(203deg) brightness(97%) contrast(91%)' }}
                />
              </a>

              {/* Instagram */}
              <a
                aria-label="Instagram"
                href="https://www.instagram.com/first_goal_fc/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-all duration-200"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/instagram.svg"
                  alt="Instagram"
                  className="h-6 w-6 rounded-full"
                  style={{
                    background:
                      'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)',
                    padding: '3px',
                  }}
                />
              </a>

              {/* YouTube */}
              <a
                aria-label="YouTube"
                href="https://www.youtube.com/channel/UCwumbbnS67nTqXGB_su0XGw"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-all duration-200"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/youtube.svg"
                  alt="YouTube"
                  className="h-6 w-6"
                  style={{ filter: 'invert(16%) sepia(90%) saturate(7430%) hue-rotate(358deg) brightness(103%) contrast(117%)' }}
                />
              </a>

              {/* LinkedIn */}
              <a
                aria-label="LinkedIn"
                href="https://www.linkedin.com/company/first-goal-football-club/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-all duration-200"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/linkedin.svg"
                  alt="LinkedIn"
                  className="h-6 w-6"
                  style={{ filter: 'invert(27%) sepia(85%) saturate(2288%) hue-rotate(191deg) brightness(93%) contrast(92%)' }}
                />
              </a>
            </div>


          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="mt-10 border-t border-white pt-6 text-center">
        <p className="text-sm text-gray-400">
          © 2025 First Goal Football Club. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
