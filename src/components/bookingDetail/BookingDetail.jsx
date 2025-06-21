import { motion } from "framer-motion";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import { TiLocationOutline } from "react-icons/ti";
import { FaTruckFast } from "react-icons/fa6";
import { GiCoffeeCup } from "react-icons/gi";
import { useParams } from 'react-router-dom';
import { menus } from '../../assets/assets';

const BookingDetail = () => {
  const { slug } = useParams();
  const menu = menus.find((item) => item.slug === slug);

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

  const formatPrice = (priceInput) => {
    const numericPrice = typeof priceInput === "string"
      ? parseInt(priceInput.replace(/[^\d]/g, ""), 10)
      : priceInput;

    return numericPrice.toLocaleString("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    });
  };

  const originalPrice = typeof menu?.price === "string"
    ? parseInt(menu.price.replace(/[^\d]/g, ""), 10)
    : menu?.price;

  const totalDiscount = 20 + 350;
  const finalPrice = originalPrice - totalDiscount;

  if (!menu) {
    return <p>Menu tidak ditemukan.</p>;
  }

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
          Start Order Now!
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

      {/* Main Form Section */}
      <motion.form 
        action="booking-finished.html" 
        className="relative flex flex-col md:flex-row justify-center max-w-[1130px] mx-auto gap-[15px] md:gap-[30px] mb-20 z-20 px-4 md:px-0"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={containerVariants}
      >
        {/* Left Column */}
        <motion.div 
          className="flex flex-col shrink-0 w-full md:w-[500px] h-fit rounded-[20px] border border-[#E0DEF7] p-[20px] md:p-[30px] gap-[20px] md:gap-[30px] bg-white"
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
              <img src={menu.thumbnail} className="w-full h-full object-cover" alt="thumbnail" />
            </motion.div>
            <div className="flex flex-col gap-2 w-full md:w-auto">
              <motion.p 
                className="font-bold text-xl md:text-4xl leading-[26px] md:leading-[35px] text-center md:text-left"
                whileHover={{ x: 5 }}
              >
                {menu.name}
              </motion.p>
              <div className="flex items-center justify-center md:justify-start gap-[6px]">
                <TiLocationOutline className="w-5 h-5 lg:w-7 lg:h-7 text-orange-600" />
                <p className="font-semibold text-lg">{menu.location}</p>
              </div>
            </div>
          </motion.div>

          <hr className="border-[#F6F5FD]" />

          <motion.div 
            className="flex flex-col gap-4"
            variants={slideUpVariants}
          >
            <h2 className="font-bold text-lg md:text-base">Form Pemesanan</h2>
            {[
              {
                label: "Nama",
                id: "name",
                icon: "/assets/images/icons/security-user-black.svg",
                placeholder: "Ketik Nama Anda"
              },
              {
                label: "No Telephone / WA",
                id: "phone",
                icon: "/assets/images/icons/call-black.svg",
                placeholder: "Ketika No Telephone Anda"
              },
              {
                label: "Alamat Lengkap",
                id: "address",
                icon: "/assets/images/icons/calendar-black.svg",
                placeholder: "Ketik Alamat Tujuan"
              }
            ].map((field, index) => (
              <motion.div 
                key={index}
                className="flex flex-col gap-2"
                variants={slideUpVariants}
                transition={{ delay: index * 0.1 }}
              >
                <label htmlFor={field.id} className="font-semibold">{field.label}</label>
                <motion.div 
                  className="flex items-center rounded-full border border-[#000929] px-5 gap-[10px] transition-all duration-300 focus-within:ring-2 focus-within:ring-orange-600 overflow-hidden"
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
          </motion.div>

          <hr className="border-[#F6F5FD]" />

          <motion.div 
            className="flex items-center gap-3"
            variants={fadeInVariants}
          >
            <IoCheckmarkDoneCircleSharp className="w-[50px] h-[50px] text-orange-600" />
            <p className="font-semibold leading-[28px] text-sm md:text-base">Pastikan Mengisi Form Pemesanan Dengan Benar</p>
          </motion.div>

          <hr className="border-[#F6F5FD]" />

          <motion.div 
            className="flex flex-col gap-[20px] md:gap-[30px]"
            variants={containerVariants}
          >
            <h2 className="font-bold text-lg md:text-base">Bonus Yang Akan Kamu Dapatkan</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[20px] md:gap-[30px]">
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
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column */}
        <motion.div 
          className="flex flex-col shrink-0 w-full md:w-[400px] h-fit rounded-[20px] border border-[#E0DEF7] p-[20px] md:p-[30px] gap-[20px] md:gap-[30px] bg-white"
          variants={slideUpVariants}
          whileHover={{ y: -5 }}
        >
          <h2 className="font-bold text-lg md:text-base">Detail Pesanan Kamu</h2>
          
          <motion.div 
            className="flex flex-col gap-5"
            variants={containerVariants}
          >
            {[
              { label: "Nama Makanan", value: menu.name },
              { label: "Harga", value: formatPrice(menu.price) },
              { label: "Voucher", value: formatPrice(totalDiscount), isDiscount: true },
              { 
                label: "Total Harga", 
                value: formatPrice(finalPrice),
                isTotal: true 
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="flex items-center justify-between"
                variants={fadeInVariants}
                transition={{ delay: index * 0.1 }}
              >
                <p className="font-semibold">{item.label}</p>
                <p className={`font-bold ${item.isDiscount ? "text-[#FF2D2D]" : ""} ${item.isTotal ? "text-[18px] md:text-[22px] leading-[27px] md:leading-[33px] text-orange-600" : ""}`}>
                  {item.value}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <hr className="border-[#F6F5FD]" />

          <h2 className="font-bold text-lg md:text-base">Send Payment to</h2>
          
          <motion.div 
            className="flex flex-col gap-[20px] md:gap-[30px]"
            variants={containerVariants}
          >
            {[
              {
                logo: "/assets/images/logos/bca.svg",
                name: "Muhafi",
                account: "123542331553"
              },
              {
                logo: "/assets/images/logos/mandiri.svg",
                name: "Bilal",
                account: "34009123"
              }
            ].map((bank, index) => (
              <motion.div 
                key={index}
                className="flex items-center gap-3"
                variants={slideUpVariants}
                whileHover={{ x: 5 }}
              >
                <div className="w-[60px] md:w-[71px] flex shrink-0">
                  <img src={bank.logo} className="w-full object-contain" alt="bank logo" />
                </div>
                <div className="flex flex-col gap-[2px]">
                  <div className="flex items-center gap-1">
                    <p className="font-semibold text-sm md:text-base">{bank.name}</p>
                    <IoCheckmarkDoneCircleSharp className="w-[18px] h-[18px] text-orange-600" />
                  </div>
                  <p className="text-sm">{bank.account}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <hr className="border-[#F6F5FD]" />

          <motion.a 
            href="/tracking-order" 
            className="flex items-center justify-center w-full rounded-full p-3 md:p-[16px_26px] gap-3 transition duration-500 cursor-pointer bg-[#ee611b] text-white hover:bg-white hover:text-[#ee611b] font-bold border"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>Konfirmasi Pembayaran</span>
          </motion.a>
        </motion.div>
      </motion.form>
    </div>
  );
};

export default BookingDetail;