const BImEL = document.getElementById("bgImage");

window.addEventListener("scroll",()=>{
    updateImage();
});

function updateImage(){
    BImEL.style.opacity = 1 - window.pageYOffset / 800 ;
   BImEL.style.backgroundSize = 163 - window.pageYOffset / 12 +"%";
     
}