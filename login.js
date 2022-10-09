function validate()
{
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    if(username=="admin" && password=="pas")
    {
        alert("login sucessful"+username);
        return false;
    }
    else
    {
        alert("Not login sucessful");
        return false;
        
    }
    
}