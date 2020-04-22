window.onload = () => {
  var url = window.location.search.substring(1);
  var data = new Object();
  url.split('&').forEach((item, i) => {
    tmp = item.split('=');
    data[tmp[0]] = tmp[1];
  });
  console.log(data);
}
