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
