import { menu } from '../../assets/assets'
import { MdFastfood } from "react-icons/md"; 
import { TiLocationOutline } from "react-icons/ti"
import { GrLinkNext } from "react-icons/gr";


const RestorantBranch = () => {

  return (
    <section
      id="Fresh-Space"
      className="flex flex-col gap-[30px] w-full max-w-[1130px] mx-auto mt-[100px] mb-[40px]"
    >
      <h2 className="font-bold text-lg text-center md:text-[32px] leading-[42px] md:leading-[48px] whitespace-nowrap">
        Sajian Nusantara Terbaru <br />
        Cita Rasa Lokal dalam Sentuhan Spesial.
      </h2>

      <div  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-1 sm:px-10 gap-[30px]">    
        {menu.map((menu) => (
          <div className="card block">
            <a href={`/menu/${menu.slug}`}>
            <div className="flex flex-col rounded-2xl lg:rounded-[20px] border border-[#E0DEF7] bg-white overflow-hidden hover:shadow-md transition-shadow mx-12 sm:mx-0">
              {/* Thumbnail with badge */}
              <div className="thumbnail-container relative w-full h-[180px] sm:h-[200px]">
                <p className="absolute top-4 left-4 lg:top-5 lg:left-5 w-fit rounded-full px-3 py-1 lg:p-[6px_16px] bg-[#ee611b] font-bold text-xs lg:text-sm leading-5 lg:leading-[21px] text-[#F7F7FD]">
                  Popular
                </p>
                <img
                  src={menu.thumbnail}
                  className="w-full h-full object-cover"
                  alt="Office thumbnail"
                  loading="lazy"
                />
              </div>

              {/* Card content */}
              <div className="card-detail-container flex flex-col p-4 lg:p-5 pb-5 lg:pb-[30px] gap-3 lg:gap-4">
                {/* Title */}
                <h3 className="line-clamp-2 font-bold text-lg lg:text-[22px] leading-7 lg:leading-[36px] min-h-[56px] lg:h-[72px]">
                  {menu.name}
                </h3>

                {/* Price and duration */}
                <div className="flex items-center justify-between">
                  <p className="font-semibold text-base lg:text-xl leading-6 lg:leading-[30px]">
                    {menu.price}
                  </p>
                  <div className="flex items-center gap-1 lg:gap-[6px]">
                    <p className="font-semibold text-sm lg:text-base">{menu.feature}</p>
                     <MdFastfood className="w-5 h-5 lg:w-6 lg:h-6 text-orange-600" />
                  </div>
                </div>

                <hr className="border-gray-400" />

                {/* Location and rating */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 lg:gap-[6px]">
                     <TiLocationOutline className="w-5 h-5 lg:w-7 lg:h-7 text-orange-600" />
                    <p className="font-semibold text-sm lg:text-base">{menu.location}</p>
                  </div>
                  <div className="flex items-center gap-1 lg:gap-[6px]">
                    <p className="font-semibold text-sm lg:text-base">{menu.rate}/5</p>
                    <img
                      src="/assets/images/icons/Star 1.svg"
                      className="w-5 h-5 lg:w-6 lg:h-6"
                      alt="Rating icon"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
            </a>
          </div>
        ))}
      </div>

      <a href="/menu">
        <button className='w-max flex items-center justify-center border-[0.5px] gap-1 rounded-full py-3 px-6 mx-auto transition duration-500 cursor-pointer bg-[#ee611b] text-white font-semibold hover:bg-white hover:text-[#ee611b]'>
          Show More <GrLinkNext className="w-5 h-5 lg:w-6 lg:h-6" />
        </button>
      </a>
    </section>
  )
}

export default RestorantBranch

