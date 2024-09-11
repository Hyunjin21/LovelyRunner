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
    .fromTo(textRef.current, { x: '100%' }, { x: '0%', ease: 'none', duration: 10 }, 0);

    // // 두 번째 애니메이션: 텍스트 크기 감소 및 색상 변경
    // gsap.to(textRef.current, {
    //   color: '#ffec40',
    //   scrollTrigger: {
    //     trigger: triggerRef.current,
    //     start: '0% 10%', // 텍스트 애니메이션이 끝난 시점
    //     end: '0% 5%', // 스크롤이 끝나는 시점
    //     scrub: true,
    //     // markers: true,
    //   },
    //   fontSize: '24px',
    //   immediateRender: false, // 바로 변경되도록 설정
    //   ease: 'ease-in',
    // });

    // // 세 번째 애니메이션: triggerRef의 높이 조정 및 배경색 변경
    // gsap.to(triggerRef.current, {
    //   height: 'auto', // 높이를 titleRef 높이에 맞춤
    //   background: 'linear-gradient(#86bee7 20%, transparent)',
    //   scrollTrigger: {
    //     trigger: triggerRef.current,
    //     start: '0% 10%',
    //     end: '0% 10%', // 스크롤이 끝나는 시점
    //     scrub: true,
    //     markers: true,
    //   },
    //   position: 'fixed',
    //   top: '24px',
    //   ease: 'none',
    // });

  }, []);

  return (
    <section ref={triggerRef} className='scroll-title' style={{ backgroundColor: '#ffec40', width: '1920px', height: '100vh', position: 'relative' }}>
      <div ref={titleRef} className='flex justify-center uppercase leading-none' style={{ position: 'relative', top:0, transition: 'top 0.3s ease-in-out', boxSizing: 'border-box' }}>
        <span ref={textRef} className='w-max whitespace-nowrap block' style={{ fontSize: '18.750vw', fontWeight: 700, color: '#86bee7' }}>Lovely Runner</span>
      </div>
    </section>
  );
}

export default Main02;
