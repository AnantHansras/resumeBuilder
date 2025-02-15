import React, { useState, useEffect } from "react";

export default function Education({ data, updateData }) {
  const [formData, setFormData] = useState({
    tenth: { name: "", year: "", percentage: "" },
    twelfth: { name: "", year: "", percentage: "" },
    higher: { name: "", degree: "", year: "", cg: "" },
    ...data,
  });

  useEffect(() => {
    updateData(formData);
  }, [formData]);

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
      {[
        { key: "tenth", label: "Secondary (X)" },
        { key: "twelfth", label: "Senior Secondary (XII)" },
        { key: "higher", label: "Higher Education" },
      ].map(({ key, label }) => (
        <div key={key} className="space-y-2">
          <h3 className="text-lg font-semibold text-[#46464e]">{label}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor={`${key}.name`} className="text-[#46464e] block mb-1">
                Institution Name
              </label>
              <input
                id={`${key}.name`}
                name={`${key}.name`}
                value={formData[key].name}
                onChange={handleChange}
                placeholder="Enter institution name"
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-[#ffc85e] focus:border-[#ffc85e]"
              />
            </div>
            {key === "higher" && (
              <div>
                <label htmlFor={`${key}.degree`} className="text-[#46464e] block mb-1">
                  Degree
                </label>
                <input
                  id={`${key}.degree`}
                  name={`${key}.degree`}
                  value={formData[key].degree}
                  onChange={handleChange}
                  placeholder="Enter degree"
                  className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-[#ffc85e] focus:border-[#ffc85e]"
                />
              </div>
            )}
            <div>
              <label htmlFor={`${key}.year`} className="text-[#46464e] block mb-1">
                Year
              </label>
              <input
                id={`${key}.year`}
                name={`${key}.year`}
                value={formData[key].year}
                onChange={handleChange}
                placeholder="Enter year of completion"
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-[#ffc85e] focus:border-[#ffc85e]"
              />
            </div>
            <div>
              <label htmlFor={`${key}.percentage`} className="text-[#46464e] block mb-1">
                Percentage/CGPA
              </label>
              <input
                id={`${key}.percentage`}
                name={`${key}.percentage`}
                value={formData[key].percentage}
                onChange={handleChange}
                placeholder="Enter percentage/cgpa"
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-[#ffc85e] focus:border-[#ffc85e]"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
