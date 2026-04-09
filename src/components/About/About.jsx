import personalInfo from "../../data/personalInfo";

function About() {
  return (
    <section id="about" className="bg-gray-800 py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
          Sobre <span className="text-purple-400">Mim</span>
        </h2>

        <p className="text-gray-400 text-lg leading-relaxed mb-8">
          {personalInfo.about}
        </p>

        <a
          href="/docs/cv.pdf"
          download
          className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-3 rounded-full transition-colors duration-300"
        >
          Download CV
        </a>

      </div>
    </section>
  );
}

export default About;