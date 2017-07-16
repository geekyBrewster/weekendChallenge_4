console.log("Up and Atom!");

var galleryApp = angular.module('galleryApp', []);

galleryApp.controller('GalleryController', function(){
  var gallery = this;
  gallery.images = imageSource;
  console.log(gallery.images);

  gallery.toggle = function(image) {
    console.log(image);
    image.visibility = !image.visibility;
    console.log(image.visibility);
  };




});
