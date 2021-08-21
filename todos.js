function removeAll(){
    var taskCom = document.getElementsByClassName("taskCompleted");
    var event= document.getElementById("res");
    while(taskCom.length>0){
        event.removeChild(taskCom[0]);
    }

}


function remove(X){
    var event= document.getElementById("res");
    var taskCom = document.getElementById(X.id);
   
        event.removeChild(taskCom);

    
    


}


function AddEvent(){

    var event= document.getElementById("res");
    var DataToAdd= document.getElementById("todo").value;
    var list=  document.createElement("tr");
    list.className= "taskCompleted";
    list.id= Math.random();
    var des= document.createElement("td");
    var time= document.createElement("td");
    var date= document.createElement("td");
    var status= document.createElement("td");
    status.id=Math.random();
    var stat= document.createElement("button");
    var buttonName = document.createTextNode("Task Completed");
    stat.className= "clicked";
    stat.id= Math.random();
    stat.onclick= function(){
       var A= stat.parentNode;
       var b=A.parentNode;
       

        stat.addEventListener("click",remove(b))
    }
    stat.appendChild(buttonName);
    
    des.innerHTML= DataToAdd
    time.innerHTML= document.getElementById("time").value;
    date.innerHTML=document.getElementById("date").value;
    status.appendChild(stat);
    list.appendChild(des);
    list.appendChild(time);
    list.appendChild(date);
    list.appendChild(status)
    
    event.appendChild(list);

     
    addtodo1= document.getElementById("todo");
    addtodo1.value="";
    document.getElementById("time").value="";
    document.getElementById("date").value="";

}



var addtodo= document.getElementById("Add");
addtodo.addEventListener("click", AddEvent)

var clearAll= document.getElementById("clear");
clearAll.addEventListener("click",removeAll);

