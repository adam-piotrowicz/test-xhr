function loadXhrCors1() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("demo3").innerHTML =
      this.responseText;
    }
  };
  xhttp.open("GET", "http://sup-docs.lab.dynatrace.org/cors/test-cors.txt", true);
  xhttp.setRequestHeader('X-PING', 'pingpong');
  xhttp.setRequestHeader('X-ReqAttr', 'test-value-cors1');
  xhttp.send();
}

function loadXhrCors2() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("demo4").innerHTML =
      this.responseText;
    }
  };
  xhttp.open("GET", "http://ap-ubuntu.lab.dynatrace.org/xhr/gsu-cors.txt", true);
  /*xhttp.open("GET", "http://ap-tomcat.lab.dynatrace.org:8000/", true);*/
  xhttp.setRequestHeader('X-PING', 'pingpong');
  xhttp.setRequestHeader('X-ReqAttr', 'test-value-cors2');
  xhttp.send();
}
