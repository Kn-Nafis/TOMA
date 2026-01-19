const preLoader=document.querySelector(".preloader");
const profile=document.querySelector(".profile");
window.addEventListener("load",()=>{
    preLoader.style.display="none";
    profile.style.animation="profilezoom 1000ms ease-out 0s";
});