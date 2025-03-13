import React, { useState } from "react";

import t1 from '../assets/Templates/t1.png'
import t2 from '../assets/Templates/t2.png'
import t3 from '../assets/Templates/t3.png'
import t4 from '../assets/Templates/t4.png'
import t5 from '../assets/Templates/t5.png'
const Templates = () => {
  const [hovered, setHovered] = useState(null);
  
  const templates = [
    { title: "Modern Resume", src: t1 },
    { title: "Professional Resume", src: t2 },
    { title: "Creative Resume", src: t3 },
    { title: "Modern Resume", src: t4 },
    { title: "Professional Resume", src: t5 },
    { title: "Creative Resume", src: "https://via.placeholder.com/300x400?text=Creative" }
  ];

  return (
    <div className="bg-[#f9faff] h-full -my-8 py-8">
    <div className="max-w-5xl mx-auto md:px-8 w-full my-8 ">
      {/* Heading and Description */}
      <div className="text-center mb-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Choose Your <span className="text-[#ffc85c]">Resume</span> Template
        </h2>
        <p className="text-gray-600 mt-2 md:text-lg w-3/4 mx-auto">
          Select from a variety of resume templates to create a professional and 
          visually appealing resume. Click on any template to create resume.
        </p>
      </div>

      {/* Templates Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {templates.map((template, index) => (
          <div
            key={index}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
            className={`rounded-lg relative cursor-pointer bg-gray-100 overflow-hidden h-60 md:h-96 w-full transition-all duration-300 ease-out ${
              hovered !== null && hovered !== index ? "blur-sm scale-[0.98]" : ""
            }`}
          >
            <img
              src={template.src}
              alt={template.title}
              className="object-cover absolute inset-0 w-full h-full"
            />
            <div
              className={`absolute inset-0 bg-black/50 flex items-end py-8 px-4 transition-opacity duration-300 ${
                hovered === index ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="text-xl md:text-2xl font-medium text-white">
                {template.title}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
    
  );
};

export default Templates;

