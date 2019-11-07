// Get words meanings
// https://www.dictionaryapi.com/api/v3/references/collegiate/json/voluminous?key=7d9d9d50-6001-46a9-a0db-0effdf1bae19

//
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