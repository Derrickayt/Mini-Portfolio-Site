import { useMemo, useState } from "react";
import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";

function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = useMemo(
    () => ["All", ...new Set(projects.map((project) => project.category))],
    []
  );

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return projects;
    return projects.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  return (
    <section className="max-w-5xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-gray-900">Projects</h1>
      <p className="mt-2 text-gray-600">
        A selection of things I've built. Click any card for details.
      </p>

      <div className="mt-8 flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActiveCategory(category)}
            className={`text-sm font-medium rounded-full px-4 py-2 border transition-colors ${
              activeCategory === category
                ? "bg-blue-600 border-blue-600 text-white"
                : "border-gray-300 text-gray-600 hover:border-blue-600 hover:text-blue-600"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {filteredProjects.length > 0 ? (
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <p className="mt-10 text-gray-500">No projects in this category yet.</p>
      )}
    </section>
  );
}

export default Projects;
