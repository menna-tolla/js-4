var logEmail=document.getElementById("logEmail");
var logPass=document.getElementById("logPassword");
var logAllert=document.getElementById("prequred")
// var usersLog=[];
var currentUser="";
if(document.getElementById("login") != null)
{
    document.getElementById("login").addEventListener("click" ,function(){
        if(logEmail.value !="" && logPass.value !="")
        {
            var usersLog=JSON.parse(localStorage.getItem("users"));
            for(var i=0 ; i<usersLog.length ; i++)
            {
                // console.log(usersLog[i])
                if(usersLog[i].email == logEmail.value && usersLog[i].pass == logPass.value )
                {
                    currentUser=usersLog[i].name;
                    localStorage.setItem("current" ,usersLog[i].name );
                  location="./welcom.html";  
                  logAllert.classList.replace("d-block" ,"d-none");
                  clearInput()
           
                }
                
            }
            logAllert.innerHTML="incorrect email"
            logAllert.classList.replace("d-none" ,"d-block");
        }
        else
                {
                    logAllert.innerHTML="all input is requred";
                    logAllert.classList.replace("d-none" ,"d-block");
                }
    })
}


function clearInput()
{
    logEmail.value=null;
    logPass.value=null;
  
}



















