// Images
import img from "./images/backturned.jpg";
// Component
import SkillsComp from "../components/SkillsComp";

function Skills() {
  return (
    <>
      {" "}
      <div className="navbar-center absolute top-8 right-1/2 translate-x-20">
        <a className="font-serif text-5xl">Skills</a>
      </div>
      <div className="text-4xl text-zone text-center mt-10">Coming Soon</div>
      <SkillsComp picLink="#link" pic={img} className="" />
    </>
  );
}
{
  /* Bilder: Figma, react, tailwind, daisyui, SQL, Asp.net, mvc, html,css,
js, python, java */
}
export default Skills;
/* 
This section should showcase the developer's work, including live demos and links to the code. It could be organized by project or by skill area (e.g., web design, JavaScript development).
*/
