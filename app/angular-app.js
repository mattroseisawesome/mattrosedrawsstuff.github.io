"use strict";

var mattApp = angular.module("mattApp", ["ngRoute", "ngAnimate"]);

mattApp.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "./tpl/main.html",
            controller: "mainController"
        })
        .when("/main", {
            templateUrl: "./tpl/main.html",
            controller: "mainController"
        })
        .when("/paint", {
            templateUrl: "./tpl/gallery.html",
            controller: "paintController"
        })
        .when("/pen", {
            templateUrl: "./tpl/gallery.html",
            controller: "penController"
        })
        .when("/pencil", {
            templateUrl: "./tpl/gallery.html",
            controller: "pencilController"
        })
        .when("/print", {
            templateUrl: "./tpl/gallery.html",
            controller: "printController"
        })
        .when("/image/:img/:title", {
            templateUrl: "./tpl/image.html",
            controller: "imageController",
            controllerAs: "image"
        });
});

mattApp.controller("mainController", function ($scope) {
    $scope.message = "main";
});

mattApp.controller("paintController", function ($scope, $http) {
    $scope.id = "paint";
    $scope.title = "Paint";
    $scope.paragraphs = [
        {"text": "When I was in art school, there was a rivalry between the oil painters and the acrylic and experimental painters that seemed so dumb.  One thing that united them, however, was  their disdain for watercolor.  I'll give you one guess which type of painting I actually had an apptitude for."},
        {"text": "Something that annoyed me about painting classes in general was the term \"painterly\".  \"You're not being painterly enough, Matt.\" Cram it, nerd!  I paint how I want!"},
        {"text": "Being painterly just means painting how other painters paint; paying more attention to color, texture, and stroke over say... the linear, exact nature of pen and ink.  When I was trying to actually paint in oil or acrylic, I was always paying so much attention to detail.  The professors would try to get me to loosen up and \"embrace my creativity\", but what they failed to recognize was that I was; I\'m just a very detail-heavy person.  One time my oil professor, John, told me he wanted me to do one painting like he was asking and he\'d cut me a break on the rest of my paintings.  I seriously painted as lazy as I could and just slapped paint on the canvas.  No joke, he told me that was more like it.  That\'s around the time I realized oil\/acrylic painting just wasn\'t my thing."},
        {"text": "Conincidentally, around then was when I took my first watercolor class.  I was used to the watercolors you'd get as a kid in some kind of Crayloa art set, not Winsor &amp; Newton.  To compare the two is like comparing a Power Wheels to an actual car; they do the same basic thing, but one is for adults and one is for kids.  I kind of fell in love with watercolor.  I could be free and painterly (read: lazy) if I so chose, or I could be as meticulous and exact as my feverishly obsessive-compulsive brain desired."}
    ];
    
    $scope.items = [
        {"name": "Sorrow", "id": "sorrow"},
        {"name": "Barber of Seville", "id": "barber-of-seville"},
        {"name": "Figure Study (Green)", "id": "green-figure-study"},
        {"name": "Figure Study (Blue)", "id": "blue-figure-study"},
        {"name": "Figure Study 2 (Blue)", "id": "blue-figure-study2"},
        {"name": "Figure Study (Purple)", "id": "purple-figure-study"},
        {"name": "Figure Study", "id": "color-figure-study"},
        {"name": "Figure Study (Conte, Watercolor)", "id": "figure-study-mixed-media"},
        {"name": "Abstract Reflection", "id": "abstract-reflection-study"}
    ];
});

mattApp.controller("penController", function ($scope) {
    $scope.id = "pen";
    $scope.title = "Pen";
    $scope.paragraphs = [
        {"text": "While I have drawn in pencil, charcoal, conte crayon and ink, I definitely prefer ink.  It's so permanent.  Once you get ink on that paper, that's pretty much it.  Every line has to be deliberate.  I love that."},
        {"text": "The permanence of ink reminds me of hearing about a critic asking a sculptor how he could carve such beautiful sculptures.  The sculptor corrected the critic, telling him that he didn't carve anything; he just cleared everything away from the sculpture."},
        {"text": "As previously mentioned, drawing is my jam.  There's something very satisfying taking a pen and a piece of paper and creating an abstract pattern or Michigan Central Station."},
        {"text": "For years I was very reliant on surrealist and abstract imagery, but as I've grown older I have become very fond of drawing architecture and funerary sculpture.  The architecture is so precise and exact, it speaks to my meticuluous nature; the funerary art has such built in mood and atmosphere."}
    ];
    
    $scope.items = [
        {"name": "Efeses, Turkey", "id": "efeses"},
        {"name": "Pantheon - France", "id": "pantheon"},
        {"name": "St. Sulpice, France", "id": "saint-sulpice"},
        {"name": "Hagia Sophia, Turkey", "id": "hagia-sophia"},
        {"name": "Michigan Central Station, Detroit", "id": "michigan-central-station"},
        {"name": "House in Sunlight (Original)", "id": "house-in-sunlight-original"},
        {"name": "Guardian", "id": "guardian"},
        {"name": "Angel of Grief", "id": "angel-of-grief"},
        {"name": "Angel of Sorrow", "id": "angel-of-sorrow"},
        {"name": "Grief", "id": "grief2"},
        {"name": "Pennance", "id": "pennance"},
        {"name": "Chtulhu", "id": "cthulhu"},
        {"name": "From the Depths", "id": "from-the-depths"},
        {"name": "Pattern #1", "id": "pattern"},
        {"name": "Pattern #2", "id": "pattern2"},
        {"name": "Bird", "id": "bird"},
        {"name": "Halloween Tree", "id": "halloween-tree"},
        {"name": "Orbs", "id": "orbs"},
        {"name": "Monarch", "id": "monarch"},
        {"name": "Tree", "id": "tree2"},
        {"name": "Katrina", "id": "katrina"},
        {"name": "Scrapware 1", "id": "scrapware1"},
        {"name": "Scrapware 3", "id": "scrapware3"},
        {"name": "Scrapware 4", "id": "scrapware4"},
        {"name": "Scrapware 7", "id": "scrapware7"},
        {"name": "Scrapware 9", "id": "scrapware9"},
        {"name": "Scrapware 11", "id": "scrapware11"},
        {"name": "Scrapware 13", "id": "scrapware13"},
        {"name": "Scrapware 17", "id": "scrapware17"}
    ];
});

mattApp.controller("pencilController", function ($scope) {
    $scope.id = "pencil";
    $scope.title = "Pencil";
    $scope.paragraphs = [
        {"text": "This is where pencil text would go if there was any."}
    ];
    $scope.items = [
        {"name": "Chaotic", "id": "chaotic"},
        {"name": "Reclining Figure", "id": "recline"},
        {"name": "Nude (pregnant)", "id": "pregnant-nude"},
        {"name": "Sketch #4", "id": "sketch4"},
        {"name": "Skull Study", "id": "skullstudy"},
        {"name": "Greek Bust Study", "id": "buststudy"},
        {"name": "Cubist Nude", "id": "cubist-nude"},
        {"name": "Cubist Nude 2", "id": "cubist-nude2"},
        {"name": "Cubist Nude 3", "id": "cubist-nude3"},
        {"name": "Cubist Nude 4", "id": "cubist-nude4"},
        {"name": "Cubist Nude 5", "id": "cubist-nude5"},
        {"name": "Cubist Nude 6", "id": "cubist-nude6"}
    ];
    
});

mattApp.controller("printController", function ($scope) {
    $scope.id = "print";
    $scope.title = "Print";
    $scope.paragraphs = [
        {"text": "Another medium that speaks to my overly-meticuluos nature is printmaking.  Don't know what print making is?  The dime store version of printmaking is that it's a method by which you create an image with a treated plate or stone.  There are a bunch of different methods in printmaking, from Japanese woodblock prints to Italian intaglio or lithography (acid-etched stone)."},
        {"text": "While I think lithography is cool, it's a very laborious process, just as acid itching metal plates is.  I really prefer intaglio and relief prints.  Intaglio is physically itching an image into the plate in which the ink will collect, relief is carving all of the negative space out of the plate/block so that the positive space gets the ink.  Relief is cool, but to me it's a lot more of a broad stroak vs. a thin line.  Just like I prefer drawing over painting for the control, the same applies to intaglio."}
    ];
    $scope.items = [
        {"name": "House in Sunglight (intaglio)", "id": "house-in-sunlight-print"},
        {"name": "Internal Structure (etching)", "id": "internal-structure"},
        {"name": "Pensive (lithograph)", "id": "pensive"},
        {"name": "Brutality (woodblock)", "id": "brutality"}
    ];
});

mattApp.controller("imageController", function ($scope, $routeParams) {
    $scope.src = $routeParams.img;
    $scope.title = $routeParams.title;
});
