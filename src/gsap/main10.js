import React from 'react'

const Main10 = () => {
  return (
    <footer style={{ width:'100%', paddingBottom:'100px', backgroundColor:'#ffec40'}}>
        <div className='footer-wrap' style={{ display:'flex', justifyContent:'center', alignItems:'center'}}>
            <div className='company' style={{ color:'#86bee7', textAlign:'center', fontSize:'1.3rem'}}>
                <div className='logo' style={{ display:'flex', justifyContent:'center', alignItems:'center', gap:'6px', marginBottom:'18px'}}>
                    <img src='/cj.svg' className='w-[100px] m-[10px]'/>
                    <img src='/bon.svg' className='w-[132px] m-[10px]'/>
                </div>
                <p className='text-sm'>ⓒ Lovely Runner Portfolio. All rights reserved.</p>
            </div>
        </div>
    </footer>
  )
}

export default Main10
