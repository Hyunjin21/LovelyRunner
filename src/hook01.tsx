import { useRef } from "react";
import { useGsapScrollTrigger } from "../../hook/useGsapScrollTrigger";

const Hook01 = () => {
  const boxRef = useRef<HTMLDivElement>(null);

  // to 애니메이션 적용
  useGsapScrollTrigger(
    boxRef,
    "to",
    { x: 400, duration: 2 },
    {
      trigger: boxRef.current,
      start: "top center",
      end: "bottom top",
      pin: true,
      scrub: true,
      markers: true,
    }
  );

  return (
    <>
      <section className="h-screen"></section>
      <section style={{ height: "200vh" }}>
        <div
          ref={boxRef}
          style={{
            width: "100px",
            height: "100px",
            backgroundColor: "red",
            margin: "100px auto",
          }}
        >
          애니메이션 박스
        </div>
      </section>
      <section className="h-screen"></section>
    </>
  );
};

export default Hook01;
