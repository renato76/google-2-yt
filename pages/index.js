import Head from 'next/head'
import Avatar from '../components/Avatar'
import { MicrophoneIcon, ViewGridIcon } from '@heroicons/react/solid'
import { SearchIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import Footer from '../components/Footer'
import { useRef } from 'react'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()
  const searchInputRef = useRef(null)

  const search = (e) => {
    console.log('search clicked', search)
    e.preventDefault();
    const term = searchInputRef.current.value
    console.log(term)
    if (!term) return
    router.push(`/search?term=${term}`)
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Head>
        <title>Google</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    {/* Header */}
      <header className="flex w-full px-6 py-3 justify-between text-sm text-gray-700">
        {/* left */}
        <div className="flex space-x-4 items-center">
          <p className="link">About</p>
          <p className="link">Store</p>
        </div>

        {/* right  */}
        <div className="flex space-x-4 items-center">
          <p className="link">Gmail</p>
          <p className="link">Images</p>

          {/* icon */}

          <ViewGridIcon className="h-10 w-10 p-2
          rounded-full hover:bg-gray-100 cursor-pointer " />

          <Avatar url="https://i2.wp.com/www.cssscript.com/wp-content/uploads/2020/12/Customizable-SVG-Avatar-Generator-In-JavaScript-Avataaars.js.png?fit=438%2C408&ssl=1" />
        </div>
      </header>

    {/* Body */}
      <form className="flex flex-col mt-10 items-center flex-grow w-4/5">
        <Image 
          src="https://www.google.co.uk/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" 
          alt="" 
          height={92} 
          width={272} 
        />
        <div className="flex w-full mt-5 hover:shadow-lg 
        focus-within:shadow-lg max-w-md rounded-full border 
        border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl" >
          <SearchIcon className="h-5 mr-3 text-gray-500 " />
          <input ref={searchInputRef} type="text" className="flex-grow focus:outline-none" />
          {/* <MicrophoneIcon className="h-5"/> */}
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Google_mic.svg/1425px-Google_mic.svg.png" className="h-5" />
        </div>
        <div className="flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4">
          <button onClick={search} className="btn">Google Search</button>
          <button onClick={search} className="btn">Im feeling lucky</button>
          </div>
        </form>

      <Footer />

    </div>
  )
}