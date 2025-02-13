import React from "react";
import { motion } from "framer-motion";

const tutorialVideos = [
  {
    id: "1",
    title: "How to Write a Professional Resume Using AI | 2024",
    videoId: "XJ7bYdjKDcA",
  }, {
    id: "2",
    title: "How to make Ultimate Resume? Step by step guide for Software Engineers",
    videoId: "y3R9e2L8I9E",
  },
  {
    id: "3",
    title: "I reviewed 4752 resumes so that you can avoid these ...",
    videoId: "eEAEB8qM7Ds",
  },
  {
    id: "4",
    title: "How to Make an ATS Friendly Resume !! (For Freshers/Experienced)",
    videoId: "IIGWpw1FXhk",
  },{
    id: "5",
    title: "This is Why Your Resume Gets Rejected ➤ ATS Resume Format & Tips 2024",
    videoId: "9RkxevxGIoU",
  },
  {
    id: "6",
    title: "How to Make a Google Docs Professional Resume in 5 Minutes! full tutorial",
    videoId: "qPPuW013F-A",
  }
];

export default function Tut1() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen bg-[#f9faff]"
    >
      <div className="container mx-auto px-4 py-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, type: "spring" }}
        >
          <h1 className="text-3xl font-bold text-[#07142b] mb-4">Tutorial Videos</h1>
          <p className="text-[#46464e] max-w-2xl mx-auto">
            Explore our collection of high-quality tutorial videos covering various web development topics. Whether
            you're a beginner or an experienced developer, these tutorials will help you enhance your skills and stay
            up-to-date with the latest technologies.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {tutorialVideos.map((video, index) => (
            <VideoCard key={video.id} title={video.title} videoId={video.videoId} index={index} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function VideoCard({ title, videoId, index }) {
  return (
    <motion.div
      whileHover={{ scale: 1.1, rotate: index % 2 === 0 ? 3 : -3  }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, y: 50, rotate: index % 2 === 0 ? 5 : -5  }}
      animate={{ opacity: 1, y: 0, rotate: 0 }}
      transition={{ duration: 0.6, delay: 0.1, type: "spring" }}
      className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col w-full max-w-sm hover:shadow-xl transition-shadow"
    >
      <div className="h-52 relative overflow-hidden">
        <motion.iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title={title}
          className="w-full h-full"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        />
      </div>
      <div className="p-4 flex-grow flex flex-col justify-between">
        <h2 className="text-lg font-semibold text-[#07142b] mb-4 text-center">{title}</h2>
        <div className="text-center">
          <motion.a
            href={`https://www.youtube.com/watch?v=${videoId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-[#ffc85e] text-[#07142b] hover:bg-[#ffd78e] rounded-md text-sm font-medium px-4 py-2 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Watch Now
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}