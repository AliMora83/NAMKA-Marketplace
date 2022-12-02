import React from 'react'
import nk_icon from 'public/nk_icon.png'
import Image from 'next/image'

type Props = {}

function Footer({}: Props) {
  return (
    <div>
         <footer className='flex flex-col items-center text-white justify-between pb-5 pt-10
          fixed bottom-0 left-0 right-0 space-y-3 bg-black mt-5'>
          <a href="https://alimora-portfolio.vercel.app/">
            <Image className='rounded-full h-6 w-6 hover:scale-110 ease-in-out duration-150'
              src={nk_icon} alt="icon" /></a>
            <p className='text-xs px-10 text-gray-500 text-center'>
              Web3 Development by <span className='font-bold'><a href='https://alimora-portfolio.vercel.app/' target='_blank'>Ali Mora</a></span> | NAMKA Marketplace build on Web3</p>
    </footer>
    </div>
  )
}

export default Footer