import React, { useState, useEffect } from "react";

export default function Experience({ data, updateData }) {
  const [experiences, setExperiences] = useState(data || []);
  const [newExperience, setNewExperience] = useState({
    company: "",
    position: "",
    duration: "",
    description: "",
  });

  useEffect(() => {
    updateData(experiences);
  }, [experiences, updateData]);

  const addExperience = () => {
    if (newExperience.company.trim() && newExperience.position.trim()) {
      setExperiences([...experiences, newExperience]);
      setNewExperience({ company: "", position: "", duration: "", description: "" });
    }
  };

  const removeExperience = (index) => {
    setExperiences(experiences.filter((_, i) => i !== index));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewExperience((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-[#07142b] mb-4">Experience</h2>
      <div className="space-y-2">
        {[
          { name: "company", placeholder: "Microsoft, Google, etc." },
          { name: "position", placeholder: "Software Engineer, Intern, etc." },
          { name: "duration", placeholder: "Jan 2020 - Dec 2023" },
          { name: "description", placeholder: "Developed key features, optimized performance, etc." }
        ].map((field) => (
          <div key={field.name}>
            <label htmlFor={field.name} className="text-[#46464e] block mb-1">
              {field.name.charAt(0).toUpperCase() + field.name.slice(1)}
            </label>
            {field.name === "description" ? (
              <textarea
                id={field.name}
                name={field.name}
                value={newExperience[field.name]}
                onChange={handleChange}
                placeholder={field.placeholder}
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-[#ffc85e] focus:border-[#ffc85e]"
              />
            ) : (
              <input
                id={field.name}
                name={field.name}
                value={newExperience[field.name]}
                onChange={handleChange}
                placeholder={field.placeholder}
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-[#ffc85e] focus:border-[#ffc85e]"
              />
            )}
          </div>
        ))}
        <button
          onClick={addExperience}
          className="mt-2 px-4 py-2 bg-[#07142b] text-white rounded-md hover:bg-[#07142b]/90"
        >
          Add Experience
        </button>
      </div>
      {experiences.length > 0 && (
        <div className="mt-4">
          <h3 className="text-lg font-semibold text-[#46464e] mb-2">Your Experiences:</h3>
          <ul className="space-y-4">
            {experiences.map((exp, index) => (
              <li key={index} className="bg-[#f9faff] p-4 rounded">
                <h4 className="font-semibold">{exp.position} at {exp.company}</h4>
                <p className="text-sm text-[#46464e] mt-1">{exp.duration}</p>
                <p className="text-sm mt-2">{exp.description}</p>
                <button
                  onClick={() => removeExperience(index)}
                  className="mt-2 px-3 py-1 bg-red-500 text-white rounded-md"
                >
                  Remove Experience
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}


