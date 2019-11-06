
$(document).ready(() => {
    $(".select-your-words").hide();

    let stories = ["movies", "pop-culture", "songs", "tv"];

    //******This code needs to be fixed. Its appending more than 4 images********
    for (let i = 0; i < stories.length; i++) {
        // $('.theme-container').append(`<img src='assets/images/movies-mad-libs.jpg' class='theme-image'category=${stories[i]}>`)
        $('.theme-container').append(`<img src='assets/images/movies-mad-libs.jpg' class='theme-image' category=${stories[i]}>` +
            `<img src='assets/images/music-libs.jpg' class='theme-image' category=${stories[i]}>` +
            `<img src='assets/images/pop-culture-wihte-background.jpg' class='theme-image'category=${stories[i]}>` +
            `<img src='assets/images/tv-show-mad-libs.png' class='theme-image' category=${stories[i]}>`)

    }

    //When the user selects a category, hide all theme images
    $(".theme-container").on("click", ".theme-image", function () {
        story_name = $(this).attr("category")
        $(".theme-container").hide();

        //Show the words selector form 
        $(".select-your-words").show();
    });




});



