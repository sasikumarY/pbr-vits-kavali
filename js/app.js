function init(){
    const hambarger = document.querySelector(".hamburger");
    let sidebarContainer = document.querySelector(".sidebar-container")
    let closeButtonContainer = document.querySelector(".close-button");
    
    let openSidebar =()=>{
        sidebarContainer.classList.add("show-sidebar")
    }
    let closeHamburger = () =>{
        sidebarContainer.classList.remove("sidebarContainer")
    }
    
    hambarger.addEventListener("click", openSidebar)
    
    closeButtonContainer.addEventListener("click", closeHamburger)
}
init();
function navReletedCode(){
    let navbarContainer=document.querySelector(".nav-container")
window.addEventListener("scroll", function () {
    const scrollNumber=window.scrollY
     const targetNumber =window.innerHeight >= 992 ? 70 :50;
     if(scrollNumber >= targetNumber){
navbarContainer.classList.add("sticky-nav")
     }
    else{
        navbarContainer.classList.remove("sticky-nav")
    } 

})
}
navReletedCode();

