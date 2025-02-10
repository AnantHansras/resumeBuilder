import React, { useState } from "react";
import PersonalInfo from "./steps/PersonalInfo";
import Education from "./steps/Education";
import Skills from "./steps/Skills";
import Projects from "./steps/Projects";
import Experience from "./steps/Experience";
import ProgressIndicator from "./ProgressIndicator";

const steps = ["Personal Info", "Education", "Skills", "Projects", "Experience"];

export default function MultiStepForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    personalInfo: {},
    education: {},
    skills: [],
    projects: [],
    experience: [],
  });

  const handleNext = () => {
    setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
  };

  const handlePrev = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  const updateFormData = (step, data) => {
    setFormData((prev) => ({ ...prev, [step]: data }));
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return <PersonalInfo data={formData.personalInfo} updateData={(data) => updateFormData("personalInfo", data)} />;
      case 1:
        return <Education data={formData.education} updateData={(data) => updateFormData("education", data)} />;
      case 2:
        return <Skills data={formData.skills} updateData={(data) => updateFormData("skills", data)} />;
      case 3:
        return <Projects data={formData.projects} updateData={(data) => updateFormData("projects", data)} />;
      case 4:
        return <Experience data={formData.experience} updateData={(data) => updateFormData("experience", data)} />;
      default:
        return null;
    }
  };

  return (
    <div style={{ width: "100%", maxWidth: "800px", margin: "0 auto", backgroundColor: "white", padding: "2rem", borderRadius: "8px", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}>
      <ProgressIndicator steps={steps} currentStep={currentStep} />
      <div style={{ marginTop: "4rem", marginBottom: "2rem" }}>{renderStep()}</div>
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: "2rem" }}>
        <button 
          onClick={handlePrev} 
          disabled={currentStep === 0} 
          style={{ padding: "0.75rem 1.5rem", border: "1px solid #07142b", backgroundColor: "transparent", color: "#07142b", borderRadius: "4px", cursor: "pointer", opacity: currentStep === 0 ? 0.5 : 1 }}
        >
          Previous
        </button>
        <button 
          onClick={handleNext} 
          disabled={currentStep === steps.length - 1} 
          style={{ padding: "0.75rem 1.5rem", backgroundColor: "#07142b", color: "white", border: "none", borderRadius: "4px", cursor: "pointer", opacity: currentStep === steps.length - 1 ? 0.5 : 1 }}
        >
          {currentStep === steps.length - 1 ? "Submit" : "Next"}
        </button>
      </div>
    </div>
  );
}
