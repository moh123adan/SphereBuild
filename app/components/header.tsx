"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // Smooth scroll handler
  const handleScroll = (e: React.MouseEvent, targetId: string) => {
    e.preventDefault(); // Prevent the default behavior (which changes the URL)

    // Scroll to the target section
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    // Optionally, update the URL without the hash (remove the hash from the URL)
    window.history.pushState(null, "", window.location.pathname);
  };

  return (
    <header className="flex fixed top-0 left-0 right-0 z-50 flex-col md:flex-row w-full">
      {/* Logo Section */}
      <div className="bg-[#F7C94B] py-6 px-4 md:w-[350px] flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logo1.png"
            alt="Sphere Constructions Logo"
            width={40}
            height={40}
            className="w-10 h-10"
          />
          <div className="flex flex-col">
            <span className="font-bold text-3xl text-[#1F2937]">SPHERE</span>
            <span className="text-sm text-[#1F2937]">CONSTRUCTIONS</span>
          </div>
        </Link>
      </div>

      {/* Navigation Section */}
      <nav className="bg-[#1F2937] w-full">
        {/* Mobile Menu Button */}
        <div className="md:hidden p-4">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white"
            aria-label="Toggle menu"
            aria-expanded={isOpen ? "true" : "false"}
          >
            <Menu size={24} />
          </button>
        </div>

        {/* Navigation Links */}
        <div className={`${isOpen ? "block" : "hidden"} md:block`}>
          <ul className="flex flex-col md:flex-row md:justify-end md:h-full md:items-center md:pr-8 gap-4 mt-4 p-4 md:p-0">
            {["home", "services", "about", "projects", "contact", "footer"].map(
              (item) => (
                <li key={item}>
                  <button
                    onClick={(e) => handleScroll(e, item)} // Handle the scroll
                    id={`nav-${item}`}
                    className="text-white hover:text-[#F7C94B] transition-colors duration-200 block py-2 md:py-6"
                  >
                    {item.toUpperCase()}
                  </button>
                </li>
              )
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
}
