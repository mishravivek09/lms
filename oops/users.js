let Usrdata = JSON.parse(localStorage.getItem("users")) || [];

class users {
    constructor(name, email, pass, role) {
        this.name = name;
        this.email = email;
        this.password = pass;
        this.role = role;
    }
    signup() {
        if (this.verify(this.name, this.email, this.password) === true) {
            Usrdata.push(this);
            localStorage.setItem("users", JSON.stringify(Usrdata));
            alert("User added Successfully");
        }
    }
    verify(name, Email, pass) {
        let filtered = Usrdata.filter((elem) => {
            return Email === elem.email;
        });
        if (name === "" || Email === "" || pass === "") {
            alert("please fill the details");
            return false;
        } else if (filtered.length > 0) {
            alert("user already exist");
            return false;
        } else {
            return true;
        }
    }
}

let signUp = () => {
    event.preventDefault();
    let form = document.querySelector("#Signup");
    let name = form.name.value;
    let email = form.email.value;
    let passwd = form.passwd.value;
    let profile = form.select.value;
    let user = new users(name, email, passwd, profile);
    form.reset();
    user.signup(name, email, passwd);
}