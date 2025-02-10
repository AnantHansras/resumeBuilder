import React, { useState } from "react";

export default function PersonalInfo({ data, updateData }) {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    email: "",
    github: "",
    linkedin: "",
    ...data,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedData = { ...formData, [name]: value };
    setFormData(updatedData);
    updateData(updatedData);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-[#07142b] mb-4">Personal Information</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="text-[#46464e] block mb-1">
            Full Name
          </label>
          <input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-[#ffc85e] focus:border-[#ffc85e]"
          />
        </div>
        <div>
          <label htmlFor="address" className="text-[#46464e] block mb-1">
            Address
          </label>
          <input
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-[#ffc85e] focus:border-[#ffc85e]"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <label htmlFor="github" className="text-[#46464e] block mb-1">
          GitHub Profile
        </label>
        <input
          id="github"
          name="github"
          value={formData.github}
          onChange={handleChange}
          className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-[#ffc85e] focus:border-[#ffc85e]"
        />
      </div>
      <div>
        <label htmlFor="linkedin" className="text-[#46464e] block mb-1">
          LinkedIn Profile
        </label>
        <input
          id="linkedin"
          name="linkedin"
          value={formData.linkedin}
          onChange={handleChange}
          className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-[#ffc85e] focus:border-[#ffc85e]"
        />
      </div>
      </div>
      <div>
        <label htmlFor="email" className="text-[#46464e] block mb-1">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-[#ffc85e] focus:border-[#ffc85e]"
        />
      </div>
      
      
    </div>
  );
}

