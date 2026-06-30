import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useRef } from 'react'


const Agence = () => {
     gsap.registerPlugin(useGSAP,ScrollTrigger)

    

  const imageDivRef = useRef(null)
  const imageRef = useRef(null)
  const imageArray = [
    'https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Olivier_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Lawrence_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/HugoJoseph_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/ChantalG_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MyleneS_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/SophieA_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Claire_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Michele_480X640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MEL_480X640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/CAMILLE_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MAXIME_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MEGGIE_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/joel_480X640_3-480x640.jpg',
    
  ]
 useGSAP(function () {

    gsap.to(imageDivRef.current, {
      scrollTrigger: {
        trigger: imageDivRef.current,
        start: 'top 17%',
        end: () => {
            if (window.innerWidth < 640) return "top -100%";
            if (window.innerWidth < 768) return "top -100%";
            if (window.innerWidth < 1024) return "top -110%";
            return "top -240%";
        },
        pin: true,
        pinSpacing: true,
       
        scrub: 1, // smooth scrubbing with 1s easing
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (elem) => {
          let imageIndex;
          if (elem.progress < 1) {
            imageIndex = Math.floor(elem.progress * imageArray.length)
          } else {
            imageIndex = imageArray.length - 1
          }
          imageRef.current.src = imageArray[imageIndex]
        }
      }
    })
  })

  return (
    <div className='parent'>
        <div id='page1' className='relative py-1 '>

            <div ref={imageDivRef} className='z-0 absolute overflow-hidden h-[20vw] md:rounded-3xl lg:rounded-3xl rounded-xl  w-[15vw] xl:top-30 lg:top-40 md:top-55 sm:top-40 top-55  lg:left-[30vw] left-[30vw]'>
                <img ref={imageRef} className='h-full object-cover w-full' src="https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg" alt="" />
            </div>
                <div className='relative z-10 font-[font2]  md:mt-[50vh]  mt-[40vh]'>
                    <h1 className='text-[20vw] text-center uppercase leading-[18vw]'>sixty- <br />
                      seventh <br /> twelve</h1>
                </div>
                <div className=' relative z-10 font-[font2] lg:pl-[40%] p-3'>
                    <p className='lg:text-6xl text-xl leading-tight lg:indent-60 md:indent-40 indent-20'> Our curiosity fuels our creativity. We remain humble and say no to big egos, even yours. A brand is alive. It has values, a personality, a history. If we forget that, we might achieve good short-term results, but we'll kill it in the long run. That's why we're committed to providing perspective, to building influential brands.</p>
                </div>
            </div>
        <div id='page2' className="">

        </div>
    </div>

  )
}

export default Agence
