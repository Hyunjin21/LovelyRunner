import React, { useState, useEffect, useRef } from "react";
import { useRecoilState, atom, RecoilRoot } from "recoil";
import { gsap } from "gsap";


const loadingProgress = atom({
  key: "loadingProgress",
  default: 0,
});

const Loading = () => {
  const [progress, setProgress] = useRecoilState(loadingProgress);
  const [loadingFinished, setLoadingFinished] = useState(false);
  const [displayProgress, setDisplayProgress] = useState("000");
  const textContainerRef = useRef(null);
  const progressContainerRef = useRef(null);

  
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 30);

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto"; 
    };
  }, [setProgress]);

  useEffect(() => {
    setDisplayProgress(String(progress).padStart(3, "0") + "%"); 
  }, [progress]);

  useEffect(() => {
    if (progress === 100) {
      setTimeout(() => {
        startPercentAnimation();
        gsap.to(".loading-progress", {
          // opacity: 0,
          display: 'none',
          duration: 0.8,
          onComplete: () => {
            startTextAnimation();
          },
        });
      }, 200); 
    }
  }, [progress]);


  const startPercentAnimation = () => {
    const progressText = "100%";
    const progressContainer = progressContainerRef.current;

    if (progressContainer) {
      progressContainer.innerHTML = "";

      progressText.split("").forEach((letter, index) => {
        const span = document.createElement("span");
        span.textContent = letter;
        span.style.display = "inline-block";
        progressContainer.appendChild(span);

        gsap.fromTo(
          span,
          { y: 0, opacity: 1 }, 
          {
            y: -40, 
            opacity: 0, 
            display: 'none',
            duration: 0.8,
            delay: index * 0.1, 
            ease: "power2.inOut",
          }
        );
      });
      gsap.to(progressContainerRef.current, { display:'none'});
    }
  };

  const startTextAnimation = () => {
    const text = "LOVELY RUNNER";
    const textContainer = textContainerRef.current;

    if (textContainer) {
      textContainer.innerHTML = "";

      text.split("").forEach((letter, index) => {
        const span = document.createElement("span");

        if (letter === " ") {
          span.style.width = "10px"; 
        } else {
          span.textContent = letter;
        }

        span.style.display = "inline-block";
        textContainer.appendChild(span);

        gsap.fromTo(
          span,
          { y: 40, opacity: 0 }, 
          {
            y: 0, 
            opacity: 1, 
            duration: 0.8,
            delay: index * 0.1 + 1, 
            ease: "power2.out",
          }
        );

        gsap.to(span, 
          {
            y: -50, 
            opacity: 1, 
            duration: 0.8,
            delay: index * 0.1 + 3, 
            ease: "power2.inOut",
            onComplete: () => {
              if (index === text.length - 1) {
                gsap.to(".loading-container", {
                  y: "-100vh",
                  duration: 1,
                  onComplete: () => {
                    setLoadingFinished(true);
                    document.body.style.overflow = "auto"; 
                    document.body.style.overflowX = "hidden"; 
                    
                  },
                });
              }
            },
          }
        );
      });
    }
  };

  return !loadingFinished ? ( 
    <div
      className="loading-container"
      style={{
        height: "100vh",
        width: "100%",
        maxWidth:'100vw',
        background: "#fe97b6",
        position: "fixed", 
        top: 0,
        left: 0,
        zIndex: 9999, 
      }}
    >
      {/* 100% 텍스트 애니메이션 */}
      <div
        ref={progressContainerRef}
        style={{
          fontSize: '40px',
          color: '#fff',
          width:'auto',
          height:'60px',
          lineHeight:'60px',
          textAlign:'center',
          display:'block',
          overflow:'hidden',
          position:'relative',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%,-50%)',
        }}
      >
        {/* 초기 100% 텍스트 */}
        {displayProgress.split("").map((char, index) => (
          <span key={index} style={{ display: "inline-block" }}>
            {char}
          </span>
        ))}
      </div>
      
      {/* 텍스트 애니메이션 */}
      <div
        ref={textContainerRef}
        style={{
          fontSize: '40px',
          fontWeight:'400',
          color: '#fff',
          width:'auto',
          height:'60px',
          lineHeight:'60px',
          textAlign:'center',
          display:'block',
          overflow:'hidden',
          position:'relative',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%,-50%)',
        }}  
      />
    </div>
  ) : null;
};

function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <Loading />
      </div>
    </RecoilRoot>
  );
}

export default Loading;
