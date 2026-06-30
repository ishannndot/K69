import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomText = () => {
  return (
    <div className="relative w-full">

      {/* Right Paragraph */}
      <div
        className="
          absolute
          right-2
          sm:right-4
          md:right-2
          lg:right-14

          bottom-45
          sm:bottom-45
          md:bottom-40

          w-[35vw]
          sm:w-[25vw]
          md:w-[20vw]
        "
      >
        <p
          className="
            font-medium
            text-[10px]
            sm:text-[11px]
            md:text-xs
            lg:text-sm
            leading-tight
            lg:leading-relaxed
            indent-20
            text-white
          "
        >
          K72 is an agency that carefully considers every action to nurture the
          brand. Tomorrow, in 5 months, and in 5 years. We seek out the friction
          that creates the spark to generate emotion. To ensure an honest
          relationship, we are unfiltered; we say what needs to be said, we do
          what needs to be done.
        </p>
      </div>

      {/* Center Buttons */}
      <div
        className="
        flex
        justify-center
        items-center
       
        gap-2
        sm:gap-3
        md:gap-4
        lg:gap-8
        pt-20
        sm:pt-28
        md:pt-36
        lg:pt-52
        "
      >

        <Link
          to="/projects"
          className="
            font-[font2]
            uppercase

            border-2
            lg:border-[3px]
            border-white

            rounded-full

            flex
            items-center
            justify-center

            h-14
            sm:h-16
            md:h-20
            lg:h-24

            px-6
            sm:px-8
            md:px-10
            lg:px-14

            text-[5vw]
            sm:text-[4.5vw]
            md:text-[4vw]
            lg:text-[5vw]

            hover:border-[#D3FD50]
            hover:text-[#D3FD50]

            transition-all
            duration-1
          "
        >
          PROJECTS
        </Link>

        <Link
          to="/agence"
          className="
            font-[font2]
            uppercase

            border-2
            lg:border-[3px]
            border-white

            rounded-full

            flex
            items-center
            justify-center

            h-14
            sm:h-16
            md:h-20
            lg:h-24

            px-6
            sm:px-8
            md:px-10
            lg:px-14

            text-[5vw]
            sm:text-[4.5vw]
            md:text-[4vw]
            lg:text-[5vw]

            hover:border-[#D3FD50]
            hover:text-[#D3FD50]

            transition-all
            duration-300
          "
        >
          AGENCY
        </Link>

      </div>

    </div>
  )
}

export default HomeBottomText