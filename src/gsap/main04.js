import React, { useEffect, useRef } from 'react';
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
    const umbrellaRef = useRef();
    const { actions } = useAnimations(animations, umbrellaRef);
  
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
            <span className='w-max whitespace-nowrap block' style={{fontSize:'5vw', fontWeight: 500}}>
            What if you get a chance<br/>to save your favorite?<br/>
            {/* The moment she let go of her will to live,<br/> "Ryu Sun-jae," a famous artist who let her live.<br/> */}
            {/* Desperate after his death,<br/>die-hard fan "Im Sol" goes back in time to 2008 to save his favorite!<br/> */}
            Nineteen to live again,<br/>my goal is <br/>to protect my favorite Ryu Sun-jae!
            </span>
            <span className='w-max whitespace-nowrap' style={{fontSize:'1.8vw', fontWeight: 300, display:'block', paddingTop:'100px'}}>
            만약, 당신의 최애를 구할 수 있는 기회가 온다면?<br/>
            {/* 삶의 의지를 놓아버린 순간, 자신을 살게 해줬던 유명 아티스트 "류선재".<br/> */}
            {/* 그의 죽음으로 절망했던 열성팬 "임솔"이 최애를 살리기 위해 시간을 거슬러 2008년으로 돌아간다!<br/> */}
            다시 살게 된 열아홉, 목표는 최애 류선재를 지키는 것!
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
