// img
import profil from "../pages/images/Profil-Bilde.png";

function About() {
  return (
    <>
      <div className="navbar-center absolute top-8 right-1/2 translate-x-16 md:translate-x-32">
        <a className="font-serif text-3xl md:text-5xl">Om meg</a>
      </div>
      <div className="text-zone text-left mt-10 flex md:ml-8">
        <p className="mt-2 mx-4 font-light text-gray-500 dark:text-gray-400 text- md:text-2xl flex w-1/2">
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
        <div className="avatar-96 ml-auto overflow-hidden">
          <div className="h-full w-40 md:w-96 ">
            <img src={profil} className="rounded-bl-2xl opacity-80 " />
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
