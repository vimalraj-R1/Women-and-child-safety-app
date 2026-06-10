async function register(){

const user = {
name:document.getElementById("name").value,
email:document.getElementById("email").value,
phone:document.getElementById("phone").value,
password:document.getElementById("password").value
};

await fetch(
"http://localhost:8080/api/register",
{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify(user)
}
);

alert("Registration Success");
}