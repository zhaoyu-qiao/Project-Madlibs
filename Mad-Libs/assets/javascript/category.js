$(document).ready(() => {
  //hide the words selector form page
  $(".select-your-words").hide();

  let stories = ["movies", "pop-culture", "songs", "tv"];
  let stories2 = [
    {
      story: "movies",
      src: "assets/images/movies-mad-libs.jpg"
    },
    {
      story: "songs",
      src: "assets/images/music-libs.jpg"
    },
    {
      story: "pop-culture",
      src: "assets/images/pop-culture-wihte-background.jpg"
    },
    {
      story: "tv",
      src: "assets/images/tv-show-mad-libs.png"
    }
  ];

  for (let i = 0; i < stories2.length; i++) {
    console.log("story 2");
    console.log(stories2[i]);
    $(".theme-container").append(
      `<img src=${stories2[i].src} class='theme-image'category=${stories2[i].story}>`
    );
  }

  /*   $(".theme-container"stories2[i].src);
  }

  //******This code needs to be fixed. Its appending more than 4 images********
  //   for (let i = 0; i < stories.length; i++) {
  // $('.theme-container').append(`<img src='assets/images/movies-mad-libs.jpg' class='theme-image'category=${stories[i]}>`)
  /*   $(".theme-container").append(
      `<img src='assets/images/movies-mad-libs.jpg' class='theme-image' category=${stories[i]}>` +
        `<img src='assets/images/music-libs.jpg' class='theme-image' category=${stories[i]}>` +
        `<img src='assets/images/pop-culture-wihte-background.jpg' class='theme-image'category=${stories[i]}>` +
        `<img src='assets/images/tv-show-mad-libs.png' class='theme-image' category=${stories[i]}>`
    );
  } */

  //When the user selects a category, hide all theme images
  $(".theme-container").on("click", ".theme-image", function(event) {
    story_name = $(this).attr("category");
    console.log();
    $(".theme-container").hide();

    //Show the words selector form page
    $(".select-your-words").show();
  });

  //https://jsbin.com/yinudid/1/edit?html,output
  ScrollReveal({ duration: 1000 });

  ScrollReveal().reveal(".headline");
  ScrollReveal().reveal(".tagline", { delay: 500 });
  ScrollReveal().reveal(".punchline", { delay: 2000 });
});
