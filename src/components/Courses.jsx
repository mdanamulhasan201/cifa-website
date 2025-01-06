import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import cover1 from '../assets/images/courses/1cover.png'
import cover2 from '../assets/images/courses/2cover.png'
import cover3 from '../assets/images/courses/3cover.png'
import cover4 from '../assets/images/courses/4cover.png'
import { motion } from 'framer-motion'
import {
  MdKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight
} from 'react-icons/md'

const Courses = () => {
  const data = [
    { id: 1, image: cover1 },
    { id: 2, image: cover2 },
    { id: 3, image: cover3 },
    { id: 4, image: cover4 }
  ]

  // Custom arrow components with improved styling
  const CustomArrow = ({ direction, onClick }) => (
    <button
      onClick={onClick}
      className={`absolute z-10 top-1/2 transform -translate-y-1/2 ${
        direction === 'next' ? 'right-4' : 'left-4'
      } w-10 h-10 flex items-center justify-center rounded-full bg-black/80 border border-white hover:bg-black/60 transition-colors duration-300`}
    >
      <span className='text-white text-xl'>
        {direction === 'next' ? (
          <MdOutlineKeyboardArrowRight />
        ) : (
          <MdKeyboardArrowLeft />
        )}
      </span>
    </button>
  )

  // Custom dot component
  const CustomDot = ({ index, onClick, active }) => (
    <button
      onClick={onClick}
      className={`mx-1 w-2 h-2 rounded-full transition-all duration-300 ${
        active ? 'bg-[#fccf2b] w-4' : 'bg-gray-400'
      }`}
    />
  )

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    nextArrow: <CustomArrow direction='next' />,
    prevArrow: <CustomArrow direction='prev' />,
    customPaging: function (i) {
      return (
        <div
          className={`mx-1 h-2 rounded-full transition-all duration-300 cursor-pointer`}
        >
          <div className='h-2 w-2 bg-gray-400 rounded-full hover:bg-[#fccf2b] transition-all duration-300' />
        </div>
      )
    },
    appendDots: dots => (
      <div className='absolute bottom-0 w-full'>
        <ul className='flex justify-center items-center m-0 p-0'> {dots} </ul>
      </div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  }

  return (
    <div className='bg-[#1C140A] text-white py-20'>
      <div className='container mx-auto px-4 max-w-7xl'>
        <motion.div
          className='text-center max-w-3xl mx-auto mb-16'
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className='text-4xl md:text-5xl font-semibold text-white/90 leading-tight mb-6'>
            Explore a Wide Range of Accredited Courses!
          </h1>
          <p className='text-lg text-white/60'>
            Gain skills and certifications designed to accelerate your career in
            the finance industry.
          </p>
        </motion.div>

        <div className='relative px-8'>
          <Slider {...settings} className='courses-slider'>
            {data.map(course => (
              <motion.div
                key={course.id}
                className='px-5'
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: course.id * 0.3 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className='rounded-xl bg-white/5 p-2 overflow-hidden transition-transform hover:scale-105 duration-300'>
                  <img
                    src={course.image}
                    alt={course.title}
                    className='w-full'
                  />
                </div>
              </motion.div>
            ))}
          </Slider>
        </div>
        {/* <div className='flex justify-center items-center mt-14 gap-10'>
          <button className=' w-10 h-10 flex items-center justify-center rounded-full bg-black/80 border border-white hover:bg-black/60 transition-colors duration-300'>
            <MdOutlineKeyboardArrowRight />
          </button>
          <button className=' w-10 h-10 flex items-center justify-center rounded-full bg-black/80 border border-white hover:bg-black/60 transition-colors duration-300'>
            <MdKeyboardArrowLeft />
          </button>
        </div> */}
        <div className='text-center mt-20'>
          <button className='bg-[#C1B27D99] border border-[#C1B27DB2] text-white px-8 py-3 rounded-xl hover:bg-transparent transition-colors duration-300'>
            View All Courses
          </button>
        </div>
      </div>

      <style jsx>{`
        .courses-slider .slick-dots {
          bottom: -40px;
        }
        .courses-slider .slick-dots li {
          margin: 0 4px;
        }
        .courses-slider .slick-dots li.slick-active div div {
          background-color: #fccf2b;
          width: 16px;
        }
        .courses-slider .slick-slide {
          padding: 8px;
        }

        .courses-slider .slick-dots {
          bottom: -40px;
        }
      `}</style>
    </div>
  )
}

export default Courses
