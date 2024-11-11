import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Canvas, useFrame } from '@react-three/fiber';
import { useAnimations, useGLTF, Environment } from '@react-three/drei';
import { motion, useScroll, useTransform } from 'framer-motion';


const Main04 = () => {
  gsap.registerPlugin(ScrollTrigger);
  const triggerRef = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const sectionRef = useRef(null);

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

  const Umbrella = ({containerRef}) => {
    const { scene, animations, materials } = useGLTF('/blender/umbrella.glb');
    const umbrellaRef = useRef(null);
    const { actions } = useAnimations(animations, umbrellaRef);

  const { scrollYProgress } = useScroll({
    target: containerRef, 
    offset: ["start end", "end start"], 
  });

  const rotationX = useTransform(scrollYProgress, [0, 1], [Math.PI * 2, 0]); 

  useFrame(() => {
    if (umbrellaRef.current) {
      umbrellaRef.current.rotation.x = rotationX.get(); 
    }
  });

  useEffect(() => {
    if (actions) {
      Object.keys(actions).forEach((key) => {
        actions[key]?.play();
      });
    }
  }, [actions]);

  
    return (
      <primitive ref={umbrellaRef} object={scene} scale={0.4} />  // scale 값 조정
    );
  };

  

  return (
    <section ref={sectionRef} className='w-dvw overflow-hidden' style={{backgroundColor:'#6abbff', width:'100%', marginTop:'300px', paddingBottom:'500px'}}>
        <div className='descript' style={{color:'#000', paddingTop:'300px', height:'200vh'}}>
          <div className='text-wrap text-white' style={{paddingLeft:'7.031vw',paddingRight:'7.031vw'}}>
            <p className='w-max whitespace-nowrap block text-6xl md:text-[5vw] font-normal leading-[1.2]'>
            What if you<br className='block md:hidden'/> get a chance<br className='block'/>to save your<br className='block md:hidden'/> favorite?<br/>
            <span className='hidden md:block'>
            Nineteen to live again,<br className='block'/> my goal is to protect <br className='block'/>my favorite<br className='block md:hidden'/> Ryu Sun-jae!
            </span>
            </p>
            <span className='w-max whitespace-nowrap text-2xl md:text-[1.8vw] font-normal block pt-[100px] leading-[1.5]'>
            만약, 당신의 최애를<br className='block md:hidden'/> 구할 수 있는 기회가 온다면?<br/>
            다시 살게 된 열아홉,<br className='block md:hidden'/> 목표는 최애 <span className='text-[#fd6b98] underline'>류선재</span>를 지키는 것!
            </span>
          </div>
          <div ref={triggerRef} className='scroll-title h-dvh flex justify-center items-start overflow-hidden' style={{width:'100%', height:'100vh', position:'absolute',backgroundColor:'#6abbff', paddingTop:'260px',paddingBottom:'260px'}}>
            <div ref={titleRef} className='uppercase leading-none'>
              <span ref={textRef} className='w-max whitespace-nowrap block' style={{fontSize:'20.833vw', fontWeight: 300, color:'#fd6b98', letterSpacing: '-0.625vw'}}>Lovely Runner</span>
            </div>
          </div>
          <div className='img-box' style={{position:'relative'}}>
            <div className='img_wrap' style={{position:'absolute', width:'600px' , height:'600px', zIndex:'999', top:'10.302vw', right:'5.625vw'}}>
              <Canvas style={{width:'100%', height:'100%'}}>
                <Umbrella containerRef={sectionRef}/>
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
