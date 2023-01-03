import React from "react";

function Home() {
  return (
    <>
      <div className="absolute bg-[url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')] w-full h-full bg-cover opacity-40 -z-50"></div>
      <h1 className="z-50 text-5xl opacity-100 flex justify-center mt-60">
        Kenneth Tørhaug
      </h1>
      <h4 className="text-xl flex justify-center mt-6">I'm a developer</h4>
      <btn className="flex justify-center mt-6">
        <button className="btn btn-active bg-transparent p-4 text-gray-50 hover:bg-blue-500 border-blue-500 hover:border-blue-500 ease-in duration-1000">
          Hire me
        </button>
        <button className="btn btn-active bg-transparent p-4 ml-2 text-gray-50 hover:bg-blue-500 border-blue-500 hover:border-blue-500 ease-in duration-1000 ">
          Download CV
        </button>
      </btn>
    </>
  );
}

export default Home;
