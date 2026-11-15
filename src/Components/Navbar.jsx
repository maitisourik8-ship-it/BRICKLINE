
import { useState } from "react";
import {
  Menu,
  X,
  ChevronDown,
  ArrowUpRight,
} from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "PROJECTS", href: "#projects", dropdown: true },
    { name: "SERVICES", href: "#services" },
    { name: "ABOUT US", href: "#about" },
  ];

  const rightLinks = [
    { name: "PROPERTIES", href: "#properties", dropdown: true },
    { name: "LOAN", href: "#loan" },
  ];

  const NavLink = ({ item }) => (
    <a
      href={item.href}
      onClick={() => setIsOpen(false)}
      className="group flex items-center gap-1 py-2 text-[11px] font-medium tracking-wider text-white/85 transition-colors duration-300 hover:text-orange-400"
    >
      {item.name}
      {item.dropdown && (
        <ChevronDown
          size={13}
          className="transition-transform duration-300 group-hover:rotate-180"
        />
      )}
      <span className="absolute bottom-0 h-px w-0 bg-orange-500 transition-all duration-300 group-hover:w-full" />
    </a>
  );

  return (
    <nav className="absolute left-0 top-0 z-50 w-full border-b border-white/20 bg-white/10 px-5 text-white backdrop-blur-md md:px-8">

      <div className="mx-auto flex h-[75px] max-w-[1500px] items-center justify-between">

        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map((item) => (
            <NavLink key={item.name} item={item} />
          ))}
        </div>

        <a
          href="#home"
          className="text-xl font-bold tracking-[2px] lg:hidden"
        >
          BRICKLINE<span className="text-orange-500">.</span>
        </a>

        <a
          href="#home"
          className="absolute left-1/2 hidden -translate-x-1/2 text-2xl font-bold tracking-[2px] transition-transform duration-300 hover:scale-105 lg:block"
        >
          BRICKLINE<span className="text-orange-500">.</span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {rightLinks.map((item) => (
            <NavLink key={item.name} item={item} />
          ))}

          <a
            href="#contact"
            className="group flex items-center gap-2 bg-orange-600 px-5 py-3 text-[11px] font-semibold tracking-wide transition-all duration-300 hover:bg-white hover:text-orange-600"
          >
            CONTACT US
            <ArrowUpRight
              size={14}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded border border-white/30 p-2 transition-all duration-300 hover:bg-orange-600 lg:hidden"
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={23} /> : <Menu size={23} />}
        </button>

      </div>

      <div
        className={`overflow-hidden bg-gray-950/95 transition-all duration-500 ease-in-out lg:hidden ${
          isOpen
            ? "max-h-[450px] border-t border-white/20 opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-1 px-5 py-4">

          {[...navLinks, ...rightLinks].map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-between border-b border-white/10 py-4 text-xs tracking-widest text-white/90 transition-colors hover:pl-2 hover:text-orange-400"
            >
              {item.name}
              {item.dropdown && <ChevronDown size={14} />}
            </a>
          ))}

          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="mt-3 flex items-center justify-center gap-2 bg-orange-600 py-4 text-xs font-semibold"
          >
            CONTACT US
            <ArrowUpRight size={15} />
          </a>

        </div>
      </div>

    </nav>
  );
}

export default Navbar;
