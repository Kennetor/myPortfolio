import React from "react";
import Certificate from "../components/certificate";

// img
import profil from "../pages/images/Profil-Bilde.png";

function About() {
  return (
    <>
      <div className="navbar-center absolute top-8 right-1/2 translate-x-32">
        <a className="font-serif text-5xl">Om meg</a>
      </div>
      <div className="text-zone text-left flex flex-wrap p-12">
        <div className="avatar mt-2">
          <div className="h-full w-96">
            <img src={profil} className="rounded-b-[200px] opacity-80 ml-2" />
          </div>
        </div>
        <p className="mt-24 font-light text-gray-500 dark:text-gray-400 text-3xl flex w-1/2 flex-wrap m-auto z-50">
          <br />
          Er 29 år gammel og bor for tiden i Porsgrunn, selv om jeg er
          opprinnelig fra Trondheim.
          <br />
          <br />
          Jeg har fullført et kurs på GET Academy og nylig gjennomgått en
          frontend bootcamp på Kodehode.
          <br />
          <br /> Jeg er interessert i alle aspekter av frontend-utvikling og
          liker å jobbe med nye prosjekter sammen med likesinnede personer.
          <br />
          <br />
          På fritiden liker jeg å følge med på kampsport, utendørsaktiviteter,
          prøve ut nye apper, og se på TV-serier. Målet mitt er å bli flink til
          å lage visuelt tiltalende og funksjonelle nettsteder og apper, både
          for profesjonelle og personlige formål.
        </p>
      </div>
    </>
  );
}

export default About;
