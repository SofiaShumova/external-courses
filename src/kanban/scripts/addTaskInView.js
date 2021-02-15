export function addTaskInView(title, task) {
    let taskBlock = document.createElement("div");
    taskBlock.setAttribute("class", "task");

    let p = document.createElement("p").innerHTML = task;
    taskBlock.append(p);

    document.getElementById(title).children[1].append(taskBlock);
}