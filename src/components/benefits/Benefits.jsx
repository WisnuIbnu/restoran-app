import { FiClock } from "react-icons/fi";
import { MdFastfood, MdNotificationsActive } from "react-icons/md"; 
import { AiOutlineWallet } from "react-icons/ai"; 
import { BsFillCalendarCheckFill } from "react-icons/bs"; 
import { HiOutlineBuildingStorefront } from "react-icons/hi2"; 
import { motion } from "framer-motion";

const benefitItems = [
  {
    icon: <FiClock className="w-6 h-6 lg:w-[34px] lg:h-[34px] text-orange-600" />,
    title: "Cepat & Praktis",
    desc: "Pesan makanan dalam hitungan detik tanpa antri.",
  },
  {
    icon: <MdFastfood className="w-6 h-6 lg:w-[34px] lg:h-[34px] text-orange-600" />,
    title: "Banyak Pilihan Menu",
    desc: "Tersedia berbagai jenis makanan ringan hingga berat.",
  },
  {
    icon: <AiOutlineWallet className="w-6 h-6 lg:w-[34px] lg:h-[34px] text-orange-600" />,
    title: "Harga Terjangkau",
    desc: "Makanan enak, harga pas di kantong mahasiswa.",
  },
  {
    icon: <BsFillCalendarCheckFill className="w-6 h-6 lg:w-[34px] lg:h-[34px] text-orange-600" />,
    title: "Kualitas Terjaga",
    desc: "Bahan segar, dimasak langsung oleh mitra kantin terpercaya.",
  },
  {
    icon: <MdNotificationsActive className="w-6 h-6 lg:w-[34px] lg:h-[34px] text-orange-600" />,
    title: "Pesan & Bayar Online",
    desc: "Tanpa uang cash, cukup klik dan makanan siap disiapkan.",
  },
  {
    icon: <HiOutlineBuildingStorefront className="w-6 h-6 lg:w-[34px] lg:h-[34px] text-orange-600" />,
    title: "Cocok untuk Semua",
    desc: "Pelajar, guru, dan staf bisa menikmati layanan KantinQ.",
  },
];

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, type: "spring" },
  }),
};

const Benefits = () => {
  return (
    <section
      id="Benefits"
      className="flex flex-col lg:flex-row items-center justify-center w-full lg:w-[1015px] mx-auto gap-10 lg:gap-[100px] mt-[60px] lg:mt-[100px] px-4 lg:px-0"
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.7, type: "spring" }}
        className="font-bold text-[28px]  text-center md:text-[32px] leading-[42px] md:leading-[48px] whitespace-nowrap"
      >
        Mengapa Harus <br />
        Makanan di Larana?
      </motion.h2>

      {/* Benefits grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-[30px] w-full lg:w-auto px-6 sm:px-0">
        {benefitItems.map((item, i) => (
          <motion.div
            key={i}
            className="flex items-start gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={itemVariants}
            custom={i}
          >
            <div className="flex items-center justify-center shrink-0 w-14 h-14 lg:w-[70px] lg:h-[70px] rounded-2xl lg:rounded-[23px] bg-orange-200 overflow-hidden">
              {item.icon}
            </div>
            <div className="flex flex-col gap-1 lg:gap-[5px]">
              <p className="font-bold text-base lg:text-lg leading-6 lg:leading-[27px]">
                {item.title}
              </p>
              <p className="text-sm leading-5 lg:leading-[24px]">
                {item.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Benefits;
