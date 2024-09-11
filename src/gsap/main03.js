import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Main03 = () => {
  gsap.registerPlugin(ScrollTrigger);
  const triggerRef = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    const tags = document.querySelectorAll('.tag');

    tags.forEach(tag => {
      tag.addEventListener('mouseenter', () => {
        gsap.to(tag, { 
          scale: 2, 
          opacity: 0, 
          duration: 0.1, 
          ease: 'power1.out' 
        });
      });
    });

    // gsap.registerPlugin(ScrollTrigger);

//   let parts = gsap.utils.toArray(".part");

//   gsap.to(parts, {
//     xPercent: -100 * (parts.length - 1),
//     ease: "none",
//     scrollTrigger: {
//       trigger: ".scroll-part",
//       pin: true,
//       scrub: 1,
//       snap: 1 / (parts.length - 1),
//       end: () => "+=" + document.querySelector(".scroll-part").offsetWidth
//   }
// });

  ScrollTrigger.matchMedia({
    '(min-width:1024px)':function(){
      let sections = gsap.utils.toArray(".part");
      // let sections = gsap.utils.toArray(".panel");
      let scrollTween = gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: scrollRef.current,
          pin:true,
          scrub:1,
          // start:'top center',
          // end:'300%',
          // markers:true
        }
      });

      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: ".container",
          pin: true,
          scrub: 1,
          start: 'top 20%',
          snap: 1 / (sections.length - 1),
          end: () => "+=" + document.querySelector(".container").offsetWidth,
          markers: true,
        }
      });
      gsap.to(sections, {
        xPercent: 100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: ".container",
          pin: true,
          scrub: 1,
          start: 'top 20%',
          snap: 1 / (sections.length - 1),
          end: () => "-=" + document.querySelector(".container").offsetWidth,
          // markers: true,
        }
      });
        }
      });

    // Clean up event listeners on component unmount
    return () => {
      tags.forEach(tag => {
        tag.removeEventListener('mouseenter', () => {});
      });
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };


  }, []);

  
  
  return (
    <section ref={triggerRef} style={{backgroundColor:'#fff', paddingBottom:'300px', width:'100vw', overflowX:'hidden', overflowY:'scroll', height:'100%', position:'relative', WebkitOverflowScrolling:'touch'}}>
        <div className='tags' style={{background:'linear-gradient(#ffec40, #fff)', height:'100vh', width:'1920px', marginBottom:'21.370vh',paddingTop:'18.518518518519vh'}}>
          <div className='leading-none' style={{position:'relative',paddingLeft: '1.465vw',paddingRight: '1.465vw'}}>
            <div className='title-wrap'>
              <h2 style={{fontSize:'13.542vw', fontWeight:500, display:'block'}}>Thank you 
                <br/>for being alive</h2> 
            </div>
            <div className='tags-wrap' style={{position:'absolute',top:'50%',left:'50%',width:'100%',height:'100%',maxWidth:'1920px',margin:'0 auto',transform:'translate(-50%,-50%)'}}>
              <span className='tag' style={{opacity:1, visibility:'inherit', transform:'rotate(7.00001deg) scale(1.5, 1.5)', backgroundColor:'#fff', borderRadius:'3.604vw', fontSize:'2.225vw', padding:'0.521vw 2.969vw', position:'absolute', top:'3%',left:'7%'}}>Eclipse</span>
              <span className='tag' style={{opacity:1, visibility:'inherit', transform:'rotate(-27.5298deg) scale(1.5, 1.5)', backgroundColor:'#fff', borderRadius:'3.604vw', fontSize:'2.225vw', padding:'0.521vw 2.969vw', position:'absolute', top:'23%',left:'11.75%'}}>HanRiver</span>
              <span className='tag' style={{opacity:1, visibility:'inherit', transform:'rotate(15.6298deg) scale(1.5, 1.5)', backgroundColor:'#fff', borderRadius:'3.604vw', fontSize:'2.225vw', padding:'0.521vw 2.969vw', position:'absolute', top:'-2%',left:'35.8%'}}>Wristwatch</span>
              <span className='tag' style={{opacity:1, visibility:'inherit', transform:'rotate(-12.13deg) scale(1.5, 1.5)', backgroundColor:'#fff', borderRadius:'3.604vw', fontSize:'2.225vw', padding:'0.521vw 2.969vw', position:'absolute', top:'18%',left:'47.5%'}}>12AM</span>
              <span className='tag' style={{opacity:1, visibility:'inherit', transform:'rotate(-28.93deg) scale(1.5, 1.5)', backgroundColor:'#fff', borderRadius:'3.604vw', fontSize:'2.225vw', padding:'0.521vw 2.969vw', position:'absolute', top:'1.5%',right:'12%'}}>Video</span>
              <span className='tag' style={{opacity:1, visibility:'inherit', transform:'rotate(19.83deg) scale(1.5, 1.5)', backgroundColor:'#86bee7', borderRadius:'3.604vw', fontSize:'2.225vw', color:'#fff', padding:'0.521vw 2.969vw', position:'absolute', top:'38%',left:'26.8%'}}>Swimming</span>
              <span className='tag' style={{opacity:1, visibility:'inherit', transform:'rotate(8.80022deg) scale(1.5, 1.5)', backgroundColor:'#86bee7', borderRadius:'3.604vw', fontSize:'2.225vw', color:'#fff', padding:'0.521vw 2.969vw', position:'absolute', top:'36.5%',right:'16%'}}>TimeCapsule</span>
              <span className='tag' style={{opacity:1, visibility:'inherit', transform:'rotate(33.1401deg) scale(1.5, 1.5)', backgroundColor:'#86bee7', borderRadius:'3.604vw', fontSize:'2.225vw', color:'#fff', padding:'0.521vw 2.969vw', position:'absolute', bottom:'4%',left:'6.5%'}}>Necklace</span>
              <span className='tag' style={{opacity:1, visibility:'inherit', transform:'rotate(-14.03deg) scale(1.5, 1.5)', backgroundColor:'#fff', borderRadius:'3.604vw', fontSize:'2.225vw', padding:'0.521vw 2.969vw', position:'absolute', bottom:'20%',left:'18%'}}>Snow</span>
              <span className='tag' style={{opacity:1, visibility:'inherit', transform:'rotate(8.80022deg) scale(1.5, 1.5)', backgroundColor:'#fff', borderRadius:'3.604vw', fontSize:'2.225vw', padding:'0.521vw 2.969vw', position:'absolute', bottom:'15%',left:'38%'}}>Wheelchair</span>
              <span className='tag' style={{opacity:1, visibility:'inherit', transform:'rotate(13.7703deg) scale(1.5, 1.5)', backgroundColor:'#fff', borderRadius:'3.604vw', fontSize:'2.225vw', padding:'0.521vw 2.969vw', position:'absolute', bottom:'-18%',left:'44%'}}>AmusementPark</span>
              <span className='tag' style={{opacity:1, visibility:'inherit', transform:'rotate(-13.1099deg) scale(1.5, 1.5)', backgroundColor:'#86bee7', borderRadius:'3.604vw', fontSize:'2.225vw', color:'#fff', padding:'0.521vw 2.969vw', position:'absolute', bottom:'0%',right:'28.8%'}}>Umbrella</span>
              <span className='tag' style={{opacity:1, visibility:'inherit', transform:'rotate(23.0498deg) scale(1.5, 1.5)', backgroundColor:'#fff', borderRadius:'3.604vw', fontSize:'2.225vw', padding:'0.521vw 2.969vw', position:'absolute', bottom:'9%',right:'8%'}}>MP3player</span>

            </div>
          </div>
        </div>
        <div ref={scrollRef} className='container scroll-part flex items-start flex-row' style={{background:'#fff', flexWrap:'nowrap', width:'max-content', height:'100vh',width:'500vw'}}>
          <section className='part part1 flex justify-center items-center flex-col h-dvh w-full' style={{width:'1920px', height:'100vh'}}>
            <div className='img_wrap'>
            </div>
            <div className='ost_part flex justify-center items-center m-0' style={{width:'1920px'}}>
              <span style={{color:'#0cd886',fontSize:'34.375vw', fontFamily: "Oswald, sans-serif", fontWeight:700, letterSpacing:1.5}}>PART1</span>
            </div>
            <div className='ost_info flex justify-center items-center flex-col' style={{marginTop:'-9.635vw', width:'100%', marginLeft:'auto',marginRight:'auto'}}>
              <div className='ost_title'>
                <span style={{fontSize:'4.167vw', lineHeight:'1.04', fontWeight:500}}>Rain Shower</span>
              </div>
              <div className='ost_singer'>
                <span style={{fontSize:'18px', lineHeight:'1.78', marginTop: '10px'}}>Eclipse</span>
              </div>
            </div>
          </section>
          <section className='part part2 flex justify-center items-center flex-col h-dvh w-full' style={{width:'1920px', height:'100vh'}}>
            <div className='img_wrap'>
            </div>
            <div className='ost_part flex justify-center items-center m-0' style={{width:'1920px'}}>
              <span style={{color:'#86bee7',fontSize:'34.375vw', fontFamily: "Oswald, sans-serif", fontWeight:700, letterSpacing:1.5}}>PART2</span>
            </div>
            <div className='ost_info flex justify-center items-center flex-col' style={{marginTop:'-9.635vw', width:'100%', marginLeft:'auto',marginRight:'auto'}}>
              <div className='ost_title'>
                <span style={{fontSize:'4.167vw', lineHeight:'1.04', fontWeight:500}}>Star</span>
              </div>
              <div className='ost_singer'>
                <span style={{fontSize:'18px', lineHeight:'1.78', marginTop: '10px'}}>N.Flying</span>
              </div>
            </div>
          </section>
          <section className='part part3 flex justify-center items-center flex-col h-dvh w-full' style={{width:'1920px', height:'100vh'}}>
            <div className='img_wrap'>
            </div>
            <div className='ost_part flex justify-center items-center m-0' style={{width:'1920px'}}>
              <span style={{color:'#ff89a2',fontSize:'34.375vw', fontFamily: "Oswald, sans-serif", fontWeight:700, letterSpacing:1.5}}>PART3</span>
            </div>
            <div className='ost_info flex justify-center items-center flex-col' style={{marginTop:'-9.635vw', width:'100%', marginLeft:'auto',marginRight:'auto'}}>
              <div className='ost_title'>
                <span style={{fontSize:'4.167vw', lineHeight:'1.04', fontWeight:500}}>It's like a dream</span>
              </div>
              <div className='ost_singer'>
                <span style={{fontSize:'18px', lineHeight:'1.78', marginTop: '10px'}}>Minnie (G)I-DLE</span>
              </div>
            </div>
          </section>
          <section className='part part4 flex justify-center items-center flex-col h-dvh w-full' style={{width:'1920px', height:'100vh'}}>
            <div className='img_wrap'>
            </div>
            <div className='ost_part flex justify-center items-center m-0' style={{width:'1920px'}}>
              <span style={{color:'#b296ff',fontSize:'34.375vw', fontFamily: "Oswald, sans-serif", fontWeight:700, letterSpacing:1.5}}>PART8</span>
            </div>
            <div className='ost_info flex justify-center items-center flex-col' style={{marginTop:'-9.635vw', width:'100%', marginLeft:'auto',marginRight:'auto'}}>
              <div className='ost_title'>
                <span style={{fontSize:'4.167vw', lineHeight:'1.04', fontWeight:500}}>Spring Snow</span>
              </div>
              <div className='ost_singer'>
                <span style={{fontSize:'18px', lineHeight:'1.78', marginTop: '10px'}}>10CM</span>
              </div>
            </div>
          </section>
          <section className='part part5 flex justify-center items-center flex-col h-dvh w-full' style={{width:'1920px', height:'100vh'}}>
            <div className='img_wrap'>
            </div>
            <div className='ost_part flex justify-center items-center m-0' style={{width:'1920px'}}>
              <span style={{color:'#ffeb35',fontSize:'34.375vw', fontFamily: "Oswald, sans-serif", fontWeight:700, letterSpacing:1.5}}>PART9</span>
            </div>
            <div className='ost_info flex justify-center items-center flex-col' style={{marginTop:'-9.635vw', width:'100%', marginLeft:'auto',marginRight:'auto'}}>
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

export default Main03
