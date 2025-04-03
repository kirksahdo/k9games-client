import React from 'react'

export const Main: React.FC<{ title?: string }> = ({ title = 'foo' }) => {
  return (
    <main className="flex flex-col items-center justify-center bg-[#06092b] text-white w-full h-h-full p-12 ">
      <h1>{title}</h1>
    </main>
  )
}
