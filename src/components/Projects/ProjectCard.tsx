'use client'
import { useState, useEffect } from 'react'
import { Project } from '@/lib/types'
import Image from 'next/image'
import { Earning, GithubIcon, Likes, PreviewIcon, Star, Timer } from '../../utils/icons'

const IconText: React.FC<{ icon: string; text: string }> = ({ icon, text }) => (
  <li className="flex gap-2">
    <Image src={icon} alt={text} className="size-[18px] md:size-5" />
    <span className="text-neutral text-sm">{text}</span>
  </li>
)

interface ProjectCardProps {
  data: Project
}

const ProjectCard: React.FC<ProjectCardProps> = ({ data }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  
  const {
    title,
    shortDescription,
    visitors,
    earned,
    ratings,
    githubStars,
    numberOfSales,
    livePreview,
    githubLink,
    siteAge,
    type,
    cover,
  } = data

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isModalOpen])

  return (
    <>
      {/* PROJECT CARD */}
      <div 
        className="bg-secondary border-border flex flex-col justify-between rounded-[14px] border p-5 cursor-pointer transition-all hover:shadow-lg"
        onClick={() => setIsModalOpen(true)}
      >
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1">
            <div className="flex flex-col flex-wrap gap-3 sm:flex-row sm:items-center">
              <h3 className="text-secondary-content text-lg font-medium md:font-semibold">{title}</h3>
              {type && (
                <span
                  className={`h-7 w-fit rounded-md bg-[#FFFFFF1A] p-1 text-sm ${type === 'New 🔥' ? 'animate-blink text-tag' : 'text-accent'} backdrop-blur-[80px]`}>
                  {type}
                </span>
              )}
            </div>
            <ul className="mt-3 flex flex-col flex-wrap gap-2 sm:flex-row sm:gap-4">
              {(visitors || numberOfSales) && (
                <IconText text={(visitors || numberOfSales)?.toString() || ''} icon={Likes} />
              )}
              {siteAge && <IconText text={siteAge} icon={Timer} />}
              {earned && <IconText text={earned} icon={Earning} />}
              {(ratings || githubStars) && (
                <IconText text={(ratings || githubStars)?.toString() || ''} icon={Star} />
              )}
            </ul>
          </div>
          {cover && (
            <figure className="flex justify-end overflow-hidden">
              <Image
                src={cover}
                width={150}
                height={80}
                alt="Project Cover"
                className="h-[80px] w-[150px] rounded-md object-cover shadow-[0px_1.66px_3.74px_-1.25px_#18274B1F]"
              />
            </figure>
          )}
        </div>

        {/* DESCRIPTION BOX */}
        <div className="bg-base-200 my-4 min-h-[100px] rounded-2xl px-4 py-3 border border-base-300">
          <p className="text-sm md:text-base leading-relaxed line-clamp-3 text-neutral opacity-80">
            {shortDescription}
          </p>
          <p className="text-xs text-accent mt-2 font-semibold">Click to read more →</p>
        </div>

        <div className="flex gap-5" onClick={(e) => e.stopPropagation()}>
          {livePreview && (
            <a
              href={livePreview}
              className="text-accent flex gap-2 text-sm underline underline-offset-[3px] transition-all duration-75 ease-linear hover:scale-105 md:text-base"
              target="_blank"
              rel="noopener noreferrer">
              <PreviewIcon className="h-auto w-[18px] md:w-5" />
              <span>Live Preview</span>
            </a>
          )}
          {githubLink && (
            <a
              href={githubLink}
              className="text-accent flex gap-2 text-sm underline underline-offset-[3px] transition-all duration-75 ease-linear hover:scale-105 md:text-base"
              target="_blank"
              rel="noopener noreferrer">
              <GithubIcon className="w-[18px] md:w-5" />
              <span>Github Link</span>
            </a>
          )}
        </div>
      </div>

      {/* MODAL POPUP - FIXED THEME COLORS */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
          onClick={() => setIsModalOpen(false)}
        >
          <div 
            className="rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-8 relative shadow-2xl"
            style={{ backgroundColor: '#F5EFE6' }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-3xl font-bold transition-colors w-10 h-10 flex items-center justify-center rounded-full"
              style={{ color: '#4A3F35', backgroundColor: 'transparent' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#E8DED0'
                e.currentTarget.style.color = '#D14D4D'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent'
                e.currentTarget.style.color = '#4A3F35'
              }}
            >
              ×
            </button>

            {/* Project Cover Image */}
            {cover && (
              <div className="mb-6 rounded-lg overflow-hidden" style={{ border: '1px solid #D4C4B0' }}>
                <Image
                  src={cover}
                  width={800}
                  height={400}
                  alt={title}
                  className="w-full h-auto object-cover"
                />
              </div>
            )}

            {/* Project Title */}
            <h2 className="text-3xl font-bold mb-2" style={{ color: '#4A3F35' }}>
              {title}
            </h2>
            
            {/* Project Type Badge */}
            {type && (
              <span 
                className="inline-block px-3 py-1 rounded-md text-sm font-semibold mb-4"
                style={{ backgroundColor: '#D14D4D', color: '#FFFFFF' }}
              >
                {type}
              </span>
            )}

            {/* Project Stats */}
            <div 
              className="flex flex-wrap gap-6 mb-6 pb-6"
              style={{ borderBottom: '1px solid #D4C4B0' }}
            >
              {visitors && (
                <div style={{ color: '#4A3F35' }}>
                  <span className="font-semibold" style={{ color: '#D14D4D' }}>{visitors}</span> Visitors
                </div>
              )}
              {earned && (
                <div style={{ color: '#4A3F35' }}>
                  <span className="font-semibold" style={{ color: '#D14D4D' }}>{earned}</span> Earned
                </div>
              )}
              {siteAge && (
                <div style={{ color: '#4A3F35' }}>
                  <span className="font-semibold" style={{ color: '#D14D4D' }}>{siteAge}</span>
                </div>
              )}
              {githubStars && (
                <div style={{ color: '#4A3F35' }}>
                  <span className="font-semibold" style={{ color: '#D14D4D' }}>{githubStars}</span> Stars
                </div>
              )}
            </div>

            {/* Full Description */}
            <div 
              className="mb-6 rounded-lg p-6"
              style={{ backgroundColor: '#E8DED0', border: '1px solid #D4C4B0' }}
            >
              <h3 className="text-xl font-semibold mb-3" style={{ color: '#D14D4D' }}>
                Project Description
              </h3>
              <p className="text-base leading-relaxed" style={{ color: '#4A3F35', opacity: 0.9 }}>
                {shortDescription}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              {livePreview && (
                <a
                  href={livePreview}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-lg font-semibold transition-transform flex items-center gap-2 hover:scale-105"
                  style={{ backgroundColor: '#D14D4D', color: '#FFFFFF' }}
                >
                  <PreviewIcon className="w-5 h-5" />
                  Live Preview
                </a>
              )}
              {githubLink && (
                <a
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-lg font-semibold transition-transform flex items-center gap-2 hover:scale-105"
                  style={{ backgroundColor: '#E8DED0', color: '#4A3F35', border: '1px solid #D4C4B0' }}
                >
                  <GithubIcon className="w-5 h-5" />
                  View Code
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default ProjectCard
