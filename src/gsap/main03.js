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
    <section ref={triggerRef} style={{backgroundColor:'#fff', paddingBottom:'300px', overflow:'hidden', width:'100%', height:'100%', overflow:'hidden'}}>
        <div className='tags' style={{background:'linear-gradient(#ffec40, #fff)', height:'100vh', width:'100vw', marginBottom:'21.370vh',paddingTop:'18.518518518519vh'}}>
          <div className='leading-none' style={{position:'relative',paddingLeft: '1.465vw',paddingRight: '1.465vw'}}>
            <div className='title-wrap'>
              <h2 className='text-[20vw] md:text-[13.542vw] font-medium block my-0 mx-auto' >
                Thank<br className='block md:hidden'/>you<br/>for being<br className='block md:hidden'/>alive
              </h2> 
            </div>
            <div className='tags-wrap absolute top-1/2 left-1/2 w-full h-full max-w-[1920px] mx-auto transform -translate-x-1/2 -translate-y-1/2'>
              <span className='tag opacity-100 absolute top-[-3%] left-[10%] md:top-[3%] md:left-[7%] bg-white rounded-[3.604vw] text-[6vw] md:text-[2.225vw] py-[0.521vw] px-[2.969vw]' style={{transform: 'rotate(7.00001deg) scale(1.5, 1.5)'}}>Eclipse</span>
              <span className='tag opacity-100 absolute top-[5%] left-[24%] md:top-[23%] md:left-[11.75%] bg-white rounded-[3.604vw] text-[6vw] md:text-[2.225vw] py-[0.521vw] px-[2.969vw]' style={{transform: 'rotate(-27.5298deg) scale(1.5, 1.5)'}}>HanRiver</span>
              <span className='tag opacity-100 absolute top-[60%] left-[12%] md:top-[-2%] md:left-[35.8%] bg-white rounded-[3.604vw] text-[6vw] md:text-[2.225vw] py-[0.521vw] px-[2.969vw]' style={{transform: 'rotate(15.6298deg) scale(1.5, 1.5)'}}>Wristwatch</span>
              <span className='tag opacity-100 absolute top-[35.5%] left-[10%] md:top-[18%] md:left-[47.5%] bg-white rounded-[3.604vw] text-[6vw] md:text-[2.225vw] py-[0.521vw] px-[2.969vw]' style={{transform: 'rotate(-12.13deg) scale(1.5, 1.5)'}}>12AM</span>
              <span className='tag opacity-100 absolute top-[8.5%] right-[2.5%] md:top-[1.5%] md:right-[12%] bg-white rounded-[3.604vw] text-[6vw] md:text-[2.225vw] py-[0.521vw] px-[2.969vw]' style={{transform: 'rotate(-28.93deg) scale(1.5, 1.5)'}}>Video</span>
              <span className='tag opacity-100 absolute top-[88%] left-[46.8%] md:top-[38%] md:left-[26.8%] bg-[#86bee7] text-white rounded-[3.604vw] text-[6vw] md:text-[2.225vw] py-[0.521vw] px-[2.969vw]' style={{transform: 'rotate(19.83deg) scale(1.5, 1.5)'}}>Swimming</span>
              <span className='tag opacity-100 absolute top-[22.5%] right-[7%] md:top-[36.5%] md:right-[16%] bg-[#86bee7] text-white rounded-[3.604vw] text-[6vw] md:text-[2.225vw] py-[0.521vw] px-[2.969vw]' style={{transform: 'rotate(8.80022deg) scale(1.5, 1.5)'}}>TimeCapsule</span>
              <span className='tag opacity-100 absolute bottom-[-20%] left-[6.5%] md:bottom-[4%] md:left-[6.5%] bg-[#86bee7] text-white rounded-[3.604vw] text-[6vw] md:text-[2.225vw] py-[0.521vw] px-[2.969vw]' style={{transform: 'rotate(33.1401deg) scale(1.5, 1.5)'}}>Necklace</span>
              <span className='tag opacity-100 absolute bottom-[20%] left-[60%] md:bottom-[20%] md:left-[18%] bg-white rounded-[3.604vw] text-[6vw] md:text-[2.225vw] py-[0.521vw] px-[2.969vw]' style={{transform: 'rotate(-14.03deg) scale(1.5, 1.5)'}}>Snow</span>
              <span className='tag opacity-100 absolute bottom-[-5%] left-[17%] md:bottom-[15%] md:left-[38%] bg-white rounded-[3.604vw] text-[6vw] md:text-[2.225vw] py-[0.521vw] px-[2.969vw]' style={{transform: 'rotate(8.80022deg) scale(1.5, 1.5)'}}>Wheelchair</span>
              <span className='tag opacity-100 absolute bottom-[50%] left-[34%] md:bottom-[-18%] md:left-[44%] bg-white rounded-[3.604vw] text-[6vw] md:text-[2.225vw] py-[0.521vw] px-[2.969vw]' style={{transform: 'rotate(13.7703deg) scale(1.5, 1.5)'}}>AmusementPark</span>
              <span className='tag opacity-100 absolute bottom-[20%] right-[48.8%] md:bottom-[0%] md:right-[28.8%] bg-[#86bee7] text-white rounded-[3.604vw] text-[6vw] md:text-[2.225vw] py-[0.521vw] px-[2.969vw]' style={{transform: 'rotate(-13.1099deg) scale(1.5, 1.5)'}}>Umbrella</span>
              <span className='tag opacity-100 absolute bottom-[-25%] right-[11%] md:bottom-[9%] md:right-[8%] bg-white rounded-[3.604vw] text-[6vw] md:text-[2.225vw] py-[0.521vw] px-[2.969vw]' style={{transform: 'rotate(23.0498deg) scale(1.5, 1.5)'}}>MP3player</span>
<<<<<<< HEAD
=======
              <span className='tag absolute top-[3%] left-[7%] bg-white rounded-[3.604vw] text-[6vw] md:text-[2.225vw] py-[0.521vw] px-[2.969vw]' style={{transform: 'rotate(7.00001deg) scale(1.5, 1.5)'}}>Eclipse</span>
              <span className='tag absolute top-[23%] left-[11.75%] bg-white rounded-[3.604vw] text-[6vw] md:text-[2.225vw] py-[0.521vw] px-[2.969vw]' style={{transform: 'rotate(-27.5298deg) scale(1.5, 1.5)'}}>HanRiver</span>
              <span className='tag absolute top-[-2%] left-[35.8%] bg-white rounded-[3.604vw] text-[6vw] md:text-[2.225vw] py-[0.521vw] px-[2.969vw]' style={{transform: 'rotate(15.6298deg) scale(1.5, 1.5)'}}>Wristwatch</span>
              <span className='tag absolute top-[18%] left-[47.5%] bg-white rounded-[3.604vw] text-[6vw] md:text-[2.225vw] py-[0.521vw] px-[2.969vw]' style={{transform: 'rotate(-12.13deg) scale(1.5, 1.5)'}}>12AM</span>
              <span className='tag absolute top-[1.5%] right-[12%] bg-white rounded-[3.604vw] text-[6vw] md:text-[2.225vw] py-[0.521vw] px-[2.969vw]' style={{transform: 'rotate(-28.93deg) scale(1.5, 1.5)'}}>Video</span>
              <span className='tag absolute top-[38%] left-[26.8%] bg-[#86bee7] text-white rounded-[3.604vw] text-[6vw] md:text-[2.225vw] py-[0.521vw] px-[2.969vw]' style={{transform: 'rotate(19.83deg) scale(1.5, 1.5)'}}>Swimming</span>
              <span className='tag absolute top-[36.5%] right-[16%] bg-[#86bee7] text-white rounded-[3.604vw] text-[6vw] md:text-[2.225vw] py-[0.521vw] px-[2.969vw]' style={{transform: 'rotate(8.80022deg) scale(1.5, 1.5)'}}>TimeCapsule</span>
              <span className='tag absolute bottom-[4%] left-[6.5%] bg-[#86bee7] text-white rounded-[3.604vw] text-[6vw] md:text-[2.225vw] py-[0.521vw] px-[2.969vw]' style={{transform: 'rotate(33.1401deg) scale(1.5, 1.5)'}}>Necklace</span>
              <span className='tag absolute bottom-[20%] left-[18%] bg-white rounded-[3.604vw] text-[6vw] md:text-[2.225vw] py-[0.521vw] px-[2.969vw]' style={{transform: 'rotate(-14.03deg) scale(1.5, 1.5)'}}>Snow</span>
              <span className='tag absolute bottom-[15%] left-[38%] bg-white rounded-[3.604vw] text-[6vw] md:text-[2.225vw] py-[0.521vw] px-[2.969vw]' style={{transform: 'rotate(8.80022deg) scale(1.5, 1.5)'}}>Wheelchair</span>
              <span className='tag absolute bottom-[-18%] left-[44%] bg-white rounded-[3.604vw] text-[6vw] md:text-[2.225vw] py-[0.521vw] px-[2.969vw]' style={{transform: 'rotate(13.7703deg) scale(1.5, 1.5)'}}>AmusementPark</span>
              <span className='tag absolute bottom-[0%] right-[28.8%] bg-[#86bee7] text-white rounded-[3.604vw] text-[6vw] md:text-[2.225vw] py-[0.521vw] px-[2.969vw]' style={{transform: 'rotate(-13.1099deg) scale(1.5, 1.5)'}}>Umbrella</span>
              <span className='tag absolute bottom-[9%] right-[8%] bg-white rounded-[3.604vw] text-[6vw] md:text-[2.225vw] py-[0.521vw] px-[2.969vw]' style={{transform: 'rotate(23.0498deg) scale(1.5, 1.5)'}}>MP3player</span>
>>>>>>> eacc3ba00c72d09644412b7845200c53bfd5d827
            </div>
          </div>
        </div>
    </section>   
  );
}

export default Main03