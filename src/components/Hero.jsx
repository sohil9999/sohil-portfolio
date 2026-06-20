import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import profile from "../assets/profile.JPG";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-8"
    >
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between min-h-screen px-6 lg:px-10 gap-10">

        <div>

          <h2 className="text-cyan-400 text-2xl mb-4">
            Hello, I'm
          </h2>

         <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">
            Sohil Athar A
          </h1>

          <TypeAnimation
  sequence={[
    "AI Engineer",
    2000,
    "Machine Learning Engineer",
    2000,
    "Computer Vision Engineer",
    2000,
    "Agentic AI Developer",
    2000,
  ]}
  speed={50}
  repeat={Infinity}
  className="text-3xl md:text-4xl font-semibold text-cyan-400"
/>

          <p className="mt-8 text-gray-400 text-xl leading-9">
            Building production-grade AI solutions using
            Machine Learning, Computer Vision,
            LLMs and Agentic AI.
          </p>
          <div className="flex flex-wrap gap-5 mb-10">

  <div className="
    bg-[#0B1120]
    border border-cyan-500/20
    rounded-2xl
    px-6 py-4
    hover:border-cyan-400
    transition-all
  ">
    <h3 className="text-3xl font-bold text-cyan-400">
      3+
    </h3>
    <p className="text-gray-300 text-sm">
      AI Projects
    </p>
  </div>

  <div className="
    bg-[#0B1120]
    border border-cyan-500/20
    rounded-2xl
    px-6 py-4
    hover:border-cyan-400
    transition-all
  ">
    <h3 className="text-3xl font-bold text-cyan-400">
      1
    </h3>
    <p className="text-gray-300 text-sm">
      Year of internship Experience
    </p>
  </div>

  <div className="
    bg-[#0B1120]
    border border-cyan-500/20
    rounded-2xl
    px-6 py-4
    hover:border-cyan-400
    transition-all
  ">
    <h3 className="text-xl font-bold text-cyan-400">
      AI
    </h3>
    <p className="text-gray-300 text-sm">
      Healthcare • Education • Business
    </p>
  </div>

</div>

          <div className="flex gap-6 mt-8">

            <a
              href="https://github.com/sohil9999"
              target="_blank"
            >
              <FaGithub size={30} />
            </a>

            <a
              href="https://linkedin.com/in/sohilathar"
              target="_blank"
            >
              <FaLinkedin size={30} />
            </a>

           <a
  href="/resume.pdf"
  download
  className="
  px-8
  py-3
  bg-cyan-500
  text-black
  font-bold
  rounded-xl
  hover:bg-cyan-400
  hover:scale-105
  transition
  duration-300
  "
>
  Resume
</a>

          </div>

        </div>

        <div className="flex justify-center">

          <img
            src={profile}
            alt="profile"
           className="
w-80
h-80
md:w-[420px]
md:h-[420px]
rounded-full
object-contain
border-4
border-cyan-400
shadow-[0_0_80px_rgba(34,211,238,0.8)]
"
          />

        </div>

      </div>
    </section>
  );
}

export default Hero;