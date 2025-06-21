import { FiClock } from "react-icons/fi";
import { MdFastfood, MdNotificationsActive } from "react-icons/md"; 
import { AiOutlineWallet } from "react-icons/ai"; 
import { BsFillCalendarCheckFill } from "react-icons/bs"; 
import { HiOutlineBuildingStorefront } from "react-icons/hi2"; 

const Benefits = () => {
  
  return (
<section
  id="Benefits"
  className="flex flex-col lg:flex-row items-center justify-center w-full lg:w-[1015px] mx-auto gap-10 lg:gap-[100px] mt-[60px] lg:mt-[100px] px-4 lg:px-0"
>
  {/* Heading - moves to top on mobile */}
  <h2 className="font-bold text-[28px]  text-center md:text-[32px] leading-[42px] md:leading-[48px] whitespace-nowrap">
  Mengapa Harus <br />
  Makanan di Larana?
  </h2>

  {/* Benefits grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-[30px] w-full lg:w-auto px-6 sm:px-0">
    {/* Benefit Item 1 */}
    <div className="flex items-start gap-4">
      <div className="flex items-center justify-center shrink-0 w-14 h-14 lg:w-[70px] lg:h-[70px] rounded-2xl lg:rounded-[23px] bg-orange-200 overflow-hidden">
        <FiClock className="w-6 h-6 lg:w-[34px] lg:h-[34px] text-orange-600" />
      </div>
      <div className="flex flex-col gap-1 lg:gap-[5px]">
        <p className="font-bold text-base lg:text-lg leading-6 lg:leading-[27px]">
          Cepat & Praktis
        </p>
        <p className="text-sm leading-5 lg:leading-[24px]">
          Pesan makanan dalam hitungan detik tanpa antri.
        </p>
      </div>
    </div>

    {/* Benefit Item 2 */}
    <div className="flex items-start gap-4">
      <div className="flex items-center justify-center shrink-0 w-14 h-14 lg:w-[70px] lg:h-[70px] rounded-2xl lg:rounded-[23px] bg-orange-200  overflow-hidden">
        <MdFastfood className="w-6 h-6 lg:w-[34px] lg:h-[34px] text-orange-600" />
      </div>
      <div className="flex flex-col gap-1 lg:gap-[5px]">
        <p className="font-bold text-base lg:text-lg leading-6 lg:leading-[27px]">Banyak Pilihan Menu </p>
        <p className="text-sm leading-5 lg:leading-[24px]">
          Tersedia berbagai jenis makanan ringan hingga berat.
        </p>
      </div>
    </div>

    {/* Benefit Item 3 */}
    <div className="flex items-start gap-4">
      <div className="flex items-center justify-center shrink-0 w-14 h-14 lg:w-[70px] lg:h-[70px] rounded-2xl lg:rounded-[23px] bg-orange-200  overflow-hidden">
        <AiOutlineWallet className="w-6 h-6 lg:w-[34px] lg:h-[34px] text-orange-600" />
      </div>
      <div className="flex flex-col gap-1 lg:gap-[5px]">
        <p className="font-bold text-base lg:text-lg leading-6 lg:leading-[27px]">Harga Terjangkau</p>
        <p className="text-sm leading-5 lg:leading-[24px]">
           Makanan enak, harga pas di kantong mahasiswa.
        </p>
      </div>
    </div>

    {/* Benefit Item 4 */}
    <div className="flex items-start gap-4">
      <div className="flex items-center justify-center shrink-0 w-14 h-14 lg:w-[70px] lg:h-[70px] rounded-2xl lg:rounded-[23px] bg-orange-200  overflow-hidden">
        <BsFillCalendarCheckFill className="w-6 h-6 lg:w-[34px] lg:h-[34px] text-orange-600" />
      </div>
      <div className="flex flex-col gap-1 lg:gap-[5px]">
        <p className="font-bold text-base lg:text-lg leading-6 lg:leading-[27px]">Kualitas Terjaga</p>
        <p className="text-sm leading-5 lg:leading-[24px]">
          Bahan segar, dimasak langsung oleh mitra kantin terpercaya.
        </p>
      </div>
    </div>

    {/* Benefit Item 5 */}
    <div className="flex items-start gap-4">
      <div className="flex items-center justify-center shrink-0 w-14 h-14 lg:w-[70px] lg:h-[70px] rounded-2xl lg:rounded-[23px] bg-orange-200  overflow-hidden">
      <MdNotificationsActive className="w-6 h-6 lg:w-[34px] lg:h-[34px] text-orange-600" />
      </div>
      <div className="flex flex-col gap-1 lg:gap-[5px]">
        <p className="font-bold text-base lg:text-lg leading-6 lg:leading-[27px]">
          Pesan & Bayar Online
        </p>
        <p className="text-sm leading-5 lg:leading-[24px]">
          Tanpa uang cash, cukup klik dan makanan siap disiapkan.
        </p>
      </div>
    </div>

    {/* Benefit Item 6 */}
    <div className="flex items-start gap-4">
      <div className="flex items-center justify-center shrink-0 w-14 h-14 lg:w-[70px] lg:h-[70px] rounded-2xl lg:rounded-[23px] bg-orange-200 overflow-hidden">
         <HiOutlineBuildingStorefront className="w-6 h-6 lg:w-[34px] lg:h-[34px] text-orange-600" />
      </div>
      <div className="flex flex-col gap-1 lg:gap-[5px]">
        <p className="font-bold text-base lg:text-lg leading-6 lg:leading-[27px]">
          Cocok untuk Semua
        </p>
        <p className="text-sm leading-5 lg:leading-[24px]">
          Pelajar, guru, dan staf bisa menikmati layanan KantinQ.
        </p>
      </div>
    </div>
  </div>
</section>
  )
}

export default Benefits
