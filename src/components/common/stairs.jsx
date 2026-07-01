import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useLocation } from 'react-router-dom'
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Lenis from "lenis";
import { useEffect} from 'react'

gsap.registerPlugin(useGSAP, ScrollTrigger);

const stairs = (props) => {
    
   useEffect(() => {
  const lenis = new Lenis({
    duration: 1.4,
    smoothWheel: true,
  });

  lenis.on("scroll", ScrollTrigger.update);

  const update = (time) => {
    lenis.raf(time * 1000);
  };

  gsap.ticker.add(update);
  gsap.ticker.lagSmoothing(0);

  return () => {
    gsap.ticker.remove(update);
    lenis.destroy();
  };
}, []);

    const currentPath = useLocation().pathname
    const stairParentRef = useRef(null)
    const pageRef = useRef(null);
    
    useGSAP(function () {
        const tl = gsap.timeline()
        gsap.killTweensOf(".stair");

        tl.set(".stair", { y: "0%" });

        tl.to(stairParentRef.current, {
            display: 'block',
        })
        tl.from('.stair', {
            y:'-100%',
            stagger: {
                amount: 0.2,
                from:'end'
            }
        })
        tl.to('.stair', {
            y: '100%',
            stagger: {
                amount: 0.25,
                from:'end'
            }
        })
        tl.to(stairParentRef.current, {
            display: 'none'
        })
         tl.set(".stair", {
            y: "0%",
        });
        gsap.from(pageRef.current,{
            opacity:0,
            delay:1.2,
            duration:2
        })
        return () => tl.kill();
      },[currentPath])

  return (
    <div>
      <div ref={stairParentRef} className='h-screen w-full fixed z-20 top-0'>
                <div className='h-full w-full flex'>
                    <div className='stair h-full w-1/5 bg-black'></div>
                    <div className='stair h-full w-1/5 bg-black'></div>
                    <div className='stair h-full w-1/5 bg-black'></div>
                    <div className='stair h-full w-1/5 bg-black'></div>
                    <div className='stair h-full w-1/5 bg-black'></div>
                </div>
            </div>
            <div ref={pageRef}>
                {props.children}
            </div>
    </div>
  )
}

export default stairs
