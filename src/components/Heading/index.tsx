import clsx from 'clsx'
import React from 'react'

export interface HeadingProps {
  children: React.ReactNode
  color?: 'white' | 'black'
  line?: 'left' | 'bottom'
  lineColor?: 'primary' | 'secondary'
  size?: 'large' | 'small'
}

const Heading = ({
  children,
  color = 'black',
  line,
  lineColor = 'primary',
  size = 'large'
}: HeadingProps) => {
  return (
    <div
      className={clsx(
        'flex flex-col gap-0.75',
        line === 'left' &&
          `border-l-[0.4375rem] border-solid pl-3 border-${lineColor}`
      )}
    >
      <h2
        className={`text-${color} ${size == 'large' ? 'text-xl md:text-2xl' : 'text-[16px]'} font-bold inline-block`}
      >
        {children}
      </h2>
      {line === 'bottom' && (
        <span className={`h-[5px] w-1/3 bg-${lineColor}`}></span>
      )}
    </div>
  )
}

export default Heading
