import { FaJs, FaReact, FaNodeJs, FaGitAlt, FaCloud } from "react-icons/fa";
import { SiPostman } from "react-icons/si";
import {
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiFirebase,
  SiExpress,
} from "react-icons/si";

const Skills = () => {
  const skillData = [
    { name: "JavaScript", icon: <FaJs size={30} />, category: "" },
    {
      name: "TypeScript",
      icon: <SiTypescript size={30} />,
      category: "",
    },
    { name: "React", icon: <FaReact size={30} />, category: "Frontend" },
    { name: "React Native", icon: <FaReact size={30} />, category: "Frontend" },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss size={30} />,
      category: "Frontend",
    },
    { name: "Node.js", icon: <FaNodeJs size={30} />, category: "Backend" },
    { name: "Express", icon: <SiExpress size={30} />, category: "Backend" },
    { name: "JWT", icon: <FaCloud size={30} />, category: "Backend" },
    { name: "MongoDB", icon: <SiMongodb size={30} />, category: "Databases" },
    { name: "Firebase", icon: <SiFirebase size={30} />, category: "Databases" },
    {
      name: "Cloud Firestore",
      icon: <SiFirebase size={30} />,
      category: "Databases",
    },
    { name: "Cloudinary", icon: <FaCloud size={30} />, category: "Others" },
    { name: "Git", icon: <FaGitAlt size={30} />, category: "Others" },
    { name: "Postman", icon: <SiPostman size={30} />, category: "Others" },
  ];

  return (
    <div
      id="skills"
      className="bg-gray-800 min-h-screen flex items-center justify-center"
    >
      <div className="py-10 px-7 md:max-w-screen-lg">
        <p className="text-gray-50 text-2xl font-semibold py-10">Skills</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skillData.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-900 p-5 rounded-lg flex flex-col items-center text-center transform transition hover:scale-105 duration-300"
            >
              <div className="text-cyan-500 mb-3">{skill.icon}</div>
              <h3 className="text-gray-50 text-xl font-semibold">
                {skill.name}
              </h3>
              <p className="text-gray-400 text-sm mt-2">{skill.category}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
