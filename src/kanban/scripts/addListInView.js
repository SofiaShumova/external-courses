export function addListInView(title, actionAdd) {
    let main = document.querySelector("main");

    let taskBlock = document.createElement("div");
    taskBlock.setAttribute("class", "tabTask");
    taskBlock.setAttribute("id", title);

    let header = document.createElement("div");
    header.setAttribute("class", "headerTab");

    let other = document.createElement("object");
    other.setAttribute("type", "image/svg+xml");
    other.setAttribute("data", "img/ellipsis.svg");
    other.setAttribute("class", "other");

    let h = document.createElement("h3");
    h.innerHTML = title;

    let content = document.createElement("div");
    content.setAttribute("class", "content");

    let button = document.createElement("button");
    button.setAttribute("class", "footerTab");
    button.setAttribute("id", title + "Add")
    button.addEventListener("click", actionAdd);

    let span = document.createElement("span");
    span.innerHTML = "Add card"

    let plus = document.createElement("object");
    plus.setAttribute("type", "image/svg+xml");
    plus.setAttribute("class", "plusCard");
    plus.setAttribute("data", "img/plus.svg");

    button.append(plus, span);
    header.append(h, other);

    taskBlock.append(header, content, button);
    main.prepend(taskBlock)
}