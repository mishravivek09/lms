let users=JSON.parse(localStorage.getItem("users"));

let key=localStorage.getItem("log");
if(key!=="login" || users.length<=0){
    window.location.href="login.html";
}

let DisplayUsers=(users)=>{
    users.forEach((element,ind)=>{
        let tr=document.createElement("tr");
        let td1=document.createElement("td");
        let td2=document.createElement("td");
        let td3=document.createElement("td");
        let td4=document.createElement("td");
        let td5=document.createElement("td");
        let button=document.createElement("button");
        td1.innerText=element.name;
        td2.innerText=element.password;
        td3.innerText=element.email;
        td4.innerText=element.role;
        button.innerText="Remove";
        button.style.padding="5px";
        button.style.border="none";
        button.style.borderRadius="5px";
        button.style.cursor="pointer";
        button.addEventListener("click",function(){
            removeUser(ind);
        });
        td5.append(button);
        tr.append(td1,td2,td3,td4,td5);
        document.querySelector("#Users").append(tr);
    });
};

DisplayUsers(users);

let removeUser=(ind)=>{
    users.splice(ind,1);
    localStorage.setItem("users",JSON.stringify(users));
    window.location.reload();
}

let logout=()=>{
    let data=localStorage.setItem("log","logout");
    window.location.href="login.html";
}

let clearAssign=()=>{
    alert("all the assignments will be removed");
    localStorage.removeItem("assignments");
    alert("all the assignment got deleted");
}

let clearLec=()=>{
    alert("all the lectures will be removed");
    localStorage.removeItem("lecture");
    alert("all the lectures got deleted");
}