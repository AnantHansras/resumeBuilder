import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { deleteResume, getAllResume } from "../Services/resumeAPI";
import { toast } from "react-hot-toast";
import { Pencil, Eye, Trash } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { setTemplate } from "../Slices/template";
export default function YourResume() {
  const [refresh,setRefresh] = useState(true);
  const dispatch = useDispatch();
  const [resumes, setResumes] = useState([]);

  const [editTitle, setEditTitle] = useState("");
  const [editingId, setEditingId] = useState(null);

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
          if (res && res.data && res.data.resumes) {
            setResumes(res.data.resumes);
          }
        })
        .catch(() => {
          toast.error("Failed to fetch resumes");
        });
    }
    console.log("YourResume",resumes)
  }, [dispatch, token,refresh]);
  useEffect(() => {
    
  }, []);
  const handleRename = (id) => {
    // Logic to rename resume
    setEditingId(null);
  };

  const handleDelete = (id) => {
    // Logic to delete resume
    dispatch(deleteResume(id,token))
    setRefresh(!refresh)
  };
  const view = (resume)=>{
    dispatch(setTemplate(resume.template))
    navigate("/resume", { state: { formData: resume.resumeData } })
  }
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Your Resumes</h1>
      {resumes.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {resumes.map((resume) => (
            <div key={resume._id} className="p-4 bg-white border rounded-lg shadow-md">
              {editingId === resume._id ? (
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={editTitle}
                    onChange={(e) => setEditTitle(e.target.value)}
                    className="w-full p-2 border rounded-md"
                  />
                  <button
                    onClick={() => handleRename(resume._id)}
                    className="p-2 bg-green-500 text-white rounded-md"
                  >
                    Save
                  </button>
                </div>
              ) : (
                <h2 className="text-lg font-semibold">{resume.name || "Untitled Resume"}</h2>
              )}
              <p className="text-sm text-gray-500">Last Updated: {new Date(resume.updatedAt).toLocaleString()}</p>
              
              <div className="flex justify-between mt-4">
                <button
                  onClick={() => setEditingId(resume._id)}
                  className="flex items-center gap-1 text-blue-600 hover:underline"
                >
                  <Pencil size={16} /> Rename
                </button>
                <button
                  className="flex items-center gap-1 text-green-600 hover:underline"
                  onClick={() => view(resume)}

                >
                  <Eye size={16} /> View
                </button>
                <button
                  onClick={() => handleDelete(resume._id)}
                  className="flex items-center gap-1 text-red-600 hover:underline"
                >
                  <Trash size={16} /> Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-600">No resumes found.</p>
      )}
    </div>
  );
}
