import React from 'react'
import { FaTruckFast } from "react-icons/fa6";
import { GiCoffeeCup } from "react-icons/gi";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";

const MyBooking = () => {

  return (
    <div>
      <div id="Banner" className="relative w-full h-[240px] md:h-[400px] flex items-center shrink-0 overflow-hidden -mb-[10px] top-10 sm:top-16">
        <h1 className="text-center mx-auto font-extrabold text-[40px] leading-[60px]  md:leading-[60px] text-white mb-5 z-20 px-4">View Your Order Food Details</h1>
        <div className="absolute w-full h-full bg-[linear-gradient(180deg,_rgba(0,0,0,0)_0%,#000000_91.83%)] z-10" />
        <img src="/assets/images/backgrounds/makanan.jpg" className="absolute w-full h-full object-cover object-top" alt="" />
      </div>

        <section id="Check-Booking" className="relative flex flex-col w-full md:w-[930px] shrink-0 gap-[20px] md:gap-[30px] mx-auto mb-[50px] md:mb-[100px] z-20 px-4 md:px-0">
        <form action className="flex flex-col md:flex-row items-end rounded-[20px] border border-[#E0DEF7] p-[20px] md:p-[30px] gap-[16px] bg-white">
          <div className="flex flex-col w-full gap-2">
            <label htmlFor="name" className="font-semibold">Masukan Kode Transaksi Anda</label>
            <div className="flex items-center rounded-full border border-[#000929] px-5 gap-[10px] transition-all duration-300 focus-within:ring-2 focus-within:ring-orange-600">
              <img src="assets/images/icons/receipt-text-black.svg" className="w-6 h-6" alt="icon" />
              <input type="text" name="name" id="name" className="appearance-none outline-none w-full py-3 font-semibold placeholder:font-normal placeholder:text-[#000929]" placeholder="Ketika Kode Transaksi" />
            </div>
          </div>
          <div className="flex flex-col w-full gap-2">
            <label htmlFor="phone" className="font-semibold">Masukan No Telephone Anda</label>
            <div className="flex items-center rounded-full border border-[#000929] px-5 gap-[10px] transition-all duration-300 focus-within:ring-2 focus-within:ring-orange-600">
              <img src="assets/images/icons/call-black.svg" className="w-6 h-6" alt="icon" />
              <input type="tel" name="phone" id="phone" className="appearance-none outline-none w-full py-3 font-semibold placeholder:font-normal placeholder:text-[#000929]" placeholder="Ketik No Telephone" />
            </div>
          </div>
          <button type="submit" className="flex items-center justify-center rounded-full p-[12px_20px] md:p-[12px_30px] gap-3transition duration-500 cursor-pointer bg-[#ee611b] text-white hover:bg-white hover:text-[#ee611b] border w-full md:w-auto font-semibold">
            <span className="text-nowrap">Cek Pesanan</span>
          </button>
        </form>
        <div id="Result" className="grid grid-cols-1 md:grid-cols-2 gap-[20px] md:gap-[30px]">
          <div className="flex flex-col h-fit shrink-0 rounded-[20px] border border-[#E0DEF7] p-[20px] md:p-[30px] gap-[20px] md:gap-[30px] bg-white">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <div className="flex shrink-0 w-full md:w-[160px] h-[220px] md:h-[120px] rounded-[20px] overflow-hidden">
                <img src="https://cdn0-production-images-kly.akamaized.net/hqjIui4KccAXZ-qsoK-5Rbh2JUs=/800x450/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/1359428/original/084420000_1475132767-Black-pepper-petai-fried-rice.jpg" className="w-full h-full object-cover" alt="thumbnail" />
              </div>
              <div className="flex flex-col gap-2 w-full md:w-auto text-center md:text-left">
                <p className="font-bold text-lg md:text-xl leading-[26px] md:leading-[30px]">Nasi Goreng Larana Special</p>
                <div className="flex items-center justify-center md:justify-start gap-[6px]">
                  <img src="assets/images/icons/location.svg" className="w-6 h-6" alt="icon" />
                  <p className="font-semibold">Jakarta Pusat</p>
                </div>
              </div>
            </div>
            <hr className="border-[#F6F5FD]" />
            <div className="flex flex-col gap-4">
              <h2 className="font-bold text-lg md:text-base">Detail Pelanggan</h2>
              <div className="flex flex-col gap-2">
                <h3 className="font-semibold">Nama Lengkap</h3>
                <div className="flex items-center rounded-full px-5 py-3 gap-[10px] bg-[#F7F7FD]">
                  <img src="assets/images/icons/security-user-black.svg" className="w-6 h-6" alt="icon" />
                  <p className="font-semibold">Muhafi</p>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-semibold">No Telephone</h3>
                <div className="flex items-center rounded-full px-5 py-3 gap-[10px] bg-[#F7F7FD]">
                  <img src="assets/images/icons/call-black.svg" className="w-6 h-6" alt="icon" />
                  <p className="font-semibold">0256843568796</p>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-semibold">Alamat</h3>
                <div className="flex items-center rounded-full px-5 py-3 gap-[10px] bg-[#F7F7FD]">
                  <img src="assets/images/icons/calendar-black.svg" className="w-6 h-6" alt="icon" />
                  <p className="font-semibold">Jl. Soekarno Hatta, Mojolangu, Kec. Lowokwaru, Kota Malang</p>
                </div>
              </div>
            </div>
            <hr className="border-[#F6F5FD]" />
            <div className="flex items-center gap-3">
              <IoCheckmarkDoneCircleSharp className="w-[50px] h-[50px] text-orange-600" />
              <p className="font-semibold leading-[28px] text-sm md:text-base">Makanan Telah di Terima</p>
            </div>
          </div>
          <div className="flex flex-col h-fit shrink-0 rounded-[20px] border border-[#E0DEF7] p-[20px] md:p-[30px] gap-[20px] md:gap-[30px] bg-white">
            <h2 className="font-bold text-lg md:text-base">Detail Pesanan Kamu</h2>
            <div className="flex flex-col gap-5">
              <div className="flex items-center justify-between">
                <p className="font-semibold">Status Pembayaran</p>
                <p className="rounded-full w-fit p-[6px_16px] bg-[#0D903A] font-bold text-sm leading-[21px] text-[#F7F7FD]">SUCCESS</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="font-semibold">Status Pembayaran</p>
                <p className="rounded-full w-fit p-[6px_16px] bg-[#0D903A] font-bold text-sm leading-[21px] text-[#F7F7FD]">SUCCESS</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="font-semibold">kode Transaksi</p>
                <p className="font-bold">PAP23153434</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="font-semibold">Total Harga</p>
                <p className="font-bold text-[18px] md:text-[22px] leading-[27px] md:leading-[33px] text-orange-600">Rp 249.660</p>
              </div>
            </div>
            <hr className="border-[#F6F5FD]" />
            <h2 className="font-bold text-lg md:text-base">Bonus Yang Kamu Dapatkan</h2>
            <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-0">
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
      </section>
    </div>
  )
}

export default MyBooking
