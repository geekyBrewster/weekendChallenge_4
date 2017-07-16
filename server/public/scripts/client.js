console.log("Up and Atom!");

var images = [
  {name: "beer and Ultimate", source: "beerFrisbee.jpg", message: "Craft beer and Ultimat frisbee on a sunny day."},
  {name: "Minneapolis", source: "minneapolis.jpg", messages: "Minneapolis is my favorite place to be."},
  {name: "SuperCat", source: "superCat.jpg", messages: "I like cats, and my cat likes plastic bags."},
  {name: "lefse", source: "lefe.jpg", messages: "My family would spend autumn weekends making lefse."},
  {name: "Tokyo Tower", source: "tokyoTower.jpg", messages: "I took a really amazing trip to Japan a few years ago."},
  {name: "Stan Lee's autograph", source: "stanLee.jpg", messages: "I've volunteer at sci-fi conventions, and I got to meet Stan Lee!"},
  {name: "Knit blanket", source: "knitting.jpg", messages: "I enjoy knittin for friends and family."},
  {name: "Class presentation", source: "ExcelWalken.jpg", messages: "Never thought I'd be a teacher and talking in front of others."},
  {name: "Observatory", source: "goodsellObs.jpg", messages: "As a kid, I really loved astronomy, so I studied it at college."},
];

var gallery = angular.module('galleryApp', []);

gallery.controller('GalleryController', function(){
  var gallery = this;
  console.log(images);
});
