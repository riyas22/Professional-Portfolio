'use client'
import useRoleSwitcher from '@/hooks/useRoleSwitcher'
import Image from 'next/image'
import { HeroImage } from '../../utils/images'
//import Ellipse from './Ellipse'

const Hero = () => {
  //const ellipseRef = useRotatingAnimation()
  const role = useRoleSwitcher({ 
    roles: ['IT Operations Manager', 'IT Manager', 'IT Infrastructure Manager'] 
  })

  return (
    <section className="bg-primary bg-small-glow bg-small-glow-position md:bg-large-glow-position lg:bg-large-glow min-h-[calc(dvh-4rem)] bg-no-repeat">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-4 px-4 pt-12 pb-10 md:grid-cols-2 lg:p-4">
        
        {/* LEFT SIDE: Text Content */}
        <div className="flex min-h-48 flex-col justify-between lg:min-h-56 lg:max-w-[33.75rem]">
          <h1>
            <span className="text-neutral mb-2 block text-3xl font-bold">
              Hi - I'm Riyasudeen Farook
            </span>
            <span className="text-accent block text-[1.75rem] font-bold min-h-[4rem] md:min-h-[2.25rem]">
              {role}
            </span>
          </h1>

          <h2 className="text-neutral mt-3 text-base leading-relaxed">
            Leading enterprise infrastructure operations in Riyadh | Nutanix HCI | Microsoft 365 | Cloud Security | Driving digital transformation through automation | Virtualization | Cloud Computing
          </h2>

          {/* Buttons with Working Links */}
          <div className="mt-6 flex flex-wrap gap-6">
            <a
              href="#contact"
              aria-label="Connect with me"
              className="bg-accent min-w-32 cursor-pointer rounded-lg px-[14px] py-[10px] text-center text-sm font-medium text-[#00071E] transition-all duration-75 ease-linear hover:scale-105">
              Hire Me
            </a>
            <a
              href="https://www.linkedin.com/in/riyasudeen-p-m/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View LinkedIn Profile"
              className="text-neutral bg-secondary cursor-pointer rounded-lg px-[14px] py-[10px] text-sm transition-all duration-75 ease-linear hover:scale-105">
              LinkedIn Profile
            </a>
          </div>
        </div>

        {/* RIGHT SIDE: Profile Photo */}
        <div className="flex min-h-[18.75rem] items-center justify-center md:justify-end lg:justify-end lg:min-h-[35rem]">
          <div className="text-accent relative size-75 sm:size-82 md:size-[29rem] lg:size-[33rem] md:translate-x-8 lg:translate-x-12">
            <Image
              src={HeroImage}
              fill={true}
              priority={true}
              sizes="(min-width: 1024px) 32rem, (min-width: 768px) 28rem, (min-width: 640px) 20rem, 18rem"
              alt="Riyasudeen Farook - IT Operations Manager"
              className="object-contain p-7 md:p-4 lg:p-2"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
