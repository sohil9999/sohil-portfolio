import { motion } from "framer-motion";
function About() {
  return (
    <motion.section
  id="about"
  className="max-w-7xl mx-auto px-8 py-28"
  initial={{
    opacity: 0,
    x: -100,
  }}
  whileInView={{
    opacity: 1,
    x: 0,
  }}
  transition={{
    duration: 1.2,
  }}
  viewport={{
    once: false,
  }}

    >
      <h2 className="text-5xl font-bold text-cyan-400 mb-12">
        About Me
      </h2>

      <div className="bg-[#0B1120] border border-cyan-500/20 rounded-3xl p-10">
        <p className="text-lg md:text-xl text-gray-300 leading-10">
          I am an AI Engineer with hands-on experience designing and deploying
          Machine Learning, Computer Vision, and Generative AI solutions across
          Healthcare, Education, and Hospitality domains. My expertise spans the
          complete AI development lifecycle, from data collection and preprocessing
          to model training, deployment, and production monitoring.

          <br /><br />

          I have built intelligent systems including AI-powered classroom monitoring,
          neurological disorder detection through gait analysis, and conversational
          AI assistants for restaurant automation. My technical stack includes
          Python, TensorFlow, PyTorch, OpenCV, Django, ReactJS, MongoDB, MySQL,
          LLMs, and Agentic AI frameworks.

          <br /><br />

          I am passionate about solving real-world problems using AI and enjoy
          building scalable applications that combine machine learning models,
          automation workflows, and modern web technologies. My goal is to create
          impactful AI products that improve efficiency, decision-making, and user
          experience while continuously exploring advancements in Generative AI,
          Computer Vision, and Autonomous AI Agents.
        </p>
      </div>
    </motion.section>
  );
}

export default About;