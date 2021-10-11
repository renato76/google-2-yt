import Image from 'next/image'
import { useRouter } from 'next/router'
import { useRef } from 'react'
import { XIcon } from '@heroicons/react/solid'
import { SearchIcon } from '@heroicons/react/outline'
import Avatar from '../components/Avatar'
import HeaderOptions from './HeaderOptions'

function Header() {
  const router = useRouter()
  const searchInputRef = useRef(null)

  const search = (e) => {
    e.preventDefault()
    const term = searchInputRef.current.value

    if (!term) return

    router.push(`/search?term=${term}`)
  }

  return (
    <header className="sticky top-0 bg-white">
      <div className="flex w-full p-6 items-center">
        <Image 
          src="https://www.google.co.uk/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" 
          height={40}
          width={120}
          onClick={() => router.push("/")}
          className="cursor-pointer"
        />
        <form className="flex flex-grow px-6 py-3 ml-10 mr-5 border border-gray-200 rounded-full shadow-lg max-w-3xl items-center  ">
          <input 
            ref={searchInputRef} 
            className="flex-grow w-full focus:outline-none" 
            type="text" 
          />
          <XIcon 
            className="h-7 sm:mr-3 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125" 
            onClick={() => (searchInputRef.current.value = "")}
          />
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Google_mic.svg/1425px-Google_mic.svg.png" 
            className="mr-3 h-5 hidden sm:inline-flex border-l-2 pl-4 border-gray-300" 
          />
          <SearchIcon 
            className="h-6 text-blue-500 hidden sm:inline-flex"
          />
          <button hidden type="submit">Search</button>
        </form>
        <Avatar 
          url="https://i2.wp.com/www.cssscript.com/wp-content/uploads/2020/12/Customizable-SVG-Avatar-Generator-In-JavaScript-Avataaars.js.png?fit=438%2C408&ssl=1" 
          className="ml-auto"
          // the above classname is passed as a prop to Avatar
        />
      </div>
      <HeaderOptions />
    </header>
  )
}

export default Header
