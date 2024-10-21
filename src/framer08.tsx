import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Framer08 = () => {
  // 첫 번째 섹션
  const ref1 = useRef(null);

  const { scrollYProgress: scrollProgress1 } = useScroll({ // scrollProgress1 이름으로 구조분해할당
    target: ref1, // 스크롤 진행도를 측정할 대상 요소 지정
    offset: ["start end", "end start"], // 스크롤 효과의 시작과 끝 지점을 정의
    /*
      "start end": 타겟 요소의 시작점이 뷰포트의 끝에 도달했을 때 시작
      "end start": 타겟 요소의 끝점이 뷰포트의 시작점에 도달했을 때 끝
    */
  });
  const scale = useTransform(scrollProgress1, [0.4, 0.6], [0.5, 1]); // 이 방법이 더 세밀한 제어가 가능
  const rotate = useTransform(scrollProgress1, [0.4, 0.6], [0, 360]);

  // 두 번째 섹션
  const ref2 = useRef(null);
  const { scrollYProgress: scrollProgress2 } = useScroll({
    target: ref2,
    offset: ["-100px", "100px"] // section의 -100px부터 100px까지 스크롤 진행도를 측정
    // offset: ["0vh", "50vh"] // section의 0vh부터 50vh까지 스크롤 진행도를 측정
  });
  const opacity = useTransform(scrollProgress2, [0, 1], [0, 1]);

  return (
    <>
      <section className="h-screen"></section>
      {/* 첫 번째 섹션 */}
      <section
        ref={ref1}
        className="h-screen bg-gray-100 flex justify-center items-center"
      >
        <motion.div
          /*
            Framer Motion의 motion 컴포넌트는 style 속성에 MotionValue 객체를 직접 전달가능
            useTransform으로 생성된 MotionValue 객체를 사용하여 스타일 속성을 동적으로 제어
            스크롤이 발생할 때마다 MotionValue 객체의 내부 값이 업데이트되고, 이에 따라 motion.div는 자동으로 scale 스타일을 업데이트
            scale : scale
          */
          style={{ scale, rotate }}
          className="bg-blue-500 w-40 h-40 rounded-lg"
        >
          섹션 1
        </motion.div>
      </section>

      {/* 두 번째 섹션 */}
      <section
        ref={ref2}
        className="h-screen bg-gray-300 flex justify-center items-center"
      >
        <motion.div
          style={{ opacity: opacity }}
          className="bg-green-500 w-40 h-40 rounded-lg"
        >
          섹션 2
        </motion.div>
      </section>
      <section className="h-screen"></section>
    </>
  );
};

export default Framer08;
