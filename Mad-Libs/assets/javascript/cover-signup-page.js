$(document).ready(function() {
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
    // var name = document.getElementById("name-input").value;
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

  $(".btn btn-primary btn-block").click(function(e) {
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
});
