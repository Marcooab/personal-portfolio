import { useState, useEffect, useRef } from "react";
import projects from "../../data/projects";

const SKILL_ICONS_BASE = "https://skillicons.dev/icons?i=";

function CursorPlaceholder({ color }) {
  const [pos, setPos] = useState({ x: 40, y: 40 });
  const [clicking, setClicking] = useState(false);
  const animRef = useRef(null);
  const stepRef = useRef(0);

  const path = [
    { x: 40, y: 40 }, { x: 120, y: 80 }, { x: 200, y: 50 },
    { x: 160, y: 130 }, { x: 80, y: 150 }, { x: 40, y: 40 },
  ];

  useEffect(() => {
    function animate() {
      const current = path[stepRef.current % path.length];
      const next = path[(stepRef.current + 1) % path.length];
      const duration = 900;
      const start = performance.now();

      function step(now) {
        const progress = Math.min((now - start) / duration, 1);
        const eased = progress < 0.5
          ? 2 * progress * progress
          : -1 + (4 - 2 * progress) * progress;
        setPos({
          x: current.x + (next.x - current.x) * eased,
          y: current.y + (next.y - current.y) * eased,
        });
        if (progress < 1) {
          animRef.current = requestAnimationFrame(step);
        } else {
          setClicking(true);
          setTimeout(() => {
            setClicking(false);
            stepRef.current++;
            animate();
          }, 300);
        }
      }
      animRef.current = requestAnimationFrame(step);
    }
    animate();
    return () => cancelAnimationFrame(animRef.current);
  }, []);

  return (
    <div className="relative w-full h-full rounded-t-xl overflow-hidden" style={{ backgroundColor: "#1a1a2e" }}>
      <div className="flex items-center gap-2 px-3 py-2 border-b" style={{ backgroundColor: "#12122a", borderColor: color + "44" }}>
        <div className="w-2.5 h-2.5 rounded-full bg-red-400 opacity-70" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-400 opacity-70" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-400 opacity-70" />
        <div className="flex-1 mx-2 rounded px-2 py-0.5 text-[10px]" style={{ backgroundColor: "#1a1a2e", color: color + "99" }}>
          https://marcooab.github.io/...
        </div>
      </div>
      <div className="p-4 space-y-2">
        <div className="h-3 rounded opacity-40 w-3/4" style={{ backgroundColor: color }} />
        <div className="h-2 rounded opacity-15 w-full" style={{ backgroundColor: color }} />
        <div className="h-2 rounded opacity-15 w-5/6" style={{ backgroundColor: color }} />
        <div className="h-2 rounded opacity-15 w-4/6" style={{ backgroundColor: color }} />
        <div className="flex gap-2 mt-3">
          <div className="h-6 w-16 rounded opacity-40" style={{ backgroundColor: color }} />
          <div className="h-6 w-16 rounded opacity-20" style={{ backgroundColor: color }} />
        </div>
        <div className="h-2 rounded opacity-15 w-full mt-2" style={{ backgroundColor: color }} />
        <div className="h-2 rounded opacity-15 w-3/4" style={{ backgroundColor: color }} />
      </div>
      <div className="absolute pointer-events-none" style={{ left: pos.x, top: pos.y + 32 }}>
        <svg width="20" height="20" viewBox="0 0 20 20"
          className={`transition-transform duration-150 ${clicking ? "scale-75" : "scale-100"}`}>
          <path d="M4 2L16 10L10 11L7 18L4 2Z" fill="white" stroke={color} strokeWidth="1.5" />
        </svg>
        {clicking && (
          <div className="absolute -inset-1 rounded-full opacity-30 animate-ping" style={{ backgroundColor: color }} />
        )}
      </div>
    </div>
  );
}

function ProjectPreview({ project }) {
  if (project.image) {
    return (
      <div className="w-full h-48 overflow-hidden rounded-t-xl">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          style={{ objectPosition: project.imagePosition || "center" }}
        />
      </div>
    );
  }
  return (
    <div className="h-48">
      <CursorPlaceholder color={project.color} />
    </div>
  );
}

function ProjectCard({ project }) {
  return (
    <div
      className="rounded-xl overflow-hidden shadow-xl flex flex-col h-full transition-all duration-300 hover:-translate-y-2"
      style={{ backgroundColor: project.bg, boxShadow: `0 4px 20px ${project.color}22` }}
      onMouseEnter={e => e.currentTarget.style.boxShadow = `0 0 35px ${project.color}55`}
      onMouseLeave={e => e.currentTarget.style.boxShadow = `0 4px 20px ${project.color}22`}
    >
      <div className="h-1 w-full" style={{ backgroundColor: project.color }} />

      <ProjectPreview project={project} />

      <div className="p-5 flex flex-col gap-3 flex-1">
        <h3 className="font-bold text-lg" style={{ color: project.color }}>
          {project.title}
        </h3>
        <p className="text-sm leading-relaxed flex-1 text-gray-300">
          {project.description}
        </p>
        <div className="flex gap-2 items-center flex-wrap">
          {project.techs.map((tech) => (
            <img
              key={tech}
              src={`${SKILL_ICONS_BASE}${tech}`}
              alt={tech}
              className="w-7 h-7 transition-all duration-300 hover:scale-125"
              onMouseEnter={e => e.currentTarget.style.filter = `drop-shadow(0 0 8px ${project.color})`}
              onMouseLeave={e => e.currentTarget.style.filter = "none"}
            />
          ))}
        </div>
        <div className="flex gap-3 mt-1">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center text-sm font-semibold py-2 px-4 rounded-lg transition-all duration-300"
            style={{ border: `1px solid ${project.color}`, color: project.color }}
            onMouseEnter={e => { e.currentTarget.style.backgroundColor = project.color; e.currentTarget.style.color = "#1a1a2e"; }}
            onMouseLeave={e => { e.currentTarget.style.backgroundColor = "transparent"; e.currentTarget.style.color = project.color; }}
          >
            GitHub
          </a>
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center text-sm font-semibold py-2 px-4 rounded-lg text-white transition-all duration-300"
              style={{ backgroundColor: project.color + "33", border: `1px solid ${project.color}55` }}
              onMouseEnter={e => e.currentTarget.style.backgroundColor = project.color + "66"}
              onMouseLeave={e => e.currentTarget.style.backgroundColor = project.color + "33"}
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

function Projects() {
  const [index, setIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const trackRef = useRef(null);
  const windowRef = useRef(null);
  const total = projects.length;
  const extended = [...projects, ...projects, ...projects];
  const offset = total;

  function getStep() {
    if (!windowRef.current) return 0;
    return windowRef.current.offsetWidth / 2;
  }

  function initPosition(idx) {
    const track = trackRef.current;
    if (!track) return;
    const step = getStep();
    track.style.transition = "none";
    track.style.transform = `translateX(${-((offset + idx) * step)}px)`;
  }

  useEffect(() => {
    initPosition(index);
    const handleResize = () => initPosition(index);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function slideTo(newIndex) {
    if (animating) return;
    setAnimating(true);

    const track = trackRef.current;
    if (!track) return;

    const step = getStep();
    const targetTranslate = -((offset + newIndex) * step);

    track.style.transition = "transform 500ms ease-in-out";
    track.style.transform = `translateX(${targetTranslate}px)`;

    setTimeout(() => {
      const normalised = ((newIndex % total) + total) % total;
      setIndex(normalised);
      track.style.transition = "none";
      track.style.transform = `translateX(${-((offset + normalised) * step)}px)`;
      setAnimating(false);
    }, 510);
  }

  return (
    <section id="projects" className="bg-[#2d2d4e] py-16 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4">

        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Projetos</h2>
          <p className="text-[#9090c0]">— O que construí —</p>
        </div>

        <div className="flex items-center gap-4">

          <button
            onClick={() => slideTo(index - 1)}
            disabled={animating}
            className="flex-shrink-0 w-12 h-12 rounded-full bg-[#4a4a7a] text-white text-2xl flex items-center justify-center transition-all duration-300 hover:bg-[#5a5a9a] hover:scale-110 disabled:opacity-50 animate-pulse hover:animate-none"
          >
            ‹
          </button>

          <div ref={windowRef} className="flex-1 overflow-hidden">
            <div
              ref={trackRef}
              className="flex"
              style={{ willChange: "transform" }}
            >
              {extended.map((project, i) => (
                <div key={i} style={{ width: "50%", flexShrink: 0, padding: "0 12px" }}>
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={() => slideTo(index + 1)}
            disabled={animating}
            className="flex-shrink-0 w-12 h-12 rounded-full bg-[#4a4a7a] text-white text-2xl flex items-center justify-center transition-all duration-300 hover:bg-[#5a5a9a] hover:scale-110 disabled:opacity-50 animate-pulse hover:animate-none"
          >
            ›
          </button>

        </div>

        <div className="flex justify-center gap-2 mt-8">
          {projects.map((project, i) => (
            <button
              key={i}
              onClick={() => slideTo(i)}
              className="h-2 rounded-full transition-all duration-300"
              style={{
                width: i === index ? "24px" : "8px",
                backgroundColor: i === index ? project.color : "#4a4a7a",
              }}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;