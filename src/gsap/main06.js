import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Canvas, useFrame } from "@react-three/fiber";
import { useAnimations, useGLTF, Environment } from "@react-three/drei";
import * as THREE from "three";

const Main06 = () => {
  gsap.registerPlugin(ScrollTrigger);
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const watchRef = useRef(null);

  useEffect(() => {
    const textAnimation = gsap
      .timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom center",
          scrub: 1,
          pin: true,
          // pinSpacing:false,
          // markers: true
        },
      })
      .fromTo(
        textRef.current,
        { x: "50%" },
        { x: "-20%", ease: "none", duration: 10 },
        0
      );

    return () => {
      textAnimation.kill();
    };
  }, []);

  const handleHover = () => {
    if (watchRef.current && watchRef.current.animations) {
      const actions = watchRef.current.animations;
      Object.keys(actions).forEach((key) => {
        const action = actions[key];
        if (action) {
          action.reset();
          action.setLoop(THREE.LoopOnce);
          action.clampWhenFinished = true;
          action.timeScale = 1;
          action.play();
        }
      });
    }
  };

  const handleHoverOut = () => {
    if (watchRef.current && watchRef.current.animations) {
      const actions = watchRef.current.animations;
      Object.keys(actions).forEach((key) => {
        const action = actions[key];
        if (action) {
          action.timeScale = -1;
          action.paused = false;
          action.play();
        }
      });
    }
  };

  const WatchModel = ({ containerRef }) => {
    const { scene, animations, materials } = useGLTF(
      process.env.PUBLIC_URL + "/blender/watch.glb"
    ); // GLB 파일 경로
    const { actions } = useAnimations(animations, watchRef);

    useEffect(() => {
      if (watchRef.current) {
        watchRef.current.animations = actions;
      }

      // 모델 이동 애니메이션 설정
      gsap.fromTo(
        watchRef.current.position,
        { x: -1, y: 1 },
        {
          x: 1,
          y: -1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom center",
            scrub: 1,
          },
        }
      );
    }, [actions]);

    return (
      <primitive
        ref={watchRef}
        object={scene}
        material={materials.watch}
        scale={1}
        onPointerOver={handleHover}
        onPointerOut={handleHoverOut}
      />
    );
  };

  return (
    <section
      ref={sectionRef}
      className="watch overflow-x-clip h-screen w-full"
      style={{
        width: "100%",
        height: "100vh",
        margin: 0,
        padding: 0,
        position: "relative",
        marginTop: "150px",
      }}
    >
      <div className="scroll-item w-100vw relative flex justify-center h-[100%] m-0">
        <div
          className="img_wrap"
          style={{
            width: "1000px",
            height: "1000px",
            zIndex: "999",
            position: "absolute",
          }}
        >
          <Canvas style={{ width: "100%", height: "100%" }}>
            <WatchModel containerRef={sectionRef} />
            <directionalLight intensity={1} position={[-5, 5, 5]} />
            <ambientLight intensity={0.3} />
            <Environment preset="studio" />
          </Canvas>
        </div>
      </div>
      <div
        ref={triggerRef}
        className="scroll-title h-dvh w-dvw flex justify-center items-center"
        style={{
          width: "100vw",
          backgroundColor: "#fff",
          position: "absolute",
          top: "50%",
          zIndex: -1,
          marginTop: "8vw",
          transform: "translateY(-50%)",
        }}
      >
        <div ref={titleRef} className="uppercase leading-none">
          <span
            ref={textRef}
            className="w-max whitespace-nowrap block"
            style={{
              fontSize: "20.8333vw",
              fontWeight: 300,
              color: "#6abbff",
              letterSpacing: "-0.625vw",
            }}
          >
            Lovely Runner
          </span>
        </div>
      </div>
    </section>
  );
};

export default Main06;
