import React, { useState } from "react";

const Templates = () => {
  const [hovered, setHovered] = useState(null);
  
  const templates = [
    { title: "Modern Resume", src: "https://via.placeholder.com/300x400?text=Modern" },
    { title: "Professional Resume", src: "https://via.placeholder.com/300x400?text=Professional" },
    { title: "Creative Resume", src: "https://via.placeholder.com/300x400?text=Creative" },
    { title: "Modern Resume", src: "https://via.placeholder.com/300x400?text=Modern" },
    { title: "Professional Resume", src: "https://via.placeholder.com/300x400?text=Professional" },
    { title: "Creative Resume", src: "https://via.placeholder.com/300x400?text=Creative" }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto md:px-8 w-full">
      {templates.map((template, index) => (
        <div
          key={index}
          onMouseEnter={() => setHovered(index)}
          onMouseLeave={() => setHovered(null)}
          className={`rounded-lg relative bg-gray-100 overflow-hidden h-60 md:h-96 w-full transition-all duration-300 ease-out ${
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
  );
};

export default Templates;

