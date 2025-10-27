'use client'
import dynamic from 'next/dynamic'
import Image from 'next/image'

const MarqueeWrapper = dynamic(() => import('../Marquee/MarqueeWrapper'), { ssr: false })

type SkillsProps = {
  skills: { name: string; icon: string }[]
}

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  return (
    <section id="skills" className="py-8 md:py-12 overflow-hidden">
      <MarqueeWrapper className="from-primary to-primary via-marquee bg-linear-to-r">
        <div className="flex gap-8 lg:gap-24">
          {skills.map(({ name, icon }, index) => (
            <span
              key={index}
              className="font-inter text-primary-content flex items-center text-xs lg:text-base">
              {typeof icon === 'string' && icon.startsWith('http') ? (
                <Image 
                  src={icon} 
                  alt={name} 
                  width={56}
                  height={56}
                  className="mx-2 size-11 lg:size-14"
                />
              ) : (
                <span className="text-4xl">{icon}</span>
              )}
              {name}
            </span>
          ))}
        </div>
      </MarqueeWrapper>
    </section>
  )
}

export default Skills
