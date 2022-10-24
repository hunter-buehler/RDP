
function login(pUser,pPassword) {
    var user = pUser;
    var pass = pPass;
if(user == "lab18" && pass == "lab18") {
    alert("Logged In");
    locate="new11.html"
    return false;
} else {
    alert("wrong user/pass");
    return false;
    }
}
