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
let entries = Object.entries(JSON.parse(localStorage.getItem("name")));
for(let e of entries){
  let li = document.createElement("li");
     li.textContent = `${e[0]}: ${e[1]}`
     ul.appendChild(li);
}

form.addEventListener("submit",(e)=>{
  e.preventDefault();
  if(name.value&&email.value){
    let li = document.createElement("li");
    li.textContent = `${name.value}: ${email.value}`
    ul.appendChild(li);

    let obj={};
    if(!localStorage.getItem("name")){
      obj ={name:name.value,
      email:email.value};
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

})

name.addEventListener("mouseover",(e)=>{
  name.style.backgroundColor = "lightGrey";
 })
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

