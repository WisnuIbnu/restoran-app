import { BiSolidBadgeCheck } from "react-icons/bi";
import { LuBookOpenCheck } from "react-icons/lu";
import { TiLocationOutline } from "react-icons/ti";
import { FiClock } from "react-icons/fi";
import { MdFastfood, MdNotificationsActive } from "react-icons/md"; 
import { AiOutlineWallet } from "react-icons/ai"; 
import { BsFillCalendarCheckFill } from "react-icons/bs"; 
import { HiOutlineBuildingStorefront } from "react-icons/hi2"; 
import { IoBookmarks } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoPersonSharp } from "react-icons/io5";
import {  menus } from '../../assets/assets';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useParams } from 'react-router-dom';


const Details = () => {
  const { slug } = useParams();
  const menu = menus.find((item) => item.slug === slug);

  if (!menu) {
    return <p>Menu tidak ditemukan.</p>;
  }
const features = [
  {
    icon: <FiClock className="w-6 h-6 lg:w-[50px] lg:h-[50px] text-orange-600" />,
    title: "Cepat & Praktis",
    desc: "Pesan makanan dalam hitungan detik tanpa antri."
  },
  {
    icon: <BsFillCalendarCheckFill className="w-6 h-6 lg:w-[50px] lg:h-[50px] text-orange-600" />,
    title: "Banyak Menu",
    desc: "Tersedia berbagai jenis makanan ringan hingga berat."
  },
  {
    icon: <HiOutlineBuildingStorefront className="w-6 h-6 lg:w-[50px] lg:h-[50px] text-orange-600" />,
    title: "Harga Terjangkau",
    desc: "Makanan enak, harga pas di kantong mahasiswa."
  },
  {
    icon: <MdFastfood className="w-6 h-6 lg:w-[50px] lg:h-[50px] text-orange-600" />,
    title: "Kualitas Terjaga",
    desc: "Bahan segar, dimasak langsung oleh mitra kantin terpercaya."
  },
  {
    icon: <AiOutlineWallet className="w-6 h-6 lg:w-[50px] lg:h-[50px] text-orange-600" />,
    title: "Online",
    desc: "Tanpa uang cash, cukup klik dan makanan siap disiapkan."
  },
  {
    icon: <MdNotificationsActive className="w-6 h-6 lg:w-[50px] lg:h-[50px] text-orange-600" />,
    title: "Pilihan Semua",
    desc: "Pelajar, guru, dan staf bisa menikmati layanan KantinQ."
  },
];

  return (
  <>
    <div className="-mb-[50px]">
      <div className="swiper w-full">
        <div className="swiper-wrapper">
          <Swiper
            direction={'horizontal'}
            spaceBetween={4}
            slidesPerView={'auto'}
            slidesOffsetAfter={16}
            slidesOffsetBefore={16}
            freeMode={true}
            grabCursor={true}
            breakpoints={{
              320: {
                slidesPerView: 1.2, 
                spaceBetween: 8,
                slidesOffsetAfter: 16,
                slidesOffsetBefore: 16
              },
              768: {
                slidesPerView: 'auto',
                spaceBetween: 4,
                slidesOffsetAfter: 16,
                slidesOffsetBefore: 16
              },
              1024: {
                slidesPerView: 'auto',
                spaceBetween: 4,
                slidesOffsetAfter: 16,
                slidesOffsetBefore: 16
              }
            }}
          >
            {menu.foodDetails.fotos.map((img, index) => (
              <SwiperSlide
                key={index}
                className="!w-fit"
              >
                <div className="w-[280px] h-[380px] sm:w-[350px] sm:h-[450px] md:w-[500px] md:h-[600px] lg:w-[700px] lg:h-[550px] overflow-hidden">
                  <img 
                    src={img.imgUrl} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
                    alt={`Gallery image ${index + 1}`} 
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
    <section id="Details" className="relative flex flex-col lg:flex-row max-w-[1130px] mx-auto gap-[30px] mb-20 z-10 px-4 lg:px-0">
      {/* Main Content */}
      
      <div className="flex flex-col w-full rounded-[20px] border border-[#E0DEF7] p-5 md:p-[30px] gap-5 md:gap-[30px] bg-white">
        <p className="w-fit rounded-full p-[6px_16px] bg-[#ee611b] font-bold text-sm leading-[21px] text-[#F7F7FD]">
          Popular
        </p>
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="font-extrabold text-2xl md:text-[32px] leading-tight md:leading-[44px]">
              {menu.name}
            </h1>
            <div className="flex items-center gap-[6px] mt-2 md:mt-[10px]">
              <TiLocationOutline className="w-5 h-5 lg:w-7 lg:h-7 text-orange-600" />
              <p className="font-semibold">Malang, Jawa Timur</p>
            </div>
          </div>
          <div className="flex flex-col gap-[6px]">
            <div className="flex items-center gap-1">
              <img src="/assets/images/icons/Star 1.svg" className="w-5 h-5" alt="star" />
              <img src="/assets/images/icons/Star 1.svg" className="w-5 h-5" alt="star" />
              <img src="/assets/images/icons/Star 1.svg" className="w-5 h-5" alt="star" />
              <img src="/assets/images/icons/Star 1.svg" className="w-5 h-5" alt="star" />
              <img src="/assets/images/icons/Star 5.svg" className="w-5 h-5" alt="star" />
            </div>
            <p className="font-semibold md:text-right">{menu.rate} (19,384)</p>
          </div>
        </div>
        
        <p className="leading-relaxed md:leading-[30px]">
            {menu.foodDetails.description}
        </p>
        
        <hr className="border-[#F6F5FD]" />
        
        <h2 className="font-bold">Anda Mendapatkan Apa yang Paling Anda Butuhkan</h2>
        
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 md:gap-[30px]">
          {features.map((item, index) => (
            <div key={index} className="flex items-center gap-4">
              {item.icon}
              <div className="flex flex-col gap-[2px]">
                <p className="font-bold  sm:text-lg leading-[24px]">{item.title}</p>
                <p className="text-sm leading-[21px] hidden sm:block">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
        
        <hr className="border-[#F6F5FD]" />
        
        <div className="flex flex-col gap-[6px]">
          <h2 className="font-bold">Alamat Toko</h2>
          <p>Jl. Soekarno Hatta No.34a, Mojolangu,</p>
          <p>Kec. Lowokwaru, Kota Malang, Jawa Timur 65141</p>
        </div>
        
        <div className="overflow-hidden w-full h-48 md:h-[280px]">
          <div id="my-map-display" className="h-full w-full max-w-[none] bg-none">
            <iframe className="h-full w-full border-0" frameBorder={0} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.4349212965867!2d112.61242817500667!3d-7.953926492070556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e78827994694b27%3A0x4eb4fed2fe1b7977!2sGedung%20A%20Fakultas%20Ilmu%20Komputer%20Universitas%20Brawijaya!5e0!3m2!1sid!2sid!4v1749064305025!5m2!1sid!2sid" />
          </div>
          <a className="from-embedmap-code" href="https://www.bootstrapskins.com/themes" id="enable-map-data">premium bootstrap themes</a>
        </div>
      </div>
      
      {/* Sidebar */}
      <div className="w-full lg:w-[392px] flex flex-col shrink-0 gap-5 md:gap-[30px]">
        {/* Pricing Card */}
        <div className="flex flex-col rounded-[20px] border border-[#E0DEF7] p-5 md:p-[30px] gap-5 md:gap-[30px] bg-white">
          <div>
            <p className="font-extrabold text-2xl md:text-[32px] leading-relaxed md:leading-[48px] text-[#ee611b]">{menu.price}</p>
            <p className="font-semibold mt-1">{menu.feature}</p>
          </div>
          
          <hr className="border-[#F6F5FD]" />
          
          <div className="flex flex-col gap-4 md:gap-5">
            {[
              { text: "Makanan enak dengan cita rasa menggugah selera" },
              { text: "Pilihan makanan sehat dan bergizi seimbang" },
              { text: "Harga terjangkau, cocok untuk kantong pelajar" },
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <BiSolidBadgeCheck className="w-[50px] h-[50px] text-[#ee611b]" />
                <p className="font-semibold leading-relaxed md:leading-[28px]">{item.text}</p>
              </div>
            ))}
          </div>
          
          <hr className="border-[#F6F5FD]" />
          
          <div className="flex flex-col gap-3 md:gap-[14px]">
            <a href={`/booking/${menu.slug}`} className="flex items-center justify-center w-full rounded-full p-3 md:p-[16px_26px] gap-3 transition duration-500 cursor-pointer bg-[#ee611b] text-white hover:bg-white hover:text-[#ee611b] font-bold border">
             <LuBookOpenCheck className="w-6 h-6" />
              <span>Pesan Sekarang</span>
            </a>
            <button className="flex items-center justify-center w-full rounded-full border p-3 md:p-[16px_26px] gap-3 transition duration-500 cursor-pointer hover:bg-[#ee611b] hover:text-white bg-white text-[#ee611b] font-semibold">
              <IoBookmarks className="w-6 h-6" />
              <span>Simpan Untuk Nanti</span> 
            </button>
          </div>
        </div>
        
        {/* Contact Card */}
        <div className="flex flex-col rounded-[20px] border border-[#E0DEF7] p-5 md:p-[30px] gap-4 md:gap-[20px] bg-white">
          <h2 className="font-bold">Kontak Kami</h2>
          <div className="flex flex-col gap-5 md:gap-[30px]">
            {[
              { photo: <IoPersonSharp className="w-[40px] h-[40px] text-[#ee611b]" />, name: "Bilal", title: "Costumer Service" }
            ].map((person, index) => (
              <div key={index} className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="w-12 h-12 md:w-[60px] md:h-[60px] rounded-full overflow-hidden">
                  {person.photo}
                  </div>
                  <div className="flex flex-col gap-[2px]">
                    <p className="font-bold">{person.name}</p>
                    <p className="text-sm leading-[21px]">{person.title}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 md:gap-3">
                  <FaPhone className="w-6 h-6 md:w-6 md:h-6 text-orange-600" />
                  <MdEmail className="w-6 h-6 md:w-6 md:h-6 text-orange-600" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  </>
  )
}

export default Details;