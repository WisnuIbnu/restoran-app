import { motion } from "framer-motion";
import { FaTruckFast } from "react-icons/fa6";
import { GiCoffeeCup } from "react-icons/gi";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";

const MyBooking = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const slideUpVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8
      }
    }
  };

  const bounceVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <div>
      {/* Banner Section */}
      <motion.div 
        id="Banner" 
        className="relative w-full h-[240px] md:h-[400px] flex items-center shrink-0 overflow-hidden -mb-[10px] top-10 sm:top-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1 
          className="text-center mx-auto font-extrabold text-[40px] leading-[60px] md:leading-[60px] text-white mb-5 z-20 px-4"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          View Your Order Food Details
        </motion.h1>
        <div className="absolute w-full h-full bg-[linear-gradient(180deg,_rgba(0,0,0,0)_0%,#000000_91.83%)] z-10" />
        <motion.img 
          src="/assets/images/backgrounds/makanan.jpg" 
          className="absolute w-full h-full object-cover object-top" 
          alt=""
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
        />
      </motion.div>

      {/* Main Content Section */}
      <motion.section 
        id="Check-Booking" 
        className="relative flex flex-col w-full md:w-[930px] shrink-0 gap-[20px] md:gap-[30px] mx-auto mb-[50px] md:mb-[100px] z-20 px-4 md:px-0"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={containerVariants}
      >
        {/* Search Form */}
        <motion.form 
          action="#"
          className="flex flex-col md:flex-row items-end rounded-[20px] border border-[#E0DEF7] p-[20px] md:p-[30px] gap-[16px] bg-white"
          variants={slideUpVariants}
          whileHover={{ y: -5 }}
        >
          {[
            {
              label: "Masukan Kode Transaksi Anda",
              id: "transaction",
              icon: "assets/images/icons/receipt-text-black.svg",
              placeholder: "Ketika Kode Transaksi"
            },
            {
              label: "Masukan No Telephone Anda",
              id: "phone",
              icon: "assets/images/icons/call-black.svg",
              placeholder: "Ketik No Telephone"
            }
          ].map((field, index) => (
            <motion.div 
              key={index}
              className="flex flex-col w-full gap-2"
              variants={fadeInVariants}
              transition={{ delay: index * 0.1 }}
            >
              <label htmlFor={field.id} className="font-semibold">{field.label}</label>
              <motion.div 
                className="flex items-center rounded-full border border-[#000929] px-5 gap-[10px] transition-all duration-300 focus-within:ring-2 focus-within:ring-orange-600"
                whileHover={{ scale: 1.01 }}
              >
                <img src={field.icon} className="w-6 h-6" alt="icon" />
                <input 
                  type={field.id === "phone" ? "tel" : "text"} 
                  name={field.id} 
                  id={field.id} 
                  className="appearance-none outline-none w-full py-3 font-semibold placeholder:font-normal placeholder:text-[#000929]" 
                  placeholder={field.placeholder} 
                />
              </motion.div>
            </motion.div>
          ))}

          <motion.button 
            type="submit" 
            className="flex items-center justify-center rounded-full p-[12px_20px] md:p-[12px_30px] gap-3 transition duration-500 cursor-pointer bg-[#ee611b] text-white hover:bg-white hover:text-[#ee611b] border w-full md:w-auto font-semibold"
            variants={bounceVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-nowrap">Cek Pesanan</span>
          </motion.button>
        </motion.form>

        {/* Results Section */}
        <motion.div 
          id="Result" 
          className="grid grid-cols-1 md:grid-cols-2 gap-[20px] md:gap-[30px]"
          variants={containerVariants}
        >
          {/* Order Details Card */}
          <motion.div 
            className="flex flex-col h-fit shrink-0 rounded-[20px] border border-[#E0DEF7] p-[20px] md:p-[30px] gap-[20px] md:gap-[30px] bg-white"
            variants={slideUpVariants}
            whileHover={{ y: -5 }}
          >
            <motion.div 
              className="flex flex-col md:flex-row items-center gap-4"
              variants={fadeInVariants}
            >
              <motion.div 
                className="flex shrink-0 w-full md:w-[160px] h-[220px] md:h-[120px] rounded-[20px] overflow-hidden"
                whileHover={{ scale: 1.02 }}
              >
                <img 
                  src="https://cdn0-production-images-kly.akamaized.net/hqjIui4KccAXZ-qsoK-5Rbh2JUs=/800x450/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/1359428/original/084420000_1475132767-Black-pepper-petai-fried-rice.jpg" 
                  className="w-full h-full object-cover" 
                  alt="thumbnail" 
                />
              </motion.div>
              <div className="flex flex-col gap-2 w-full md:w-auto text-center md:text-left">
                <motion.p 
                  className="font-bold text-lg md:text-xl leading-[26px] md:leading-[30px]"
                  whileHover={{ x: 5 }}
                >
                  Nasi Goreng Larana Special
                </motion.p>
                <div className="flex items-center justify-center md:justify-start gap-[6px]">
                  <img src="assets/images/icons/location.svg" className="w-6 h-6" alt="icon" />
                  <p className="font-semibold">Jakarta Pusat</p>
                </div>
              </div>
            </motion.div>

            <hr className="border-[#F6F5FD]" />

            <motion.div 
              className="flex flex-col gap-4"
              variants={slideUpVariants}
            >
              <h2 className="font-bold text-lg md:text-base">Detail Pelanggan</h2>
              {[
                {
                  label: "Nama Lengkap",
                  icon: "assets/images/icons/security-user-black.svg",
                  value: "Muhafi"
                },
                {
                  label: "No Telephone",
                  icon: "assets/images/icons/call-black.svg",
                  value: "0256843568796"
                },
                {
                  label: "Alamat",
                  icon: "assets/images/icons/calendar-black.svg",
                  value: "Jl. Soekarno Hatta, Mojolangu, Kec. Lowokwaru, Kota Malang"
                }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="flex flex-col gap-2"
                  variants={fadeInVariants}
                  transition={{ delay: index * 0.1 }}
                >
                  <h3 className="font-semibold">{item.label}</h3>
                  <div className="flex items-center rounded-full px-5 py-3 gap-[10px] bg-[#F7F7FD]">
                    <img src={item.icon} className="w-6 h-6" alt="icon" />
                    <p className="font-semibold">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <hr className="border-[#F6F5FD]" />

            <motion.div 
              className="flex items-center gap-3"
              variants={fadeInVariants}
            >
              <IoCheckmarkDoneCircleSharp className="w-[50px] h-[50px] text-orange-600" />
              <p className="font-semibold leading-[28px] text-sm md:text-base">Makanan Telah di Terima</p>
            </motion.div>
          </motion.div>

          {/* Order Summary Card */}
          <motion.div 
            className="flex flex-col h-fit shrink-0 rounded-[20px] border border-[#E0DEF7] p-[20px] md:p-[30px] gap-[20px] md:gap-[30px] bg-white"
            variants={slideUpVariants}
            whileHover={{ y: -5 }}
          >
            <h2 className="font-bold text-lg md:text-base">Detail Pesanan Kamu</h2>
            
            <motion.div 
              className="flex flex-col gap-5"
              variants={containerVariants}
            >
              {[
                { label: "Status Pembayaran", value: "SUCCESS", isStatus: true },
                { label: "Status Pesanan", value: "SUCCESS", isStatus: true },
                { label: "kode Transaksi", value: "PAP23153434" },
                { label: "Total Harga", value: "Rp 249.660", isTotal: true }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center justify-between"
                  variants={fadeInVariants}
                  transition={{ delay: index * 0.1 }}
                >
                  <p className="font-semibold">{item.label}</p>
                  {item.isStatus ? (
                    <p className="rounded-full w-fit p-[6px_16px] bg-[#0D903A] font-bold text-sm leading-[21px] text-[#F7F7FD]">
                      {item.value}
                    </p>
                  ) : (
                    <p className={`font-bold ${item.isTotal ? "text-[18px] md:text-[22px] leading-[27px] md:leading-[33px] text-orange-600" : ""}`}>
                      {item.value}
                    </p>
                  )}
                </motion.div>
              ))}
            </motion.div>

            <hr className="border-[#F6F5FD]" />

            <h2 className="font-bold text-lg md:text-base">Bonus Yang Kamu Dapatkan</h2>
            
            <motion.div 
              className="flex flex-col md:flex-row justify-between gap-4 md:gap-0"
              variants={containerVariants}
            >
              {[
                {
                  icon: <GiCoffeeCup className="w-5 h-5 lg:w-8 lg:h-8 text-orange-600" />,
                  title: "Free Snack",
                  desc: "Roti dan Kopi"
                },
                {
                  icon: <FaTruckFast className="w-5 h-5 lg:w-8 lg:h-8 text-orange-600" />,
                  title: "Gratis Ongkir",
                  desc: "24 Jam"
                }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center gap-4"
                  variants={slideUpVariants}
                  whileHover={{ scale: 1.03 }}
                >
                  {item.icon}
                  <div className="flex flex-col gap-[2px]">
                    <p className="font-bold text-base md:text-lg leading-[22px] md:leading-[24px]">{item.title}</p>
                    <p className="text-sm leading-[21px]">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default MyBooking;