import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Code, ExternalLink, Loader2 } from "lucide-react";
import projects from "../data/projects";

function ProjectDetails() {
  const { id } = useParams();
  const [loadedId, setLoadedId] = useState(null);
  const loading = loadedId !== id;

  useEffect(() => {
    const timer = setTimeout(() => setLoadedId(id), 500);
    return () => clearTimeout(timer);
  }, [id]);

  const project = projects.find((item) => item.id === id);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-32">
        <Loader2 className="w-6 h-6 text-blue-600 animate-spin" />
      </div>
    );
  }

  if (!project) {
    return (
      <section className="max-w-2xl mx-auto px-4 py-24 text-center">
        <h1 className="text-2xl font-bold text-gray-900">Project not found</h1>
        <p className="mt-3 text-gray-600">
          We couldn't find a project with the id "{id}".
        </p>
        <Link
          to="/projects"
          className="mt-6 inline-flex items-center gap-2 text-blue-600 font-medium hover:text-blue-700"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Projects
        </Link>
      </section>
    );
  }

  const { title, category, fullDescription, techStack, liveUrl, repoUrl, image } =
    project;

  return (
    <section className="max-w-3xl mx-auto px-4 py-16">
      <Link
        to="/projects"
        className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-blue-600"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Projects
      </Link>

      <img
        src={image}
        alt={title}
        className="w-full h-64 object-cover rounded-xl mt-6"
      />

      <span className="inline-block mt-6 text-xs font-medium text-blue-600 uppercase tracking-wide">
        {category}
      </span>
      <h1 className="text-3xl font-bold text-gray-900 mt-1">{title}</h1>
      <p className="mt-4 text-gray-600 leading-relaxed">{fullDescription}</p>

      <div className="flex flex-wrap gap-2 mt-6">
        {techStack.map((tech) => (
          <span
            key={tech}
            className="text-xs bg-gray-100 text-gray-600 rounded-full px-3 py-1"
          >
            {tech}
          </span>
        ))}
      </div>

      {(liveUrl || repoUrl) ? (
        <div className="flex items-center gap-4 mt-8">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-blue-600 text-white font-medium rounded-lg px-5 py-2.5 hover:bg-blue-700 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </a>
          )}
          {repoUrl && (
            <a
              href={repoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border border-gray-300 text-gray-700 font-medium rounded-lg px-5 py-2.5 hover:border-blue-600 hover:text-blue-600 transition-colors"
            >
              <Code className="w-4 h-4" />
              Source Code
            </a>
          )}
        </div>
      ) : (
        <p className="mt-8 text-sm text-gray-400 italic">Links coming soon.</p>
      )}
    </section>
  );
}

export default ProjectDetails;
