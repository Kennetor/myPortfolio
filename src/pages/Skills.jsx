// Images
// Component
import SkillsComp from "../components/SkillsComp";

function Skills() {
  return (
    <>
      <div className="navbar-center absolute top-8 right-1/2 translate-x-28">
        <a className="font-serif text-5xl">Ferdigheter</a>
      </div>
      <div className="mt-6 grid grid-cols-3 gap-5 w-52 ml-2 float-left">
        <SkillsComp
          pic={"https://cdn-icons-png.flaticon.com/512/1051/1051277.png"}
        />
        <SkillsComp
          pic={"https://cdn-icons-png.flaticon.com/512/732/732190.png"}
        />
        <SkillsComp
          pic={"https://cdn-icons-png.flaticon.com/512/5968/5968292.png"}
        />
        <SkillsComp pic={"https://cdn.worldvectorlogo.com/logos/react-2.svg"} />
        <SkillsComp
          pic={
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/600px-Tailwind_CSS_Logo.svg.png?20211001194333"
          }
        />
        <SkillsComp
          pic={"https://cdn-icons-png.flaticon.com/512/5968/5968705.png"}
        />
        <SkillsComp
          pic={"https://cdn-icons-png.flaticon.com/512/5968/5968350.png"}
        />
        <SkillsComp
          pic={"https://cdn-icons-png.flaticon.com/512/6132/6132221.png"}
        />
        <SkillsComp
          pic={"https://cdn-icons-png.flaticon.com/512/5968/5968306.png"}
        />
      </div>
      <div className="m-auto mt-10 w-36 text-center font-serif">
        <h1>GITHUB</h1>
        <SkillsComp
          pic={"https://cdn-icons-png.flaticon.com/512/25/25231.png"}
          picLink="https://github.com/KTkodehode?tab=repositories"
          className="hover:scale-110"
        />
      </div>
    </>
  );
}
{
}
export default Skills;
