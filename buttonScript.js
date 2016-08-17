window.onload = initClick;

function initClick() {
  var buts = document.getElementsByClassName("table");
  var as = document.getElementsByTagName("a");
  var href;
  for (var i = 0; i < as.length; i++) {
    href = as[i].getAttribute("href");
    clickLink(buts[i], href);
  }

  function clickLink(elm, url) {
    elm.onclick = function () { location.assign(url); };
  }
}
