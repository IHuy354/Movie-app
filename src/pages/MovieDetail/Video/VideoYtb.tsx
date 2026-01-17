import React from "react";

const VideoYtb = ({ videoData }) => {
  const vdData = videoData.slice(0, 5);
  return (
    <div>
      {vdData.map((videodt, index) => (
        <div className="mt-12  aspect-video px-18" key={index}>
          <p className="mb-3 text-2xl font-[500]">{videodt.name}</p>
          <iframe
            src={`https://www.youtube.com/embed/${videodt.key}`}
            title={videodt.name}
            className="w-full h-full object-contain"
          />
        </div>
      ))}
    </div>
  );
};

export default VideoYtb;
