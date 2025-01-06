import bgImg from '../assets/images/EmployabilityImg.png'
import { motion } from 'framer-motion'
import img1 from '../assets/images/employability/img1.png'
import img2 from '../assets/images/employability/img2.png'

const EmployabilityTools = () => {
  return (
    <div className='py-20 bg-black '>
      <div
        className='py-20 md:py-[200px] text-white font-aeonik flex w-full '
        style={{
          backgroundImage: `url(${bgImg})`,
          backgroundSize: 'cover'
          // backgroundPosition: 'center'
          // backgroundAttachment: 'fixed'
        }}
      >
        <div className='container mx-auto flex px-4 relative'>
          <div className='hidden 2xl:block'>
            {/* grap1 */}
            <div className='w-[162px] absolute left-96 -bottom-28'>
              <img src={img1} alt='' className='w-full' />
            </div>
            {/* grap2 */}
            <div className='w-[162px] absolute left-64 -bottom-44'>
              <img src={img2} alt='' className='w-full' />
            </div>
          </div>
          <div className='w-full md:w-6/12  hidden lg:block'></div>
          <div className='w-full md:w-5/12'>
            <motion.button
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className='bg-[#48361980] px-2 md:px-5 py-1 mb-5 leading-6 rounded-full text-[16px] border border-[#483619d5] bg-gradient-to-r from-white via-[#C1B27D] to-white text-transparent bg-clip-text'
            >
              Employability Tools
            </motion.button>

            <motion.h1
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className='text-[#FFFFFF] font-medium text-[36px] leading-[44px] w-full md:w-[500px]'
            >
              Stand out from the crowd!
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className='text-[#ffffff77] text-[18px] leading-7 mt-5 font-medium'
            >
              Explore CIFA’s advanced employability tools to enhance your career
              prospects. Our Digital CV includes a video resume feature, live
              CPD progress tracking, and social media integration for sharing
              your profile on LinkedIn and other platforms. With instant
              interview scheduling and access to tailored employment services,
              elevate your professional presence and unlock new opportunities
              with CIFA’s comprehensive career support.
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
      </div>
    </div>
  )
}

export default EmployabilityTools
