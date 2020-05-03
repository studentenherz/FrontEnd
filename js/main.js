
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

function logout(){
  // if(localStorage['token'] != undefined){
    loginModal.style.display='none';
    signupModal.style.display='none';
    logoutModal.style.display='block';
  // }
  // else{
    // alert("You are not logged in!");
  // }
}

function load(url, element) {
    req = new XMLHttpRequest();

    req.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        // Typical action to be performed when the document is ready:
        element.innerHTML = req.responseText;
      }
    };

    req.open("GET", url, false);
    req.send(null);
}

// load("sources/header.html", document.getElementsByTagName("header")[0]);

var userHello = document.getElementById("user-hello");
var editPicture = document.getElementById("edit-picture");

if(localStorage['token'] == undefined){
  document.getElementById("loginBtn").style.display = 'block';
  document.getElementById("logoutBtn").style.display = 'none';
  userHello.innerHTML = ':)';
  editPicture.style.display = 'none';
}
else{
  document.getElementById("loginBtn").style.display = 'none';
  document.getElementById("logoutBtn").style.display = 'block';
  userHello.innerHTML = localStorage["name"]+ "!";
  editPicture.style.display = 'inline-block';
}

var inpPic = document.getElementById("inp-image");
var profilePic = document.getElementById("profile-pic");

inpPic.addEventListener("change", function(){
  const file = this.files[0];
  if (file){
    const reader =  new FileReader();

    reader.addEventListener("load", function(){
      profilePic.setAttribute("src", this.result);
    });

    reader.readAsDataURL(file);
  } else{
    profilePic.setAttribute("src", "sources/user.svg");
  }
});


const shareBtn = document.getElementById("share-btn");

var filesArray = new Array();
var file = new File(["foo"], "sources/frase1.svg");
filesArray.push(file);

console.log(filesArray);

shareBtn.onclick = function() {
  if (navigator.canShare && navigator.canShare({files: filesArray })) {
    // alert("puedes compartir");
    navigator.share({
      files: filesArray,
      title: 'Prueba',
      text: 'It worked!'
    }).then(()=> console.log('Successfully shared.'))
    .catch((error)=> console.log('Unsuccesful sharing', error));
  }
  else{
    alert(`You're system doesn't support file sharing`);
  }
  // alert("sí");
  // if (navigator.share) {
  //           navigator.share({
  //                   title: "title.value",
  //                   text: "jaja",
  //                   url: "url.value",
  //               })
  //               .then(() => console.log('Successful share'))
  //               .catch((error) => console.log('Error sharing', error));
  //       } else {
  //           console.log("Web Share API is not supported in your browser.")
  //       }
}
