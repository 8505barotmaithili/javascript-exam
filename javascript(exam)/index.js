
let form = document.getElementById("form");
let input = document.getElementById("input");

form.addEventListener('submit',(e)=>{
    e.preventDefault();

    let ul = document.createElement("ul");
    console.log(ul)
    form.appendChild(ul);

    let li = document.createElement("li");
    ul.appendChild(li);

    li.innerText=input.value
    document.getElementById("input").value="";

    let del = document.createElement("button");
    del.innerText='delete'
    li.appendChild(del);

    let edit = document.createElement("button");
    edit.innerText='edit'
    li.appendChild(edit);



    del.addEventListener('click',()=>{
        li.remove();
    })

    edit.addEventListener('click',()=>{
        input.value=li.innerText
        li.remove();
    })
})