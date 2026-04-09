import personalInfo from "../../data/personalInfo";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 text-center py-6">
      <p>
        © {new Date().getFullYear()} {personalInfo.name} — Feito com React + Tailwind
      </p>
      <div className="flex justify-center gap-6 mt-3">
        <a href={personalInfo.linkedin} target="_blank" className="hover:text-purple-400 transition-colors">LinkedIn</a>
        <a href={personalInfo.github} target="_blank" className="hover:text-purple-400 transition-colors">GitHub</a>
      </div>
    </footer>
  );
}

export default Footer;