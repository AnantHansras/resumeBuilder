import React, { useState } from "react";

export default function Achievements({ data, updateData }) {
  const [achievements, setAchievements] = useState(data || []);
  const [newAchievement, setNewAchievement] = useState("");

  const addAchievement = () => {
    if (newAchievement.trim() !== "") {
      const updatedAchievements = [...achievements, newAchievement.trim()];
      setAchievements(updatedAchievements);
      updateData(updatedAchievements);
      setNewAchievement("");
    }
  };

  const removeAchievement = (index) => {
    const updatedAchievements = achievements.filter((_, i) => i !== index);
    setAchievements(updatedAchievements);
    updateData(updatedAchievements);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-[#07142b] mb-4">Achievements</h2>
      <div>
        <label htmlFor="newAchievement" className="text-[#46464e] block mb-1">
          Add an Achievement
        </label>
        <div className="flex mt-1">
          <input
            id="newAchievement"
            value={newAchievement}
            placeholder="Enter only 1 achievement at a time (e.g. Won hackathon)"
            onChange={(e) => setNewAchievement(e.target.value)}
            className="flex-grow px-3 py-2 border border-gray-300 rounded-md focus:ring-[#ffc85e] focus:border-[#ffc85e]"
          />
          <button 
            onClick={addAchievement} 
            className="ml-2 px-4 py-2 bg-[#07142b] text-white rounded-md hover:bg-[#07142b]/90">
            Add
          </button>
        </div>
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-semibold text-[#46464e] mb-2">Your Achievements:</h3>
        <ul className="space-y-2">
          {achievements.map((achievement, index) => (
            <li key={index} className="flex items-center justify-between bg-[#f9faff] p-2 rounded">
              <span>{achievement}</span>
              <button 
                onClick={() => removeAchievement(index)}
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
