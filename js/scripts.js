

// Adding username
function identifyUser() {
                var usernameElement = document.getElementById("username");
                var username = usernameElement.value || "username";
                    dtrum.identifyUser(username);
}

//  Get the URL of the User Session
function GetSessionUrl() {
	return "https://ap-man.dynatrace.org/e/413b0e9b-fa40-4f04-9bda-5a67bba5261d/ui/user-sessions/%2B" + document.getElementById("username").value
}
 

