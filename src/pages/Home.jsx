import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import heroImage from "../assets/derrick-hero.jpg";

function Home() {
  const featured = projects.slice(0, 3);

  return (
    <>
      <section className="max-w-5xl mx-auto px-4 pt-20 pb-16 flex flex-col-reverse md:flex-row items-center gap-12">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight">
            Hi, I'm Derrick.
            <br />
            <span className="text-blue-600">I am a Fullstack web developer.</span>
          </h1>
          <p className="mt-6 text-lg text-gray-600 max-w-xl mx-auto md:mx-0">
            Fullstack developer focused on building modern, responsive web applications with a focus on user experience and performance. Here's a look at some of my recent work.
          </p>
          <div className="mt-8 flex items-center justify-center md:justify-start gap-4">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 bg-blue-600 text-white font-medium rounded-lg px-5 py-3 hover:bg-blue-700 transition-colors"
            >
              View Projects
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 border border-gray-300 text-gray-700 font-medium rounded-lg px-5 py-3 hover:border-blue-600 hover:text-blue-600 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
        <div className="flex-shrink-0">
          <img
            src={heroImage}
            alt="Portrait of Derrick"
            className="w-56 h-72 sm:w-72 sm:h-96 rounded-2xl object-cover object-top shadow-lg shadow-gray-300/50 ring-1 ring-gray-200"
          />
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 pb-20">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold text-gray-900">
            Featured Projects
          </h2>
          <Link
            to="/projects"
            className="text-sm font-medium text-blue-600 hover:text-blue-700"
          >
            View all &rarr;
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </>
  );
}

export default Home;
