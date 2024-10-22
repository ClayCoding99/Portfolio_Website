import { BsArrowDown } from 'react-icons/bs'
import { IoLogoGithub, IoLogoInstagram, IoLogoLinkedin } from 'react-icons/io'
import {motion} from "framer-motion";
import AnimateColorText from '../components/AnimateColorText';
import Toggle from '../components/Toggle';
import { useTheme } from '../assets/ThemeProvider';


export default function Header() {

  const {dark, setDark} = useTheme();

  const primary = !dark ? "#00A3FF" : "#000000";
  const secondary = !dark ? "#00FF85" : "#2d13c2";

  const handleDownloadResume = () => {
    fetch('/assets/Master_Resume.pdf')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.blob();
      })
      .then(blob => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'Clayton_Hunter_Master_Resume.pdf';
        document.body.appendChild(a);
        a.click();
        a.remove();
        window.URL.revokeObjectURL(url);
      })
      .catch(error => console.error('Error downloading PDF:', error));
  };

  const goTo = (link) => {
    window.location.href = link;
  };

  return (
    <header className="max-w-[1200px] mx-auto px-4 grid lg:grid-cols-3 lg:grid-rows-1 grid-cols-1 my-16 lg:gap-x-8 gap-x-0">
        <div>
          <div className="relative w-[20rem] h-[20rem] mx-auto grid place-items-center">
              <div className="rotating-gradient rounded-full absolute inset-0 after:blur-none after:absolute after:inset-1 after:rounded-full after:bg-gradient-to-r"></div>
              <img src="/assets/images/profilePicture.jpg" alt="Profile Picture" className="relative z-40 w-[19rem] h-[19rem] object-cover object-top rounded-full" />
            </div>
            <div className="flex flex-row gap-4 my-4 lg:mt-4 lg:mb-0 items-center justify-center">
              <IoLogoGithub onClick={() => goTo("https://github.com/claycoding99")} className="w-20 h-20 text-light cursor-pointer hover:brightness-150"/>
              <IoLogoLinkedin onClick={() => goTo("https://www.linkedin.com/in/clayton-hunter-a45500288/")} className="w-20 h-20 text-blue-600 cursor-pointer hover:brightness-150"/>
              <IoLogoInstagram onClick={() => goTo("https://instagram.com/clayton.hunter")} className="w-20 h-20 text-purple-500 cursor-pointer hover:brightness-150"/>
            </div>
          </div>
        <div className="col-span-2 flex flex-col h-full w-full gap-y-4 lg:gap-y-10">
          <div>
            <div className="w-full text-center lg:text-left mx-auto place-items-center grid-rows-2 lg:block lg:w-auto">
              {
                ['C', 'l', 'a', 'y', 't', 'o', 'n ', 
                'H', 'u', 'n', 't', 'e', 'r'].map((char, index) => {
                  return <AnimateColorText 
                      key={index} 
                      delay={index * 0.1}
                      primary={primary}
                      secondary={secondary}
                      shadow={false}
                      className="text-6xl"
                    >{char}</AnimateColorText>
                })
              }
            </div>
            <div className="lg:w-full md:w-3/4 w-full lg:max-w-full mx-auto lg:mx-0 h-1 bg-gradient-to-r from-secondaryLight to-primaryLight my-4 rounded-full"></div>
            <h2 className="text-center lg:text-left">Web & Game Developer</h2>
            <h3 className="w-full mx-auto lg:m-0 lg:text-left text-center">I enjoy designing and programming websites/web apps and games</h3>
          </div>
          <div className="flex gap-8 mx-auto lg:mx-0 w-3/4 lg:w-full lg:px-0 flex-col md:flex-row">
            <motion.button
              onClick={handleDownloadResume}
              className="btn btn-primary rotating-gradient md:w-2/3 w-full h-full min-h-20 text-2xl font-bold flex items-center justify-center gap-4 group"
              whileHover={{
                scale: 1.05,
                duration: 300
              }}
            >
              <motion.span 
                id="skills" 
                className="text-light "
                initial={{
                  x: 300
                }}
                animate={{
                  x: 0
                }}
                transition={{
                  delay: 0.3,
                  duration: 0.7
                }}
              >Download Resume</motion.span>
              <motion.div
                className="text-3xl text-light group-hover:animate-bounce"
                initial={{
                  y: -300
                }}
                animate={{
                  y: 0
                }}
                transition={{
                  delay: 0.3,
                  duration: 0.7
                }}
              >
                <BsArrowDown/>
              </motion.div>
              </motion.button>
            <Toggle isOn={dark} setIsOn={setDark} />
          </div>
        </div>
      </header>
  )
}
