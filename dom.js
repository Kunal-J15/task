console.dir(document);
console.log(document.title);
document.title = 123;
console.log(document.title);
console.log(document.head);
console.log(document.body);
console.log(document.all);
console.log(document.forms);
console.log(document.links);
console.log(document.images);
let head = document.querySelector("#main-header");
head.style.border = "solid 3px #000";
let item = document.querySelector("#main .title");
item.style.fontWeight = "bold";
item.style.color = "green";

let title = document.getElementsByClassName("container")[0];
// title.innerHTML = "<h1>This is Title</h1>";

let lis = document.querySelectorAll("#items .list-group-item");
lis[2].style.backgroundColor = "green";
for(let li of lis){
    li.style.fontWeight = "bold";
}

let newLi = document.createElement("li");
newLi.innerText = "Item 5";
lis[0].parentElement.append(newLi);

let lis2 = document.getElementsByTagName("li");
for(let li of lis2){
    li.style.backgroundColor = "lightgrey";
}