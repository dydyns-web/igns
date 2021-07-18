var menu_mobile = document.getElementById("menu");
var mobal_app = document.getElementById("banner_app");

window.onload = function(){

    setTimeout(function(){

        mobal_app.style.display = "block";
        mobal_app.style.opacity = "1";

    }, 1000)
}

/* ---------- 
--- ACTIVAR MOBAL PARA CUANDO SE TOQUE FUERA
---
*/
// mobal_app.addEventListener('click', function(){
//     mobal_app.style.opacity = "0";

//     mobal_app.addEventListener('transitionend', function(){
//         mobal_app.style.display = "none";
//     })
// })

function open_menu(){

    if (menu_mobile.style.transform == "translate(0px, -500px)") {
        
        menu_mobile.style.transform = "translate(0px, 0px)";
        
    } else {
        menu_mobile.style.transform = "translate(0px, -500px)";
    }
}