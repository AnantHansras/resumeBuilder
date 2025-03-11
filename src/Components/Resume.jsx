import React, { useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaArrowLeft, FaDownload, FaSave } from "react-icons/fa";
import { addResume } from "../Services/resumeAPI";
import { useDispatch } from "react-redux";
import Temp1 from "./temp1";
import Temp2 from './Temp2'
import Temp3 from "./Temp3";
import Temp4 from "./Temp4";
import Temp5 from "./Temp5";
import Temp6 from "./Temp6";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

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

const handleDownload = async () => {
  const resumeElement = resumeRef.current;
  if (!resumeElement) return;

  const scaleFactor = window.devicePixelRatio || 2; // Adjusts resolution dynamically

  const canvas = await html2canvas(resumeElement, {
    scale: scaleFactor, // Uses device resolution for better quality
    useCORS: true, // Ensures external fonts and images load correctly
  });

  const imgData = canvas.toDataURL("image/png");
  const pdf = new jsPDF("p", "mm", "a4");

  const pdfWidth = 210; // A4 width in mm
  const pdfHeight = 297; // A4 height in mm
  const imgWidth = pdfWidth;
  const imgHeight = (canvas.height * imgWidth) / canvas.width;

  pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
  pdf.save("resume.pdf");
};


  return (
    <div className="bg-[#f9faff] font-sans pb-10">
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
        <Temp6 formData={formData} />
      </div>
    </div>
  );
};

export default Resume;