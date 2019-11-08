$(document).ready(() => {
  //hide the words selector form page
  $(".select-your-words").hide();

  let stories = ["movies", "pop-culture", "songs", "tv"];

  for (let i = 0; i < 1; i++) {
    // $('.theme-container').append(`<img src='assets/images/movies-mad-libs.jpg' class='theme-image'category=${stories[i]}>`)
    $(".theme-container").append(
      `<a href="./mad-libs-word-selector.html"><img src='assets/images/movies-mad-libs.jpg' class='theme-image' id='movie-image' category=${stories[i]}></a>` +
        `<a href="./mad-libs-word-selector.html"><img src='assets/images/music-libs.jpg' class='theme-image' id='music-image' category=${stories[i]}></a>` +
        `<a href="./mad-libs-word-selector.html"><img src='assets/images/pop-culture-wihte-background.jpg' class='theme-image' id='pop-culture-image' category=${stories[i]}></a>` +
        `<a href="./mad-libs-word-selector.html"><img src='assets/images/tv-show-mad-libs.png' class='theme-image' id='tv-image'category=${stories[i]}></a>`
    );
  }

  //When the user selects a category, hide all theme images
  $(".theme-container").on("click", ".theme-image", function(event) {
    story_name = $(this).attr("category");
    console.log($(this).attr("category"));
    $(".theme-container").hide();

    //Show the words selector form page
    $(".select-your-words").show();
  });
});
