"use client"
import { useRouter } from 'next/navigation';
import { IoIosArrowBack } from 'react-icons/io';
import useSound from 'use-sound'

function BackButton() {
  const navigation = useRouter();
  const [play, { stop }] = useSound('/audio/click_song.mp3');
  function handleClick() {
    navigation.back();
    play();
  }

  return (
    <button onClick={handleClick} className='text-[#5D5D5D] animate-fade-right font-extrabold md:text-base sm:text-sm text-[0.8rem] flex flex-row items-center mb-4'>
      <IoIosArrowBack /> <p className='ml-2 '>Go Back</p>
    </button>
  )
}

export default BackButton;
