//select category button
$("#movies").on("click", function () {
    categ = $(this).val;
    database.ref(`/${categ}`).once("value", function (childSnapshot) { //TODO associate topic to link clicked
        topics = Object.keys(childSnapshot.val());
        console.log("topics", topics);
        console.log("db response: ", childSnapshot.val());
        topics.forEach(function (elm) {
            $("#topic").append('<option class="topics">' + elm + '</option>');
            // tv  + 5
        })
        storyTemplate = childSnapshot.val()
        console.log("story template", storyTemplate);
        //return topics; //TODO evaluate if return 
        let topicSelected = $('#topic option:selected').val()
        console.log(topicSelected);
        localStorage.setItem('topic', topicSelected);
        $("#story").html(storyTemplate[localStorage.getItem('topic')]);
        return topicSelected;
    })
})