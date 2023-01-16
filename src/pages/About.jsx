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
        <div className="avatar">
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

/*
Kjære [Arbeidsgiver],

Jeg skriver for å uttrykke min interesse for stillingen som Junior Frontend Developer hos dere. Med en sterk lidenskap for teknologi og en nylig fullført utdanning innen frontend-utvikling, mener jeg å ha de ferdighetene og motivasjonen som trengs for å kunne bidra verdifullt til deres team.

Jeg fullførte nylig en 12 ukers intensiv kurs innen frontend-utvikling, hvor jeg fikk praktisk erfaring med HTML, CSS, JavaScript og React. I tillegg til denne formelle utdanningen, har jeg også utviklet mine ferdigheter gjennom selvstudium og personlige prosjekter.

Jeg er en rask lærer og trives i et samarbeidsorientert miljø. Jeg er sikker på at min entusiasme for teknologi og min vilje til å konstant forbedre meg vil gjøre meg til en verdifull ressurs for deres team.

Takk for at dere vurderer min søknad. Jeg gleder meg til å få muligheten til å diskutere mine kvalifikasjoner ytterligere og hvordan jeg kan bidra til suksessen til deres selskap.

Med vennlig hilsen
*/
