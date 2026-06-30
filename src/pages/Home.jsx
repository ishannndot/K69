import React from 'react'
import HomeHeroText from '../components/Home/HomeHeroText'
import Video from '../components/Home/Video'
import HomeBottomText from '../components/Home/HomeBottomText'
const Home = () => {
  return (
      <div className='text-white'>
        <div className='h-screen w-screen fixed'>
            <Video />
        </div>
        <div className='h-full w-full relative flex flex-col'>
            <HomeHeroText/>
            <HomeBottomText/>
        </div>
      </div>
  )
}

export default Home
