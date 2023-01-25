import GetA from "../pages/images/getacademy.png";

function ImageOpenerA() {
  window.open(GetA, "_blank");
}
function Certificate() {
  return (
    <>
      <div className="skills">
        <div className="flex flex-wrap justify-center">
          <div>
            <div className="w-40 ">
              <h1 className="text-4xl xl:-translate-y-0 -translate-y-8 xl:-translate-x-60 opacity-100 justify-left">
                Certificate
              </h1>
              <div>
                <div>
                  <img
                    className="opacity-10 hover:scale-150 -translate-y-10 hover:opacity-100"
                    onClick={ImageOpenerA}
                    src={GetA}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Certificate;
