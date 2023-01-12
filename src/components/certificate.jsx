import GetA from "./images/getacademy.png";
import GetB from "./images/get2.png";

function ImageOpenerA() {
  window.open(GetA, "_blank");
}
function ImageOpenerB() {
  window.open(GetB, "_blank");
}

function Certificate() {
  return (
    <>
      <div className="font-sans margin-auto text-center mt-12 text-3xl font-medium">
        Certificates
      </div>
      <div className="carousel w-64 m-auto hover:scale-110 opacity-70">
        <div id="item1" className="carousel-item w-full" onClick={ImageOpenerA}>
          <img src={GetA} />
        </div>
        <div id="item2" className="carousel-item w-full" onClick={ImageOpenerB}>
          <img src={GetB} className="w-full" />
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2 mt-4">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
      </div>
    </>
  );
}
export default Certificate;
