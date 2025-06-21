import React from 'react'

const HeaderMenus = () => {
  return (
  <header className="flex flex-col w-full md:mt-24 px-4 sm:px-6 lg:px-8 mt-24">
    <section id="Hero-Banner" className="relative flex flex-col md:flex-row h-auto md:h-[434px]">
      {/* Hero Text Section - Selalu di atas pada mobile, kiri pada desktop */}
      <div
        id="Hero-Text"
        className="relative flex flex-col w-full md:max-w-[650px] h-fit rounded-[20px] md:rounded-[30px] border border-[#E0DEF7] p-6 md:p-10 gap-5 md:gap-[30px] bg-white md:mt-[70px] md:ml-[calc((100%-1130px)/2)] z-10 order-1"
      >
        <h1 className="font-extrabold text-3xl md:text-[50px] leading-[1.2] md:leading-[60px]">
      Masakan Spesial <br />{" "}
      <span className="text-[#ee611b]">Untuk Momen Terlezat</span>
        </h1>
        <p className="text-base md:text-lg leading-6 md:leading-8 text-[#000929]">
          Makanan yang enak dan lezat dapat memberikan pengalaman yang menyenangkan,
            meningkatkan suasana hati, serta mempererat kebersamaan dalam setiap momen penting.
        </p>
      </div>
      
      <div
        id="Hero-Image"
        className="relative md:absolute w-full md:w-[calc(100%-((100%-1130px)/2)-305px)] h-[350px] md:h-[434px] rounded-[20px] md:rounded-bl-[40px] overflow-hidden order-2 md:order-2 mt-6 md:mt-0 right-0"
      >
        <img
          src="https://images.homify.com/v1525332547/p/photo/image/2545724/pc3.jpg"
          className="w-full h-full object-cover "
          alt="hero background"
        />
      </div>
    </section>
  </header>
  )
}

export default HeaderMenus
