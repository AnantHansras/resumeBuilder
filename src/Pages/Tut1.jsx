import React, { useState } from "react";
import { motion } from "framer-motion";

const tutorialVideos = [
  { id: "1", title: "How to make Ultimate Resume ? Step by step guide for Software Engineers", videoId: "y3R9e2L8I9E" },
  { id: "2", title: "Resume for FRESHERS | Nothing To Write in CV?", videoId: "QRCFeWyPtwg" },
  { id: "3", title: "How to make ATS Friendly Resume", videoId: "F4zEkiutI1Q" },
  { id: "4", title: "I reviewed 4752 resumes so that you can avoid these Resume Mistakes", videoId: "eEAEB8qM7Ds" },
  { id: "5", title: "Resume Format for Freshers", videoId: "VB376MMEq38" },
  { id: "6", title: "My Resume (EZSNIPPET)", videoId: "SHT0y9Gq_rk" },
  { id: "7", title: "Write an Incredible Resume: 5 Golden Rules!", videoId: "Tt08KmFfIYQ" },
  { id: "8", title: "How to Make An Impressive Resume for FREE (in 2024)", videoId: "7apj4sVvbro" },
  { id: "9", title: "The BEST Professional Summary Formula for Resume or LinkedIn!", videoId: "Bip6BXtOQ_I" },
  { id: "10", title: "How to Make a Google Docs Professional Resume in 5 Minutes!", videoId: "qPPuW013F-A" },
];

export default function Tut1() {
  const [visibleVideos, setVisibleVideos] = useState(6);

  const loadMoreVideos = () => {
    setVisibleVideos((prev) => Math.min(prev + 3, tutorialVideos.length));
  };

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
            Explore our collection of high-quality tutorial videos covering various web development topics.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {tutorialVideos.slice(0, visibleVideos).map((video, index) => (
            <VideoCard key={video.id} title={video.title} videoId={video.videoId} index={index} />
          ))}
        </div>
        
        {visibleVideos < tutorialVideos.length && (
          <div className="flex justify-center mt-8">
            <motion.button 
              onClick={loadMoreVideos} 
              className="bg-[#ffc85e] text-[#07142b] hover:bg-[#ffd78e] rounded-md text-sm font-medium px-6 py-3 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
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
    <motion.div
      whileHover={{ scale: 1.1, rotate: index % 2 === 0 ? 3 : -3 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, y: 50, rotate: index % 2 === 0 ? 5 : -5 }}
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




