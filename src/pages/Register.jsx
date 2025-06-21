import { FaGoogle, FaUser, FaEnvelope, FaLock, FaCheck } from 'react-icons/fa';
import { BsFacebook } from "react-icons/bs";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const AnimatedDiv = ({ children }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={itemVariants}
    >
      {children}
    </motion.div>
  );
};

const Register = () => {
  return (
    <motion.div 
      className="min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <motion.div 
          className="text-center"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <img
            src="/assets/images/logos/logo.png"
            className="cursor-pointer mx-auto my-0 h-12 w-12 sm:h-24 sm:w-24"
            alt="logo"
          />
        </motion.div>
      </div>

      <motion.div 
        className="mt-3 sm:mx-auto sm:w-full sm:max-w-md px-5 sm:px-0"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div 
          className="bg-white py-8 px-6 shadow-xl rounded-xl border border-gray-100"
          variants={itemVariants}
        >
          <motion.form className="space-y-5" variants={containerVariants}>
            <AnimatedDiv>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Nama Lengkap
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaUser className="h-4 w-4 text-gray-400" />
                  </div>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 sm:text-sm placeholder-gray-400"
                    placeholder="Syaifudin"
                  />
                </div>
              </div>
            </AnimatedDiv>

            <AnimatedDiv>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Alamat Email
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaEnvelope className="h-4 w-4 text-gray-400" />
                  </div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 sm:text-sm placeholder-gray-400"
                    placeholder="fulan23@gmail.com"
                  />
                </div>
              </div>
            </AnimatedDiv>

            <AnimatedDiv>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaLock className="h-4 w-4 text-gray-400" />
                  </div>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 sm:text-sm placeholder-gray-400"
                    placeholder="••••••••"
                  />
                </div>
                <div className="mt-2 flex items-center">
                  <FaCheck className="h-3 w-3 text-green-500 mr-1" />
                  <span className="text-xs text-gray-500">Minimal 10 karakter</span>
                </div>
              </div>
            </AnimatedDiv>

            <AnimatedDiv>
              <div>
                <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700 mb-1">
                  Konfirmasi Password
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaLock className="h-4 w-4 text-gray-400" />
                  </div>
                  <input
                    id="confirm-password"
                    name="confirm-password"
                    type="password"
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 sm:text-sm placeholder-gray-400"
                    placeholder="••••••••"
                  />
                </div>
              </div>
            </AnimatedDiv>

            <AnimatedDiv>
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="terms-and-privacy"
                    name="terms-and-privacy"
                    type="checkbox"
                    className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="terms-and-privacy" className="text-gray-700">
                    Saya menyetujui{' '}
                    <a href="#" className="text-orange-600 hover:text-orange-500 font-medium transition-colors duration-200">
                      Syarat & Ketentuan
                    </a>{' '}
                    dan{' '}
                    <a href="#" className="text-orange-600 hover:text-orange-500 font-medium transition-colors duration-200">
                      Kebijakan Privasi
                    </a>
                  </label>
                </div>
              </div>
            </AnimatedDiv>

            <AnimatedDiv>
              <div>
                <a href="/">
                  <button
                    type="button"
                    className="group relative w-full flex justify-center py-3 px-4 border border-transparent rounded-xl shadow-sm text-sm font-semibold text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-all duration-200 transform hover:-translate-y-0.5"
                  >
                    <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                      <svg className="h-5 w-5 text-orange-300 group-hover:text-orange-200 transition-colors duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                    </span>
                    Daftar Sekarang
                  </button>
                </a>
              </div>
            </AnimatedDiv>
          </motion.form>

          <motion.div className="mt-8" variants={itemVariants}>
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Atau daftar dengan</span>
              </div>
            </div>

            <motion.div 
              className="mt-6 grid grid-cols-2 gap-3"
              variants={containerVariants}
            >
              <motion.div variants={itemVariants}>
                <button
                  type="button"
                  className="w-full inline-flex justify-center items-center py-2.5 px-4 rounded-xl border border-gray-300 shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-colors duration-200"
                >
                  <FaGoogle className="h-5 w-5 text-red-500" />
                  <span className="ml-2">Google</span>
                </button>
              </motion.div>

              <motion.div variants={itemVariants}>
                <button
                  type="button"
                  className="w-full inline-flex justify-center items-center py-2.5 px-4 rounded-xl border border-gray-300 shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-colors duration-200"
                >
                  <BsFacebook className="h-5 w-5 text-blue-500" />
                  <span className="ml-2">Facebook</span>
                </button>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Register;