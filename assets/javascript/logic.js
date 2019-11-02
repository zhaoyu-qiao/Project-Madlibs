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

        })
    }
}
$(document).ready(function () {
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
})



// $(window).on("load", function () {

// });