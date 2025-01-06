import { motion } from 'framer-motion'
import bannerImg from '../assets/images/banner.png'
import Navbar from '../components/Navbar'
import GradientImg from '../assets/images/Gradient.png'
import { VscDebugStart } from 'react-icons/vsc'

const Home = () => {
  return (
    <div
      className='bg-cover relative'
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className='flex items-center text-white text-2xl relative h-[807px]'>
        {/* Background Gradient */}
        <div className='absolute -top-24'>
          <img
            src={GradientImg}
            alt=''
            className='w-full h-[500px] md:h-full'
          />
        </div>

        {/* Animated Content */}
        <div className='container flex flex-col items-center sm:items-start px-8 xl:px-0'>
          {/* Animated Button */}
          <motion.button
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className='bg-[#48361980] px-5 py-1 font-aeonik rounded-full text-[16px] border border-[#483619d5] bg-gradient-to-r from-white via-[#C1B27D] to-white text-transparent bg-clip-text'
          >
            Elevate Your Career
          </motion.button>

          {/* Animated Heading */}
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className='text-[45px] text-center sm:text-start sm:text-[80px] leading-[50px] sm:leading-[88px] font-semibold'
          >
            Transform <br /> Your{' '}
            <span className='text-[#F6EEC1]'>
              Career in <br /> Finance
            </span>
          </motion.h1>

          {/* Animated Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className='w-full md:w-[450px] xl:w-[550px] pt-10 text-[20px] text-center sm:text-start'
          >
            Earn accredited qualifications online with CIFA and access tools to
            boost your career in finance.
          </motion.p>

          {/* Animated Buttons and Link */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className='flex pt-10 items-center gap-2'
          >
            <button className='bg-[#C1B27D99] text-[16px] capitalize border border-[#C1B27DB2] rounded-xl px-2 sm:px-6 py-2 hover:bg-transparent transform duration-300'>
              learn more
            </button>
            <div className='flex items-center gap-1 cursor-pointer'>
              <VscDebugStart className='text-3xl text-[#cab462b2]' />
              <p className='uppercase text-xs sm:text-xl'>
                Watch introduction video
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Home
