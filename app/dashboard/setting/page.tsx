import { UserProfile } from '@clerk/nextjs'
import React from 'react'

const setting = () => {
  return (
    <div className='flex h-screen justify-center items-center'>
        <UserProfile  />
    </div>
  )
}

export default setting