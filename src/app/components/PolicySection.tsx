import React, { useState } from 'react'
import arrowUp from '../assets/arrow-up.svg'

interface PolicySectionProps {
  number: string | React.ReactNode
  title: string
  content: string
}

const PolicySection: React.FC<PolicySectionProps> = ({
  number,
  title,
  content
}) => {
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <section className="flex flex-col w-full max-md:max-w-full">
      <div
        className="flex flex-wrap gap-3.5 items-center py-4 w-full font-bold border-t border-b border-teal-50 border-opacity-20 max-md:max-w-full cursor-pointer"
        onClick={toggleExpansion}
        role="button"
        tabIndex={0}
        aria-expanded={isExpanded}
      >
        <div className="overflow-hidden gap-2 self-stretch px-2 my-auto w-10 h-10 whitespace-nowrap bg-white rounded-[100px] text-neutral-950 flex items-center justify-center">
          {number}
        </div>

        <h2 className="flex-1 shrink self-stretch my-auto text-teal-400 basis-4 max-md:max-w-full">
          {title}
        </h2>

        <img
          loading="lazy"
          src={arrowUp.src}
          alt={isExpanded ? 'Collapse section' : 'Expand section'}
          className={`object-contain shrink-0 self-stretch my-auto w-6 aspect-square transition-transform duration-300 ${
            isExpanded ? 'rotate-180' : ''
          }`}
        />
      </div>
      {isExpanded && (
        <div className="mt-6 text-teal-50 max-md:max-w-full">
          {content.split('\n\n').map((paragraph, index) => (
            <p key={index} className="mb-4">
              {paragraph}
            </p>
          ))}
        </div>
      )}
    </section>
  )
}

export default PolicySection
