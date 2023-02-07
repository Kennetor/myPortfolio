import React from "react";
// Images
import profil from "./images/circleprofile.png";

function Contact() {
  return (
    <>
      <div className="card lg:card-side bg-base-100 shadow-xl w-fit m-auto mt-20">
        <figure>
          <img src={profil} alt="Album" style={{ width: "230px" }} />
        </figure>
        <div className="card-body m-auto">
          <div className="ml-12 mt-10">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3059/3059502.png"
              className="w-10 inline mb-6"
            ></img>
            <h4 className="justify-center inline ml-10 text-3xl font-sans">
              92 97 14 29
            </h4>
          </div>
          <div className="ml-12">
            <a href="https://mail.google.com/mail/?view=cm&source=mailto&to=kenneth1.kodehode@gmail.com">
              <img
                src="https://cdn-icons-png.flaticon.com/512/542/542689.png"
                className="w-10 inline hover:scale-125 mb-6"
              ></img>
              <h4 className="justify-center inline ml-10 font-sans text-sm md:text-xl">
                Kenneth1.kodehode@gmail.com
              </h4>
            </a>
          </div>
          <div className="ml-12">
            <a href="https://www.google.com/maps/place/Nygata+16B,+3950+Brevik/@59.051801,9.7042902,17z/data=!3m1!4b1!4m5!3m4!1s0x4646e107e49a5eeb:0xba42035f30e88ded!8m2!3d59.0517983!4d9.7064842">
              <img
                src="https://cdn-icons-png.flaticon.com/512/25/25694.png"
                className="w-10 inline hover:scale-125 mb-6"
              ></img>
              <h4 className="justify-center inline ml-10 font-sans text-lg md:text-xl">
                Nygata 16b, 3950 Brevik
              </h4>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
