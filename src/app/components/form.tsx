import { Button } from "@nextui-org/react"



export default function form() {
  return (
    <div className=" max-w-sm p-4 bg-white-0 rounded-xl mx-auto bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50  border-dark-purple border-2">

    <form className='flex flex-col max-w-sm  m-auto gap-2 '>

    <input type="text" placeholder="Name" className="border-2 border-gray-300 p-2 rounded-lg m-2"/>

    <input type="text" placeholder="Email" className="border-2 border-gray-300 p-2 rounded-lg m-2"/>

    <textarea placeholder="Message" className="border-2 border-gray-300 p-2 rounded-lg m-2"/>

    <Button className="border-2 border-gray-300 p-2 rounded-lg m-2" color="secondary">Submit</Button>

    </form>

    </div>
  )
}
