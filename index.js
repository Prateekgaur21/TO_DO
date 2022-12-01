function addtolist()
{
    var taskname = document.getElementById('taskname').value
    var tododiv = document.getElementById('mytodo')
    var newtodoitem = document.createElement('div')
    var todoname = document.createElement('li')
    todoname.innerHTML = taskname
    //for having a delete icon type delete button we need to refer to fontawesome site and we need to create i element for delete button as follows: and declare its classes
    var deletebtn = document.createElement('i')
    deletebtn.classList.add('far')//by searching fontawesome dlt icon on net
    deletebtn.classList.add('fa-trash-alt')

    newtodoitem.appendChild(todoname)
    newtodoitem.appendChild(deletebtn)
    tododiv.appendChild(newtodoitem)
}

var tododiv = document.getElementById('mytodo')
tododiv.addEventListener('click', deleteitem)
//deleteitem is a function
function deleteitem(e){
    //alert('delete function executed') for notification

    const element = e.target
    //taki li pe click krne pe kuch na ho or delete pe click krne se hi parent item delete ho
    if(element.classList[0]=='far'){
        element.parentElement.remove()
    }

}