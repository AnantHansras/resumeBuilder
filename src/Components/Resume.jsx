


import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaArrowLeft, FaDownload, FaSave } from "react-icons/fa";
import { addResume } from "../Services/resumeAPI";
import {useDispatch} from 'react-redux'
const Resume = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const formData = location.state?.formData || {};
  const dispatch = useDispatch();
  const handleDownload = () => {
    const printContents = document.getElementById("resume-content").innerHTML;
    const originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
    window.location.reload();
  };
  const storedToken = localStorage.getItem("token");
const token = storedToken ? JSON.parse(storedToken) : null;
  const handleBack = () => {
    navigate('/create-resume',{ state: { formData } });
  };

  const handleSave = () => {
    dispatch(addResume(formData,token))
  };

  return (
    <div className="bg-[#f9faff] font-sans pb-10">
      <div className="relative flex justify-center gap-3 p-4">
        <button
          onClick={handleBack}
          className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 flex items-center gap-2"
        >
          <FaArrowLeft /> Back
        </button>

        <button
          onClick={handleDownload}
          className="px-4 py-2 bg-gray-500 text-white rounded-md shadow-md hover:bg-gray-600 flex items-center gap-2"
        >
          <FaDownload /> Download
        </button>

        <button
          onClick={handleSave}
          className="px-4 py-2 bg-green-500 text-white rounded-md shadow-md hover:bg-green-600 flex items-center gap-2"
        >
          <FaSave /> Save
        </button>
      </div>

      <div
        id="resume-content"
        className="max-w-[794px] mx-auto p-6 rounded-md shadow-xl bg-white text-gray-800 font-sans"
        style={{
          width: "794px",
          height: "1123px",
          border: "1.5px solid #ddd",
          padding: "60px",
          boxSizing: "border-box",
        }}
      >
        {/* Resume Content (No changes here) */}
        {/* Header */}
        <div className="flex justify-between items-start mb-12 font-sans">
  {formData?.personalInfo && (
    <>
      <div>
        {formData.personalInfo.name && (
          <h1 className="text-xl font-bold mb-2 font-sans">{formData.personalInfo.name}</h1>
        )}
        {formData.personalInfo.position && (
          <p className="text-gray-600 font-[500] text-sm font-sans uppercase">
            {formData.personalInfo.position}
          </p>
        )}
      </div>

      <div className="text-[0.65rem]">
        {formData.personalInfo.phone && <p>Phone: {formData.personalInfo.phone}</p>}
        {formData.personalInfo.email && <p>{formData.personalInfo.email}</p>}
        {formData.personalInfo.dob && <p>Date of Birth: {formData.personalInfo.dob}</p>}
      </div>
    </>
  )}
</div>


           {/* Main content */}
           <div className="flex gap-12">
             {/* Left column */}
             <div className="flex-[1.9] ">
             {/* experiences */}
             {Array.isArray(formData.experience) && formData.experience.length > 0 && (
  <section className="mb-8">
    <h2 style={{ marginBottom: "16px", fontSize: "18px", fontWeight: "bold" }} className="text-blue-500">
      EXPERIENCE
    </h2>
    {formData.experience.map((exp, index) => (
      <div key={index} className="mb-6">
        <h3 className="font-semibold text-[0.75rem] text-gray-700">
          {exp.company} — <span className="italic">{exp.position}</span>
        </h3>
        <p className="text-[0.65rem] font-sans text-gray-600 mb-2">{exp.duration}</p>
        <p className="text-[0.7rem] font-sans text-gray-700">{exp.description}</p>
      </div>
    ))}
  </section>
)}

            
               {/* Projects */}
               <section className="mb-8">
  <h2
    style={{ marginBottom: "16px", fontSize: "18px", fontWeight: "bold" }}
    className="font-sans text-blue-500"
  >
    PROJECTS
  </h2>
  {formData.projects && formData.projects.length > 0 ? (
    formData.projects.map((proj, index) => (
      <div key={index} className="mb-4">
        <h3 className="font-semibold font-sans text-[0.75rem] mb-1 text-gray-700">
          {proj.name} — <span className="italic">{proj.techStack}</span>
        </h3>
        <p className="text-gray-700 font-sans text-[0.7rem]">{proj.description}</p>
        {proj.link && (
          <a
            href={proj.link}
            className="text-blue-500 text-[0.7rem] underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Project Link
          </a>
        )}
      </div>
    ))
  ) : (
    <p className="text-gray-500 text-[0.7rem] font-sans">No projects available.</p>
  )}
                </section>


               {/* Achievments */}
               {formData?.achievements?.length > 0 && (
  <section className="mb-4">
    <h2 className="text-blue-500 font-sans mb-4 text-lg font-bold">ACHIEVEMENTS</h2>
    <ul className="list-disc list-inside opacity-80 font-sans">
      {formData.achievements.map((a, index) => (
        <li className="mb-1 text-sm font-sans" key={index}>
          {a}
        </li>
      ))}
    </ul>
  </section>
)}

              
             </div>

             {/* Right column */}
             <div className="flex-1">
             {/* skills */}
             {formData.skills && formData.skills.length > 0 && (
  <section className="mb-8">
    <h2
      style={{ marginBottom: "16px", fontSize: "18px", fontWeight: "bold" }}
      className="text-blue-500 font-sans"
    >
      SKILLS
    </h2>
    <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
      {formData.skills.map((skill, index) => (
        <span
          key={index}
          className="bg-gray-100 font-bold rounded-xl p-2 font-sans"
          style={{
            fontSize: "14px",
            fontWeight: "bold",
          }}
        >
          {skill}
        </span>
      ))}
    </div>
  </section>
)}

             {/* Education */}
             <section className="mb-8">
  <h2
    style={{ marginBottom: "16px", fontSize: "18px", fontWeight: "bold" }}
    className="text-blue-500 font-sans"
  >
    EDUCATION
  </h2>

  {formData.education?.higher && (
    <div className="mb-6">
      <div className="flex justify-between items-baseline mb-1">
        <h3 className="font-normal text-[0.7rem] font-sans">
          {formData.education.higher.name} —{" "}
          <span className="italic">{formData.education.higher.degree}</span>
        </h3>
      </div>
      <p className="text-[0.7rem] text-gray-600 mb-2">
        {formData.education.higher.year} | CGPA: {formData.education.higher.cg}
      </p>
    </div>
  )}

  {formData.education?.twelfth && (
    <div className="mb-6">
      <div className="flex justify-between items-baseline mb-1">
        <h3 className="font-normal text-[0.7rem]">
          {formData.education.twelfth.name} —{" "}
          <span className="italic">Senior Secondary (XII)</span>
        </h3>
      </div>
      <p className="text-[0.7rem] text-gray-600 mb-2">
        {formData.education.twelfth.year} | Percentage:{" "}
        {formData.education.twelfth.percentage}
      </p>
    </div>
  )}

  {formData.education?.tenth && (
    <div className="mb-6">
      <div className="flex justify-between items-baseline mb-1">
        <h3 className="font-normal text-[0.7rem]">
          {formData.education.tenth.name} —{" "}
          <span className="italic">Secondary (X)</span>
        </h3>
      </div>
      <p className="text-[0.7rem] text-gray-600 mb-2">
        {formData.education.tenth.year} | Percentage:{" "}
        {formData.education.tenth.percentage}
      </p>
    </div>
  )}
              </section>


               {/* others */}
               {formData?.others?.length > 0 && (
  <section>
    <h2
      style={{ marginBottom: "16px", fontSize: "18px", fontWeight: "bold" }}
      className="text-blue-500"
    >
      Other
    </h2>
    {formData.others.map((item, index) => (
      <p key={index} className="text-[0.7rem]">
        {item?.text}{" "}
        {item?.link && (
          <a href={item.link} className="text-blue-500 underline">
            [Link]
          </a>
        )}
      </p>
    ))}
  </section>
)}


              

             </div>
           </div>
         
      </div>

      <style>
        {`
          @media print {
            * {
              -webkit-print-color-adjust: exact;
              print-color-adjust: exact;
            }
            .bg-gray-100 {
              background-color: #e5e7eb !important;
              border: 1px solid #d1d5db;
            }
            .print\\:hidden {
              display: none !important;
            }
            #resume-content {
              width: 210mm !important;
              height: auto !important;
              padding: 10mm;
              border: none !important;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Resume;
