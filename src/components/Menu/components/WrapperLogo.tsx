import React from 'react'
import Logo from '../../Logo'

const WrapperLogo = () => {
  return (
    <div className="absolute left-1/2 transform -translate-x-1/2">
      <Logo size="normal" hideText />
    </div>
  )
}

export default WrapperLogo
