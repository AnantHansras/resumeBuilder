import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllResume } from "../Services/resumeAPI";
import { toast } from "react-hot-toast";

export default function YourResume() {
  const dispatch = useDispatch();
  const [resumes, setResumes] = useState([]);
  const storedToken = localStorage.getItem("token");
  const token = storedToken ? JSON.parse(storedToken) : null;
  

  useEffect(() => {
    if (token) {
      dispatch(getAllResume(token))
        .then((res) => {
          if (res && res.data && res.data.resumes) {
            setResumes(res.data.resumes);
            
          }
        })
        .catch((error) => {
          toast.error("Failed to fetch resumes");
        });
    }
  }, [dispatch, token]);

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "16px" }}>Your Resumes</h1>
      { 
        resumes.length > 0 ? (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "16px" }}>
          {resumes.map((resume) => (
            <div key={resume.id} style={{ padding: "16px", border: "1px solid #ccc", borderRadius: "8px", boxShadow: "2px 2px 6px rgba(0, 0, 0, 0.1)" }}>
              <h2 style={{ fontSize: "18px", fontWeight: "600" }}>{resume.title || "Untitled Resume"}</h2>
              <p style={{ fontSize: "14px", color: "#666" }}>Last Updated: {resume.updatedAt}</p>
              <button style={{ marginTop: "8px", width: "100%", padding: "10px", backgroundColor: "#007BFF", color: "white", border: "none", borderRadius: "4px", cursor: "pointer" }}>
                View Resume
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p>No resumes found.</p>
      )}
    </div>
  );
}
