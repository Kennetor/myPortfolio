// Component
import Certificate from "../components/certificate";
import SkillsComp from "../components/SkillsComp";
import SkillsSection from "./SkillsSection";

function Skills() {
  return (
    <>
      <div className="navbar-center absolute top-8 right-1/2 translate-x-28">
        <a className="font-serif text-5xl">Ferdigheter</a>
      </div>
      <div
        className="flex 
"
      >
        <SkillsSection />
        <div
          className="flex m-auto place-items-center space-between
        "
        >
          <Certificate />
          <div className="m-auto mt-20 w-48 -ml-[60rem] text-center text-2xl font-serif scale-150">
            <h1 className="p-8 ml-4 flex m-auto">GITHUB</h1>
            <SkillsComp
              pic={"https://cdn-icons-png.flaticon.com/512/25/25231.png"}
              picLink="https://github.com/KTkodehode?tab=repositories"
              className="hover:scale-110"
            />
          </div>
        </div>
      </div>
    </>
  );
}
{
}
export default Skills;
