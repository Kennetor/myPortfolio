import React from "react";

function Projects() {
  return (
    <>
      <div className="absolute bg-[url('https://images.unsplash.com/photo-1454117096348-e4abbeba002c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')] w-full h-full bg-cover opacity-80 -z-50">
        <a href="https://github.com/KTkodehode?tab=repositories">
          <img
            src="/src/images/githublogo.png"
            className="whitespace-pre w-20 inline hover:scale-125 m-auto ml-20"
          ></img>
          <h4 className="justify-center inline ml-2">
            All Github Repositories
          </h4>
        </a>
      </div>
    </>
  );
}

export default Projects;
