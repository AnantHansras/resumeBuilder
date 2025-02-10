import React from "react";

const tutorialVideos = [
  {
    id: "1",
    title: "Next.js Tutorial for Beginners",
    videoId: "ZVnjOPwW4ZA",
  },
  {
    id: "2",
    title: "Tailwind CSS Crash Course",
    videoId: "UBOj6rqRUME",
  },
  {
    id: "3",
    title: "React Hooks Explained",
    videoId: "TNhaISOUy6Q",
  },
  {
    id: "4",
    title: "TypeScript Course for Beginners",
    videoId: "BwuLxPH8IDs",
  },
  {
    id: "5",
    title: "Next.js Tutorial for Beginners",
    videoId: "ZVnjOPwW4ZA",
  },
  {
    id: "6",
    title: "Tailwind CSS Crash Course",
    videoId: "UBOj6rqRUME",
  },
  {
    id: "7",
    title: "React Hooks Explained",
    videoId: "TNhaISOUy6Q",
  },
  {
    id: "8",
    title: "TypeScript Course for Beginners",
    videoId: "BwuLxPH8IDs",
  },
];

export default function Tut2() {
  return (
    <div className="min-h-screen bg-[#f9faff]">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-[#07142b] mb-4">Tutorial Videos</h1>
          <p className="text-[#46464e] max-w-2xl mx-auto">
            Explore our collection of high-quality tutorial videos covering various web development topics. Whether
            you're a beginner or an experienced developer, these tutorials will help you enhance your skills and stay
            up-to-date with the latest technologies.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {tutorialVideos.map((video) => (
            <VideoCard key={video.id} title={video.title} videoId={video.videoId} />
          ))}
        </div>
      </div>
    </div>
  );
}

function VideoCard({ title, videoId }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col w-full max-w-sm">
      <div className="h-52">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title={title}
          className="w-full h-full"
        />
      </div>
      <div className="p-4 flex-grow flex flex-col justify-between">
        <h2 className="text-lg font-semibold text-[#07142b] mb-4 text-center">{title}</h2>
        <div className="text-center">
        <a
          href={`https://www.youtube.com/watch?v=${videoId}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center bg-[#ffc85e] text-[#07142b] hover:bg-[#ffd78e] rounded-md text-sm font-medium px-4 py-2 transition-colors"
        >
          Watch Now
        </a>

        </div>
      </div>
    </div>
  );
}