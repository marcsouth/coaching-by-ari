import { FaTiktok } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { Button } from "@nextui-org/react";
import { Link } from "@nextui-org/link" 

export default function footer() {
  return (
    <>
    <footer className="w-full bg-black px-4  border-t-2 border-dark-purple py-8">

        <div className="flex flex-wrap w-full justify-center items-center gap-12 mb-6 ">


          
                <Button href='https://www.tiktok.com/@amwbrah' color="default" isIconOnly   variant="light"   as={Link}>
                <FaTiktok size={25}  />
                </Button>
  


                <Button href='https://www.instagram.com/aesthetics.by.ari/' color="default" isIconOnly   variant="light"   as={Link}>
                <FaInstagram size={30}  />
                </Button>


                <Button href='https://www.youtube.com/@Amwbrah' color="default" isIconOnly   variant="light"   as={Link}>
                <FaYoutube size={30}  />
                </Button>


        </div>

        <div className="flex w-full px-4 max-w-md m-auto items-center flex-col gap-4 text-center mb-6"> 
        <Link color="secondary" isExternal >Privacy Policy </Link>
        <Link color="secondary" isExternal >Terms of Service </Link>
        </div>

       <p className="w-full text-gray-400 text-center">Coaching By Ari © 2024</p> 
    </footer>
    </>
  )
}
