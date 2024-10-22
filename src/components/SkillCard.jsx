export default function SkillCard({ icon, name }) {
  return (
    <div className="card rotating-gradient group hover:cursor-pointer">
      <div className="w-full grid place-items-center h-full">
        {icon}
      </div>
      <h4 className="text-base sm:text-lg md:text-xl text-white">{name}</h4>
    </div>
  );
}