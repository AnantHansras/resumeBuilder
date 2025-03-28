import { useState, useEffect } from "react";
import {
  AlertCircle,
  CheckCircle,
  Lightbulb,
  Key,
  ArrowRight,
} from "lucide-react";
import { useLocation } from "react-router-dom";
import { Gauge } from "lucide-react";
const ATS = () => {
  const location = useLocation();
  let atsData = null;
  try {
    const extractedJson = location.state?.atsScore
      ?.replace(/```json|```/g, "")
      .trim();
    atsData = JSON.parse(extractedJson)?.ATS_Analysis;
  } catch (error) {
    console.error("Error parsing ATS JSON:", error);
  }

  if (!atsData) {
    return (
      <div className="flex items-center justify-center h-[100vh]">
        <div className="w-full max-w-md p-6 border rounded-lg shadow-md text-center">
          <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-2" />
          <h2 className="text-xl font-semibold">No Data Available</h2>
          <p className="text-gray-600">No ATS Analysis data available.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-20 px-4 max-w-4xl">
      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center">
        ATS Analysis Results
      </h1>
      <div className="grid md:grid-cols-[0.4fr_0.6fr] gap-6">
        {/* Left Column */}
        <div className="space-y-6">
          {/* ATS Score */}
          <div className="p-6 border rounded-lg shadow-md flex flex-col items-center">
            <h2 className="text-lg font-semibold flex justify-center items-center">
              <Gauge className="mr-2" />
              ATS Score
            </h2>
            <div className="relative w-24 h-24 mt-4">
              <svg className="w-full h-full" viewBox="0 0 100 100">
                <defs>
                  <linearGradient
                    id="progressGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="green" />
                    <stop offset="40%" stopColor="yellowgreen" />
                    <stop offset="70%" stopColor="orange" />
                    <stop offset="100%" stopColor="red" />
                  </linearGradient>
                </defs>

                {/* Background Circle */}
                <circle
                  className="text-gray-200"
                  strokeWidth="10"
                  stroke="currentColor"
                  fill="transparent"
                  r="40"
                  cx="50"
                  cy="50"
                />

                {/* Progress Circle */}
                <circle
                  className="transition-all duration-300"
                  strokeWidth="10"
                  strokeLinecap="round"
                  strokeDasharray="251.2"
                  strokeDashoffset={`${
                    251.2 - (atsData.ATS_Compatibility_Score / 100) * 251.2
                  }`}
                  stroke="url(#progressGradient)"
                  fill="transparent"
                  r="40"
                  cx="50"
                  cy="50"
                />
              </svg>

              {/* Score Text */}
              <span className="absolute inset-0 flex items-center justify-center text-lg font-medium">
                {atsData.ATS_Compatibility_Score}%
              </span>
            </div>
          </div>
          {/* Positive Aspects */}
          <div className="p-6 border-l-4  border-l-green-500 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-500" /> Positive
              Aspects
            </h2>
            <ul className="mt-2 space-y-2">
              {atsData.Positive_Aspects.map((point, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Recommended Keywords & Skills */}
          <div className="p-6 border-l-4 border-l-purple-500 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold flex items-center gap-2">
              <Key className="h-5 w-5 text-purple-500" /> Recommended Keywords &
              Skills
            </h2>
            <div className="mt-2 flex flex-wrap gap-2">
              {atsData.Recommended_Keywords_Skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-purple-100 text-purple-800 text-sm rounded-lg"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Areas for Improvement */}
          <div className="p-6 border-l-4 border-l-amber-500 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-amber-500" /> Areas for
              Improvement
            </h2>
            <ul className="mt-2 space-y-2">
              {atsData.Areas_for_Improvement.map((point, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-amber-500 mt-1">•</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ATS;
