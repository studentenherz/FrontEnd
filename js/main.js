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

var userHello = document.getElementById("user-hello");
var editPicture = document.getElementById("edit-picture");
const loginBtn = document.getElementById("loginBtn");

if(localStorage['token'] == undefined){
  loginBtn.style.display = 'block';
  logoutBtn.style.display = 'none';
  userHello.innerHTML = ':)';
  editPicture.style.display = 'none';
}
else{
  loginBtn.style.display = 'none';
  logoutBtn.style.display = 'block';
  userHello.innerHTML = localStorage["name"]+ "!";
  editPicture.style.display = 'inline-block';
}

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


// const shareBtn = document.getElementById("share-btn");
//
// var filesArray = new Array();
// var file = new File(["foo"], "sources/frase1.svg");
// filesArray.push(file.value);

// console.log(filesArray);
//
// shareBtn.onclick = function() {
  // if (navigator.canShare && navigator.canShare({files: filesArray })) {
  //   // alert("puedes compartir");
  //   navigator.share({
  //     files: filesArray,
  //     title: 'Prueba',
  //     text: 'It worked!'
  //   }).then(()=> console.log('Successfully shared.'))
  //   .catch((error)=> console.log('Unsuccesful sharing', error));
  // }
  // else{
  //   alert(`You're system doesn't support file sharing`);
  // }
  // alert("sí");
//   const image = new URL("src/frase1.svg", "http://127.0.0.1/FrontEnd");
//   if (navigator.share) {
//             navigator.share({
//                     title: "title.value",
//                     text: "jaja",
//                     url: image,
//                 })
//                 .then(() => console.log('Successful share'))
//                 .catch((error) => console.log('Error sharing', error));
//         } else {
//             console.log("Web Share API is not supported in your browser.")
//         }
// }
