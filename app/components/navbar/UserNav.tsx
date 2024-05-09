"use client"
import { useState } from "react"
import MenuLink from "./MenuLink"
import useLoginModal from "@/app/hooks/useLoginModal"
import useSignUpModal from "@/app/hooks/useSignUpModal"

const UserNav = () => {
  const [isOpen, setisOpen] = useState(false)
  const loginModal = useLoginModal();
  const signupModal = useSignUpModal();

  return (
    <div className='p-2 relative inline-block border rounded-full'>

      <button 
      onClick={()=> setisOpen(!isOpen)}
      className='flex items-center'
      >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>

<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
</svg>

      </button>
{isOpen && (
  <div className="w-[220px] absolute top-[60px] right-0 bg-white border rounded-xl shadow-md flex flex-col cursor-pointer">
 <MenuLink
 label='Login'
 onClick={()=>
  {
    console.log("button clicked")
  setisOpen(false)
    loginModal.open()
  }}
 />
 <MenuLink
 label='SignUp'
 onClick={()=>
  {
    console.log("button clicked")
    setisOpen(false)
    signupModal.open()
  }}
 />
    
  </div>
)}



    </div>
  )
}

export default UserNav
