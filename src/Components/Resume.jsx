import React, { useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaArrowLeft, FaDownload, FaSave } from "react-icons/fa";
import { addResume } from "../Services/resumeAPI";
import { useDispatch } from "react-redux";
import Temp1 from "./temp1";
import Temp2 from "./Temp2";
import Temp3 from "./Temp3";
import Temp4 from "./Temp4";
import Temp5 from "./Temp5";
import Temp6 from "./Temp6";

const Resume = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const formData = location.state?.formData || {};
  const dispatch = useDispatch();
  const resumeRef = useRef(null);

  const storedToken = localStorage.getItem("token");
  const token = storedToken ? JSON.parse(storedToken) : null;

  const handleBack = () => {
    navigate("/create-resume", { state: { formData } });
  };

  const handleSave = () => {
    dispatch(addResume(formData, token));
  };

  const handleDownload = () => {
    const resumeContent = resumeRef.current;
    const originalDisplay = document.body.innerHTML;

    // Hide everything except the resume
    document.body.innerHTML = resumeContent.innerHTML;
    window.print();

    // Restore original content after printing
    document.body.innerHTML = originalDisplay;
    window.location.reload(); // Reload to restore event listeners
  };

  return (
    <div className="bg-[#f9faff] font-sans pb-10">
      {/* Print-specific styles */}
      <style>
        {`
          @media print {
            body * {
              visibility: hidden;
            }
            #resume-content, #resume-content * {
              visibility: visible;
            }
            #resume-content {
              position: absolute;
              left: 0;
              top: 0;
              width: 120%;
            }
          }
        `}
      </style>

      {/* Buttons Section (Hidden during print) */}
      <div className="no-print relative flex justify-center gap-3 p-4">
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

      {/* Resume Content */}
      <div
        id="resume-content"
        ref={resumeRef}
        className="max-w-[794px] mx-auto flex justify-center items-center rounded-md shadow-2xl bg-white text-gray-800 font-sans"
        style={{
          width: "794px",
          height: "1123px",
          boxSizing: "border-box",
        }}
      >
        <Temp3 formData={formData} />
      </div>
    </div>
  );
};

export default Resume;
