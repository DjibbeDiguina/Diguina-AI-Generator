import { UserButton, UserProfile } from '@clerk/nextjs'
import { Search, Wallet2Icon, WalletCardsIcon } from 'lucide-react'
import React from 'react'

const Header = () => {
  return (
    <div className='p-2'>
    <div className='flex justify-between items-center  p-[11px] rounded-md shadow-md shadow-blue-950'>
      <div className='flex gap-4 border-2 max-w-[250px] lg:max-w-lg rounded-md p-2 text-blue-950'>
      <Search/>
      <input type='text' placeholder='Search ...' name='search' id='search' 
      className='outline-none'/>
      </div>
      <div className='flex gap-4 items-center'>
      <h2 className='bg-red-700 rounded-full cursor-pointer text-white p-1 md:px-8 px-4 text-xs '>
      <span className='hidden lg:block'> Join our membership just with 9.9$ </span>  <WalletCardsIcon className='lg:hidden' /> 
      </h2>
     <UserButton />
      </div>
   
    </div>
    </div>
  )
}

export default Header