import React, { useState } from "react";
import { MdFastfood } from "react-icons/md";
import { TiLocationOutline } from "react-icons/ti";
import { WiDirectionRight } from "react-icons/wi";
import { menus } from "../../assets/assets";


const Menu = () => {
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentMenus = menus.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(menus.length / itemsPerPage);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <section className="flex flex-col gap-[30px] w-full max-w-[1130px] mx-auto mt-[100px] mb-[40px]">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-1 sm:px-10 gap-[30px]">
        {currentMenus.map((menu, index) => (
          <div key={index} className="card block">
            <a href={`/menu/${menu.slug}`}>
              <div className="flex flex-col rounded-2xl lg:rounded-[20px] border border-[#E0DEF7] bg-white overflow-hidden hover:shadow-md transition-shadow mx-12 sm:mx-0">
                
                <div className="thumbnail-container relative w-full h-[180px] sm:h-[200px]">
                  <p className="absolute top-4 left-4 lg:top-5 lg:left-5 w-fit rounded-full px-3 py-1 lg:p-[6px_16px] bg-[#ee611b] font-bold text-xs lg:text-sm leading-5 lg:leading-[21px] text-[#F7F7FD]">
                    Popular
                  </p>
                  <img
                    src={menu.thumbnail}
                    className="w-full h-full object-cover"
                    alt={menu.name}
                    loading="lazy"
                  />
                </div>

                <div className="card-detail-container flex flex-col p-4 lg:p-5 pb-5 lg:pb-[30px] gap-3 lg:gap-4">
                  <h3 className="line-clamp-2 font-bold text-lg lg:text-[22px] leading-7 lg:leading-[36px] min-h-[56px] lg:h-[72px]">{menu.name}</h3>

                  <div className="flex items-center justify-between">
                    <p className="font-semibold text-base lg:text-xl leading-6 lg:leading-[30px] ">{menu.price}</p>
                    <div className="flex items-center gap-1 lg:gap-[6px]">
                      <p className="font-semibold text-sm lg:text-base">{menu.feature}</p>
                      <MdFastfood className="w-5 h-5 lg:w-6 lg:h-6 text-orange-600" />
                    </div>
                  </div>

                  <hr className="border-gray-400" />

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

    <div className="flex justify-center items-center gap-1 mt-8">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        className={`flex items-center justify-center px-4 h-10 text-base font-medium rounded-lg ${
          currentPage === 1 
            ? "text-gray-400 bg-gray-100 cursor-not-allowed" 
            : "text-gray-700 bg-white hover:bg-gray-100 border border-gray-300"
        }`}
        disabled={currentPage === 1}
      >
        <svg className="w-3.5 h-3.5 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5H1m0 0 4 4M1 5l4-4"/>
        </svg>
      </button>

      {Array.from({ length: totalPages }).map((_, i) => (
        <button
          key={i}
          onClick={() => handlePageChange(i + 1)}
          className={`flex items-center justify-center px-4 h-10 text-base font-medium rounded-lg ${
            currentPage === i + 1 
              ? "text-white bg-[#ee611b] border border-[#ee611b]" 
              : "text-gray-700 bg-white hover:bg-gray-100 border border-gray-300"
          }`}
        >
          {i + 1}
        </button>
      ))}

      <button
        onClick={() => handlePageChange(currentPage + 1)}
        className={`flex items-center justify-center px-4 h-10 text-base font-medium rounded-lg ${
          currentPage === totalPages 
            ? "text-gray-400 bg-gray-100 cursor-not-allowed" 
            : "text-gray-700 bg-white hover:bg-gray-100 border border-gray-300"
        }`}
        disabled={currentPage === totalPages}
      >
        <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
      </button>
    </div>
    </section>
  );
};

export default Menu;
