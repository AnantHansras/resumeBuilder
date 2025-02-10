import React, { useState } from "react";

export default function Skills({ data, updateData }) {
  const [skills, setSkills] = useState(data || []);
  const [newSkill, setNewSkill] = useState("");

  const addSkill = () => {
    if (newSkill.trim() !== "") {
      const updatedSkills = [...skills, newSkill.trim()];
      setSkills(updatedSkills);
      updateData(updatedSkills);
      setNewSkill("");
    }
  };

  const removeSkill = (index) => {
    const updatedSkills = skills.filter((_, i) => i !== index);
    setSkills(updatedSkills);
    updateData(updatedSkills);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-[#07142b] mb-4">Skills</h2>
      <div>
        <label htmlFor="newSkill" className="text-[#46464e] block mb-1">
          Add a Skill
        </label>
        <div className="flex mt-1">
          <input
            id="newSkill"
            value={newSkill}
            onChange={(e) => setNewSkill(e.target.value)}
            className="flex-grow px-3 py-2 border border-gray-300 rounded-md focus:ring-[#ffc85e] focus:border-[#ffc85e]"
          />
          <button 
            onClick={addSkill} 
            className="ml-2 px-4 py-2 bg-[#07142b] text-white rounded-md hover:bg-[#07142b]/90">
            Add
          </button>
        </div>
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-semibold text-[#46464e] mb-2">Your Skills:</h3>
        <ul className="space-y-2">
          {skills.map((skill, index) => (
            <li key={index} className="flex items-center justify-between bg-[#f9faff] p-2 rounded">
              <span>{skill}</span>
              <button 
                onClick={() => removeSkill(index)}
                className="px-3 py-1 bg-red-500 text-white text-sm rounded-md hover:bg-red-600">
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}