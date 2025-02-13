

import React, { useState, useEffect } from "react";
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
  const [visibleVideos, setVisibleVideos] = useState(6);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  const loadMoreVideos = () => {
    setVisibleVideos((prev) => Math.min(prev + 3, tutorialVideos.length));
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="min-h-screen bg-[#f9faff]">
      <div className="container mx-auto px-4 py-8">
        <motion.div className="text-center mb-12" initial={{ y: 0, opacity: 1 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, type: "spring" }}>
        <h1 className="text-3xl font-bold text-[#07142b] mb-4">Master the Art of Resume Design</h1> <p className="text-[#46464e] max-w-2xl mx-auto">Enhance your resume with expert design and formatting tips. Explore our collection of tutorial videos to create a professional, ATS-friendly resume that stands out.</p>
        </motion.div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {Array(visibleVideos).fill(0).map((_, index) => <SkeletonCard key={index} />)}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {tutorialVideos.slice(0, visibleVideos).map((video, index) => <VideoCard key={video.id} title={video.title} videoId={video.videoId} index={index} />)}
          </div>
        )}

        {visibleVideos < tutorialVideos.length && (
          <div className="flex justify-center mt-8">
            <motion.button onClick={loadMoreVideos} className="bg-[#ffc85e] text-[#07142b] hover:bg-[#ffd78e] rounded-md text-sm font-medium px-6 py-3 transition-colors" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              Load More Videos
            </motion.button>
          </div>
        )}
      </div>
    </motion.div>
  );
}

function VideoCard({ title, videoId, index }) {
  return (
    <motion.div whileHover={{ scale: 1.1, rotate: index % 2 === 0 ? 3 : -3 }} whileTap={{ scale: 0.9 }} initial={{ opacity: 1, y: 0, rotate: 0 }} animate={{ opacity: 1, y: 0, rotate: 0 }} transition={{ duration: 0.6,  type: "spring" }} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col w-full max-w-sm hover:shadow-xl transition-shadow">
      <div className="h-52 relative overflow-hidden">
        <iframe src={`https://www.youtube.com/embed/${videoId}`} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title={title} loading="lazy" className="w-full h-full" />
      </div>
      <div className="p-4 flex-grow flex flex-col justify-between">
        <h2 className="text-lg font-semibold text-[#07142b] mb-4 text-center">{title}</h2>
        <div className="text-center">
          <a href={`https://www.youtube.com/watch?v=${videoId}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-[#ffc85e] text-[#07142b] hover:bg-[#ffd78e] rounded-md text-sm font-medium px-4 py-2 transition-colors">Watch Now</a>
        </div>
      </div>
    </motion.div>
  );
}

function SkeletonCard({key}) {
  return (
    <motion.div whileHover={{ scale: 1.1, rotate: key % 2 === 0 ? 3 : -3 }} whileTap={{ scale: 0.9 }} initial={{ opacity: 0, y: 50, rotate: key % 2 === 0 ? 5 : -5 }} animate={{ opacity: 1, y: 0, rotate: 0 }} transition={{ duration: 0.6, type: "spring" }} 
    className="bg-white rounded-lg shadow-md w-full max-w-sm animate-pulse p-4">
      <div className="h-52 bg-gray-300 rounded-md"></div>
      <div className="mt-4 h-4 bg-gray-300 rounded w-3/4"></div>
      <div className="mt-2 h-4 bg-gray-300 rounded w-1/2"></div>
      <div className="mt-4 h-10 bg-gray-300 rounded w-full"></div>
    </motion.div>
  );
}