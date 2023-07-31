'use client'

import React, { Fragment, useEffect, useState } from 'react';
import { HiMenu } from 'react-icons/hi'
import { Menu, Transition } from '@headlessui/react'
import Image from 'next/image';
import Link from 'next/link';
import useSound from 'use-sound';

const NavBar = () => {
    const [play, { stop }] = useSound('/audio/click_song.mp3');
    const [scroll , setScroll] = useState(0);
    useEffect(()=>{
        if(typeof window != 'undefined'){
            window.addEventListener('scroll',updateScroll);
            return () => {
                window.removeEventListener('scroll', updateScroll);
            }
        }
    },[scroll])
    function updateScroll() {
        setScroll(window.scrollY);
    }
    function classNames(...classes: string[]) {
        return classes.filter(Boolean).join(' ')
    }
    return (
        <nav className={scroll >= 90 ? "w-full h-auto sticky top-0 z-50 transition-colors duration-500 backdrop-blur-xl bg-white/20 p-5 border-b border-slate-900/10" : "w-full h-auto sticky top-0 z-50 transition-colors duration-500 bg-white supports-backdrop-blur:bg-white/95 p-5"}>
            <div className='max-w-[70rem] mx-auto flex flex-row justify-between items-center'>
                {/* Logo */}
                <Link href="/" onClick={()=>{play()}}>
                    <div className='flex flex-row items-center'>
                        <div className='relative h-10 w-10 mr-3'>
                            <Image
                            src="https://us-east-1.tixte.net/uploads/omega.tixte.co/encounter_pfp_mobile.png"
                            alt="The Encounter Logo"
                            fill
                            className='rounded-md'
                            />
                        </div>
                        <h1 className='text-xl font-extrabold text-[#424242]'>The Encounter</h1>
                    </div>
                </Link>
                

                {/* Desktop Menu */}
                <div className='hidden lg:flex flex-row text-[#5D5D5D] font-bold text-lg space-x-14'>
                    <Link href="/devlog" onClick={() => {play()}} className='hover:text-[#D804F9]'>
                        Devlog
                    </Link>

                    <Link href="/blog" onClick={() => {play()}} className='hover:text-[#D804F9]'>
                        Blog
                    </Link>

                    <Link href="/faq" onClick={() => {play()}} className='hover:text-[#D804F9]'>
                        FAQ
                    </Link>
                </div>
                
                {/* Desktop Status */}
                <div className='hidden lg:flex flex-row items-center border-[#D7D7D7] border-2 rounded-full px-2 py-1 mr-3 lg:px-4 text-[#5D5D5D] font-semibold text-xl'>
                    <div className='xxs:w-[18px] xxs:h-[18px] xs:w-[23px] xs:h-[23px] relative mr-1 lg:mr-2'>
                        <Image
                        src="https://us-east-1.tixte.net/uploads/omega.tixte.co/hammer.svg"
                        alt="omega_profile_pic"
                        fill
                        className='rounded-full'
                        />
                    </div>
                    <h3>under development</h3>
                </div>

                {/* Mobile Menu */}
                <Menu as="div" className="lg:hidden" >
                    <Menu.Button>
                        < HiMenu onClick={() => {play()}} className='text-[#424242] text-3xl sm:text-4xl xl:hidden'/>
                    </Menu.Button>
                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Menu.Items className="absolute right-0 z-10 mt-5 w-56 origin-top-right rounded-md border-[#D0D7DE] border-1 bg-[#FFFFFF] shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div className="py-2">
                                <Menu.Item>
                                    {({ active }: { active: boolean }) => (
                                        <Link href="/devlog" onClick={() => {play()}} className={classNames(
                                        active ? 'text-[#D804F9]' : 'text-[#5D5D5D]',
                                        'block px-4 py-2 text-base font-semibold'
                                        )}>
                                        Devlog
                                        </Link>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({ active }: { active: boolean }) => (
                                        <Link
                                        onClick={() => {play()}}
                                        href="/blog"
                                        className={classNames(
                                            active ? ' text-[#D804F9]' : 'text-[#5D5D5D]',
                                            'block px-4 py-2 text-base font-semibold'
                                        )}
                                        >
                                        Blog
                                        </Link>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({ active }: { active: boolean }) => (
                                        <Link
                                        onClick={() => {play()}}
                                        href="/faq"
                                        className={classNames(
                                            active ? 'text-[#D804F9]' : 'text-[#5D5D5D]',
                                            'block px-4 py-2 text-base font-semibold'
                                        )}
                                        >
                                        FAQ
                                        </Link>
                                    )}
                                </Menu.Item>
                            </div>
                        </Menu.Items>
                    </Transition>
                </Menu>
            </div>            
        </nav>
    )
}

export default NavBar