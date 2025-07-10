import clsx from 'clsx'
import React from 'react'

export type RibbonProps = {
  color?: 'primary' | 'secondary'
  size?: 'normal' | 'small'
  children: React.ReactNode
  className?: string
}

const Ribbon = ({
  color = 'primary',
  size = 'normal',
  children,
  className
}: RibbonProps) => {
  const colorClasses = {
    primary: {
      container: 'bg-secondary',
      corner: 'fill-secondary'
    },
    secondary: {
      container: 'bg-secondary-ribbon',
      corner: 'fill-secondary-ribbon'
    }
  }

  const sizeClasses = {
    normal: 'w-[139px] h-[37px]',
    small: 'w-[71px] h-[24px]'
  }

  return (
    <div
      className={clsx('flex flex-col items-end', className)}
      aria-label="ribbon"
    >
      <div
        className={clsx(
          'flex justify-center items-center gap-0',
          sizeClasses[size],
          colorClasses[color].container
        )}
      >
        <span
          className={`font-bold ${size == 'normal' ? 'text-[14px]' : 'text-[10px]'} text-white space tracking-[0.7px] overflow-hidden text-ellipsis p-1`}
        >
          {children}
        </span>
      </div>
      {size == 'normal' ? (
        <svg
          className="-mt-[0.5px]"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="10"
          viewBox="0 0 16 10"
          fill="none"
        >
          <path
            d="M0.0285645 9.54325L15.5316 0.722931H0.0285645V9.54325Z"
            className={colorClasses[color].corner}
          />
          <path
            d="M0.0285645 9.54325L15.5316 0.722931H0.0285645V9.54325Z"
            fill="#1D1D1D"
            fillOpacity="0.44"
          />
        </svg>
      ) : (
        <svg
          className={(clsx(colorClasses[color].corner), '-mt-[0.5px]')}
          xmlns="http://www.w3.org/2000/svg"
          width="11"
          height="6"
          viewBox="0 0 11 6"
          fill="none"
        >
          <path
            d="M0.511353 6L11 0H0.511353V6Z"
            className={colorClasses[color].corner}
          />
          <path
            d="M0.511353 6L11 0H0.511353V6Z"
            fill="#1D1D1D"
            fillOpacity="0.44"
          />
        </svg>
      )}
    </div>
  )
}

export default Ribbon
