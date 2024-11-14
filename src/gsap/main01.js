import React, { useEffect, useRef } from "react";

const Main01 = () => {
  const videoRef = useRef(null);
  const hasPlayedOnce = useRef(false);

  const handleScroll = () => {
    if (window.scrollY === 0 && videoRef.current && hasPlayedOnce.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  };

  useEffect(() => {
    if (videoRef.current && !hasPlayedOnce.current) {
      setTimeout(() => {
        videoRef.current.playbackRate = 0.5;
        videoRef.current.play();
        hasPlayedOnce.current = true;
      }, 8000);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      className="w-dvw flex justify-center items-center"
      style={{
        backgroundColor: "#5fb5f7",
        width: "100%",
        height: "100vh",
        position: "relative",
        border: "none",
      }}
    >
      <div className="h-screen" style={{ width: "100%" }}>
        <div
          className="video-wrap"
          style={{ width: "100%", height: "100%", overflow: "hidden" }}
        >
          <video
            ref={videoRef}
            crossOrigin="anonymous"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%,-50%)",
              objectFit: "cover",
              outline: "none",
              border: "none",
              filter: "brightness(1.2)",
            }}
            autoPlay
            muted
            playsInline
          >
            <source
              src={process.env.PUBLIC_URL + "/opening.mp4"}
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    </section>
  );
};

export default Main01;
