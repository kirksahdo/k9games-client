import clsx from 'clsx'
import React, { ComponentType } from 'react'

export type ButtonProps = {
  size: 'small' | 'medium' | 'large'
  text: string
  mode?: 'primary' | 'secondary'
  Icon?: ComponentType<{ className?: string }>
  fullWidth?: boolean
  onClick?: () => void
}

const Button = ({
  size = 'medium',
  mode = 'primary',
  onClick,
  text,
  fullWidth,
  Icon,
  ...props
}: ButtonProps) => {
  const sizeClasses = {
    large: {
      icon: 'h-5 w-5',
      size: 'w-[9.375rem] h-[3.125rem] text-base'
    },
    medium: {
      icon: 'h-4 w-4',
      size: 'w-[7.625rem] h-[2.5rem] text-sm'
    },
    small: {
      icon: 'h-3.5 w-3.5',
      size: 'w-[5.9375rem] h-[1.875rem] text-xs'
    }
  }

  const modeClasses = {
    primary:
      'bg-(image:--gradient-primary) hover:bg-(image:--gradient-primary-hover) text-white',
    secondary: 'bg-transparent text-primary'
  }

  return (
    <button
      type="button"
      className={clsx(
        sizeClasses[size].size,
        modeClasses[mode],
        'rounded-sm cursor-pointer flex items-center justify-center gap-1.5 font-medium',
        fullWidth && 'w-full'
      )}
      onClick={onClick}
      {...props}
    >
      {Icon && <Icon className={sizeClasses[size].icon} />}
      <span>{text}</span>
    </button>
  )
}

export default Button
