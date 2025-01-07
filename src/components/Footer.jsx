import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
import logo from '../assets/images/logo.png'
import { Link } from 'react-router-dom'

const Footer = () => {
  const currentYear = new Date().getFullYear() // Get the current year dynamically

  return (
    <div className='bg-[#1C140A] text-white font-aeonik'>
      <div className='container px-8 xl:px-0 py-24'>
        <div className='grid grid-cols-4 md:grid-cols-12 gap-10 md:gap-6'>
          {/* Left Side */}
          <div className='col-span-2 md:col-span-6'>
            <div className='w-[145px]'>
              <img src={logo} alt='Logo' className='w-full' />
            </div>
            <h3 className='text-[14px] text-[#ffffffc5] mt-4'>
              Elevate Your Career
            </h3>
            <div className='mt-5'>
              <p className='capitalize text-[14px] text-[#ffffffc5]'>Email:</p>
              <p>info@cifa.ac</p>
              <div className='flex items-center gap-3 mt-5'>
                <FaLinkedin className='text-xl text-[#ffffffa8]' />
                <FaFacebook className='text-xl text-[#ffffffa8]' />
                <FaInstagram className='text-xl text-[#ffffffa8]' />
              </div>
            </div>
          </div>

          {/* Menu 1 */}
          <div className='col-span-2 md:col-span-2'>
            <div className='flex flex-col gap-5'>
              <h2 className='capitalize text-[16px] text-[#ffffffde] font-semibold'>
                Menu
              </h2>
              <ul className='flex flex-col gap-5 text-[14px] text-[#ffffffc0] capitalize whitespace-nowrap'>
                <li>
                  <Link to='/'>Home</Link>
                </li>
                <li>
                  <Link to='/instructors'>Instructors</Link>
                </li>
                <li>
                  <Link to='/courses'>Courses</Link>
                </li>
                <li>
                  <Link to='/exams'>Exams</Link>
                </li>
                <li>
                  <Link to='/price-list'>Price List</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Menu 2 */}
          <div className='col-span-2 md:col-span-2'>
            <div className='flex flex-col gap-5'>
              <h2 className='capitalize text-[16px] text-[#ffffffde] font-semibold'>
                Menu
              </h2>
              <ul className='flex flex-col gap-5 text-[14px] text-[#ffffffc0] capitalize whitespace-nowrap'>
                <li>
                  <Link to='/accreditation'>Accreditation</Link>
                </li>
                <li>
                  <Link to='/employability-tools'>Employability Tools</Link>
                </li>
                <li>
                  <Link to='/hire-candidates'>Hire Candidates</Link>
                </li>
                <li>
                  <Link to='/corporate-tools'>Corporate Tools</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Menu 3 */}
          <div className='col-span-2 md:col-span-2'>
            <div className='flex flex-col gap-5'>
              <h2 className='capitalize text-[16px] text-[#ffffffde] font-semibold'>
                Menu
              </h2>
              <ul className='flex flex-col gap-5 text-[14px] text-[#ffffffc0] capitalize whitespace-nowrap'>
                <li>
                  <Link to='/'>Home</Link>
                </li>
                <li>
                  <Link to='/university-enrolment'>University Enrolment</Link>
                </li>
                <li>
                  <Link to='/about-cifa'>About CIFA</Link>
                </li>
                <li>
                  <Link to='/faqs'>FAQs</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* sub footer */}
        <div className='md:border-t mt-20 md:border-[#ffffff33]'>
          <div className='mt-10'>
            <div className='flex flex-col md:flex-row justify-between items-center'>
              <ul className='grid grid-cols-2 md:flex   items-center gap-10 text-[#ffffffc0] font-aeonik whitespace-nowrap'>
                <li>
                  <Link>Terms of Use</Link>
                </li>
                <li>
                  <Link>Accessibility Statement</Link>
                </li>
                <li>
                  <Link>Cookies Policy</Link>
                </li>
                <li>
                  <Link>Privacy Policy</Link>
                </li>
              </ul>
              <p className='text-[#ffffffc0] font-aeonik border-[#ffffff33] border-t md:border-none w-full md:text-end text-center py-5 md:py-0 md:mt-0 mt-10'>
                © {currentYear} CIFA. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
