import { useGsapTimelineScrollTrigger } from "@/hook/useGsapTimelineScrollTrigger";
import React, { useRef } from "react";

const Hook02 = () => {
  const triggerRef = useRef<HTMLElement>(null);
  const div01Ref = useRef<HTMLDivElement>(null);
  const div02Ref = useRef<HTMLDivElement>(null);
  const div03Ref = useRef<HTMLDivElement>(null);
  const div04Ref = useRef<HTMLDivElement>(null);

  useGsapTimelineScrollTrigger(
    triggerRef,
    [div01Ref, div02Ref, div03Ref, div04Ref],
    [
      {
        type: "fromTo",
        fromVars: { x: "-100%" },
        vars: { x: "0%", ease: "power2.out", duration: 2.5 },
        // position: 0,
      },
      {
        type: "to",
        vars: { x: "100%", ease: "power2.out", duration: 2.5 },
        // position: ">", // 이전 애니메이션 직후에 시작
      },
      {
        type: "to",
        vars: { x: "300%", ease: "power2.out", duration: 2.5 },
        // position: ">", // 이전 애니메이션 직후에 시작
      },
      {
        type: "to",
        vars: { x: "400%", ease: "power2.out", duration: 5 },
        // position: 2, // 2초 후에 시작
      },
    ],
    {
      start: "top top",
      end: "bottom bottom",
      pin: true,
      scrub: 1,
      markers: true,
    }
  );

  return (
    <>
      <section className="h-screen"></section>
      <section ref={triggerRef} className="relative h-[200vh]">
        <div ref={div01Ref} className="size-[200px] bg-black"></div>
        <div ref={div02Ref} className="size-[200px] bg-black"></div>
        <div ref={div03Ref} className="size-[200px] bg-black"></div>
        <div ref={div04Ref} className="size-[200px] bg-black"></div>
      </section>
      <section className="h-screen"></section>
    </>
  );
};

export default Hook02;
