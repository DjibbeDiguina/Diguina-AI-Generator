import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react'
import React from 'react'

const Billing = () => {
  return (
    <div className=''>
        <div className='flex flex-col justify-center items-center lg:mt-16 '>
                <h2 className='text-3xl font-extrabold text-center text-blue-950 p-4'>Upgrade With Monthly Plan </h2>
            <div className='grid grid-cols-1 gap-10 lg:gap-20 p-5 lg:grid-cols-2'>
                
                {/* card 1 */}
                <div className='border-2 md:w-[400px] shadow-lg shadow-blue-950 h-[550px] py-20 px-10 rounded-lg flex flex-col justify-center  gap-6'>
                    <h2 className='font-bold text-2xl text-center text-blue-950' >Free</h2>
                    <h1 className='text-center text-blue-950 italic'><span className='font-extrabold text-4xl font-'>0 $</span> /month</h1>
                        <p className='flex gap-2 text-violet-950'><Check/> 10000 Words/Month</p>
                        <p className='flex gap-2 text-violet-950'><Check/> 50+ Content Templates</p>
                        <p className='flex gap-2 text-violet-950'><Check/> Ulimeted Download & Copy</p>
                        <p className='flex gap-2 text-violet-950'><Check/> 1 Month of History</p>
                    <p className='bg-red-700 border-2 border-red-700 cursor-pointer text-white rounded-full p-4 text-center hover:bg-white hover:text-blue-950 hover:transition-all  hover:border-blue-950 hover:border-2 font-bold mt-5'>Currently Active Plan </p>
                </div>

                                {/* card 2 */}
                <div className='border-2 md:w-[400px] shadow-lg shadow-blue-950 h-[550px] py-20 px-10 rounded-lg flex flex-col justify-center gap-6'>
                    <h2 className='font-bold text-2xl text-center text-blue-950' >Monthly</h2>
                    <h1 className='text-center text-blue-950 italic'><span className='font-extrabold text-4xl font-'>5 $</span> /month</h1>
                        <p className='flex gap-2 text-violet-950'><Check/> 10000 Words/Month</p>
                        <p className='flex gap-2 text-violet-950'><Check/> 50+ Content Templates</p>
                        <p className='flex gap-2 text-violet-950'><Check/> Ulimeted Download & Copy</p>
                        <p className='flex gap-2 text-violet-950'><Check/> 1 Year of History</p>
                    <p className='font-bold rounded-full p-4 text-center text-blue-950 border-2 border-blue-950 mt-5 hover:bg-red-700  hover:border-red-700 hover:text-white hover:border-2 cursor-pointer hover:transition-all'>Get Started</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Billing