let account = document.getElementById("account");
let pic = document.getElementById("profile-pic")
let menu = createMenu();
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

function createMenu(){
    let items = ["Account", "Tasks", "Edit", "Settings", "Log out"];
    let list = document.createElement("ul");
    list.style.display="none";

    for(let item of items){
        let liItem = document.createElement("li");
        liItem.innerHTML=item;
        liItem.setAttribute("class", "itemMenu")
        list.appendChild(liItem);
    }

    return list;
} 

export function addActionMenu(){
    menu.setAttribute("id", "accountMenu")
    account.addEventListener("click", displayAccountMenu)
    pic.addEventListener("click", displayAccountMenu)
    account.appendChild(menu)
} 