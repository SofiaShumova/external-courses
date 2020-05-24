import {createMenu} from './createMenu.js'
let account = document.getElementById("account");
let pic = document.getElementById("profile-pic")
let items = ["Account", "Tasks", "Edit", "Settings", "Log out"];
let menu = createMenu(items);
let arrow = document.getElementById("arrow")

function displayAccountMenu(){
    if(document.getElementById("accountMenu").style.display==="none"){
        menu.style.display="block";
        arrow.style.transform = "rotate(180deg)"
    } else{
        menu.style.display="none";
        arrow.style.transform = "rotate(360deg)"
    }
}

export function addActionMenu(){
    menu.setAttribute("id", "accountMenu")
    account.addEventListener("click", displayAccountMenu)
    pic.addEventListener("click", displayAccountMenu)
    account.appendChild(menu)
} 