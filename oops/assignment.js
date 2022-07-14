let Assign =JSON.parse(localStorage.getItem("assignments")) || [];
let key=localStorage.getItem("log");
let users=JSON.parse(localStorage.getItem("users"));
if(key!=="login" || users.length<=0){
    window.location.href="login.html";
}

class assignments {
    constructor(t, n, d, l) {
        this.title = t;
        this.name = n;
        this.date = d;
        this.link = l;
    }

    saveAssignment() {
        if (this.verify() === true) {
            Assign.push(this);
            localStorage.setItem("assignments",JSON.stringify(Assign));
            alert("Assignment Added Successfully");
        } else {
            alert("please fill the details");
        }
    }
    verify() {
        if (this.title === "" || this.name === "" || this.date === "" || this.link === "") {
            return false;
        } else {
            return true;
        }
    }
}

let Assignment = () => {
    event.preventDefault();
    let form = document.querySelector("form");
    let title = form.title.value;
    let name = form.name.value;
    let date = form.date.value;
    let link = form.url.value;
    let data = new assignments(title, name, date, link);
    data.saveAssignment();
};