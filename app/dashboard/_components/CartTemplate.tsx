import React from 'react'
import Image from 'next/image'
import { TEMPLATE } from './CartList'
import Link from 'next/link'

const CartTemplate = (item:TEMPLATE) => {
  return (
    <Link href={'dashboard/content/' +item?.slug}>
    <div className='p-4  shadow-lg shadow-blue-950 flex flex-col  gap-2 bg-white rounded-lg mt-4 cursor-pointer hover:scale-105 transition-all '>
        <Image src={item.icon} 
        width={50} height={50}
        alt='AI-Powered Content Creation by Diguina AI Generator'/>
        <h2 className=' font-bold text-blue-950 '>{item.name}</h2>
        <p className='text-gray-600 text-sm line-clamp-3'>{item.desc}</p>
    </div>
    </Link>
  )
}

export default CartTemplate