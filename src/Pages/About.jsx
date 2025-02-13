import React from "react";
import { CardStack } from "../Components/Stack";

export default function About() {
  const companyLogos = [
    {
      name: "Microsoft",
      src: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    },
    {
      name: "Facebook",
      src: "https://upload.wikimedia.org/wikipedia/commons/b/b8/2021_Facebook_icon.svg",
    },
    {
      name: "Zomato",
      src: "https://upload.wikimedia.org/wikipedia/commons/7/75/Zomato_logo.png",
    },
    {
      name: "Oracle",
      src: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg",
    },
    {
      name: "Samsung",
      src: "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg",
    },
    {
      name: "Spotify",
      src: "https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f9faff]">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-[#07142b] text-5xl font-bold text-center mb-4">About Us</h1>
        <p className="text-[#46464e] text-center text-lg mb-20 max-w-3xl mx-auto">
          Our Resume Builder is powered by career experts, helping millions land their dream jobs.
        </p>

        {/* <div className="bg-[#eff2fa] rounded-lg py-8 px-4 mb-20">
          <p className="text-[#46464e] text-center mb-8">Our users have been hired by:</p>
          <div className="grid grid-cols-3 gap-8 items-center justify-items-center max-w-4xl mx-auto">
            <div className="flex gap-16">
              {companyLogos.map((company, index) => (
                <img key={index} src={company.src} alt={`${company.name} Logo`} className={index < 3 ? "w-6" : "w-10"} />
              ))}
            </div>
          </div>
        </div> */}
        <div className="text-center mb-16 flex flex-col justify-center items-center">
          <h2 className="text-[#07142b] text-3xl font-bold mb-10">What Our Users Say</h2>
          <CardStack/>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-[#07142b] text-4xl md:text-5xl font-bold mb-6 max-w-4xl mx-auto leading-tight">
            The Best Resume Builder for Your Career Growth
          </h2>
          <p className="text-[#46464e] text-xl mb-8">Get expert guidance and professional resume templates.</p>
          <p className="text-[#46464e] text-lg max-w-4xl mx-auto">
            Our platform offers industry-leading resume-building tools and expert advice to help you craft the perfect resume and get hired faster.
          </p>
        </div>

        <div className="bg-[#eff2fa] rounded-lg py-8 px-6 mb-20">
          <h2 className="text-[#07142b] text-3xl font-bold text-center mb-6">Key Statistics</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <h3 className="text-[#07142b] text-2xl font-bold">10M+</h3>
              <p className="text-[#46464e]">Resumes Created</p>
            </div>
            <div>
              <h3 className="text-[#07142b] text-2xl font-bold">90%</h3>
              <p className="text-[#46464e]">Success Rate</p>
            </div>
            <div>
              <h3 className="text-[#07142b] text-2xl font-bold">50K+</h3>
              <p className="text-[#46464e]">Companies Hiring</p>
            </div>
          </div>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-[#07142b] text-3xl font-bold mb-6">Why Choose Us?</h2>
          <ul className="text-[#46464e] text-lg max-w-3xl mx-auto text-left list-disc pl-6">
            <li>AI-powered resume analysis for optimization.</li>
            <li>Customizable, professional resume templates.</li>
            <li>Real-time feedback from career experts.</li>
            <li>Guidance on keyword optimization for ATS compatibility.</li>
          </ul>
        </div>

        <div className="bg-[#eff2fa] rounded-lg py-8 px-6 mb-20">
          <h2 className="text-[#07142b] text-3xl font-bold text-center mb-6">Our Mission & Vision</h2>
          <p className="text-[#46464e] text-lg max-w-3xl mx-auto text-center">
            Our mission is to empower job seekers by providing them with world-class resume-building tools and resources. We envision a future where everyone has access to career opportunities that match their skills and aspirations.
          </p>
        </div>

        
      </div>
    </div>
  );
}

