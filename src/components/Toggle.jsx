import { motion } from 'framer-motion';
import { BiCloud, BiMoon, BiStar, BiSun } from 'react-icons/bi';


export default function Toggle({ isOn, setIsOn }) {
  const stars = [
    { right: 20, top: 15 },
    { right: 40, top: 25 },
    { right: 20, top: 35 },
  ];

  const clouds = [
    { left: 10, top: 15 },
    { left: 30, top: 25 },
    { left: 10, top: 35 },
  ];

  const spring = {
    type: 'spring',
    stiffness: 700,
    damping: 30,
  };

  const toggleSwitch = () => setIsOn(!isOn);

  return (
    <button
      className={`mx-auto relative md:w-1/3 w-2/3 min-w-[175px] h-auto flex justify-start duration-300 rounded-full p-3 cursor-pointer hover:scale-110  ${
        isOn ? 'justify-end bg-primaryDark border-2 border-light' : 'bg-primaryDark border-2 border-primaryLight'
      }`}
      onClick={toggleSwitch}
    >
      <motion.div
        className="mx-4 rounded-full transition-colors duration-300 w-14 h-14 grid place-items-center"
        layout
        transition={spring}
      >
        {isOn ? (
          <div className="bg-yellow-500 w-full h-full ring-4 ring-yellow-600/75 rounded-full">
            <div className="rounded-full">
              <BiSun className="w-full h-full text-white" />
            </div>
          </div>
        ) : (
          <div className="bg-gray-500 w-full h-full ring-4 ring-gray-600/75 rounded-full">
            <div className="rounded-full">
              <BiMoon className="w-full h-full text-white" />
            </div>
          </div>
        )}
      </motion.div>

      {!isOn
        ? stars.map((star, index) => (
            <Star key={index} right={star.right} left={star.left} top={star.top} bottom={star.bottom} />
          ))
        : clouds.map((cloud, index) => (
            <Cloud key={index} left={cloud.left} right={cloud.right} top={cloud.top} bottom={cloud.bottom} />
          ))}
    </button>
  );
}

const Star = ({ right = null, left = null, top = null, bottom = null }) => {
  return (
    <motion.div
      className="absolute animate-pulse"
      style={{ right: right && `${right}px`, left: left && `${left}px`, top: top && `${top}px`, bottom: bottom && `${bottom}px` }}
      animate={{
        scale: [0.9, 1.1],
      }}
      transition={{
        duration: 0.7,
        times: [0, 1],
        repeat: Infinity,
        repeatType: 'mirror',
      }}
    >
      <BiStar className="text-primaryLight" />
    </motion.div>
  );
};

const Cloud = ({ left = null, right = null, top = null, bottom = null }) => {
  return (
    <motion.div
      className="absolute"
      style={{ right: right && `${right}px`, left: left && `${left}px`, top: top && `${top}px`, bottom: bottom && `${bottom}px` }}
      animate={{
        x: 70,
        opacity: [0, 1, 1, 0],
      }}
      transition={{
        duration: 2,
        times: [0, 0.25, 0.75, 1],
        repeat: Infinity,
        ease: 'linear',
        repeatType: 'loop',
      }}
    >
      <BiCloud className="text-white text-xl" />
    </motion.div>
  );
};