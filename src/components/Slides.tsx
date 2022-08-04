import React from 'react'

type Props = {}

export default function Slides({}: Props) {
  return (
    <div className='h-full bg-yellow-500 flex'>
        <div className='h-full bg-red-500 w-2/12'></div>
        <div className='h-full w-8/12'></div>
        <div className='h-full bg-red-500 w-2/12'></div>
    </div>
  )
}