import personalInfo from "../../data/personalInfo";

function Hero() {
  return (
    <section className="min-h-screen bg-gray-900 flex items-center justify-center text-center px-4">
      <div>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Olá, eu sou <span className="text-purple-400">{personalInfo.name}</span>
        </h1>
        <p className="text-gray-400 text-lg md:text-xl mb-8">
          Desenvolvedor Web
        </p>
        <a
          href="#contact"
          className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-3 rounded-full transition-colors duration-300"
        >
          Contrata-me
        </a>
      </div>
    </section>
  );
}

export default Hero;