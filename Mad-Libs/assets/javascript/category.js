$; /* (document).ready(() => {
  //hide the words selector form page
  $(".select-your-words").hide();

  let stories = ["movies", "pop-culture", "songs", "tv"];

  for (let i = 0; i < 1; i++) { */
// $('.theme-container').append(`<img src='assets/images/movies-mad-libs.jpg' class='theme-image'category=${stories[i]}>`)
/*  $(".theme-container").append(
      `<a href="./mad-libs-word-selector.html"><img src='assets/images/movies-mad-libs.jpg' class='theme-image' id='movie-image' category=${stories[i]}></a>` +
        `<a href="./mad-libs-word-selector.html"><img src='assets/images/music-libs.jpg' class='theme-image' id='music-image' category=${stories[i]}></a>` +
        `<a href="./mad-libs-word-selector.html"><img src='assets/images/pop-culture-wihte-background.jpg' class='theme-image' id='pop-culture-image' category=${stories[i]}></a>` +
        `<a href="./mad-libs-word-selector.html"><img src='assets/images/tv-show-mad-libs.png' class='theme-image' id='tv-image'category=${stories[i]}></a>`
    );
  }
 */
//When the user selects a category, hide all theme images
/* $(".theme-container").on("click", ".theme-image", function(event) {
    story_name = $(this).attr("category");
    console.log($(this).attr("category"));
    $(".theme-container").hide(); */

//Show the words selector form page
/*    $(".select-your-words").show();
  });
}); */

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
    // $('.theme-container').append(`<img src='assets/images/movies-mad-libs.jpg' class='theme-image'category=${stories[i]}>`)
    // $('.theme-container').append(`<button><img src='assets/images/movies-mad-libs.jpg' class='theme-image' data-category=${stories[i]} data-category=${stories[i]}></button>` +
    //     `<img src='assets/images/music-libs.jpg' class='theme-image' data-category=${stories[i]}>` +
    //     `<img src='assets/images/pop-culture-wihte-background.jpg' class='theme-image'data-category=${stories[i]}>` +
    //     `<img src='assets/images/tv-show-mad-libs.png' class='theme-image' data-category=${stories[i]}>`)
    $(".theme-container").append(
      `<button><img src='assets/images/${images[i]}' class='theme-image' data-category=${stories[i]}></button>`
    );
  }

  //When the user selects a category, hide all theme images
  $(".theme-container").on("click", ".theme-image", function() {
    story_name = $(this).attr("category");

    $(".theme-container").hide();

    //Show the words selector form
    $(".select-your-words").show();
  });

  //When the user selects a topic of the category, hide the select your words page and keep the theme continer hidden. Show the story result
  $(".select-your-words").on("click", "#replace", "#testdb", function() {
    story_name = $(this).attr("category");

    $(".theme-container").hide();
    $(".select-your-words").hide();

    //Show the words selector form
    $(".your-story-result").show();
  });
});
