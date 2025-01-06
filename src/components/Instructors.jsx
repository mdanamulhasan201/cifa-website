import { useState } from 'react'
import img1 from '../assets/images/inst/img1.png'
import img2 from '../assets/images/inst/img2.png'
import img3 from '../assets/images/inst/img3.png'
import garp from '../assets/images/Gradient.png'
import { FaAngleRight } from 'react-icons/fa'
import { motion } from 'framer-motion'

const Instructors = () => {
  const data = [
    {
      id: 1,
      img: img1,
      name: 'Dr Mohammed Hamdan',
      education: [
        'PhD in Accounting',
        'MSc Accounting',
        'Pg. DIP in Accounting',
        'Advanced Financial Analysis',
        'Corporate Governance'
      ]
    },
    {
      id: 2,
      img: img2,
      name: 'Dr Mustafa Rifat Ertanin',
      education: ['PhD Economics', 'BL and ML combined degree in Law']
    },
    {
      id: 3,
      img: img3,
      name: 'Fiona Addington Bsc',
      education: [
        'BSc honours Degree in Psychology',
        'Certified Behavioral Analyst',
        'BL and ML combined degree in Law',
        'Leadership Development Program'
      ]
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
    <div className='bg-[#1C140A] text-white relative'>
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
            Instructors
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className='text-[20px] text-center leading-8 text-[#ffffff9a] mt-5'
          >
            Continuing professional development at its finest!
          </motion.p>
        </div>

        {/* Cards Section */}
        <motion.div
          className='grid grid-cols-1 lg:grid-cols-3 justify-center gap-5 mt-10'
          variants={gridVariants}
          initial='hidden'
          animate='visible'
        >
          {data.map(({ id, img, name, education }) => {
            const [showAll, setShowAll] = useState(false)
            return (
              <motion.div
                key={id}
                className='rounded-3xl border border-[#393117] shadow-md relative'
                variants={cardVariants}
              >
                {/* Gradient Overlay */}
                <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent z-10 rounded-3xl'></div>
                <div>
                  <div className='mt-10'>
                    {/* Image */}
                    <img
                      src={img}
                      alt={name}
                      className='w-full mx-auto h-[370px] z-0 relative'
                    />
                  </div>

                  {/* Content */}
                  <div className='px-10 py-10 relative z-10'>
                    {/* Name */}
                    <h2 className='text-[28px] font-medium mb-2'>{name}</h2>
                    {/* education */}
                    <h2 className='text-[16px] text-[#ffffff85] mb-2'>
                      Education
                    </h2>

                    {/* Education */}
                    <div className='text-sm flex flex-wrap gap-3 items-center text-[#C1B27D] text-[12px] '>
                      {education
                        .slice(0, showAll ? education.length : 2)
                        .map((edu, index) => (
                          <p
                            key={index}
                            className='mt-1 border px-2 py-1 rounded-full border-[#c1b27d67] bg-[#393117c2]'
                          >
                            {edu}
                          </p>
                        ))}

                      {!showAll && education.length > 2 && (
                        <p
                          onClick={() => setShowAll(true)}
                          className='text-white text-[16px] cursor-pointer'
                        >
                          +{education.length - 3} more
                        </p>
                      )}

                      {showAll && (
                        <p
                          onClick={() => setShowAll(false)}
                          className='mt-3 text-white cursor-pointer text-[16px]'
                        >
                          Show less
                        </p>
                      )}
                    </div>

                    {/* View Profile Button */}
                    <button className='mt-4 text-white rounded flex items-center'>
                      View Profile
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
            learn more
          </button>
        </div>
      </div>
    </div>
  )
}

export default Instructors
