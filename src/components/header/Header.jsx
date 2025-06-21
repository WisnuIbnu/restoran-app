

import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.7, ease: "easeOut" } },
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const Header = () => {
  return (
    <header className="flex flex-col w-full">
      {/* HERO BANNER */}
      <section id="Hero-Banner" className="relative flex flex-col lg:flex-row h-auto lg:h-[720px] -mb-[60px] mt-15 sm:mt-13 px-6 sm:px-10 lg:px-0">
        {/* Hero Text */}
        <motion.div
          id="Hero-Text"
          className="relative flex flex-col w-full lg:max-w-[650px] rounded-2xl border border-[#E0DEF7] p-6 sm:p-10 gap-6 sm:gap-[30px] bg-white z-10 mt-10 lg:mt-[70px] lg:ml-[calc((100%-1130px)/2)]"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div className="flex items-center w-fit rounded-full py-2 px-4 gap-2 bg-[#000929] text-xs sm:text-sm" variants={fadeInUp}>
            <img src="assets/images/icons/crown-white.svg" className="w-4 h-4 sm:w-5 sm:h-5" alt="icon" />
            <span className="font-semibold text-white">
              Restoran kami masuk dalam daftar 500 bisnis paling produktif versi Fortune.
            </span>
          </motion.div>
          <motion.h1 className="font-extrabold text-3xl sm:text-4xl lg:text-[50px] leading-tight lg:leading-[60px]" variants={fadeInUp}>
            Pilihan Terbaik untuk Tubuh Sehat.
            <br />
            Nikmati Makanan, Rasakan Manfaatnya.
          </motion.h1>
          <motion.p className="text-base sm:text-lg leading-relaxed text-[#000929]" variants={fadeInUp}>
            Restoran yang tepat bisa memberikan pengalaman makan yang lebih baik dan sehat, sekaligus mendukung pertumbuhan bisnis Anda.
          </motion.p>
          {/* CTA Buttons */}
          <motion.div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5" variants={fadeInUp}>
            <a
              href="/menu"
              className="flex items-center rounded-full px-6 py-4 gap-3 bg-[#ee611b]"
            >
              <img src="assets/images/icons/slider-horizontal-white.svg" className="w-6 h-6" alt="icon" />
              <span className="font-bold text-base sm:text-xl text-white">
                Pesan Sekarang
              </span>
            </a>
            <a
              href="/menu"
              className="flex items-center rounded-full border border-[#000929] px-6 py-4 gap-3 bg-white"
            >
              <img src="assets/images/icons/video-octagon.svg" className="w-6 h-6" alt="icon" />
              <span className="font-semibold text-base sm:text-xl">
                Menu
              </span>
            </a>
          </motion.div>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          id="Hero-Image"
          className="relative mt-6 lg:absolute lg:right-0 lg:top-0 lg:w-[calc(100%-((100%-1130px)/2)-305px)] lg:h-[720px] rounded-bl-[40px] overflow-hidden"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <img
            src="assets/images/backgrounds/makanan.jpg"
            className="w-full h-full object-cover rounded-xl lg:rounded-none"
            alt="hero background"
          />
        </motion.div>
      </section>

      {/* CLIENTS & STATS SECTION */}
      <motion.div
        className="flex flex-col pt-16 pb-10 px-6 sm:px-10 lg:px-[120px] gap-10 bg-[#ee611b] mt-5 sm:mt-10"
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Logos */}
        <motion.div
          className="flex items-center justify-center flex-wrap max-w-[1130px] mx-auto gap-6 sm:gap-[30px] px-[6px]"
          variants={fadeIn}
        >
          <img src="assets/images/logos/grap.png" className=" h-16 sm:h-32" alt="logo" />
          <img src="assets/images/logos/uber.png" className=" h-16 sm:h-32" alt="logo" />
          <img src="assets/images/logos/gojek.png" className=" h-16 sm:h-32 hidden sm:block" alt="logo" />
          <img src="assets/images/logos/yumi.png" className=" h-16 sm:h-32" alt="logo" />
          <img src="assets/images/logos/maxim.png" className=" h-16 sm:h-32" alt="logo" />
          <img src="assets/images/logos/gojek.png" className=" h-16 sm:h-32 sm:hidden" alt="logo" />
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-4 gap-6 justify-center text-center"
          variants={stagger}
        >
          <motion.div variants={fadeInUp}>
            <p className="text-sm sm:text-lg text-[#F7F7FD]">Menu Lezat & Sehat</p>
            <p className="font-bold text-2xl sm:text-[38px] text-white">120M+</p>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <p className="text-sm sm:text-lg text-[#F7F7FD]">Pelanggan Puas</p>
            <p className="font-bold text-2xl sm:text-[38px] text-white">98%</p>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <p className="text-sm sm:text-lg text-[#F7F7FD]">Cabang di Berbagai Kota</p>
            <p className="font-bold text-2xl sm:text-[38px] text-white">90+</p>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <p className="text-sm sm:text-lg text-[#F7F7FD]">Acara & Promo Mendukung</p>
            <p className="font-bold text-2xl sm:text-[38px] text-white">139M+</p>
          </motion.div>
        </motion.div>
      </motion.div>
    </header>
  );
};

export default Header;

