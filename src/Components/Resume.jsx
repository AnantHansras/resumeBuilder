
import React, { useRef } from "react";

const Resume = () => {
    const skills = [
        "API",
        "Azure",
        "Azure SQL",
        "CSS",
        "Git",
        "HTML",
        "Java",
        "Javascript",
        "jQuery",
        "Python",
        "springboot",
        "SQL",
        "SQL Server",
      ];
  const handleDownload = () => {
    const printContents = document.getElementById("resume-content").innerHTML;
    const originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
    window.location.reload();
  };

  return (
    <div className="bg-[#f9faff] font-sans ">
      <div className="relative">
        <button
          onClick={handleDownload}
          className="absolute top-24 right-4 px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600"
        >
          Download PDF
        </button>

        <div
          id="resume-content"
          className="max-w-[794px] mx-auto p-6 -mt-20 rounded-md shadow-xl bg-white text-gray-800 font-serif scale-75"
          style={{
            width: "794px",
            height: "1123px",
            border: "1.5px solid #ddd",
            padding: "60px",
            boxSizing: "border-box",
          }}
        >
          {/* Header */}
          <div className="flex justify-between items-start mb-12">
            <div>
              <h1 className="text-xl font-bold mb-2 font-sans">Mansi Chauhan</h1>
              <p className="text-gray-700 text-sm font-sans">Software Engineer II at Microsoft</p>
            </div>
            <div className="text-[0.65rem]">
              <p>Phone: +91-9149241088</p>
              <p>toshichauhan29@gmail.com</p>
              <p>Date of Birth: 24 January 2000</p>
            </div>
          </div>

          {/* Main content */}
          <div className="flex gap-12">
            {/* Left column */}
            <div className="flex-[1.9] ">
              <section className="mb-8">
                <h2 style={{ marginBottom: "16px", fontSize: "18px", fontWeight: "bold" }} className="text-blue-500">EXPERIENCE</h2>

                <div className="mb-6">
                  <h3 className="font-semibold text-[0.75rem] text-gray-700">
                    Microsoft — <span className="italic">Software Engineer II</span>
                  </h3>
                  <p className="text-[0.65rem] text-gray-600 mb-2">December 2023 – Present</p>
                  <ul className="text-[0.7rem] text-gray-700 list-disc pl-5 space-y-2">
                    <li>Developed an Automatic Schema change detection feature for the Azure SQL Metadata Team.</li>
                    <li>Contributed to Metadata Versioning project for SQL Server.</li>
                    <li>Developed a Test Framework for database version upgrades.</li>
                  </ul>
                </div>

                <div className="mb-6">
                  <h3 className="font-semibold text-[0.75rem] text-gray-700">
                    Fidelity Investments — <span className="italic">Software Development Intern</span>
                  </h3>
                  <p className="text-[0.65rem] text-gray-600 mb-2">Jan 2020 – June 2020</p>
                  <p className="text-[0.7rem] text-gray-700">
                    Created a tool for automatic API boilerplate generation, saving developers 60% of their time.
                  </p>
                </div>
              </section>

              {/* Projects */}
              <section className="mb-8">
                <h2 style={{ marginBottom: "16px", fontSize: "18px", fontWeight: "bold" }} className="text-blue-500">PROJECTS</h2>
                <div className="mb-4">
                  <h3 className="font-semibold text-[0.75rem] mb-1 text-gray-700">
                    Job Search — <span className="italic">WIT Engage Hackathon</span>
                  </h3>
                  <p className="text-gray-700 text-[0.7rem]">Job search web application for blue-collared workers.</p>
                </div>
                <div className="mb-4">
                  <h3 className="font-semibold text-[0.75rem] mb-1 text-gray-700">
                    Speed Reader App — <span className="italic ">Mobile jQuery</span>
                  </h3>
                  <p className="text-gray-700 text-[0.7rem]">A web application to enhance the reading skills of a beginner.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-[0.75rem] mb-1 text-gray-700">
                    Math Game — <span className="italic">HTML, CSS, JavaScript</span>
                  </h3>
                  <p className="text-gray-700 text-[0.7rem]">A fun game of basic math calculations with score.</p>
                </div>
              </section>

              <section className="mb-4">
                <h2 style={{ marginBottom: "16px", fontSize: "18px", fontWeight: "bold" }} className="text-blue-500">ACHIEVEMENTS</h2>
                <p className="mb-2 text-[0.7rem]">
                  Secured City Rank 1<sup>st</sup> and State Rank 24<sup>th</sup> in 13<sup>th</sup> National Cyber Olympiad.
                </p>
                <p className="mb-2 text-[0.7rem]">Semi-finalist at Code Gladiators 2020</p>
              </section>
            </div>

            {/* Right column */}
            <div className="flex-1">
            <section className="mb-8">
      <h2 style={{ marginBottom: "16px", fontSize: "18px", fontWeight: "bold" }} className="text-blue-500">SKILLS</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
        {skills.map((skill) => (
            <span className="bg-gray-100 font-bold rounded-xl p-2" style={{
        fontSize: "14px",
        fontWeight: "bold",
      }}>
        {skill}
      </span>
        ))}
      </div>
    </section>

              <section className="mb-8">
               <h2 style={{ marginBottom: "16px", fontSize: "18px", fontWeight: "bold" }} className="text-blue-500">EDUCATION</h2>
                <div className="mb-6">
                  <div className="flex justify-between items-baseline mb-1">
                    <h3 className="font-normal text-[0.7rem]">
                      National Institute of Technology, Kurukshetra —{" "}
                      <span className="italic">Bachelor of Technology in Information Technology</span>
                    </h3>
                  </div>
                  <p className="text-[0.7rem] text-gray-600 mb-2">2021 | CGPA: 9.1934</p>
                </div>
                <div className="mb-6">
                  <div className="flex justify-between items-baseline mb-1">
                    <h3 className="font-normal text-[0.7rem]">
                      JBS Children Paradise School, Kota — <span className="italic">Senior Secondary (XII)</span>
                    </h3>
                  </div>
                  <p className="text-[0.7rem] text-gray-600 mb-2">2017 | 91.40%</p>
                </div>
                <div className="mb-6">
                  <div className="flex justify-between items-baseline mb-1">
                    <h3 className="font-normal text-[0.7rem]">
                      Jim Corbett Secondary School, Haldwani — <span className="italic">Secondary (X)</span>
                    </h3>
                  </div>
                  <p className="text-[0.7rem] text-gray-600 mb-2">2015 | CGPA: 10</p>
                </div>
              </section>
              <section>
                <h2 style={{ marginBottom: "16px", fontSize: "18px", fontWeight: "bold" }} className="text-blue-500">Other</h2>
                <p className="text-[0.7rem]">English, Hindi</p>
              </section>
            </div>
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
    background-color: #e5e7eb !important; /* Light gray */
    border: 1px solid #d1d5db;
  }
            .print\\:hidden {
              display: none !important;
            }
            #resume-content {
              width: 210mm !important; /* A4 width */
              height: auto !important; /* A4 height */
              padding: 10mm; /* Adjust padding for margins */
              border: none !important;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Resume;
