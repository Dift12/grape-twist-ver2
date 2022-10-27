import youtubeLogo from "./assets/youtube.png"
import instagramLogo from "./assets/instagram.png"


export default function generateContactPage(){


    const main=document.querySelector("main");

    const contactCard=document.createElement("div");
    contactCard.classList.add("contact-card");

    const firstDiv=document.createElement("div");
    const secondDiv=document.createElement("div");
    const subscribre=document.createElement("h2");
    const follow=document.createElement("h2");

    const firstInnerDiv=document.createElement("div");
    const secondInnerDiv=document.createElement("div");

    const youtubeText=document.createElement("p");
    const instagramText=document.createElement("p");

    youtubeText.textContent="Check out all our works and new releases.";
    instagramText.textContent="Fastest way to talk with us, just DM us.";

    subscribre.textContent="Subscribe to our youtube channel!";
    follow.textContent="Follow and contact us on our social media!";
    

    const youtube=new Image();
    const instagram=new Image();

    youtube.src=youtubeLogo;
    youtube.alt="Youtube logo";
    instagram.src=instagramLogo;
    instagram.alt="Instagram Logo";



    const youtubeLink=document.createElement("a");
    const instagramLink=document.createElement("a");

    youtubeLink.appendChild(youtube);

    instagramLink.appendChild(instagram);
    

    

    youtubeLink.href="https://www.youtube.com/channel/UC6M5RGoDibt0CcEuIKYnJiw";
    youtubeLink.target="_blank";

    instagramLink.href="#"; //--> no personal info;
    instagramLink.target="_blank";


    

    
    firstInnerDiv.appendChild(youtubeLink);
    firstInnerDiv.appendChild(youtubeText);

    
    secondInnerDiv.appendChild(instagramLink);
    secondInnerDiv.appendChild(instagramText);

    firstDiv.appendChild(subscribre);
    firstDiv.appendChild(firstInnerDiv);

    secondDiv.appendChild(follow);
    secondDiv.appendChild(secondInnerDiv);


    contactCard.appendChild(firstDiv);
    contactCard.appendChild(secondDiv);

    main.appendChild(contactCard);


}