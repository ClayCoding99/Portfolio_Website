import ExperienceCard from '../components/ExperienceCard'


export default function ExperienceSection() {
  return (
    <div className="mx-auto max-w-[1200px] px-4 pt-12">
        <div className="flex flex-row mb-8">
            <div className="hidden lg:grid rounded-full my-auto w-[12rem] h-[12rem] border-4 place-items-center bg-black">
                <img src="/assets/images/experience/UWH.jpg" className="rounded-full w-full h-full"/>
            </div>
            <div className="col-span-3 lg:ml-8 w-full lg:w-[calc(100%-12rem)]">
                <ExperienceCard title={"Full-Stack Developer"} description="UX Was Here (social media startup web app)" date={"Sept 2023 - April 2024"} tech={["Firebase", "React JS", "Tailwind CSS", "Jest"]}/>
            </div>
        </div>

        <div className="flex flex-row">
            <div className="hidden rounded-full my-auto w-[12rem] h-[12rem] lg:grid place-items-center bg-black ring-4 ">
                <img src="/assets/images/experience/CN.png" className="rounded-full w-full h-full"/>
            </div>
            <div className="col-span-3 lg:ml-8 w-full lg:w-[calc(100%-12rem)]">
                <ExperienceCard title={"Coding Instructor"} description="Code Ninjas, North Vancouver" date={"July - October 2022"} tech={["Scratch", "JS", "Unity"]}/>
            </div>
        </div>

        <h1 id="contact" className="mt-12 text-center lg:text-left">Contact Me</h1>
    </div>
  )
}
