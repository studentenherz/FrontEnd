// function loging() {
//   var logoutBtn = document.getElementById("logout-button");
//   var loginDiv = document.getElementById("login-div");
//
//   if(localStorage["token"] != undefined){
//     logoutBtn.style.display = "block";
//   }
//   else{
//     loginDiv.style.display = "block";
//   }
//
//   logoutBtn.addEventListener('click', () =>{
//     xhttp = new XMLHttpRequest();
//
//     xhttp.onreadystatechange = function() {
//       if (this.readyState == 4 && this.status == 200){
//         localStorage.removeItem("token");
//         localStorage.removeItem("name");
//         localStorage.removeItem("username");
//
//         location.reload();
//       }
//     };
//
//     xhttp.open("POST", "../BackEnd/includes/logout.php", true);
//     payload = {
//       logout: true,
//       token: localStorage["token"]
//     }
//     xhttp.setRequestHeader("Content-Type",  "application/json");
//     xhttp.send(JSON.stringify(payload));
//
//   });
//
// }

var modal = document.getElementById('login-modal');

window.onclick = function(event){
  if(event.target == modal){
    modal.style.display = "none";
  }
};

// loging()

function login() {
  document.getElementById('signup-modal').style.display='none';
  document.getElementById('login-modal').style.display='block';
}

function signup() {
  document.getElementById('login-modal').style.display='none';
  document.getElementById('signup-modal').style.display='block';
}
