import { useState, useEffect } from 'react'
import { RiMenu2Fill, RiMenu3Fill } from 'react-icons/ri'
import logo from '../assets/images/logo.png'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div
      className={`fixed top-0  border-b border-[#5d57456e] left-0 w-full z-20 transition-all duration-300 ${
        isScrolled ? 'bg-black  shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className='container'>
        {/* Desktop Navbar */}
        <div className='hidden md:flex justify-between items-center py-4 px-8 xl:px-0'>
          {/* Icon */}
          <div>
            <RiMenu2Fill className='text-4xl text-white' />
          </div>
          {/* Logo */}
          <div className='w-[145px] h-[51px]'>
            <img src={logo} alt='logo' />
          </div>
          {/* Buttons */}
          <div className='flex items-center gap-10 text-white'>
            <button className='border border-[#C1B27DB2] rounded-xl px-6 py-2 capitalize hover:bg-[#C1B27D99] transform duration-300'>
              login
            </button>
            <button className='bg-[#C1B27D99] capitalize border border-[#C1B27DB2] rounded-xl px-6 py-2 hover:bg-transparent transform duration-300'>
              register
            </button>
          </div>
        </div>

        {/* Mobile Navbar */}
        <div className='block md:hidden'>
          <div className='flex justify-between items-center py-4 px-3'>
            {/* Logo */}
            <div className='w-[88px] h-[31px] sm:w-[145px] sm:h-[51px]'>
              <img src={logo} alt='logo' className='w-full' />
            </div>
            <div className='flex items-center gap-3'>
              {/* Buttons */}
              <div className='flex items-center gap-3 text-white'>
                <button className='border border-[#C1B27DB2] rounded-xl px-4 py-2 sm:px-6 sm:py-2 capitalize hover:bg-[#C1B27D99] transform duration-300'>
                  login
                </button>
                <button className='bg-[#C1B27D99] capitalize border border-[#C1B27DB2] rounded-xl px-4 py-2 sm:px-6 sm:py-2 hover:bg-transparent transform duration-300'>
                  register
                </button>
              </div>

              {/* Icon */}
              <div>
                <RiMenu3Fill className='text-3xl text-white' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
