import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Main06 = () => {
  gsap.registerPlugin(ScrollTrigger);
  const triggerRef = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);

  useEffect(()=>{
    gsap.timeline({
      scrollTrigger: {
        trigger: triggerRef.current,
        start: '0% 100%',
        end: '0% 20%',
        scrub:1,
        // markers: true
      }
    })
    .fromTo(textRef.current, {x:'100%'}, {x:'-50%', ease:'none', duration:5},0)
  },[]);

  

  return (
    <section ref={triggerRef} className='scroll-title h-dvh w-dvw flex justify-center items-start' style={{backgroundColor:'#fff'}}>
        <div ref={titleRef} className='uppercase leading-none'>
          <span ref={textRef} className='w-max whitespace-nowrap block' style={{fontSize:'18.750vw', fontWeight: 700, color:'#86bee7'}}>Lovely Runner</span>
        </div>
    </section>    
  )
}

export default Main06
