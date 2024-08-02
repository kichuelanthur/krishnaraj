function validate(){
    var Name=document.getElementById("inputName");
    var Num=document.getElementById("inputNum");
    var mailId=document.getElementById("inputEmail");

    if(Name.value.trim()=="")
    {
      alert("Name should not be empty");
      return false;
    }
    else if(Num.value.trim()==""){
      alert("Phone number not be empty");
      return false;
    }
    else if (Num.value.trim().length<10){
      alert("Phone number not valid");
      return false;
    }
    else if (mailId.value.trim()==""){
        alert("Enter Email Id");
        return false;}
    }

    function sendMail(){
      let parms ={
        name:document.getElementById("inputName").value,
        number:document.getElementById("inputNum").value,
        emailid:document.getElementById("inputEmail").value,
        address:document.getElementById("inputAddress").value,
        dist:document.getElementById("inputCity").value,
        state:document.getElementById("inputState").value,
        pin:document.getElementById("inputPin").value,
        msg:document.getElementById("inputMessage").value,
      }
      emailjs.send("service_w035bhg", "template_mv8hmdo",parms ). then(alert("Submitted Successfully"))
    }