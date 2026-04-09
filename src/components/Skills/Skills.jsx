import skills from "../../data/skills";
import SkillBar from "./SkillBar";
import personalInfo from "../../data/personalInfo";

function Skills() {
  return (
    <section id="skills" className="bg-gray-900 py-20 px-4">
      <div className="max-w-3xl mx-auto">

        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
          Minhas <span className="text-purple-400">Skills</span>
        </h2>

        <p className="text-gray-400 text-center mb-12">
          {personalInfo.skillsDescription}
        </p>

        {skills.map((skill) => (
          <SkillBar key={skill.name} name={skill.name} level={skill.level} />
        ))}

      </div>
    </section>
  );
}

export default Skills;