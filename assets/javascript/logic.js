// This is the js for page 4, when user input their choices, and make selection
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

// Get a story from the database. 

let database = firebase.database();

// Get the first story response from the data info, does there need to be a value change to trigger the function??????????????
database.ref("/movies").once("value", function (data) {
    // do some stuff once
    // console.log(database.ref().child("movies"));
    console.log("db response:", data.val());
    let responseObject = data.val();
    let storyTemplate = Object.values(responseObject)[0].story;
    console.log(storyTemplate);
    return storyTemplate;
});

// this function doesn't trigger???????????????????, does there need to be a value change to trigger the function above?
$("#testdb").on("click", function () {
    $("#story").html(storyTemplate);
})

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

// let nounArray = [];
// let verbArray = [];
// let adjArray = [];
// let advArray = [];

let user_project = {
    nounArray: [],
    verbArray: [],
    adjectiveArray: [],
    adverbArray: [],
    story: "",
    user_name: "",
}
console.log(user_project);

// new object after selection
// need to add attribute value with the actual value?????????????????
function getNouns() {

    for (let i = 0; i < 5; i++) {
        $.ajax({
            method: "POST",
            beforeSend: function (request) {
                request.setRequestHeader("X-Mashape-Key", "c689d162f5mshf499a4cc1699b78p184059jsn3776ce81a3ea");
            },
            method: "GET",
            url: nounUrl,
        }).then(function (response) {
            console.log(response);
            console.log(response.word);

            $("#noun").append('<option class="noun" id="noun1">' + response.word + '</option>');
            user_project.nounArray.push(response.word);
            console.log("nounArray:", user_project.nounArray);
            return user_project.nounArray;
        })
    }
}

function getVerbs() {

    for (let i = 0; i < 5; i++) {
        $.ajax({
            method: "POST",
            beforeSend: function (request) {
                request.setRequestHeader("X-Mashape-Key", "c689d162f5mshf499a4cc1699b78p184059jsn3776ce81a3ea");
            },
            method: "GET",
            url: verbUrl,
        }).then(function (response) {
            console.log(response);
            console.log(response.word);

            $("#verb").append('<option class="verb">' + response.word + '</option>');
            user_project.verbArray.push(response.word);
            return user_project.verbArray;

        })
    }
}

function getAdjs() {

    for (let i = 0; i < 5; i++) {
        $.ajax({
            method: "POST",
            beforeSend: function (request) {
                request.setRequestHeader("X-Mashape-Key", "c689d162f5mshf499a4cc1699b78p184059jsn3776ce81a3ea");
            },
            method: "GET",
            url: adjectiveUrl,
        }).then(function (response) {
            console.log(response);
            console.log(response.word);

            $("#adjective").append('<option class="adjective">' + response.word + '</option>');
            user_project.adjectiveArray.push(response.word);
            return user_project.adjectiveArray;
        })
    }
}

function getAdvs() {

    for (let i = 0; i < 5; i++) {
        $.ajax({
            method: "POST",
            beforeSend: function (request) {
                request.setRequestHeader("X-Mashape-Key", "c689d162f5mshf499a4cc1699b78p184059jsn3776ce81a3ea");
            },
            method: "GET",
            url: adverbUrl,
        }).then(function (response) {
            console.log(response);
            console.log(response.word);

            $("#adverb").append('<option class="adverb">' + response.word + '</option>');
            user_project.adverbArray.push(response.word);
            return user_project.adverbArray;
        })
    }
}




//submit function, save things into local storage.
$("#submit").click(function () {
    console.log('submit', this)
    let mine = $('#noun option:selected').val() // this is the selected item
    //create an object to store the item
    let selected = {
        noun: "test",
        selected: mine //??? what is mine here  
    }
    // var input = document.getElementById('noun');
    console.log($('#noun option:selected').val());
    localStorage.setItem('selected', JSON.stringify(selected));
});

// randomly pull a story from firebase "on click" - new html with catogory buttons 
// console.log
// This is moved above.

// combine the selected story and the pulled words which were stored in local storage, and the story into a string.
// console.log

// Need to also write the story string into HTML.
// Need to make the code less repetitive using loops.

// ????????????test function generate the whole story, .
function madlibsGenerator() {
    $("#story").html('<p>' + "In my " + user_project.nounArray[0] + "," + user_project.nounArray[1] + user_project.verbArray[0] + "s a song of" + user_project.nounArray[2] + '</p>')
}


$(document).ready(function () {
    // Get the words
    // Put the words into html form to the correct select drop-down.
    getNouns();
    getVerbs();
    getAdjs();
    getAdvs();
    //getLocations();
    //...

    // User select the words from the drop-down - this is waiting for local storage. 

    // Submit
    madlibsGenerator()
})





// $(window).on("load", function () {

// });