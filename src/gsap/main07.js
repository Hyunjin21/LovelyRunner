import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Main07 = () => {
  const sectionRef = useRef(null); 
  const triggerRef = useRef(null);  
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const containerAnimation = gsap.to(sectionRef.current, {
      x: () => -(sectionRef.current.scrollWidth - window.innerWidth) + 'px',
      ease: 'none',
      scrollTrigger: {
        trigger: triggerRef.current,
        // start: 'top top',
        start: 'center center',
        end: () => "+=" + sectionRef.current.scrollWidth,
        // end: () => "+=" + (sectionRef.current.scrollWidth - window.innerWidth),
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      },
    });

    return () => {
      containerAnimation.kill();
    };
  }, []);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index); 
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };
  
  return (
    <section ref={triggerRef} className='img-wrapper overflow-x-clip' style={{backgroundColor:'#fff', width:'100%', marginTop:'300px', height:'100vh'}}>
        {/* 배경 텍스트 추가 */}
        <div style={{
          position: 'absolute',
          bottom: '0',
          left: 0,
          fontSize: '10vw', 
          color: 'rgba(0, 0, 0, 0.2)',
          fontWeight: 600,
          whiteSpace: 'nowrap',
          zIndex: 0, 
          lineHeight : 1.1
        }}>
          From<br/>Webtoon<br/>To Drama
        </div>
        
        
        <div ref={sectionRef} className='img-scroll flex flex-row items-center h-screen' style={{padding:'0px 160px'}}>
          {/* 이미지 1 */}
          <div className='img-wrap w-[60.416vw] h-[81.042vw] md:w-[30.208vw] md:h-[40.521vw]' style={{flex: '0 0 auto', marginRight:'40px'}}
            onMouseEnter={() => handleMouseEnter(0)} 
            onMouseLeave={handleMouseLeave}>
            <img src={hoveredIndex === 0 ? 'scene01_2.jpeg' : 'scene01.jpg'} style={{ width: '100%', height: '100%', borderRadius: '20px', transform: 'rotate(5deg)', objectFit: 'cover', objectPosition: 'center' }} />
          </div>
        
          {/* 이미지 2 */}
          <div className='img-wrap w-[98.646vw] h-[67.812vw] md:w-[49.323vw] md:h-[33.906vw]' style={{ flex: '0 0 auto', marginRight:'40px' }}
            onMouseEnter={() => handleMouseEnter(1)} 
            onMouseLeave={handleMouseLeave}>
            <img src={hoveredIndex === 1 ? 'scene02_2.png' : 'scene02.png'} style={{ width: '100%', height: '100%', borderRadius: '20px', objectFit: 'cover', objectPosition: 'center' }} />
          </div>
        
          {/* 이미지 3 */}
          <div className='img-wrap w-[60.104vw] h-[81.980vw] md:w-[30.052vw] md:h-[40.990vw]' style={{ flex: '0 0 auto', marginRight:'70px' }}
            onMouseEnter={() => handleMouseEnter(2)} 
            onMouseLeave={handleMouseLeave}>
            <img src={hoveredIndex === 2 ? 'scene03_2.png' : 'scene03.png'} style={{ width: '100%', height: '100%', borderRadius: '20px', objectFit: 'cover', transform: 'rotate(5deg)', objectPosition: 'center' }} />
          </div>
        
          {/* 이미지 4 */}
          <div className='img-wrap w-[67.396vw] h-[86.146vw] md:w-[33.698vw] md:h-[43.073vw]' style={{ flex: '0 0 auto', marginRight:'40px' }}
            onMouseEnter={() => handleMouseEnter(3)} 
            onMouseLeave={handleMouseLeave}>
            <img src={hoveredIndex === 3 ? 'scene04_2.png' : 'scene04.png'} style={{ width: '100%', height: '100%', borderRadius: '20px', objectFit: 'cover', transform: 'rotate(-5deg)', objectPosition: 'center' }} />
          </div>
        
          {/* 이미지 5 */}
          <div className='img-wrap w-[69.270vw] h-[87.500vw] md:w-[34.635vw] md:h-[43.750vw]' style={{ flex: '0 0 auto', marginRight:'40px' }}
            onMouseEnter={() => handleMouseEnter(4)} 
            onMouseLeave={handleMouseLeave}>
            <img src={hoveredIndex === 4 ? 'scene05_2.png' : 'scene05.png'} style={{ width: '100%', height: '100%', borderRadius: '20px', objectFit: 'cover', transform: 'rotate(10deg)', objectPosition: 'center' }} />
          </div>
        
          {/* 이미지 6 */}
          <div className='img-wrap w-[98.750vw] h-[67.812vw] md:w-[49.375vw] md:h-[33.906vw]' style={{ flex: '0 0 auto', marginRight:'40px' }}
            onMouseEnter={() => handleMouseEnter(5)} 
            onMouseLeave={handleMouseLeave}>
            <img src={hoveredIndex === 5 ? 'scene06_2.png' : 'scene06.png'} style={{ width: '100%', height: '100%', borderRadius: '20px', objectFit: 'cover', objectPosition: 'center' }} />
          </div>
        </div>

    </section>    
  )
}

export default Main07






        