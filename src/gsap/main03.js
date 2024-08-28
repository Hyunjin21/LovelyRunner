import React from 'react'

const Main03 = () => {
  return (
    <section ref={triggerRef} className='h-dvh flex justify-center items-start' style={{backgroundColor:'#ffec40'}}>
        <div ref={titleRef} className='uppercase leading-none'>
          
          <span ref={textRef} className='w-max whitespace-nowrap block' style={{fontSize:'18.750vw', fontWeight: 700, color:'#86bee7'}}>Lovely Runner</span>
        </div>
    </section>   
  )
}

export default Main03
