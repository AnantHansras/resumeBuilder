// import { useState, useEffect } from "react";
// import {
//   AlertCircle,
//   CheckCircle,
//   Lightbulb,
//   Key,
//   ArrowRight,
// } from "lucide-react";
// import { useLocation } from "react-router-dom";
// import { Gauge } from "lucide-react";
// const ATS = () => {
//   const location = useLocation();
//   let atsData = null;
//   try {
//     const extractedJson = location.state?.atsScore
//       ?.replace(/```json|```/g, "")
//       .trim();
//     atsData = JSON.parse(extractedJson)?.ATS_Analysis;
//   } catch (error) {
//     console.error("Error parsing ATS JSON:", error);
//   }

//   if (!atsData) {
//     return (
//       <div className="flex items-center justify-center h-[100vh]">
//         <div className="w-full max-w-md p-6 border rounded-lg shadow-md text-center">
//           <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-2" />
//           <h2 className="text-xl font-semibold">No Data Available</h2>
//           <p className="text-gray-600">No ATS Analysis data available.</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="container mx-auto py-20 px-4 max-w-4xl">
//       <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center">
//         ATS Analysis Results
//       </h1>
//       <div className="grid md:grid-cols-[0.4fr_0.6fr] gap-6">
//         {/* Left Column */}
//         <div className="space-y-6">
//           {/* ATS Score */}
//           <div className="p-6 border rounded-lg shadow-md flex flex-col items-center">
//             <h2 className="text-lg font-semibold flex justify-center items-center">
//               <Gauge className="mr-2" />
//               ATS Score
//             </h2>
//             <div className="relative w-24 h-24 mt-4">
//               <svg className="w-full h-full" viewBox="0 0 100 100">
//                 <defs>
//                   <linearGradient
//                     id="progressGradient"
//                     x1="0%"
//                     y1="0%"
//                     x2="100%"
//                     y2="0%"
//                   >
//                     <stop offset="0%" stopColor="green" />
//                     <stop offset="40%" stopColor="yellowgreen" />
//                     <stop offset="70%" stopColor="orange" />
//                     <stop offset="100%" stopColor="red" />
//                   </linearGradient>
//                 </defs>

//                 {/* Background Circle */}
//                 <circle
//                   className="text-gray-200"
//                   strokeWidth="10"
//                   stroke="currentColor"
//                   fill="transparent"
//                   r="40"
//                   cx="50"
//                   cy="50"
//                 />

//                 {/* Progress Circle */}
//                 <circle
//                   className="transition-all duration-300"
//                   strokeWidth="10"
//                   strokeLinecap="round"
//                   strokeDasharray="251.2"
//                   strokeDashoffset={`${
//                     251.2 - (atsData.ATS_Compatibility_Score / 100) * 251.2
//                   }`}
//                   stroke="url(#progressGradient)"
//                   fill="transparent"
//                   r="40"
//                   cx="50"
//                   cy="50"
//                 />
//               </svg>

//               {/* Score Text */}
//               <span className="absolute inset-0 flex items-center justify-center text-lg font-medium">
//                 {atsData.ATS_Compatibility_Score}%
//               </span>
//             </div>
//           </div>
//           {/* Positive Aspects */}
//           <div className="p-6 border-l-4  border-l-green-500 rounded-lg shadow-md">
//             <h2 className="text-lg font-semibold flex items-center gap-2">
//               <CheckCircle className="h-5 w-5 text-green-500" /> Positive
//               Aspects
//             </h2>
//             <ul className="mt-2 space-y-2">
//               {atsData.Positive_Aspects.map((point, index) => (
//                 <li key={index} className="flex items-start gap-2">
//                   <span className="text-green-500 mt-1">•</span>
//                   <span>{point}</span>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>

//         {/* Right Column */}
//         <div className="space-y-6">
//           {/* Recommended Keywords & Skills */}
//           <div className="p-6 border-l-4 border-l-purple-500 rounded-lg shadow-md">
//             <h2 className="text-lg font-semibold flex items-center gap-2">
//               <Key className="h-5 w-5 text-purple-500" /> Recommended Keywords &
//               Skills
//             </h2>
//             <div className="mt-2 flex flex-wrap gap-2">
//               {atsData.Recommended_Keywords_Skills.map((skill, index) => (
//                 <span
//                   key={index}
//                   className="px-2 py-1 bg-purple-100 text-purple-800 text-sm rounded-lg"
//                 >
//                   {skill}
//                 </span>
//               ))}
//             </div>
//           </div>

//           {/* Areas for Improvement */}
//           <div className="p-6 border-l-4 border-l-amber-500 rounded-lg shadow-md">
//             <h2 className="text-lg font-semibold flex items-center gap-2">
//               <AlertCircle className="h-5 w-5 text-amber-500" /> Areas for
//               Improvement
//             </h2>
//             <ul className="mt-2 space-y-2">
//               {atsData.Areas_for_Improvement.map((point, index) => (
//                 <li key={index} className="flex items-start gap-2">
//                   <span className="text-amber-500 mt-1">•</span>
//                   <span>{point}</span>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ATS;


"use client";

import { useLocation } from "react-router-dom";
import { AlertCircle, CheckCircle, Key } from "lucide-react";

const ATS = () => {
  const location = useLocation();

  let atsData = null;
  try {
    const extractedJson = location.state?.atsScore?.replace(/```json|```/g, "").trim();
    atsData = JSON.parse(extractedJson)?.ATS_Analysis;
  } catch (error) {
    console.error("Error parsing ATS JSON:", error);
  }

  if (!atsData) {
    return (
      <div className="flex items-center justify-center min-h-[80vh]">
        <div className="w-full max-w-md border border-gray-200 shadow-sm p-6 rounded-lg text-center">
          <AlertCircle className="w-6 h-6 text-gray-500 mx-auto mb-2" />
          <h2 className="text-xl font-semibold">No Data Available</h2>
          <p className="text-gray-500 text-sm mt-2">No ATS Analysis data available.</p>
          <button
            onClick={() => window.history.back()}
            className="mt-4 px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 transition"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  const getScoreColor = (score) => {
    if (score >= 80) return "text-green-600";
    if (score >= 60) return "text-amber-600";
    return "text-red-600";
  };

  return (
    <div className="container mx-auto py-20 px-4 max-w-4xl">
      <div className="mb-12 text-center">
        <h1 className="text-2xl font-semibold">ATS Analysis Results</h1>
      </div>

      {/* Score Section */}
      <div className="mb-10 flex flex-col items-center">
        <div className="mb-6 text-center">
          <span className={`text-5xl font-light ${getScoreColor(atsData.ATS_Compatibility_Score)}`}>
            {atsData.ATS_Compatibility_Score}%
          </span>
          <p className="text-sm text-gray-500 mt-2">ATS Compatibility Score</p>
        </div>
        <div className="w-full max-w-md h-1 bg-gray-200 rounded-full overflow-hidden">
          <div
            className={`h-full ${
              atsData.ATS_Compatibility_Score >= 80
                ? "bg-green-500"
                : atsData.ATS_Compatibility_Score >= 60
                ? "bg-amber-500"
                : "bg-red-500"
            }`}
            style={{ width: `${atsData.ATS_Compatibility_Score}%` }}
          ></div>
        </div>
      </div>

      <div className="grid gap-10">
        {/* Positive Aspects */}
        <section>
          <div className="flex items-center gap-2 mb-4">
            <CheckCircle className="h-4 w-4 text-green-600" />
            <h2 className="text-lg font-medium">Positive Aspects</h2>
          </div>
          <div className="border-b border-gray-200 mb-4"></div>
          <ul className="space-y-3 pl-5">
            {atsData.Positive_Aspects.map((point, index) => (
              <li key={index} className="list-disc text-sm text-gray-600">
                {point}
              </li>
            ))}
          </ul>
        </section>

        {/* Areas for Improvement */}
        <section>
          <div className="flex items-center gap-2 mb-4">
            <AlertCircle className="h-4 w-4 text-amber-600" />
            <h2 className="text-lg font-medium">Areas for Improvement</h2>
          </div>
          <div className="border-b border-gray-200 mb-4"></div>
          <ul className="space-y-3 pl-5">
            {atsData.Areas_for_Improvement.map((point, index) => (
              <li key={index} className="list-disc text-sm text-gray-600">
                {point}
              </li>
            ))}
          </ul>
        </section>

        {/* Recommended Keywords & Skills */}
        <section>
          <div className="flex items-center gap-2 mb-4">
            <Key className="h-4 w-4 text-blue-600" />
            <h2 className="text-lg font-medium">Recommended Keywords & Skills</h2>
          </div>
          <div className="border-b border-gray-200 mb-4"></div>
          <div className="flex flex-wrap gap-2">
            {atsData.Recommended_Keywords_Skills.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 text-xs font-medium text-blue-700 bg-blue-100 rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>
      </div>

      {/* Action Button */}
      <div className="mt-12 text-center">
        <button className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 transition">
          Optimize Resume
        </button>
      </div>
    </div>
  );
};

export default ATS;

