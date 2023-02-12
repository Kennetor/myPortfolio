// Component
import Certificate from "../components/certificate";
import SkillsComp from "../components/SkillsComp";
import background from "../pages/images/skillsbackground.png";

function Skills() {
  return (
    <>
      <img src={background} className="w-full absolute opacity-30 h-full"></img>
      <div className="absolute top-8 right-1/2 translate-x-16 xl:translate-x-28">
        <a className="font-serif text-2xl md:text-5xl text-center">
          Ferdigheter
        </a>
      </div>
      <div className="flex flex-wrap justify-around mt-10">
        <SkillsComp img="https://cdn-icons-png.flaticon.com/512/1051/1051277.png" />
        <SkillsComp img="https://cdn-icons-png.flaticon.com/512/732/732190.png" />
        <SkillsComp img="https://cdn-icons-png.flaticon.com/512/5968/5968292.png" />
      </div>
      <div className="divider lg:divider-vertical"></div>
      <div className="flex flex-wrap justify-around ">
        <SkillsComp img="https://cdn.worldvectorlogo.com/logos/vitejs.svg" />
        <SkillsComp img="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" />
        <SkillsComp img="https://cdn.worldvectorlogo.com/logos/react-2.svg" />
      </div>{" "}
      <div className="divider lg:divider-vertical"></div>
      <div className="flex flex-wrap justify-around ">
        <SkillsComp img="https://cdn-icons-png.flaticon.com/512/5968/5968350.png" />
        <SkillsComp img="https://cdn-icons-png.flaticon.com/512/6132/6132221.png" />
        <SkillsComp img="https://cdn-icons-png.flaticon.com/512/5968/5968306.png" />
        <SkillsComp img="https://cdn-icons-png.flaticon.com/512/5968/5968705.png" />
      </div>
      <div className="divider lg:divider-vertical"></div>
      <Certificate />
    </>
  );
}
{
}
export default Skills;
