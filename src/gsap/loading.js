import React, { useState, useEffect } from "react";
import { useRecoilState, atom, RecoilRoot } from "recoil";
import { gsap } from "gsap";

// 로딩 퍼센트 상태 관리
const loadingPercentState = atom({
  key: "loadingPercentState",
  default: 0,
});

const Loading = () => {
  const [percent, setPercent] = useRecoilState(loadingPercentState);
  const [loadingFinished, setLoadingFinished] = useState(false);
  
  // 로딩 퍼센트 증가
  useEffect(() => {
    const interval = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 30);

    // 스크롤 막기
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto"; // 컴포넌트 언마운트 시 스크롤 다시 활성화
    };
  }, [setPercent]);

  // 로딩이 끝나면 로딩 화면이 위로 사라지는 애니메이션
  useEffect(() => {
    if (percent === 100) {
      gsap.to(".loading-container", {
        y: "-100vh",
        duration: 1,
        onComplete: () => {
          setLoadingFinished(true);
          document.body.style.overflow = "auto"; // 스크롤 다시 활성화
          document.body.style.overflowX = "hidden"; // 스크롤 다시 활성화
        },
      });
    }
  }, [percent]);

  return !loadingFinished ? ( // 로딩이 끝나면 컴포넌트를 사라지게 하기
    <div
      className="loading-container"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        width: "100%",
        background: "skyblue",
        position: "fixed", // 고정 위치로 설정하여 전체 화면을 차지
        top: 0,
        left: 0,
        zIndex: 9999, // 다른 요소 위에 있도록 z-index 설정
      }}
    >
      {percent < 100 && (
        <h1
          className="loading-percent"
          style={{ marginTop: "10px", fontSize: "30px", color: "#fff" }}
        >
          {percent}%
        </h1>
      )}
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
