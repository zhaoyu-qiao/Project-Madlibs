//Get words from the api

/*let user_project = {
    nounArray: [],
    verbArray: [],
    adjectiveArray: [],
    adverbArray: [],
    story: "",
    user_name: "",
}*/


//Getwords function

function getWords(queryUrl, wordType) {
    for (let i = 0; i < 5; i++) {
        $.ajax({
            method: "POST",
            beforeSend: function (request) {
                request.setRequestHeader("X-Mashape-Key", "c689d162f5mshf499a4cc1699b78p184059jsn3776ce81a3ea");
            },
            method: "GET",
            url: queryUrl,
        }).then(function (response) {
            // console.log(response.word);

            $("#" + wordType).append('<option class="' + wordType + '">' + response.word + '</option>');
            //user_project.nounArray.push(response.word);
            //console.log("nounArray:", user_project.nounArray);
            //return user_project.nounArray;
        })
    }

}
// new object after selection
// need to add attribute value with the actual value?????????????????
function getNouns() {
    getWords(nounUrl, "noun");
}

function getVerbs() {
    getWords(verbUrl, "verb");
}

function getAdjs() {
    getWords(adjectiveUrl, "adjective");
}

function getAdvs() {
    getWords(adverbUrl, "adverb");
}

function getPronouns() {
    getWords(pronounUrl, "pronoun");
}