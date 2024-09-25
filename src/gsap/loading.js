import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

const Loading = () => {
  const [progress, setProgress] = useState(0);
  const textContainerRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prevProgress + 1;
      });
    }, 30); 

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      // 로딩이 100%일 때 1초 대기 후 텍스트 애니메이션 시작
      setTimeout(() => {
        startTextAnimation();
      }, 2000); // 1초 멈춘 후 텍스트 애니메이션 실행
    }
  }, [progress]);

  const startTextAnimation = () => {
    const text = "LOVELY RUNNER";
    const textContainer = textContainerRef.current;

    if (textContainer) {
      // 텍스트 컨테이너 초기화
      textContainer.innerHTML = "";

      // 텍스트를 한 글자씩 분리하여 span 태그로 감쌈
      text.split("").forEach((letter, index) => {
        const span = document.createElement("span");
        span.textContent = letter;
        span.style.display = "inline-block";
        textContainer.appendChild(span);

        // GSAP로 글자 애니메이션 적용
        gsap.fromTo(
          span,
          { y: 30, opacity: 0 }, // 아래에서 시작
          {
            y: -30, // 위로 올라감
            opacity: 1, // 나타남
            duration: 0.8,
            delay: index * 0.2, // 각 글자마다 0.2초 간격으로 애니메이션
            ease: "power2.inOut",
          }
        );
      });
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        width: "100vw",
        backgroundColor: "skyblue",
      }}
    >
      {/* 로딩 퍼센트 표시 */}
      {progress < 100 ? (
        <p
          style={{
            fontSize: "30px",
            color: "#fff",
          }}
        >
          {progress}%
        </p>
      ) : (
        <p
          style={{
            fontSize: "30px",
            color: "#fff",
          }}
        >
        </p>
      )}

      {/* 텍스트 애니메이션 컨테이너 */}
      {progress === 100 && (
        <div
          ref={textContainerRef}
          style={{
            fontSize: "50px",
            color: "#fff",
            marginTop: "20px", // 약간의 간격 추가
          }}
        />
      )}
    </div>
  );
};

export default Loading;
