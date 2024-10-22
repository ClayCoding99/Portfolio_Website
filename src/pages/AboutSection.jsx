import {motion} from 'framer-motion';
import { BiCamera, BiCloud, BiListCheck, BiMessage, BiPen, BiPencil, BiSearch, BiSolidBattery, BiTask, BiWifi } from 'react-icons/bi';
import { BsArrowLeft } from 'react-icons/bs';
import { ChromeOriginal, PowershellPlain, Windows11Original } from 'devicons-react';
import { FcCommandLine } from 'react-icons/fc';
import AnimateColorText from '../components/AnimateColorText';
import { CgClose } from 'react-icons/cg';
import { cn } from '../util/util';


export default function AboutSection() {
  return (
    <section className="overflow-hidden border-primaryLight bg-gradient-to-b from-dark to-background border-t-4 border-b-4">
      <div className="mx-auto max-w-[1200px] px-4 space-y-8 py-8">
        <h2 className="text-left">Background</h2>
        <div className="grid grid-cols-2 grid-rows-2 lg:grid-cols-3 lg:grid-rows-1 gap-16 relative">
            <div className="z-0 h-36 col-span-3 absolute lg:top-40 top-[800px] -rotate-12 bg-gradient-to-r from-primaryLight via-secondaryLight to-primaryDark w-[200vw] -left-[85vw]"></div>
            <div className="col-span-2 z-10">
                <motion.div
                    className="relative border-2 rounded-md h-96 border-secondaryLight bg-black"
                    initial={{
                        transform: "rotateY(0deg) rotateX(0deg)",
                    }}
                    animate={{
                        transform: "rotateY(0deg) rotateX(0deg)",
                    }}
                    transition={{
                        repeat: Infinity,
                   
                        duration: 2,
                        ease: "easeInOut",
                    }}
                >
                    <div className="absolute inset-[1.5rem] bg-[rgb(10,40,100)] gap-8">
                        <div className="h-[24px] text-black bg-white w-full px-2 flex justify-between">
                            <div className="flex space-x-1 items-center">
                                <PowershellPlain className=""/>
                                <small>Windows PowerShell</small>
                            </div>
                            <WindowOptions/>
                        </div>
                        <div className="h-[calc(100%-48px)] flex flex-row gap-0">
                            {/* <div className="w-1/3 h-full overflow-hidden">
                                <img src="/assets/images/MyNameIs.png" alt="Logo Image" className="-rotate-12 rounded-lg float-left w-full h-full object-cover" />
                            </div> */}
                            <div className="w-3/3 p-4 flex flex-col justify-center">
                                <p className="text-white text-base md:text-lg lg:text-xl font-bold">Growing up I had a passion for art, science, and video which eventually led me to developing websites and games.
                                </p>
                                <br/>
                                <p className="text-white text-base md:text-lg lg:text-xl mb-4 font-bold">Currently, I use the following tech-stack for web development: React.js, Tailwind CSS, Framer Motion, Node.js + Express, and MongoDB. For game design and development, I use Unity Engine and Blender.
                                </p>
                                <Blink className="bg-orange-300"/>
                            </div>
                        </div>
                        <div className="h-[24px] bg-gray-300 flex flex-row justify-between overflow-hidden">
                            <div className="flex flex-row">
                                <div className="grid place-items-center w-8">
                                    <Windows11Original size={16}/>
                                </div>
                                <div className="w-40 grid place-items-center grid-flow-col bg-white">
                                    <BiSearch />
                                    <small className="mr-6">Type here to search</small>
                                </div>
                                <div className="grid place-items-center w-8">
                                    <div className="w-4 h-4 border-black rounded-full border-2"></div>
                                </div>
                                <div className="grid place-items-center w-8">
                                    <BiTask />
                                </div>
                                <div className="grid place-items-center w-8">
                                    <ChromeOriginal />
                                </div>
                            </div>
                            <div className="flex flex-row">
                                <div className="grid place-items-center w-20 grid-flow-col">
                                    <BiCloud />
                                    <small>16 * C</small>
                                </div>
                                <div className="grid place-items-center w-8 grid-flow-col">
                                    ^
                                </div>
                                <div className="grid place-items-center w-8 grid-flow-col">
                                    <small>ENG</small>
                                </div>
                                <div className="flex flex-col items-center w-20 grid-flow-row pb-1.5 gap-0.5">
                                    <small className="h-1/2 text-[0.6rem]">4:51 PM</small>
                                    <small className="h-1/2 text-[0.6rem]">2024-06-17</small>
                                </div>
                                <div className="grid place-items-center w-8 grid-flow-col">
                                    <BiMessage />
                                </div>
                            </div>
                        </div>
                        <div className="relative flex">
                            <div className="absolute left-0">
                                <p className="text-gray-300">HDMI</p>
                            </div>
                            <div className="flex-1 flex justify-center">
                            <i className="text-gray-300 font-bold text-xl">ASUS</i>
                            </div>
                        </div>
                    </div>
                </motion.div>
                <div className="h-32 w-16 bg-black border-l-2 border-r-2 border-secondaryLight mx-auto translate-y-0"></div>
                <div className=" h-8 w-1/4 min-w-[150px] mx-auto rounded-t-full border-secondaryLight border-2 bg-black">
                </div>
                </div>

                <div className="col-span-2 max-w-[350px] w-5/6 mx-auto lg:col-span-1 relative bg-gray-300 lg:w-full h-full -skew-x-3 rounded-2xl">

                <motion.div 
                className="absolute h-full border-4 rounded-2xl border-light bg-dark w-full flex justify-between flex-col"
                initial={{
                    x: -4,
                    y: -4
                }}
                animate={{
                    x: -16,
                    y: -20
                }}
                transition={{
                    repeat: Infinity,
                    repeatType: "mirror",
                    duration: 2,
                    ease: "easeInOut"
                }}
            >
                <div className="ring-4 ring-light rounded-l-full w-2 h-12 bg-primaryLight absolute -z-50 -left-3 top-28"></div>
                <div className="rounded-l-full w-2 h-12 bg-primaryLight absolute -z-50 -left-3 top-44 ring-4 ring-light"></div>
                <div className="rounded-r-full w-2 h-16 bg-primaryLight absolute -z-50 -right-3 top-36 ring-4 ring-light"></div>

                <div className="relative z-50">

                    <div className="z-50 w-full h-full bg-primaryLight flex justify-between p-4 rounded-t-xl">
                        <small className="text-dark">3:48 pm</small>

                        <div className="before:absolute before:top-2 before:left-[calc(50%-4rem)] before:h-3 before:bg-black before:w-[8rem] before:mx-auto before:rounded-full after:absolute after:inset-1 after:bg-white after:w-[4rem] after:h-1 after:top-3 after:mx-auto after:rounded-full z-50"></div>

                        <div className="flex flex-row items-center gap-1">
                            <div className="h-2 w-4 flex flex-row gap-0.5 items-baseline">
                                <div className="bg-dark h-0.5 w-1 rounded-lg"></div>
                                <div className="bg-dark h-1 w-1 rounded-lg"></div>
                                <div className="bg-dark h-1.5 w-1 rounded-lg"></div>
                                <div className="bg-dark h-2 w-1 rounded-lg"></div>
                            </div>
                            <BiWifi className="text-dark" size={16}/>
                            <BiSolidBattery className="text-dark" size={16}/>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row justify-between px-4">
                    <div className="flex flex-row gap-1 items-center">
                        <BsArrowLeft className="text-yellow-500"/><span className="text-yellow-500"> Notes</span> 
                    </div>
                    <div className="text-light rounded-full w-5 h-5 border border-yellow-500 grid place-items-center grid-flow-col pl-0.5 pr-0.5">
                        <div className="w-[0.2rem] h-[0.2rem] bg-yellow-500 rounded-full"></div>
                        <div className="w-[0.2rem] h-[0.2rem] bg-yellow-500 rounded-full"></div>
                        <div className="w-[0.2rem] h-[0.2rem] bg-yellow-500 rounded-full"></div>
                    </div>
                </div>
                
                <div className="mx-8">
                    <h3>Hobbies</h3>
                    <ul className="text-lg mb-1">
                        <li>Video Games</li>
                        <li>Chess</li>
                        <li>Gym / Cardio Exercise</li>
                        <li>Hiking</li>
                        <li>Illustration/Design</li>
                        <li>Snow & Water Skiing</li>
                        <li>Golf</li>
                    </ul>
                    <h3>Interests</h3>
                    <ul className="text-lg">
                        <li>Philosophy</li>  
                        <li>Physics</li>
                        <li>Liminal Spaces</li>
                    </ul>
                </div>
                <div className="flex flex-row justify-between px-4">
                    <BiListCheck className="text-yellow-500" size={24}/>
                    <BiCamera className="text-yellow-500" size={24}/>
                    <BiPen className="text-yellow-500" size={24}/>
                    <BiPencil className="text-yellow-500" size={24}/>
                </div>
                
                <div className="p-2 bg-primaryLight rounded-b-xl">
                    <div className="h-1 bg-black w-[8rem] relative bottom-.5 left-[calc(50%-4rem)] rounded-full"></div>
                </div>
            </motion.div>
        </div>
            
        </div>
        <h2 className="text-left">Education</h2>
        <div className="bg-primaryLight h-92 w-full border border-black">
            <div className="bg-white h-12 w-full flex justify-between items-center px-8">
                <small className="flex flex-row gap-1 items-center">         <FcCommandLine size={32}/>C:\Clayton\Education</small>
                <WindowOptions />
            </div>
            <div className="bg-black h-80 justify-center flex flex-col pl-8 border border-light overflow-y-scroll">
                <h3 className="text-white lg:text-3xl text-2xl">CST Diploma - BCIT <span className="text-secondaryLight"><i>
                    {
                        ['G', 'r', 'a', 'd', 'u', 'a', 't', 'e', 'd ', 
                            'w', 'i', 't', 'h ',
                            'd', 'i', 's', 't', 'i', 'n', 'c', 't', 'i', 'o', 'n'
                        ].map((char, index) => {
                            return <AnimateColorText key={index} shadow={false} delay={index * 0.1}>{char}</AnimateColorText>
                        })
                    }
                </i></span></h3>
                <h3 className="text-white lg:text-3xl text-2xl">First Year Engineering - Capilano University</h3>
                <h3 className="text-white lg:text-3xl text-2xl">High school Diploma - Carson Graham Secondary</h3>
                <Blink/>
            </div>
        </div>
      </div>

      <h1 id="experience" className="mx-auto max-w-[1200px] px-4 mt-12 text-center lg:text-left">Experience</h1>
    </section>
  )
}

export function WindowOptions() {
  return (
    <div className="flex flex-row gap-4 items-center">
        <div className="w-4 h-0.5 bg-gray-500"></div>
        <div className="w-3.5 h-3.5 border-2 border-gray-500"></div>
        <CgClose className="text-xl text-gray-500"/>
    </div>
  )
}

export function Blink({className}) {
    return <motion.div 
        initial={{
            opacity: 0
        }}
        animate={{
            opacity: [0, 1, 0],
            keyTimes: [0, 0.5, 1]
            
        }}
        transition={{
            times: [0, 0.5, 1],
            duration: 1,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut"
        }}
    >
        <div className={cn(`w-4 bg-white h-2 mt-4 ${className}`)}></div>
    </motion.div>
}