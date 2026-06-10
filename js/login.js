async function login(){

const data = {
email:document.getElementById("email").value,
password:document.getElementById("password").value
};

const response = await fetch(
"http://localhost:8080/api/login",
{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify(data)
}
);

alert("Login Success");
}