import React from 'react';
import { motion } from 'framer-motion';

const HeaderMenus = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const textVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <header className="flex flex-col w-full md:mt-24 px-4 sm:px-6 lg:px-8 mt-24">
      <motion.section 
        id="Hero-Banner" 
        className="relative flex flex-col md:flex-row h-auto md:h-[434px]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        {/* Hero Text Section */}
        <motion.div
          id="Hero-Text"
          className="relative flex flex-col w-full md:max-w-[650px] h-fit rounded-[20px] md:rounded-[30px] border border-[#E0DEF7] p-6 md:p-10 gap-5 md:gap-[30px] bg-white md:mt-[70px] md:ml-[calc((100%-1130px)/2)] z-10 order-1"
          variants={textVariants}
        >
          <motion.h1 
            className="font-extrabold text-3xl md:text-[50px] leading-[1.2] md:leading-[60px]"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            Masakan Spesial <br />{" "}
            <span className="text-[#ee611b]">Untuk Momen Terlezat</span>
          </motion.h1>
          <motion.p 
            className="text-base md:text-lg leading-6 md:leading-8 text-[#000929]"
            whileHover={{ x: 5 }}
          >
            Makanan yang enak dan lezat dapat memberikan pengalaman yang menyenangkan,
            meningkatkan suasana hati, serta mempererat kebersamaan dalam setiap momen penting.
          </motion.p>
        </motion.div>
        
        {/* Hero Image Section */}
        <motion.div
          id="Hero-Image"
          className="relative md:absolute w-full md:w-[calc(100%-((100%-1130px)/2)-305px)] h-[350px] md:h-[434px] rounded-[20px] md:rounded-bl-[40px] overflow-hidden order-2 md:order-2 mt-6 md:mt-0 right-0"
          variants={imageVariants}
          whileHover={{ scale: 1.01 }}
        >
          <motion.img
            src="https://images.homify.com/v1525332547/p/photo/image/2545724/pc3.jpg"
            className="w-full h-full object-cover"
            alt="hero background"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />
        </motion.div>
      </motion.section>
    </header>
  );
};

export default HeaderMenus;