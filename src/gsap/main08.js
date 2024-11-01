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
    // 기본적인 스크롤 트리거 설정
    const containerAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: triggerRef.current,
        start: 'top top',
        end: '+=400',
        scrub: 1,
        pin: true,
        // markers: true,
      }
    })
    .fromTo(textRef.current, { x: '25%' }, { x: '-50%', ease: 'none', duration: 2 });

    // 스크롤 방향 감지 및 애니메이션
    const listAnimation = ScrollTrigger.create({
      trigger: triggerRef.current,
      start: 'top top',
      end: 'bottom bottom',
      scrub: 1,
      // markers: true,
      onUpdate: (self) => {
        const direction = self.direction;

        // 스크롤 다운 (아래로 이동)
        if (direction > 0) {
          gsap.to(text01Ref.current, { opacity: 1, y: '-1500px', duration: 3, ease: 'power2.out' });
          gsap.to(text02Ref.current, { opacity: 1, y: '-1500px', duration: 3, ease: 'power2.out', delay: 0.5 });
          gsap.to(text03Ref.current, { opacity: 1, y: '-1500px', duration: 3, ease: 'power2.out', delay: 1 });
        } 
        // 스크롤 업 (위로 이동)
        else {
          gsap.to(text03Ref.current, { opacity: 1, y: '300px', duration: 3, ease: 'power2.out' });
          gsap.to(text02Ref.current, { opacity: 1, y: '300px', duration: 3, ease: 'power2.out', delay: 0.5 });
          gsap.to(text01Ref.current, { opacity: 1, y: '300px', duration: 3, ease: 'power2.out', delay: 1 });
        }
      }
    });

    return () => {
      containerAnimation.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section ref={triggerRef} className='scroll-title overflow-x-clip h-screen w-full' style={{ backgroundColor: '#fff', width: '100%', height: '100vh', position: 'relative', overflow:'hidden',marginTop:'12.5vw',marginBottom:'12.5vw', paddingTop:'300px', paddingBottom:'300px' }}>
      <div ref={titleRef} className='uppercase leading-none' style={{ position: 'relative', top:0, transition: 'top 0.3s ease-in-out', boxSizing: 'border-box' }}>
        <span ref={textRef} className='w-max whitespace-nowrap block' style={{ fontSize: '20.833vw', fontWeight: 700, color: '#6abbff' }}>드라마 배급사</span>
      </div>
      <div style={{position:'relative', top:'300px', width:'100%', height:'100%', paddingLeft:'5.208vw', paddingRight:'5.208vw', maxWidth:'1920px', boxSizing:'border-box'}}>
        <ul ref={listRef} style={{marginTop:'-9.375vw', listStyle:'none'}}>
          <li ref={text01Ref} className='w-max whitespace-nowrap block' style={{ fontSize: '13.542vw', fontWeight: 500, color: '#ffec40', position:'absolute', top:'70%', left:'5.208vw'}}>로고</li>
          <li ref={text02Ref} className='w-max whitespace-nowrap block' style={{ fontSize: '13.542vw', fontWeight: 500, color: '#86bee7', position:'absolute', top:'70%', left:'50%', transform:'translateX(-50%)'}}>SERIESON</li>
          <li ref={text03Ref} className='w-max whitespace-nowrap block' style={{ fontSize: '13.542vw', fontWeight: 500, color: '#0cd886', position:'absolute', top:'70%', right:'5.208vw'}}>NETFLEX</li>
        </ul>
      </div>
    </section>
  );
}

export default Main08;