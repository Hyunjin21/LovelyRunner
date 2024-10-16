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
    <section className='credit-wrap' style={{ background:'#ffec40', width:'100%', margin:'0 auto', padding:'150px 0', position:'relative', textAlign:'center', overflow:'hidden', fontSize:'2rem', letterSpacing:'-0.025em'}}>
      <div className='backgroundSpacer' style={{width:'100%', height:'100vh', backgroundColor:'#ffec40'}}></div>
      <div ref={creditRef} className='credit' style={{ opacity:'0', textAlign:'center', marginBottom:'24rem'}}>
        <h3 style={{ color:'#86bee7', fontSize:'10rem', fontWeight:'bold', textAlign:'center', marginBottom:'6rem'}}>CREDIT</h3>
      </div>
      <div ref={productRef} className='section production' style={{ opacity:'0', textAlign:'center', marginBottom:'24rem'}}>
        <h3 className='text-5xl md:text-[4rem] font-bold text-[#86bee7] mb-[2rem] md:mb-[6rem]'>PRODUCTION</h3>
        <ul style={{listStyle:'none', margin:'0', padding:'0'}}>
          <li className='text-2xl text-[#86bee7] font-bold leading-[1.8]'>CJ ENM STUDIOS</li>
          <li className='text-2xl text-[#86bee7] font-bold leading-[1.8]'>BON FACTORY</li>
        </ul>
      </div>
      <div ref={programRef} className='section programmation' style={{ opacity:'0', textAlign:'center', marginBottom:'24rem'}}>
        <h3 style={{ color:'#86bee7',fontSize:'4rem', fontWeight:'bold', marginBottom:'6rem'}}>PROGRAMMATION</h3>
        <ul style={{listStyle:'none', margin:'0', padding:'0'}}>
          <li style={{ color:'#86bee7', fontWeight:'bold', lineHeight:'1.8'}}>2024.04.08 ~ 2024.05.28</li>
          <li style={{ color:'#86bee7', fontWeight:'bold', lineHeight:'1.8'}}>The original novel 'The Best of Tomorrow'</li>
        </ul>
      </div>
      <div ref={informRef} className='section program_inform' style={{ opacity:'0', textAlign:'center', marginBottom:'24rem'}}>
        <h3 style={{ color:'#86bee7', fontSize:'4rem', fontWeight:'bold', marginBottom:'6rem'}}>INFORMATION</h3>
        <div style={{ display:'flex', flexFlow:'column', alignItems:'center'}}>
          <dl style={{ overflow:'hidden', lineHeight:'1.8'}}>
            <dt style={{ float:'left', fontWeight:'bold', width:'20rem', marginRight:'1rem', textAlign:'right', color:'#fffad4'}}>CHIEF PRODUCER</dt>
            <dd style={{ float:'left', color:'#86bee7', fontWeight:'bold', width:'20rem', textAlign:'left', lineHeight:'1.8'}}>KIM HO JUN</dd>
          </dl>
          <dl style={{ overflow:'hidden', lineHeight:'1.8'}}>
            <dt style={{ float:'left', fontWeight:'bold', width:'20rem', marginRight:'1rem', textAlign:'right', color:'#fffad4'}}>PRODUCTION</dt>
            <div style={{ display:'flex', flexDirection:'column'}}>
              <dd style={{ float:'left', color:'#86bee7', fontWeight:'bold', width:'20rem', textAlign:'left', lineHeight:'1.8'}}>MOON SEOK HWAN</dd>
              <dd style={{ float:'left', color:'#86bee7', fontWeight:'bold', width:'20rem', textAlign:'left', lineHeight:'1.8'}}>OH KWANG HEE</dd>
              <dd style={{ float:'left', color:'#86bee7', fontWeight:'bold', width:'20rem', textAlign:'left', lineHeight:'1.8'}}>PARK SOON TAE</dd>
            </div>
          </dl>
          <dl style={{ overflow:'hidden', lineHeight:'1.8'}}>
            <dt style={{ float:'left', fontWeight:'bold', width:'20rem', marginRight:'1rem', textAlign:'right', color:'#fffad4'}}>DIRECTOR</dt>
            <div style={{ display:'flex', flexDirection:'column'}}>
              <dd style={{ float:'left', color:'#86bee7', fontWeight:'bold', width:'20rem', textAlign:'left', lineHeight:'1.8'}}>YOON JONG HO</dd>
              <dd style={{ float:'left', color:'#86bee7', fontWeight:'bold', width:'20rem', textAlign:'left', lineHeight:'1.8'}}>KIM TAE YEOP</dd>
            </div>
          </dl>
          <dl style={{ overflow:'hidden', lineHeight:'1.8'}}>
            <dt style={{ float:'left', fontWeight:'bold', width:'20rem', marginRight:'1rem', textAlign:'right', color:'#fffad4'}}>PROGRAM DIRECTOR</dt>
            <dd style={{ float:'left', color:'#86bee7', fontWeight:'bold', width:'20rem', textAlign:'left', lineHeight:'1.8'}}>PARK YOON A</dd>
          </dl>
          <dl style={{ overflow:'hidden', lineHeight:'1.8'}}>
            <dt style={{ float:'left', fontWeight:'bold', width:'20rem', marginRight:'1rem', textAlign:'right', color:'#fffad4'}}>PLAYWRIGHT</dt>
            <dd style={{ float:'left', color:'#86bee7', fontWeight:'bold', width:'20rem', textAlign:'left', lineHeight:'1.8'}}>LEE SI EUN</dd>
          </dl>
        </div>
      </div>
      <div ref={actorRef} className='section actor' style={{ opacity:'0', textAlign:'center', marginBottom:'24rem'}}>
        <h3 style={{ color:'#86bee7', fontSize:'4rem', fontWeight:'bold', marginBottom:'6rem'}}>CAST</h3>
        <div style={{ display:'flex', flexFlow:'column', alignItems:'center'}}>
          <dl style={{ overflow:'hidden', lineHeight:'1.8'}}>
            <dt style={{ float:'left', fontWeight:'bold', width:'16rem', marginRight:'1rem', textAlign:'right', color:'#fffad4'}}>RYU SEON JAE</dt>
            <dd style={{ float:'left', color:'#86bee7', fontWeight:'bold', width:'18rem', textAlign:'left', lineHeight:'1.8'}}>BYEON WOO SEOK</dd>
          </dl>
          <dl style={{ overflow:'hidden', lineHeight:'1.8'}}>
            <dt style={{ float:'left', fontWeight:'bold', width:'16rem', marginRight:'1rem', textAlign:'right', color:'#fffad4'}}>LIM SOL</dt>
            <dd style={{ float:'left', color:'#86bee7', fontWeight:'bold', width:'18rem', textAlign:'left', lineHeight:'1.8'}}>KIM HYE YOON</dd>
          </dl>
          <dl style={{ overflow:'hidden', lineHeight:'1.8'}}>
            <dt style={{ float:'left', fontWeight:'bold', width:'16rem', marginRight:'1rem', textAlign:'right', color:'#fffad4'}}>KIM TAE SEONG</dt>
            <dd style={{ float:'left', color:'#86bee7', fontWeight:'bold', width:'18rem', textAlign:'left', lineHeight:'1.8'}}>SONG GEON HEE</dd>
          </dl>
          <dl style={{ overflow:'hidden', lineHeight:'1.8'}}>
            <dt style={{ float:'left', fontWeight:'bold', width:'16rem', marginRight:'1rem', textAlign:'right', color:'#fffad4'}}>BAEK IN HYEOK</dt>
            <dd style={{ float:'left', color:'#86bee7', fontWeight:'bold', width:'18rem', textAlign:'left', lineHeight:'1.8'}}>LEE SEUNG HYUB</dd>
          </dl>
        </div>
      </div>
    </section>
    
  )
}

export default Main09
