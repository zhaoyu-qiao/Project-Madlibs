


// This is the js for page 4, when user input their choices, and make selection
// Get 5 nouns /words from words api
// curl 'https://wordsapiv1.p.mashape.com/words/?partOfSpeech=adverb&random=true' -H "X-Mashape-Key: c689d162f5mshf499a4cc1699b78p184059jsn3776ce81a3ea"
let baseUrl = "https://wordsapiv1.p.mashape.com/words/";
let nounString = "?partOfSpeech=noun";
let verbString = "?partOfSpeech=verb";
let adjectiveString = "?partOfSpeech=adjective";
let adverbString = "?partOfSpeech=adverb";


let nounUrl = baseUrl + nounString + "&random=true";
let verbUrl = baseUrl + verbString + "&random=true";
let adjectiveUrl = baseUrl + adjectiveString + "&random=true";
let adverbUrl = baseUrl + adverbString + "&random=true";

console.log(nounUrl);
console.log(verbUrl);
console.log(adjectiveUrl);
console.log(adverbUrl);

let nounArray = [];
let verbArray = [];
let adjArray = [];
let advArray = [];



function getNouns() {

    for (let i = 0; i < 5; i++) {
        $.ajax({
            beforeSend: function (request) {
                request.setRequestHeader("X-Mashape-Key", "c689d162f5mshf499a4cc1699b78p184059jsn3776ce81a3ea");
            },
            method: "GET",
            url: nounUrl,
        }).then(function (response) {
            console.log(response);
            console.log(response.word);

            $("#noun").append('<option class="noun" id="noun1">' + response.word + '</option>');

        })
    }
}

function getVerbs() {

    for (let i = 0; i < 5; i++) {
        $.ajax({
            beforeSend: function (request) {
                request.setRequestHeader("X-Mashape-Key", "c689d162f5mshf499a4cc1699b78p184059jsn3776ce81a3ea");
            },
            method: "GET",
            url: verbUrl,
        }).then(function (response) {
            console.log(response);
            console.log(response.word);

            $("#verb").append('<option class="verb">' + response.word + '</option>');

        })
    }
}

function getAdjs() {

    for (let i = 0; i < 5; i++) {
        $.ajax({
            beforeSend: function (request) {
                request.setRequestHeader("X-Mashape-Key", "c689d162f5mshf499a4cc1699b78p184059jsn3776ce81a3ea");
            },
            method: "GET",
            url: adjectiveUrl,
        }).then(function (response) {
            console.log(response);
            console.log(response.word);

            $("#adjective").append('<option class="adjective">' + response.word + '</option>');

        })
    }
}

function getAdvs() {

    for (let i = 0; i < 5; i++) {
        $.ajax({
            beforeSend: function (request) {
                request.setRequestHeader("X-Mashape-Key", "c689d162f5mshf499a4cc1699b78p184059jsn3776ce81a3ea");
            },
            method: "GET",
            url: adverbUrl,
        }).then(function (response) {
            console.log(response);
            console.log(response.word);

            $("#adverb").append('<option class="adverb">' + response.word + '</option>');

        })
    }
}
$(document).ready(function () {

    // Cited: https://www.w3schools.com/bootstrap/tryit.asp?filename=trybs_ref_js_modal2&stacked=h 
    /* The toggle start and sign up button */
    $("#start-btn").click(function () {
        $("#myModal").modal();
    });

    //At the end of the game when the play again button is clicked, the game will reset to the Select a Theme page
    $(document).on("click", "#play-again-btn", function () {
        // reset();
    });
    // Get the words
    getNouns();
    getVerbs();
    getAdjs();
    getAdvs();
    //getLocations();
    //...
    //writeNouns();
    // Put the words into html form to the correct input.

    // User select the words from the drop-downs

    // Submit

    //local storage for words submitted on the Select Your Words Page
    $("#words-submit").click(function () {
        console.log('submit', this)
        let mine = $('#noun option:selected').val()// this is the selected item
        //create an object to store the item
        let selected = { noun: "Rodney", selected: mine }
        // var input = document.getElementById('noun');
        console.log($('#noun option:selected').val());
        localStorage.setItem('selected', JSON.stringify(selected));
    });




    //This is the js for page 3, when the user selects one of the four themes

    // Firebase configuration
    var firebaseConfig = {
        apiKey: "AIzaSyAZbkSjLOrmZFERAxfzs7AHI5-ht5xbT7k",
        authDomain: "madlibs-f325f.firebaseapp.com",
        databaseURL: "https://madlibs-f325f.firebaseio.com",
        projectId: "madlibs-f325f",
        storageBucket: "madlibs-f325f.appspot.com",
        messagingSenderId: "702529571921",
        appId: "1:702529571921:web:f073aeea048c108bf8fc70",
        measurementId: "G-PDRGRKZPXH"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig)

    // Connect a story from the database to the appropriate theme picture. 

    let database = firebase.database();

    //let storyRef = database.ref("/madlibs-f325f");

    //Click function for Mad Libs Movie Theme
    /*     $("#movie-theme").on("click", function (event) {
            event.preventDefault();
    
            database.ref("/movies").on("value", function (childSnapshot) { */
    // storing the snapshot.val() in a variable for convenience
    /*  let movies = [];
     let movieName = childSnapshot.val().name;
     let movieStory = childSnapshot.val().story;

     console.log('snap is:', childSnapshot.val());
*/
    // for (let i = 0; i < movies.length; i++) {
    // This sets the movie theme image with a random movie name array. For each movie name.
    /*     console.log($(this))
        let movieOptions = movies[Math.floor(Math.random() * movies.length)];
        $(this).attr("data-movievalue", movieOptions);
    }
    // */
    //let movieValue = ($(this).attr("data-movievalue"));
    //pull random movie name along with its story
    //push the nouns, verbs, adjectives and adverbs to the page 4 words selection page 


    getNouns();
    getVerbs();
    getAdjs();
    getAdvs();



    //hide the story
    //$('moviestory').hide();??????? I know this is wrong.


    /* 
            });
        }); */




    //Click function for Mad Libs Movie Theme
    /*    $(document).on("click", "#movie-theme", function () {
   
           getNouns();
           getVerbs();
           getAdjs();
           getAdvs();
   
       });
    */
    //Click function for Mad Libs Music Theme
    /* $(document).on("click", "#music-theme", function () {

        getNouns();
        getVerbs();
        getAdjs();
        getAdvs();

    });
 */



    //Click function for Mad Libs Pop Culture Theme
    /*  $(document).on("click", "#pop-culture-theme", function () {
 
         getNouns();
         getVerbs();
         getAdjs();
         getAdvs();
 
     });
  */

    ////Click function for Mad Libs TV Shows Theme
    /*  $(document).on("click", "#tv-show-theme", function () {
 
         getNouns();
         getVerbs();
         getAdjs();
         getAdvs();
 
     }); */







})



// $(window).on("load", function () {

// });