import personalInfo from "../../data/personalInfo";

function About() {
  return (
    <section id="about" className="bg-white pt-12 pb-0 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 pt-12">

        {/* Título */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Sobre
          </h2>
          <p className="text-[#4a4a7a] font-medium">— Quem sou eu —</p>
        </div>

        {/* Conteúdo duas colunas */}
        <div className="flex flex-col md:flex-row gap-12 items-start">
          
          {/* Foto */}
          <div className="md:w-1/2">
            <img
              src="/images/profile.jpg"
              alt="Marco Aurélio Ricardo"
              className="w-2/3 object-cover rounded-md mt-[-24px]"
            />
          </div>

          {/* Texto */}
          <div className="md:w-1/2">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Meu nome é Marco e sou
            </h3>
            <p className="text-gray-700 leading-relaxed mb-8 text-justify">
              {personalInfo.about}
            </p>
            <a
              href="/docs/cv.pdf"
              download
              className="bg-[#4a4a7a] hover:bg-[#5a5a9a] text-white font-semibold px-8 py-3 transition-colors duration-300 rounded"
            >
              Download CV
            </a>
          </div>

        </div>
      </div>
      {/* Wave para Skills */}
<div className="overflow-hidden leading-none block mb-[-1px]">
  <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ width: "101%", marginLeft: "-0.5%" }}>
    <path fill="#111827" d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" />
  </svg>
</div>
    </section>
  );
}

export default About;