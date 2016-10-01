/* create a simple XHR request, either synchronous or asynchronous
depending on if URL condition is met */

var request;
// check for older browsers
if (window.XMLHttpRequest) {
    request = new XMLHttpRequest();
} else {
  request = new ActiveXObject("Microsoft.XMLHTTP");
}

if (window.location.href === 'http://localhost/JavaScript/js-ajax/js-ajax.htm') {
    request.open('GET', 'data.txt', false);
    request.send();
    if (request.status === 200) {
      // view object properties in console
      console.log(request);
      document.writeln(request.responseText);
    }
} else if (window.location.href === 'http://localhost/JavaScript/js-ajax/js-ajax-async.htm') {
  var request = new XMLHttpRequest();
    request.open('GET', 'data2.txt');
    request.onreadystatechange = function() {
    if (request.readyState === 4 && request.status === 200) {
      console.log(request);
      document.writeln(request.responseText);
    }  
  }
  request.send();
    
} else {
    document.writeln('this page doesn\'t match either condition.');  
}