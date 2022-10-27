import coverstyles from "./coverstyle.lazy.css";

export const coverStyleTags=(function(){
    const turnOn=()=>{coverstyles.use()};
    const turnOff=()=>{coverstyles.unuse()};
    return {turnOn,turnOff};
})();


export default function generateCover(){

    const content=document.querySelector("#content");

    const header=document.createElement("header");
    const overlay=document.createElement("div");

    overlay.classList.add("header-overlay");//NEW

    const h1=document.createElement("h1");
    const br=document.createElement("br");

    //NEW
    const button=document.createElement("button");
    button.textContent="continue to site";

    const span=document.createElement("span");
    span.classList.add("accent");

    span.textContent="music";
    h1.textContent=`grape twist`;
    h1.translate=false;

    h1.appendChild(br);
    h1.appendChild(span);
    overlay.appendChild(h1);
    //NEW
    overlay.appendChild(button);

    header.appendChild(overlay);

    content.appendChild(header);



}