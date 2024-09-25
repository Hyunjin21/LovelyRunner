import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Main03 = () => {
  gsap.registerPlugin(ScrollTrigger);
  const triggerRef = useRef(null);
  // const scrollRef = useRef([]);

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

    // Clean up event listeners on component unmount
    return () => {
      tags.forEach(tag => {
        tag.removeEventListener('mouseenter', () => {});
      });
      // ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };


  }, []);

  
  
  return (
    <section ref={triggerRef} style={{backgroundColor:'#fff', paddingBottom:'300px', overflow:'hidden', width:'100vw', height:'100%', overflow:'hidden'}}>
        <div className='tags' style={{background:'linear-gradient(#ffec40, #fff)', height:'100vh', width:'100vw', marginBottom:'21.370vh',paddingTop:'18.518518518519vh'}}>
          <div className='leading-none' style={{position:'relative',paddingLeft: '1.465vw',paddingRight: '1.465vw'}}>
            <div className='title-wrap'>
              <h2 style={{fontSize:'13.542vw', fontWeight:500, display:'block', margin:'0 auto'}}>Thank you 
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
    </section>   
  );
}

export default Main03
