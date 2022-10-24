import generateCover from "./sitecover/sitecover.js";
import siteload from "./siteload/siteload.js";
import generateAboutPage from "./about/about.js";

import {siteLoadStyleTags} from "./siteload/siteload.js";
import {coverStyleTags} from "./sitecover/sitecover.js";

import { homeStyleTags } from "./homepage/homepage.js";
import { aboutStyleTags } from "./about/about.js";

import generateHomePage from "./homepage/homepage.js";

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

    /*
    mainExist=document.querySelector("main");

    const links=document.querySelectorAll("nav a");

  */
    aboutStyleTags.turnOn();
    generateAboutPage();
    //homeStyleTags.turnOn();
    //generateHomePage();
}








