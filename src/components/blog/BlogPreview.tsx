"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import useSound from 'use-sound';
import { MetaData } from '../../../lib/md/type/metaData'

function BlogPreview(props: MetaData){
  const [play, { stop }] = useSound('/audio/click_song.mp3');
  return (
    <Link href={`/blog/${props.slug}`} onClick={()=>play()}>
        <section className='lg:max-w-[22rem] md:max-w-[20rem] sm:max-w-[15rem] xxs:max-w-[18rem]'>
          <div className='relative w-full h-auto'>
            <Image
              src={props.thumbnail}
              alt="blog thumbnail"
              width="0"
              height="0"
              sizes="100vw"
              className='w-full h-auto rounded-md'
            />
          </div>
          <h1 className='text-[#5D5D5D] font-extrabold md:text-xl sm:text-lg xxs:text-base text-sm mt-6'>{props.title}</h1>
          <p className='text-[#5D5D5D] sm:mt-4 mt-3 md:text-lg sm:text-base xxs:text-sm text-xs font-medium md:max-w-[33rem] sm:max-w-[29rem] max-w-[25rem]'>
                {props.description}
          </p>
          <p className='text-[#5D5D5D] sm:mt-3 mt-2 md:text-base sm:text-sm xxs:text-xs text-[0.65rem] font-medium md:max-w-[33rem] sm:max-w-[29rem] max-w-[25rem]'>
              {props.date}  · {props.author}
          </p>
      </section>
    </Link>
  )
}

export default BlogPreview