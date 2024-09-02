import React from 'react'

const Main03 = () => {
  return (
    <section className='h-dvh flex justify-center items-start flex-col' style={{backgroundColor:'#ffec40'}}>
        <div className='tags' style={{background:'linear-gradient(#ffec40, #fff)'}}>
          <div className='leading-none'>
            <div className='title-wrap'>
              <h2 style={{fontSize:'13.542vw', fontWeight:500}}>Thank you 
                <br/>for being alive</h2> 
              {/* <span ref={textRef} className='w-max whitespace-nowrap block' style={{fontSize:'18.750vw', fontWeight: 700, color:'#86bee7'}}>Lovely Runner</span> */}
            </div>
            <div className='tags-wrap'>
              <span style={{opacity:1, visibility:'inherit', transform:'rotate(15deg) scale(1.5, 1.5)', backgroundColor:'#fff', borderRadius:'3.604vw', fontSize:'3.125vw', padding:'0.521vw 2.969vw'}}>Eclipse</span>
              <span style={{opacity:1, visibility:'inherit', transform:'rotate(15deg) scale(1.5, 1.5)', backgroundColor:'#fff', borderRadius:'3.604vw', fontSize:'3.125vw', padding:'0.521vw 2.969vw'}}>HanRiver</span>
              <span style={{opacity:1, visibility:'inherit', transform:'rotate(15deg) scale(1.5, 1.5)', backgroundColor:'#fff', borderRadius:'3.604vw', fontSize:'3.125vw', padding:'0.521vw 2.969vw'}}>Wristwatch</span>
              <span style={{opacity:1, visibility:'inherit', transform:'rotate(15deg) scale(1.5, 1.5)', backgroundColor:'#fff', borderRadius:'3.604vw', fontSize:'3.125vw', padding:'0.521vw 2.969vw'}}>12AM</span>
              <span style={{opacity:1, visibility:'inherit', transform:'rotate(15deg) scale(1.5, 1.5)', backgroundColor:'#fff', borderRadius:'3.604vw', fontSize:'3.125vw', padding:'0.521vw 2.969vw'}}>Video</span>
              <span style={{opacity:1, visibility:'inherit', transform:'rotate(15deg) scale(1.5, 1.5)', backgroundColor:'#86bee7', borderRadius:'3.604vw', fontSize:'3.125vw', color:'#fff', padding:'0.521vw 2.969vw'}}>Swimming</span>
              <span style={{opacity:1, visibility:'inherit', transform:'rotate(15deg) scale(1.5, 1.5)', backgroundColor:'#86bee7', borderRadius:'3.604vw', fontSize:'3.125vw', color:'#fff', padding:'0.521vw 2.969vw'}}>TimeCapsule</span>
              <span style={{opacity:1, visibility:'inherit', transform:'rotate(15deg) scale(1.5, 1.5)', backgroundColor:'#86bee7', borderRadius:'3.604vw', fontSize:'3.125vw', color:'#fff', padding:'0.521vw 2.969vw'}}>Necklace</span>
              <span style={{opacity:1, visibility:'inherit', transform:'rotate(15deg) scale(1.5, 1.5)', backgroundColor:'#fff', borderRadius:'3.604vw', fontSize:'3.125vw', padding:'0.521vw 2.969vw'}}>AmusementPark</span>
              <span style={{opacity:1, visibility:'inherit', transform:'rotate(15deg) scale(1.5, 1.5)', backgroundColor:'#fff', borderRadius:'3.604vw', fontSize:'3.125vw', padding:'0.521vw 2.969vw'}}>Wheelchair</span>
              <span style={{opacity:1, visibility:'inherit', transform:'rotate(15deg) scale(1.5, 1.5)', backgroundColor:'#fff', borderRadius:'3.604vw', fontSize:'3.125vw', padding:'0.521vw 2.969vw'}}>Snow</span>
              <span style={{opacity:1, visibility:'inherit', transform:'rotate(15deg) scale(1.5, 1.5)', backgroundColor:'#86bee7', borderRadius:'3.604vw', fontSize:'3.125vw', color:'#fff', padding:'0.521vw 2.969vw'}}>Umbrella</span>
              <span style={{opacity:1, visibility:'inherit', transform:'rotate(15deg) scale(1.5, 1.5)', backgroundColor:'#fff', borderRadius:'3.604vw', fontSize:'3.125vw', padding:'0.521vw 2.969vw'}}>MP3player</span>

            </div>
          </div>
        </div>
        <div className='scroll flex items-start flex-row' style={{background:'#fff'}}>
          <div className='part1'>
            <div className='img_wrap'>
            </div>
            <div className='ost_part' style={{color:'#0cd886',fontSize:'34.375vw', fontFamily: "Oswald, sans-serif"}}>
              <span>PART1</span>
            </div>
            <div className='ost_info'>
              <div className='ost_title'>
                <span>Rain Shower</span>
              </div>
              <div className='ost_singer'>
                <span>Eclipse</span>
              </div>
            </div>
          </div>
          <div className='part2'>
            <div className='img_wrap'>
            </div>
            <div className='ost_part' style={{color:'#86bee7',fontSize:'34.375vw', fontFamily: "Oswald, sans-serif"}}>
              <span>PART2</span>
            </div>
            <div className='ost_info'>
              <div className='ost_title'>
                <span>Star</span>
              </div>
              <div className='ost_singer'>
                <span>N.Flying</span>
              </div>
            </div>
          </div>
          <div className='part3'>
            <div className='img_wrap'>
            </div>
            <div className='ost_part' style={{color:'#ff89a2',fontSize:'34.375vw', fontFamily: "Oswald, sans-serif"}}>
              <span>PART3</span>
            </div>
            <div className='ost_info'>
              <div className='ost_title'>
                <span>It's like a dream</span>
              </div>
              <div className='ost_singer'>
                <span>Minnie (G)I-DLE</span>
              </div>
            </div>
          </div>
          <div className='part4'>
            <div className='img_wrap'>
            </div>
            <div className='ost_part' style={{color:'#b296ff',fontSize:'34.375vw', fontFamily: "Oswald, sans-serif"}}>
              <span>PART8</span>
            </div>
            <div className='ost_info'>
              <div className='ost_title'>
                <span>Spring Snow</span>
              </div>
              <div className='ost_singer'>
                <span>10CM</span>
              </div>
            </div>
          </div>
          <div className='part5'>
            <div className='img_wrap'>
            </div>
            <div className='ost_part' style={{color:'#ffeb35',fontSize:'34.375vw', fontFamily: "Oswald, sans-serif"}}>
              <span>PART9</span>
            </div>
            <div className='ost_info'>
              <div className='ost_title'>
                <span>Present</span>
              </div>
              <div className='ost_singer'>
                <span>Ha Sung Woon</span>
              </div>
            </div>
          </div>
        </div>
    </section>   
  )
}

export default Main03
