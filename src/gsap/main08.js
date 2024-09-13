import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Main08 = () => {
  gsap.registerPlugin(ScrollTrigger);
  const triggerRef = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const listRef = useRef(null);
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
        // pin: true,
        // markers: true
      }
    })
    .fromTo(textRef.current, { x: '100%' }, { x: '0%', ease: 'none', duration: 10 }, 0);

    gsap.timeline({
      scrollTrigger : {
        trigger : titleRef.current,
        start : 'top center',
        end : 'center center',
        scrub : 1,      
        markers: true
      }
    })
    .to(text01Ref.current, {y:'-500px', duration: 1, ease:'none'},0.5)
    .to(text02Ref.current, {y:'-500px', duration: 1, ease:'none'},1.0)
    .to(text03Ref.current, {y:'-500px', duration: 1, ease:'none'},1.5)
  }, []);

  return (
    <section ref={triggerRef} className='scroll-title' style={{ backgroundColor: '#fff', width: '1920px', height: '100vh', position: 'relative' }}>
      <div ref={titleRef} className='flex justify-center uppercase leading-none' style={{ position: 'relative', top:0, transition: 'top 0.3s ease-in-out', boxSizing: 'border-box' }}>
        <span ref={textRef} className='w-max whitespace-nowrap block' style={{ fontSize: '20.833vw', fontWeight: 700, color: '#000' }}>Film Distributor</span>
      </div>
      <div style={{position:'relative', height:'100%', paddingLeft:'5.208vw', paddingRight:'5.208vw', maxWidth:'1920px', boxSizing:'border-box'}}>
        <ul ref={listRef} style={{marginTop:'-9.375vw', listStyle:'none'}}>
          <li ref={text01Ref} className='w-max whitespace-nowrap block' style={{ fontSize: '13.542vw', fontWeight: 500, color: '#ffec40', position:'absolute', top:'70%', left:'5.208vw'}}>TVING</li>
          <li ref={text02Ref} className='w-max whitespace-nowrap block' style={{ fontSize: '13.542vw', fontWeight: 500, color: '#86bee7', position:'absolute', top:'70%', left:'50%', transform:'translate(-70%,-50%)'}}>SERIESON</li>
          <li ref={text03Ref} className='w-max whitespace-nowrap block' style={{ fontSize: '13.542vw', fontWeight: 500, color: '#0cd886', position:'absolute', top:'70%', right:'5.208vw'}}>NETFLEX</li>
        </ul>
      </div>
    </section>
  );
}

export default Main08;
