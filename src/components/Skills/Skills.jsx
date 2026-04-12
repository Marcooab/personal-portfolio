import skills from "../../data/skills";
import personalInfo from "../../data/personalInfo";

const SKILL_ICONS_BASE = "https://skillicons.dev/icons?i=";

function AnthropicIcon() {
  return (
    <div className="w-10 h-10 flex items-center justify-center">
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
        <path d="M13.827 3.52h3.603L24 20h-3.603l-6.57-16.48zm-7.258 0H10.172L16.742 20H13.139L6.57 3.52z" fill="white" />
      </svg>
    </div>
  );
}

function SkillCategory({ category, items }) {
  return (
    <div className="flex flex-col items-center gap-6">
      <h3 className="text-[#9090c0] text-sm font-semibold tracking-widest uppercase border-b border-[#4a4a7a] pb-2 w-full text-center">
        {category}
      </h3>
      <div className="flex flex-wrap justify-center gap-4">
        {items.map((skill) => (
          <div key={skill.name} className="flex flex-col items-center gap-2 group">
            {skill.slug === "anthropic" ? (
              <div className="transition-all duration-300 group-hover:scale-125 group-hover:drop-shadow-[0_0_10px_rgba(144,144,192,0.9)]">
                <AnthropicIcon />
              </div>
            ) : (
              <img
                src={`${SKILL_ICONS_BASE}${skill.slug}`}
                alt={skill.name}
                className="w-10 h-10 transition-all duration-300 group-hover:scale-125 group-hover:drop-shadow-[0_0_10px_rgba(144,144,192,0.9)]"
              />
            )}
            <span className="text-xs text-gray-400 group-hover:text-purple-300 transition-colors duration-300">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

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

        {/* Texto + grid */}
        <div className="flex flex-col md:flex-row gap-12 items-start">

          {/* Coluna esquerda — texto + botão */}
          <div className="md:w-1/3 flex flex-col gap-6">
            <p className="text-gray-400 leading-relaxed text-justify">
              {personalInfo.skillsDescription}
            </p>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#4a4a7a] hover:bg-[#5a5a9a] text-white font-semibold px-6 py-3 rounded transition-colors duration-300 text-center"
            >
              Repositório GITHUB 🐙
            </a>
          </div>

          {/* Coluna direita — 3 categorias */}
          <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map((group) => (
              <SkillCategory
                key={group.category}
                category={group.category}
                items={group.items}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

export default Skills;