"use client"
import React, { useEffect } from 'react'
import Image from 'next/image'
import { History, Home, Settings, WalletCards, WalletCardsIcon } from 'lucide-react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/button'


const SideNav = () => {
  const listMenu = [
    {
      name:'Home',
      icon : Home,
      path : '/dashboard',
    },
    {
      name:'History',
      icon : History,
      path : '/dashboard/history',
    },
    {
      name:'Billing',
      icon : WalletCardsIcon,
      path : '/dashboard/billing',
    },
    {
      name:'Setting',
      icon : Settings,
      path : '/dashboard/setting',
    }
  ]

  const path = usePathname();

  useEffect(()=>{
    console.log(path)
  },[])

  return (
    <div className=' shadow-lg shadow-blue-950  p-2 h-screen '>
      <div className='flex justify-center shadow-md shadow-blue-950 rounded-sm p-3'>
     
     <Link href={"/"}>
      <Image 
        src={'/logo.png'}
        width={150} height={150}
        alt='AI-Powered Content Creation by Diguina AI Generator'
      />
     </Link>
      </div>
      
      <div className='mt-7'>
        {listMenu.map((menu, index)=>(
          <Link href={menu.path} title='AI-Powered Content Creation by Diguina AI Generator'>
          <div key={index} className={`flex gap-3 text-blue-950 items-center mt-2 p-3 pl-6 hover:bg-red-700 hover:rounded-xl hover:text-white font-extrabold cursor-pointer ${path == menu.path&&'bg-red-700 text-white cursor-pointer rounded-lg'}`}>
            <menu.icon />
            <h2>{menu.name}</h2>
          </div>
          </Link>
        ))}
        <div className='md:mt-[395px] lg:mt-[395px] xl:mt-[390px] p-5 flex flex-col justify-center items-center shadow-md shadow-blue-950 rounded-md'>
         <div
              className="radial-progress text-red-700"
              style={{ "--value": 70 } as React.CSSProperties & { [key: string]: string | number }}
              role="progressbar" >
           70%
        </div>
        <h2 className='py-2 text-blue-950 font-bold'>3000/10000 Credit Used </h2>
        <Button ><WalletCards/> Upgrade</Button>
      </div>
    </div>
    </div>
  )
}

export default SideNav