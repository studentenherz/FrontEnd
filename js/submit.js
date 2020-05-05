// const backEndUrl = "../BackEnd/"
// const corsProxy =  "https://cors-anywhere.herokuapp.com/";
const backEndUrlRaw = "https://pato-1.herokuapp.com/";
const backEndUrl = /*corsProxy + */ backEndUrlRaw;

/**********************************
*         Login login             *
***********************************/

const loginForm = document.getElementById("login-form");

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
        localStorage.setItem('avatar', backEndUrlRaw + response['avatar']);


        reloadAvatar();
        setTimeout(()=>{window.location.reload(true)}, 2000);
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

  xhttp.open("POST",  backEndUrl + "includes/login.php", true);
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

  xhttp.open("POST",  backEndUrl + "includes/signup.php", true);
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

var logoutBtn = document.getElementById("logoutBtn");

logoutBtn.onclick = function () {

    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200){
        localStorage.removeItem("token");
        localStorage.removeItem("name");
        localStorage.removeItem("username");

        location.reload(true);
      }
    };

    xhttp.open("POST", backEndUrl+"includes/logout.php", true);
    payload = {
      logout: true,
      token: localStorage["token"]
    }
    xhttp.setRequestHeader("Content-Type",  "application/json");
    xhttp.send(JSON.stringify(payload));
}


/**********************************
*         Upload                 *
***********************************/

const uploadImage = document.getElementById("image-form");

uploadImage.onsubmit = function(event){
  event.preventDefault();

  var data = new FormData(this);
  data.append("username", localStorage["username"]);
  data.append("token", localStorage["token"]);
  data.append("upload_image", true);

  xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200){
      location.reload(true);
    }
  };

  xhttp.open("POST", backEndUrl+"includes/upload.php", true);
  xhttp.send(data);
}
