const todos = document.querySelectorAll('.todo');
const all_status = document.querySelectorAll('.status');
let pcontainer = document.querySelector('.todo-container');
let draggableTodo = null;  

todos.forEach(todo =>{
    todo.addEventListener('dragstart', dragStart);
     todo.addEventListener('dragend', dragEnd);
});

function dragStart(){
    draggableTodo = this;
    setTimeout(()=>{
        this.style.display = "none";
    }, 0);
    
}

function dragEnd(){
    draggableTodo = null;
    setTimeout(()=>{
        this.style.display = "block";
    }, 0);
    
}

all_status.forEach((status)=>{
 status.addEventListener('dragover', dragOver);
  status.addEventListener('dragenter', dragEnter);
   status.addEventListener('dragleave', dragLeave);
   status.addEventListener('drop', dragDrop);
})

function dragOver(e){
    e.preventDefault();
   
}

function dragEnter(){
    this.style.border = "1px dash #ccc";

}
function dragLeave(){
    this.style.border = "none";
    
}

function dragDrop(){
    this.style.border = "none";
    this.appendChild(draggableTodo);
    
}

/*modal*/
const btns = document.querySelectorAll("[data-target-modal]");
const close_modals = document.querySelectorAll(".close-modal");
const overlay = document.getElementById("overlay");

btns.forEach((btn)=>{
    btn.addEventListener('click', ()=>{
        document.querySelector(btn.dataset.targetModal).classList.add('active');
        btn.classList.add('active');
    });
});

close_modals.forEach((btn)=>{
    btn.addEventListener('click', ()=>{
        const modal = btn.closest(".modal");
        modal.classList.remove("active");
        btn.classList.remove("active");
    })
})

window.onclick = (event)=>{
    if(event.target == overlay){
        const modals = document.querySelectorAll(".modal");
        modals.forEach((modal)=> modal.classList.remove("active"));
        overlay.classList.remove("active");
    }
};
onload = () =>{
     //render date
     const dateBox = document.querySelector(".date");
     const date = new Date();
     const day = date.getDate();
     const month = date.getMonth()+1;
     const year = date.getFullYear();

     dateBox.innerHTML = 'date:<span>'+day+ '-' + month+ '-' +year+ '</span>';
 }



//create todo
 const todo_submit = document.getElementById("todo_submit");
 todo_submit.addEventListener('click', createTodo);
 function createTodo(){
     const todo_div = document.createElement("div");
     let input_val = document.getElementById("todo_input").value;
     
     const txt = document.createTextNode(input_val);
     let items = []; 
     let item = {
        name:input_val,
     };
     
     
     if(input_val.trim() !== "" ){
             todo_div.appendChild(txt);
     todo_div.classList.add("todo");
     todo_div.setAttribute("draggable", "true");
     const span = document.createElement("span");
     const span_txt = document.createTextNode("\u0007");
     span.classList.add("close")
     span.appendChild(span_txt);

     todo_div.appendChild(span);

     no_status.appendChild(todo_div);

     
     

     span.addEventListener('click', ()=>{
         span.parentElement.style.display = "none";
         
     });
   

        
     todo_div.addEventListener('dragstart', dragStart);
     todo_div.addEventListener('dragend', dragEnd);

     document.getElementById("todo_input").value = "";

     todo_form.classList.remove('active');
     
    
     

     
     }
 }

 const close_btns = document.querySelectorAll('.close');

 close_btns.forEach(btn=>{
     btn.addEventListener('click', ()=>{
         btn.parentElement.style.display = "none";
     });
 });

 
