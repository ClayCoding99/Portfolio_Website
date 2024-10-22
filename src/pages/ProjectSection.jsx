import ProjectCard from '../components/ProjectCard'


export default function ProjectSection() {

    const projects = [
        {
            "description": "Web app to support the minecraft plugin command panels made with ReactJS, SCSS and Firebase.",
            "src": "/assets/images/projects/commandPanels.png",
            "alt": "Command Panels Image",
            "href": "https://commandpanels.net",
        },
        {
            "description": "2D multiplayer boss fighting game made in Unity along with the Netcode library.",
            "src": "/assets/images/projects/RaidRumble.png",
            "alt": "Raid Rumble Image",
            "href": "https://big-t-studios.itch.io/raid-rumble"
        },
        {
            "description": "A website for Green Essential Irrigation made with ReactJS, Tailwind CSS and Framer Motion.",
            "src": "/assets/images/projects/GreenEssential.png",
            "alt": "Green Essential Image",
            "href": "https://greenessential.ca"
        },
        // {
        //     "description": "Full-Stack social media app for memes made with ReactJS, SCSS, mongodb, and Express JS.",
        //     "src": "/assets/images/logo.png",
        //     "alt": "Logo Image",
        //     "href": ""
        // }
    ];

  return (
    <>
        <div className="mx-auto max-w-[1200px] px-8 md:px-16 lg:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 my-8 gap-12">
            {projects.map((project, index) => {
                return <ProjectCard key={index} index={index} src={project.src} alt={project.alt} description={project.description} href={project.href} />
            })}
        </div>

        <h1 id="about" className="mt-12 max-w-[1200px] mx-auto px-4 text-center lg:text-left">A Little About Me</h1>
    </>
  )
}
