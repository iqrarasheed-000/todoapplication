

var gadget = document.getElementById("gadget");

function addToDo(){
    var todo_list = document.getElementById("todo_list")
    var li = document.createElement('li')
    var liText = document.createTextNode(todo_list.value)
    li.appendChild(liText)
    gadget.appendChild(li)
    todo_list.value=""


    var delButton = document.createElement("button")
    var delText = document.createTextNode("DELETE")
    delButton.appendChild(delText)
    delButton.setAttribute("onclick","deleteItem(this)")
    delButton.setAttribute("class","delButton")
    li.appendChild(delButton)


    var editButton = document.createElement("button")
    var editText = document.createTextNode("EDIT")
    editButton.appendChild(editText)
    li.appendChild(editButton)
    editButton.setAttribute("onclick","editItem(this)")
    editButton.setAttribute("class","editButton")
    
}


function deleteItem(e){
    e.parentNode.remove()
}


function delAll(){
    gadget.innerHTML = ""
}


function editItem(e){
    var val = prompt("Enter edit value", e.parentNode.firstChild.nodeValue)
    e.parentNode.firstChild.nodeValue = val;    
}
