const menu = document.getElementById("menu");
const menuContent = document.getElementById("menuContent")
const hamburger = document.querySelector('hamburger')
menu.onclick = () => {
    if(menuContent.style.display="none"){
        menuContent.style.display = "inline";
        menu.style.zIndex = "150";
    }
    else{
        menuContent.style.display = "none";
        menu.style.zIndex = "0";
    }
    
    
    
}