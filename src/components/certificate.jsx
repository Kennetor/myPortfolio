import GetA from "../pages/images/getacademy.png";
<<<<<<< HEAD
import GetB from "../pages/images/get2.png";
=======
>>>>>>> c9a3cce87a316da6de585384cb16aa35fa0c2d75

function ImageOpenerA() {
  window.open(GetA, "_blank");
}
function Certificate() {
  return (
    <>
<<<<<<< HEAD
      {" "}
      <div className="m-auto ">
        <div className="font-sans text-center text-3xl font-medium">
          Certificates
        </div>
        <div className="carousel w-64 m-auto hover:scale-110 opacity-70">
          <div
            id="item1"
            className="carousel-item w-full mt-4"
            onClick={ImageOpenerA}
          >
            <img src={GetA} />
          </div>
          {/* <div id="item2" className="carousel-item w-full" onClick={ImageOpenerB}>
          <img src={GetB} className="w-full" />
          </div>
          </div>
          <div className="flex justify-center w-full py-2 gap-2 mt-4">
          <a href="#item1" className="btn btn-xs">
          1
          </a>
          <a href="#item2" className="btn btn-xs">
          2
        </a> */}
        </div>
=======
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
>>>>>>> c9a3cce87a316da6de585384cb16aa35fa0c2d75
      </div>
    </>
  );
}
export default Certificate;
