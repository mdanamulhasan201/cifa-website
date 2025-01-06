import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
import logo from '../assets/images/logo.png'
import { Link } from 'react-router-dom'

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Get the current year dynamically

  return (
    <div className='bg-[#1C140A] text-white font-aeonik'>
      <div className='container px-8 xl:px-0 py-24'>
        <div className='flex flex-col md:flex-row justify-between'>
          {/* left side */}
          <div className='w-6/12'>
            <div className='w-[145px]'>
              <img src={logo} alt='' className='w-full' />
            </div>
            <h3 className='text-[14px] text-[#ffffffc5] mt-4'>
              Elevate Your Career
            </h3>
            <div className='mt-5'>
              <p className='capitalize text-[14px] text-[#ffffffc5]'>email:</p>
              <p>info@cifa.ac</p>
              <div className='flex items-center gap-3 mt-5'>
                <FaLinkedin className='text-xl text-[#ffffffa8]' />
                <FaFacebook className='text-xl text-[#ffffffa8]' />
                <FaInstagram className='text-xl text-[#ffffffa8]' />
              </div>
            </div>
          </div>
          {/* right side */}
          <div className='w-6/12'>
            <div className='flex flex-wrap justify-between'>
              <div className='flex flex-col  gap-5'>
                <h2 className='capitalize text-[16px] text-[#ffffffde] font-semibold'>
                  menu
                </h2>
                <ul className='flex flex-col gap-5 font-[14px] text-[#ffffffc0] capitalize'>
                  <li>
                    <Link>Home</Link>
                  </li>
                  <li>
                    <Link>instructors</Link>
                  </li>
                  <li>
                    <Link>courses</Link>
                  </li>
                  <li>
                    <Link>exams</Link>
                  </li>
                  <li>
                    <Link>price list</Link>
                  </li>
                </ul>
              </div>
              <div className='flex flex-col gap-5'>
                <h2 className='capitalize text-[16px] text-[#ffffffde] font-semibold'>
                  menu
                </h2>
                <ul className='flex flex-col gap-5 font-[14px] text-[#ffffffc0] capitalize'>
                  <li>
                    <Link>accreditation</Link>
                  </li>
                  <li>
                    <Link>Employability Tools</Link>
                  </li>
                  <li>
                    <Link>hire candidates</Link>
                  </li>
                  <li>
                    <Link>corporate tools</Link>
                  </li>
                </ul>
              </div>
              <div className='flex flex-col gap-5'>
                <h2 className='capitalize text-[16px] text-[#ffffffde] font-semibold'>
                  menu
                </h2>
                <ul className='flex flex-col gap-5 font-[14px] text-[#ffffffc0] capitalize'>
                  <li>
                    <Link>Home</Link>
                  </li>
                  <li>
                    <Link>university enrolment</Link>
                  </li>
                  <li>
                    <Link>about CIFA</Link>
                  </li>
                  <li>
                    <Link>FAQs</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* sub footer */}
        <div className='border-t mt-20 border-[#ffffff33]'>
          <div className='mt-10'>
            <div className='flex justify-between items-center'>
              <ul className='flex flex items-center gap-5 text-[#ffffffc0] font-aeonik'>
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
              <p className='text-[#ffffffc0] font-aeonik'>
                © {currentYear} CIFA. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
