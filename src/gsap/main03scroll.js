import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ScrollToPlugin from 'gsap/ScrollToPlugin';

const Main03scroll = () => {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    const containerAnimation = gsap.to(sectionRef.current, {
      translateX: "-400vw",
      ease: "none",
      duration: 1,
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "top top",
        end: "5000 top",
        scrub: 1,
        // scrub: 0.6,
        pin: true,
        markers:true,
        invalidateOnRefresh: true,

      },
    });

    return () => {
      containerAnimation.kill();
    };
  }, []);  

return (
  <>
      <section ref={triggerRef} className='overflow-x-clip h-screen w-full'>
        <div ref={sectionRef} className='h-full w-[500vw] flex flex-row relative bg-white'>
              {/* <div className='flex justify-between'> */}
                {/* Page1 */}
                <div className='part1 w-[100vw] relative flex justify-center items-center flex-col m-0 h-[100%]'>
                     <div className='img_wrap'>
                     </div>
                     <div className='ost_part flex justify-center items-center m-0 w-[1920px] relative'>
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
                </div>
                {/* Page2 */}
                <div className='part2 w-[100vw] relative flex justify-center items-center flex-col m-0 h-[100%]'>
                     <div className='img_wrap'>
                     </div>
                     <div className='ost_part flex justify-center items-center m-0 w-[1920px] relative'>
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
               </div>
               {/* Page3 */}
               <div className='part3 w-[100vw] relative flex justify-center items-center flex-col m-0 h-[100%]'>
                    <div className='img_wrap'>
                    </div>
                    <div className='ost_part flex justify-center items-center m-0 w-[1920px] relative'>
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
               </div>
               {/* Page4 */}
               <div className='part4 w-[100vw] relative flex justify-center items-center flex-col m-0 h-[100%]'>
                    <div className='img_wrap'>
                    </div>
                    <div className='ost_part flex justify-center items-center m-0 w-[1920px] relative'>
                      <span style={{color:'#b296ff',fontSize:'34.375vw', fontFamily: "Oswald, sans-serif", fontWeight:700, letterSpacing:1.5}}>PART4</span>
                    </div>
                    <div className='ost_info flex justify-center items-center flex-col' style={{marginTop:'-9.635vw', width:'100%', marginLeft:'auto',marginRight:'auto'}}>
                      <div className='ost_title'>
                        <span style={{fontSize:'4.167vw', lineHeight:'1.04', fontWeight:500}}>Spring Snow</span>
                      </div>
                      <div className='ost_singer'>
                        <span style={{fontSize:'18px', lineHeight:'1.78', marginTop: '10px'}}>10CM</span>
                      </div>
                    </div>
               </div>
               {/* Page5 */}
               <div className='part1 w-[100vw] relative flex justify-center items-center flex-col m-0 h-[100%]'>
                    <div className='img_wrap'>
                    </div>
                    <div className='ost_part flex justify-center items-center m-0 w-[1920px] relative'>
                      <span style={{color:'#ffeb35',fontSize:'34.375vw', fontFamily: "Oswald, sans-serif", fontWeight:700, letterSpacing:1.5}}>PART5</span>
                    </div>
                    <div className='ost_info flex justify-center items-center flex-col' style={{marginTop:'-9.635vw', width:'100%', marginLeft:'auto',marginRight:'auto'}}>
                      <div className='ost_title'>
                        <span style={{fontSize:'4.167vw', lineHeight:'1.04', fontWeight:500}}>Present</span>
                      </div>
                      <div className='ost_singer'>
                        <span style={{fontSize:'18px', lineHeight:'1.78', marginTop: '10px'}}>Ha Sung Woon</span>
                      </div>
                    </div>
               </div>
              {/* </div> */}

            </div>
      </section>
  </>
);
}

export default Main03scroll
