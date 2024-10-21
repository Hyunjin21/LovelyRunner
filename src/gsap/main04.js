import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Canvas, useFrame } from '@react-three/fiber';
import { useAnimations, useGLTF, Environment } from '@react-three/drei';


const Main04 = () => {
  gsap.registerPlugin(ScrollTrigger);
  const triggerRef = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);

  useEffect(()=>{
    gsap.timeline({
      scrollTrigger: {
        trigger: triggerRef.current,
        start: '0% 100%',
        end: '0% 20%',
        scrub:1,
        // markers: true
      }
    })
    .fromTo(textRef.current, {x:'100%'}, {x:'-20%', ease:'none', duration:10},0)
  },[]);

  const Umbrella = () => {
    const { scene, animations, materials } = useGLTF('/blender/umbrella.glb'); // GLB 파일 경로
    const umbrellaRef = useRef(null);
    const { actions } = useAnimations(animations, umbrellaRef);
    const [scrollY, setScrollY] = useState(0);
    // const [mouseX, setMouseX] = useState(0);
  
    // useEffect(() => {
    //   const handleMouseMove = (event) => {
    //     setMouseX(event.clientX / window.innerWidth - 0.5);
    //   };
    //   window.addEventListener("mousemove", handleMouseMove);
    //   return () => {
    //     window.removeEventListener("mousemove", handleMouseMove);
    //   };
    // }, []);
  
    // useFrame(() => {
    //   if (umbrellaRef.current) {
    //     umbrellaRef.current.rotation.x = mouseX * Math.PI * 0.5;
    //   }
    // });
    useEffect(()=>{
      const handleScroll = () => {
        setScrollY(window.scrollY / window.innerHeight);
      };
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    useFrame(() => {
      if (umbrellaRef.current) {
        umbrellaRef.current.rotation.x = scrollY * 0.005;
      }
    });

    useEffect(() => {
      if (actions && Object.keys(actions).length > 0) {
        Object.keys(actions).forEach((key) => {
          actions[key]?.play();  
        });
      }
    }, [actions]);
  
    return (
      <primitive ref={umbrellaRef} object={scene} scale={1.1} />  // scale 값 조정
    );
  };

  

  return (
    <section className='w-dvw overflow-hidden' style={{backgroundColor:'#ffec40', width:'100%', marginTop:'300px', paddingBottom:'500px'}}>
        <div className='descript' style={{color:'#000', paddingTop:'300px', height:'200vh'}}>
          <div className='text-wrap' style={{paddingLeft:'7.031vw',paddingRight:'7.031vw'}}>
            <p className='w-max whitespace-nowrap block text-6xl md:text-[5vw] font-medium'>
            What if you<br className='block md:hidden'/>get a chance<br className='block md:hidden'/>to save your<br className='block md:hidden'/>favorite?<br/>
            <span className='hidden md:block'>
            Nineteen to live again,<br className='block md:hidden'/>my goal is <br className='block md:hidden'/>to protect my favorite<br className='block md:hidden'/>Ryu Sun-jae!
            </span>
            </p>
            <span className='w-max whitespace-nowrap text-2xl md:text-[1.8vw] font-light block pt-[100px]'>
            만약, 당신의 최애를<br className='block md:hidden'/>구할 수 있는 기회가 온다면?<br/>
            다시 살게 된 열아홉,<br className='block md:hidden'/>목표는 최애 류선재를 지키는 것!
            </span>
          </div>
          <div ref={triggerRef} className='scroll-title h-dvh flex justify-center items-start overflow-hidden' style={{width:'100%', height:'100vh', position:'absolute',backgroundColor:'#ffec40', paddingTop:'260px',paddingBottom:'260px'}}>
            <div ref={titleRef} className='uppercase leading-none'>
              <span ref={textRef} className='w-max whitespace-nowrap block' style={{fontSize:'20.833vw', fontWeight: 700, color:'#86bee7', letterSpacing: '-0.625vw'}}>Lovely Runner</span>
            </div>
          </div>
          <div className='img-box' style={{position:'relative'}}>
            <div className='img_wrap' style={{position:'absolute', width:'300px' , height:'300px', zIndex:'999', top:'28.302vw', right:'9.625vw'}}>
              <Canvas style={{width:'100%', height:'100%'}}>
                <Umbrella />
                <directionalLight intensity={2} position={[-5, 5, 5]} /> 
                <ambientLight intensity={1} />
                <Environment preset="studio" />
              </Canvas>
            </div>
          </div>
        </div>
    </section>    
  )
}

export default Main04
