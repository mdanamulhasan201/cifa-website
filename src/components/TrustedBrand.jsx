import Marquee from 'react-fast-marquee';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import img4 from '../assets/images/brand/image4.png';
import img5 from '../assets/images/brand/image5.png';
import img6 from '../assets/images/brand/image6.png';
import img7 from '../assets/images/brand/image7.png';
import img8 from '../assets/images/brand/image8.png';
import './style.css';

const TrustedBrand = () => {
  // Framer Motion animation controls
  const controls = useAnimation();

  
  const [ref, inView] = useInView({
    threshold: 0.1, 
  });


  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, 
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div
      className='bg-[#000000] text-white relative overflow-hidden'
      ref={ref} 
    >
      <div className='container py-10 relative'>
        <h3 className='capitalize text-center text-[20px] mb-5'>trusted by</h3>

        {/* Left side gradient effect */}
        <div className='absolute top-0 left-0 h-full w-60 effect '></div>

        {/* Right side gradient effect */}
        <div
          className='absolute top-0 right-0 h-full w-60 effect'
          style={{ transform: 'rotateY(180deg)' }}
        ></div>

  
        <motion.div
          variants={containerVariants}
          initial='hidden'
          animate={controls} 
        >
          <Marquee pauseOnHover gradient={false} autoFill speed={50}>
            {/* Each item is animated individually */}
            {[img4, img5, img6, img7, img8].map((img, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className='mx-4'
              >
                <img
                  className={index === 4 ? 'w-16' : 'w-28'}
                  src={img}
                  alt={`Brand ${index + 4}`}
                />
              </motion.div>
            ))}
          </Marquee>
        </motion.div>
      </div>
    </div>
  );
};

export default TrustedBrand;
