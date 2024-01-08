import React, { useEffect } from 'react'
import { ModeToggle } from './theme'
import { Button } from '../ui/button'

import { LogOut } from 'lucide-react'
import { useRouter } from 'next/navigation'

const Navbar = () => {
      const router = useRouter()
      const onLogout = () => {
            localStorage.removeItem('username')
            router.push('/login')
          
      }
  return (
        <header className="dark:text-gray-400 dark:bg-gray-900 text-gray-900 bg-gray-200  body-font">
              <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <a className="flex title-font font-medium items-center dark:text-white text-black mb-4 md:mb-0">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                          </svg>
                          <span className="ml-3 text-xl">User</span>
                    </a>
                    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                          <a className="mr-5 hover:text-white">First Link</a>
                          <a className="mr-5 hover:text-white">Second Link</a>
                          
                    </nav>
                    <div className='px-3'>

                    <ModeToggle />
                    </div>
                    <Button variant={"destructive"} onClick={onLogout} className=' flex items-center gap-2' >
                          <LogOut className='w-4 h-4' />
                          Log Out
                    </Button>
              </div>
        </header>
  )
}

export default Navbar