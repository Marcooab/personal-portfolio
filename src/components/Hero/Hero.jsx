import { useEffect, useRef } from "react";
import Typed from "typed.js";
import personalInfo from "../../data/personalInfo";

function Hero() {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        "Desenvolvedor Web Full Stack",
        "Formado em Análise e Desenvolvimento de Sistemas",
        "AI Enthusiast",
      ],
      typeSpeed: 80,
      backSpeed: 50,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/background.jpeg')" }}
    >
      <div className="flex-1 flex items-center px-16">
        <div className="text-white">
          <p className="text-lg md:text-xl mb-2">Olá, meu nome é</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            {personalInfo.name}
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Eu sou{" "}
            <span ref={typedRef} className="text-purple-400"></span>
          </p>
          <a
            href="#contact"
            className="bg-[#4a4a7a] hover:bg-[#5a5a9a] text-white font-semibold px-8 py-3 rounded transition-colors duration-300"
          >
            Contratar-me
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
