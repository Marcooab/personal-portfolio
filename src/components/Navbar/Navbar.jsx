import useScrollPosition from "../../hooks/useScrollPosition";
import useMobileMenu from "../../hooks/useMobileMenu";
import personalInfo from "../../data/personalInfo";

function Navbar() {
  const scrollY = useScrollPosition();
  const { isOpen, toggle } = useMobileMenu();

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrollY > 50 ? "shadow-lg" : ""} bg-[#4a4a7a]`}>
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        
        {/* Logo */}
       <span className="text-white font-bold text-xl flex items-center gap-2">
        <img src="/images/brazil.png" alt="Brasil" className="w-5 h-3 object-cover rounded-sm" />
        {personalInfo.name}
        </span>

        {/* Links desktop */}
        <ul className="hidden md:flex gap-8 text-white">
          <li><a href="#home" className="hover:text-purple-300 transition-colors">Inicio</a></li>
          <li><a href="#about" className="hover:text-purple-300 transition-colors">Sobre</a></li>
          <li><a href="#skills" className="hover:text-purple-300 transition-colors">Skills</a></li>
          <li><a href="#contact" className="hover:text-purple-300 transition-colors">Contato</a></li>
        </ul>

        {/* Botão hambúrguer mobile */}
        <button onClick={toggle} className="md:hidden text-white text-2xl">
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Menu mobile */}
      {isOpen && (
        <ul className="md:hidden bg-[#4a4a7a] px-4 pb-4 flex flex-col gap-4 text-white">
          <li><a href="#home" onClick={toggle} className="hover:text-purple-300 transition-colors">Inicio</a></li>
          <li><a href="#about" onClick={toggle} className="hover:text-purple-300 transition-colors">Sobre</a></li>
          <li><a href="#skills" onClick={toggle} className="hover:text-purple-300 transition-colors">Skills</a></li>
          <li><a href="#contact" onClick={toggle} className="hover:text-purple-300 transition-colors">Contato</a></li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
