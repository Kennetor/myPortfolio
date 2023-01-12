function SkillsComp(props) {
  return (
    <>
      <a href={props.picLink}>
        <img src={props.pic} className={props.className}></img>
      </a>
    </>
  );
}
export default SkillsComp;
