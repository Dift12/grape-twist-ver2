import homepagestyle from "./homepagestyle.lazy.css"

export const homeStyleTags=(function(){
    const turnOn=()=>{homepagestyle.use()};
    const turnOff=()=>{homepagestyle.unuse()};
    return {turnOn,turnOff};
})();




export default function generateHomePage(){

    const main=document.querySelector("main");

    //PRINCIPAL
    const principal=document.createElement("div");
    principal.classList.add("home-principal");
    const principalH2=document.createElement("h2");
    principalH2.textContent="check out our lastest work";

    const iframeCont=document.createElement("div");
    iframeCont.classList.add("video-cont");

    const iframe=document.createElement("iframe");

    iframe.src="https://www.youtube.com/embed/Z7QUW0Opiug";
    iframe.title="YouTube video player" ;
    iframe.frameborder="0";
    iframe.allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
    iframe.allowFullscreen;

    iframeCont.appendChild(iframe);

    principal.appendChild(principalH2);
    principal.appendChild(iframeCont);


    //PRESENTATION

    const presentationCard=document.createElement("div");
    presentationCard.classList.add("home-section");

    const presentationTitle=document.createElement("h2");

    const presentationText=document.createElement("p");
    presentationText.classList.add("section-card");

    const span=document.createElement("span");
    span.classList.add("accent");
    span.textContent="N°1."

    presentationTitle.textContent="Professional music production for everyone";
    
    presentationText.textContent="we're the best music producers and audio solutions provider in town, we can help you make your project shine, years of experience made us ";
    
    presentationText.appendChild(span);
    

    presentationCard.appendChild(presentationTitle);
    presentationCard.appendChild(presentationText);



  
    main.appendChild(presentationCard);
    main.appendChild(principal);

}


