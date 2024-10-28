import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ScrollToPlugin from 'gsap/ScrollToPlugin';
import { Canvas, useFrame } from '@react-three/fiber';
import { useAnimations, useGLTF, Environment } from '@react-three/drei'; 
import * as THREE from 'three';

const Main06 = () => {
  gsap.registerPlugin(ScrollTrigger);
  const triggerRef = useRef(null);
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);

  const WatchModel = () => {
    const { scene, animations, materials } = useGLTF('/blender/watch.glb'); // GLB 파일 경로
    const watchRef = useRef();
    const { actions } = useAnimations(animations, watchRef);
  
    useEffect(() => {
      Object.keys(actions).forEach((key) => {
        const action = actions[key];
        if (action) {
          action.setLoop(THREE.LoopOnce); // 애니메이션이 한 번만 실행되도록 설정
          action.clampWhenFinished = true; // 애니메이션이 끝나면 마지막 프레임에서 멈춤
          action.play();
        }
      });
    
  
      // 모델 이동 애니메이션 설정 (처음 위치를 왼쪽 위로 설정하고 이동)
      gsap.fromTo(
        watchRef.current.position,
        { x: -30, y: 30 }, // 처음 위치 (왼쪽 위)
        {
          x: 10, // 오른쪽으로 이동할 거리
          y: -10, // 아래로 이동할 거리 (대각선 방향)
          scrollTrigger: {
            trigger: "#triggerRef", // Main06의 트리거와 일치시킴
            start: "top top",
            end: "bottom center",
            scrub: 1,
            // markers: true, // 디버깅용 마커
          },
        }
      );
  
    }, [actions]);
  
    return (
      <primitive ref={watchRef} object={scene} material={materials.watch} scale={1.5} />
    );
  };

  useEffect(()=>{
    const containerAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: triggerRef.current,
        start: 'top top',
        end: 'bottom center',
        scrub:1,
        pin:true,
        // pinSpacing:false,
        // markers: true
      }
    })
    .fromTo(textRef.current, 
      { 
        x:'50%', 
      }, {
        x:'-20%',
        ease:'none', 
        duration:10
      },0)

    return () => {
      containerAnimation.kill();
    };
  },[]);

  

  return (
    <section ref={triggerRef} className='watch overflow-x-clip h-screen w-full' style={{ width:'100%', height:'100vh', margin:0, padding:0,position:'relative', marginTop:'150px'}}>
      <div className='scroll-item w-100vw relative flex justify-center h-[100%] m-0'>
        <div className='img_wrap' style={{width:'100vw', height:'1000px', position:'absolute'}}>
          <Canvas style={{width:'100%', height:'100%'}}>
            <WatchModel style={{zIndex:'999'}}/>
            <directionalLight intensity={1} position={[-5, 5, 5]} />
             <ambientLight intensity={0.3} />
             <Environment preset="studio" />
          </Canvas>
        </div>
      </div>
      <div ref={sectionRef} className='scroll-title h-dvh w-dvw flex justify-center items-center' style={{width:'100vw',backgroundColor:'#fff',position:'absolute',top:'50%',zIndex:-1,marginTop:'8vw',transform:'translateY(-50%)'}}>
        <div ref={titleRef} className='uppercase leading-none'>
          <span ref={textRef} className='w-max whitespace-nowrap block' style={{fontSize:'20.8333vw', fontWeight: 700, color:'#ffec40',letterSpacing:'-0.625vw'}}>Lovely Runner</span>
        </div>
      </div>    
    </section>
  )
}

export default Main06
