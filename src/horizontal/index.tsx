import React, { forwardRef, useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"; // import { ScrollTrigger } from "gsap/ScrollTrigger";  next.js가 서버측 렌더링을 사용하기때문에 이렇게 가져와야 된다고 함
import { frame } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import Model1 from "./Model1";
import Model2 from "./Model2";
import { useSetRecoilState } from "recoil";
import { isSection07VisibleState } from "@/stores";

const images = [
  "/images/main/class-design-sprite1.jpg",
  "/images/main/class-design-sprite2.jpg",
  "/images/main/class-design-sprite3.jpg",
  "/images/main/class-design-sprite4.jpg",
  "/images/main/class-design-sprite5.jpg",
];

const devImages = [
  "/images/main/class-dev-sprite1.jpg",
  "/images/main/class-dev-sprite2.jpg",
  "/images/main/class-dev-sprite3.jpg",
  "/images/main/class-dev-sprite4.jpg",
  "/images/main/class-dev-sprite5.jpg",
];

export const Section07 = forwardRef<HTMLDivElement>((props, ref) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  const txt01Ref = useRef<HTMLDivElement>(null);
  const triggerTxt01Ref = useRef<HTMLDivElement>(null);

  const stageRef = useRef<HTMLDivElement>(null);
  const triggerImgRef = useRef<HTMLDivElement>(null);

  const frameCount = 4; // 총 갯수 -1
  const offsetValue = 100; // 백분율

  const imageContainerRef = useRef<HTMLDivElement>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const [currentDevImageIndex, setCurrentDevImageIndex] = useState(0);
  const devImageContainerRef = useRef<HTMLDivElement>(null);

  // SVG 경로1 애니메이션
  const svg01Ref = useRef<HTMLDivElement>(null);
  const path01Ref = useRef<SVGPathElement>(null);

  // SVG 경로2 애니메이션
  const svg02Ref = useRef<SVGSVGElement>(null);
  const path02Ref = useRef<SVGPathElement>(null);

  // SVG 경로3 애니메이션
  const svg03Ref = useRef<SVGSVGElement>(null);
  const path03Ref = useRef<SVGPathElement>(null);

  // LOGO
  const setIsSection07Visible = useSetRecoilState(isSection07VisibleState);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSection07Visible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [setIsSection07Visible]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const containerAnimation = gsap.to(sectionRef.current, {
      translateX: "-400vw",
      ease: "none",
      duration: 1,
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "top top",
        end: "5000 top",
        scrub: 0.6,
        pin: true,
      },
    });

    // txt01Ref에 대한 애니메이션 추가
    gsap.fromTo(
      txt01Ref.current,
      {
        x: -1000, // 시작 위치
      },
      {
        x: 0,
        duration: 1, // 지속 시간
        scrollTrigger: {
          trigger: txt01Ref.current,
          start: "top center", // 애니메이션 시작 조건
          end: "20% 0",
          scrub: 3,
          // markers: true,
        },
      }
    );

    // gsap.to(stageRef.current, {
    //   backgroundPosition: `${-offsetValue * frameCount * 7.2}px center`,
    //   ease: `steps(${frameCount})`,
    //   scrollTrigger: {
    //     trigger: triggerImgRef.current,
    //     containerAnimation: containerAnimation, // containerAnimation 옵션 추가
    //     start: "left right",
    //     // end: `+=${frameCount * offsetValue}`,
    //     scrub: true,
    //     // markers: true,
    //   },
    // });

    // 디자인 이미지 애니메이션
    let lastProgress = 0;
    const imageAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: imageContainerRef.current,
        containerAnimation: containerAnimation,
        start: "left center",
        end: "right center",
        scrub: true,
        // markers: true,
        onUpdate: (self) => {
          const progress = self.progress;
          if (progress < lastProgress && lastProgress > 0.99) {
            // 스크롤이 끝에서 다시 시작으로 돌아갈 때
            setCurrentImageIndex(0);
          } else {
            const newIndex = Math.min(
              Math.floor(progress * images.length),
              images.length - 1
            );
            setCurrentImageIndex(newIndex);
          }
          lastProgress = progress;
        },
      },
    });

    // 개발 이미지 애니메이션
    let lastDevProgress = 0;
    const devImageAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: devImageContainerRef.current,
        containerAnimation: containerAnimation,
        start: "left center",
        end: "right center",
        scrub: true,
        // markers: true,
        onUpdate: (self) => {
          const progress = self.progress;
          if (progress < lastDevProgress && lastDevProgress > 0.99) {
            setCurrentDevImageIndex(0);
          } else {
            const newIndex = Math.min(
              Math.floor(progress * devImages.length),
              devImages.length - 1
            );
            setCurrentDevImageIndex(newIndex);
          }
          lastDevProgress = progress;
        },
      },
    });

    // const pathLength = path01Ref.current?.getTotalLength();
    // console.log("Path Length:", pathLength); // 경로 길이 로그 출력

    // if (pathLength) {
    //   gsap.set(path01Ref.current, {
    //     strokeDasharray: pathLength,
    //     strokeDashoffset: pathLength,
    //   });

    //   const tl = gsap.timeline({
    //     scrollTrigger: {
    //       trigger: svg01Ref.current,
    //       start: "left right",
    //       end: "70% center",
    //       scrub: true,
    //       containerAnimation: containerAnimation,
    //       // markers: true
    //     },
    //   });

    //   // tl.fromTo('path', { strokeDasharray: 1000, strokeDashoffset: 1000 }, { strokeDashoffset: 0, ease: 'none' });
    //   tl.to(path01Ref.current, { strokeDashoffset: 0, ease: "none" });
    // } else {
    //   console.error("Invalid path length or path not found");
    // }

    // console.log("Section ref:", svg01Ref.current); // 섹션 참조 로그 출력

    const pathLength1 = path01Ref.current?.getTotalLength();

    if (pathLength1) {
      gsap.set(path01Ref.current, {
        strokeDasharray: pathLength1,
        strokeDashoffset: pathLength1,
      });

      gsap.to(path01Ref.current, {
        strokeDashoffset: 0,
        ease: "none",
        scrollTrigger: {
          trigger: svg01Ref.current,
          containerAnimation: containerAnimation,
          start: "left+=100% right", // 시작 지점을 오른쪽으로 100% 이동
          end: "right left",
          scrub: true,
          // markers: true,
          onEnter: () => {
            gsap.set(path01Ref.current, { opacity: 1 }); // 애니메이션 시작 시 opacity를 1로 설정
          },
          onLeaveBack: () => {
            gsap.set(path01Ref.current, { opacity: 0 }); // 시작 지점 이전으로 돌아갈 때 opacity를 0으로 설정
          },
        },
      });

      // 초기 상태에서 SVG를 숨김
      gsap.set(path01Ref.current, { opacity: 0 });
    }

    // SVG 경로2 애니메이션
    const pathLength2 = path02Ref.current?.getTotalLength();

    if (pathLength2) {
      gsap.set(path02Ref.current, {
        strokeDasharray: pathLength2,
        strokeDashoffset: pathLength2,
      });

      gsap.to(path02Ref.current, {
        strokeDashoffset: 0,
        ease: "none",
        scrollTrigger: {
          trigger: svg02Ref.current,
          containerAnimation: containerAnimation,
          start: "left-=50% right",
          end: "center-=50% left",
          scrub: true,
        },
      });
    }

    // SVG 경로3 애니메이션
    const pathLength3 = path03Ref.current?.getTotalLength();

    if (pathLength3) {
      gsap.set(path03Ref.current, {
        strokeDasharray: pathLength3,
        strokeDashoffset: pathLength3,
      });

      gsap.to(path03Ref.current, {
        strokeDashoffset: 0,
        ease: "none",
        scrollTrigger: {
          trigger: svg03Ref.current,
          containerAnimation: containerAnimation,
          start: "left-=50% right",
          end: "center-=50% left",
          scrub: true,
        },
      });
    }

    return () => {
      containerAnimation.kill();
      imageAnimation.kill();
      devImageAnimation.kill();
    };
  }, []);

  return (
    <>
      <section className="overflow-hidden">
        <div ref={triggerRef}>
          <div
            ref={sectionRef}
            className="h-dvh w-[500vw] flex flex-row relative bg-white text-black"
          >
            <div className="w-[500vw] h-dvh flex">
              <div className="flex justify-between">
                {/* Page1 */}
                <div className="w-[100vw] relative">
                  <div className="">
                    <div className="absolute bottom-10 left-10 text-[6rem] lg:text-[15rem] z-10">
                      <h3 className="en300 leading-none lg:-mb-10">
                        <span className="en2-300 text-[1.02em] text-[--mc-400] mr-4">
                          F
                        </span>
                        LEX
                      </h3>
                      <h3 className="en300 leading-none indent-20 lg:indent-40">
                        CLASS
                      </h3>
                    </div>
                    <div>
                      <div className="absolute top-10 left-10 right-auto lg:left-auto lg:right-10">
                        <h3 className="en400 text-3xl lg:text-5xl leading-tight">
                          In FLEX, we have{" "}
                          <span className="en2-400 text-[--mc-400]">
                            Design
                          </span>{" "}
                          and{" "}
                          <span className="en2-400 text-[--mc-400]">
                            Development{" "}
                          </span>
                          <br className="hidden lg:block" />
                          lectures and{" "}
                          <span className="en2-400 text-[--mc-400]">
                            Portfolio
                          </span>{" "}
                          creation classes.
                          <br className="hidden lg:block" />
                          As a prime example, I will tell you only the points
                          <br className="hidden lg:block" />
                          that the company really needs.
                        </h3>
                        <p className="text-md lg:text-lg mt-20">
                          플렉스에서는 디자인과 개발 강의와 포트폴리오 제작
                          클래스를 진행합니다.{" "}
                          <br className="hidden lg:block" />
                          소수정예로 회사에서 정말 필요한 포인트만 딱 집어서
                          알려드립니다.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div ref={svg01Ref} className="w-full h-full relative">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ overflow: "visible" }}
                      className="absolute left-0 bottom-[300px] w-full h-auto -z-10"
                    >
                      <path
                        ref={path01Ref}
                        className="stroke-[--mc-400] stroke-[12px]"
                        style={{
                          fill: "none",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeMiterlimit: 10,
                        }}
                        d="M-13.8,509.2c0,0,94.7,279.7,378-118.6c330-464,865-509.3,834-81.6c-12,165.6-86,257.6-142,201.6
                  c-50.2-50.2,82.5-183.2,273.3-250.2c246.8-86.6,295.7,41.2,197.5,288.4c-46.8,117.8,37.2,64.2,83.2,9.8"
                      />
                    </svg>
                  </div>
                </div>

                {/* Page2 */}
                <div
                  ref={triggerTxt01Ref}
                  className="w-[100vw] h-full relative"
                >
                  <div className="absolute left-20 top-10 lg:left-1/2 lg:-translate-x-1/2 lg:top-1/2 lg:-translate-y-1/2 z-10">
                    <div className="text-[3rem] lg:text-[10rem] mb-12">
                      <h3 className="en300 leading-none -mb-2 lg:-mb-10">
                        <span className="en2-300 text-[1.02em] text-[--mc-400] mr-2">
                          D
                        </span>
                        ESIGN
                      </h3>
                      <h3 className="en300 leading-none lg:-indent-40">
                        CLASS
                      </h3>
                    </div>
                    <div>
                      <div className="">
                        <h3 className="en400 text-lg leading-tight">
                          In FLEX, we have creation classes.
                          <br className="hidden lg:block" />
                          As a prime example, I will tell you only the points
                          <br className="hidden lg:block" />
                          that the company really needs.
                        </h3>
                        <p className="text-md lg:text-lg mt-4">
                          플렉스에서는 디자인과 개발 강의와 포트폴리오 제작
                          클래스를 진행합니다.
                          <br />
                          소수정예로 회사에서 정말 필요한 포인트만 딱 집어서
                          알려드립니다.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-10 bottom-10 my-auto right-10 hidden lg:flex flex-col justify-between h-full">
                    <div className="">
                      <img
                        src="/images/main/class-design-img2.jpg"
                        alt="디자인학생작품2"
                      />
                    </div>
                    <div ref={txt01Ref} className="self-end">
                      <img
                        src="/images/main/class-design-img1.jpg"
                        alt="디자인학생작품1"
                      />
                    </div>
                  </div>
                </div>

                {/* Page3 */}
                <div className="w-[100vw] relative">
                  <div
                    ref={imageContainerRef}
                    className="h-full absolute top-0 left-0 w-full flex flex-col lg:flex-row justify-center items-center lg:items-start lg:w-[50vw] mx-10 overflow-hidden z-20"
                  >
                    {images.map((src, index) => (
                      <img
                        key={src}
                        src={src}
                        alt={`디자인 클래스 이미지 ${index + 1}`}
                        className="w-full h-auto object-cover absolute top-1/2 left-0 lg:top-0 transform -translate-y-1/2 lg:translate-y-0"
                        // 자연스럽게 fadeIn
                        // className="w-full h-auto object-cover absolute top-0 left-0 transition-opacity duration-500"
                        style={{ opacity: index === currentImageIndex ? 1 : 0 }}
                      />
                    ))}
                  </div>
                  <div className="w-full h-full absolute top-0 right-0">
                    <svg
                      ref={svg02Ref}
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ overflow: "visible" }}
                      className="relative right-0 top-[-50px] w-full h-auto -z-10"
                    >
                      <path
                        ref={path02Ref}
                        className="stroke-[--mc-400] stroke-[12px]"
                        style={{
                          fill: "none",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeMiterlimit: 10,
                        }}
                        d="M-13.8,0c0,0,490.5,23.8,844.9,356.3C1228.4,728.9,1564.8,204.2,1610.2,0"
                      />
                    </svg>
                  </div>
                  <div className="hidden md:block absolute -bottom-[16vh] -right-[30vh] md:-right-10 xl:-right-80 md:bottom-0 w-4/5 h-4/5 z-10">
                    <div className="w-full h-full max-w-[960px] aspect-square">
                      <Canvas>
                        <Model1 position={[0, 0, 4]} />
                        <directionalLight intensity={2} position={[0, 2, 4]} />
                        <Environment preset="city" />
                      </Canvas>
                    </div>
                  </div>
                </div>

                {/* Page4 */}
                <div className="w-[100vw] relative">
                  <div className="absolute left-20 top-10 lg:left-1/2 lg:-translate-x-1/2 lg:top-1/2 lg:-translate-y-1/2 z-10">
                    <div className="text-[3rem] lg:text-[10rem] mb-12">
                      <h3 className="en300 leading-none -mb-2 lg:-mb-10">
                        <span className="en2-300 text-[1.02em] text-[--mc-400] mr-2">
                          D
                        </span>
                        EVELOPMENT
                      </h3>
                      <h3 className="en300 leading-none lg:indent-96">CLASS</h3>
                    </div>
                    <div>
                      <div className="">
                        <h3 className="en400 text-lg leading-tight">
                          In FLEX, we have development classes.
                          <br className="hidden lg:block" />
                          As a prime example, I will tell you only the points
                          <br className="hidden lg:block" />
                          that the company really needs.
                        </h3>
                        <p className="text-md lg:text-lg mt-4">
                          플렉스에서는 개발 강의와 포트폴리오 제작 클래스를
                          진행합니다.
                          <br />
                          소수정예로 회사에서 정말 필요한 포인트만 딱 집어서
                          알려드립니다.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-10 bottom-10 my-auto right-10 hidden lg:flex flex-col justify-between h-full">
                    <div className="self-end">
                      <img
                        src="/images/main/class-dev-img1.jpg"
                        alt="개발학생작품1"
                      />
                    </div>
                    <div className="">
                      <img
                        src="/images/main/class-dev-img2.jpg"
                        alt="개발학생작품2"
                      />
                    </div>
                  </div>
                </div>

                <div className="w-[100vw] relative overflow-hidden">
                  <div
                    ref={devImageContainerRef}
                    className="h-full absolute top-0 left-0 w-full flex flex-col lg:flex-row justify-center items-center lg:items-start lg:w-[50vw] mx-10 overflow-hidden z-20"
                  >
                    {devImages.map((src, index) => (
                      <img
                        key={src}
                        src={src}
                        alt={`개발 클래스 이미지 ${index + 1}`}
                        className="w-full h-auto object-cover absolute top-1/2 bottom-auto left-0 lg:top-auto lg:bottom-0 transform -translate-y-1/2 lg:translate-y-0"
                        style={{
                          opacity: index === currentDevImageIndex ? 1 : 0,
                        }}
                      />
                    ))}
                  </div>
                  <div className="w-full h-full absolute right-0 -bottom-10">
                    <svg
                      ref={svg03Ref}
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ overflow: "visible" }}
                      className="relative -right-[15vw] bottom-[-20vh] w-full h-auto -z-10"
                    >
                      <path
                        ref={path03Ref}
                        className="stroke-[--mc-400] stroke-[12px]"
                        style={{
                          fill: "none",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeMiterlimit: 10,
                        }}
                        d="M-13.8,834c0,0,324.4-132.6,583.4-306.1c440.6-295.1,645.9-273.7,795.6,8.6c92.2,173.9,155.6,220.8,265.6,292.8
	"
                      />
                    </svg>
                  </div>
                  <div className="hidden md:block absolute -top-[16vh] -right-[30vh] md:-right-10 xl:-right-80 md:-top-[10vh] w-4/5 h-4/5 z-10">
                    <div className="w-full h-full max-w-[960px] aspect-square">
                      <Canvas>
                        <Model2 position={[0, 0, 4]} />
                        <directionalLight intensity={2} position={[0, 2, 4]} />
                        <Environment preset="city" />
                      </Canvas>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
});

Section07.displayName = "Section07";