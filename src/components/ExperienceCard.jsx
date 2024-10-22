import TechCard from './TechCard'
import BounceAnimation from './BounceAnimation';


export default function ExperienceCard({title, description, date, tech}) {

  return (
    <BounceAnimation className="relative w-full">
        <div className="lg:block hidden absolute top-[96px] -left-5 z-0 bg-primaryLight w-14 h-14 rotate-45"></div>
        <div className="w-full border-primaryLight border-8 rounded-lg bg-gradient-to-t from-primaryDark to-secondaryDark relative z-10 flex flex-col p-4 pb-8 min-h-[250px]">
            <div>
                <div className="flex justify-between flex-row">
                    <h2>{title}</h2>
                    <big className="text-light">{date}</big>
                </div>
                <h3>{description}</h3>
            </div>
            <div className="flex flex-row flex-wrap gap-4 mt-6">
                {
                    tech?.map((currentTech, index) => {
                        return <TechCard key={index} name={currentTech}/>
                    })
                }
            </div>
        </div>
    </BounceAnimation>
  )
}
