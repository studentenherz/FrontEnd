
var loginModal = document.getElementById('login-modal');
var signupModal = document.getElementById('signup-modal');

window.onclick = function(event){
  if(event.target == loginModal){
    loginModal.style.display = "none";
  } else if(event.target == signupModal){
    signupModal.style.display = "none";
  }
};



function login() {
  signupModal.style.display='none';
  loginModal.style.display='block';
}

function signup() {
  loginModal.style.display='none';
  signupModal.style.display='block';
}
