const resumeExamples = [
  {
    sector: "Technology",
    description: "Perfect for software developers, IT professionals, and tech managers.",
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    sector: "Healthcare",
    description: "Ideal for doctors, nurses, and healthcare administrators.",
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    sector: "Finance",
    description: "Tailored for accountants, financial analysts, and bankers.",
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    sector: "Education",
    description: "Designed for teachers, professors, and education administrators.",
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    sector: "Marketing",
    description: "Crafted for marketing managers, content creators, and PR specialists.",
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    sector: "Engineering",
    description: "Suitable for civil, mechanical, and electrical engineers.",
    image: "/placeholder.svg?height=400&width=300",
  },
];

export default function ResumeExamples() {
  return (
    <div className="min-h-screen bg-[#f9faff] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-[#07142b] mb-12">
          Resume Examples by Job Sector
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {resumeExamples.map((example, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:scale-105 group"
            >
              <div className="relative">
                <img
                  src={example.image || "/placeholder.svg"}
                  alt={`${example.sector} Resume Example`}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <a
                    href="#"
                    className="bg-[#ffc85e] hover:bg-[#ffd78e] text-[#07142b] font-bold py-2 px-4 rounded-full transition-colors duration-300"
                  >
                    Download Resume
                  </a>
                </div>
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold text-[#07142b] group-hover:text-[#0070d6] transition-colors duration-300">
                  {example.sector}
                </h2>
                <p className="mt-2 text-[#46464e]">{example.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

