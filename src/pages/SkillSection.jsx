import { useState } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import SkillCard from '../components/SkillCard';
import {
  AndroidOriginal, BlenderOriginal, CPlain, CplusplusOriginal, CsharpOriginal, Css3Original, DotNetOriginal, FirebaseOriginal,
  FramermotionOriginal,
  GodotOriginal, Html5Original, JavaOriginal, JavascriptOriginal, MongodbOriginal, MysqlOriginal, NodejsOriginal,
  PhpOriginal,
  ReactOriginal, SassOriginal, SvelteOriginal, TailwindcssOriginal, TypescriptOriginal, UnityOriginal
} from 'devicons-react';
import { HTML5Backend } from 'react-dnd-html5-backend';


const ItemTypes = {
  SKILL: 'skill',
};

export default function SkillSection() {
  const iconSize = 64;

  const [skills, setSkills] = useState([
    { id: "html5", icon: <Html5Original size={iconSize} />, name: "HTML 5" },
    { id: "css3", icon: <Css3Original size={iconSize} />, name: "CSS 3" },
    { id: "javascript", icon: <JavascriptOriginal size={iconSize} />, name: "JS" },
    { id: "typescript", icon: <TypescriptOriginal size={iconSize} />, name: "TS" },
    { id: "php", icon: <PhpOriginal size={iconSize} />, name: "PHP"},
    { id: "csharp", icon: <CsharpOriginal size={iconSize} />, name: "C#" },
    { id: "java", icon: <JavaOriginal size={iconSize} />, name: "Java" },
    { id: "cplusplus", icon: <CplusplusOriginal size={iconSize} />, name: "C++" },
    { id: "c", icon: <CPlain size={iconSize} />, name: "C" },
    { id: "unity", icon: <UnityOriginal size={iconSize} />, name: "Unity" },
    { id: "godot", icon: <GodotOriginal size={iconSize} />, name: "Godot" },
    {id: "blender", icon: <BlenderOriginal size={iconSize}/>, name: "Blender"},
    { id: "react", icon: <ReactOriginal size={iconSize} />, name: "React" },
    { id: "svelte", icon: <SvelteOriginal size={iconSize} />, name: "Svelte" },
    { id: "tailwindcss", icon: <TailwindcssOriginal size={iconSize} />, name: "Tailwind" },
    { id: "sass", icon: <SassOriginal size={iconSize} />, name: "SCSS" },
    { id: "firebase", icon: <FirebaseOriginal size={iconSize} />, name: "Firebase" },
    { id: "nodejs", icon: <NodejsOriginal size={iconSize} />, name: "Node JS" },
    { id: "dotnet", icon: <DotNetOriginal size={iconSize} />, name: "ASP.NET" },
    { id: "android", icon: <AndroidOriginal size={iconSize} />, name: "Android" },
    { id: "mongodb", icon: <MongodbOriginal size={iconSize} />, name: "MongoDB" },
    { id: "mysql", icon: <MysqlOriginal size={iconSize} />, name: "MySQL" },
    { id: "framermotion", icon: <FramermotionOriginal size={iconSize} />, name: "Framer" }
  ]);

  const moveSkill = (dragIndex, hoverIndex) => {
    const draggedSkill = skills[dragIndex];
    const updatedSkills = [...skills];
    updatedSkills.splice(dragIndex, 1);
    updatedSkills.splice(hoverIndex, 0, draggedSkill);
    setSkills(updatedSkills);
  };

  const SkillCardWrapper = ({ skill, index }) => {
    const [{ isDragging }, drag] = useDrag({
      type: ItemTypes.SKILL,
      item: { index },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    });

    const [, drop] = useDrop({
      accept: ItemTypes.SKILL,
      hover: (item) => {
        const dragIndex = item.index;
        const hoverIndex = index;

        if (dragIndex === hoverIndex) {
          return;
        }

        moveSkill(dragIndex, hoverIndex);
        item.index = hoverIndex;
      },
    });

    return (
      <div ref={(node) => drag(drop(node))} className="h-24 w-24 md:h-28 md:w-28 lg:h-32 lg:w-32 flex items-center justify-center">
        <SkillCard icon={skill.icon} name={skill.name} />
      </div>
    );
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <>
        <h1 className="mt-12 max-w-[1200px] mx-auto px-4 text-center lg:text-left">Technical Skills</h1>
        <section className="relative border-t-4 border-b-4 border-primaryLight bg-gradient-to-b from-dark to-background">
          <div className="max-w-[1200px] mx-auto px-4 py-8 flex flex-wrap justify-center gap-6 sm:gap-8">
            {skills.map((skill, index) => (
              <SkillCardWrapper key={skill.id} skill={skill} index={index} />
            ))}
          </div>
          <h1 id="projects" className="mt-12 mx-auto max-w-[1200px] px-4 text-center lg:text-left">Projects</h1>
        </section>
      </>
    </DndProvider>
  );
}