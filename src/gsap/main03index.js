import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ScrollToPlugin from 'gsap/ScrollToPlugin';
import { Canvas } from "@react-three/fiber";

const Main03index = () => {
    const sectionRef = useRef(null);
    const triggerRef = useRef(null);
  
  return (
    <>
        <section className='overflow-hidden'>
            <div ref={triggerRef}>
                <div ref={sectionRef} className='h-dvh w-[500vw] flex flex-row relative bg-white'>
                    <div className='w-[500vw] h-dvh flex'>
                        <div className='flex justify-between'>
                            {/* Page1 */}
                            <div className='w-[100vw] relative '>
                                <section className='absolute'>
                                 <div className='img_wrap'>
                                 </div>
                                 <div className='ost_part flex justify-center items-center m-0 w-[1920px]'>
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
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    </>
    // https://www.fl-ex.co.kr/
    // <section ref={triggerRef} style={{backgroundColor:'#fff', width:'9600px', height:'100vh', overflow:'hidden', paddingBottom:'300px'}}>
    //     <div ref={scrollRef} className='scroll-part' style={{background:'#fff', flexWrap:'nowrap',height:'100vh',display:'flex',position:'relative', width:'max-content', paddingBottom:'200px'}}>
    //       <section className='part part1 flex justify-center items-center flex-col' style={{ width:'100vw', height:'100%'}}>
    //         <div className='img_wrap'>
    //         </div>
    //         <div className='ost_part flex justify-center items-center m-0' style={{width:'1920px'}}>
    //           <span style={{color:'#0cd886',fontSize:'34.375vw', fontFamily: "Oswald, sans-serif", fontWeight:700, letterSpacing:1.5}}>PART1</span>
    //         </div>
    //         <div className='ost_info flex justify-center items-center flex-col' style={{marginTop:'-5.635vw', width:'100%', marginLeft:'auto',marginRight:'auto'}}>
    //           <div className='ost_title'>
    //             <span style={{fontSize:'4.167vw', lineHeight:'1.04', fontWeight:500}}>Rain Shower</span>
    //           </div>
    //           <div className='ost_singer'>
    //             <span style={{fontSize:'18px', lineHeight:'1.78', marginTop: '10px'}}>Eclipse</span>
    //           </div>
    //         </div>
    //       </section>
    //       <section className='part part2 flex justify-center items-center flex-col' style={{ width:'100vw', height:'100%'}}>
    //         <div className='img_wrap'>
    //         </div>
    //         <div className='ost_part flex justify-center items-center m-0' style={{width:'1920px'}}>
    //           <span style={{color:'#86bee7',fontSize:'34.375vw', fontFamily: "Oswald, sans-serif", fontWeight:700, letterSpacing:1.5}}>PART2</span>
    //         </div>
    //         <div className='ost_info flex justify-center items-center flex-col' style={{marginTop:'-5.635vw', width:'100%', marginLeft:'auto',marginRight:'auto'}}>
    //           <div className='ost_title'>
    //             <span style={{fontSize:'4.167vw', lineHeight:'1.04', fontWeight:500}}>Star</span>
    //           </div>
    //           <div className='ost_singer'>
    //             <span style={{fontSize:'18px', lineHeight:'1.78', marginTop: '10px'}}>N.Flying</span>
    //           </div>
    //         </div>
    //       </section>
    //       <section className='part part3 flex justify-center items-center flex-col' style={{ width:'100vw', height:'100%'}}>
    //         <div className='img_wrap'>
    //         </div>
    //         <div className='ost_part flex justify-center items-center m-0' style={{width:'1920px'}}>
    //           <span style={{color:'#ff89a2',fontSize:'34.375vw', fontFamily: "Oswald, sans-serif", fontWeight:700, letterSpacing:1.5}}>PART3</span>
    //         </div>
    //         <div className='ost_info flex justify-center items-center flex-col' style={{marginTop:'-5.635vw', width:'100%', marginLeft:'auto',marginRight:'auto'}}>
    //           <div className='ost_title'>
    //             <span style={{fontSize:'4.167vw', lineHeight:'1.04', fontWeight:500}}>It's like a dream</span>
    //           </div>
    //           <div className='ost_singer'>
    //             <span style={{fontSize:'18px', lineHeight:'1.78', marginTop: '10px'}}>Minnie (G)I-DLE</span>
    //           </div>
    //         </div>
    //       </section>
    //       <section className='part part4 flex justify-center items-center flex-col' style={{ width:'100vw', height:'100%'}}>
    //         <div className='img_wrap'>
    //         </div>
    //         <div className='ost_part flex justify-center items-center m-0' style={{width:'1920px'}}>
    //           <span style={{color:'#b296ff',fontSize:'34.375vw', fontFamily: "Oswald, sans-serif", fontWeight:700, letterSpacing:1.5}}>PART8</span>
    //         </div>
    //         <div className='ost_info flex justify-center items-center flex-col' style={{marginTop:'-5.635vw', width:'100%', marginLeft:'auto',marginRight:'auto'}}>
    //           <div className='ost_title'>
    //             <span style={{fontSize:'4.167vw', lineHeight:'1.04', fontWeight:500}}>Spring Snow</span>
    //           </div>
    //           <div className='ost_singer'>
    //             <span style={{fontSize:'18px', lineHeight:'1.78', marginTop: '10px'}}>10CM</span>
    //           </div>
    //         </div>
    //       </section>
    //       <section className='part part5 flex justify-center items-center flex-col' style={{ width:'100vw', height:'100%'}}>
    //         <div className='img_wrap'>
    //         </div>
    //         <div className='ost_part flex justify-center items-center m-0' style={{width:'1920px'}}>
    //           <span style={{color:'#ffeb35',fontSize:'34.375vw', fontFamily: "Oswald, sans-serif", fontWeight:700, letterSpacing:1.5}}>PART9</span>
    //         </div>
    //         <div className='ost_info flex justify-center items-center flex-col' style={{marginTop:'-5.635vw', width:'100%', marginLeft:'auto',marginRight:'auto'}}>
    //           <div className='ost_title'>
    //             <span style={{fontSize:'4.167vw', lineHeight:'1.04', fontWeight:500}}>Present</span>
    //           </div>
    //           <div className='ost_singer'>
    //             <span style={{fontSize:'18px', lineHeight:'1.78', marginTop: '10px'}}>Ha Sung Woon</span>
    //           </div>
    //         </div>
    //       </section>
    //     </div>
    // </section>   
    
  );
}

export default Main03index
