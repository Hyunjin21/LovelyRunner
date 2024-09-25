import React from 'react'

const Main09 = () => {
  return (
    <section className='credit-wrap flex justify-center items-center flex-col' style={{backgroundColor:'#ffec40', width:'100%', height:'100vh', position:'absolute', overflow:'hidden'}}>
      <div className='credit flex justify-center items-center flex-col' style={{textAlign:'center', fontFamily:'Arial', whiteSpace:'nowrap', animation:'credits 20s linear infinite'}}>
        <h3>선재 업고 튀어</h3><br/>
        <div className='flex flex-row gap-[20px]'>
          <div style={{textAlign:'right'}}>
            <p>편성</p>
            <p>원작</p>
          </div>
          <div style={{textAlign:'left'}}>
            <p>2024.04.08 ~ 2024.05.28</p>
            <p>원작소설 '내일의 으뜸'</p>
          </div>
        </div><br/>
        <h3>제작정보</h3><br/>
        <div className='flex flex-row gap-[20px]'>
          <div style={{textAlign:'right'}}>
            <p>제작사</p>
            <p>CP</p>
            <p>제작</p>
            <p>연출</p>
            <p>PD</p>
            <p>극본</p>
          </div>
          <div style={{textAlign:'left'}}>
            <p>CJ ENM 스튜디오스, 본팩토리</p>
            <p>김호준</p>
            <p>문석환, 오광희, 박순태</p>
            <p>윤종호, 김태엽</p>
            <p>박윤아</p>
            <p>이시은</p>
          </div>
        </div><br/>
        <h3>등장인물</h3><br/>
        <div className='flex flex-row gap-[20px]'>
          <div style={{textAlign:'right'}}>
            <p>류선재 역</p>
            <p>임솔 역</p>
            <p>김태성 역</p>
            <p>백인혁 역</p>
          </div>
          <div style={{textAlign:'left'}}>
            <p>변우석</p>
            <p>김혜윤</p>
            <p>송건희</p>
            <p>이승협</p>
          </div>
        </div>
      </div>  
    </section>     
  )
}

export default Main09



{/* <span>편성 2024.04.08 ~ 2024.05.28</span><br/>
<span>원작 원작소설 '내일의 으뜸'</span><br/>
<span>제작사</span><br/>
<span>CJ ENM 스튜디오스, 본팩토리</span><br/>
<span>제작진</span><br/>
<span>CP</span>
<span>김호준</span><br/>
<span>제작</span>
<span>문석환, 오광희, 박순태</span><br/>
<span>연출</span>
<span>윤종호, 김태엽</span><br/>
<span>PD</span>
<span>박윤아</span><br/>
<span>극본</span>
<span>이시은</span><br/>
<span>류선재 역 변우석</span><br/>
<span>임솔 역 김혜윤</span><br/>
<span>김태성 역 송건희</span><br/>
<span>백인혁 역 이승협</span><br/> */}