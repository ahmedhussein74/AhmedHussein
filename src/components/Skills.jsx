import AOS from "aos";
import "aos/dist/aos.css";
import "../style/Skills.css";
import { useEffect } from "react";

const Skills = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const skills = [
    "HTML",
    "CSS",
    "Javascript",
    "SASS",
    "Bootstrap",
    "AJAX",
    "JSON",
    "React",
    "Tailwind",
    "Redux",
    "Material UI",
    "MySQL",
    "Node",
    "Express",
    "MongoDB",
  ];

  return (
    <section id="skills" className="py-12">
      <h1 className="text-white text-center text-2xl md:text-3xl">
        Skills
      </h1>
      <div className="skills w-full gap-12 justify-center py-8">
        {skills.map((val, index) => (
          <span
            key={index}
            className="p-2 py-3 text-xl rounded text-white text-center"
            data-aos="zoom-in"
          >
            {val}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Skills;
