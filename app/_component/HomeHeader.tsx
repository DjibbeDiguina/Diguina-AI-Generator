
import { UserIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'




import React from 'react'
 
const HomeHeader = () => {

  return (
    <div className='bg-white p-4 flex justify-between shadow-sm shadow-blue-950 rounded-md items-center   '>
        <Image
            src='/logo.png' 
            alt="Diguina AI Generator transforming ideas into high-quality content"
            width={150} height={150}
            className='w-[100px]'

         />
<Link href={'/dashboard'} title="Google AI Research" >
<button  className='text-xs md:text-md px-4 border-blue-950  py-2 border-l-4 font-bold text-red-700 flex items-center gap-2 shadow-sm rounded-sm
          hover:bg-red-700 hover:text-white hover:rounded-lg transition-all'> 
           <UserIcon className='text-blue-950'/> Get Starter
        </button>

</Link>

    </div>
  )
}

export default HomeHeader