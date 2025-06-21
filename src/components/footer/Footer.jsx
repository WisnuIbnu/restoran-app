import { HashLink } from 'react-router-hash-link';
import {
  FaFacebook,
  FaInstagram,
  FaLocationArrow,
  FaMobileAlt,
  FaWhatsapp,
} from "react-icons/fa";

const FooterLinks = [
  {
    title: "Home",
    to: "/",
  },
  {
    title: "Menu",
    to: "/menu",
  },
  {
    title: "Keranjang",
    to: "/tracking-order",
  },
];

const Footer = () => {
  return (
    <>
     <div className="container px-10 sm:px-20">
        <div data-aos="zoom-in" className="grid md:grid-cols-3 px-2 sm:px-0 pt-5">
          {/* company details */}
          <div className="py-8 px-2">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
              <img src='/assets/images/logos/logo.png' alt="" className="w-20" />
            </h1>
            <p>
              Larana adalah kantin online yang menyediakan beragam menu lezat dengan layanan cepat, aman, dan praktis untuk pengalaman jajan yang nyaman.
            </p>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
            <div>
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Important Pages
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((link) => (
                    <li
                      className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300"
                      key={link.title}
                    >
                      <HashLink
                        to={link.to} 
                        className=""
                      >
                        {link.title}
                      </HashLink>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <div className="py-8 px-2">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Pages
                </h1>
                <ul className="flex flex-col gap-3">
                {FooterLinks.map((link) => (
                    <li
                      className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300"
                      key={link.title}
                    >
                      <HashLink
                        to={link.to} 
                        className=""
                      >
                        {link.title}
                      </HashLink>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* social links */}

            <div>
              <div className="flex items-center gap-3 mt-6">
                <a href=""
                >
                  <FaInstagram className="text-3xl" />
                </a>
                <a href="#">
                  <FaFacebook className="text-3xl" />
                </a>
                <a href=""><FaWhatsapp className="text-3xl" /></a>
              </div>
              <div className="mt-6">
                <div className="flex items-center gap-3">
                  <FaLocationArrow  className='text-4xl sm:text-2xl' />
                  <a href="">Jl. Soekarno Hatta, Mojolangu, Kota Malang, Jawa Timur</a>
                </div>
                <div className="flex items-center gap-3 mt-3">
                  <FaMobileAlt  />
                  <a href="">0912312412</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[7%] mt-4 py-6'>
      </div> 
    </>
  )
}

export default Footer