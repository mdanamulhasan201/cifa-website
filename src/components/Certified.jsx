import { motion } from 'framer-motion'
import image from '../assets/images/imageB.png'

const Certified = () => {
  return (
    <div className='bg-[#000000] py-20 text-white px-8 xl:px-0'>
      <div className='container py-5 lg:py-10 border border-[#c1b27d38] rounded-3xl'>
        <div className='flex flex-col md:flex-row justify-between items-center gap-20'>
          <div className='p-10'>
            <motion.button
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className='bg-[#48361980] px-2 md:px-5 py-1 mb-5 leading-6 rounded-full text-[16px] border border-[#483619d5] bg-gradient-to-r from-white via-[#C1B27D] to-white text-transparent bg-clip-text'
            >
              Globally recognised accreditation!
            </motion.button>
            <div>
              <motion.h1
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className='text-[45px] text-start mb-5 sm:text-[44px] leading-[64px] sm:leading-[56px] font-semibold'
              >
                Accreditation
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.7 }}
                className='text-[#ffffff77] text-[18px] leading-7 font-medium'
              >
                Unleash the power of CPD and kick start your career! CIFA’S
                Continuing Professional Development (CPD) certifications will
                help you gain a competitive edge over your competition!
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.7 }}
                className='text-[#ffffff77] text-[18px] leading-7 mt-5 font-medium'
              >
                To demonstrate our commitment to excellence and dedication to
                providing education at the highest levels, CIFA are proud
                members of the CPD Certification Service.
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
          </div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <img src={image} alt='Certified Accreditation' />
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Certified
