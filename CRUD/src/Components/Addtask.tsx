import React from 'react'
import Navbar from './Navbar'
import Input from './Input'

type Props = {}

const Addtask = (props: Props) => {
  return (
    <div className='h-screen bg-gray-900'>
        <Navbar />
        <Input />
    </div>
  )
}

export default Addtask