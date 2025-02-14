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
  }, [ experiences]);

  const addExperience = () => {
    if (newExperience.company.trim() !== "" && newExperience.position.trim() !== "") {
      setExperiences((prev) => [...prev, newExperience]);
      setNewExperience({ company: "", position: "", duration: "", description: "" });
    }
  };

  const removeExperience = (index) => {
    setExperiences((prev) => prev.filter((_, i) => i !== index));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewExperience((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-[#07142b] mb-4">Experience</h2>
      <div className="space-y-2">
        <div>
          <label htmlFor="company" className="text-[#46464e] block mb-1">Company Name</label>
          <input id="company" name="company" value={newExperience.company} onChange={handleChange} className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-[#ffc85e] focus:border-[#ffc85e]" />
        </div>
        <div>
          <label htmlFor="position" className="text-[#46464e] block mb-1">Position</label>
          <input id="position" name="position" value={newExperience.position} onChange={handleChange} className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-[#ffc85e] focus:border-[#ffc85e]" />
        </div>
        <div>
          <label htmlFor="duration" className="text-[#46464e] block mb-1">Duration</label>
          <input id="duration" name="duration" value={newExperience.duration} onChange={handleChange} className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-[#ffc85e] focus:border-[#ffc85e]" />
        </div>
        <div>
          <label htmlFor="description" className="text-[#46464e] block mb-1">Description</label>
          <textarea id="description" name="description" value={newExperience.description} onChange={handleChange} className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-[#ffc85e] focus:border-[#ffc85e]" />
        </div>
        <button onClick={addExperience} className="mt-2 px-4 py-2 bg-[#07142b] text-white rounded-md hover:bg-[#07142b]/90">Add Experience</button>
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-semibold text-[#46464e] mb-2">Your Experiences:</h3>
        <ul className="space-y-4">
          {experiences.map((exp, index) => (
            <li key={index} className="bg-[#f9faff] p-4 rounded">
              <h4 className="font-semibold">{exp.position} at {exp.company}</h4>
              <p className="text-sm text-[#46464e] mt-1">{exp.duration}</p>
              <p className="text-sm mt-2">{exp.description}</p>
              <button onClick={() => removeExperience(index)} className="mt-2 px-3 py-1 bg-red-500 text-white rounded-md">Remove Experience</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
