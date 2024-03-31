import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaGithub,
  FaCode,
  FaHackerrank,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8">
      <div className="container mx-auto flex gap-3   flex-col justify-center   items-center">
        <div className="flex items-center space-x-4">
          <a
            href="https://www.facebook.com/tanvir12islam34"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="w-6 h-6" />
          </a>
          <a
            href="https://www.instagram.com/tanvir__islam__"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="w-6 h-6" />
          </a>
          <a
            href="https://youtube.com/@tanvir12"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube className="w-6 h-6" />
          </a>
          <a
            href="https://github.com/Tanvir-136"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="w-6 h-6" />
          </a>
          <a
            href="https://codeforces.com/profile/tanvir_islam"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaCode className="w-6 h-6" />
          </a>
          <a
            href="https://www.hackerrank.com/profile/tanvir_islam__"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaHackerrank className="w-6 h-6" />
          </a>
        </div>
        <div>
          <p className="text-sm">
            &copy; 2024 Your Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
