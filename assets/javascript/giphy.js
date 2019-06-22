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
        var imageCount = 0;
        var clickCheck = 0;        
        var results = response.data;
        console.log(results);
        for (var i = 0; i < results.length; i++) {
            imageCount++
            console.log(imageCount);
            var newDiv = $("<div>");
            var newImage = $("<img>");
            newImage.attr("src", results[i].images.original_still.url);
            newImage.addClass("image" + imageCount);

            var p = $("<p>");
            p.html("Rating: " + results[i].rating);

            newDiv.append(p);
            newDiv.append(newImage);
            $("#image-holder").prepend(newDiv);

        };
        $(".image10").on("click", function() {
            $(this).attr("src", results[9].images.original.url);
            if (clickCheck === 0) {
                clickCheck++
            }
            else {
                clickCheck--
                $(this).attr("src", results[9].images.original_still.url);
            }
        });
        $(".image9").on("click", function() {
            $(this).attr("src", results[8].images.original.url);
            if (clickCheck === 0) {
                clickCheck++
            }
            else {
                clickCheck--
                $(this).attr("src", results[8].images.original_still.url);
            }
        });
        $(".image8").on("click", function() {
            $(this).attr("src", results[7].images.original.url);
            if (clickCheck === 0) {
                clickCheck++
            }
            else {
                clickCheck--
                $(this).attr("src", results[7].images.original_still.url);
            }
        });
        $(".image7").on("click", function() {
            $(this).attr("src", results[6].images.original.url);
            if (clickCheck === 0) {
                clickCheck++
            }
            else {
                clickCheck--
                $(this).attr("src", results[6].images.original_still.url);
            }
        });
        $(".image6").on("click", function() {
            $(this).attr("src", results[5].images.original.url);
            if (clickCheck === 0) {
                clickCheck++
            }
            else {
                clickCheck--
                $(this).attr("src", results[5].images.original_still.url);
            }
        });
        $(".image5").on("click", function() {
            $(this).attr("src", results[4].images.original.url);
            if (clickCheck === 0) {
                clickCheck++
            }
            else {
                clickCheck--
                $(this).attr("src", results[4].images.original_still.url);
            }
        });
        $(".image4").on("click", function() {
            $(this).attr("src", results[3].images.original.url);
            if (clickCheck === 0) {
                clickCheck++
            }
            else {
                clickCheck--
                $(this).attr("src", results[3].images.original_still.url);
            }
        });
        $(".image3").on("click", function() {
            $(this).attr("src", results[2].images.original.url);
            if (clickCheck === 0) {
                clickCheck++
            }
            else {
                clickCheck--
                $(this).attr("src", results[2].images.original_still.url);
            }
        });
        $(".image2").on("click", function() {
            $(this).attr("src", results[1].images.original.url);
            if (clickCheck === 0) {
                clickCheck++
            }
            else {
                clickCheck--
                $(this).attr("src", results[1].images.original_still.url);
            }
        });
        $(".image1").on("click", function() {
            $(this).attr("src", results[0].images.original.url);
            if (clickCheck === 0) {
                clickCheck++
            }
            else {
                clickCheck--
                $(this).attr("src", results[0].images.original_still.url);
            }
        });
        
        
    });
});

$("#submit").on("click", function() {
    var userInput = $("#search").val();
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=xRK1KaHGDNPmpkTkb0GWbJVWI9TUgiEu&q=" +
    userInput + "&limit=10&offset=0&rating=G&lang=en";
    topics.push(userInput);
    userButton = 
    console.log(topics);
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        //var imageCount = 0;
        var results = response.data;
        var endOfArray = topics[topics.length - 1];
        console.log(results);
        console.log(endOfArray)
        $("#search").val("");
        var newButton = $("<button>").html(endOfArray);
        newButton.addClass("animal-buttons");
        newButton.attr("data-animal", endOfArray);
        $("#button-holder").append(newButton);
        $("button").on("click", function() {
            var imageCount = 0;
            var clickCheck = 0;
            for (var i = 0; i < results.length; i++) {
                imageCount++
                console.log(imageCount);
                var newDiv = $("<div>");
                var newImage = $("<img>");
                newImage.attr("src", results[i].images.original_still.url);
                newImage.addClass("image" + imageCount);
    
                var p = $("<p>");
                p.html("Rating: " + results[i].rating);
    
                newDiv.append(p);
                newDiv.append(newImage);
                $("#image-holder").prepend(newDiv);
    
            };
            $(".image10").on("click", function() {
                $(this).attr("src", results[9].images.original.url);
                if (clickCheck === 0) {
                    clickCheck++
                }
                else {
                    clickCheck--
                    $(this).attr("src", results[9].images.original_still.url);
                }
            });
            $(".image9").on("click", function() {
                $(this).attr("src", results[8].images.original.url);
                if (clickCheck === 0) {
                    clickCheck++
                }
                else {
                    clickCheck--
                    $(this).attr("src", results[8].images.original_still.url);
                }
            });
            $(".image8").on("click", function() {
                $(this).attr("src", results[7].images.original.url);
                if (clickCheck === 0) {
                    clickCheck++
                }
                else {
                    clickCheck--
                    $(this).attr("src", results[7].images.original_still.url);
                }
            });
            $(".image7").on("click", function() {
                $(this).attr("src", results[6].images.original.url);
                if (clickCheck === 0) {
                    clickCheck++
                }
                else {
                    clickCheck--
                    $(this).attr("src", results[6].images.original_still.url);
                }
            });
            $(".image6").on("click", function() {
                $(this).attr("src", results[5].images.original.url);
                if (clickCheck === 0) {
                    clickCheck++
                }
                else {
                    clickCheck--
                    $(this).attr("src", results[5].images.original_still.url);
                }
            });
            $(".image5").on("click", function() {
                $(this).attr("src", results[4].images.original.url);
                if (clickCheck === 0) {
                    clickCheck++
                }
                else {
                    clickCheck--
                    $(this).attr("src", results[4].images.original_still.url);
                }
            });
            $(".image4").on("click", function() {
                $(this).attr("src", results[3].images.original.url);
                if (clickCheck === 0) {
                    clickCheck++
                }
                else {
                    clickCheck--
                    $(this).attr("src", results[3].images.original_still.url);
                }
            });
            $(".image3").on("click", function() {
                $(this).attr("src", results[2].images.original.url);
                if (clickCheck === 0) {
                    clickCheck++
                }
                else {
                    clickCheck--
                    $(this).attr("src", results[2].images.original_still.url);
                }
            });
            $(".image2").on("click", function() {
                $(this).attr("src", results[1].images.original.url);
                if (clickCheck === 0) {
                    clickCheck++
                }
                else {
                    clickCheck--
                    $(this).attr("src", results[1].images.original_still.url);
                }
            });
            $(".image1").on("click", function() {
                $(this).attr("src", results[0].images.original.url);
                if (clickCheck === 0) {
                    clickCheck++
                }
                else {
                    clickCheck--
                    $(this).attr("src", results[0].images.original_still.url);
                }
            });
        });
    });
});
