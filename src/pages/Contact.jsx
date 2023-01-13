import React from "react";
// Images
import profil from "./images/circleprofile.png";

function Contact() {
  return (
    <>
      <div className="navbar-center absolute top-8 right-1/2 translate-x-28">
        <a className="font-serif text-5xl">Kontakt info</a>
      </div>
      <div className="card lg:w-[500px] md:w-[500px] w-[450px] bg-base-100 shadow-xl flex m-auto mt-8">
        <figure>
          <img
            src={profil}
            className="rounded-2xl m-auto opacity-80 mt-4 lg:h-96 md:h-80 h-64"
          />
        </figure>

        <div className="ml-10 mt-10 w-96 sm:w-1/2 md:w-80">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3059/3059502.png"
            className="w-10 inline mb-6"
          ></img>
          <h4 className="justify-center inline ml-10 text-3xl font-sans">
            92 97 14 29
          </h4>
        </div>
        <div className="ml-10">
          <a href="https://mail.google.com/mail/?view=cm&source=mailto&to=kenneth1.kodehode@gmail.com">
            <img
              src="https://cdn-icons-png.flaticon.com/512/542/542689.png"
              className="w-10 inline hover:scale-125 mb-6"
            ></img>
            <h4 className="justify-center inline ml-10 font-sans text-xl">
              Kenneth1.kodehode@gmail.com
            </h4>
          </a>
        </div>
        <div className="ml-10">
          <a href="https://www.google.com/maps/place/Nygata+16B,+3950+Brevik/@59.051801,9.7042902,17z/data=!3m1!4b1!4m5!3m4!1s0x4646e107e49a5eeb:0xba42035f30e88ded!8m2!3d59.0517983!4d9.7064842">
            <img
              src="https://cdn-icons-png.flaticon.com/512/25/25694.png"
              className="w-10 inline hover:scale-125 mb-6"
            ></img>
            <h4 className="justify-center inline ml-10 font-sans text-2xl">
              Nygata 16b, 3950 Brevik
            </h4>
          </a>
        </div>
      </div>
    </>
  );
}

export default Contact;
