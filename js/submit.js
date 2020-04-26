/**********************************
*         Login login             *
***********************************/

var loginForm = document.getElementById("login-form");

loginForm.onsubmit = function (event) {
  event.preventDefault();

  var username = document.querySelector("#login-form input[name='username']").value;
  var password = document.querySelector("#login-form input[name='password']").value;

  var xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function() {
    if(this.readyState == 4 && this.status == 200){
      var response = JSON.parse(this.responseText);
      var log = document.getElementById("login-log");

      if(response['status'] == 'success'){
        log.style.color = "var(--success-color)";
        log.style.display = "block";
        log.innerHTML = "Wellcome back " + response['name'] + "!";

        localStorage.setItem('token', response['token']);
        localStorage.setItem('name', response['name']);
        localStorage.setItem('username', response['username']);

        setTimeout(()=>{window.location.reload()}, 2000);
      }
      else if(response['status'] == 'error'){
        log.style.color = "var(--alert-color)";
        log.style.display = "block";
        if(response['error'] == 'empty'){
          log.innerHTML = "You must fill all fields!";
        }
        else{
          log.innerHTML = "Wrong username or password!";
        }
      }
      else{
        alert("Unknown error :( ");
      }
    }
  };

  xhttp.open("POST",  "../BackEnd/includes/login.php", true);
  requestBody = {
    submit: true,
    username : username,
    password : password
  }
  xhttp.setRequestHeader("Content-Type", "application/json");
  xhttp.send(JSON.stringify(requestBody));
}

/**********************************
*         Signup login             *
***********************************/

var signupForm = document.getElementById("signup-form");

signupForm.onsubmit = function (event) {
  event.preventDefault();

  var name = document.querySelector("#signup-form input[name='name']").value;
  var username = document.querySelector("#signup-form input[name='username']").value;
  var password = document.querySelector("#signup-form input[name='password']").value;

  var xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function() {
    if(this.readyState == 4 && this.status == 200){
      var response = JSON.parse(this.responseText);
      var log = document.getElementById("signup-log");

      if(response['status'] == 'success'){

        log.style.color = "var(--success-color)";
        log.style.display = "block";
        log.innerHTML = "You've been successfully signed up!";

        setTimeout(()=>{login()}, 2000);
      }
      else if(response['status'] == 'error'){
        log.style.color = "var(--alert-color)";
        log.style.display = "block";
        if(response['error'] == 'empty'){
          log.innerHTML = "You must fill all fields!";
        }
        else{
          log.innerHTML = "Wrong username or password!";
        }
      }
      else{
        alert("Unknown error :( ");
      }
    }
  };

  xhttp.open("POST",  "../BackEnd/includes/signup.php", true);
  requestBody = {
    submit: true,
    name : name,
    username : username,
    password : password
  }
  xhttp.setRequestHeader("Content-Type", "application/json");
  xhttp.send(JSON.stringify(requestBody));
}

/**********************************
*         Log out                 *
***********************************/

function logout() {
  var logoutBtn = document.getElementById("logout-button");
  var loginDiv = document.getElementById("login-div");

  if(localStorage["token"] != undefined){
    logoutBtn.style.display = "block";
  }
  else{
    loginDiv.style.display = "block";
  }

  logoutBtn.addEventListener('click', () =>{
    xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200){
        localStorage.removeItem("token");
        localStorage.removeItem("name");
        localStorage.removeItem("username");

        location.reload();
      }
    };

    xhttp.open("POST", "../BackEnd/includes/logout.php", true);
    payload = {
      logout: true,
      token: localStorage["token"]
    }
    xhttp.setRequestHeader("Content-Type",  "application/json");
    xhttp.send(JSON.stringify(payload));

  });

}
