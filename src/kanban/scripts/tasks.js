import Issue from './issue.js'
import {addListInView} from './addListInView.js'
import {addTaskInView} from './addTaskInView.js'
import {createMenu} from './createMenu.js'
let dataMock = [
    {
        title: 'backlog',
        issues: []
    },
    {
        title: 'ready',
        issues: []
    },
    {
        title: 'progress',
        issues: []
    },
    {
        title: 'finished',
        issues: []
    }
]

let buttonsAdd = document.getElementsByClassName("footerTab")

function addNewIssue(name) {
    dataMock[0].issues.push(new Issue(dataMock[0].issues.length + 1, name))
}

function addIssue(title, name) {
    let index = getIndex(title);
    let issue = getIssue(index - 1, name);
    removeIssue(index - 1, name);
    dataMock[index].issues.push(issue);
}

function getIndex(title) {
    return dataMock.findIndex((elem, index) => {
        return elem.title == title
    });
}
function getIssue(index, name) {
    let findIndex = dataMock[index].issues.findIndex((elem) => {
        return elem.name === name;
    })
    return dataMock[index].issues[findIndex]
}

function removeIssue(index, name) {
    let removeIndex = dataMock[index].issues.findIndex((elem) => {
        return elem.name === name;
    });
    dataMock[index].issues.splice(removeIndex, 1);
    document.getElementById(dataMock[index].title).getElementsByClassName("content")[0].getElementsByClassName("task")[removeIndex].remove()
}

function actionAdd() {
    if (document.getElementById("newTaskInput"))
        return;
    setButtonDisabled(true);
    let title = this.parentElement.id;
    let index = getIndex(title);

    let taskBlock = document.createElement("div");
    taskBlock.setAttribute("class", "task");

    let inputText = document.createElement("input");
    inputText.setAttribute("type", "text");
    inputText.setAttribute("id", "newTaskInput");

    taskBlock.appendChild(inputText);

    if (index > 0) {
        let datalist = getDataList(index - 1);
        datalist.setAttribute("id", "list");
        inputText.appendChild(datalist);
        inputText.setAttribute("list", "list")
    }

    inputText.addEventListener("blur", handlerInput)
    inputText.addEventListener("keypress", function (event) {
        if (event.keyCode == 13) {
            inputText.blur();
        }
    })

    let contents = document.getElementsByClassName("content")
    contents[index].append(taskBlock)
}

function getDataList(index) {
    let datalist = document.createElement("datalist");

    for (let issue of dataMock[index].issues) {
        let option = document.createElement("option")
        option.setAttribute("value", issue.name)
        datalist.appendChild(option)
    }

    return datalist
}

function handlerInput() {
    let title = this.parentElement.parentElement.parentElement.id

    if (this.value === "") {
        this.parentElement.remove()
        setButtonDisabled(false);
        return
    } else if (getIndex(title) > 0) {
        if (getIssue(getIndex(title) - 1, this.value) == undefined) {
            this.parentElement.remove()
            setButtonDisabled(false);
            return
        }
    }

    if (title === dataMock[0].title) {
        addNewIssue(this.value);
    } else {
        addIssue(title, this.value);
    }

    let p = document.createElement("p");
    p.innerHTML = this.value;
    setButtonDisabled(false);
    this.replaceWith(p);
    updateLocalStorage();
}

function setButtonDisabled(state) {
    for (let button of buttonsAdd) {
        button.disabled = state;
    }
}

function updateLocalStorage() {
    localStorage.setItem('datamock', JSON.stringify(dataMock));
}

function recoveryData() {
    if (localStorage.datamock !== undefined) {
        dataMock = JSON.parse(localStorage.datamock);
    }
    loadView();
}

function loadView() {
    let blockIndex = dataMock.length;

    while (blockIndex !== 0) {
        addListInView(dataMock[blockIndex - 1].title, actionAdd)
        blockIndex--;
    }

    for (let key in dataMock) {
        if (dataMock[key].issues.length > 0) {
            dataMock[key].issues.forEach((element) => {
                addTaskInView(dataMock[key].title, element.name)
            })
        }
    }
}

export function actionsWithTasks() {
    recoveryData();
    for (let button of buttonsAdd) {
        button.onclick = actionAdd;
    }
    createNewList();
    createPopup();
}

function createNewList() {
    let buttonAddList = document.getElementById("create");
    buttonAddList.onclick = actionAddList;
}

function actionAddList() {
    let inputTitle = document.querySelector("#titleList")
    let title = inputTitle.value
    if (title !== "") {
        let title = inputTitle.value;
        dataMock.unshift(getNewList(title));
        window.location.href = '#';
        inputTitle.value = "";
        updateLocalStorage();
        addListInView(title, actionAdd)
    }
}

function getNewList(title) {
    return { title: title, issues: [] }
}

function createPopup(){
    let items = ["delete"];
    let others = document.getElementsByClassName("other");
    console.log(others)
    for(let i of others){
        let menu = createMenu(items);
        menu.style.listStyle = "none"
        i.after(menu);
    }
}

function displayPopup(){
    
}


