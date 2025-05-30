import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Developer Info */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-blue-400 mb-2">
              MD SHAZAN MAHMUD ARPON
            </h3>
            <p className="text-gray-400 text-sm">Full Stack Developer</p>
          </div>

          {/* Contact Links */}
          <div className="flex flex-wrap justify-center md:justify-end gap-4 text-sm">
            <Link 
              href="https://arpon007.me/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              Portfolio
            </Link>
            <Link 
              href="https://linkedin.com/in/md-shazan-mahmud-arpon" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              LinkedIn
            </Link>
            <Link 
              href="https://fb.com/arpon11241" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              Facebook
            </Link>
            <Link 
              href="https://github.com/arpondark" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              GitHub
            </Link>
            <Link 
              href="mailto:arponarpon007@gmail.com"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              Email
            </Link>
            <Link 
              href="tel:+8801867813388"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              +8801867813388
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-4 pt-4 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Developed by MD Shazan Mahmud Arpon. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;