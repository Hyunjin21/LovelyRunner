import React, { useEffect } from 'react';
import gsap from 'gsap';
import { useRef } from 'react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Main02 = () => {
  gsap.registerPlugin(ScrollTrigger);
  const triggerRef = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    // 텍스트 x축 이동
    gsap.timeline({
      scrollTrigger: {
        trigger: triggerRef.current,
        start: '0% 100%',
        end: '0% 20%',
        scrub: 1,
        // markers: true
      }
    })
    .fromTo(textRef.current, { x: '100%'}, { x: '0%', ease: 'none', duration: 10 }, 0)
    
    gsap.timeline({
      scrollTrigger: {
        trigger: triggerRef.current,
        start: '0% 20%',
        end: '0% 10%',
        scrub: 1,
        // markers: true
      }
    })
    .fromTo(textRef.current, { color:'#86bee7' }, { color:'#ffec40' }, 100)
  }, []);
  

  return (
    <section ref={triggerRef} className='scroll-title' style={{ backgroundColor: '#ffec40', width: '100vw', height: '100vh', position: 'relative' }}>
      <div ref={titleRef} className='flex justify-center uppercase leading-none' style={{ position: 'relative', top:0, transition: 'top 0.3s ease-in-out', boxSizing: 'border-box' }}>
        <span ref={textRef} className='w-max whitespace-nowrap block' style={{ fontSize: '18.750vw', fontWeight: 700, color: '#86bee7' }}>Lovely Runner</span>
      </div>
    </section>
  );
}

export default Main02;
