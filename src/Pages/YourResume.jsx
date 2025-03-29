// import { useEffect, useState } from "react";
// import { useDispatch } from "react-redux";
// import { changeResumeName, deleteResume, getAllResume } from "../Services/resumeAPI";
// import { toast } from "react-hot-toast";
// import { Pencil, Eye, Trash, BarChart } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import { setTemplate } from "../Slices/template";
// import { geminichatSession } from "../../server/utils/gemini";

// export default function YourResume() {
//   const [refresh, setRefresh] = useState(true);
//   const dispatch = useDispatch();
//   const [resumes, setResumes] = useState([]);
//   const [editTitle, setEditTitle] = useState("");
//   const [editingId, setEditingId] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [atsScore, setAtsScore] = useState(null);

//   const storedToken = localStorage.getItem("token");
//   const token = storedToken ? JSON.parse(storedToken) : null;
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (!token) {
//       toast.error("Please log in first.");
//       navigate("/");
//     }
//   }, [navigate]);

//   useEffect(() => {
//     if (token) {
//       dispatch(getAllResume(token))
//         .then((res) => {
//           if (res?.data?.resumes) {
//             setResumes(res.data.resumes);
//           }
//         })
//         .catch(() => {
//           toast.error("Failed to fetch resumes");
//         });
//     }
//   }, [dispatch, token, refresh]);

//   const handleRename = async (id) => {
//     await dispatch(changeResumeName(editTitle, id, token));
//     setRefresh(!refresh);
//     setEditingId(null);
//     setEditTitle("");
//   };

//   const handleDelete = async (id) => {
//     await dispatch(deleteResume(id, token));
//     setRefresh(!refresh);
//   };

//   const view = async (resume) => {
//     await dispatch(setTemplate(resume.template));
//     navigate("/resume", { state: { formData: resume.resumeData } });
//   };

//   const getATSScore = async (fileContent) => {
//     const formattedResume = `
//     Name: ${fileContent.personalInfo.name}
//     Email: ${fileContent.personalInfo.email}
//     Phone: ${fileContent.personalInfo.phone}
//     Position: ${fileContent.personalInfo.position}

//     Education:
//     - ${fileContent.education.higher.degree} from ${fileContent.education.higher.name} (${fileContent.education.higher.year}) - ${fileContent.education.higher.percentage} CGPA
//     - 12th: ${fileContent.education.twelfth.name} (${fileContent.education.twelfth.year}) - ${fileContent.education.twelfth.percentage}%
//     - 10th: ${fileContent.education.tenth.name} (${fileContent.education.tenth.year}) - ${fileContent.education.tenth.percentage} CGPA

//     Experience:
//     ${fileContent.experience.map(exp => `- ${exp.position} at ${exp.company} (${exp.duration})\n  ${exp.description}`).join("\n")}

//     Projects:
//     ${fileContent.projects.map(proj => `- ${proj.name}: ${proj.description} (Tech Stack: ${proj.techStack})`).join("\n")}

//     Skills:
//     ${fileContent.skills.join(", ")}
//     `;
//     const prompt = `Analyze the following resume for ATS (Applicant Tracking System) compatibility.  

// - **Assign an ATS Score (0-100)** based on keyword relevance, industry standards, and job-specific optimization.  
// - **Provide structured feedback** in the following format:  
//   1. **ATS Compatibility Score:** [Score]  
//   2. **Positive Aspects:** [Bullet Points]  
//   3. **Areas for Improvement:** [Bullet Points]  
//   4. **Recommended Keywords/Skills to Improve Ranking:** [List of Keywords] (at max 10)(dont add fake data improve given data)  
// - Ensure the response is **formatted as JSON** for structured rendering on a webpage.

// Resume Content:  
// {data}\n
// resposne format : {
//   "atsScore": "
// json\n{\n  \"ATS_Analysis\": {\n    \"ATS_Compatibility_Score\": 65,\n    \"Positive_Aspects\": [],\n    \"Recommended_Keywords_Skills\": [],\n  }\n}\n
// "
// }
// ` ;
//     console.log(fileContent)
//     const formattedPrompt = prompt.replace("{data}", formattedResume);
//     console.log(formattedPrompt)
//     setLoading(true);
//     try {
//       const result = await geminichatSession.sendMessage(formattedPrompt);
//       const responseText = await result.response.text();
//       console.log(result)
//       navigate('/ATS', { state: { atsScore:responseText } });
//     } catch (error) {
//       console.log(error)
//       toast.error("Failed to fetch ATS score");
//     }
//     setLoading(false);
    
//   };

//   return (
//     <div className="p-6 py-20 max-w-7xl mx-auto">
//       <h1 className="text-3xl font-bold text-center mb-8">Your Resumes</h1>
//       {resumes.length > 0 ? (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {resumes.map((resume) => (
//             <div
//               key={resume._id}
//               className="p-6 bg-white border rounded-lg shadow-lg transition-transform transform hover:scale-105"
//             >
//               {editingId === resume._id ? (
//                 <div className="flex items-center gap-2">
//                   <input
//                     type="text"
//                     value={editTitle}
//                     onChange={(e) => setEditTitle(e.target.value)}
//                     className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     placeholder="Enter new name"
//                   />
//                   <button
//                     onClick={() => handleRename(resume._id)}
//                     className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition"
//                   >
//                     Save
//                   </button>
//                 </div>
//               ) : (
//                 <h2 className="text-lg font-semibold truncate">{resume.name || "Untitled Resume"}</h2>
//               )}
//               <p className="text-sm text-gray-500 mt-1">Last Updated: {new Date(resume.updatedAt).toLocaleString()}</p>

//               <div className="mt-4 flex text-sm flex-wrap justify-between items-center">
//                 <button
//                   onClick={() => setEditingId(resume._id)}
//                   className="flex items-center gap-1 px-2 py-1 rounded-md text-blue-600 hover:bg-blue-100 transition"
//                 >
//                   <Pencil size={12} /> Rename
//                 </button>
//                 <button
//                   className="flex items-center gap-1 px-2 py-1 rounded-md text-green-600 hover:bg-green-100 transition"
//                   onClick={() => view(resume)}
//                 >
//                   <Eye size={12} /> View
//                 </button>
//                 <button
//                   onClick={() => handleDelete(resume._id)}
//                   className="flex items-center gap-1 px-2 py-1 rounded-md text-red-600 hover:bg-red-100 transition"
//                 >
//                   <Trash size={12} /> Delete
//                 </button>
//                 <button
//                   onClick={() => getATSScore(resume.resumeData)}
//                   className="flex items-center gap-1 px-2 py-1 rounded-md text-purple-600 hover:bg-purple-100 transition"
//                   disabled={loading}
//                 >
//                   <BarChart size={12} /> {loading ? "Checking..." : "ATS Score"}
//                 </button>
//               </div>
//               {atsScore && <p className="text-sm text-purple-600 mt-2">ATS Score: {atsScore}</p>}
//             </div>
//           ))}
//         </div>
//       ) : (
//         <p className="text-gray-600 text-center">No resumes found.</p>
//       )}
//     </div>
//   );
// }

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { changeResumeName, deleteResume, getAllResume } from "../Services/resumeAPI";
import { toast } from "react-hot-toast";
import { Pencil, Eye, Trash2, BarChart3, Plus, Search, SortAsc, Loader2, Check } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { setTemplate } from "../Slices/template";
import { geminichatSession } from "../../server/utils/gemini";

export default function YourResume() {
  const [resumes, setResumes] = useState([]);
  const [editingId, setEditingId] = useState("");
  const [editTitle, setEditTitle] = useState("");
  const [loadingStates, setLoadingStates] = useState({});
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("newest");
  const [refresh, setRefresh] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const storedToken = localStorage.getItem("token");
  const token = storedToken ? JSON.parse(storedToken) : null;

  useEffect(() => {
    if (!token) {
      toast.error("Please log in first.");
      navigate("/");
    }
  }, [navigate, token]);

  useEffect(() => {
    if (token) {
      dispatch(getAllResume(token))
        .then((res) => {
          if (res?.data?.resumes) {
            setResumes(res.data.resumes);
          }
        })
        .catch(() => {
          toast.error("Failed to fetch resumes");
        });
    }
  }, [dispatch, token, refresh]);

  const handleRename = async (id) => {
    await dispatch(changeResumeName(editTitle, id, token));
    setRefresh(!refresh);
    setEditingId("");
    setEditTitle("");
  };

  const handleDelete = async (id) => {
    await dispatch(deleteResume(id, token));
    setRefresh(!refresh);
  };

  const view = async (resume) => {
    await dispatch(setTemplate(resume.template));
    navigate("/resume", { state: { formData: resume.resumeData } });
  };

  const getATSScore = async (resume) => {
    setLoadingStates((prev) => ({ ...prev, [resume._id]: true }));
    const fileContent = resume.resumeData;
    const formattedResume = `
    Name: ${fileContent.personalInfo.name}
    Email: ${fileContent.personalInfo.email}
    Phone: ${fileContent.personalInfo.phone}
    Position: ${fileContent.personalInfo.position}

    Education:
    - ${fileContent.education.higher.degree} from ${fileContent.education.higher.name} (${fileContent.education.higher.year}) - ${fileContent.education.higher.percentage} CGPA
    - 12th: ${fileContent.education.twelfth.name} (${fileContent.education.twelfth.year}) - ${fileContent.education.twelfth.percentage}%
    - 10th: ${fileContent.education.tenth.name} (${fileContent.education.tenth.year}) - ${fileContent.education.tenth.percentage} CGPA

    Experience:
    ${fileContent.experience.map(exp => `- ${exp.position} at ${exp.company} (${exp.duration})\n  ${exp.description}`).join("\n")}

    Projects:
    ${fileContent.projects.map(proj => `- ${proj.name}: ${proj.description} (Tech Stack: ${proj.techStack})`).join("\n")}

    Skills:
    ${fileContent.skills.join(", ")}
    `;
    const prompt = `Analyze the following resume for ATS (Applicant Tracking System) compatibility.  

- **Assign an ATS Score (0-100)** based on keyword relevance, industry standards, and job-specific optimization.  
- **Provide structured feedback** in the following format:  
  1. **ATS Compatibility Score:** [Score]  
  2. **Positive Aspects:** [Bullet Points]  
  3. **Areas for Improvement:** [Bullet Points]  
  4. **Recommended Keywords/Skills to Improve Ranking:** [List of Keywords] (at max 10)(dont add fake data improve given data)  
- Ensure the response is **formatted as JSON** for structured rendering on a webpage.

Resume Content:  
{data}\n
resposne format : {
  "atsScore": "
json\n{\n  \"ATS_Analysis\": {\n    \"ATS_Compatibility_Score\": 65,\n    \"Positive_Aspects\": [],\n    \"Recommended_Keywords_Skills\": [],\n  }\n}\n
"
}
` ;
    console.log(fileContent)
    const formattedPrompt = prompt.replace("{data}", formattedResume);
    console.log(formattedPrompt)
    
    try {
      const result = await geminichatSession.sendMessage(formattedPrompt);
      const responseText = await result.response.text();
      console.log(result)
      setLoadingStates((prev) => ({ ...prev, [resume._id]: false }));
      navigate('/ATS', { state: { atsScore:responseText } });
    } catch (error) {
      console.log(error)
      toast.error("Failed to fetch ATS score");
    }
    setLoadingStates((prev) => ({ ...prev, [resume._id]: false }));
    
  };

  const filteredResumes = resumes.filter((resume) =>
    resume.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortedResumes = [...filteredResumes].sort((a, b) => {
    if (sortOrder === "newest") return new Date(b.updatedAt) - new Date(a.updatedAt);
    if (sortOrder === "oldest") return new Date(a.updatedAt) - new Date(b.updatedAt);
    if (sortOrder === "alphabetical") return a.name.localeCompare(b.name);
    return 0;
  });

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
    }).format(date);
  };

  return (
    <div className="p-6 py-20 max-w-7xl mx-auto">
      {/* Header and Controls */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <h1 className="text-3xl font-bold">Your Resumes</h1>
        <button onClick={() => navigate("/create-resume")} className="flex items-center bg-gray-900 text-white px-4 py-2 rounded hover:bg-gray-600">
          <Plus className="mr-2 h-4 w-4" /> Create New Resume
        </button>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <input
            type="text"
            placeholder="Search resumes..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 p-2 border rounded w-full"
          />
        </div>
        <div className="flex items-center gap-2">
          <SortAsc className="h-5 w-5 text-gray-600" />
          <select
            className="p-2 border rounded"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
            <option value="alphabetical">Alphabetical</option>
          </select>
        </div>
      </div>

      {/* Resume Grid */}
      {sortedResumes.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedResumes.map((resume) => (
            <div key={resume._id} className="border rounded-lg shadow-md overflow-hidden">
              <div className="p-5 bg-gray-50">
                {editingId === resume._id ? (
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      value={editTitle}
                      onChange={(e) => setEditTitle(e.target.value)}
                      className="flex-grow border rounded p-1"
                      placeholder="Enter resume name"
                      autoFocus
                    />
                    <button
                      onClick={() => handleRename(resume._id)}
                      className="bg-green-500 text-white p-1 rounded"
                    >
                      <Check className="h-4 w-4" />
                    </button>
                  </div>
                ) : (
                  <div className="flex items-center justify-between">
                    <h2 className="text-lg font-semibold">{resume.name}</h2>
                    <button onClick={() => setEditingId(resume._id)} className="text-gray-600 hover:text-blue-500">
                      <Pencil className="h-4 w-4" />
                    </button>
                  </div>
                )}
              </div>

              <div className="p-5">
                <p className="text-sm text-gray-500">Last updated: {formatDate(resume.updatedAt)}</p>
              </div>

              <div className="bg-gray-50 rounded-lg shadow-md p-4 flex justify-between items-center">
                <button onClick={() => view(resume)} className="flex items-center gap-2 bg-white p-2 rounded-md border border-gray-300 hover:bg-gray-100">
                  <Eye className="h-4 w-4" />
                  View
                </button>

                <button onClick={() => getATSScore(resume)} className="flex items-center gap-2 bg-white p-2 rounded-md border border-gray-300 hover:bg-gray-100">
                  {loadingStates[resume._id] ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Analyzing...
                    </>
                  ) : (
                    <>
                      <BarChart3 className="h-4 w-4" />
                      ATS Score
                    </>
                  )}
                </button>

                <button onClick={() => handleDelete(resume._id)} className="flex items-center gap-2 text-red-600 hover:text-red-700 bg-white p-2 rounded-md border border-gray-300 hover:bg-gray-100">
                  <Trash2 className="h-4 w-4" />
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-500">No resumes found</div>
      )}
    </div>
  );
}

