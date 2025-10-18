import React from 'react'
import { Link } from 'react-router-dom'

const HomebottomText = () => {
  return (
    <div className='font[font2] flex items-center justify-center gap-6 text-amber-50'>
        
       <Link className='text-[7vw] uppercase  border rounded-full overflow-hidden w-120' to='/projects'> Projects</Link>
       <Link className='text-[7vw] uppercase border-[2px] rounded-full overflow-hidden w-120' to='/Agence'> Agenses</Link>
    </div>
  )
}

export default HomebottomText