import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Main08 = () => {
  gsap.registerPlugin(ScrollTrigger);
  const triggerRef = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const subtitleRef = useRef(null);
  const text01Ref = useRef(null);
  const text02Ref = useRef(null);
  const text03Ref = useRef(null);

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
    .fromTo(textRef.current, { x: '100%' }, { x: '0%', ease: 'none', duration: 10 }, 0);

  }, []);

  return (
    <section ref={triggerRef} className='scroll-title' style={{ backgroundColor: '#fff', width: '1920px', height: '100vh', position: 'relative' }}>
      <div ref={titleRef} className='flex justify-center uppercase leading-none' style={{ position: 'relative', top:0, transition: 'top 0.3s ease-in-out', boxSizing: 'border-box' }}>
        <span ref={textRef} className='w-max whitespace-nowrap block' style={{ fontSize: '400px', fontWeight: 700, color: '#000' }}>Film Distributor</span>
      </div>
      <div ref={subtitleRef}>
        <span ref={text01Ref} className='w-max whitespace-nowrap block' style={{ fontSize: '260px', fontWeight: 500, color: '#ffec40' }}>TVING</span>
        <span ref={text01Ref} className='w-max whitespace-nowrap block' style={{ fontSize: '260px', fontWeight: 500, color: '#86bee7' }}>SERIESON</span>
        <span ref={text01Ref} className='w-max whitespace-nowrap block' style={{ fontSize: '260px', fontWeight: 500, color: '#0cd886' }}>NETFLEX</span>
      </div>
    </section>
  );
}

export default Main08;
