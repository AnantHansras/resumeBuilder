import React, { useState, useEffect } from "react";

export default function Projects({ data, updateData }) {
  const [projects, setProjects] = useState(() => {
    const savedProjects = localStorage.getItem("projects");
    return savedProjects ? JSON.parse(savedProjects) : data || [];
  });

  const [newProject, setNewProject] = useState({ name: "", description: "", link: "", techStack: "" });

  useEffect(() => {
    localStorage.setItem("projects", JSON.stringify(projects));
    updateData(projects);
  }, [projects]);

  const addProject = () => {
    if (newProject.name.trim() !== "") {
      setProjects((prev) => [...prev, newProject]);
      setNewProject({ name: "", description: "", link: "", techStack: "" });
    }
  };

  const removeProject = (index) => {
    setProjects((prev) => prev.filter((_, i) => i !== index));
  };

  const clearProjects = () => {
    setProjects([]);
    localStorage.removeItem("projects");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProject((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-[#07142b] mb-4">Projects</h2>
      <div className="space-y-2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="text-[#46464e] block mb-1">Project Name</label>
            <input
              id="name"
              name="name"
              value={newProject.name}
              onChange={handleChange}
              placeholder="Enter project name"
              className="w-full p-2 border rounded focus:ring-[#ffc85e] focus:border-[#ffc85e]"
            />
          </div>
          <div>
          <label htmlFor="techStack" className="text-[#46464e] block mb-1">Tech Stack</label>
          <input
            id="techStack"
            name="techStack"
            value={newProject.techStack}
            onChange={handleChange}
            placeholder="Enter technologies used (e.g., React, Tailwind, Node.js)"
            className="w-full p-2 border rounded focus:ring-[#ffc85e] focus:border-[#ffc85e]"
          />
        </div>
        </div>

        

        <div>
          <label htmlFor="description" className="text-[#46464e] block mb-1">Project Description</label>
          <textarea
            id="description"
            name="description"
            value={newProject.description}
            onChange={handleChange}
            placeholder="Briefly describe your project"
            className="w-full p-2 border rounded focus:ring-[#ffc85e] focus:border-[#ffc85e]"
          />
        </div>

        <button 
          onClick={addProject} 
          className="mt-2 bg-[#07142b] text-white px-4 py-2 rounded hover:bg-[#07142b]/90"
        >
          Add Project
        </button>
      </div>

      <div className="mt-4">
        <h3 className="text-lg font-semibold text-[#46464e] mb-2">Your Projects:</h3>
        {projects.length === 0 ? (
          <p className="text-[#46464e] italic">No projects added yet. Start by adding one above!</p>
        ) : (
          <ul className="space-y-4">
            {projects.map((project, index) => (
              <li key={index} className="bg-[#f9faff] p-4 rounded">
                <h4 className="font-semibold">{project.name}</h4>
                <p className="text-sm text-[#46464e] mt-1">{project.description}</p>
                {project.techStack && (
                  <p className="text-sm font-medium text-[#07142b] mt-1">Tech Stack: {project.techStack}</p>
                )}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-600 hover:underline mt-1 block"
                  >
                    Project Link
                  </a>
                )}
                <button
                  onClick={() => removeProject(index)}
                  className="mt-2 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                  Remove Project
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
      {projects.length > 0 && (
        <button
          onClick={clearProjects}
          className="mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
        >
          Clear All Projects
        </button>
      )}
    </div>
  );
}


