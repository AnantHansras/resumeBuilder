const Temp6 = ({ formData }) => {
    const getSkillLevel = (index) => {
      const levels = [85, 90, 75, 95, 80, 70, 85, 90];
      return levels[index % levels.length];
    };
  
    return (
      <div
        className="font-sans bg-white relative"
        style={{ width: "794px", height: "1123px", padding: "60px" }}
      >
        {/* Background Design */}
        <div className="absolute top-0 left-0 w-full h-full -z-10">
          <div className="absolute top-0 left-0 w-[40%] h-full bg-teal-50"></div>
          <div className="absolute top-0 right-0 w-[60%] h-full bg-white"></div>
          <div className="absolute top-0 left-[40%] h-full w-[15px] bg-gradient-to-r from-teal-100 to-transparent"></div>
          <div className="absolute top-0 left-0 w-full h-[15%] bg-teal-800"></div>
        </div>
  
        {/* Header */}
        {formData?.personalInfo && (
          <header className="relative text-white mb-12 -mt-[30px] -ml-[30px] -mr-[30px] p-8 pt-12">
            <div className="flex justify-between items-end">
              <div>
                <h1 className="text-xl font-bold tracking-wide">{formData.personalInfo.name}</h1>
                <p className="text-teal-100 font-medium text-sm uppercase">{formData.personalInfo.position}</p>
              </div>
              <div className="flex gap-6 text-xs">
                {formData.personalInfo.phone && (
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center mb-1">📱</div>
                    <span>{formData.personalInfo.phone}</span>
                  </div>
                )}
                {formData.personalInfo.email && (
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center mb-1">✉️</div>
                    <span>{formData.personalInfo.email}</span>
                  </div>
                )}
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-[15px] bg-teal-700"></div>
          </header>
        )}
  
        {/* Content Layout */}
        <div className="grid grid-cols-10 gap-6">
          {/* Left Column */}
          <div className="col-span-4 pr-4">
            {/* Skills */}
            {formData.skills?.length > 0 && (
              <section className="mb-8">
                <h2 className="text-lg font-bold text-teal-800 mb-6">Skills</h2>
                {formData.skills.map((skill, index) => (
                  <div key={index} className="mb-3">
                    <div className="flex justify-between text-sm font-bold mb-1">
                      <span>{skill}</span>
                      <span>{getSkillLevel(index)}%</span>
                    </div>
                    <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-teal-700 to-teal-500" style={{ width: `${getSkillLevel(index)}%` }}></div>
                    </div>
                  </div>
                ))}
              </section>
            )}
  
            {/* Education */}
            {formData.education && (
              <section className="mb-8">
                <h2 className="text-lg font-bold text-teal-800 mb-6">Education</h2>
                <div className="border-l-2 border-teal-200 pl-6 space-y-6">
                  {Object.values(formData.education).map((edu, index) => (
                    <div key={index} className="relative">
                      <h3 className="font-semibold text-sm">{edu.name}</h3>
                      <p className="italic text-sm text-gray-700">{edu.degree || "Senior Secondary (XII)"}</p>
                      <p className="text-xs text-gray-600">{edu.cg ? `CGPA: ${edu.cg}` : `Percentage: ${edu.percentage}`}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>
  
          {/* Right Column */}
          <div className="col-span-6">
            {/* Experience */}
            {formData.experience?.length > 0 && (
              <section className="mb-8">
                <h2 className="text-lg font-bold text-teal-800 mb-6">Experience</h2>
                {formData.experience.map((exp, index) => (
                  <div key={index} className="relative mb-6">
                    <h3 className="font-semibold text-sm text-gray-900">{exp.position}</h3>
                    <p className="italic text-sm text-teal-700">{exp.company}</p>
                    <p className="text-xs text-gray-700">{exp.description}</p>
                  </div>
                ))}
              </section>
            )}
  
            {/* Projects */}
            {formData.projects?.length > 0 && (
              <section className="mb-8">
                <h2 className="text-lg font-bold text-teal-800 mb-6">Projects</h2>
                {formData.projects.map((proj, index) => (
                  <div key={index} className="relative mb-6">
                    <h3 className="font-semibold text-sm text-gray-900">{proj.name}</h3>
                    <p className="italic text-sm text-teal-700">{proj.techStack}</p>
                    <p className="text-xs text-gray-700">{proj.description}</p>
                  </div>
                ))}
              </section>
            )}
          </div>
        </div>
      </div>
    );
  };
  
  export default Temp6;
  
  