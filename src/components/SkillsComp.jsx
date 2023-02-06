function SkillsComp(props) {
  return (
    <>
      <div className="stats stats-vertical">
        <div className="stat w-48">
          <img src={props.img} className={props.className} />

          <div className="stat-value"></div>
        </div>
      </div>
    </>
  );
}

export default SkillsComp;
