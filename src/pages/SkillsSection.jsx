import SkillsComp from "../components/SkillsComp";
function SkillsSection() {
  return (
    <>
      <div className="mt-6  grid grid-cols-2 gap-5 w-52 ml-40">
        <SkillsComp
          pic={"https://cdn-icons-png.flaticon.com/512/1051/1051277.png"}
          //   className="rotate-6"
        />
        <SkillsComp
          pic={"https://cdn-icons-png.flaticon.com/512/732/732190.png"}
          //   className="rotate-45"
        />
        <SkillsComp
          pic={"https://cdn-icons-png.flaticon.com/512/5968/5968292.png"}
          //   className="rotate-12"
        />
        <br />
        <SkillsComp
          pic={"https://cdn.worldvectorlogo.com/logos/react-2.svg"}
          className="mt-20 ml-20"
        />
        <SkillsComp
          pic={
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/600px-Tailwind_CSS_Logo.svg.png?20211001194333"
          }
          className="rotate-45 mt-20 ml-20"
        />
        <SkillsComp
          pic={"https://cdn.worldvectorlogo.com/logos/vitejs.svg"}
          className="-ml-36"
        />
        <SkillsComp
          pic={"https://cdn-icons-png.flaticon.com/512/5968/5968705.png"}
          className="ml-36"
        />
        <SkillsComp
          pic={"https://cdn-icons-png.flaticon.com/512/6132/6132221.png"}
          className="ml-26"
        />
        <SkillsComp
          pic={"https://cdn-icons-png.flaticon.com/512/5968/5968306.png"}
        />{" "}
        <SkillsComp
          pic={"https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png"}
          className="-ml-36"
        />{" "}
        <SkillsComp
          pic={"https://cdn-icons-png.flaticon.com/512/5968/5968350.png"}
          className="ml-48"
        />
      </div>
    </>
  );
}
export default SkillsSection;
