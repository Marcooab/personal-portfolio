import personalInfo from "../../data/personalInfo";

function Footer() {
  return (
    <footer className="bg-black text-gray-400 text-center py-6">
      <p>
        Criado por{" "}
        <a
          href={personalInfo.github}
          target="_blank"
          className="text-[#9090c0] hover:text-purple-400 transition-colors"
        >
          Marco Ricardo
        </a>
        {" "}| Todos os direitos reservados {new Date().getFullYear()}
      </p>
    </footer>
  );
}

export default Footer;