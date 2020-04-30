// function validateForm() {


// document.getElementById("submit").onclick = function () {
//     if()
//     location.href = "creep.html";
// };

function subPages(){
    var username = (document.getElementById("username").value);
    var password = (document.getElementById("password").value);
    if(username == "creep@gmail.com" && password == "111")
    {
        location.href = "creep.html";
    } else if ((username == "mentor@gmail.com" && password == "222")) {
        location.href = "mentor.html";
    }else if ((username == "codecooler@gmail.com" && password == "333")) {
        location.href = "codecooler/codecooler.html";
    }
}

function homePage(){
    location.href = "../login.html";
}

function codecoolerPage(){
    location.href = "codecooler.html";
}

function walletPage(){
    location.href = "../codecooler/wallet.html";
}

function artifactPage(){
    location.href = "../codecooler/artifact.html";
}

function experiencePage(){
    location.href = "../codecooler/experience.html";
}

function teamArtifactPage(){
    location.href = "../codecooler/teamArtifact.html";
}