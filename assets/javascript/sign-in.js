$(document).ready(function() {
  // Your web app's Firebase configuration
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

  // Step 1:
  //  If no user, sign in anonymously with firebase.auth().signInAnonymously()
  //  If there is a user, log out out user details for debugging purposes.

  function checkPass() {
    var email = document.getElementById("email-input").value; //need
    var pass = document.getElementById("psw-input").value; //need
    console.log(name);
    console.log(pass);
  }

  $(".sign-in").click(function(e) {
    $("#myModal").modal();
  });

  $(".btn btn-primary btn-block").click(function(e) {
    e.preventDefault();
    var email = document.getElementById("email-input").value; //need
    console.log(email);
    var pass = document.getElementById("psw-input").value; //need
    console.log(pass);
    const auth = firebase.auth();
    promise = firebase.auth().signInWithEmailAndPassword(email, pass);
    console.log(e.message);
  });

  function validateForm() {
    window.location.replace("mad-libs-theme-selector-page.html");
  }
});
