import generateCover from "./sitecover/sitecover.js";
import siteload from "./siteload/siteload.js";
import generateAboutPage from "./about/about.js";

import {siteLoadStyleTags} from "./siteload/siteload.js";
import {coverStyleTags} from "./sitecover/sitecover.js";

import { homeStyleTags } from "./homepage/homepage.js";
import { aboutStyleTags } from "./about/about.js";

import generateHomePage from "./homepage/homepage.js";
import generateContactPage from "./contact/contactpage.js";

coverStyleTags.turnOn();
generateCover();

const button=document.querySelector("button");
const content=document.querySelector("#content");

let mainExist;

button.onclick= () => {
    content.innerHTML="";
    
    coverStyleTags.turnOff();
    siteLoadStyleTags.turnOn();
    siteload();

    generateHomePage();      /*Default generated page*/ 
    homeStyleTags.turnOn();

    generateEvents();

    

    

  
}


function generateEvents(){
  const main=document.querySelector("main");
  const nav=document.querySelectorAll("nav a");

  nav.forEach(link=>link.addEventListener("click",(e)=>{

    let value=e.target.textContent;

    const home=document.querySelector("main .home-principal");
    const about=document.querySelector("main #about");
    const contact=document.querySelector("main .contact-card");


    if(value=="home"){
      if(home) {return} //AVOIDS RUNNING FUNCTIONS IF THE ELEMENTS ALREADY EXIST IN THE DOM;
      main.innerHTML="";
      determineStyle(value);
      generateHomePage();
    } else if(value=="about"){
      if(about){return}
      main.innerHTML="";
      determineStyle(value);
      generateAboutPage()
    } else {
      if(contact){return};
      main.innerHTML="";
      determineStyle(value);
      generateContactPage()
    }
  }))


}



/*Prevents lazy loaded style tags to stack up, loading only the needed one*/;

function determineStyle(value){
  switch(value){
    case "home":
      homeStyleTags.turnOn();
      aboutStyleTags.turnOff();
      break;

    case "about":
      homeStyleTags.turnOff();
      aboutStyleTags.turnOn();
      break;

    case "contact":
      homeStyleTags.turnOff();
      aboutStyleTags.turnOff();

    
  }
}


