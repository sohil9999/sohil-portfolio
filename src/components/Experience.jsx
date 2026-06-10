function Experience() {
  const experiences = [
    {
      role: "AI Engineer",
      company: "Airobosoft Products and Services Limited",
      duration: "Jan 2025 - Present",
      points: [
        "Designed and deployed production AI systems across Healthcare, Hospitality, and Education sectors.",
        "Built an AI-powered WhatsApp Restaurant Assistant using LLMs, n8n, and WhatsApp Business API.",
        "Developed Smart Classroom Monitoring System using OpenCV, Django, ReactJS, and MongoDB.",
        "Created Neurological Disorder Detection System using gait analysis and machine learning.",
      ],
    },

    {
      role: "AI Engineering Intern",
      company: "Airobosoft Products and Services Limited",
      duration: "Sep 2024 - Dec 2024",
      points: [
        "Worked on ML model development and data preprocessing pipelines.",
        "Built business automation solutions using AI and Python.",
        "Participated in sprint reviews and AI deployment workflows.",
        "Transitioned into a full-time AI Engineer role within 4 months.",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="max-w-7xl mx-auto px-8 py-28"
    >
      <h2 className="text-5xl font-bold text-cyan-400 text-center mb-20">
        Experience
      </h2>
      <section id="experience"
      ></section>

      <div className="relative border-l-2 border-cyan-500 ml-4">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="mb-16 ml-10"
          >
            <div
              className="
              absolute
              w-5
              h-5
              bg-cyan-400
              rounded-full
              -left-[11px]
              "
              style={{
                top: `${index * 280}px`,
              }}
            ></div>

            <div
              className="
bg-[#0B1120]
border border-cyan-500/20
rounded-3xl
p-8
hover:border-cyan-400
hover:shadow-[0_0_40px_rgba(34,211,238,0.25)]
transition-all
duration-300
"
            >
              <h3 className="text-2xl font-bold">
                {exp.role}
              </h3>

              <h4 className="text-cyan-400 mt-2">
                {exp.company}
              </h4>

              <p className="text-gray-400 mt-2 mb-5">
                {exp.duration}
              </p>

              <ul className="space-y-3 text-gray-300">
                {exp.points.map((point, i) => (
                  <li key={i}>
                    • {point}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 mt-6">
  <span className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-300 text-sm">
    Python
  </span>

  <span className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-300 text-sm">
    OpenCV
  </span>

  <span className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-300 text-sm">
    LLMs
  </span>

  <span className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-300 text-sm">
    ReactJS
  </span>

  <span className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-300 text-sm">
    MongoDB
  </span>
</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;