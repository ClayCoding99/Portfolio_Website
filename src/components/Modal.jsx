import { CgClose } from 'react-icons/cg';
import { AnimatePresence, motion } from 'framer-motion';
import { GiCheckMark } from 'react-icons/gi';
import { BiError } from 'react-icons/bi';


export default function Modal({ isOpen, close, width = 500, title, content, icon, buttonText }) {
  const iconMap = {
    success: <GiCheckMark size={52} className="text-secondaryLight" />,
    error: <BiError size={52} className="text-red-500" />,
    loading: (
      <div className="animate-spin w-8 h-8 border-t-4 border-r-4 border-light rounded-full"></div>
    ),
  };

  function handleClose() {
    close();
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.75)' }} // Semi-transparent black background
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.35,
            ease: 'easeInOut'
          }}
        >
          <motion.div
            className="relative w-full max-w-[500px] bg-white border-2 border-primaryLight"
            initial={{ scale: 0 }}
            animate={{ 
              scale: [0, 1.1, 1, 1.05, 1]
            }}
            exit={{ scale: 0 }}
            transition={{ 
              duration: 0.4,
              ease: 'easeInOut',
              times: [0, 0.6, 0.7, 0.9, 1], 
            }}
          >
            <div className="p-4 bg-background space-y-4">
              <header className="absolute right-4 top-4">
                {icon !== 'loading' && (
                  <CgClose
                    onClick={handleClose}
                    className="cursor-pointer text-light hover:text-gray-700 duration-300"
                    size={24}
                  />
                )}
              </header>
              <div className="flex flex-col items-center justify-center gap-4">
                {icon !== null && iconMap[icon]}
                <h2 className="text-light mb-0">{title}</h2>
              </div>
              <p className="text-light text-center">{content}</p>
              <footer className="flex justify-center">
                {icon !== 'loading' && (
                  <button
                    onClick={handleClose}
                    className="btn btn-secondary w-2/3 h-10"
                  >
                    {buttonText}
                  </button>
                )}
              </footer>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}