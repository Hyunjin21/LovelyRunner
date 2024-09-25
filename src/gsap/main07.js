import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Main07 = () => {
  const sectionRef = useRef(null); 
  const triggerRef = useRef(null);  
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // 가로 스크롤 애니메이션
    const containerAnimation = gsap.to(sectionRef.current, {
      x: () => -(sectionRef.current.scrollWidth - window.innerWidth) + 'px',
      ease: 'none',
      scrollTrigger: {
        trigger: triggerRef.current,
        start: 'top top',
        end: () => "+=" + sectionRef.current.scrollWidth,
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
    <section ref={triggerRef} className='img-wrapper overflow-hidden' style={{backgroundColor:'#fff', width:'100vw'}}>
        <div ref={sectionRef} className='img-scroll flex flex-row items-center' style={{padding:'0px 160px'}}>
          {/* 이미지 1 */}
          <div className='img-wrap' style={{ width: '30.208vw', height: '40.521vw', flex: '0 0 auto', marginRight:'40px'}}
            onMouseEnter={() => handleMouseEnter(0)} 
            onMouseLeave={handleMouseLeave}>
            <img src={hoveredIndex === 0 ? 'scene01_2.jpeg' : 'scene01.jpg'} style={{ width: '100%', height: '100%', borderRadius: '20px', transform: 'rotate(5deg)', objectFit: 'cover', objectPosition: 'center' }} />
          </div>
        
          {/* 이미지 2 */}
          <div className='img-wrap' style={{ width: '49.323vw', height: '33.906vw', flex: '0 0 auto', marginRight:'40px' }}
            onMouseEnter={() => handleMouseEnter(1)} 
            onMouseLeave={handleMouseLeave}>
            <img src={hoveredIndex === 1 ? 'scene02_2.png' : 'scene02.png'} style={{ width: '100%', height: '100%', borderRadius: '20px', objectFit: 'cover', objectPosition: 'center' }} />
          </div>
        
          {/* 이미지 3 */}
          <div className='img-wrap' style={{ width: '30.052vw', height: '40.990vw', flex: '0 0 auto', marginRight:'70px' }}
            onMouseEnter={() => handleMouseEnter(2)} 
            onMouseLeave={handleMouseLeave}>
            <img src={hoveredIndex === 2 ? 'scene03_2.png' : 'scene03.png'} style={{ width: '100%', height: '100%', borderRadius: '20px', objectFit: 'cover', transform: 'rotate(5deg)', objectPosition: 'center' }} />
          </div>
        
          {/* 이미지 4 */}
          <div className='img-wrap' style={{ width: '33.698vw', height: '43.073vw', flex: '0 0 auto', marginRight:'40px' }}
            onMouseEnter={() => handleMouseEnter(3)} 
            onMouseLeave={handleMouseLeave}>
            <img src={hoveredIndex === 3 ? 'scene04_2.png' : 'scene04.png'} style={{ width: '100%', height: '100%', borderRadius: '20px', objectFit: 'cover', transform: 'rotate(-5deg)', objectPosition: 'center' }} />
          </div>
        
          {/* 이미지 5 */}
          <div className='img-wrap' style={{ width: '34.635vw', height: '43.750vw', flex: '0 0 auto', marginRight:'40px' }}
            onMouseEnter={() => handleMouseEnter(4)} 
            onMouseLeave={handleMouseLeave}>
            <img src={hoveredIndex === 4 ? 'scene05_2.png' : 'scene05.png'} style={{ width: '100%', height: '100%', borderRadius: '20px', objectFit: 'cover', transform: 'rotate(10deg)', objectPosition: 'center' }} />
          </div>
        
          {/* 이미지 6 */}
          <div className='img-wrap' style={{ width: '49.375vw', height: '33.906vw', flex: '0 0 auto', marginRight:'40px' }}
            onMouseEnter={() => handleMouseEnter(5)} 
            onMouseLeave={handleMouseLeave}>
            <img src={hoveredIndex === 5 ? 'scene06_2.png' : 'scene06.png'} style={{ width: '100%', height: '100%', borderRadius: '20px', objectFit: 'cover', objectPosition: 'center' }} />
          </div>
        </div>

    </section>    
  )
}

export default Main07


{/* <div className='h-dvh' style={{color:'#000', paddingTop:'260px'}}>
          <div className='text-wrap' style={{paddingLeft:'7.031vw',paddingRight:'7.031vw',paddingBottom:'10.208vw', transform:'translate(0px,0px)'}}>
            <p className='w-max whitespace-nowrap block' style={{fontSize:'4vw', fontWeight: 500, fontFamily:'DOSSaemmul', position:'absolute'}}>
            앞으로 Łйㄱr 옆 딱 붙øłnㅓ ズl켜줄つㅓl! <br/> 
            류선재! LIㄱr Łй 별○l○F <br/>
            ㅁı치겠⊂ト 임솔, 너 ㄸĦ문øłl...
            앞으로 내가 옆에 딱 붙어서 지켜줄게!<br/>
            류선재! 니가 내 별이야<br/>
            미치겠다 임솔, 너 때문에...
            </p>
            <div className='img-wrap ani' style={{width: '16.615vw', height: '16.615vw', margin:'0 auto', transform:'translate3d(0px,0px,0px) rotate(0deg)'}}>
              <img src='acorn.png'/>
            </div>
          </div>
        </div> */}




        