import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ScrollToPlugin from 'gsap/ScrollToPlugin';

const Main03scroll = () => {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
  // export default function HorizontalScrollComponent() {
    const triggerRef = useRef(null);
    const scrollRef = useRef(null);
  
    useEffect(() => {
      // 가로 스크롤 트리거 설정
      const horizontalScroll = gsap.to(scrollRef.current, {
        xPercent: -100 * (scrollRef.current.children.length - 1), // 섹션 수만큼 가로 스크롤 이동
        ease: 'none',
        scrollTrigger: {
          trigger: triggerRef.current,
          pin: true,
          // markers:true,
          scrub: 1,
          // start:'top',
          // end:'+=3840',
          end: () => `+=${scrollRef.current.scrollWidth - window.innerWidth}`, // 마지막 섹션까지 정확하게 스크롤
          // end: () => `+=${scrollRef.current.offsetWidth}`, // 전체 가로 스크롤 거리
          invalidateOnRefresh: true,
          // pinSpacing:false,
          onUpdate: (self) => {
            const pinSpacer = triggerRef.current.parentNode.querySelector('.pin-spacer');
            if (pinSpacer) {
              // 여기서 pin-spacer의 스타일을 수정할 수 있습니다.
              // pinSpacer.style.backgroundColor = 'transparent'; // 예시: 배경색을 투명하게 설정
              pinSpacer.style.display = 'none'; // 예시: 불필요한 여백 제거
            }
          },

        },
      });
  
      return () => {
        if (horizontalScroll) horizontalScroll.kill(); // 컴포넌트 언마운트 시 트리거 정리
        // console.log(scrollRef.current.offsetWidth);
      };
    }, []);
  
  
  //   gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
  
  // const triggerRef = useRef(null);
  // const scrollRef = useRef(null);

  // useEffect(() => {
  //   const sections = scrollRef.current.children.length;
  //   const totalScrollWidth = scrollRef.current.scrollWidth;
  //   const windowWidth = window.innerWidth;

  //   // 가로 스크롤 트리거 설정
  //   const horizontalScroll = gsap.to(scrollRef.current, {
  //     xPercent: -100 * (sections - 1), // 섹션 수만큼 가로 스크롤 이동
  //     ease: 'none',
  //     scrollTrigger: {
  //       trigger: triggerRef.current,
  //       pin: true,
  //       markers: true,
  //       scrub: 1,
  //       end: () => `+=${totalScrollWidth - windowWidth}`, // 마지막 섹션이 끝날 때 정확하게 맞춤
  //       invalidateOnRefresh: true, // 창 크기 조정 시 다시 계산
  //     },
  //   });

  //   return () => {
  //     if (horizontalScroll) horizontalScroll.kill(); // 컴포넌트 언마운트 시 트리거 정리
  //   };
  // }, []);
  
  return (
    <section ref={triggerRef} style={{backgroundColor:'#fff', width:'9600px', height:'100vh', overflow:'hidden', paddingBottom:'300px'}}>
        <div ref={scrollRef} className='scroll-part' style={{background:'#fff', flexWrap:'nowrap',height:'100vh',display:'flex',position:'relative', width:'max-content', paddingBottom:'200px'}}>
          <section className='part part1 flex justify-center items-center flex-col' style={{ width:'100vw', height:'100%'}}>
            <div className='img_wrap'>
            </div>
            <div className='ost_part flex justify-center items-center m-0' style={{width:'1920px'}}>
              <span style={{color:'#0cd886',fontSize:'34.375vw', fontFamily: "Oswald, sans-serif", fontWeight:700, letterSpacing:1.5}}>PART1</span>
            </div>
            <div className='ost_info flex justify-center items-center flex-col' style={{marginTop:'-5.635vw', width:'100%', marginLeft:'auto',marginRight:'auto'}}>
              <div className='ost_title'>
                <span style={{fontSize:'4.167vw', lineHeight:'1.04', fontWeight:500}}>Rain Shower</span>
              </div>
              <div className='ost_singer'>
                <span style={{fontSize:'18px', lineHeight:'1.78', marginTop: '10px'}}>Eclipse</span>
              </div>
            </div>
          </section>
          <section className='part part2 flex justify-center items-center flex-col' style={{ width:'100vw', height:'100%'}}>
            <div className='img_wrap'>
            </div>
            <div className='ost_part flex justify-center items-center m-0' style={{width:'1920px'}}>
              <span style={{color:'#86bee7',fontSize:'34.375vw', fontFamily: "Oswald, sans-serif", fontWeight:700, letterSpacing:1.5}}>PART2</span>
            </div>
            <div className='ost_info flex justify-center items-center flex-col' style={{marginTop:'-5.635vw', width:'100%', marginLeft:'auto',marginRight:'auto'}}>
              <div className='ost_title'>
                <span style={{fontSize:'4.167vw', lineHeight:'1.04', fontWeight:500}}>Star</span>
              </div>
              <div className='ost_singer'>
                <span style={{fontSize:'18px', lineHeight:'1.78', marginTop: '10px'}}>N.Flying</span>
              </div>
            </div>
          </section>
          <section className='part part3 flex justify-center items-center flex-col' style={{ width:'100vw', height:'100%'}}>
            <div className='img_wrap'>
            </div>
            <div className='ost_part flex justify-center items-center m-0' style={{width:'1920px'}}>
              <span style={{color:'#ff89a2',fontSize:'34.375vw', fontFamily: "Oswald, sans-serif", fontWeight:700, letterSpacing:1.5}}>PART3</span>
            </div>
            <div className='ost_info flex justify-center items-center flex-col' style={{marginTop:'-5.635vw', width:'100%', marginLeft:'auto',marginRight:'auto'}}>
              <div className='ost_title'>
                <span style={{fontSize:'4.167vw', lineHeight:'1.04', fontWeight:500}}>It's like a dream</span>
              </div>
              <div className='ost_singer'>
                <span style={{fontSize:'18px', lineHeight:'1.78', marginTop: '10px'}}>Minnie (G)I-DLE</span>
              </div>
            </div>
          </section>
          <section className='part part4 flex justify-center items-center flex-col' style={{ width:'100vw', height:'100%'}}>
            <div className='img_wrap'>
            </div>
            <div className='ost_part flex justify-center items-center m-0' style={{width:'1920px'}}>
              <span style={{color:'#b296ff',fontSize:'34.375vw', fontFamily: "Oswald, sans-serif", fontWeight:700, letterSpacing:1.5}}>PART8</span>
            </div>
            <div className='ost_info flex justify-center items-center flex-col' style={{marginTop:'-5.635vw', width:'100%', marginLeft:'auto',marginRight:'auto'}}>
              <div className='ost_title'>
                <span style={{fontSize:'4.167vw', lineHeight:'1.04', fontWeight:500}}>Spring Snow</span>
              </div>
              <div className='ost_singer'>
                <span style={{fontSize:'18px', lineHeight:'1.78', marginTop: '10px'}}>10CM</span>
              </div>
            </div>
          </section>
          <section className='part part5 flex justify-center items-center flex-col' style={{ width:'100vw', height:'100%'}}>
            <div className='img_wrap'>
            </div>
            <div className='ost_part flex justify-center items-center m-0' style={{width:'1920px'}}>
              <span style={{color:'#ffeb35',fontSize:'34.375vw', fontFamily: "Oswald, sans-serif", fontWeight:700, letterSpacing:1.5}}>PART9</span>
            </div>
            <div className='ost_info flex justify-center items-center flex-col' style={{marginTop:'-5.635vw', width:'100%', marginLeft:'auto',marginRight:'auto'}}>
              <div className='ost_title'>
                <span style={{fontSize:'4.167vw', lineHeight:'1.04', fontWeight:500}}>Present</span>
              </div>
              <div className='ost_singer'>
                <span style={{fontSize:'18px', lineHeight:'1.78', marginTop: '10px'}}>Ha Sung Woon</span>
              </div>
            </div>
          </section>
        </div>
    </section>   
    
  );
}

export default Main03scroll
