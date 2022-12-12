// console.dir(document);
// console.log(document.title);
// document.title = 123;
// console.log(document.title);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.forms);
// console.log(document.links);
// console.log(document.images);
// let head = document.querySelector("#main-header");
// head.style.border = "solid 3px #000";
// let item = document.querySelector("#main .title");
// item.style.fontWeight = "bold";
// item.style.color = "green";

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
// let ul = document.querySelector("#items");
// ul.parentNode.style.backgroundColor= "gray";
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
// let text = document.createTextNode("HEllo word");
// let container = document.querySelector(".container");
// let h1 = document.querySelector("#header-title");
// container.insertBefore(text,h1)

//    2. Now go head and add HEllo word before Item 1
// let text2 = document.createTextNode("HEllo word");
// ul.insertBefore(text2,ul.firstElementChild);
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

var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Filter event
filter.addEventListener('input', filterItems);

// Add item
function addItem(e){
  e.preventDefault();
  let newItem = document.getElementById('item').value;
  let des = document.getElementById('des').value;
  append(newItem,des);
}

// Remove item
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      let li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }else  if(e.target.classList.contains('edit')){
    let li = e.target.parentElement;
    li.innerHTML = `<form id="editForm" class="form-inline mb-3"> <input type="text" class="form-control mr-2" value=${li.firstChild.textContent}><input type="text" class="form-control mr-2" value=${li.firstChild.nextSibling.textContent}> <input type="submit" class="btn btn-dark" value="Submit"></form>`;
    let editForm = document.getElementById('editForm');
    editForm.addEventListener("submit",edit);
    }
}

// Filter Items
function filterItems(e){
  // convert text to lowercase
  var text = e.target.value.toLowerCase();
  // Get lis
  var items = itemList.getElementsByTagName('li');
  // Convert to an array
  Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent;
    itemName += " "+item.firstChild.nextSibling.textContent;
    if(itemName.toLowerCase().indexOf(text) != -1 || text.trim()==""){
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}

function edit(e){
    e.preventDefault();
    let val = e.target.firstElementChild.value;
    let des = e.target.firstElementChild.nextSibling.value;
    e.target.parentElement.remove();
    append(val,des);

}
function append(newItem,des){
    var li = document.createElement('li');
    li.className = 'list-group-item';
    li.appendChild(document.createTextNode(newItem+" "));
    li.appendChild(document.createTextNode(des));
   
    var deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete ml-2';
    deleteBtn.appendChild(document.createTextNode('X'));
    li.appendChild(deleteBtn); 
  
    var eBtn = document.createElement('button');
    eBtn.className = 'btn btn-warning btn-sm float-right edit';
    eBtn.appendChild(document.createTextNode('Edit'));
    li.appendChild(eBtn);
    itemList.appendChild(li);
}