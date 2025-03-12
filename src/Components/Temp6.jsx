const Temp6 = ({ formData }) => {
  const getSkillLevel = (index) => {
    const levels = [85, 90, 75, 95, 80, 70, 85, 90]
    return levels[index % levels.length]
  }

  return (
    <div className="font-sans bg-white relative" style={{ width: "794px", height: "1123px", padding: "40px" }}>
      {/* Header */}
      {formData?.personalInfo && (
        <header className="flex justify-between items-center mb-4 pb-2 border-b border-gray-300">
          <div>
            <h1 className="text-3xl font-bold text-black tracking-wide">{formData.personalInfo.name}</h1>
            <p className="text-blue-500 font-medium">{formData.personalInfo.position}</p>

            <div className="flex gap-4 mt-2 text-sm">
              {formData.personalInfo.phone && (
                <div className="flex items-center gap-1">
                  <span className="text-blue-500">📱</span>
                  <span>{formData.personalInfo.phone}</span>
                </div>
              )}
              {formData.personalInfo.email && (
                <div className="flex items-center gap-1">
                  <span className="text-blue-500">✉️</span>
                  <span>{formData.personalInfo.email}</span>
                </div>
              )}
            </div>
          </div>
          <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </div>
        </header>
      )}

      <div className="grid grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="col-span-1">
          {/* Education */}
          {formData.education && (
            <section className="mb-6">
              <h2 className="text-lg font-bold uppercase border-b border-gray-300 pb-1 mb-3">Education</h2>
              <div className="space-y-4">
                {Object.values(formData.education).map((edu, index) => (
                  <div key={index} className="relative">
                    <h3 className="font-semibold text-sm">{edu.name}</h3>
                    <p className="italic text-sm text-gray-700">{edu.degree || "Senior Secondary (XII)"}</p>
                    <p className="text-xs text-gray-600">
                      {edu.cg ? `CGPA: ${edu.cg}` : `Percentage: ${edu.percentage}`}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Skills */}
          {formData.skills?.length > 0 && (
            <section className="mb-6">
              <h2 className="text-lg font-bold uppercase border-b border-gray-300 pb-1 mb-3">Skills</h2>
              <div className="grid grid-cols-2 gap-2">
                {formData.skills.map((skill, index) => (
                  <div key={index} className="text-sm bg-gray-100 px-2 py-1 rounded">
                    {skill}
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Right Column */}
        <div className="col-span-2">
          {/* Key Achievements */}
          <section className="mb-6">
            <h2 className="text-lg font-bold uppercase border-b border-gray-300 pb-1 mb-3">Key Achievements</h2>
            <div className="space-y-3">
              <div className="flex gap-2">
                <div className="text-blue-500 flex-shrink-0">🏆</div>
                <div>
                  <h3 className="font-semibold text-sm">Cyber Olympiad Achievement</h3>
                  <p className="text-xs text-gray-700">
                    Secured Top Rank 1st and State Rank 24th in 13th National Cyber Olympiad.
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <div className="text-blue-500 flex-shrink-0">🥇</div>
                <div>
                  <h3 className="font-semibold text-sm">Code Gladiator 2020 Semi Finalist</h3>
                  <p className="text-xs text-gray-700">Semi Finalist at Code Gladiator 2020.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Experience */}
          {formData.experience?.length > 0 && (
            <section className="mb-6">
              <h2 className="text-lg font-bold uppercase border-b border-gray-300 pb-1 mb-3">Experience</h2>
              {formData.experience.map((exp, index) => (
                <div key={index} className="relative mb-4">
                  <h3 className="font-semibold text-sm text-gray-900">{exp.position}</h3>
                  <p className="italic text-sm text-blue-500">{exp.company}</p>
                  <p className="text-xs text-gray-700 mt-1">{exp.description}</p>
                </div>
              ))}
            </section>
          )}

          {/* Projects */}
          {formData.projects?.length > 0 && (
            <section className="mb-6">
              <h2 className="text-lg font-bold uppercase border-b border-gray-300 pb-1 mb-3">Projects</h2>
              {formData.projects.map((proj, index) => (
                <div key={index} className="relative mb-4">
                  <h3 className="font-semibold text-sm text-gray-900">{proj.name}</h3>
                  <p className="italic text-sm text-blue-500">{proj.techStack}</p>
                  <p className="text-xs text-gray-700 mt-1">{proj.description}</p>
                </div>
              ))}
            </section>
          )}
        </div>
      </div>
    </div>
  )
}

export default Temp6


  
  