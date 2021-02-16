const clear = document.querySelector(".clear");

const dateElement = document.getElementById("date");

const list = document.getElementById("list");

const input = document.getElementById("input");

//shows today date
const options = { weekday: 'long', month: 'short', day: 'numeric' };
const today = new Date();
dateElement.innerHTML = today.toLocaleDateString("en-US", options);

//add todo list
function addToDo(toDo){
    const item = `<li id="items">
    <i class="fa fa-circle-thin complete" id="0"></i>
    <p class="text">${toDo}</p>
    <i class="fa fa-trash-o delete" id="0"></i>
    </li> `;
    const position = "beforeend";
    list.insertAdjacentHTML(position, item);
}

document.addEventListener("keyup",function(event){
    if(event.keycode == 13){
        const toDo = input.value;        
        if(toDo){
            addToDo(toDo);
        }
        input.value = "";
    }
});

