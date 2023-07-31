import DevlogPreview from '@/components/devlog/DevlogPreview';
import Cursor from '@/components/general/Cursor';
import React from 'react';
import getMetaData from '../../../lib/md/getMetaData';

const Devlog = () => {
  const devlogMetaData = getMetaData("devlogs/")
  return (
    <main className='w-full h-auto px-5 md:mt-20 sm:mt-16 xs:mt-14 xxs:mt-12 md:mb-20 sm:mb-16 xs:mb-14 xxs:mb-12'>
      <Cursor />
      <div className='max-w-[70rem] h-auto mx-auto'>
        <div className='lg:max-w-[70rem] h-auto md:max-w-[45rem] sm:max-w-[35rem] max-w-[25rem] mx-auto'>
            <h1 className='text-transparent animate-fade-down animate-duration-1000 animate-ease-out text-center md:text-3xl sm:text-2xl xxs:text-xl text-lg font-black bg-clip-text bg-gradient-to-r from-text_left via-text_middle to-text_right'>Devlog</h1>
            <h2 className='text-[#5D5D5D] animate-fade-down animate-duration-1050 animate-ease-out font-extrabold md:text-xl sm:text-lg xxs:text-base text-sm text-center'>keep in touch with development</h2>

            <section className='animate-fade-up animate-delay-500 animate-ease-in lg:mx-32 md:mt-20 sm:mt-16 xs:mt-14 xxs:mt-12'>
              {
                devlogMetaData.map(metaData => {
                  return <DevlogPreview key={metaData.slug} {...metaData} />
                })
              }
            </section>
        </div>
      </div>
    </main>
  )
}

export default Devlog