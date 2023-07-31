"use client"
import { useRouter } from 'next/navigation';
import { IoIosArrowBack } from 'react-icons/io';

function BackButton() {
  const navigation = useRouter();

  function handleClick() {
    navigation.back();
  }

  return (
    <button onClick={handleClick} className='text-[#5D5D5D] font-extrabold md:text-base sm:text-sm text-[0.8rem] flex flex-row items-center'>
      <IoIosArrowBack /> <p className='ml-2 '>Go Back</p>
    </button>
  )
}

export default BackButton;
