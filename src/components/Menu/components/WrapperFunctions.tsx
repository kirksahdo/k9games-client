import React from 'react'
import { IoSearchSharp as SearchIcon } from 'react-icons/io5'
import { MdOutlineShoppingCart as CartIcon } from 'react-icons/md'

const WrapperFunctions = () => {
  return (
    <div className="flex flex-1 gap-[1.19rem] justify-end items-center">
      <SearchIcon
        className="size-8 text-white cursor-pointer"
        aria-label="Search"
      />
      <div className="size-8 flex items-center relative cursor-pointer">
        <div
          className="size-4 rounded-full bg-secondary text-white font-medium absolute flex justify-center items-center top-0 right-0"
          aria-label="Open Cart"
        >
          <span className="text-[0.5rem] leading-normal select-none">12</span>
        </div>
        <CartIcon className="w-[1.80644rem] h-[1.75rem] text-white" />
      </div>
    </div>
  )
}

export default WrapperFunctions
