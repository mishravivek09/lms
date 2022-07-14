let Usrdata=JSON.parse(localStorage.getItem("users")) || [];

class users{
    constructor(name,email,pass,role){
        this.name=name;
        this.email=email;
        this.password=pass;
        this.role=role;
    }
    signup(){
        if(this.verify(this.name,this.email,this.password)===true){
            Usrdata.push(this);
            localStorage.setItem("users",JSON.stringify(Usrdata));
            alert("Signup Successful");
            window.location.href="login.html";
        }
    }
    verify(name,Email,pass){
        let filtered=Usrdata.filter((elem)=>{
            return Email===elem.email;
        });
        if(name==="" || Email==="" || pass===""){
            alert("please fill the details");
            return false;
        }else if(filtered.length>0){
            alert("user already exist");
            return false;
        }else{
            return true;
        }
    }
}
let LoginDetails=JSON.parse(localStorage.getItem("loginData")) || [];

class Login{
    constructor(name,email,passwd,role){
        this.name=name;
        this.email=email;
        this.password=passwd;
        this.role=role;
    }
    login(){
        let Profile;
        let flag=false;
        let filtered=Usrdata.filter((elem)=>{
            return this.name===elem.name && this.email===elem.email && this.password===elem.password && this.role===elem.role;
        });
        if(filtered.length>0){
            Profile=this.role;
            flag=true;
            alert("Login Successful");
        }else{
            alert("Wrong Credentials");
        }
        if(Profile==="student" || flag==="true"){
            LoginDetails.push(this);
            localStorage.setItem("loginData",JSON.stringify(LoginDetails));
            window.location.href="students.html";
        }else if(Profile==="admin" || flag==="true"){
            localStorage.setItem("log","login");
            window.location.href="admin.html";
        }
    }
}

let signUp=()=>{
    event.preventDefault();
    let form=document.querySelector("#Signup");
    let name=form.name.value;
    let email=form.email.value;
    let passwd=form.passwd.value;
    let profile=form.select.value;
    let user=new users(name,email,passwd,profile);
    form.reset();
    user.signup(name,email,passwd);
}

let logIn=()=>{
    event.preventDefault();
    let form=document.querySelector("#Login");
    let name=form.name.value;
    let email=form.email.value;
    let passwd=form.passwd.value;
    let role=form.select.value;
    let user=new Login(name,email,passwd,role);
    form.reset();
    user.login();
}