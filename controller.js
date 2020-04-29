(function myFunction() {
    const button = document.getElementById("submit");
    var username = document.getElementById("username").value;
    if ( username == "creep@gmail.com" && password == "password"){
    alert("Login successfully");
    window.location = "creep.html"; // Redirecting to other page.
    return true;
    };
button.addEventListener("click", myFunction);
})();
