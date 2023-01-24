// Components
import SkillsComp from "../components/SkillsComp";
// Images
import background from "../pages/images/skillsbackground.png";
import tailwind from "../pages/images/tailedwind.png";

function SkillsSection() {
  return (
    <>
      <div className="skill">
        <img
          src={background}
          className="object-cover h-full w-full -z-50 absolute opacity-80   "
        />
        <div className="mt-10  grid grid-cols-4 grid-rows-3 gap-5 w-96 ml-40">
          <SkillsComp
            pic={"https://cdn-icons-png.flaticon.com/512/1051/1051277.png"}
          />
          <SkillsComp
            pic={"https://cdn-icons-png.flaticon.com/512/732/732190.png"}
          />
          <SkillsComp
            pic={"https://cdn-icons-png.flaticon.com/512/5968/5968292.png"}
          />
          <br />
          <SkillsComp
            pic={"https://cdn.worldvectorlogo.com/logos/vitejs.svg"}
            className="mt-40 "
          />
          <SkillsComp
            pic="https://cdn-icons-png.flaticon.com/512/5968/5968705.png"
            className="mt-28 ml-20"
          />
          <SkillsComp
            pic={"https://cdn.worldvectorlogo.com/logos/react-2.svg"}
            className="-ml-36"
          />
          <SkillsComp pic={tailwind} className="-ml-36" />
          <SkillsComp
            pic={"https://cdn-icons-png.flaticon.com/512/6132/6132221.png"}
            className="ml-26 mt-20"
          />
          <SkillsComp
            pic={"https://cdn-icons-png.flaticon.com/512/5968/5968306.png"}
          />{" "}
          <SkillsComp
            pic={
              "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png"
            }
            className="-ml-20 mt-28"
          />{" "}
          <SkillsComp
            pic={"https://cdn-icons-png.flaticon.com/512/5968/5968350.png"}
            className="-ml-24"
          />
        </div>
      </div>
    </>
  );
}
export default SkillsSection;
