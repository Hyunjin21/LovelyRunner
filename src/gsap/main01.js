import React, { useEffect, useRef } from 'react';

const Main01 = () => {
  const videoRef = useRef(null);
  const hasPlayedOnce = useRef(false);

  const handleScroll = () => {
    if (window.scrollY === 0 && videoRef.current && hasPlayedOnce.current) {
      videoRef.current.currentTime = 0; 
      videoRef.current.play();
    }
  };

  useEffect(() => {
    if (videoRef.current && !hasPlayedOnce.current) {
      setTimeout(() => {
        videoRef.current.playbackRate = 0.5; 
        videoRef.current.play();
        hasPlayedOnce.current = true; 
      }, 8000); 
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className='w-dvw flex justify-center items-center' style={{backgroundColor:'#6abbff', width:'100%', height:'100vh'}}>
      <div className='img_wrap' style={{width:'1000px', height:'1000px', zIndex:'999', position:'absolute'}}>
        <Canvas style={{width:'100%', height:'100%'}}>
        <Opening />
        <directionalLight intensity={1} position={[-5, 5, 5]} /> 
        <ambientLight S={0.3} />
        <Environment preset="studio" />
      </Canvas>
      </div>
    </section>     
  );
}

export default Main01;
