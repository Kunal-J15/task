let form = document.querySelector("#my-form");
let name = document.querySelector("#name");
let email = document.querySelector("#email");
let ul = document.querySelector("ul");
let msg = document.querySelector(".msg");
// from old version store by name
// let entries = Object.entries(localStorage);
// for(let e of entries){
//   let li = document.createElement("li");
//      li.textContent = `${e[0]}: ${e[1]}`
//      ul.appendChild(li);
// }
let entries = localStorage.getItem("name")?Object.entries(JSON.parse(localStorage.getItem("name"))):[];
for(let e of entries) createLi(e[0],e[1]);
addListner();


function editLi(e){
  removeListner()
  let name = document.querySelector("#name");
  let email = document.querySelector("#email");
  name.value = e.target.parentElement.firstChild.textContent.split(": ")[0];
  email.value = e.target.parentElement.firstChild.textContent.split(": ")[1];
  removeStorage(e.target.parentElement.firstChild.textContent.split(": ")[0]);
  e.target.parentElement.remove();
}
function removeStorage(name){
  let obj = JSON.parse(localStorage.getItem("name"))
  delete obj[name];
  obj = JSON.stringify(obj);
  localStorage.setItem("name",obj);
}
function deleteLi(e){
  removeStorage(e.target.parentElement.firstChild.textContent.split(": ")[0]);
  e.target.parentElement.remove();
}

form.addEventListener("submit",(e)=>{
  e.preventDefault();
  if(name.value&&email.value){
    createLi(name.value,email.value);
    let obj={};
    if(!localStorage.getItem("name")){
      obj[name.value]= email.value;
      }else{
        obj = JSON.parse(localStorage.getItem("name"));
        obj[name.value] = email.value;
      }
      obj = JSON.stringify(obj);
     localStorage.setItem("name",obj);
  }else{
    msg.textContent = `enter name and email`;
    msg.style.color = "red";
    setTimeout(()=>{
      msg.textContent = "";
    },3000)
  }
addListner();
})

name.addEventListener("mouseover",(e)=>{
  name.style.backgroundColor = "lightGrey";})
//
name.addEventListener("mouseout",(e)=>{
  name.style.backgroundColor = "white";
})

email.addEventListener("mouseover",(e)=>{
  email.style.backgroundColor = "lightGreen";
 })
//
email.addEventListener("mouseout",(e)=>{
  email.style.backgroundColor = "white";
})

function createLi(name,email){
  let li = document.createElement("li");
  li.textContent = `${name}: ${email}`;

  let eBtn = document.createElement('button');
  eBtn.className = 'btn btn-warning btn-sm float-right edit';
  eBtn.appendChild(document.createTextNode('Edit'));
  eBtn.addEventListener("click",editLi);
  li.appendChild(eBtn);


  let deleteBtn = document.createElement('button');
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete ml-2';
  deleteBtn.appendChild(document.createTextNode('X'));
  deleteBtn.addEventListener("click",deleteLi);
  li.appendChild(deleteBtn); 

  ul.appendChild(li);
}
function addListner(){
  let edit = document.querySelectorAll("li .btn-warning");
  for(let e of edit) e.addEventListener("click",editLi);
  let del = document.querySelectorAll("li .btn-danger");
  for(let e of del) e.addEventListener("click",deleteLi);
}
function removeListner(){
  let edit = document.querySelectorAll("li .btn-warning");
  for(let e of edit) e.removeEventListener("click",editLi);
  let del = document.querySelectorAll("li .btn-danger");
  for(let e of del) e.removeEventListener("click",deleteLi);
}