import generateCover from "./sitecover/sitecover.js";
import siteload from "./siteload/siteload.js";
import {siteLoadStyle} from "./siteload/siteload.js";
import {coverStyle} from "./sitecover/sitecover.js";

coverStyle.turnOn();
generateCover();

const button=document.querySelector("button");
const content=document.querySelector("#content");
button.onclick= () => {
    content.innerHTML="";
    
    siteLoadStyle.turnOn();
    siteload();

}


