import React from 'react'
import Video from '../componets/Home/Video'
import HomeHerotext from '../componets/Home/HomeHerotext'
import HomebottomText from '../componets/Home/HomebottomText'
const Home = () => {
  return (
    <div className='h-full w-full'>
      <div className='h-screen w-screen fixed'>
          <Video/>
      </div>
      <div className='h-screen w-screen relative flex flex-col '>
           <HomeHerotext/>
           <HomebottomText/>
      </div>
        

    </div>
  )
}

export default Home