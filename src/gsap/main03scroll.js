import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Main03scroll = () => {
  gsap.registerPlugin(ScrollTrigger);
  const triggerRef = useRef(null);
  const scrollRef = useRef([]);

//     const horizontal = document.querySelector(".scroll-part");
// const sections = gsap.utils.toArray(".scroll-part > .part");

// gsap.to(sections, {
//     xPercent: -100 * (sections.length - 1),
//     ease: "none",
//     scrollTrigger: {
//         trigger: horizontal,
//         start: "top top",
//         end: () =>  "+=" + ('horizontal.offsetWidth - innerWidth'),
//         pin: true,
//         scrub: 1,
//         snap: {
//             snapTo: 1 / (sections.length - 1),
//             inertia: false,
//             duration: {min: 0.1, max: 0.1}
//         },
//         invalidateOnRefresh: true,
//         anticipatePin: 1
//     }
// });
    // gsap.registerPlugin(ScrollTrigger);


    useEffect(() => {
  let parts = gsap.utils.toArray(".part");
  let scrollTween = gsap.to(parts, {
    xPercent: -100 * (parts.length - 1),
    ease:'none',
    scrollTrigger : {
      trigger:scrollRef.current,
      pin: true,
      scrub:1,
      start:'30% center',
      end:'33%',
      markers:true
    }
  });

  scrollRef.current.forEach(parts => {
    gsap.timeline({
      scrollTrigger : {
        trigger: parts,
        containerAnimation: scrollTween,
        start : 'bottom right',
        end : 'center center',
        pin:1,
        scrub: 1,
        // markers: true,
      }
    })

    gsap.timeline({
      scrollTrigger : {
        trigger: parts,
        containerAnimation: scrollTween,
        start : 'center center',
        end : 'center left',
        pin:1,
        scrub: 1,
        markers: true,
      }
    })
  });
//   gsap.to(parts, {
//     xPercent: -100 * (parts.length - 1),
//     ease: "none",
//     scrollTrigger: {
//       trigger: ".scroll-part",
//       pin: true,
//       // pinSpacing: false,
//       scrub: 1,
//       markers: true,
//       snap: 1 / (parts.length - 1),
//       // end: '+=9600',
//       start: 'top top',
//       end: () => "+=" + document.querySelector(".scroll-part").offsetWidth,
//       onUpdate: (self) => console.log("progress:", self.progress),
//   onEnter: () => console.log("entered"),
//   onLeave: () => console.log("left")
//   }

// });
return () => {
  ScrollTrigger.getAll().forEach(trigger => trigger.kill());
};
  

  }, []);

  
  
  return (
    <section ref={triggerRef} style={{backgroundColor:'#fff', overflow:'hidden', height:'100%'}}>
        <div className='scroll-part' style={{background:'#fff', flexWrap:'nowrap',height:'100vh',display:'flex', overscrollBehavior:'none'}}>
          <section className='part part1 flex justify-center items-center flex-col' style={{ width:'100vw', height:'100%', position:'relative'}}>
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
          <section className='part part2 flex justify-center items-center flex-col' style={{ width:'100vw', height:'100%', position:'relative'}}>
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
          <section className='part part3 flex justify-center items-center flex-col' style={{ width:'100vw', height:'100%', position:'relative'}}>
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
          <section className='part part4 flex justify-center items-center flex-col' style={{ width:'100vw', height:'100%', position:'relative'}}>
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
          <section className='part part5 flex justify-center items-center flex-col' style={{ width:'100vw', height:'100%', position:'relative'}}>
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

export default Main03scroll
