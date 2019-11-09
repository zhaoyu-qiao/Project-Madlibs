$(document).ready(() => {
  $(".select-your-words").hide();
  $(".your-story-result").hide();

  let stories = ["movies", "pop-culture", "songs", "tv"];
  let images = [
    "movies-mad-libs.jpg",
    "border-pop-culture.png",
    "music-libs.jpg",
    "tv-show-mad-libs.png"
  ];

  //******This code needs to be fixed. Its appending more than 4 images********
  for (let i = 0; i < stories.length; i++) {

    $(".theme-container").append(
      `<button><img src='assets/images/${images[i]}' class='theme-image' data-category=${stories[i]}></button>`
    );
  }

  //When the user selects a category, hide all theme images
  $(".theme-container").on("click", ".theme-image", function () {
    story_name = $(this).attr("category");

    $(".theme-container").hide();

    //Show the words selector form
    $(".select-your-words").show();
  });

  //When the user selects a topic of the category, hide the select your words page and keep the theme continer hidden. Show the story result
  /*   $(".select-your-words").on("click", "#replace", function () {
      story_name = $(this).attr("category");

      $(".theme-container").hide();
      $(".select-your-words").show();
   */
  //Show the words selector form
  /*   $(".your-story-result").show();
  }); */

  /* $(".select-your-words").on("click", "#testdb", function () {
    story_name = $(this).attr("category");
 */
  /*  $(".theme-container").hide();
   $(".select-your-words").show(); */

  //Show the words selector form
  /*   $(".your-story-result").show();
  });
 */

  // Get words meanings
  // https://www.dictionaryapi.com/api/v3/references/collegiate/json/voluminous?key=7d9d9d50-6001-46a9-a0db-0effdf1bae19
  let dicBaseUrl = "https://www.dictionaryapi.com/api/v3/references/collegiate/json/";
  let dicApiKey = "7d9d9d50-6001-46a9-a0db-0effdf1bae19";
  let wordLookup = "";
  $("#search").on("click", function () {
    wordLookup = $("#lookup").val();
    let lookupUrl = dicBaseUrl + wordLookup + "?key=" + dicApiKey;
    $.ajax({
      method: "GET",
      url: lookupUrl,
    }).then(function (response) {
      console.log(response);
      let def = response[0].shortdef;
      console.log(def);
      $("#defination").html('<b>' + "Defination: " + '</b>' + def);
    })
  })
});