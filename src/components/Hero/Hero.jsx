import { useEffect, useRef, useState } from "react";
import Typed from "typed.js";
import personalInfo from "../../data/personalInfo";

const techIcons = [
  { slug: "html", label: "HTML" },
  { slug: "css", label: "CSS" },
  { slug: "js", label: "JavaScript" },
  { slug: "react", label: "React" },
  { slug: "nodejs", label: "Node.js" },
  { slug: "tailwind", label: "Tailwind" },
];

function AnthropicLogo() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.827 3.52h3.603L24 20h-3.603l-6.57-16.48zm-7.258 0H10.172L16.742 20H13.139L6.57 3.52z" fill="white" />
    </svg>
  );
}

const strings = [
  "Desenvolvedor Web Full Stack",
  "Formado em Análise e Desenvolvimento de Sistemas",
  "AI Enthusiast",
];

const iconsMap = {
  "Desenvolvedor Web Full Stack": techIcons.map((t) => (
    <img key={t.slug} src={`https://skillicons.dev/icons?i=${t.slug}`} alt={t.label} className="w-5 h-5" />
  )),
  "Formado em Análise e Desenvolvimento de Sistemas": [
    <span key="laptop" className="text-xl">💻</span>,
    <span key="book" className="text-xl">📚</span>,
  ],
  "AI Enthusiast": [
    <span key="robot" className="text-xl">🤖</span>,
    <AnthropicLogo key="anthropic" />,
  ],
};

function InlineIcons({ icons, visibleCount }) {
  if (!icons || icons.length === 0) return null;
  return (
    <span className="inline-flex items-center gap-1.5 ml-2 align-middle">
      {icons.map((icon, i) => (
        <span
          key={i}
          className="transition-all duration-300"
          style={{
            opacity: i < visibleCount ? 1 : 0,
            transform: i < visibleCount ? "translateY(0) scale(1)" : "translateY(6px) scale(0.7)",
            pointerEvents: "none",
          }}
        >
          {icon}
        </span>
      ))}
    </span>
  );
}

function Hero() {
  const typedRef = useRef(null);
  const [visibleCount, setVisibleCount] = useState(0);
  const [currentIcons, setCurrentIcons] = useState([]);

  const timeoutsRef = useRef([]);
  const stateRef = useRef("idle"); // idle | showing | shown | hiding
  const iconsRef = useRef([]);
  const visibleCountRef = useRef(0);

  function clearTimeouts() {
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];
  }

  function setVisible(count) {
    visibleCountRef.current = count;
    setVisibleCount(count);
  }

  function showIcons(icons) {
    clearTimeouts();
    stateRef.current = "showing";
    iconsRef.current = icons;
    setCurrentIcons(icons);
    setVisible(0);

    icons.forEach((_, i) => {
      const t = setTimeout(() => {
        setVisible(i + 1);
        if (i === icons.length - 1) stateRef.current = "shown";
      }, i * 200);
      timeoutsRef.current.push(t);
    });
  }

  function hideIcons(onDone) {
    const icons = iconsRef.current;
    if (!icons || icons.length === 0) {
      onDone?.();
      return;
    }

    clearTimeouts();
    stateRef.current = "hiding";
    const total = icons.length;

    for (let i = 0; i < total; i++) {
      const t = setTimeout(() => {
        setVisible(total - i - 1);
      }, i * 120);
      timeoutsRef.current.push(t);
    }

    const t = setTimeout(() => {
      setCurrentIcons([]);
      setVisible(0);
      iconsRef.current = [];
      stateRef.current = "idle";
      onDone?.();
    }, total * 120 + 150);
    timeoutsRef.current.push(t);
  }

  useEffect(() => {
    let lastText = "";
    let lastLength = 0;

    const typed = new Typed(typedRef.current, {
      strings,
      typeSpeed: 80,
      backSpeed: 50,
      loop: true,
      preStringTyped: () => {
        // nova frase vai começar a ser escrita — esconde ícones primeiro
        if (stateRef.current !== "idle") {
          hideIcons();
        }
      },
      onStringTyped: (arrayPos) => {
        // frase terminou de ser escrita — mostra ícones
        const icons = iconsMap[strings[arrayPos]];
        if (icons) showIcons(icons);
      },
    });

    // MutationObserver para detectar quando começa a apagar
    const observer = new MutationObserver(() => {
      const el = typedRef.current;
      if (!el) return;
      const text = el.textContent.replace("|", "").trim();

      const isDeleting = text.length < lastLength;

      if (isDeleting && stateRef.current === "shown") {
        hideIcons();
      }

      lastText = text;
      lastLength = text.length;
    });

    if (typedRef.current) {
      observer.observe(typedRef.current, { childList: true, subtree: true, characterData: true });
    }

    return () => {
      typed.destroy();
      observer.disconnect();
      clearTimeouts();
    };
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
          <p className="text-lg md:text-xl mb-8 flex items-center flex-wrap">
            Eu sou{" "}
            <span ref={typedRef} className="text-purple-400 ml-1" />
            <InlineIcons icons={currentIcons} visibleCount={visibleCount} />
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