import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

function ProjectCard({ project }) {
  const { id, title, category, shortDescription, techStack, image } = project;

  return (
    <Link
      to={`/projects/${id}`}
      className="group flex flex-col rounded-xl border border-gray-200 bg-white overflow-hidden hover:shadow-lg hover:-translate-y-0.5 transition-all"
    >
      <img src={image} alt={title} className="w-full h-40 object-cover" />
      <div className="flex flex-col gap-2 p-5">
        <span className="text-xs font-medium text-blue-600 uppercase tracking-wide">
          {category}
        </span>
        <h3 className="flex items-center gap-1 text-lg font-semibold text-gray-900">
          {title}
          <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
        </h3>
        <p className="text-sm text-gray-600">{shortDescription}</p>
        <div className="flex flex-wrap gap-2 mt-2">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="text-xs bg-gray-100 text-gray-600 rounded-full px-2 py-1"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}

export default ProjectCard;
