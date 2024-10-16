import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-gray-900 text-gray-50 py-6">
      <div className="md:max-w-screen-lg mx-auto text-center">
        <p className="text-sm mb-4">
          &copy; {new Date().getFullYear()} Jatin Dhamija. All rights reserved.
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="mailto:jatindhamija025@gmail.com"
            className="hover:text-cyan-500 transition"
            aria-label="Email Me"
          >
            <FaEnvelope size={24} />
          </a>
          <a
            href="https://github.com/JatinDhamija816"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-500 transition"
            aria-label="GitHub Profile"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/jatin-dhamija-971309252"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-500 transition"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
