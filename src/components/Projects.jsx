import { FaGithub } from "react-icons/fa";

import aiImage from "../assets/projects/ai.png";
import neuImage from "../assets/projects/neu.gif";
import waiImage from "../assets/projects/wai.webp";

function Projects() {
  const projects = [
    {
      title: "Smart Classroom Monitoring System",
      image: aiImage,
      description:
        "AI-powered classroom monitoring platform featuring face recognition, attendance automation, student behaviour analysis and instructor dashboards.",
      tech: [
        "Python",
        "OpenCV",
        "Django",
        "ReactJS",
        "MongoDB",
      ],
      github:
        "https://github.com/sohil9999/ai-based-smart-classroom-monitoring-system",
      features: [
        "Face Recognition Attendance",
        "Real-Time Monitoring",
        "Behaviour Analysis",
        "Analytics Dashboard",
      ],
    },

    {
      title: "AI Waiter",
      image: waiImage,
      description:
        "Conversational AI assistant for restaurants using LLMs and agentic workflows to automate customer interactions and bookings.",
      tech: [
        "LLMs",
        "n8n",
        "WhatsApp API",
        "Automation",
      ],
      github: "#",
      features: [
        "WhatsApp Integration",
        "Restaurant Automation",
        "Multi-Turn Conversations",
        "Party Hall Booking",
      ],
    },

    {
      title: "Neurological Disorder Detection",
      image: neuImage,
      description:
        "Machine learning and computer vision system for detecting neurological disorders through gait analysis and movement tracking.",
      tech: [
        "Python",
        "OpenCV",
        "Scikit-Learn",
        "Streamlit",
      ],
      github:
        "https://github.com/sohil9999/Neurological_disorder_prediction_and_assisting_paralysis_patients",
      features: [
        "Gait Analysis",
        "Parkinson Detection",
        "Stroke Detection",
        "Assistive Interface",
      ],
    },
  ];

  return (
    <section
      id="projects"
      className="max-w-7xl mx-auto px-8 py-28"
    >
      <h2 className="text-5xl font-bold text-cyan-400 text-center mb-20">
        Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="
            bg-[#0B1120]
            border border-cyan-500/20
            rounded-3xl
            overflow-hidden
            hover:border-cyan-400
            hover:shadow-[0_0_50px_rgba(34,211,238,0.35)]
            hover:-translate-y-3
            transition-all
            duration-300
            h-full
            flex
            flex-col
            "
          >
            <div className="h-2 bg-gradient-to-r from-cyan-400 to-blue-600"></div>

            <img
              src={project.image}
              alt={project.title}
              className="
              w-full
              h-56
              object-cover
              "
            />

            <div className="p-8 flex flex-col flex-grow">
              <h3 className="text-2xl font-bold mb-4">
                {project.title}
              </h3>

              <p className="text-gray-400 leading-7 mb-6">
                {project.description}
              </p>

              <div className="mb-6">
                <h4 className="text-cyan-400 font-semibold mb-3">
                  Key Features
                </h4>

                <ul className="space-y-2">
                  {project.features.map((feature, i) => (
                    <li
                      key={i}
                      className="text-gray-300 text-sm"
                    >
                      ✓ {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((item, i) => (
                  <span
                    key={i}
                    className="
                    px-3
                    py-1
                    bg-cyan-500/10
                    border border-cyan-500/20
                    rounded-full
                    text-cyan-300
                    text-sm
                    "
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-auto">
                {project.github !== "#" ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="
                    inline-flex
                    items-center
                    gap-2
                    px-5
                    py-3
                    bg-gradient-to-r
                    from-cyan-400
                    to-blue-500
                    text-black
                    rounded-xl
                    font-semibold
                    hover:scale-105
                    transition-all
                    duration-300
                    "
                  >
                    <FaGithub />
                    View Project
                  </a>
                ) : (
                  <span
                    className="
                    inline-flex
                    items-center
                    gap-2
                    px-5
                    py-3
                    bg-gray-700
                    text-gray-300
                    rounded-xl
                    font-semibold
                    "
                  >
                    Private Project
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;