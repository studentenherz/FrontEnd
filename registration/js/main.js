var get = new Object();

window.onload = () => {
  var url = window.location.search.substring(1);


  url.split('&').forEach((item, i) => {
    tmp = item.split('=');
    get[tmp[0]] = tmp[1];
  });

  if(get['status'] != undefined){
    var log = document.getElementsByClassName("log")[0];
    log.style.display = "block";

    if(get['status'] == "success")
    {
      log.innerHTML = "You are successfully " + (log.id == "login-log" ? "logged in!" : "signed up!");
      log.style.color = "var(--success-color)";
      document.getElementsByTagName("form")[0].style.display = "none";

      localStorage.setItem('name', get['name']);
      localStorage.setItem('username', get['username']);
      localStorage.setItem('token', get['token']);

      setTimeout(()=>{window.location.assign("../index.html")}, 2000);
    }
    else if(get['status'] == "error")
    {
      log.style.color = "var(--alert-color)";
      if(get['error'] == "empty")
      {
        log.innerHTML = "You must fill all the fields!";
      }else if (get['error'] == "incorrect")
      {
        log.innerHTML = "Username or password incorrect!";
      }
    }
    else{
      log.innerHTML = "Unknown error :(";
    }

  }
}
