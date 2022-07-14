let lect = JSON.parse(localStorage.getItem("lecture")) || [];
let users=JSON.parse(localStorage.getItem("users"));
let key = localStorage.getItem("log");
if (key !== "login" || users.length <= 0) {
    window.location.href = "login.html";
}

class assignments {
    constructor(t, n, d, l) {
        this.title = t;
        this.name = n;
        this.date = d;
        this.link = l;
    }

    saveLecture() {
        if (this.verify() === true) {
            lect.push(this);
            localStorage.setItem("lecture", JSON.stringify(lect));
            alert("Lecture Added Successfully");
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

let Lectures = () => {
    event.preventDefault();
    let form = document.querySelector("form");
    let title = form.title.value;
    let name = form.name.value;
    let date = form.date.value;
    let link = form.url.value;
    let data = new assignments(title, name, date, link);
    data.saveLecture();
};