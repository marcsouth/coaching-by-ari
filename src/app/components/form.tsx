import React from 'react'

export default function form() {
  return (
    <form className='flex flex-col max-w-sm w-full m-auto px-4'>

    <input type="text" placeholder="Name" className="border-2 border-gray-300 p-2 rounded-lg m-2"/>

    <input type="text" placeholder="Email" className="border-2 border-gray-300 p-2 rounded-lg m-2"/>

    <textarea placeholder="Message" className="border-2 border-gray-300 p-2 rounded-lg m-2"/>

    <button className="border-2 border-gray-300 p-2 rounded-lg m-2">Submit</button>




    </form>
  )
}
