import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Main05 = () => {
  return (
    <section
      className="flex flex-col overflow-hidden"
      style={{ backgroundColor: "#fff", width: "100%" }}
    >
      <div className="descript" style={{ color: "#000", paddingTop: "260px" }}>
        <div
          className="text-wrap"
          style={{
            paddingLeft: "7.031vw",
            paddingRight: "7.031vw",
            transform: "translate(0px,0px)",
          }}
        >
          <p className="w-max whitespace-nowrap text-6xl md:text-[5vw] font-normal">
            Thank you <br />
            for being alive
          </p>
          <p className="w-max whitespace-nowrap text-[10vw] md:text-[5vw] font-normal relative inline-block leading-[1.15]">
            <span className="to">to</span>
            <span className="every text-[#6abbff] text-[18.542vw] md:text-[13.542vw] font-sacramento">
              {" "}
              everyone
            </span>
          </p>
        </div>
      </div>
      <div
        className="h-screen"
        style={{
          marginTop: "150px",
          paddingLeft: "3.646vw",
          paddingRight: "3.646vw",
          width: "100%",
        }}
      >
        <div
          className="video-wrap"
          style={{
            width: "100%",
            height: "100vh",
            borderRadius: "20px",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <video
            className="w-dvw h-dvh object-cover absolute left-0 top-0"
            autoPlay
            muted
            loop
            playinline="true"
          >
            <source
              src={process.env.PUBLIC_URL + "/LovelyRunner.mp4"}
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    </section>
  );
};

export default Main05;
