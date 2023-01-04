import React from "react";

function Contact() {
  return (
    <>
      <div className="card w-96 bg-base-100 shadow-xl flex m-auto mt-20">
        <figure>
          <img src="./src/images/backturned.jpg" />
        </figure>
        <div className="card-body h-20">
          <h1 className="card-title justify-center text-2xl font-sans">
            Contact me!
          </h1>
        </div>
        <div className="ml-10">
          <img src="/src/images/mobile.png" className="w-20 inline mb-6"></img>
          <h4 className="justify-center inline ml-6 font-sans">92 97 14 29</h4>
        </div>
        <div className="ml-10">
          <a href="https://mail.google.com/mail/?view=cm&source=mailto&to=kenneth1.kodehode@gmail.com">
            <img
              src="https://freeimage.host/i/HAWL9Jn"
              className="w-20 inline hover:scale-125 mb-6"
            ></img>
            <h4 className="justify-center inline ml-2 font-sans">
              Kenneth1.kodehode@gmail.com
            </h4>
          </a>
        </div>
        <div className="ml-10">
          <a href="https://www.google.com/maps/place/Nygata+16B,+3950+Brevik/@59.051801,9.7042902,17z/data=!3m1!4b1!4m5!3m4!1s0x4646e107e49a5eeb:0xba42035f30e88ded!8m2!3d59.0517983!4d9.7064842">
            <img
              src="/src/images/home.png"
              className="w-20 inline hover:scale-125 mb-6"
            ></img>
            <h4 className="justify-center inline ml-2 font-sans">
              Nygata 16b, 3950 Brevik
            </h4>
          </a>
        </div>
      </div>
    </>
  );
}

export default Contact;
