"use client"
import React, { useState } from 'react'
import SearchSection from './_components/SearchSection'
import CartList from './_components/CartList'

const Dashboard = () => {
  const[userSearchInput, setUserSearchInput] = useState<string>()
  return (
    <div className='p-2'>
        <div className='rounded-md shadow-md shadow-blue-950'>
        <SearchSection onSearchInput={(value:string) => setUserSearchInput(value)} />
        <CartList userSearchInput = {userSearchInput}/>
        </div>
       
    </div>
  )
}

export default Dashboard