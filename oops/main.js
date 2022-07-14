let data=JSON.parse(localStorage.getItem("loginData"));
if(data===null){
    window.location.href="login.html";
}
let userName=()=>{
    data.forEach((elem)=>{
        let name=document.querySelector("#profile");
        name.innerHTML=elem.name;
    })
}
userName(data);

let logout = () => {
    let Selected = document.querySelector("select").value;
    if (Selected === "logout") {
        localStorage.removeItem("loginData");
        window.location.href = "login.html";
    }
}
let lectures = () => {
    let lectures = JSON.parse(localStorage.getItem("lecture"));
    document.querySelector("#container").innerHTML = "";
    lectures.forEach((elem) => {
        let div = document.createElement("div");
        let h2 = document.createElement("h2");
        let p = document.createElement("p");
        let anchor = document.createElement("a");
        h2.innerText = elem.title;
        p.innerText = `${elem.name} Sheduled Coding at ${elem.date}`;
        anchor.append(h2, p);
        anchor.href = elem.link;
        div.append(anchor);
        document.querySelector("#container").append(div);
    })
}
lectures();

let veiwAssign = () => {
    let assignment = JSON.parse(localStorage.getItem("assignments"));
    document.querySelector("#container").innerHTML = "";
    assignment.forEach((elem) => {
        let div = document.createElement("div");
        let h2 = document.createElement("h2");
        let p = document.createElement("p");
        let anchor = document.createElement("a");
        h2.innerText = elem.title;
        p.innerText = `${elem.name} Created Assignment Problem's at ${elem.date}`;
        anchor.append(h2, p);
        anchor.href = elem.link;
        div.append(anchor);
        document.querySelector("#container").append(div);
    })
}