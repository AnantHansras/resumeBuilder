import { Mail, Phone, Calendar } from "lucide-react";
import { ExternalLink } from 'lucide-react';
import { BiLink } from "react-icons/bi"; // Import icon
const Temp2 = ({ formData }) => {
  return (
    <div className="max-w-[794px] border border-gray-200 mx-auto flex justify-center items-center rounded-md shadow-2xl bg-white text-gray-800 font-sans"
    style={{
      width: "794px",
      height: "1123px",
      boxSizing: "border-box",
    }}>

<div className="font-sans" style={{ width: "794px", height: "1123px",padding:"60px" }}>
      {/* Header with background */}
      <div className="bg-gray-100 p-4 rounded-lg mb-6 -mt-6">
        {formData?.personalInfo && (
          <div className="flex flex-col items-center text-center">
            {formData.personalInfo.name && (
              <h1 className="text-xl font-bold mb-2 text-gray-800 font-sans">{formData.personalInfo.name}</h1>
            )}
            {formData.personalInfo.position && (
              <p className="text-gray-600 font-[500] text-xs uppercase mb-3 font-sans">{formData.personalInfo.position}</p>
            )}
            <div className="flex gap-4 text-[0.65rem] mt-2">
              {formData.personalInfo.phone && (
                <p className="flex items-center font-sans italic">
                  <span ><Phone className="inline w-4 h-4 mr-1 font-sans italic " /></span> {formData.personalInfo.phone}
                </p>
              )}
              {formData.personalInfo.email && (
                <p className="flex items-center font-sans italic">
                  <span ><Mail className="inline w-4 h-4 mr-1 font-sans italic" /></span> {formData.personalInfo.email}
                </p>
              )}
              {formData.personalInfo.dob && (
                <p className="flex items-center font-sans italic">
                  <span><Calendar className="inline w-4 h-4 mr-1 font-sans italic" /></span> {formData.personalInfo.dob}
                </p>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Main content */}
      <div className="grid grid-cols-3 gap-6">
        {/* Left column - Skills and Education */}
        <div className="col-span-1">
          {/* Skills */}
          {/* Skills */}
{formData.skills && formData.skills.length > 0 && (
  <section className="mb-[1.64rem]">
    <h2 className="text-gray-800 border-b-2 border-gray-300 pb-2 mb-4 text-lg font-bold font-sans">SKILLS</h2>
    <div className="flex flex-wrap gap-2">
      {formData.skills.map((skill, index) => (
        <span
          key={index}
          className="bg-gray-100 text-gray-800 text-[14px] font-semibold rounded-full px-3 py-1 flex items-center justify-center"
        >
          {skill}
        </span>
      ))}
    </div>
  </section>
)}


          {/* Education */}
          {formData.education && (
            <section className="mb-[1.64rem]">
              <h2 className="text-gray-800 border-b-2 border-gray-300 pb-2 mb-4 text-lg font-bold font-sans">EDUCATION</h2>

              {formData.education?.higher && (
                <div className="mb-4">
                  <h3 className="font-bold text-[0.7rem] font-sans ">{formData.education.higher.degree}</h3>
                  <p className="italic text-[0.7rem] text-gray-700 font-sans ">{formData.education.higher.name}</p>
                  <p className="text-[0.7rem] text-gray-600 font-sans font-semibold">
                    {formData.education.higher.year} |{" "}
                    {formData.education.higher.percentage <= 10
                      ? `CGPA: ${formData.education.higher.percentage}`
                      : `Percentage: ${formData.education.higher.percentage}%`}
                  </p>
                </div>
              )}

              {formData.education?.twelfth && (
                <div className="mb-4">
                  <h3 className="font-bold text-[0.7rem] font-sans">Senior Secondary(XII)</h3>
                  <p className="italic text-[0.7rem] text-gray-700 font-sans">{formData.education.twelfth.name}</p>
                  <p className="text-[0.7rem] text-gray-600 font-sans font-semibold">
                    {formData.education.twelfth.year} |{" "}
                    {formData.education.twelfth.percentage <= 10
                      ? `CGPA: ${formData.education.twelfth.percentage}`
                      : `Percentage: ${formData.education.twelfth.percentage}%`}
                  </p>
                </div>
              )}

              {formData.education?.tenth && (
                <div className="mb-4">
                  <h3 className="font-bold text-[0.7rem] font-sans">Secondary (X) </h3>
                  <p className="italic text-[0.7rem] text-gray-700 font-sans">{formData.education.tenth.name}</p>
                  <p className="text-[0.7rem] text-gray-600 font-sans font-semibold">
                    {formData.education.tenth.year} |{" "}
                    {formData.education.tenth.percentage <= 10
                      ? `CGPA: ${formData.education.tenth.percentage}`
                      : `Percentage: ${formData.education.tenth.percentage}%`}
                  </p>
                </div>
              )}
            </section>
          )}

          {/* Profiles */}
        </div>

        {/* Right column - Experience, Projects, Achievements */}
        <div className="col-span-2">
          {/* Experience */}
          {Array.isArray(formData.experience) && formData.experience.length > 0 && (
            <section className="mb-6 font-sans">
              <h2 className="text-gray-800 border-b-2 border-gray-300 pb-2 mb-4 text-lg font-bold font-sans">EXPERIENCE</h2>
              {formData.experience.map((exp, index) => (
                <div key={index} className="mb-6">
                  <div className="flex justify-between items-baseline">
                    <h3 className="font-semibold text-[0.75rem] text-gray-800">{exp.position}</h3>
                    <p className="text-[0.65rem] font-sans text-gray-600">{exp.duration}</p>
                  </div>
                  <p className="italic text-[0.7rem] text-gray-700 mb-2">{exp.company}</p>
                  <p className="text-[0.7rem] font-sans text-gray-700">{exp.description}</p>
                </div>
              ))}
            </section>
          )}

          {/* Projects */}
          <section className="mb-6">
            <h2 className="text-gray-800 border-b-2 border-gray-300 pb-2 mb-4 text-lg font-bold font-sans">PROJECTS</h2>
            {formData.projects &&
              formData.projects.length > 0 &&
              formData.projects.map((proj, index) => (
                <div key={index} className="mb-4">
                  <div className="flex justify-between items-center">
                    <h3 className="font-bold text-[0.8rem] text-gray-800 font-sans">{proj.name}</h3>
                    {proj.link && (
                      <a
                        href={proj.link.startsWith("http") ? proj.link : `https://${proj.link}`}
                        className="text-gray-800 text-[0.65rem] hover:text-blue-700"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-[0.85rem] ml-1 -mb-[0.15rem]"/>
                      </a>
                    )}
                  </div>
                  <p className="text-[0.7rem] text-gray-700 mb-1 font-sans italic">{proj.techStack}</p>
                  <p className="text-gray-700 font-sans text-[0.7rem]">{proj.description}</p>
                </div>
              ))}
          </section>

          {/* Achievements */}
          {formData?.achievements?.length > 0 && (
            <section className="mb-4">
              <h2 className="text-gray-800 border-b-2 border-gray-300 pb-2 mb-4 text-lg font-bold uppercase font-sans">achievements</h2>
              <ul className="list-disc list-inside text-gray-700 font-sans pl-2">
                {formData.achievements.map((a, index) => (
                  <li className="mb-2 text-[0.7rem] font-sans" key={index}>
                    <span className="font-sans -ml-[0.45rem]">{a}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}
          {/* Others */}
          

{formData?.others?.length > 0 && (
  <section>
    <h2 className="text-gray-800 border-b-2 border-gray-300 pb-2 mb-4 text-lg font-bold font-sans">
      OTHER
    </h2>
    <ul className="list-disc pl-5 space-y-2">
      {formData.others.map((item, index) => (
        <li key={index} className="text-[0.7rem] text-gray-700 font-sans">
          {item?.text}
          {item?.link && (
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center ml-2 text-gray-800 hover:underline"
            >
              <BiLink className="inline-block text-xs" />
            </a>
          )}
        </li>
      ))}
    </ul>
  </section>
)}

        </div>
      </div>
    </div>
    
    </div>
    
  )
}

export default Temp2