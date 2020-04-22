alert('jajaja');

window.onload = () => {
  var url = window.location.search.substring(1);

  var get = new Object();
  url.split('&').forEach((item, i) => {
    tmp = item.split('=');
    get[tmp[0]] = tmp[1];
  });

  if(get['status'] != undefined){
    var log = document.getElementsByClassName("log")[0];
    log.style.display = "block";

    if(get['status'] == "success"){
      log.innerHTML = "You are successfully " + (log.id == "login-log" ? "logged in!" : "signed up!");
      log.style.color = "var(--success-color)";
    }else if((get['status'] == "error"){
      log.style.color = "var(--alert-color)";
      if(get['error'] == "empty"){
        log.innerHTML = "You must fill all the fields!";
      }else if (get['error'] == "incorrect") {
        log.innerHTML = "Username or password incorrect!";
      }
    }
    else{
      log.innerHTML = "Unknown error :(";
    }

  }
}
