import { UserButton, UserProfile } from '@clerk/nextjs'
import { Search, Wallet2Icon, WalletCardsIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const Header = () => {
  return (
    <div className='p-2'>
    <div className='flex justify-between items-center  p-[11px] rounded-md shadow-md shadow-blue-950'>
    <Link href={"/dashboard/"} className='md:hidden '>
    <Image
            src='/logo.png' 
            alt="Diguina AI Generator transforming ideas into high-quality content"
            width={150} height={150}
            className='w-[100px] md:hidden'

      />
    </Link>
 

      <div className='gap-4 hidden md:block   border-2 max-w-[250px] lg:max-w-lg md:flex rounded-md p-2 text-blue-950'>
    
      <Search />
      <input type='text' placeholder='Search ...' name='search' id='search' 
      className='outline-none hidden md:block'/>
      </div>
      <div className='flex gap-4 items-center'>
        <Link href='/dashboard/billing'>
        <h2 className='bg-red-700 rounded-full cursor-pointer text-white p-1 md:px-8 px-4 text-xs '>
      <span className='hidden lg:block'> Join our membership just with 9.9$ </span>  <WalletCardsIcon className='lg:hidden' /> 
      </h2>
        </Link>
    
     <UserButton />
      </div>
   
    </div>
    </div>
  )
}

export default Header