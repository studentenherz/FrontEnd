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

load("html/logout.html", document.getElementById("logout-modal"));
load("html/login.html", document.getElementById("login-modal"));
load("html/signup.html", document.getElementById("signup-modal"));
