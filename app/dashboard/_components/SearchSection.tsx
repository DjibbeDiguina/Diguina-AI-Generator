"use client"
import { Search } from 'lucide-react'
import React from 'react'

const SearchSection = ({onSearchInput}:any) => {
  return (
    <div className='flex flex-col items-center justify-center bg-red-700  p-8 rounded-t-md '>
        <h1 className='text-3xl font-bold text-white'>Browse All Templates</h1>
        <p className='text-white mb-3'>What would you like to create today?</p>
        <div className='flex  gap-4 border-2 bg-white text-blue-950 rounded-md p-2 max-w-sm w-full'>
            <Search />
            <input type='text' placeholder='Search ...'
            onChange={(even)=>onSearchInput(even.target.value)}
            className='outline-none  bg-transparent'
            />
        </div>
        

    </div>
  )
}

export default SearchSection