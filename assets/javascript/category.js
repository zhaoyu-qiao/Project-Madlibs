//theme selector, write images to the page for catagory to be seelected.
$(document).ready(() => {
    $(".select-your-words").hide();

    let stories = ["movies", "pop-culture", "songs", "tv"];
    let images = ['movies-mad-libs.jpg', 'pop-culture-wihte-background.jpg', 'music-libs.jpg', 'tv-show-mad-libs.png'];

    //display the 4 images for catagory/theme selection
    for (let i = 0; i < stories.length; i++) {
        $('.theme-container').append(`<button><img src='assets/images/${images[i]}' class='theme-image' data-category=${stories[i]}></button>`);
    }

    //When the user selects a category, hide all theme images
    $(".theme-container").on("click", ".theme-image", function () {
        story_name = $(this).attr("category")
        $(".theme-container").hide();

        //Show the words selector form 
        $(".select-your-words").show();
    });
});
