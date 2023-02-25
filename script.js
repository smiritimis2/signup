var arr=[{id:1 ,name:"ram",email:"mishrasmiriti1@gmail.com",password:"Abhishek123#!"}];


let doc=document.getElementById("name");

let named=document.getElementById("nameentry");
let emails=document.getElementById("email");
let message=document.getElementById("msg");
let conpass=document.getElementById("confirm");
let pass=document.getElementById("password");
let conmsg=document.getElementById("con");

var sum=0;
var flag=false;
function Namecheck(data) {
    if(data.length<2)
    {
       // console.log("")
      doc.innerHTML=`Name should be of 2 characters`;
      doc.style.color="red";
      sum--;
    }
    else{
        doc.innerHTML="";
        sum++;
    }
}
 function Passcheck(data)
 {

    let names=named.value;
    let email=emails.value;
     var passClass=document.getElementsByClassName('password-check');
     const lowerCase=new RegExp('(?=.*[a-z])');
     const upperCase=new RegExp('(?=.*[A-Z])');
     const number=new RegExp('(?=.*[0-9])');
     const specialchar=new RegExp('(?=.*[!@#\$%\^&\*])');
     if(lowerCase.test(data))
     {
         passClass[0].style.color="green";
         flag=true;sum++;

     }
     else{
         passClass[0].style.color="red";
         flag=false;sum--;
     }

     if(upperCase.test(data))
     {
         passClass[1].style.color="green";
         flag=true;sum++;

     }
     else{
         passClass[1].style.color="red";
         flag=false;sum--;
     }

     if(number.test(data))
     {
         passClass[2].style.color="green";
         flag=true;sum++;

     }
     else{
         passClass[2].style.color="red";
         flag=false;sum--;
     }
 
     if(specialchar.test(data))
     {
         passClass[3].style.color="green";
         flag=true;sum++;

     }
     else{
         passClass[3].style.color="red";

        flag=false;sum--
     }
  if(named.value==data)
  {
    message.innerText="password cannot be same as name or email";
    message.style.color="red";
    flag=false;sum--;
  }
  if(!email.includes('@'))
  {
      message.innerHTML="@ should be in email";
  }
  if(email==data)
  {
    message.innerText="password cannot be same as name or email";
    message.style.color="red";
    flag=false;sum--;
  }
  else{
      message.innerText="";
      flag=true;sum++;
  }
   
 }
 function concheck(data)
 {
     if(pass.value!=dataf)
     {
         conmsg.innerHTML=` confirm password should be same as password `;
         conmsg.style.color="red";sum--;
     }
     else{
         conmsg.innerHTML="";flag=true;sum++;
     }
 }
 /*function add()
 {
     let len =arr.length;
     len++;
     let name=named.value;
     let email=emails.value;
     let password=pass.value;
     let brr={ id:len, name:name,email:email,password:password}
     arr.push(brr);
     named.value="";
     emails.value="";
     pass.value="";
     conpass.value="";
 }*/
// let btn=document.getElementById("add");
 //btn.addEventListener("click",add)
let lastmsg=document.getElementById("doneval");
let submitbtn=document.getElementById("submit");
 function validate()
 {






if(sum>=7)
{ sum=0;
 lastmsg.innerHTML=`All good to go`;
 lastmsg.style.color="green";;
 let len =arr.length;
     len++;
     let name=named.value;
     let email=emails.value;
     let password=pass.value;
     let brr={ id:len, name:name,email:email,password:password}
     arr.push(brr);
     named.value="";
     emails.value="";
     pass.value="";
     conpass.value="";
     //location.replace('/new.html');
     localStorage.setItem("data" , JSON.stringify(arr))
 window.location.href = "login.html";

}
else{
    lastmsg.innerHTML=`not ready`;
}
 }
 
 /*function verify()
 {
     let email=document.getElementById("vemail");
     let pass=document.getElementById("vpass");
     let Email=email.value;
     let Pass=pass.value;
     arr.forEach((item)=>{
 if(item.email===Email && item.password===Pass)
{
let msg=document.createElement("div");
msg.innerText="matched";
msg.style.color="green"
     }
     else
     {
         let msg=document.getElementById("div");
         msg.innerText="NOT MATCHED";
        msg.style.color="red";
     }
    }
     )
 }
 let vbtn=document.getElementById("sign");
vbtn.addEventListener("click",verify);*/

 submitbtn.addEventListener("click",validate);
 //module.exports={arr};

 