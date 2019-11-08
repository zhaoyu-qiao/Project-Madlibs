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
      beforeSend: function(request) {
        request.setRequestHeader(
          "X-Mashape-Key",
          "c689d162f5mshf499a4cc1699b78p184059jsn3776ce81a3ea"
        );
      },
      method: "GET",
      url: nounUrl
    }).then(function(response) {
      console.log(response);
      console.log(response.word);

      $("#noun").append(
        '<option class="noun" id="noun1">' + response.word + "</option>"
      );
    });
  }
}

function getVerbs() {
  for (let i = 0; i < 5; i++) {
    $.ajax({
      beforeSend: function(request) {
        request.setRequestHeader(
          "X-Mashape-Key",
          "c689d162f5mshf499a4cc1699b78p184059jsn3776ce81a3ea"
        );
      },
      method: "GET",
      url: verbUrl
    }).then(function(response) {
      console.log(response);
      console.log(response.word);

      $("#verb").append('<option class="verb">' + response.word + "</option>");
    });
  }
}

function getAdjs() {
  for (let i = 0; i < 5; i++) {
    $.ajax({
      beforeSend: function(request) {
        request.setRequestHeader(
          "X-Mashape-Key",
          "c689d162f5mshf499a4cc1699b78p184059jsn3776ce81a3ea"
        );
      },
      method: "GET",
      url: adjectiveUrl
    }).then(function(response) {
      console.log(response);
      console.log(response.word);

      $("#adjective").append(
        '<option class="adjective">' + response.word + "</option>"
      );
    });
  }
}

function getAdvs() {
  for (let i = 0; i < 5; i++) {
    $.ajax({
      beforeSend: function(request) {
        request.setRequestHeader(
          "X-Mashape-Key",
          "c689d162f5mshf499a4cc1699b78p184059jsn3776ce81a3ea"
        );
      },
      method: "GET",
      url: adverbUrl
    }).then(function(response) {
      console.log(response);
      console.log(response.word);

      $("#adverb").append(
        '<option class="adverb">' + response.word + "</option>"
      );
    });
  }
}

$(document).ready(function() {
  //This is the js for cover page. The toggle start and sign up button

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
  firebase.initializeApp(firebaseConfig);

  // Create a variable to reference the database
  let database = firebase.database();

  function checkPass() {
    var name = document.getElementById("name-input").value;
    var email = document.getElementById("email-input").value; //need
    var pass = document.getElementById("psw-input").value; //need
    var rpass = document.getElementById("psw-repeat-input").value;
    console.log(name);
    console.log(pass);
    if (pass != rpass) {
      document.getElementById("submit").disabled = true;
      $(".missmatch").html("Entered Password is not matching!! Try Again");
    } else {
      $(".missmatch").html("");
      document.getElementById("submit").disabled = false;
    }
  }

  $("#psw-repeat-input").keyup(function() {
    checkPass();
  });

  // Cited: https://www.w3schools.com/bootstrap/tryit.asp?filename=trybs_ref_js_modal2&stacked=h
  /* The toggle start and sign up button */
  $("#start-btn").click(function(e) {
    $("#myModal").modal();
  });

  $("#submit").click(function(e) {
    e.preventDefault();
    var email = document.getElementById("email-input").value; //need
    console.log(email);
    var pass = document.getElementById("psw-input").value; //need
    console.log(pass);
    const auth = firebase.auth();
    promise = firebase.auth().createUserWithEmailAndPassword(email, pass);
    console.log(e.message);
  });

  function validateForm() {
    window.location.replace("mad-libs-theme-selector-page.html");
  }

  //At the end of the game when the play again button is clicked, the game will reset to the Select a Theme page

  // reset();

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
  $("#words-submit").click(function() {
    console.log("submit", this);
    let mine = $("#noun option:selected").val(); // this is the selected item
    //create an object to store the item
    let selected = { noun: "Rodney", selected: mine };
    // var input = document.getElementById('noun');
    console.log($("#noun option:selected").val());
    localStorage.setItem("selected", JSON.stringify(selected));
  });
});
