import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ScrollToPlugin from 'gsap/ScrollToPlugin';
import { Canvas, useFrame } from '@react-three/fiber';
import { useAnimations, useGLTF, Environment } from '@react-three/drei';

const ShowerModel = () => {
  const { scene, animations, materials } = useGLTF('/blender/shower.glb'); // GLB 파일 경로
  const showerRef = useRef();
  const { actions } = useAnimations(animations, showerRef);
  const [mouseX, setMouseX] = useState(0);

  useEffect(() => {
    Object.keys(actions).forEach((key) => {
      actions[key]?.play();  
    });
  }, [actions]);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMouseX(event.clientX / window.innerWidth - 0.5);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useFrame(() => {
    if (showerRef.current) {
      showerRef.current.rotation.y = mouseX * Math.PI * 0.5;
    }
  });

  return (
    <primitive ref={showerRef} object={scene} material={materials.shower} scale={2.5} />
  );
};

const StarModel = () => {
  const { scene, animations, materials } = useGLTF('/blender/star.glb'); // GLB 파일 경로
  const starRef = useRef();
  const { actions } = useAnimations(animations, starRef);
  const [mouseX, setMouseX] = useState(0);

  useEffect(() => {
    Object.keys(actions).forEach((key) => {
      actions[key]?.play();  
    });
  }, [actions]);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMouseX(event.clientX / window.innerWidth - 0.5);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useFrame(() => {
    if (starRef.current) {
      starRef.current.rotation.y = mouseX * Math.PI * 0.5;
    }
  });

  return (
    <primitive ref={starRef} object={scene} material={materials.star} scale={2.5} />
  );
};

const DreamModel = () => {
  const { scene, animations, materials } = useGLTF('/blender/dream.glb'); // GLB 파일 경로
  const dreamRef = useRef();
  const { actions } = useAnimations(animations, dreamRef);
  const [mouseX, setMouseX] = useState(0);

  useEffect(() => {
    Object.keys(actions).forEach((key) => {
      actions[key]?.play();  
    });
  }, [actions]);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMouseX(event.clientX / window.innerWidth - 0.5);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useFrame(() => {
    if (dreamRef.current) {
      dreamRef.current.rotation.y = mouseX * Math.PI * 0.5;
    }
  });

  return (
    <primitive ref={dreamRef} object={scene} material={materials.dream} scale={2.5} />
  );
};

const SpringModel = () => {
  const { scene, animations, materials } = useGLTF('/blender/spring.glb'); // GLB 파일 경로
  const springRef = useRef();
  const { actions } = useAnimations(animations, springRef);
  const [mouseX, setMouseX] = useState(0);

  useEffect(() => {
    Object.keys(actions).forEach((key) => {
      actions[key]?.play();  
    });
  }, [actions]);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMouseX(event.clientX / window.innerWidth - 0.5);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useFrame(() => {
    if (springRef.current) {
      springRef.current.rotation.y = mouseX * Math.PI * 0.5;
    }
  });

  return (
    <primitive ref={springRef} object={scene} material={materials.spring} scale={2.5} />
  );
};

const PresentModel = () => {
  const { scene, animations, materials } = useGLTF('/blender/present2.glb'); // GLB 파일 경로
  const presentRef = useRef();
  const { actions } = useAnimations(animations, presentRef);
  const [mouseX, setMouseX] = useState(0);

  useEffect(() => {
    Object.keys(actions).forEach((key) => {
      actions[key]?.play();  
    });
  }, [actions]);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMouseX(event.clientX / window.innerWidth - 0.5);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useFrame(() => {
    if (presentRef.current) {
      presentRef.current.rotation.y = mouseX * Math.PI * 0.5;
    }
  });

  return (
    <primitive ref={presentRef} object={scene} material={materials.present} scale={2.5} />
  );
};

const Main03scroll = () => {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    const containerAnimation = gsap.to(sectionRef.current, {
      translateX: "-400vw",
      ease: "none",
      duration: 1,
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "top top",
        end: "5000 top",
        // scrub: 1,
        scrub: 0.6,
        pin: true,
        invalidateOnRefresh: true,

      },
    });

    return () => {
      containerAnimation.kill();
    };
  }, []);  

return (
  <>
      <section ref={triggerRef} className='overflow-x-clip h-screen w-full'>
        <div ref={sectionRef} className='h-full w-[500vw] flex flex-row relative bg-white'>
                {/* Page1 */}
                <div className='part part1 w-[100vw] relative flex justify-center items-center flex-col m-0 h-[100%]'>
                     <div className='img_wrap' style={{width:'1000px', height:'1000px', zIndex:'999', position:'absolute'}}>
                      <Canvas style={{width:'100%', height:'100%'}}>
                        <ShowerModel />
                        <directionalLight intensity={1} position={[-5, 5, 5]} /> 
                        <ambientLight intensity={0.3} />
                        <Environment preset="studio" />
                      </Canvas>
                     </div>
                     <div className='ost_part flex justify-center items-center m-0 w-[1920px] relative'>
                       <span className='ost_text' style={{color:'#0cd886',fontSize:'34.375vw', fontFamily: "Oswald, sans-serif", fontWeight:700, letterSpacing:1.5}}>PART1</span>
                     </div>
                     <div className='ost_info flex justify-center items-center flex-col' style={{marginTop:'-9.635vw', width:'100%', marginLeft:'auto',marginRight:'auto'}}>
                       <div className='ost_title'>
                         <span className='ost_text' style={{fontSize:'4.167vw', lineHeight:'1.04', fontWeight:500}}>Rain Shower</span>
                       </div>
                       <div className='ost_singer'>
                         <span className='ost_text' style={{fontSize:'18px', lineHeight:'1.78', marginTop: '10px'}}>Eclipse</span>
                       </div>
                     </div>
                </div>
                {/* Page2 */}
                <div className='part part2 w-[100vw] relative flex justify-center items-center flex-col m-0 h-[100%]'>
                     <div className='img_wrap' style={{width:'1000px', height:'1000px', zIndex:'999', position:'absolute'}}>
                      <Canvas style={{width:'100%', height:'100%'}}>
                        <StarModel  />
                        <directionalLight intensity={1} position={[-5, 5, 5]} />
                        <ambientLight intensity={0.3} />
                        <Environment preset="studio" />
                      </Canvas>
                     </div>
                     <div className='ost_part flex justify-center items-center m-0 w-[1920px] relative'>
                       <span className='ost_text' style={{color:'#86bee7',fontSize:'34.375vw', fontFamily: "Oswald, sans-serif", fontWeight:700, letterSpacing:1.5}}>PART2</span>
                     </div>
                     <div className='ost_info flex justify-center items-center flex-col' style={{marginTop:'-9.635vw', width:'100%', marginLeft:'auto',marginRight:'auto'}}>
                      <div className='ost_title'>
                        <span className='ost_text' style={{fontSize:'4.167vw', lineHeight:'1.04', fontWeight:500}}>Star</span>
                      </div>
                      <div className='ost_singer'>
                        <span className='ost_text' style={{fontSize:'18px', lineHeight:'1.78', marginTop: '10px'}}>N.Flying</span>
                      </div>
                    </div>
               </div>
               {/* Page3 */}
               <div className='part part3 w-[100vw] relative flex justify-center items-center flex-col m-0 h-[100%]'>
                     <div className='img_wrap' style={{width:'1000px', height:'1000px', zIndex:'999', position:'absolute'}}>
                      <Canvas style={{width:'100%', height:'100%'}}>
                        <DreamModel  />
                        <directionalLight intensity={1} position={[-5, 5, 5]} />
                        <ambientLight intensity={0.3} />
                        <Environment preset="studio" />
                      </Canvas>
                     </div>
                    <div className='ost_part flex justify-center items-center m-0 w-[1920px] relative'>
                      <span className='ost_text' style={{color:'#ff89a2',fontSize:'34.375vw', fontFamily: "Oswald, sans-serif", fontWeight:700, letterSpacing:1.5}}>PART3</span>
                    </div>
                    <div className='ost_info flex justify-center items-center flex-col' style={{marginTop:'-9.635vw', width:'100%', marginLeft:'auto',marginRight:'auto'}}>
                      <div className='ost_title'>
                        <span className='ost_text' style={{fontSize:'4.167vw', lineHeight:'1.04', fontWeight:500}}>It's like a dream</span>
                      </div>
                      <div className='ost_singer'>
                        <span className='ost_text' style={{fontSize:'18px', lineHeight:'1.78', marginTop: '10px'}}>Minnie (G)I-DLE</span>
                      </div>
                    </div>
               </div>
               {/* Page4 */}
               <div className='part part4 w-[100vw] relative flex justify-center items-center flex-col m-0 h-[100%]'>
                     <div className='img_wrap' style={{width:'1000px', height:'1000px', zIndex:'999', position:'absolute'}}>
                      <Canvas style={{width:'100%', height:'100%'}}>
                        <SpringModel  />
                        <directionalLight intensity={1} position={[-5, 5, 5]} />
                        <ambientLight intensity={0.3} />
                        <Environment preset="studio" />
                      </Canvas>
                     </div>
                    <div className='ost_part flex justify-center items-center m-0 w-[1920px] relative'>
                      <span className='ost_text' style={{color:'#b296ff',fontSize:'34.375vw', fontFamily: "Oswald, sans-serif", fontWeight:700, letterSpacing:1.5}}>PART4</span>
                    </div>
                    <div className='ost_info flex justify-center items-center flex-col' style={{marginTop:'-9.635vw', width:'100%', marginLeft:'auto',marginRight:'auto'}}>
                      <div className='ost_title'>
                        <span className='ost_text' style={{fontSize:'4.167vw', lineHeight:'1.04', fontWeight:500}}>Spring Snow</span>
                      </div>
                      <div className='ost_singer'>
                        <span className='ost_text' style={{fontSize:'18px', lineHeight:'1.78', marginTop: '10px'}}>10CM</span>
                      </div>
                    </div>
               </div>
               {/* Page5 */}
               <div className='part part5 w-[100vw] relative flex justify-center items-center flex-col m-0 h-[100%]'>
                     <div className='img_wrap' style={{width:'1000px', height:'1000px', zIndex:'999', position:'absolute'}}>
                      <Canvas style={{width:'100%', height:'100%'}}>
                        <PresentModel  />
                        <directionalLight intensity={1} position={[-5, 5, 5]} />
                        <ambientLight intensity={0.3} />
                        <Environment preset="studio" />
                      </Canvas>
                     </div>
                    <div className='ost_part flex justify-center items-center m-0 w-[1920px] relative'>
                      <span className='ost_text' style={{color:'#ffeb35',fontSize:'34.375vw', fontFamily: "Oswald, sans-serif", fontWeight:700, letterSpacing:1.5}}>PART5</span>
                    </div>
                    <div className='ost_info flex justify-center items-center flex-col' style={{marginTop:'-9.635vw', width:'100%', marginLeft:'auto',marginRight:'auto'}}>
                      <div className='ost_title'>
                        <span className='ost_text' style={{fontSize:'4.167vw', lineHeight:'1.04', fontWeight:500}}>Present</span>
                      </div>
                      <div className='ost_singer'>
                        <span className='ost_text' style={{fontSize:'18px', lineHeight:'1.78', marginTop: '10px'}}>Ha Sung Woon</span>
                      </div>
                    </div>
               </div>
            </div>
      </section>
  </>
);
}

export default Main03scroll
