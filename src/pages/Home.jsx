import React from "react";

function Home() {
  return (
    <>
      <div className="absolute bg-[url('https://images.unsplash.com/photo-1672010568443-cb8d4182777a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80')] w-full h-full bg-cover opacity-60 -z-50"></div>
      <h1 className="z-50 text-5xl opacity-100 flex justify-center mt-60">
        Kenneth Tørhaug
      </h1>
      <h4 className="text-xl flex justify-center mt-6">I'm a developer</h4>
      <btn className="flex justify-center mt-6">
        <button className="btn btn-active bg-transparent p-5 text-gray-50 hover:bg-blue-800">
          Hire me
        </button>
        <button className="btn btn-active bg-transparent p-5 ml-2 text-gray-50 hover:bg-green-800">
          Download CV
        </button>
      </btn>
    </>
  );
}

export default Home;
