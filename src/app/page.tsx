"use client"

import { Disclosure, Transition } from '@headlessui/react'
import { AiOutlineRight } from 'react-icons/ai';
import Image from 'next/image'
import Link from 'next/link'
import useSound from 'use-sound';
import { useEffect } from 'react';
import AnimatedCursor from 'react-animated-cursor';

export default function Home() {
  const [play, { stop }] = useSound('/audio/click_song.mp3');
  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
  }
  return (
    <main className='w-full h-auto px-5 md:mt-20 sm:mt-16 xs:mt-14 xxs:mt-12 md:mb-20 sm:mb-16 xs:mb-14 xxs:mb-12'>
      <AnimatedCursor 
        showSystemCursor={true}
        innerSize={0}
        outerSize={35}
        innerScale={1}
        outerScale={2}
        outerAlpha={0}
        innerStyle={{
          backgroundColor: '#00000F'
        }}
        outerStyle={{
          border: '1px solid #00000F'
        }}
      />
      <div className='max-w-[70rem] h-auto mx-auto'>

        <div className='lg:max-w-[70rem] h-auto md:max-w-[45rem] sm:max-w-[35rem] max-w-[25rem] mx-auto'>
          <h1 className='text-transparent animate-fade-down animate-duration-1000 animate-ease-out text-center md:text-3xl sm:text-2xl xxs:text-xl text-lg font-black bg-clip-text bg-gradient-to-r from-text_left via-text_middle to-text_right'>Make A Paris Anonymously On Discord</h1>
          <h2 className='text-[#5D5D5D] animate-fade-down animate-duration-1050 animate-ease-out font-extrabold md:text-xl sm:text-lg xxs:text-base text-sm text-center'>With Random Burmese People.</h2>
          <p className='text-[#5D5D5D] animate-fade-down animate-duration-1900 md:mt-9 sm:mt-7 xxs:mt-5 mb-6 md:text-lg sm:text-base xxs:text-sm text-xs font-semibold md:max-w-[33rem] sm:max-w-[29rem] max-w-[25rem] mx-auto text-center'>
            Encounter is a Discord bot that allows you to make anonymous matches with people from servers where the bot is invited.
          </p>
          <Link href="https://discord.gg/CWFhpNjA2J">
            <button onClick={()=>{play()}} className='flex animate-fade-down animate-duration-2300 items-center md:text-lg sm:text-base xxs:text-sm text-xs  font-extrabold text-white bg-[#6867F9] xl:px-7 xl:py-2 lg:px-[1.6rem] lg:py-[0.35rem] md:px-[1.45rem] md:py-[0.3rem] sm:px-[1.3rem] py-[0.29rem] px-[1.2rem] rounded-lg mx-auto btn-animation'>
                  Join Discord
            </button>
          </Link>
          <section className='lg:mx-32 md:mt-20 sm:mt-16 xs:mt-14 xxs:mt-12'>
            <h3 className='text-[#424242] font-extrabold md:text-2xl sm:text-xl xxs:text-lg animate-fade-down animate-duration-2300'>✌️ Meet buddies, homies, soulmate!</h3>
            <p className='text-[#5D5D5D] mt-4 mb-2 md:text-xl sm:text-lg xxs:text-base text-xs font-semibold animate-fade-down animate-duration-2300'>
            Simply click the match button, select your desired options, and wait for the anonymous chat. That's it! There are three main features.
            </p>
            <Disclosure as="div" className='animate-flip-down animate-delay-[300ms]'>
              {({ open }: { open: boolean }) => (
                <>
                  {
                    useEffect(()=> {
                      play();
                    }, [open])
                  }
                  <Disclosure.Button className={classNames(open ? 'border-l-2 border-r-2 border-t-2 border-b-2 rounded-t-md' : 'border-2 rounded-md' , 'bg-[#F5F5F5] text-[#424242] md:mt-5 sm:mt-4 xxs:mt-3  w-full md:text-xl md:py-4 sm:py-3 xxs:py-2 sm:text-lg xxs:text-base text-xs font-bold')}>
                    <div className='w-full flex flex-row px-4 items-center justify-between'>
                      <h3>🚀 Quick Private Match</h3>
                      <AiOutlineRight className={classNames(
                                        open ? 'rotate-90 transform transition delay-200' : 'transition delay-200',
                                        'stroke-current stroke-2'
                    )}/>
                    </div>
                  </Disclosure.Button>
                  <Transition
                    enter="transform transition duration-700 ease-in-out"
                    enterFrom="-translate-y-full"
                    enterTo="translate-y-0"
                    leave="transform transition ease-in-out duration-700"
                    leaveFrom="translate-y-full"
                    leaveTo="-translate-y-full"
                  >
                    <Disclosure.Panel className='bg-[#F5F5F5] text-[#424242] rounded-b-md border-l-2 border-r-2 border-b-2  md:text-xl sm:text-lg xxs:text-base text-xs font-semibold px-4 md:py-4 sm:py-3 xxs:py-2'>
                      No
                    </Disclosure.Panel>
                  </Transition>
                </>
              )}
            </Disclosure>

            <Disclosure as="div" className='animate-flip-down animate-delay-[1000ms]'>
              {({ open }: { open: boolean }) => (
                <>
                  {
                    useEffect(()=> {
                      play();
                    }, [open])
                  }
                  <Disclosure.Button className={classNames(open ? 'border-l-2 border-r-2 border-t-2 border-b-2 rounded-t-md' : 'border-2 rounded-md' , 'bg-[#F5F5F5] text-[#424242] md:mt-5 sm:mt-4 xxs:mt-3  w-full md:text-xl md:py-4 sm:py-3 xxs:py-2 sm:text-lg xxs:text-base text-xs font-bold')}>
                    <div className='w-full flex flex-row px-4 items-center justify-between'>
                      <h3>😎 Quick Casual Match</h3>
                      <AiOutlineRight className={classNames(
                                        open ? 'rotate-90 transform transition delay-200' : 'transition delay-200',
                                        'stroke-current stroke-2'
                    )}/>
                    </div>
                  </Disclosure.Button>
                  <Transition
                    enter="transform transition duration-700 ease-in-out"
                    enterFrom="-translate-y-full"
                    enterTo="translate-y-0"
                    leave="transform transition ease-in-out duration-700"
                    leaveFrom="translate-y-full"
                    leaveTo="-translate-y-full"
                  >
                    <Disclosure.Panel className='bg-[#F5F5F5] text-[#424242] rounded-b-md border-l-2 border-r-2 border-b-2  md:text-xl sm:text-lg xxs:text-base text-xs font-semibold px-4 md:py-4 sm:py-3 xxs:py-2'>
                      No
                    </Disclosure.Panel>
                  </Transition>
                </>
              )}
            </Disclosure>

            <Disclosure as="div" className='animate-flip-down animate-delay-[1500ms]'>
              {({ open }: { open: boolean }) => (
                <>
                  {
                    useEffect(()=> {
                      play();
                    }, [open])
                  }
                  <Disclosure.Button className={classNames(open ? 'border-l-2 border-r-2 border-t-2 border-b-2 rounded-t-md' : 'border-2 rounded-md' , 'bg-[#F5F5F5] text-[#424242] md:mt-5 sm:mt-4 xxs:mt-3  w-full md:text-xl md:py-4 sm:py-3 xxs:py-2 sm:text-lg xxs:text-base text-xs font-bold')}>
                    <div className='w-full flex flex-row px-4 items-center justify-between'>
                      <h3>✉️ Envelope Message</h3>
                      <AiOutlineRight className={classNames(
                                        open ? 'rotate-90 transform transition delay-200' : 'transition delay-200',
                                        'font-extrabold'
                    )}/>
                    </div>
                  </Disclosure.Button>
                  <Transition
                    enter="transform transition duration-700 ease-in-out"
                    enterFrom="-translate-y-full"
                    enterTo="translate-y-0 "
                    leave="transform transition ease-in-out duration-700"
                    leaveFrom="translate-y-full"
                    leaveTo="-translate-y-full"
                  >
                    <Disclosure.Panel className='bg-[#F5F5F5] text-[#424242] rounded-b-md border-l-2 border-r-2 border-b-2  md:text-xl sm:text-lg xxs:text-base text-xs font-semibold px-4 md:py-4 sm:py-3 xxs:py-2'>
                      No
                    </Disclosure.Panel>
                  </Transition>
                </>
              )}
            </Disclosure>

            <h3 className='text-[#424242] md:mt-20 sm:mt-16 xs:mt-14 xxs:mt-12 font-extrabold md:text-2xl sm:text-xl xxs:text-lg'>🔒 Your privacy, our first priority!</h3>
            <p className='text-[#5D5D5D] mt-4 mb-2 md:text-xl sm:text-lg xxs:text-base text-xs font-semibold'>
              As I mentioned, the whole system works anonymously with randomly generated profile pictures and names that are used for only one session. No one will be able to know your true identity until you choose to reveal it. The connection and randomly generated identity will be fully destroyed after ending the chat session.
            </p>
            
            <h3 className='text-[#424242] md:mt-20 sm:mt-16 xs:mt-14 xxs:mt-12 font-extrabold md:text-2xl sm:text-xl xxs:text-lg'>🌱 Let's grow it together!</h3>
            <p className='text-[#5D5D5D] mt-4 mb-2 md:text-xl sm:text-lg xxs:text-base text-xs font-semibold'>
              The bot connects people from servers where it is invited. If there are only a few servers, it's challenging to make matches. So, I really need you guys' help to provide a better service. Let’s grow it together. Let’s enjoy it together.
            </p>

            <h3 className='text-[#424242] md:mt-20 sm:mt-16 xs:mt-14 xxs:mt-12 font-extrabold md:text-2xl sm:text-xl xxs:text-lg'>❓ Why am I building this?</h3>
            <p className='text-[#5D5D5D] mt-4 mb-2 md:text-xl sm:text-lg xxs:text-base text-xs font-semibold'>
              Long story short, two years ago, I imagined creating a bot that would primarily focus on making pairs between random Burmese people on Discord. However, to my surprise, such a bot still doesn't exist. Therefore, I have made the decision to build one on my own.
            </p>

          </section>
        </div>
      </div>
    </main>
  )
}
