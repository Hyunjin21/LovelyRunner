import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Main04 = () => {
  // gsap.registerPlugin(ScrollTrigger);
  // const triggerRef = useRef(null);
  // const titleRef = useRef(null);
  // const textRef = useRef(null);

  // useEffect(()=>{
  //   gsap.timeline({
  //     scrollTrigger: {
  //       trigger: triggerRef.current,
  //       start: '0% 100%',
  //       end: '0% 20%',
  //       scrub:1,
  //       // markers: true
  //     }
  //   })
  //   .fromTo(textRef.current, {x:'100%'}, {x:'0%', ease:'none', duration:5},0)
  // },[]);

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
    .fromTo(textRef.current, {x:'100%'}, {x:'-20%', ease:'none', duration:10},0)
  },[]);
  

  return (
    <section className='w-dvw' style={{backgroundColor:'#ffec40', width:'1920px'}}>
        <div className='descript h-dvh' style={{color:'#000', paddingTop:'260px'}}>
          <div className='text-wrap' style={{paddingLeft:'7.031vw',paddingRight:'7.031vw', transform:'translate(0px,0px)'}}>
            <span className='w-max whitespace-nowrap block' style={{fontSize:'5vw', fontWeight: 500}}>
            What if you get a chance<br/>to save your favorite?<br/>
            {/* The moment she let go of her will to live,<br/> "Ryu Sun-jae," a famous artist who let her live.<br/> */}
            {/* Desperate after his death,<br/>die-hard fan "Im Sol" goes back in time to 2008 to save his favorite!<br/> */}
            Nineteen to live again,<br/>my goal is <br/>to protect my favorite Ryu Sun-jae!
            </span>
            <span className='w-max whitespace-nowrap' style={{fontSize:'2vw', fontWeight: 500, display:'block', paddingTop:'100px'}}>
            만약, 당신의 최애를 구할 수 있는 기회가 온다면?<br/>
            {/* 삶의 의지를 놓아버린 순간, 자신을 살게 해줬던 유명 아티스트 "류선재".<br/> */}
            {/* 그의 죽음으로 절망했던 열성팬 "임솔"이 최애를 살리기 위해 시간을 거슬러 2008년으로 돌아간다!<br/> */}
            다시 살게 된 열아홉, 목표는 최애 류선재를 지키는 것!
            </span>
          </div>
          <div ref={triggerRef} className='scroll-title h-dvh flex justify-center items-start' style={{width:'1920px',position:'absolute',backgroundColor:'#ffec40', paddingTop:'260px',paddingBottom:'260px'}}>
            <div ref={titleRef} className='uppercase leading-none'>
              <span ref={textRef} className='w-max whitespace-nowrap block' style={{fontSize:'20.833vw', fontWeight: 700, color:'#86bee7', letterSpacing: '-0.625vw'}}>Lovely Runner</span>
            </div>
            <div className='img-gif' style={{position:'absolute', transform:'scale(0.5) rotate(30deg)',top:'26.302vw',right:'15.625vw'}}>
              <div className='img-wrap' style={{position:'relative'}}>
                <img style={{width:'100%', height:'100%', objectFit:'cover'}} src='umbrella.png'/>
              </div>
            </div>
          <div>
              
            </div>
          </div>
        </div>
        <div className='card h-dvh'></div>
    </section>    
  )
}

export default Main04
