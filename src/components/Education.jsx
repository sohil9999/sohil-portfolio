function Education() {
  const education = [
    {
      title: "B.E Artificial Intelligence & Data Science",
      institute: "Coorg Institute of Technology",
      year: "2022 - 2026",
      score: "CGPA: 7.5 / 10",
    },

    {
      title: "Pre-University (PCMB)",
      institute: "Government PU College, Kudige",
      year: "2020 - 2022",
      score: "70%",
    },

    {
      title: "SSLC",
      institute: "St. Michael's High School",
      year: "2020",
      score: "82%",
    },
  ];

  return (
    <section
      id="education"
      className="max-w-7xl mx-auto px-8 py-28"
    >
      <h2 className="text-5xl font-bold text-cyan-400 text-center mb-20">
        Education
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {education.map((item, index) => (
          <div
            key={index}
            className="
            bg-[#0B1120]
            border border-cyan-500/20
            rounded-3xl
            p-8
            hover:border-cyan-400
            hover:shadow-[0_0_30px_rgba(34,211,238,0.25)]
            transition-all
            "
          >
            <h3 className="text-xl font-bold mb-3">
              {item.title}
            </h3>

            <p className="text-cyan-400">
              {item.institute}
            </p>

            <p className="text-gray-400 mt-3">
              {item.year}
            </p>

            <p className="text-white mt-3">
              {item.score}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;