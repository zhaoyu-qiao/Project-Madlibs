// This is the js for word selector, when user input their choices, and make selection
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
let categ = ""
//categ is the catagories, movies, pop-culture,tv and songs. 

let topics = "";
//topics are the child properties for the catagories, the topics are the stories. 

//testdb is the function that gets the story with the macros $$ in place where the user can see the works that will be replaces byt the word selector. Good visual tat works the correct workds are being replaced. 
$("#testdb").on("click", function () {
    event.preventDefault();
    let topicSelected = $('#topic option:selected').val()
    console.log(topicSelected);
    localStorage.setItem('topic', topicSelected);
    $("#story").html(storyTemplate[localStorage.getItem('topic')]);

})

let storyTemplate = "";

// Get 5 nouns /words from words api
// curl 'https://wordsapiv1.p.mashape.com/words/?partOfSpeech=adverb&random=true' -H "X-Mashape-Key: c689d162f5mshf499a4cc1699b78p184059jsn3776ce81a3ea"
let baseUrl = "https://wordsapiv1.p.mashape.com/words/";
let nounString = "?partOfSpeech=noun";
let verbString = "?partOfSpeech=verb";
let adjectiveString = "?partOfSpeech=adjective";
let adverbString = "?partOfSpeech=adverb";
let pronounString = "?partOfSpeech=pronoun"

//Firebase query
let nounUrl = baseUrl + nounString + "&random=true";
let verbUrl = baseUrl + verbString + "&random=true";
let adjectiveUrl = baseUrl + adjectiveString + "&random=true";
let adverbUrl = baseUrl + adverbString + "&random=true";
let pronounUrl = baseUrl + pronounString + "&random=true";
console.log(nounUrl);
console.log(pronounUrl);


//Getwords function, retrieve 5 words for each word type
function getWords(queryUrl, wordType) {
    for (let i = 0; i < 5; i++) {
        $.ajax({
            method: "POST",
            beforeSend: function (request) {
                request.setRequestHeader("X-Mashape-Key", "c689d162f5mshf499a4cc1699b78p184059jsn3776ce81a3ea");
            },
            method: "GET",
            url: queryUrl,
        }).then(function (response) {
            //word to appear in dropdown
            $("#" + wordType).append('<option class="' + wordType + '">' + response.word + '</option>');

        })
    }

}
// new object after selection
function getNouns() {
    getWords(nounUrl, "noun");
}

function getVerbs() {
    getWords(verbUrl, "verb");
}

function getAdjs() {
    getWords(adjectiveUrl, "adjective");
}

function getAdvs() {
    getWords(adverbUrl, "adverb");
}

function getPronouns() {
    getWords(pronounUrl, "pronoun");
}

$()

$(document).ready(function () {
    // Get the words
    // Put the words into html form to the correct select drop-down.
    getNouns();
    getVerbs();
    getAdjs();
    getAdvs();
    getPronouns();

    //selected catagory and cooresponding topics keys from DB
    database.ref('/').on('value', function (childSnapshot) {
        let categKeys = Object.keys(childSnapshot.val());

        categKeys.forEach(function (elm) {
            let myBtn = $('<button>').text(elm).attr('data-category', elm);
            myBtn.addClass('categ-c')
            $('.theme-container').append(myBtn);
        })
        console.log('child', (childSnapshot.val()))
    })

    //images on theme selector page
    $(".theme-container").on("click", ".theme-image", function () {
        let categ = $(this).attr('data-category');
        console.log(categ);

        database.ref(`/${categ}`).once("value", function (childSnapshot) {
            topics = Object.keys(childSnapshot.val());
            console.log("topics", topics);
            // console.log
            console.log("db response: ", childSnapshot.val());

            topics.forEach(function (elm) {
                $("#topic").append('<option class="topics">' + elm + '</option>');

            })
            storyTemplate = childSnapshot.val()
            console.log("story template", storyTemplate);
            return topics;
        })
    })

    //info from DB for local storage
    database.ref(`/${categ}`).once("value", function (childSnapshot) {
        topics = Object.keys(childSnapshot.val());
        console.log("topics", topics);
        console.log("db response: ", childSnapshot.val());
        // set movie response to localStorage
        localStorage.setItem('topics', topics)
        localStorage.setItem('movies', childSnapshot.val().movies)
        topics.forEach(function (elm) {})
        storyTemplate = childSnapshot.val()
        console.log("story template", storyTemplate);
        return topics; //TODO evaluate if return needed?
    })
    //submit function, save things into local storage.
    $("#submit").click(function (event) {
        //prevent refresh
        event.preventDefault();
        // console.log('submit', this)
        let nounSelected = $('#noun option:selected').val() // this is the selected item
        let verbSelected = $('#verb option:selected').val()
        let adjectiveSelected = $('#adjective option:selected').val()
        let adverbSelected = $('#adverb option:selected').val()
        let pronounSelected = $('#pronoun option:selected').val()

        //create an object to store the selected words
        let selected = {
            noun: nounSelected,
            verb: verbSelected,
            adjective: adjectiveSelected,
            adverb: adverbSelected,
            pronoun: pronounSelected
            //selected: "" //??? what is mine here  
        }
        // var input = document.getElementById('noun');
        console.log($('#noun option:selected').val());
        console.log("user choices: ", selected);
        localStorage.setItem('selected', JSON.stringify(selected)); // Save to local storage as string
        return selected;
    });
    //input the whole story
    $("#replace").on("click", function (event) {
        event.preventDefault();
        let selectedWords = JSON.parse(localStorage.getItem("selected"));
        console.log(selectedWords);

        let wholeStory = storyTemplate[localStorage.getItem('topic')];

        for (let prop in selectedWords) {
            let toFind = new RegExp('\\$\\$' + prop + '\\$\\$', 'g'); // Need to double escape

            console.log('for you to see:', prop, selectedWords[prop], toFind)
            wholeStory = wholeStory.replace(toFind, selectedWords[prop]);
        }
        $("#story").text(wholeStory);

    })
})