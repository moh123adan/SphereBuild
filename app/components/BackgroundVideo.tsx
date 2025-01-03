import React from "react";
// import video from "../assets/video/background-video.mp4";

const BackgroundVideo = () => {
//   console.log(video);
  return (
    <div className="video-container">
      <video className="background-video" autoPlay muted loop playsInline>
        <source src="/video/background-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default BackgroundVideo;
