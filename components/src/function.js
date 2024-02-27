export const navSlide = () => {
    var mobile = document.querySelector("#mobile");
    var nav = document.querySelector(".nav_links"); 
    nav.classList.toggle("nav-active");
    mobile.classList.toggle("toggle");   
}

export const searchbar = () => {
    const search = document.querySelector(".but-txt");
    if(search.style.display == "inline") {
        search.style.display = "none";
    }else {
        search.style.display = "inline";
    }
}