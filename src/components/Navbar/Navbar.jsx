import useScrollPosition from "../../hooks/useScrollPosition";
import useMobileMenu from "../../hooks/useMobileMenu";

const navLinks = [
  { href: "#home", label: "Inicio" },
  { href: "#about", label: "Sobre" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projetos" },
  { href: "#contact", label: "Contato" },
];

function NavLink({ href, label, onClick }) {
  return (
    <li>
      <a
        href={href}
        onClick={onClick}
        className="relative group text-white text-sm tracking-widest uppercase transition-all duration-300 hover:tracking-[0.2em] px-3 py-1.5 rounded-full"
        onMouseEnter={e => e.currentTarget.style.backgroundColor = "rgba(144, 144, 192, 0.15)"}
        onMouseLeave={e => e.currentTarget.style.backgroundColor = "transparent"}
      >
        {label}
        <span className="absolute -bottom-1 left-0 h-px w-0 bg-purple-300 transition-all duration-300 group-hover:w-full" />
      </a>
    </li>
  );
}

function Navbar() {
  const scrollY = useScrollPosition();
  const { isOpen, toggle } = useMobileMenu();

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrollY > 50 ? "bg-[#4a4a7a] shadow-lg" : "bg-transparent"}`}>

      <div className="w-full px-6 pr-20 pl-20 py-4 flex items-center justify-between">

        <a href="#home" className="flex items-center gap-2 group flex-shrink-0">
  <svg width="24" height="16" viewBox="0 0 24 16" className="rounded-sm opacity-80 group-hover:opacity-100 transition-opacity duration-300">
    <rect width="24" height="16" fill="#009c3b" />
    <polygon points="12,1 23,8 12,15 1,8" fill="#FFDF00" />
    <circle cx="12" cy="8" r="3.5" fill="#002776" />
  </svg>
  <span className="text-white font-mono text-sm tracking-wide group-hover:text-purple-300 transition-colors duration-300">
    &lt;Marco /&gt;
  </span>
</a>

        {/* Links desktop — direita */}
        <ul className="hidden md:flex gap-8 text-white">
          {navLinks.map((link) => (
            <NavLink key={link.href} href={link.href} label={link.label} />
          ))}
        </ul>

        {/* Botão hambúrguer mobile */}
        <button onClick={toggle} className="md:hidden text-white text-2xl">
          {isOpen ? "✕" : "☰"}
        </button>

      </div>

      {/* Menu mobile */}
      {isOpen && (
        <ul className="md:hidden bg-[#4a4a7a] px-6 pb-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <NavLink key={link.href} href={link.href} label={link.label} onClick={toggle} />
          ))}
        </ul>
      )}

    </nav>
  );
}

export default Navbar;