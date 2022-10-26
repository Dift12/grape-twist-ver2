import about from "./about.lazy.css";

export const aboutStyleTags=(function(){
    const turnOn=()=>{about.use()};
    const turnOff=()=>{about.unuse()};
    return {turnOn,turnOff};
})();



export default function generateAboutPage(){

    const main=document.querySelector("main");

   const card1=document.createElement("div");
   const card2=document.createElement("div");
   const card3=document.createElement("div");

   card1.id="about"
   card1.classList.add("home-section");
   card2.classList.add("home-section");
   card3.classList.add("home-section");




   const card1H2=document.createElement("h2");
   const card2H2=document.createElement("h2");
   const card3H2=document.createElement("h2");

   const card1P=document.createElement("p");
   card1P.classList.add("section-card");
   const card2P=document.createElement("p");
   card2P.classList.add("section-card");
   const card3P=document.createElement("p");
   card3P.classList.add("section-card");

   


   card1H2.textContent="WHO WE ARE";
   card2H2.textContent="WHAT CAN KIND OF MUSIC?";
   card3H2.textContent="WHAT DO WE OFFER?";

   card1P.textContent="GRAPE TWIST MUSIC, OR GTM FOR OUR FRIENDS, IS AN INDIE MUSIC STUDIO LOCATED IN ARGENTINA. WE'VE BEEN PRODUCING ALL KINDS OF MUSIC BY REQUEST AND FREE OF CHARGE FOR LOCAL ARTIST WHO HAVE THE TALENT BUT NOT THE MEANS."
   card2P.textContent=`AS WE SAID BEFORE, WE PRODUCE ALL KIND OF MUSIC, BUT LATELY MOST OF OUR CLIENTS REQUEST TRAP, RAP AND URBAN MUSIC TRACKS. SO WE'RE SOMEHOW SPECIALIZED IN "BEATS".ORIGINALLY WE STARTED WITH INDIE ROCK/POP MUSIC, SO WE WOULD LOVE TO WORK WITH YOU IN ANY PROJECT INVOLVING THOSE GENRES!`
   card3P.textContent=`WE CAN OFFER YOU THE COMPLETE PACKAGE, FROM RECORDING, COMPOSING, WRITING, PUBLISHING AND MANAGING YOUR SONGS (SPOTIFY, YOUTUBE, DEEZER, ETC.), TO ANYTHING ELSE PROJECT RELATED. AS WEE SAID, FREE OF CHARGE.
   YOU NAME IT, WE GOT IT.`;

   card1.appendChild(card1H2);
   card2.appendChild(card2H2);
   card3.appendChild(card3H2);

   card1.appendChild(card1P);
   card2.appendChild(card2P);
   card3.appendChild(card3P);

    main.appendChild(card1);
    main.appendChild(card2);
    main.appendChild(card3);

}