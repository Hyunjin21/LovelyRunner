import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Main05 = () => {
  

  return (
    <section className='w-dvw flex flex-col' style={{backgroundColor:'#fff', paddingTop:'200px'}}>
        <div className='descript' style={{color:'#000', paddingTop:'260px'}}>
          <div className='text-wrap' style={{paddingLeft:'7.031vw',paddingRight:'7.031vw', transform:'translate(0px,0px)'}}>
            <p className='w-max whitespace-nowrap' style={{fontSize:'5vw', fontWeight: 500, lineHeight: 1.15}}>
              Thank you <br/>for being alive
            </p>
            <p className='w-max whitespace-nowrap' style={{fontSize:'5vw', fontWeight: 500, lineHeight:1.15, display:'inline-block', position:'relative'}}>
              <span className='to'>to</span>
              <span className='every' style={{color:'#ffec40', fontSize:'13.542vw', fontFamily:'Sacramento, cursive'}}> everyone</span>
            </p>
          </div>
        </div>
        <div className='h-dvh' style={{marginTop:'150px', paddingLeft:'3.646vw', paddingRight:'3.646vw', maxWidth:'1920px'}}>
          <div className='video-wrap' style={{height:'100vh',borderRadius:'20px',overflow:'hidden',position:'relative'}}>
            <img src='books.jpg' style={{width:'100%',height:'100%',objectFit:'cover'}}/>
          </div>
        </div>
    </section>    
  )
}

export default Main05
