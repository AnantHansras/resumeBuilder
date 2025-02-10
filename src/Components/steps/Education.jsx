import React, { useState, useEffect } from "react";

export default function Education({ data, updateData }) {
  const [formData, setFormData] = useState({
    tenth: { name: "", cg: "" },
    twelfth: { name: "", cg: "" },
    higher: { name: "", cg: "" },
    ...data,
  });

  useEffect(() => {
    updateData(formData);
  }, [formData, updateData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const [level, field] = name.split(".");
    setFormData((prev) => ({
      ...prev,
      [level]: { ...prev[level], [field]: value },
    }));
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-[#07142b] mb-4">Education</h2>
      {["tenth", "twelfth", "higher"].map((level) => (
        <div key={level} className="space-y-2">
          <h3 className="text-lg font-semibold text-[#46464e] capitalize">{level} Education</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor={`${level}.name`} className="text-[#46464e] block mb-1">
              Institution Name
            </label>
            <input
              id={`${level}.name`}
              name={`${level}.name`}
              value={formData[level].name}
              onChange={handleChange}
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-[#ffc85e] focus:border-[#ffc85e]"
            />
          </div>
          <div>
            <label htmlFor={`${level}.cg`} className="text-[#46464e] block mb-1">
              CGPA/Percentage
            </label>
            <input
              id={`${level}.cg`}
              name={`${level}.cg`}
              value={formData[level].cg}
              onChange={handleChange}
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-[#ffc85e] focus:border-[#ffc85e]"
            />
          </div>
      </div>
          

        </div>
      ))}
    </div>
  );
}