import React from "react";

const Footer = () => (
  <footer className="border-t border-surface-700 mt-20 py-10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500 font-body">
      <div className="flex items-center gap-2">
        <div className="w-5 h-5 bg-brand-500 rounded flex items-center justify-center">
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
          </svg>
        </div>
        <span className="font-display tracking-wider text-white text-base">BOOKVAULT</span>
      </div>
      <p>
        © 2026 ROHAN SINGH BOOKVAULT. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;