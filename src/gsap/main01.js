import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ScrollToPlugin from 'gsap/ScrollToPlugin';
import { Canvas, useFrame } from '@react-three/fiber';
import { useAnimations, useGLTF, Environment } from '@react-three/drei';


const Main01 = () => {

  const Opening = () => {
    const { scene, animations, materials } = useGLTF('/blender/opening.glb'); // GLB 파일 경로
    const openingRef = useRef();
    const { actions } = useAnimations(animations, openingRef);
  
    useEffect(() => {
      Object.keys(actions).forEach((key) => {
        actions[key]?.play();  
      });
    }, [actions]);
    return (
      <primitive ref={openingRef} object={scene} material={materials.opening} scale={2.5} />
    );
  };

  return (
    <section className='w-dvw flex justify-center items-center' style={{backgroundColor:'#ffec40', width:'100%', height:'100vh'}}>
      <img src='main.png'></img>
      <div className='img_wrap' style={{width:'1000px', height:'1000px', zIndex:'999', position:'absolute'}}>
        <Canvas style={{width:'100%', height:'100%'}}>
        <Opening />
        <directionalLight intensity={1} position={[-5, 5, 5]} /> 
        <ambientLight S={0.3} />
        <Environment preset="studio" />
      </Canvas>
      </div>
    </section>     
  )
}

export default Main01
