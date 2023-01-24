import GetA from "../pages/images/getacademy.png";
import GetB from "../pages/images/get2.png";

function ImageOpenerA() {
  window.open(GetA, "_blank");
}
function ImageOpenerB() {
  window.open(GetB, "_blank");
}
// Carousel Only works with BrowserRouter
function Certificate() {
  return (
    <>
      <div>
        <div className="mt-[35rem] ml-[20rem]">
          <div className="font-sans margin-auto text-center mt-20 p-6 text-3xl font-medium">
            Certificates
          </div>
          <div className="carousel w-64 m-auto hover:scale-110 opacity-70">
            <div
              id="item1"
              className="carousel-item w-full"
              onClick={ImageOpenerA}
            >
              <img src={GetA} />
            </div>
          </div>
          {/* <div
            id="item2"
            className="carousel-item w-full"
            onClick={ImageOpenerB}
          >
            <img src={GetB} className="w-full" />
          </div>
        </div>
        <div className="hidden justify-center w-full py-2 gap-2 mt-4 ">
          <a href="#item1" className="btn">
            1
          </a>
          <a href="#item2" className="btn">
            2
          </a> */}
        </div>
      </div>
    </>
  );
}
export default Certificate;
