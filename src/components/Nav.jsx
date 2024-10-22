import { useState } from 'react'


export default function Nav() {
  
  const anchors = [
    {
      display: "Skills",
      anchor: "#skills"
    },
    {
      display: "Projects",
      anchor: "#projects"
    },
    {
      display: "About",
      anchor: "#about"
    },
    {
      display: "Experience",
      anchor: "#experience"
    },
    {
      display: "Contact",
      anchor: "#contact"
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  }

  const [hamburgerActive, setHamburgerActive] = useState(false);

  const closeHamburger = () => {
    setHamburgerActive(false);
  }

  return (
    <nav className="px-4 py-4 border-b-4 bg-background border-b-primaryLight top-0 sticky z-50">
      <div className="mx-auto max-w-[1200px] md:flex flex-row justify-between relative">

        <img src="/assets/images/logo.png" alt="Logo Image" onClick={scrollToTop} className="w-14 h-14  rounded-full self-center hover:brightness-150 duration-300 cursor-pointer"/>
        

        <ul className={`-z-10 md:z-0 md:static md:flex md:items-center flex-row gap-4 m-0 md:space-y-0 space-y-2 mt-4 mr-4 w-fit ml-auto md:m-0 ${hamburgerActive ? "static" : "hidden"}`}>
          {
            anchors.map((anchor, index) => {

              return <a key={index} href={anchor.anchor} className="group">
                <li className="pb-2 md:pb-0 text-light list-none text-2xl cursor-pointer hover:text-primaryLight duration-300 overflow-hidden" onClick={closeHamburger}>{anchor.display}
                  <div className="w-full group-hover:translate-x-0 -translate-x-[101%] duration-300 h-0.5 -mt-0.5 bg-gradient-to-r from-primaryLight to-secondaryLight rounded-lg"></div>
                </li>
              </a>
            })
          }
        </ul>

        <div className={`md:hidden text-light absolute top-0 right-0 mt-3 cursor-pointer bg-background to-primaryDark ring-2 ring-light`} onClick={() => setHamburgerActive(prev => !prev)}>
          <hr className={`w-7 m-1.5 origin-left ${hamburgerActive && "rotate-45 translate-x-1"} duration-300`}/>
          <hr className={`w-7 m-1.5 ${hamburgerActive && "opacity-0"} duration-300`}/>
          <hr className={`w-7 m-1.5 origin-left ${hamburgerActive && "-rotate-45 translate-x-1"} duration-300`}/>
        </div>

      </div>
    </nav>
  )
}
