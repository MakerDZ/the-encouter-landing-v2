import React from 'react';
import BlogPreview from '@/components/blog/BlogPreview';
import getMetaData from '../../../lib/md/getMetaData';
import Cursor from '@/components/general/Cursor';
import { Metadata } from 'next';

export const metadata: Metadata = {
  description: 'The Blog : Get the latest info from Encounter',
};

const Blog = () => {
  const blogMetaData = getMetaData("blogs/");
  return (
    <main className='w-full h-auto px-5 md:mt-20 sm:mt-16 xs:mt-14 xxs:mt-12 md:mb-20 sm:mb-16 xs:mb-14 xxs:mb-12'>
      <Cursor />
      <div className='max-w-[70rem] h-auto mx-auto'>
        <div className='lg:max-w-[70rem] h-auto md:max-w-[45rem] sm:max-w-[35rem] max-w-[25rem] mx-auto'>
            <h1 className='text-transparent animate-fade-down animate-duration-1000 animate-ease-out text-center md:text-3xl sm:text-2xl xxs:text-xl text-lg font-black bg-clip-text bg-gradient-to-r from-text_left via-text_middle to-text_right'>The Blog</h1>
            <h2 className='text-[#5D5D5D] animate-fade-down animate-duration-1050 animate-ease-out font-extrabold md:text-xl sm:text-lg xxs:text-base text-sm text-center'>Get the latest info from Encounter</h2>

            <section className='animate-fade-up animate-delay-500 animate-ease-in lg:mx-32 md:mt-20 sm:mt-16 xs:mt-14 xxs:mt-12 grid grid-cols-1 sm:grid-cols-2 place-items-center sm:gap-x-4 sm:gap-y-16 gap-y-11'>
              {
                blogMetaData.map(metaData => {
                  return <BlogPreview key={metaData.slug} {...metaData}/>
                })
              }
            </section>

        </div>
      </div>
    </main>
  )
}

export default Blog