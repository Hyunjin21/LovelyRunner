import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Main09 = () => {
  gsap.registerPlugin(ScrollTrigger);
  const triggerRef = useRef(null);
  const creditRef = useRef(null);
  const productRef = useRef(null);
  const programRef = useRef(null);
  const informRef = useRef(null);
  const actorRef = useRef(null);

  useEffect(() => {
    const sections = [creditRef.current, productRef.current, programRef.current, informRef.current, actorRef.current];

    sections.forEach((section) => {
      gsap.fromTo(
        section,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: section,
            start: 'top center',
            end: 'top center',
            // markers: true,
            scrub:1,
            toggleActions: 'play none none reverse',
          },
        }
      );
    });
  }, []);

  

  return (
    <section className='credit-wrap bg-[#fe97b6] w-full mx-auto py-[150px] relative text-center overflow-hidden text-[1.2rem] md:text-[2rem] tracking-[-0.025em]'>
      <div className='backgroundSpacer' style={{width:'100%', height:'100vh', backgroundColor:'#fe97b6'}}></div>
      <div ref={creditRef} className='credit opacity-0 text-center mb-[24rem]'>
        <h3 className='text-[6rem] md:text-[10rem] text-[#1795ff] font-normal text-center mb-[6rem]'>CREDIT</h3>
      </div>
      <div ref={productRef} className='section production' style={{ opacity:'0', textAlign:'center', marginBottom:'24rem'}}>
        <h3 className='text-5xl md:text-[4rem] font-normal text-[#1795ff] mb-[2rem] md:mb-[6rem]'>PRODUCTION</h3>
        <ul style={{listStyle:'none', margin:'0', padding:'0'}}>
          <li className='text-2xl text-[#1795ff] font-normal leading-[1.8]'>CJ ENM STUDIOS</li>
          <li className='text-2xl text-[#1795ff] font-normal leading-[1.8]'>BON FACTORY</li>
        </ul>
      </div>
      <div ref={programRef} className='section programmation opacity-0 text-center mb-[24rem]'>
        <h3 className='text-5xl md:text-[4rem] font-normal text-[#1795ff] mb-[2rem] md:mb-[6rem]'>PROGRAMMATION</h3>
        <ul style={{listStyle:'none', margin:'0', padding:'0'}}>
          <li className='text-2xl text-[#1795ff] font-normal leading-[1.8]'>2024.04.08 ~ 2024.05.28</li>
          <li className='text-2xl text-[#1795ff] font-normal leading-[1.8]'>The original novel 'The Best of Tomorrow'</li>
        </ul>
      </div>
      <div ref={informRef} className='section program_inform opacity-0 text-center mb-[24rem]'>
        <h3 className='text-5xl md:text-[4rem] font-normal text-[#1795ff] mb-[2rem] md:mb-[6rem]'>INFORMATION</h3>
        <div style={{ display:'flex', flexFlow:'column', alignItems:'center'}}>
          <dl style={{ overflow:'hidden', lineHeight:'1.8'}}>
            <dt className='float-left text-[#fff] font-normal w-[12rem] md:w-[20rem] text-right mr-[1rem]'>CHIEF PRODUCER</dt>
            <dd className='float-left text-[#1795ff] font-normal w-[12rem] md:w-[20rem] text-left leading-[1.8]'>KIM HO JUN</dd>
          </dl>
          <dl style={{ overflow:'hidden', lineHeight:'1.8'}}>
            <dt className='float-left text-[#fff] font-normal w-[12rem] md:w-[20rem] text-right mr-[1rem]'>PRODUCTION</dt>
            <div style={{ display:'flex', flexDirection:'column'}}>
              <dd className='float-left text-[#1795ff] font-normal w-[12rem] md:w-[20rem] text-left leading-[1.8]'>MOON SEOK HWAN</dd>
              <dd className='float-left text-[#1795ff] font-normal w-[12rem] md:w-[20rem] text-left leading-[1.8]'>OH KWANG HEE</dd>
              <dd className='float-left text-[#1795ff] font-normal w-[12rem] md:w-[20rem] text-left leading-[1.8]'>PARK SOON TAE</dd>
            </div>
          </dl>
          <dl style={{ overflow:'hidden', lineHeight:'1.8'}}>
            <dt className='float-left text-[#fff] font-normal w-[12rem] md:w-[20rem] text-right mr-[1rem]'>DIRECTOR</dt>
            <div style={{ display:'flex', flexDirection:'column'}}>
              <dd className='float-left text-[#1795ff] font-normal w-[12rem] md:w-[20rem] text-left leading-[1.8]'>YOON JONG HO</dd>
              <dd className='float-left text-[#1795ff] font-normal w-[12rem] md:w-[20rem] text-left leading-[1.8]'>KIM TAE YEOP</dd>
            </div>
          </dl>
          <dl style={{ overflow:'hidden', lineHeight:'1.8'}}>
            <dt className='float-left text-[#fff] font-normal w-[12rem] md:w-[20rem] text-right mr-[1rem]'>PROGRAM DIRECTOR</dt>
            <dd className='float-left text-[#1795ff] font-normal w-[12rem] md:w-[20rem] text-left leading-[1.8]'>PARK YOON A</dd>
          </dl>
          <dl style={{ overflow:'hidden', lineHeight:'1.8'}}>
            <dt className='float-left text-[#fff] font-normal w-[12rem] md:w-[20rem] text-right mr-[1rem]'>PLAYWRIGHT</dt>
            <dd className='float-left text-[#1795ff] font-normal w-[12rem] md:w-[20rem] text-left leading-[1.8]'>LEE SI EUN</dd>
          </dl>
        </div>
      </div>
      <div ref={actorRef} className='section actor opacity-0 text-center mb-[24rem]'>
        <h3 className='text-5xl md:text-[4rem] font-normal text-[#1795ff] mb-[2rem] md:mb-[6rem]'>CAST</h3>
        <div style={{ display:'flex', flexFlow:'column', alignItems:'center'}}>
          <dl style={{ overflow:'hidden', lineHeight:'1.8'}}>
            <dt className='float-left text-[#fff] font-normal w-[10rem] md:w-[16rem] text-right mr-[1rem]'>RYU SEON JAE</dt>
            <dd className='float-left text-[#1795ff] font-normal w-[11rem] md:w-[18rem] text-left leading-[1.8]'>BYEON WOO SEOK</dd>
          </dl>
          <dl style={{ overflow:'hidden', lineHeight:'1.8'}}>
            <dt className='float-left text-[#fff] font-normal w-[10rem] md:w-[16rem] text-right mr-[1rem]'>LIM SOL</dt>
            <dd className='float-left text-[#1795ff] font-normal w-[11rem] md:w-[18rem] text-left leading-[1.8]'>KIM HYE YOON</dd>
          </dl>
          <dl style={{ overflow:'hidden', lineHeight:'1.8'}}>
            <dt className='float-left text-[#fff] font-normal w-[10rem] md:w-[16rem] text-right mr-[1rem]'>KIM TAE SEONG</dt>
            <dd className='float-left text-[#1795ff] font-normal w-[11rem] md:w-[18rem] text-left leading-[1.8]'>SONG GEON HEE</dd>
          </dl>
          <dl style={{ overflow:'hidden', lineHeight:'1.8'}}>
            <dt className='float-left text-[#fff] font-normal w-[10rem] md:w-[16rem] text-right mr-[1rem]'>BAEK IN HYEOK</dt>
            <dd className='float-left text-[#1795ff] font-normal w-[11rem] md:w-[18rem] text-left leading-[1.8]'>LEE SEUNG HYUB</dd>
          </dl>
        </div>
      </div>
    </section>
    
  )
}

export default Main09
