
import siteload from "./siteload.lazy.css"

export const siteLoadStyleTags=(function(){
    const turnOn=()=>{siteload.use()};
    const turnOff=()=>{siteload.unuse()};
    return {turnOn,turnOff};
})();





export default function pageload(){
    const content=document.querySelector("#content");
    content.appendChild(generateHeader());
   // content.appendChild(generateNav());
    const main=document.createElement("main");
    content.appendChild(main);
    content.appendChild(generateFooter());
}




function generateHeader(){

    const header=document.createElement("header");
    const overlay=document.createElement("div");

    overlay.classList.add("header-overlay");//NEW

    const h1=document.createElement("h1");
    const br=document.createElement("br");

    const span=document.createElement("span");
    span.classList.add("accent");

    span.textContent="music";
    h1.textContent=`grape twist`;    
    h1.translate=false;

    h1.appendChild(br);
    h1.appendChild(span);
    overlay.appendChild(h1);
    overlay.appendChild(generateNav());
    header.appendChild(overlay);
    

    return header;
}


function generateNav(){

    const nav=document.createElement("nav");
    const ul=document.createElement("ul");
    
    threeLinkGenerator(ul,"home","about","contact");

    

    nav.appendChild(ul);

    return nav;


}


function generateFooter(){

    const footer=document.createElement("footer");
    const overlay=document.createElement("div");
    overlay.classList.add("footer-overlay"); //NEW

    // Footer contact info.
    const contact=document.createElement("div");
    const contactAdress=document.createElement("address");
    const contactH3=document.createElement("h3");
    const contactlink1=document.createElement("a");
    const contactlink2=document.createElement("a");

    contactH3.textContent="contact info";
    contactlink1.href="mailto:mailfalso123@mailfalso23fake.com";
    contactlink2.href="tel:+2314123456789";
    contactlink2.textContent="(2314) 123456789";
    contactlink1.textContent="grapetwist@fakemail.io.ar";

    contactAdress.appendChild(contactlink1);
    contactAdress.appendChild(contactlink2);

    contact.appendChild(contactH3);
    contact.appendChild(contactAdress);


    //Footer collab section

    const collabSection=document.createElement("div");
    const h3Collab=document.createElement("h3");
    const pCollab=document.createElement("p");
    const collabA=document.createElement("a");
    const collabAddress=document.createElement("address");

    h3Collab.textContent="let us collab with you";
    collabA.textContent="grapetwisthr@twistie.com";
    collabA.href="mailto:mailfalso123@mailfalso23fake.com";
    pCollab.textContent="send your project";

    collabAddress.appendChild(collabA);

    collabSection.appendChild(h3Collab);
    collabSection.appendChild(pCollab);
    collabSection.appendChild(collabAddress);

    //Footer location

    const locationSection=document.createElement("div");
    const locationH3=document.createElement("h3");
    const mapContainer=document.createElement("div");

    mapContainer.classList.add("map-container");

    const mapIframe=document.createElement("iframe");

    locationH3.textContent="where to find us";

    mapIframe.id="gmap_canvas";
    mapIframe.src="https://maps.google.com/maps?q=centro%20civico%20bolivar&t=&z=17&ie=UTF8&iwloc=&output=embed";
    mapIframe.frameborder="0"; 
    mapIframe.scrolling="no";
    mapIframe.marginheight="0"; 
    mapIframe.marginwidth="0";
    
    mapContainer.appendChild(mapIframe);

    locationSection.appendChild(locationH3);
    locationSection.appendChild(mapContainer);

    //Footer legal

    const legalInfo=document.createElement("div");
    const legalInfoH3=document.createElement("h3");
    const rights=document.createElement("div");
    const rightsP=document.createElement("p");
    const ul=document.createElement("ul");
    ul.classList.add("second-list"); //NEW

    threeLinkGenerator(ul,"terms","policy","asereje");

    legalInfoH3.textContent="legal info";
    rightsP.textContent="Grape Twist Music® All rights reserved.";
    rights.appendChild(rightsP);
    legalInfo.appendChild(legalInfoH3);
    legalInfo.appendChild(ul);
    legalInfo.appendChild(rights);

    //Footer disclaimer

    const disclaimer=document.createElement("div");
    disclaimer.id="disclaimer";
    const disclaimerText=document.createElement("p");
    disclaimerText.textContent="This is a fake site all info listed above is fake";

    disclaimer.appendChild(disclaimerText);

    //Footer return

    const sections=[contact,collabSection,locationSection,legalInfo,disclaimer];

    for(let section of sections){
        overlay.appendChild(section);
    }
 
    footer.appendChild(overlay);

    return footer;

}



function threeLinkGenerator(listToUse,text1,text2,text3){

    for(let i=0;i<3;i++){
        const li=document.createElement("li");
        const a=document.createElement("a");

        switch(i){
            case 0:
                a.textContent=text1;
                a.href="#";
                break;
            case 1:
                a.textContent=text2;
                a.href="#";
                break;
            case 2:
                a.textContent=text3;
                a.href="#";
        }

        li.appendChild(a);
        listToUse.appendChild(li);

    }


}