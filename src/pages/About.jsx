import React from "react";

// Images
import GetA from "./images/getacademy.png";
import GetB from "./images/get2.png";

function ImageOpenerA() {
  window.open(GetA, "_blank");
}
function ImageOpenerB() {
  window.open(GetB, "_blank");
}

function About() {
  return (
    <>
      <div className="text-zone text-center mt-10">
        <h1 className="text-3xl font-sans"> About Kenneth.</h1>
        <p className="mt-2 font-light text-gray-500 dark:text-gray-400 text-xl">
          <br />I am 29 years old and currently reside in Porsgrunn, although I
          am originally from Trondheim.
          <br />
          <br />I have completed a course at GET Academy and recently undergone
          a front-end development bootcamp at Kodehode.
          <br />
          <br /> I am interested in all aspects of frontend development and
          enjoy working on new projects with like-minded individuals. <br />
          <br />
          In my free time, I enjoy mixed martial arts, outdoor activities,
          trying out new apps, and watching television shows. <br />
          My goal is to become proficient in creating visually appealing and
          functional websites and apps, both for professional and personal
          endeavors.
        </p>
      </div>
      <div className="font-sans margin-auto text-center mt-10 text-xl font-medium">
        Certificates
      </div>
      <div className="carousel w-64 m-auto hover:scale-110">
        <div id="item1" className="carousel-item w-full" onClick={ImageOpenerA}>
          <img src={GetA} />
        </div>
        <div id="item2" className="carousel-item w-full" onClick={ImageOpenerB}>
          <img src={GetB} className="w-full" />
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2 mt-4">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
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
