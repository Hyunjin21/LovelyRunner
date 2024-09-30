"use client";
import clsx from "clsx";
import styles from "./index.module.css";
import { useRef, useEffect, useState } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import * as THREE from "three";
import TextAni from "@/components/TxtAni";
import Model from "./Model";
import { Environment } from "@react-three/drei";

function ResizeHandler() {
  const { camera, gl } = useThree();
  
  useEffect(() => {
    const handleResize = () => {
      if (camera instanceof THREE.PerspectiveCamera) {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
      }
      gl.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [camera, gl]);

  return null; 
}



export default function Section02() {
  const sec02Ref = useRef<HTMLDivElement>(null);
  const body = useRef<HTMLDivElement>(null);


  const [aspectRatio, setAspectRatio] = useState(1);

  const phrase =
    "FLEX is a comprehensive Creative Agency that covers both design and development. We provide an 'All in One' service where one person handles everything from planning and design to frontend and backend development, offering clients the most efficient solutions in terms of time and cost.";

  const koreanText = {
    desktop:
      "FLEX는 디자인과 개발을 모두 아우르는 종합 크리에이티브 에이전시입니다. 기획부터 디자인, 프론트엔드와 백엔드 개발까지 모든 과정을 한 사람이 담당하는 'All in One' 서비스를 통해, 클라이언트에게 시간과 비용 측면에서 최적의 솔루션을 제공합니다.",
    mobile:
      "FLEX는 디자인과 개발을 모두 아우르는 종합 크리에이티브 에이전시입니다. 기획부터 디자인, 프론트엔드와 백엔드 개발까지 모든 과정을 한 사람이 담당하는 'All in One' 서비스를 통해, 클라이언트에게 시간과 비용 측면에서 최적의 솔루션을 제공합니다.",
  };


  return (
    <section
      ref={sec02Ref}
      className={clsx(
        styles.sec2,
        "w-full flex -mt-[10vh] pt-[10vh] pb-[5vh] items-end justify-center text-[rgba(211,211,211)] relative"
      )}
    >
      <div className="w-4/5 xl:w-[960px] relative z-10">
        <div className="relative z-20">
          <TextAni
            phrase={phrase}
            koreanText={koreanText}
            highlightIndices={[4, 5, 15, 16, 17]}
            title="Who we are?"
          />
        </div>

        <div className="absolute right-0 bottom-0 w-full md:w-1/2 h-1/2 z-10">
          <div className="w-full h-full max-w-[960px] aspect-square">
            <Canvas>
              <Model position={[0, 0, 4]} />
              <directionalLight intensity={2} position={[0, 2, 4]} />
              <Environment preset="studio" />
            </Canvas>
          </div>
        </div>
      </div>
    </section>
  );
}
