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

recoveryData();
class Issue {
    constructor(id, name) {
        this.id = "task" + id;
        this.name = name;
    }
}

function addNewIssue(name) {
    dataMock[0].issues.push(new Issue(dataMock[0].issues.length+1, name))
}

function addIssue(title, name){
    let index = getIndex(title);
    let issue = getIssue(index-1, name);
    removeIssue(index-1, name);
    dataMock[index].issues.push(issue);
}

function getIndex(title){
    return dataMock.findIndex((elem, index)=>{
        return elem.title == title
    });
}
function getIssue(index, name){
    let findIndex = dataMock[index].issues.findIndex((elem)=>{
        return elem.name === name;
    })
    return dataMock[index].issues[findIndex]
}

function removeIssue(index, name){
    let removeIndex = dataMock[index].issues.findIndex((elem)=>{
        return elem.name === name;
    });
    dataMock[index].issues.splice(removeIndex,1);
    document.getElementById(dataMock[index].title).getElementsByClassName("content")[0].getElementsByClassName("task")[removeIndex].remove()
}

let buttonsAdd = document.getElementsByClassName("footerTab")
let contents = document.getElementsByClassName("content")

for(let button of buttonsAdd){
    button.addEventListener("click", actionAdd);
}

function actionAdd() {
    if(document.getElementById("newTaskInput"))
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
    
    if(index>0){
        let datalist = getDataList(index-1);
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

    contents[index].appendChild(taskBlock)
}

function getDataList(index){
    let datalist = document.createElement("datalist");

    for(let issue of dataMock[index].issues){
        let option = document.createElement("option")
        option.setAttribute("value", issue.name)
        datalist.appendChild(option)
    }

    return datalist
}

function handlerInput() {
    let title = this.parentElement.parentElement.parentElement.id
    if(this.value === ""){
        this.parentElement.remove()
        return
    } else if( getIndex(title)>0){
        if(getIssue(getIndex(title)-1, this.value) == undefined){
            this.parentElement.remove()
            return  
        }
    }

    if(title==="backlog"){
        addNewIssue(this.value);
    } else{
        addIssue(title, this.value);
    }
    
    let p = document.createElement("p");
    p.innerHTML = this.value;
    setButtonDisabled(false);
    this.replaceWith(p);

    updateLocalStorage();
   
}

function setButtonDisabled(state){
    for(let button of buttonsAdd){
        button.disabled = state;
    }
}

function updateLocalStorage() {
    localStorage.setItem('datamock', JSON.stringify(dataMock));
}

function recoveryData(){
    if(localStorage.datamock !== undefined){
        dataMock = JSON.parse(localStorage.datamock);
        loadView();
    }
    console.log("recovery")
}

function loadView(){
    for(let key in dataMock){
        if(dataMock[key].issues.length>0){
            dataMock[key].issues.forEach((element)=>{
                addTaskInView(dataMock[key].title, element.name)
            })
            
        }
       }
   
}

function addTaskInView(title, task){
    let index = getIndex(title);
    let taskBlock = document.createElement("div");
    taskBlock.setAttribute("class", "task");

    let p = document.createElement("p").innerHTML = task;
    taskBlock.append(p);

    document.getElementById(title).children[1].appendChild(taskBlock);    
}





