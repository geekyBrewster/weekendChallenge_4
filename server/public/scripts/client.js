console.log("Up and Atom!");

var galleryApp = angular.module('galleryApp', []);

galleryApp.controller('GalleryController', function(){
  var gallery = this;
  gallery.images = imageSource;
  console.log(gallery.images);

  gallery.toggle = function(image) {
    console.log("count before: ", image.count);
    image.visibility = !image.visibility;
    // only count image view once when toggling from image to description and back
    if(image.visibility == true){
      image.count = image.count + 1;
    } else {
      image.count = image.count;
    }
    console.log("count after:", image.count);
  };




});
