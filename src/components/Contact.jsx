import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="max-w-6xl mx-auto px-8 py-28"
    >
      <h2 className="text-5xl font-bold text-cyan-400 text-center mb-16">
        Contact Me
      </h2>

      <div
        className="
        bg-[#0B1120]
        border border-cyan-500/20
        rounded-3xl
        p-10
        text-center
        "
      >
        <h3 className="text-3xl font-bold mb-6">
          Let's Build Something Amazing
        </h3>

        <p className="text-gray-400 mb-10">
          Open to AI Engineer, Machine Learning Engineer,
          Computer Vision Engineer and GenAI opportunities.
        </p>

        <div className="space-y-5 text-lg">

          <div className="flex items-center justify-center gap-3">
            <FaEnvelope className="text-cyan-400" />
            <span>sohilathara@gmail.com</span>
          </div>

          <div className="flex items-center justify-center gap-3">
            <FaPhone className="text-cyan-400" />
            <span>+91 9743838561 </span>
          </div>

          <div className="flex justify-center gap-6 text-3xl mt-8">

            <a
              href="https://github.com/sohil9999"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>

            <a
              href="YOUR_LINKEDIN_URL"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;