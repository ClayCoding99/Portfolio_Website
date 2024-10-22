export default function ProjectCard({src, alt, href, description, index = 0}) {
  return (
    <a href={href} className={`relative h-[450px] before:w-full bg-white rounded-xl shadow-[12px_12px_4px] shadow-primaryLight cursor-pointer group duration-300 overflow-hidden ${index % 2 === 0 ? "hover:rotate-6" : "hover:-rotate-3"} hover:brightness-50`}>
        
        <img src={src} alt={alt} className="z-10 h-2/3 w-full object-cover border-t rounded-t-lg" />
        <div className="p-4 z-10 border-t-4 border-black">
            <h4 className="text-black m-0 duration-300 text-lg lg:text-xl">{description}</h4>
        </div>
    </a>
  )
}
