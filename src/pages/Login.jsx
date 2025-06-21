import { motion } from "framer-motion";
import { FaGoogle, FaEnvelope, FaLock } from 'react-icons/fa';
import { BsFacebook } from "react-icons/bs";

const Login = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const slideUpVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8
      }
    }
  };

  const bounceVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <motion.div 
      className="min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <motion.div 
          className="text-center"
          variants={bounceVariants}
        >
          <motion.img
            src="/assets/images/logos/logo.png"
            className="cursor-pointer mx-auto my-0 h-12 w-12 sm:h-24 sm:w-24"
            alt="logo"
            whileHover={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 0.5 }}
          />
        </motion.div>
      </div>

      <motion.div 
        className="mt-3 sm:mx-auto sm:w-full sm:max-w-md px-5 sm:px-0"
        variants={slideUpVariants}
      >
        <motion.div 
          className="bg-white py-8 px-6 shadow-lg rounded-xl sm:px-10 border border-gray-100"
          whileHover={{ scale: 1.01 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <form className="space-y-6">
            <motion.div variants={fadeInVariants}>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Alamat Email
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaEnvelope className="h-4 w-4 text-gray-400" />
                </div>
                <motion.input
                  type="email"
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-orange-600 sm:text-sm placeholder-gray-400"
                  placeholder="fulan@gmail.com"
                  whileFocus={{ 
                    scale: 1.02,
                    boxShadow: "0 0 0 2px rgba(234, 88, 12, 0.3)"
                  }}
                />
              </div>
            </motion.div>

            <motion.div variants={fadeInVariants}>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaLock className="h-4 w-4 text-gray-400" />
                </div>
                <motion.input
                  type="password"
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-orange-600 sm:text-sm placeholder-gray-400"
                  placeholder="••••••••"
                  whileFocus={{ 
                    scale: 1.02,
                    boxShadow: "0 0 0 2px rgba(234, 88, 12, 0.3)"
                  }}
                />
              </div>
            </motion.div>

            <motion.div 
              className="flex items-center justify-between"
              variants={fadeInVariants}
            >
              <div className="flex items-center">
                <motion.input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                  Ingat saya
                </label>
              </div>

              <div className="text-sm">
                <motion.a 
                  href="#" 
                  className="font-medium text-orange-600 hover:text-orange-500 transition-colors duration-200"
                  whileHover={{ x: 3 }}
                >
                  Lupa password?
                </motion.a>
              </div>
            </motion.div>

            <div className="flex flex-col space-y-4">
              <motion.a 
                href="/"
                variants={bounceVariants}
              >
                <motion.button
                  type="button"
                  className="group relative w-full flex justify-center items-center py-3 px-4 rounded-xl shadow-sm text-sm font-semibold text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-all duration-200"
                  whileHover={{ 
                    y: -2,
                    scale: 1.02,
                    boxShadow: "0 4px 8px rgba(234, 88, 12, 0.3)"
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                    <motion.svg 
                      className="h-5 w-5 text-orange-300 group-hover:text-orange-200 transition-colors duration-200" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                      animate={{
                        x: [0, 5, 0],
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 2
                      }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                    </motion.svg>
                  </span>
                  Masuk
                </motion.button>
              </motion.a>
              
              <motion.div 
                className="relative flex items-center"
                variants={fadeInVariants}
              >
                <div className="flex-grow border-t border-gray-200"></div>
                <span className="flex-shrink mx-4 text-gray-400 text-sm">atau</span>
                <div className="flex-grow border-t border-gray-200"></div>
              </motion.div>

              <motion.a 
                href="/register"
                variants={bounceVariants}
              >
                <motion.button
                  type="button"
                  className="w-full flex justify-center items-center py-3 px-4 rounded-xl border border-gray-300 shadow-sm text-sm font-semibold text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-600 transition-all duration-200"
                  whileHover={{ 
                    y: -2,
                    scale: 1.02,
                    backgroundColor: "#f9fafb"
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  Buat Akun Baru
                </motion.button>
              </motion.a>
            </div>
          </form>

          <motion.div 
            className="mt-8"
            variants={fadeInVariants}
          >
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Masuk dengan akun lain</span>
              </div>
            </div>

            <motion.div 
              className="mt-6 grid grid-cols-2 gap-3"
              variants={containerVariants}
            >
              <motion.button
                type="button"
                className="w-full inline-flex justify-center items-center py-2.5 px-4 rounded-xl border border-gray-300 shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
                variants={slideUpVariants}
                whileHover={{ 
                  y: -2,
                  scale: 1.02,
                  backgroundColor: "#f9fafb"
                }}
                whileTap={{ scale: 0.98 }}
              >
                <FaGoogle className="h-5 w-5 text-red-500" />
                <span className="ml-2">Google</span>
              </motion.button>

              <motion.button
                type="button"
                className="w-full inline-flex justify-center items-center py-2.5 px-4 rounded-xl border border-gray-300 shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
                variants={slideUpVariants}
                whileHover={{ 
                  y: -2,
                  scale: 1.02,
                  backgroundColor: "#f9fafb"
                }}
                whileTap={{ scale: 0.98 }}
              >
                <BsFacebook className="h-5 w-5 text-blue-500" />
                <span className="ml-2">Facebook</span>
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Login;