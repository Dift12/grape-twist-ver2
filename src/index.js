import generateCover from "./sitecover/sitecover.js";
import siteload from "./siteload/siteload.js";
import {siteLoadStyleTags} from "./siteload/siteload.js";
import {coverStyleTags} from "./sitecover/sitecover.js";

coverStyleTags.turnOn();
generateCover();

const button=document.querySelector("button");
const content=document.querySelector("#content");

button.onclick= () => {
    content.innerHTML="";
    
    coverStyle.turnOff();
    siteLoadStyleTags.turnOn();
    siteload();

}


