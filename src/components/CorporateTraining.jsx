import { motion } from 'framer-motion'
import image from '../assets/images/backgoundImg.png'

const CorporateTraining = () => {
  return (
    <div className='bg-[#000000] py-20 text-white px-8 xl:px-0'>
      <div className='container py-5 lg:py-10 border border-[#c1b27d38] rounded-3xl'>
        <div className='flex flex-col md:flex-row justify-between items-center gap-20 px-10'>
          <div className='w-full md:w-7/12'>
            <motion.h1
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className='text-[45px] text-start mb-5 sm:text-[44px] leading-[64px] sm:leading-[56px] font-semibold'
            >
              Innovative Corporate training solutions.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className='text-[#ffffff77] text-[16px] leading-7 font-medium'
            >
              Develop the skills that your workforce needs with CIFA’S corporate
              training packages. CIFA has innovative features and functions that
              enable corporations to monitor and track their employees'
              continuing professional development progress in real time.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className='text-[#ffffff77] text-[16px] leading-7 mt-5 font-medium'
            >
              The professional workplace is evolving with the ever increasing
              need for upskilling. CIFA has the corporate training solutions to
              meet your companies’ needs.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <button className='bg-[#C1B27D99] mt-10 capitalize border border-[#C1B27DB2] rounded-xl px-6 py-2 hover:bg-transparent transform duration-300'>
                learn more
              </button>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className='w-full md:w-5/12'
          >
            <img src={image} alt='Certified Accreditation' />
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default CorporateTraining
