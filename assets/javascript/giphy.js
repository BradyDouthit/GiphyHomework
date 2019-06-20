var topics = ["Goats", "Cats", "Dogs", "Gorillas"];

function animalFunction() {
    for (var i = 0; i < topics.length; i++) {
        console.log(topics[i]);
        var newButton = $("<button>").html(topics[i]);
        newButton.addClass("animal-buttons");
        newButton.attr("data-animal", topics[i]);
        $("#button-holder").prepend(newButton);
    }
};
animalFunction();
$("button").on("click", function() {
    var animal = $(this).attr("data-animal");
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=xRK1KaHGDNPmpkTkb0GWbJVWI9TUgiEu&q=" +
    animal + "&limit=10&offset=0&rating=G&lang=en";
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        console.log(response);
        console.log(queryURL)
    })
});
