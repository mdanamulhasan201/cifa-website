import { motion } from 'framer-motion'

const Certified = () => {
  return (
    <div className='bg-[#000000] text-white'>
      <div className='container py-20'>
        <motion.button
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className='bg-[#48361980] px-5 py-1 rounded-full text-[16px] border border-[#483619d5] bg-gradient-to-r from-white via-[#C1B27D] to-white text-transparent bg-clip-text'
        >
          Globally recognised accreditation!
        </motion.button>
        <div>
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className='text-[45px] text-center sm:text-start sm:text-[80px] leading-[50px] sm:leading-[88px] font-semibold'
          >
            Accreditation
          </motion.h1>
        </div>
      </div>
    </div>
  )
}

export default Certified
