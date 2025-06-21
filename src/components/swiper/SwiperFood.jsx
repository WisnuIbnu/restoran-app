import { Swiper, SwiperSlide } from "swiper/react"
import { food } from '../../assets/assets'
import "swiper/css";

const SwiperFood = () => {

  return (
    <section id="Cities" className="flex flex-col gap-[30px] mt-[100px]">
      <div className="w-full max-w-[1130px] mx-auto flex flex-col md:flex-row items-center justify-center md:justify-between gap-4 text-center md:text-left">
        <h2 className="font-bold text-[28px] md:text-[32px] leading-[42px] md:leading-[48px] whitespace-nowrap">
          Menu Terbaik Kami <br />
          Pilih Favorit Anda!
        </h2>
        <a
          href="#"
          className="rounded-full py-3 px-5 bg-white font-bold border border-gray-300 shadow-sm"
        >
          Best Seller Food
        </a>
      </div>
      <div className="swiper w-full">
        <div className="swiper-wrapper">
          <Swiper
          direction="horizontal"
          spaceBetween={30}
          slidesPerView="auto"
          slidesOffsetAfter={30}
          slidesOffsetBefore={30}>

          {food.map((makanan) => (

            <SwiperSlide 
            key={makanan.id} 
            className="!w-fit first-of-type:pl-[calc((100%-1130px-60px)/2)] last-of-type:pr-[calc((100%-1130px-60px)/2)]">
                  <div className="card">
                    <div className="relative flex shrink-0 w-[230px] h-[300px] rounded-[20px] overflow-hidden">
                      <div className="relative flex flex-col justify-end w-full h-full p-5 gap-[2px] bg-[linear-gradient(180deg,_rgba(0,0,0,0)_49.87%,_rgba(0,0,0,0.8)_100%)] z-10">
                        <h3 className="font-bold text-xl leading-[30px] text-white">
                          {makanan.name}
                        </h3>
                        <p className="text-white">{makanan.status}</p>
                      </div>
                      <img
                        src={makanan.imageUrl}
                        className="absolute w-full h-full object-cover"
                        alt="thumbnails"
                      />
                    </div>
                  </div>
            </SwiperSlide>

          ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default SwiperFood
