import React from "react";

function Contact() {
  return (
    <>
      <div className="card w-96 bg-base-100 shadow-xl flex m-auto mt-20">
        <figure>
          <img src="/src/images/backturned.jpg" />
        </figure>
        <div className="card-body">
          <h1 className="card-title justify-center text-2xl">Contact me!</h1>
          <a href="https://github.com/KTkodehode?tab=repositories">
            <img
              src="/src/images/githublogo.png"
              className="whitespace-pre w-20 inline hover:scale-125"
            ></img>
            <h4 className="justify-center inline ml-10">Nummer</h4>
          </a>
          <a href="https://github.com/KTkodehode?tab=repositories">
            <img
              src="/src/images/githublogo.png"
              className="whitespace-pre w-20 inline hover:scale-125"
            ></img>
            <h4 className="justify-center inline ml-10">Email</h4>
          </a>
          <a href="https://github.com/KTkodehode?tab=repositories">
            <img
              src="/src/images/githublogo.png"
              className="whitespace-pre w-20 inline hover:scale-125"
            ></img>
            <h4 className="justify-center inline ml-10">Adresse</h4>
          </a>
          <a href="https://github.com/KTkodehode?tab=repositories">
            <img
              src="/src/images/githublogo.png"
              className="whitespace-pre w-20 inline hover:scale-125"
            ></img>
            <h4 className="justify-center inline ml-10">Github repositories</h4>
          </a>
        </div>
      </div>
    </>
  );
}

export default Contact;
