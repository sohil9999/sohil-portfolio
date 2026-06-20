import {
  SiPython,
  SiTensorflow,
  SiPytorch,
  SiReact,
  SiDjango,
  SiMongodb,
  SiMysql,
  SiGithub,
} from "react-icons/si";

import { FaRobot, FaBrain, FaDatabase } from "react-icons/fa";
import { MdAnalytics } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { MdOutlineCameraAlt } from "react-icons/md";
import { TbTopologyStar2, TbTopologyStar3 } from "react-icons/tb";
import { BsCpuFill } from "react-icons/bs";
import { BiBarChartAlt2 } from "react-icons/bi";
import { MdDashboard } from "react-icons/md";

function Skills() {
  const categories = [
    {
      title: "Languages & Frameworks",
      skills: [
        { name: "Python", icon: <SiPython size={40} color="#3776AB" /> },
        { name: "SQL", icon: <FaDatabase size={40} color="#4479A1" /> },
      ],
    },

    {
      title: "AI & Machine Learning",
      skills: [
        { name: "PyTorch", icon: <SiPytorch size={40} color="#EE4C2C" /> },
        { name: "Machine Learning", icon: <FaBrain size={40} color="#8B5CF6" /> },
        { name: "Computer Vision", icon: <FaEye size={40} color="#06B6D4" /> },
        {name: "OpenCV",icon: <MdOutlineCameraAlt size={40} color="#10B981" /> },
        { name: "LLMs", icon: <BsCpuFill size={40} color="#F59E0B" /> },
        { name: "Agentic AI", icon: <FaRobot size={40} color="#EF4444" /> },
      ],
    },

    {
      title: "Databases",
      skills: [
        { name: "MongoDB", icon: <SiMongodb size={40} color="#47A248" /> },
        { name: "MySQL", icon: <SiMysql size={40} color="#4479A1" /> },
      ],
    },

    {
  title: "Analytics & Tools",
  skills: [
    {
      name: "GitHub",
      icon: <SiGithub size={40} color="#FFFFFF" />
    },

    {
      name: "Power BI",
      icon: <BiBarChartAlt2 size={40} color="#F2C811" />
    },

    {
      name: "Tableau",
      icon: <MdDashboard size={40} color="#E97627" />
    },

    {
      name: "n8n",
      icon: <TbTopologyStar3 size={40} color="#EA4B71" />
    },
  ],
    }
  ]
  return (
    <section
      id="skills"
      className="max-w-7xl mx-auto px-8 py-28"
    >
      <h2 className="text-5xl font-bold text-cyan-400 text-center mb-20">
        Skills
      </h2>

      <div className="space-y-16">
        {categories.map((category, index) => (
          <div key={index}>
            <h3 className="text-2xl font-semibold text-white mb-8">
              {category.title}
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4gap-6">
              {category.skills.map((skill, idx) => (
                <div
                  key={idx}
                  className="
                  bg-[#0B1120]
                  border border-cyan-500/10
                  rounded-2xl
                  p-6
                  flex flex-col
                  items-center
                  gap-4
                  hover:border-cyan-400
                  hover:shadow-[0_0_25px_rgba(34,211,238,0.25)]
                  hover:-translate-y-2
                  transition-all
                  duration-300
                  "
                >
                  {skill.icon}

                  <h4 className="text-center font-medium">
                    {skill.name}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;