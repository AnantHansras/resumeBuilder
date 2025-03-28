import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { changeResumeName, deleteResume, getAllResume } from "../Services/resumeAPI";
import { toast } from "react-hot-toast";
import { Pencil, Eye, Trash, BarChart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { setTemplate } from "../Slices/template";
import { geminichatSession } from "../../server/utils/gemini";

export default function YourResume() {
  const [refresh, setRefresh] = useState(true);
  const dispatch = useDispatch();
  const [resumes, setResumes] = useState([]);
  const [editTitle, setEditTitle] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [atsScore, setAtsScore] = useState(null);

  const storedToken = localStorage.getItem("token");
  const token = storedToken ? JSON.parse(storedToken) : null;
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      toast.error("Please log in first.");
      navigate("/");
    }
  }, [navigate]);

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
    setEditingId(null);
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

  const getATSScore = async (fileContent) => {
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
    setLoading(true);
    try {
      const result = await geminichatSession.sendMessage(formattedPrompt);
      const responseText = await result.response.text();
      console.log(result)
      navigate('/ATS', { state: { atsScore:responseText } });
    } catch (error) {
      console.log(error)
      toast.error("Failed to fetch ATS score");
    }
    setLoading(false);
    
  };

  return (
    <div className="p-6 py-20 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8">Your Resumes</h1>
      {resumes.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {resumes.map((resume) => (
            <div
              key={resume._id}
              className="p-6 bg-white border rounded-lg shadow-lg transition-transform transform hover:scale-105"
            >
              {editingId === resume._id ? (
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={editTitle}
                    onChange={(e) => setEditTitle(e.target.value)}
                    className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter new name"
                  />
                  <button
                    onClick={() => handleRename(resume._id)}
                    className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition"
                  >
                    Save
                  </button>
                </div>
              ) : (
                <h2 className="text-lg font-semibold truncate">{resume.name || "Untitled Resume"}</h2>
              )}
              <p className="text-sm text-gray-500 mt-1">Last Updated: {new Date(resume.updatedAt).toLocaleString()}</p>

              <div className="mt-4 flex text-sm flex-wrap justify-between items-center">
                <button
                  onClick={() => setEditingId(resume._id)}
                  className="flex items-center gap-1 px-2 py-1 rounded-md text-blue-600 hover:bg-blue-100 transition"
                >
                  <Pencil size={12} /> Rename
                </button>
                <button
                  className="flex items-center gap-1 px-2 py-1 rounded-md text-green-600 hover:bg-green-100 transition"
                  onClick={() => view(resume)}
                >
                  <Eye size={12} /> View
                </button>
                <button
                  onClick={() => handleDelete(resume._id)}
                  className="flex items-center gap-1 px-2 py-1 rounded-md text-red-600 hover:bg-red-100 transition"
                >
                  <Trash size={12} /> Delete
                </button>
                <button
                  onClick={() => getATSScore(resume.resumeData)}
                  className="flex items-center gap-1 px-2 py-1 rounded-md text-purple-600 hover:bg-purple-100 transition"
                  disabled={loading}
                >
                  <BarChart size={12} /> {loading ? "Checking..." : "ATS Score"}
                </button>
              </div>
              {atsScore && <p className="text-sm text-purple-600 mt-2">ATS Score: {atsScore}</p>}
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-600 text-center">No resumes found.</p>
      )}
    </div>
  );
}

