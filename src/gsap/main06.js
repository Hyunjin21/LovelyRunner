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
        start: 'top top',
        end: 'center center',
        scrub:1,
        pin:true,
        // pinSpacing:false,
        // markers: true
      }
    })
    .fromTo(textRef.current, 
      { 
        x:'100%', 
        // textShadow: '-30px -30px 30px rgba(0, 0, 0, 0.5)' 
      }, {
        x:'-20%',
        // textShadow: '30px 30px 30px rgba(0, 0, 0, 0.5)', 
        ease:'none', 
        duration:10
      },0)
    // .to(textRef.current, {
    //   textShadow: "10px 10px 15px rgba(0, 0, 0, 0.3)",
    //   duration: 0.1
    // }, 0)
    // .to(textRef.current, {
    //   textShadow: "20px 20px 30px rgba(0, 0, 0, 0.3)",
    //   duration: 0.1,
    //   scrollTrigger: {
    //     trigger: triggerRef.current,
    //     start: '0% 100%',
    //     end: '0% 20%',
    //     scrub: 1,
    //   }
    // }, 0);
  },[]);

  

  return (
    <section className='pen overflow-hidden' style={{maxWidth:'1920px', width:'100vw', maxHeight:'850px', height:'850px', margin:0, padding:0,position:'relative'}}>
      <div className='scroll-item'>
        <div className='img-wrap' style={{width:'67.708vw',height:'44.271vw', margin:'0 auto'}}>
          <img src='pen.png'/>
        </div>
      </div>
      <div ref={triggerRef} className='scroll-title h-dvh w-dvw flex justify-center items-center' style={{width:'100vw',backgroundColor:'#fff',position:'absolute',top:'50%',zIndex:-1,marginTop:'8vw',transform:'translateY(-50%)'}}>
        <div ref={titleRef} className='uppercase leading-none'>
          <span ref={textRef} className='w-max whitespace-nowrap block' style={{fontSize:'20.8333vw', fontWeight: 700, color:'#86bee7',letterSpacing:'-0.625vw'}}>Lovely Runner</span>
        </div>
      </div>    
    </section>
  )
}

export default Main06
