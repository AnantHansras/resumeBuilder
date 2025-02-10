import React, { useState, useEffect } from "react";

export default function Projects({ data, updateData }) {
  const [projects, setProjects] = useState(data || []);
  const [newProject, setNewProject] = useState({ name: "", description: "", link: "" });

  useEffect(() => {
    updateData(projects);
  }, [projects, updateData]);

  const addProject = () => {
    if (newProject.name.trim() !== "") {
      setProjects((prev) => [...prev, newProject]);
      setNewProject({ name: "", description: "", link: "" });
    }
  };

  const removeProject = (index) => {
    setProjects((prev) => prev.filter((_, i) => i !== index));
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
            className="w-full p-2 border rounded focus:ring-[#ffc85e] focus:border-[#ffc85e]"
          />
        </div>
        <div>
          <label htmlFor="link" className="text-[#46464e] block mb-1">Project Link</label>
          <input
            id="link"
            name="link"
            value={newProject.link}
            onChange={handleChange}
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
            className="w-full p-2 border rounded focus:ring-[#ffc85e] focus:border-[#ffc85e]"
          />
        </div>
        
        <button onClick={addProject} className="mt-2  bg-[#07142b] text-white px-4 py-2 rounded hover:bg-[#07142b]/90">
          Add Project
        </button>
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-semibold text-[#46464e] mb-2">Your Projects:</h3>
        <ul className="space-y-4">
          {projects.map((project, index) => (
            <li key={index} className="bg-[#f9faff] p-4 rounded">
              <h4 className="font-semibold">{project.name}</h4>
              <p className="text-sm text-[#46464e] mt-1">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-600 hover:underline mt-1 block"
              >
                Project Link
              </a>
              <button
                onClick={() => removeProject(index)}
                className="mt-2 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              >
                Remove Project
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
