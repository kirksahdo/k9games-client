import clsx from 'clsx'

type TailwindBreakpoint = 'sm' | 'md' | 'lg' | 'xl' | '2xl'

export type MediaMatchProps = {
  lessThan?: TailwindBreakpoint
  greaterThan?: TailwindBreakpoint
  children: React.ReactNode
}

const MidiaMatch = ({ lessThan, children, greaterThan }: MediaMatchProps) => {
  if (!lessThan && !greaterThan) return null

  const lessThanClasses: Record<TailwindBreakpoint, string> = {
    sm: 'sm:hidden',
    md: 'md:hidden',
    lg: 'lg:hidden',
    xl: 'xl:hidden',
    '2xl': '2xl:hidden'
  }

  const greaterThanClasses: Record<TailwindBreakpoint, string> = {
    sm: 'max-sm:hidden',
    md: 'max-md:hidden',
    lg: 'max-lg:hidden',
    xl: 'max-xl:hidden',
    '2xl': 'max-2xl:hidden'
  }

  return (
    <div
      className={clsx(
        lessThan && lessThanClasses[lessThan],
        greaterThan && greaterThanClasses[greaterThan]
      )}
    >
      {children}
    </div>
  )
}

export default MidiaMatch
