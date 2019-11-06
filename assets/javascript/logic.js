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

// Two ways of getting the stories since on DB there are two ways of writing the stories
// 1st use Object.values
/*database.ref("/movies").once("value", function (data) {
    // console.log(database.ref().child("movies"));
    console.log("db response:", data.val());
    let responseObject = data.val();
    let storyTemplate = Object.values(responseObject)[0].story;
    console.log(storyTemplate);
    return storyTemplate;
});*/
let storyTemplate = ""; // Define this 
database.ref("/movies").once("value", function (childSnapshot) {
    console.log("db response: ", childSnapshot.val());
    // tv  + 5
    storyTemplate = childSnapshot.val().movie1;
    console.log(storyTemplate);
    //$("#story").html(storyTemplate); // this should not be triggered here
    return storyTemplate;
})

// this function doesn't trigger, or that storyTemplate scope is wrong.
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
let pronounString = "?partOfSpeech=pronoun"


let nounUrl = baseUrl + nounString + "&random=true";
let verbUrl = baseUrl + verbString + "&random=true";
let adjectiveUrl = baseUrl + adjectiveString + "&random=true";
let adverbUrl = baseUrl + adverbString + "&random=true";
let pronounUrl = baseUrl + pronounString + "&random=true";
console.log(nounUrl);
console.log(pronounUrl);


/*let user_project = {
    nounArray: [],
    verbArray: [],
    adjectiveArray: [],
    adverbArray: [],
    story: "",
    user_name: "",
}
console.log(user_project);*/


//Getwords function
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
            // console.log(response.word);

            $("#" + wordType).append('<option class="' + wordType + '">' + response.word + '</option>');
            //user_project.nounArray.push(response.word);
            //console.log("nounArray:", user_project.nounArray);
            //return user_project.nounArray;
        })
    }

}
// new object after selection
// need to add attribute value with the actual value?????????????????
function getNouns() {
    getWords(nounUrl, "noun");
    /*for (let i = 0; i < 5; i++) {
        $.ajax({
            method: "POST",
            beforeSend: function (request) {
                request.setRequestHeader("X-Mashape-Key", "c689d162f5mshf499a4cc1699b78p184059jsn3776ce81a3ea");
            },
            method: "GET",
            url: nounUrl,
        }).then(function (response) {
            console.log(response.word);

            $("#noun").append('<option class="noun" id="noun1">' + response.word + '</option>');
            user_project.nounArray.push(response.word);
            console.log("nounArray:", user_project.nounArray);
            return user_project.nounArray;
        })
    }*/
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





// randomly pull a story from firebase "on click" - new html with catogory buttons 
// console.log
// This is moved above.

// combine the selected story and the pulled words which were stored in local storage, and the story into a string.
// console.log

// Need to also write the story string into HTML.
// Need to make the code less repetitive using loops.







$(document).ready(function () {
    // Get the words
    // Put the words into html form to the correct select drop-down.
    getNouns();
    getVerbs();
    getAdjs();
    getAdvs();
    getPronouns();
    //getLocations();
    //...

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

    //Replace words within $$..$$ with the selected words stored in local storage.
    //cited from this youtube video: https://www.youtube.com/watch?v=ziBO-U2_t3k

    // replacer is a call back function to return the POS from local storage
    function replacer(match, p1, p2, p3, p4, p5, offset, string) {
        // console.log('match and pos', match, p1, p2, p3, p4, p5, offset, string)
        return "TEST";
        //this replace everything with $$..$$ with "test"

        //console.log(entry);

        //return entry[pos]

    }

    $("#replace").on("click", function (event) {
        event.preventDefault();
        let selectedWords = JSON.parse(localStorage.getItem("selected"));
        console.log(selectedWords);

        let wholeStory = storyTemplate;

        for (let prop in selectedWords) {
            let toFind = new RegExp('\\$\\$' + prop + '\\$\\$', 'g');

            console.log('for you to see:', prop, selectedWords[prop], toFind)
            wholeStory = wholeStory.replace(toFind, selectedWords[prop]); // separate this part to different word types?
            // console.log(wholeStory)

        }
        $("#story").text(wholeStory);

        // let wholeStory = storyTemplate.replace(/\$\$(.*?)\$\$/g, replacer); // separate this part to different word types?
        //$("#story").text(wholeStory);
        //return selectedWords;

        // for every property in object
        //      obj[property].forEach
    })
})





// $(window).on("load", function () {

// });