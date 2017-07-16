console.log("Up and Atom!");

var imageSource = [
  {name: "Beer and Ultimate", source: "beerFrisbee.jpg", message: "Craft beer and Ultimat frisbee on a sunny day.", visibility: true},
  {name: "Minneapolis", source: "minneapolis.jpg", message: "Minneapolis is my favorite place to be.", visibility: true},
  {name: "SuperCat", source: "superCat.jpg", message: "I like cats, and my cat likes plastic bags.", visibility: true},
  {name: "Lefse", source: "lefse.jpg", message: "My family would spend autumn weekends making lefse.", visibility: true},
  {name: "Tokyo Tower", source: "tokyoTower.jpg", message: "I took a really amazing trip to Japan a few years ago.", visibility: true},
  {name: "Stan Lee's autograph", source: "stanLee.jpg", message: "I've volunteer at sci-fi conventions, and I got to meet Stan Lee!", visibility: true},
  {name: "Baby blanket", source: "knitting.jpg", message: "I enjoy knittin for friends and family.", visibility: true},
  {name: "Class presentation", source: "ExcelWalken.jpg", message: "Never thought I'd be a teacher and talking in front of others.", visibility: true},
  {name: "Goodsell Observatory", source: "goodsellObs.jpg", message: "As a kid, I really loved astronomy, so I studied it at college.", visibility: true}
];

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
