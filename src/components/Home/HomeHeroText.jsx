import React from 'react'
import Video from './Video'

const HomeHeroText = () => {
  return (
    <div className="h-[90vh] screen flex items-center justify-center ">
      <div className="font-[font1] pt-5 text-center">

        <div className="lg:text-[9.5vw] text-[12vw] justify-center flex items-center uppercase lg:leading-[8vw] leading-[10vw]">
          the spark
        </div>

        <div className="lg:text-[9.5vw] text-[12vw] justify-center flex items-start uppercase lg:leading-[8vw] leading-[10vw]">
          who
          <div className="h-[7vw] w-[16vw] rounded-full mt-0.9 ml-5 overflow-hidden">
            <Video />
          </div>
        </div>

        <div className="lg:text-[9.5vw] text-[12vw] justify-center flex items-center uppercase lg:leading-[8vw] leading-[10vw]">
          generates
        </div>

        <div className="lg:text-[9.5vw] text-[12vw] justify-center flex items-center uppercase lg:leading-[8vw] leading-[10vw]">
          there
        </div>

        <div className="lg:text-[9.5vw] text-[12vw] justify-center flex items-center uppercase lg:leading-[8vw] leading-[10vw]">
          creativity
        </div>

      </div>
    </div>
  )
}

export default HomeHeroText