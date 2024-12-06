//selectors
const todoinput = document.querySelector(".todo-input");
const todobutton = document.querySelector(".todo-button");
const todolist = document.querySelector(".todolist");
//event listeners
todobutton.addEventListener('click',todo);
todolist.addEventListener('click',trashit);
//functions
    //adding todo
function todo(e)
{
    //prevent submit
    e.preventDefault();
    //creating the div for todo
    const tododiv = document.createElement("div");
    tododiv.classList.add("todo");
    //creating the list element
    const litem = document.createElement('li');
    litem.innerText= todoinput.value;
    litem.classList.add('todo-item');
    tododiv.appendChild(litem);
    //creating a check button for the list of todos
    const checked = document.createElement('button');
    checked.classList.add('checkbtn');
    checked.innerHTML='<ion-icon name="checkbox-outline"></ion-icon>';
    tododiv.innerHTML+=('<input type="checkbox" class="checkbtn"> ');
    //creating a deleted button for the list of todos
    const deleted = document.createElement('button');
    deleted.classList.add('deletebtn');
    deleted.innerHTML='<ion-icon name="trash"></ion-icon>';
    tododiv.appendChild(deleted);
    //append the todos to the list
    todolist.appendChild(tododiv);
    todoinput.value="";
}
//deleting the todos
function trashit(e)
{
    //deleted
    const item = e.target;
    if(item.classList[0]==="deletebtn")
    {
        const t = item.parentElement;
        //delete animation
        t.classList.add('slidedown');
        t.addEventListener('transitionend',function(){
            t.remove();
        })
    }
    //checked
    if(item.classList[0]==="checkbtn")
    {
        const t = item.parentElement;
            t.classList.toggle("completed");
    }
}

 