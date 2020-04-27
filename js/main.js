
var loginModal = document.getElementById('login-modal');
var signupModal = document.getElementById('signup-modal');

window.onclick = function(event){
  if(event.target == loginModal){
    loginModal.style.display = "none";
    document.getElementById("login-form").classList.remove("show");
  } else if(event.target == signupModal){
    signupModal.style.display = "none";
  }
};



function login() {
  if(localStorage['token'] == undefined){
    signupModal.style.display='none';
    loginModal.style.display='block';
  }
  else{
    alert("You are already logged in!");
  }
}

function signup() {
  if(localStorage['token'] == undefined){
    loginModal.style.display='none';
    signupModal.style.display='block';
  }
  else{
    alert("You are already logged in!");
  }
}

function load(url, element) {
    req = new XMLHttpRequest();

    req.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        // Typical action to be performed when the document is ready:
        element.innerHTML = req.responseText;
      }
    };

    req.open("GET", url, true);
    req.send(null);
}

load("sources/header.html", document.getElementsByTagName("header")[0]);

window.onload = function() {
  var profile = document.querySelector("#user");

  profile.addEventListener("click", function(){
    if(localStorage['token'] == undefined){
      login();
    }
  });
}
