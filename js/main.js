//=======================================
//       Modals behaviour
//=======================================

var loginModal = document.getElementById('login-modal');
var signupModal = document.getElementById('signup-modal');
var logoutModal = document.getElementById('logout-modal');

window.onclick = function(event){
  if(event.target == loginModal){
    loginModal.style.display = "none";
    document.getElementById("login-form").classList.remove("show");
  } else if(event.target == signupModal){
    signupModal.style.display = "none";
  }
  else if (event.target == logoutModal) {
    logoutModal.style.display = "none";
  }
};

// display login form

function login() {
  if(localStorage['token'] == undefined){
    signupModal.style.display='none';
    logoutModal.style.display='none';
    loginModal.style.display='block';
  }
  else{
    alert("You are already logged in!");
  }
}

// display sign up form

function signup() {
  if(localStorage['token'] == undefined){
    loginModal.style.display='none';
    logoutModal.style.display='none';
    signupModal.style.display='block';
  }
  else{
    alert("You are already logged in!");
  }
}

// display log out form

function logout(){
    loginModal.style.display='none';
    signupModal.style.display='none';
    logoutModal.style.display='block';
}

//================================
//    User specific
//================================

var userHello = document.getElementById("user-hello");
var editPicture = document.getElementById("edit-picture");
const loginBtn = document.getElementById("loginBtn");
var avatarURL = "sources/user.svg";

function reloadAvatar(){
  document.querySelectorAll(".avatar").forEach(x => x.setAttribute('src', localStorage['avatar']));
}

window.onload = function() {
  if(localStorage['token'] == undefined){
    loginBtn.style.display = 'block';
    logoutBtn.style.display = 'none';
    userHello.innerHTML = ':)';
    editPicture.style.display = 'none';
    localStorage.setItem('avatar', avatarURL);
  }
  else{

    var data = new FormData();
    data.append("username", localStorage["username"]);
    data.append("token", localStorage["token"]);
    data.append("validate", true);

    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200){
        // console.log(this.responseText);
        const response = JSON.parse(this.responseText);

        if(response['valid']){
          localStorage.setItem('name', response['name']);
          localStorage.setItem('avatar', backEndUrlRaw + response['avatar']);
        }

      }
    };

    xhttp.open("POST", backEndUrl+"includes/validate_user.php", false);
    xhttp.send(data);

    loginBtn.style.display = 'none';
    logoutBtn.style.display = 'block';
    userHello.innerHTML = localStorage["name"]+ "!";
    editPicture.style.display = 'inline-block';
  }

  reloadAvatar();

};

const inpPic = document.getElementById("inp-image");
const profilePic = document.getElementById("profile-pic");
const submitImg = document.getElementById("submit-image");

inpPic.addEventListener("change", function(){
  const file = this.files[0];
  if (file){
    const reader =  new FileReader();

    reader.addEventListener("load", function(){
      profilePic.setAttribute("src", this.result);
    });

    reader.readAsDataURL(file);
    submitImg.style.display = 'block';
  } else{
    profilePic.setAttribute("src", "sources/user.svg");
    submitImg.style.display = 'none';
  }
});
