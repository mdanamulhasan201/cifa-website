import bgImg from '../assets/images/onlinexmBg.png'
import { motion } from 'framer-motion'

const OnlineExam = () => {
  return (
    <div
      className='bg-black py-[300px] text-white font-aeonik flex w-full '
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className='container mx-auto flex px-4'>
        <div className='w-full md:w-7/12'>
          <motion.button
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className='bg-[#48361980] px-2 md:px-5 py-1 mb-5 leading-6 rounded-full text-[16px] border border-[#483619d5] bg-gradient-to-r from-white via-[#C1B27D] to-white text-transparent bg-clip-text'
          >
            online exams!
          </motion.button>

          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className='text-[#FFFFFF] font-medium text-[36px] leading-[44px] w-full md:w-[500px]'
          >
            State of the art examination software to show the highest integrity!
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className='text-[#ffffff77] text-[18px] leading-7 mt-5 font-medium'
          >
            Flexible exams that can be sat anytime 24/7. CIFA uses state of the
            art examination software which enables students to sit exams at any
            time from the comfort of their own home, without any time
            restrictions.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className='text-[#ffffff77] text-[18px] leading-7 mt-5 font-medium'
          >
            CIFA facial recognition examinations enable the verification of a
            CIFA student's identity without the need to be present in a physical
            test centre giving CIFA students complete flexibility.
          </motion.p>
        </div>
        <div></div>
      </div>
    </div>
  )
}

export default OnlineExam
