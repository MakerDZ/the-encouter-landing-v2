"use client"
import React from 'react'
import { MetaData } from '../../../lib/md/type/metaData'
import Link from 'next/link'
import useSound from 'use-sound';

const DevlogPreview = (props: MetaData) => {
  const [play, { stop }] = useSound('/audio/click_song.mp3');
  return (
    <section className='w-full h-auto'>
        <section className='flex flex-row justify-start'>
            {/* Tracking line */}
            <div className='flex flex-col'>
                <div className='md:h-5 md:w-5 sm:h-4 sm:w-4 xxs:h-3 xxs:w-3 border-[#FFFFFF] z-10 md:border-4 xxs:border-2 rounded-full bg-[#D804F9]'></div>
                <div className='flex-1 md:w-[0.4rem] xxs:w-1 bg-[#D804F9] mx-auto'></div>
                {/* The "flex-1" class will make this div expand to fill the remaining space in the flex container */}
            </div>
            <div className='w-full h-auto flex flex-col md:flex-row'>
                {/* Actual Date */}
                <div className='text-[#5D5D5D] md:text-lg sm:text-base xxs:text-sm text-xs font-bold md:w-[11rem] sm:w-[9rem] xxs:w-[6rem] text-center'>
                    {props.date}
                </div>
                
                <Link href={`/devlog/${props.slug}`} onClick={()=>play()}>
                    {/* Content */}
                    <div className='max-w-[37rem] md:px-0 sm:px-6 px-2 rounded-md'>
                        <h1 className='text-[#424242] font-extrabold md:text-xl sm:text-lg xxs:text-base text-sm md:mt-0 mt-2'>{props.title}</h1>
                        <p className='text-[#5D5D5D] sm:mt-4 mt-2 md:text-lg sm:text-base xxs:text-sm text-xs font-medium'>
                        {props.description}
                        </p>
                        <p className='text-[#D804F9] sm:mt-3 mt-2 md:text-base sm:text-sm xxs:text-xs text-[0.65rem] font-bold md:max-w-[33rem] sm:max-w-[29rem] max-w-[25rem]'>
                            Read Detail
                        </p>
                    </div>
                </Link>
            </div>
        </section>
        <section className='md:w-5 sm:w-4 xxs:w-3 lg:h-32 md:h-20 sm:h-16 xs:h-14 xxs:h-12'>
            <div className='md:w-[0.4rem] xxs:w-1 h-full bg-[#D804F9] mx-auto'></div>
        </section>
    </section>
  )
}

export default DevlogPreview