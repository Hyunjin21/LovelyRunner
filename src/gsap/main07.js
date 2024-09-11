import React from 'react'

const Main07 = () => {
  return (
    <section className='img-text' style={{backgroundColor:'#fff'}}>
        <div className='h-dvh' style={{color:'#000', paddingTop:'260px'}}>
          <div className='text-wrap' style={{paddingLeft:'7.031vw',paddingRight:'7.031vw',paddingBottom:'10.208vw', transform:'translate(0px,0px)'}}>
            <p className='w-max whitespace-nowrap block' style={{fontSize:'4vw', fontWeight: 500, fontFamily:'DOSSaemmul', position:'absolute'}}>
            {/* 앞으로 Łйㄱr 옆 딱 붙øłnㅓ ズl켜줄つㅓl! <br/> */}
            {/* 류선재! LIㄱr Łй 별○l○F <br/> */}
            {/* ㅁı치겠⊂ト 임솔, 너 ㄸĦ문øłl... */}
            앞으로 내가 옆에 딱 붙어서 지켜줄게!<br/>
            류선재! 니가 내 별이야<br/>
            미치겠다 임솔, 너 때문에...
            </p>
            <div className='img-wrap ani' style={{width: '16.615vw', height: '16.615vw', margin:'0 auto', transform:'translate3d(0px,0px,0px) rotate(0deg)'}}>
              <img src='acorn.png'/>
            </div>
          </div>
        </div>
        <div className='img-scroll flex flex-row' style={{ maxHeight:'972px', height:'972px', padding:'0px 160px'}}>
          <div className='img-wrap' style={{width:'30.208vw', height:'40.521vw', flex: '0 0 auto'}}>
            <img src='scene1.png' style={{width:'100%',height:'100%', objectFit:'cover',objectPosition:'center'}}/>
          </div>
          <div className='img-wrap' style={{width:'49.323vw', height:'33.906vw', flex: '0 0 auto'}}>
            <img src='scene2.png' style={{width:'100%',height:'100%', objectFit:'cover',objectPosition:'center'}}/>
          </div>
          <div className='img-wrap' style={{width:'30.052vw', height:'40.990vw', flex: '0 0 auto'}}>
            <img src='scene3.png' style={{width:'100%',height:'100%', objectFit:'cover',objectPosition:'center'}}/>
          </div>
          <div className='img-wrap' style={{width:'33.698vw', height:'43.073vw', flex: '0 0 auto'}}>
            <img src='scene4.png' style={{width:'100%',height:'100%', objectFit:'cover',objectPosition:'center'}}/>
          </div>
          <div className='img-wrap' style={{width:'34.635vw', height:'43.750vw', flex: '0 0 auto'}}>
            <img src='scene5.png' style={{width:'100%',height:'100%', objectFit:'cover',objectPosition:'center'}}/>
          </div>
          <div className='img-wrap' style={{width:'49.375vw', height:'33.906vw', flex: '0 0 auto'}}>
            <img src='scene6.png' style={{width:'100%',height:'100%', objectFit:'cover',objectPosition:'center'}}/>
          </div>
        </div>

    </section>    
  )
}

export default Main07
