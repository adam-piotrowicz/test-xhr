function loadBothLocalXhrs(){
loadXhrLocal1();
loadXhrLocal2();
}

function loadBothCors(){
loadXhrCors1()
loadXhrCors2()
}

function loadAllXhrs(){
loadBothLocalXhrs();
loadBothCors();
}

function loadFirstXhrs(){
loadXhrLocal1();
loadXhrCors1()
}

function loadXhrLocal1() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("demo1").innerHTML =
      this.responseText;
    }
  };
  xhttp.open("GET", "xhrs/txt/1/xhr/first.txt?param=1", true);
  xhttp.setRequestHeader('X-ReqAttr', 'test-value1');
  xhttp.send();
}

function loadXhrLocal2() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("demo2").innerHTML =
      this.responseText;
    }
  };
  xhttp.open("GET", "xhrs/txt/2/xhr/second.txt", true);
  xhttp.setRequestHeader('X-ReqAttr', 'test-value2');
  xhttp.send();
}

    function SessionUrl() {
        var url = "https://ap-man.lab.dynatrace.org/e/cce718cf-c3d0-4543-bce6-19bdc48a9b32/ui/user-sessions/%2B" + document.getElementById("username").value;
        location.href = url;
        return false;
    }
