(function() {
  //choose node
  var myNode = document.querySelector('#container .row');
  //wait for someone to click in the row section
  myNode.addEventListener("click", function(e) {

    if(e.target.tagName === 'IMG') {
        //console.log(e);
        var myOverlay = document.createElement('div');
        myOverlay.id = 'overlay';
        document.body.appendChild(myOverlay);

        // setting styles -> normally done in stylesheet but
        // demonstrating doing it via object attributes with JS
        myOverlay.style.position = 'absolute';
        myOverlay.style.top = 0;
        myOverlay.style.background = 'rgba(0,0,0,0.7)'; // black with 70% transparency
        myOverlay.style.cursor = 'pointer';

        // resize accordingly
        myOverlay.style.width = window.innerWidth + 'px';
        myOverlay.style.height = window.innerHeight + 'px';
        myOverlay.style.top = window.pageYOffset + 'px';
        myOverlay.style.left = window.pageXOffset + 'px';


    } // target is the image tag
    
  }, false)

})(); // auto loading function
