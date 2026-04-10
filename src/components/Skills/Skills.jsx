import skills from "../../data/skills";
import SkillBar from "./SkillBar";
import personalInfo from "../../data/personalInfo";

function Skills() {
  return (
    <section id="skills" className="bg-gray-900 py-16 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4">

        {/* Título */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Especialidades
          </h2>
          <p className="text-[#9090c0]">— O que faço —</p>
        </div>

        {/* Duas colunas */}
        <div className="flex flex-col md:flex-row gap-12">

          {/* Coluna esquerda — texto */}
          <div className="md:w-1/2">
            <h3 className="text-xl font-bold text-white mb-4">
              Minhas Especialidades
            </h3>
            <p className="text-gray-400 leading-relaxed mb-8 text-justify">
              {personalInfo.skillsDescription}
            </p>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#4a4a7a] hover:bg-[#5a5a9a] text-white font-semibold px-6 py-3 rounded transition-colors duration-300"
            >
              Repositório GITHUB 🐙
            </a>
          </div>

          {/* Coluna direita — barras */}
          <div className="md:w-1/2">
            {skills.map((skill) => (
              <SkillBar key={skill.name} name={skill.name} level={skill.level} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

export default Skills;