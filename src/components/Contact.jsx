import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="max-w-7xl mx-auto px-8 py-28"
    >
      <h2 className="text-5xl font-bold text-cyan-400 text-center mb-20">
        Contact 
      </h2>

      <div
        className="
        max-w-4xl
        mx-auto
        bg-[#0B1120]
        border border-cyan-500/20
        rounded-3xl
        p-10
        "
      >
        <div className="space-y-8">

          <div className="flex items-center gap-4">
            <FaEnvelope className="text-cyan-400" size={24} />
            <span className="text-lg">
              sohilathara@gmail.com
            </span>
          </div>

          <div className="flex items-center gap-4">
            <FaPhone className="text-cyan-400" size={24} />
            <span className="text-lg">
              +91 97438 38561
            </span>
          </div>

          <div className="flex items-center gap-4">
            <FaMapMarkerAlt className="text-cyan-400" size={24} />
            <span className="text-lg">
              Bengaluru, Karnataka, India
            </span>
          </div>

          <div className="flex gap-6 pt-6">

            <a
              href="https://github.com/sohil9999"
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-400 transition"
            >
              <FaGithub size={32} />
            </a>

            <a
              href="https://linkedin.com/in/sohilathar"
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-400 transition"
            >
              <FaLinkedin size={32} />
            </a>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;