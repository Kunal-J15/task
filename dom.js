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

// let title = document.getElementsByClassName("container")[0];
// title.innerHTML = "<h1>This is Title</h1>";

// let li2 = document.querySelector("li:nth-child(2)");
// let li3 = document.querySelector("li:nth-child(3)");
// li2.style.backgroundColor = "green";
// li3.style.display = "none";

// let lis = document.querySelectorAll("#items .list-group-item");
// lis[2].style.color="green";
// for(let li=1;li<lis.length;li+=2){
//     lis[li].style.backgroundColor = "green";
// }

// let newLi = document.createElement("li");
// newLi.innerText = "Item 5";
// lis[0].parentElement.append(newLi);

// let lis2 = document.getElementsByTagName("li");
// for(let li of lis2){
//     li.style.backgroundColor = "lightgrey";
// }

// ...........traversing the DOM.............
//parentNode
let ul = document.querySelector("#items");
ul.parentNode.style.backgroundColor= "gray";
//childNodes
//childElements
//firstChild
//firstElementChild
//nextSibling
//nextElementSibling
//previousSibling
//previousElementSibling

//insetBefore(newDiv,h1)

//createTextNode
//createElement
    //ele.classList.add
    //setAttribute("title","val")

//    1. Now go head and add HEllo word before Item Lister
let text = document.createTextNode("HEllo word");
let container = document.querySelector(".container");
let h1 = document.querySelector("#header-title");
container.insertBefore(text,h1)

//    2. Now go head and add HEllo word before Item 1 If stuck for long check the hints.
let text2 = document.createTextNode("HEllo word");
ul.insertBefore(text2,ul.firstElementChild);
/*parentElement
lastelementchild
lastchild
createchild
firstelementchild
firstchild
nextsibling
nextelementsibling
previoussibling
previouselementsibling
createelement
setAttribute
createtesxtnode
appendchild*/
