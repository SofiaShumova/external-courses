function createList(arrayObjects, block, arrayTitle){
    let table = document.createElement("table");
    table.setAttribute("id","table")
    
    let header = getRowObject(arrayTitle)
    header.setAttribute("id","header")
    table.appendChild(header);

    updateList(arrayObjects, table);

    block.appendChild(table);
}

function getRowObject(object){
    let row = document.createElement("tr");
    for(let property in object){
        let th = document.createElement("th");
        th.innerHTML = object[property];
        row.appendChild(th);
    }
    return row
}

function dropList(){
    let table = document.getElementById("table");
    while(table.childElementCount>1){
        table.lastElementChild.remove();
    }
}

function updateList(arrayObjects, table){
    for(let obj of arrayObjects){
        table.appendChild(getRowObject(obj));
    }
}

function getData(surname, datamock){
    if(surname ===''){
        return datamock;
    }
    return datamock.filter((elem)=>{
        return elem.Surname === surname || elem.Surname.includes(surname);
    })
}

const dataMock = [
    {Surname: "Daugherty", Name: "Courtney", Phone: "7-651-571-3927"}, 
    {Surname: "Nash", Name: "Ivan", Phone: "7-831-296-0753"}, 
    {Surname: "Norman", Name: "Chava", Phone: "7-991-184-8316"}, 
    {Surname: "West", Name: "Jaquelyn", Phone: "7-741-946-8417"}, 
    {Surname: "Holman", Name: "Guy", Phone: "7-258-788-4723"}, 
    {Surname: "Larsen", Name: "Martena", Phone: "7-236-279-2963"}, 
    {Surname: "Castro", Name: "Dorothy", Phone: "7-339-325-6496"}, 
    {Surname: "Holt", Name: "Leslie", Phone: "7-819-257-5359"}, 
    {Surname: "England", Name: "Kirk", Phone: "7-781-961-2905"}, 
    {Surname: "Powers", Name: "Xantha", Phone: "7-883-580-0383"}, 
    {Surname: "Williamson", Name: "Sasha", Phone: "7-396-821-6221"}, 
    {Surname: "Henderson", Name: "Thaddeus", Phone: "7-276-192-3235"}, 
    {Surname: "Barker", Name: "Rina", Phone: "7-377-748-4632"}, 
    {Surname: "Jacobs", Name: "Tarik", Phone: "7-493-246-8637"}, 
    {Surname: "Andrews", Name: "Sopoline", Phone: "7-637-680-1853"}, 
    {Surname: "Howard", Name: "Virginia", Phone: "7-426-359-5875"}, 
    {Surname: "Stanton", Name: "Dexter", Phone: "7-418-867-9633"}, 
    {Surname: "Berger", Name: "Christian", Phone: "7-687-963-0338"}, 
    {Surname: "Rush", Name: "Declan", Phone: "7-843-356-2718"}, 
    {Surname: "Roman", Name: "Paula", Phone: "7-780-328-8124"}, 
    {Surname: "Bryan", Name: "Gisela", Phone: "7-813-100-1645"}
]
const header = ["Surname", "Name", "Phone"]

let main = document.querySelector("#main");
createList(dataMock, main, header);

const search = document.querySelector("#search");
search.oninput = ()=>{
    debounce(()=>{
        dropList();
        let table = document.getElementById("table")
        updateList(getData(search.value, dataMock), table )
    }, 200)()
}

function debounce(func, delay) {
    let timeout = false;
    return function() {
        if (timeout) return;
        func.apply(this, arguments);
        timeout = true;
        setTimeout(() => {
            timeout = false
        }, delay);
    };
}



