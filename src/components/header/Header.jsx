
const Header = () => {
  return (
  <header className="flex flex-col w-full">
    {/* HERO BANNER */}
    <section id="Hero-Banner" className="relative flex flex-col lg:flex-row h-auto lg:h-[720px] -mb-[60px] mt-15 sm:mt-13 px-6 sm:px-10 lg:px-0">
      
      {/* Hero Text */}
      <div
        id="Hero-Text"
        className="relative flex flex-col w-full lg:max-w-[650px] rounded-2xl border border-[#E0DEF7] p-6 sm:p-10 gap-6 sm:gap-[30px] bg-white z-10 mt-10 lg:mt-[70px] lg:ml-[calc((100%-1130px)/2)]"
      >
        <div className="flex items-center w-fit rounded-full py-2 px-4 gap-2 bg-[#000929] text-xs sm:text-sm">
          <img src="assets/images/icons/crown-white.svg" className="w-4 h-4 sm:w-5 sm:h-5" alt="icon" />
          <span className="font-semibold text-white">
            Restoran kami masuk dalam daftar 500 bisnis paling produktif versi Fortune.
          </span>
        </div>
        <h1 className="font-extrabold text-3xl sm:text-4xl lg:text-[50px] leading-tight lg:leading-[60px]">
          Pilihan Terbaik untuk Tubuh Sehat.
          <br />
          Nikmati Makanan, Rasakan Manfaatnya.
        </h1>
        <p className="text-base sm:text-lg leading-relaxed text-[#000929]">
          Restoran yang tepat bisa memberikan pengalaman makan yang lebih baik dan sehat, sekaligus mendukung pertumbuhan bisnis Anda.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5">
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
        </div>
      </div>

      {/* Hero Image */}
      <div
        id="Hero-Image"
        className="relative mt-6 lg:absolute lg:right-0 lg:top-0 lg:w-[calc(100%-((100%-1130px)/2)-305px)] lg:h-[720px] rounded-bl-[40px] overflow-hidden"
      >
        <img
          src="assets/images/backgrounds/makanan.jpg"
          className="w-full h-full object-cover rounded-xl lg:rounded-none"
          alt="hero background"
        />
      </div>
    </section>

    {/* CLIENTS & STATS SECTION */}
    <div className="flex flex-col pt-16 pb-10 px-6 sm:px-10 lg:px-[120px] gap-10 bg-[#ee611b] mt-5 sm:mt-10">
      
      {/* Logos */}
      <div className="flex items-center justify-center flex-wrap max-w-[1130px] mx-auto gap-6 sm:gap-[30px] px-[6px]">
        <img src="assets/images/logos/grap.png" className=" h-16 sm:h-32" alt="logo" />
        <img src="assets/images/logos/uber.png" className=" h-16 sm:h-32" alt="logo" />
        <img src="assets/images/logos/gojek.png" className=" h-16 sm:h-32 hidden sm:block" alt="logo" />
        <img src="assets/images/logos/yumi.png" className=" h-16 sm:h-32" alt="logo" />
        <img src="assets/images/logos/maxim.png" className=" h-16 sm:h-32" alt="logo" />
        <img src="assets/images/logos/gojek.png" className=" h-16 sm:h-32 sm:hidden" alt="logo" />
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 justify-center text-center">
        <div>
          <p className="text-sm sm:text-lg text-[#F7F7FD]">Menu Lezat & Sehat</p>
          <p className="font-bold text-2xl sm:text-[38px] text-white">120M+</p>
        </div>
        <div>
          <p className="text-sm sm:text-lg text-[#F7F7FD]">Pelanggan Puas</p>
          <p className="font-bold text-2xl sm:text-[38px] text-white">98%</p>
        </div>
        <div>
          <p className="text-sm sm:text-lg text-[#F7F7FD]">Cabang di Berbagai Kota</p>
          <p className="font-bold text-2xl sm:text-[38px] text-white">90+</p>
        </div>
        <div>
          <p className="text-sm sm:text-lg text-[#F7F7FD]">Acara & Promo Mendukung</p>
          <p className="font-bold text-2xl sm:text-[38px] text-white">139M+</p>
        </div>
      </div>
    </div>
  </header>
  )
}

export default Header
