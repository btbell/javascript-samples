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

        // create an element for the image
        var imageLocation = e.target.src;
        //console.log(e.target);
        var lgImg = document.createElement('img');
        lgImg.id = 'lgImg';
        lgImg.src = imageLocation.substr(0, imageLocation.length-8) + '.jpg'
        lgImg.style.display = 'block';
        lgImg.style.position = 'absolute';
        
        // wait for image to load and then measure
        lgImg.addEventListener('load', function() {
          // resize when image height is taller
          if (this.height > window.innerHeight) {
            this.ratio = window.innerHeight / this.height;
            this.height = this.height + this.ratio;
            this.width = this.width + this.ratio;
          }

          // resize when image height is wider
          if (this.width > window.innerWidth) {
            this.ratio = window.innerWidth / this.width;
            this.height = this.height + this.ratio;
            this.width = this.width + this.ratio;  
          }

          centerImg(this); // this is the lgImg
          myOverlay.appendChild(lgImg);
          
        });

        lgImg.addEventListener('click', function() {
          if (myOverlay) {
            window.removeEventListener('resize', window, false); // clean up
            window.removeEventListener('scroll', window, false); // clean up
            myOverlay.parentNode.removeChild(myOverlay);
          }
        }, false)

        // adjust for window scroll
        window.addEventListener('scroll', function(){
          if (myOverlay) {
            myOverlay.style.top = window.pageYOffset + 'px';
            myOverlay.style.left = window.pageXOffset + 'px';
          }
        }, false)

        // adjust for window resize
        window.addEventListener('resize', function() {
          if (myOverlay) {
            myOverlay.style.width = window.innerWidth + 'px';
            myOverlay.style.height = window.innerHeight + 'px';
            myOverlay.style.top = window.pageYOffset + 'px';
            myOverlay.style.left = window.pageXOffset + 'px';

            centerImg(lgImg);
          }
        }, false)

    } // target is the image tag
    
  }, false);

  function centerImg(theImage) {
    var myDifX = (window.innerWidth - theImage.width)/2;
    var myDifY = (window.innerHeight - theImage.height)/2;

    theImage.style.top = myDifY + 'px';
    theImage.style.left = myDifX + 'px';

    return theImage;
  }

})(); // auto loading function
