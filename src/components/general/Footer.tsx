import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function Footer() {
  return (
    <footer className='w-full h-auto p-5'>
      <div className='max-w-[70rem] mx-auto hover:opacity-70'>
        <Link href="https://omega-profile.vercel.app/">
            <div className='flex flex-row items-center'>
                <div className='relative md:h-8 md:w-8 sm:h-7 sm:w-7 xxs:h-6 xxs:w-6 lg:mr-3 xxs:mr-2'>
                    <Image
                    src="https://us-east-1.tixte.net/uploads/omega.tixte.co/omega_profile.jpg"
                    alt="Omega Profile"
                    fill
                    className='rounded-full'
                    />
                </div>
                <h1 className='font-bold md:text-lg sm:text-base xxs:text-sm text-[#424242]'>Project By Omega.</h1>
            </div>
        </Link>
      </div>
    </footer>
  )
}

export default Footer