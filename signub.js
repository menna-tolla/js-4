var yourName=document.getElementById("name");
var yourEmail=document.getElementById("email");
var yourPass=document.getElementById("password");
var alertRequred=document.getElementById("pRequired");
var alertExist=document.getElementById("pExist");
var alertSuccses=document.getElementById("pSuccses");
var users=[];

if(localStorage.getItem("users") != null)
    {
        users=JSON.parse(localStorage.getItem("users"));
    }
document.getElementById("sing").addEventListener("click" , function(){
    if(yourName.value != "" && yourEmail.value != "" && yourPass.value != "")
    {
        if(exists() == false)
        {
            var user=
            {
                name: yourName.value,
                email: yourEmail.value,
                pass: yourPass.value,
            } 
            users.push(user);
            localStorage.setItem("users" , JSON.stringify(users))
            alertRequred.classList.replace("d-block" , "d-none");
            alertSuccses.innerHTML="All inputs is succses";
            alertSuccses.classList.replace("d-none","d-block");
            clearInput();  

        }  
    }
    else
    {
        alertRequred.innerHTML="All inputs is required"
        alertRequred.classList.replace("d-none" , "d-block");
        console.log("hiii");
    }
})
// localStorage.clear();
function exists()
{
    for(var i=0 ; i<users.length ; i++)
    {
        if(users[i].email == yourEmail.value)
        {
            alertExist.innerHTML="this email is exists";
            alertExist.classList.replace("d-none" , "d-block");
            return true;
        }
    }
    return false; 
}
function clearInput()
{
    yourName.value=null;
    yourEmail.value=null;
    yourPass.value=null;
}







































