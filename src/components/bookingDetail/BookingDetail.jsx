import React from 'react'
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import { TiLocationOutline } from "react-icons/ti";
import { FaTruckFast } from "react-icons/fa6";
import { GiCoffeeCup } from "react-icons/gi";
import { useParams } from 'react-router-dom';
import { menus } from '../..//assets/assets';

const BookingDetail = () => {

  const { slug } = useParams();
  const menu = menus.find((item) => item.slug === slug);

  if (!menu) {
    return <p>Menu tidak ditemukan.</p>;
  }

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

  // Ubah harga string ke number
  const originalPrice = typeof menu.price === "string"
    ? parseInt(menu.price.replace(/[^\d]/g, ""), 10)
    : menu.price;


  const totalDiscount = 20 + 350;
  const finalPrice = originalPrice - totalDiscount;



  return (
    <div>
      <div id="Banner" className="relative w-full h-[240px] md:h-[400px] flex items-center shrink-0 overflow-hidden -mb-[10px] top-10 sm:top-16">
        <h1 className="text-center mx-auto font-extrabold text-[40px] leading-[60px]  md:leading-[60px] text-white mb-5 z-20 px-4">Start Order Now!</h1>
        <div className="absolute w-full h-full bg-[linear-gradient(180deg,_rgba(0,0,0,0)_0%,#000000_91.83%)] z-10" />
        <img src="/assets/images/backgrounds/makanan.jpg" className="absolute w-full h-full object-cover object-top" alt="" />
      </div>

    <form action="booking-finished.html" className="relative flex flex-col md:flex-row justify-center max-w-[1130px] mx-auto gap-[15px] md:gap-[30px] mb-20 z-20 px-4 md:px-0">
      {/* Left Column */}
      <div className="flex flex-col shrink-0 w-full md:w-[500px] h-fit rounded-[20px] border border-[#E0DEF7] p-[20px] md:p-[30px] gap-[20px] md:gap-[30px] bg-white">
        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="flex shrink-0 w-full md:w-[160px] h-[220px] md:h-[120px] rounded-[20px] overflow-hidden">
            <img src={menu.thumbnail} className="w-full h-full object-cover" alt="thumbnail" />
          </div>
          <div className="flex flex-col gap-2 w-full md:w-auto">
            <p className="font-bold text-xl md:text-4xl leading-[26px] md:leading-[35px] text-center md:text-left">{menu.name}</p>
            <div className="flex items-center justify-center md:justify-start gap-[6px]">
              <TiLocationOutline className="w-5 h-5 lg:w-7 lg:h-7 text-orange-600" />
              <p className="font-semibold text-lg">{menu.location}</p>
            </div>
          </div>
        </div>
        <hr className="border-[#F6F5FD]" />
        <div className="flex flex-col gap-4">
          <h2 className="font-bold text-lg md:text-base">Form Pemesanan</h2>
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="font-semibold">Nama</label>
            <div className="flex items-center rounded-full border border-[#000929] px-5 gap-[10px] transition-all duration-300 focus-within:ring-2 focus-within:ring-orange-600">
              <img src="/assets/images/icons/security-user-black.svg" className="w-6 h-6" alt="icon" />
              <input type="text" name="name" id="name" className="appearance-none outline-none w-full py-3 font-semibold placeholder:font-normal placeholder:text-[#000929]" placeholder="Ketik Nama Anda" />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="phone" className="font-semibold">No Telephone / WA</label>
            <div className="flex items-center rounded-full border border-[#000929] px-5 gap-[10px] transition-all duration-300 focus-within:ring-2 focus-within:ring-orange-600">
              <img src="/assets/images/icons/call-black.svg" className="w-6 h-6" alt="icon" />
              <input type="tel" name="phone" id="phone" className="appearance-none outline-none w-full py-3 font-semibold placeholder:font-normal placeholder:text-[#000929]" placeholder="Ketika No Telephone Anda" />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="address" className="font-semibold">Alamat Lengkap</label>
            <div className="flex items-center rounded-full border border-[#000929] px-5 gap-[10px] transition-all duration-300 focus-within:ring-2 focus-within:ring-[#0D903A] overflow-hidden">
              <img src="/assets/images/icons/calendar-black.svg" className="w-6 h-6" alt="icon" />
              <input type="text" name="address" id="address" className="relative appearance-none outline-none w-full py-3 font-semibold [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:w-full [&::-webkit-calendar-picker-indicator]:h-full [&::-webkit-calendar-picker-indicator]:opacity-0" placeholder="Ketik Alamat Tujuan" />
            </div>
          </div>
        </div>
        <hr className="border-[#F6F5FD]" />
        <div className="flex items-center gap-3">
          <IoCheckmarkDoneCircleSharp className="w-[50px] h-[50px] text-orange-600" />
          <p className="font-semibold leading-[28px] text-sm md:text-base">Pastikan Mengisi Form Pemesanan Dengan Benar</p>
        </div>
        <hr className="border-[#F6F5FD]" />
        <div className="flex flex-col gap-[20px] md:gap-[30px]">
          <h2 className="font-bold text-lg md:text-base">Bonus Yang Akan Kamu Dapatkan</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[20px] md:gap-[30px]">
            <div className="flex items-center gap-4">
              <GiCoffeeCup className="w-5 h-5 lg:w-8 lg:h-8 text-orange-600" />
              <div className="flex flex-col gap-[2px]">
                <p className="font-bold text-base md:text-lg leading-[22px] md:leading-[24px]">Free Snack</p>
                <p className="text-sm leading-[21px]">Roti dan Kopi</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <FaTruckFast className="w-5 h-5 lg:w-8 lg:h-8 text-orange-600" />
              <div className="flex flex-col gap-[2px]">
                <p className="font-bold text-base md:text-lg leading-[22px] md:leading-[24px]">Gratis Ongkir</p>
                <p className="text-sm leading-[21px]">24 Jam</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column */}
      <div className="flex flex-col shrink-0 w-full md:w-[400px] h-fit rounded-[20px] border border-[#E0DEF7] p-[20px] md:p-[30px] gap-[20px] md:gap-[30px] bg-white">
        <h2 className="font-bold text-lg md:text-base">Detail Pesanan Kamu</h2>
        <div className="flex flex-col gap-5">
          <div className="flex items-center justify-between">
            <p className="font-semibold">Nama Makanan</p>
            <p className="font-bold">{menu.name}</p>
          </div>
          <div className="flex items-center justify-between">
            <p className="font-semibold">Harga</p>
            <p className="font-bold">{formatPrice(menu.price)}</p>
          </div>
          <div className="flex items-center justify-between">
            <p className="font-semibold">Voucher</p>
            <p className="font-bold text-[#FF2D2D]">{formatPrice(totalDiscount)}</p>
          </div>
          <div className="flex items-center justify-between">
            <p className="font-semibold">Total Harga</p>
            <p className="font-bold text-[18px] md:text-[22px] leading-[27px] md:leading-[33px] text-orange-600">
             {formatPrice(finalPrice)}
            </p>
          </div>
        </div>
        <hr className="border-[#F6F5FD]" />
        <h2 className="font-bold text-lg md:text-base">Send Payment to</h2>
        <div className="flex flex-col gap-[20px] md:gap-[30px]">
          <div className="flex items-center gap-3">
            <div className="w-[60px] md:w-[71px] flex shrink-0">
              <img src="/assets/images/logos/bca.svg" className="w-full object-contain" alt="bank logo" />
            </div>
            <div className="flex flex-col gap-[2px]">
              <div className="flex items-center gap-1">
                <p className="font-semibold text-sm md:text-base">Muhafi</p>
                <IoCheckmarkDoneCircleSharp className="w-[18px] h-[18px] text-orange-600" />
              </div>
              <p className="text-sm">123542331553</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-[60px] md:w-[71px] flex shrink-0">
              <img src="/assets/images/logos/mandiri.svg" className="w-full object-contain" alt="bank logo" />
            </div>
            <div className="flex flex-col gap-[2px]">
              <div className="flex items-center gap-1">
                <p className="font-semibold text-sm md:text-base">Bilal</p>
                <IoCheckmarkDoneCircleSharp className="w-[18px] h-[18px] text-orange-600" />
              </div>
              <p className="text-sm">34009123</p>
            </div>
          </div>
        </div>
        <hr className="border-[#F6F5FD]" />
        <a href="/tracking-order" className="flex items-center justify-center w-full rounded-full p-3 md:p-[16px_26px] gap-3 transition duration-500 cursor-pointer bg-[#ee611b] text-white hover:bg-white hover:text-[#ee611b] font-bold border">
          <span>Konfirmasi Pembayaran</span>
        </a>
      </div>
    </form>
    </div>
  )
}

export default BookingDetail
