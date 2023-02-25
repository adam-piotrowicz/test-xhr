

// Adding username
function identifyUser() {
                var usernameElement = document.getElementById("username");
                var username = usernameElement.value || "username";
                    dtrum.identifyUser(username);
}

//  Get the URL of the User Session
function GetSessionUrl() {
	return "https://ap-man.lab.dynatrace.org/e/cce718cf-c3d0-4543-bce6-19bdc48a9b32/ui/user-sessions/%2B" + document.getElementById("username").value
}
 

