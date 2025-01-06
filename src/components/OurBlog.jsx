import { useState } from 'react'
import img1 from '../assets/images/ourBlog/img1.png'
import img2 from '../assets/images/ourBlog/img2.png'
import img3 from '../assets/images/ourBlog/img3.png'

import garp from '../assets/images/Gradient.png'
import { FaAngleRight } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { MdDateRange } from 'react-icons/md'

const OurBlog = () => {
  const data = [
    {
      id: 1,
      img: img1,
      title: 'Investment Advisor Certificate',
      date: '24/11/2024',
      related: ['Courses', 'News']
    },
    {
      id: 2,
      img: img2,
      title: 'Investment Advisor Certificate',
      date: '24/11/2024',
      related: ['Courses', 'News']
    },
    {
      id: 3,
      img: img3,
      title: 'Investment Advisor Certificate',
      date: '24/11/2024',
      related: ['Courses', 'News']
    },
    {
      id: 4,
      img: img1,
      title: 'Investment Advisor Certificate',
      date: '24/11/2024',
      related: ['Courses', 'News']
    },

    {
      id: 5,
      img: img2,
      title: 'Investment Advisor Certificate',
      date: '24/11/2024',
      related: ['Courses', 'News']
    },

    {
      id: 6,
      img: img3,
      title: 'Investment Advisor Certificate',
      date: '24/11/2024',
      related: ['Courses', 'News']
    }
  ]

  // Define variants for the card animation
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  // Define staggered animation for the grid
  const gridVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.5 }
    }
  }

  return (
    <div className='bg-[#1C140A] text-white relative font-aeonik'>
      {/* Background Image */}
      <div className='absolute top-0 left-0 right-0 flex items-center justify-center'>
        <div className='w-[700px] mx-auto'>
          <img src={garp} alt='' className='w-full' />
        </div>
      </div>

      {/* Content */}
      <div className='container py-20 px-8 xl:px-0'>
        <div>
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className='text-[56px] font-medium font-aeonik text-center leading-[64px]'
          >
            Our Blog
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className='text-[20px] text-center leading-8 text-[#ffffff9a] mt-5'
          >
            check out our latest blogs here
          </motion.p>
        </div>

        {/* Cards Section */}
        <motion.div
          className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center gap-5 mt-10'
          variants={gridVariants}
          initial='hidden'
          animate='visible'
        >
          {data.map(({ id, img, title, related, date }) => {
            return (
              <motion.div key={id} variants={cardVariants}>
                <div>
                  <div className='mt-10'>
                    {/* Image */}
                    <img
                      src={img}
                      alt={title}
                      className='w-full mx-auto h-[370px] '
                    />
                  </div>

                  {/* Content */}
                  <div className='px-2 pt-3'>
                    {/* title */}
                    <div className='flex justify-between items-center'>
                      <h2 className='text-[14px] text-[#ffffffdc] font-medium mb-2'>
                        {title}
                      </h2>
                      <div className='flex items-center gap-1 text-[#ffffff81] text-[13px]'>
                        <MdDateRange className='text-lg' />
                        {date}
                      </div>
                    </div>

                    <div className='flex items-center  gap-10 mt-2'>
                      <p className='capitalize text-[#ffffff8c] text-[16px]'>
                        related to:
                      </p>
                      <div className='text-sm flex flex-wrap gap-3 items-center text-[#C1B27D] text-[12px] '>
                        {related.map((edu, index) => (
                          <p
                            key={index}
                            className='mt-1 border px-5 py-1 rounded-full border-[#c1b27d67] bg-[#393117c2]'
                          >
                            {edu}
                          </p>
                        ))}
                      </div>
                    </div>

                    {/* View Profile Button */}
                    <button className='mt-4 text-[#C1B27D] rounded flex items-center'>
                      Read More
                      <FaAngleRight />
                    </button>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        <div className='flex justify-center items-center mt-10'>
          <button className='bg-[#C1B27D99] capitalize border border-[#C1B27DB2] rounded-xl px-6 py-2 hover:bg-transparent transform duration-300'>
            View more
          </button>
        </div>
      </div>
    </div>
  )
}

export default OurBlog
