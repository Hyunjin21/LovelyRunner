import React, { useEffect } from 'react';
import gsap from 'gsap';
import { useRef } from 'react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Main02fixed = () => {
  gsap.registerPlugin(ScrollTrigger);
  const triggerRef = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {

    // 텍스트 크기 감소 및 색상 변경
    gsap.to(textRef.current, {
      scrollTrigger: {
        trigger: triggerRef.current,
        start: '0% 100%', 
        end: '0% 5%', 
        scrub: true,
        markers: true,
    },
    fontSize: '24px',
    ease: 'ease-in',
    });
    // triggerRef의 높이 조정 및 배경색 변경
    gsap.to(triggerRef.current, {
    //   background: 'linear-gradient(#86bee7 20%, transparent)',
      scrollTrigger: {
        trigger: triggerRef.current,
        start: '0% 100%',
        end: '0% 5%', 
        scrub: true,
        markers: true,
      },
      immediateRender: false,
      position: 'fixed',
      top: '24px',
      zIndex:'99',
      ease: 'none',
    });

  }, []);
  return (
    <section ref={triggerRef} className='scrolled-title' style={{ backgroundColor: 'linear-gradient(#86bee7 20%, transparent)', width: '1920px', height: 'auto'}}>
      <div ref={titleRef} className='flex justify-center uppercase leading-none' style={{ position: 'relative', top:0, transition: 'top 0.3s ease-in-out', boxSizing: 'border-box' }}>
        <span ref={textRef} className='w-max whitespace-nowrap block' style={{ fontSize: '18.750vw', fontWeight: 700, color: '#ffec40' }}>Lovely Runner</span>
      </div> 
    </section>
  );
}
export default Main02fixed;
