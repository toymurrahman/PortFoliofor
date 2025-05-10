"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Eye, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const links = [
    { name: "Home", path: "/" },
    { name: "About Me", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Skills", path: "/skills" },
    { name: "Education", path: "/education" },
    { name: "Contact", path: "/contact" },
    { name: "Blog", path: "/blog" },
  ];

  const isActive = (path) => pathname === path;

  return (
    <nav className="shadow-sm sticky top-0 bg-[#0f0f0f] z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl">
          <h1 className="italic font-light">Jannatul</h1>
        </Link>
        <div className="hidden md:flex space-x-8 items-center">
          {links.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`${
                isActive(link.path)
                  ? " border-b-2 border-[#FFFFFF]"
                  : "text-gray-400 hover:text-[#FFFFFF]"
              } transition-colors duration-200`}
            >
              {link.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:block">
          <a
            href="https://drive.google.com/file/d/1aWKnOyWlseV0EjhocrQihVMWaRENUOQ5/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="uppercase">
              <Eye /> Resume
            </Button>
          </a>
        </div>
        <button
          className="md:hidden text-[#737373]"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden px-4 pt-2 pb-4 shadow-lg text-center min-h-screen">
          <nav className="flex flex-col space-y-4">
            {links.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                onClick={toggleMenu}
                className={`${
                  isActive(link.path)
                    ? "text-[#FFFFFF] font-medium"
                    : "text-[#737373] hover:text-[#FFFFFF]"
                } transition-colors duration-200`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
