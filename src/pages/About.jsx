import React from "react";

// img
import profil from "../pages/images/Profil-Bilde.png";

function About() {
  return (
    <>
      <div className="navbar-center absolute top-8 right-1/2 translate-x-32">
        <a className="font-serif text-5xl">Om meg</a>
      </div>
      <div className="text-zone text-left mt-10 flex flex-wrap ml-8">
        <p className="mt-2 font-light text-gray-500 dark:text-gray-400 text-3xl flex w-1/2 flex-wrap mr-auto">
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
        <div className="avatar-1/2 ml-auto">
          <div className="h-full w-96">
            <img src={profil} className="rounded-bl-2xl opacity-80" />
          </div>
        </div>
      </div>
    </>
  );
}

export default About;

/*
"Hello, my name is Kenneth. I am 29 years old and currently reside in Porsgrunn, although I am originally from Trondheim. 
I have a background in hardware testing and have recently completed a course at GET-academy as well as a frontend bootcamp called Kodehode. 
I am interested in all aspects of frontend development and enjoy working on new projects with like-minded individuals. 
In my free time, I enjoy mixed martial arts, outdoor activities, trying out new apps, and watching television shows. 
My goal is to become proficient in creating visually appealing and functional websites and apps, both for professional and personal endeavors."
*/

/*
Introduce yourself and provide some personal background information (name, age, location, etc.)
Mention your education and any relevant professional experience
Highlight your skills and areas of expertise
Discuss your interests and hobbies, and how they relate to your work
Conclude by explaining your career goals and what you hope to achieve with your portfolio
Consider adding a memorable or unique detail about yourself to make the about section more personal and engaging.
*/

// Now Write it in the style of game/pulitzer price winner dialogue

/*
Kjære [Arbeidsgiver],

Jeg skriver for å uttrykke min interesse for stillingen som Junior Frontend Developer hos dere. Med en sterk lidenskap for teknologi og en nylig fullført utdanning innen frontend-utvikling, mener jeg å ha de ferdighetene og motivasjonen som trengs for å kunne bidra verdifullt til deres team.

Jeg fullførte nylig en 12 ukers intensiv kurs innen frontend-utvikling, hvor jeg fikk praktisk erfaring med HTML, CSS, JavaScript og React. I tillegg til denne formelle utdanningen, har jeg også utviklet mine ferdigheter gjennom selvstudium og personlige prosjekter.

Jeg er en rask lærer og trives i et samarbeidsorientert miljø. Jeg er sikker på at min entusiasme for teknologi og min vilje til å konstant forbedre meg vil gjøre meg til en verdifull ressurs for deres team.

Takk for at dere vurderer min søknad. Jeg gleder meg til å få muligheten til å diskutere mine kvalifikasjoner ytterligere og hvordan jeg kan bidra til suksessen til deres selskap.

Med vennlig hilsen
*/
