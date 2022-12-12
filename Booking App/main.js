const form = document.querySelector("#my-form");
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const phone =  document.querySelector("#phone");
const ul = document.querySelector("ul");
const msg = document.querySelector(".msg");

const baseUrl="https://crudcrud.com/api/3ce54d80807240d5b46e90395794d80d/data/"
// from old version store by name
// let entries = Object.entries(localStorage);
// for(let e of entries){
//   let li = document.createElement("li");
//      li.textContent = `${e[0]}: ${e[1]}`
//      ul.appendChild(li);
// }
async function loadData() {
  ul.innerHTML="";
  let entries = await axios.get(baseUrl);
  entries = entries.data;
  console.log(entries);
for(let e of entries) createLi(e.name,e.email,e.phone,e._id);
addListner();
}
loadData();

function editLi(e){
  name.value = e.target.parentElement.parentElement.firstChild.textContent.split(": ")[1];
  email.value = e.target.parentElement.parentElement.firstChild.nextSibling.nextSibling.textContent.split(": ")[1];
  phone.value = e.target.parentElement.parentElement.firstChild.nextSibling.nextSibling.nextSibling.nextSibling.textContent.split(": ")[1];
  form.removeEventListener("submit",onsubmit);
  form.className = e.target.parentElement.parentElement.className;
  form.addEventListener("submit",onEdit);
}
async function deleteLi(e){
  const id = e.target.parentElement.parentElement.className;
  await axios.delete(baseUrl+id);
  e.target.parentElement.parentElement.remove();
}

form.addEventListener("submit",onsubmit);

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

function createLi(name,email,phone,id){
  let li = document.createElement("li");
  name = document.createTextNode('name : '+ name);
  email = document.createTextNode('email : '+email);
  phone = document.createTextNode('phone : '+phone);
  const space1 = document.createTextNode("    ");
  const space2 = document.createTextNode("    ");
  const space3 = document.createTextNode("    ");
  li.appendChild(name);
  li.appendChild(space1);
  li.appendChild(email);
  li.appendChild(space2);
  li.appendChild(phone);
  li.className = id;
  let div = document.createElement('div');
  let eBtn = document.createElement('button');
  eBtn.className = 'btn  btn-warning btn-sm edit';
  eBtn.appendChild(document.createTextNode('Edit'));
  eBtn.addEventListener("click",editLi);
  div.appendChild(eBtn);
  div.appendChild(space3);

  let deleteBtn = document.createElement('button');
  deleteBtn.className = 'btn btn-danger btn-sm ml-2 delete';
  deleteBtn.appendChild(document.createTextNode('X'));
  deleteBtn.addEventListener("click",deleteLi);
  div.appendChild(deleteBtn); 
  li.appendChild(div);
  ul.appendChild(li);
}
async function onsubmit(e){
  e.preventDefault();
  if(name.value&&email.value&&phone.value){
    let data = await axios.post(baseUrl,{name:name.value,email:email.value,phone:phone.value});
    data = data.data;
    name.value="";
    email.value="";
    phone.value="";
    createLi(data.name,data.email,data.phone,data._id);
  }else{
    msg.textContent = `enter name, email and Contact details`;
    msg.style.color = "red";
    setTimeout(()=>{
      msg.textContent = "";
    },3000)
  }
addListner();
}

async function onEdit(e){
  e.preventDefault();
  let data = await axios.put(baseUrl+e.target.className,{name:name.value,email:email.value,phone:phone.value});
  form.removeEventListener("submit",onEdit);
  form.className = "";
  name.value="";
  email.value="";
  phone.value="";
  form.addEventListener("submit",onsubmit);
  loadData();
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