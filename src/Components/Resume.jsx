"use client"

import { useRef, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { FaArrowLeft, FaDownload, FaSave, FaExchangeAlt } from "react-icons/fa"
import { addResume } from "../Services/resumeAPI"
import { useDispatch, useSelector } from "react-redux"
import Temp1 from "./temp1"
import Temp2 from "./Temp2"
import Temp3 from "./Temp3"
import Temp4 from "./Temp4"
import Temp5 from "./Temp5"
import Temp6 from "./Temp6"
import Temp7 from "./Temp7"
import Temp8 from "./Temp8"
import Temp9 from "./Temp9"
import { setTemplate } from "../Slices/template" // Assuming this action exists
import t1 from '../assets/Templates/t1.png';
import t2 from '../assets/Templates/t2.png';
import t3 from '../assets/Templates/t3.png';
import t4 from '../assets/Templates/t4.png';
import t5 from '../assets/Templates/t5.png';
import t6 from '../assets/Templates/t6.png';
import t7 from '../assets/Templates/t7.png';
import t8 from '../assets/Templates/t8.png';
import t9 from '../assets/Templates/t9.png';
const Resume = () => {
  const template = useSelector((state) => state.template.template)
  const [showTemplateSelector, setShowTemplateSelector] = useState(false)
  const tempimg = [t1, t2, t3, t4, t5, t6, t7, t8, t9];
  const renderTemplate = () => {
    switch (template) {
      case 1:
        return <Temp1 formData={formData} />
      case 2:
        return <Temp2 formData={formData} />
      case 3:
        return <Temp3 formData={formData} />
      case 4:
        return <Temp4 formData={formData} />
      case 5:
        return <Temp5 formData={formData} />
      case 6:
        return <Temp6 formData={formData} />
      case 7:
        return <Temp7 formData={formData} />
      case 8:
        return <Temp8 formData={formData} />
      case 9:
        return <Temp9 formData={formData} />
      default:
        return <Temp1 formData={formData} />
    }
  }

  const location = useLocation()
  const navigate = useNavigate()
  const formData = location.state?.formData || {}
  const dispatch = useDispatch()
  const resumeRef = useRef(null)

  const storedToken = localStorage.getItem("token")
  const token = storedToken ? JSON.parse(storedToken) : null

  const handleBack = () => {
    navigate("/create-resume", { state: { formData } })
  }

  const handleSave = () => {
    dispatch(addResume(formData, token))
  }

  const handleDownload = () => {
    const resumeContent = resumeRef.current
    const originalDisplay = document.body.innerHTML

    // Hide everything except the resume
    document.body.innerHTML = resumeContent.innerHTML
    window.print()

    // Restore original content after printing
    document.body.innerHTML = originalDisplay
    window.location.reload() // Reload to restore event listeners
  }

  const handleTemplateChange = (templateId) => {
    dispatch(setTemplate(templateId))
    setShowTemplateSelector(false)
  }

  const toggleTemplateSelector = () => {
    setShowTemplateSelector(!showTemplateSelector)
  }

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

        <button
          onClick={toggleTemplateSelector}
          className="px-4 py-2 bg-purple-500 text-white rounded-md shadow-md hover:bg-purple-600 flex items-center gap-2"
        >
          <FaExchangeAlt /> Change Template
        </button>
      </div>

      {/* Template Selector Modal */}
      {showTemplateSelector && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl max-w-5xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-gray-800">Select Template</h2>
              <button onClick={() => setShowTemplateSelector(false)} className="text-gray-500 hover:text-gray-700">
                ✕
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((id) => (
                <div
                  key={id}
                  onClick={() => handleTemplateChange(id)}
                  className={`cursor-pointer p-1 rounded-md overflow-hidden transition-all duration-200 hover:shadow-lg ${
                    template === id ? "border-purple-500 ring-2 ring-purple-300" : "border-gray-200"
                  }`}
                >
                  <div className="relative pb-[140%] overflow-hidden h-60 md:h-96 w-full">
                    <img
                      src={`/template-${id}-thumbnail.jpg`}
                      alt={`Template ${id}`}
                      className="absolute inset-0 w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = tempimg[id-1]
                      }}
                    />
                  </div>
                  <div className="p-2 bg-gray-50 text-center">
                    <p className="font-medium">Template {id}</p>
                    {template === id && <span className="text-xs text-purple-600">Current</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Resume Content */}
      <div
        id="resume-content"
        ref={resumeRef}
        className="max-w-[794px] border border-gray-200 mx-auto flex justify-center items-center rounded-md shadow-2xl bg-white text-gray-800 font-sans"
        style={{
          width: "794px",
          height: "1123px",
          boxSizing: "border-box",
        }}
      >
        {renderTemplate()}
      </div>
    </div>
  )
}

export default Resume


