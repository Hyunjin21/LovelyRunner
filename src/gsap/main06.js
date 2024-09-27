import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Main06 = () => {
  gsap.registerPlugin(ScrollTrigger);
  const triggerRef = useRef(null);
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);

  useEffect(()=>{
    const containerAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: triggerRef.current,
        start: 'top top',
        end: 'bottom center',
        scrub:1,
        pin:true,
        // pinSpacing:false,
        // markers: true
      }
    })
    .fromTo(textRef.current, 
      { 
        x:'50%', 
      }, {
        x:'-20%',
        ease:'none', 
        duration:10
      },0)

    return () => {
      containerAnimation.kill();
    };
  },[]);

  // useEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

  //   const containerAnimation = gsap.to(sectionRef.current, {
  //     translateX: "-400vw",
  //     ease: "none",
  //     duration: 1,
  //     scrollTrigger: {
  //       trigger: triggerRef.current,
  //       start: "top top",
  //       end: "5000 top",
  //       scrub: 1,
  //       // scrub: 0.6,
  //       pin: true,
  //       markers:true,
  //       invalidateOnRefresh: true,

  //     },
  //   });

  //   return () => {
  //     containerAnimation.kill();
  //   };
  // }, []);  

  return (
    <section ref={triggerRef} className='pen overflow-x-clip h-screen w-full' style={{maxWidth:'1920px', width:'100%', height:'100vh', margin:0, padding:0,position:'relative', marginTop:'150px'}}>
      <div className='scroll-item'>
        <div className='img-wrap' style={{width:'67.708vw',height:'44.271vw', margin:'0 auto'}}>
          <img src='pen.png'/>
        </div>
      </div>
      <div ref={sectionRef} className='scroll-title h-dvh w-dvw flex justify-center items-center' style={{width:'100vw',backgroundColor:'#fff',position:'absolute',top:'50%',zIndex:-1,marginTop:'8vw',transform:'translateY(-50%)'}}>
        <div ref={titleRef} className='uppercase leading-none'>
          <span ref={textRef} className='w-max whitespace-nowrap block' style={{fontSize:'20.8333vw', fontWeight: 700, color:'#86bee7',letterSpacing:'-0.625vw'}}>Lovely Runner</span>
        </div>
      </div>    
    </section>
  )
}

export default Main06
