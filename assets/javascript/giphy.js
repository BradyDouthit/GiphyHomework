var topics = ["Jupiter", "Mercury", "Earth", "Mars"];

function spaceFunction() {
    for (var i = 0; i < topics.length; i++) {
        console.log(topics[i]);
        var newButton = $("<button>").html(topics[i]);
        newButton.addClass("space-buttons");
        newButton.attr("data-space", topics[i]);
        $("#button-holder").prepend(newButton);

    }
};
spaceFunction();
//welcome to sloppy code town
$(".space-buttons").on("click", function () {
    var space = $(this).attr("data-space");
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=xRK1KaHGDNPmpkTkb0GWbJVWI9TUgiEu&q=" +
        space + "&limit=10&offset=0&rating=G&lang=en";
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
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
            newDiv.addClass("new-div");

            var p = $("<p>");
            p.html("Rating: " + results[i].rating);

            newDiv.append(p);
            newDiv.append(newImage);
            $("#image-holder").prepend(newDiv);

        };
        $(".image10").on("click", function () {
            $(this).attr("src", results[9].images.original.url);
            if (clickCheck === 0) {
                clickCheck++
            }
            else {
                clickCheck--
                $(this).attr("src", results[9].images.original_still.url);
            }
        });
        $(".image9").on("click", function () {
            $(this).attr("src", results[8].images.original.url);
            if (clickCheck === 0) {
                clickCheck++
            }
            else {
                clickCheck--
                $(this).attr("src", results[8].images.original_still.url);
            }
        });
        $(".image8").on("click", function () {
            $(this).attr("src", results[7].images.original.url);
            if (clickCheck === 0) {
                clickCheck++
            }
            else {
                clickCheck--
                $(this).attr("src", results[7].images.original_still.url);
            }
        });
        $(".image7").on("click", function () {
            $(this).attr("src", results[6].images.original.url);
            if (clickCheck === 0) {
                clickCheck++
            }
            else {
                clickCheck--
                $(this).attr("src", results[6].images.original_still.url);
            }
        });
        $(".image6").on("click", function () {
            $(this).attr("src", results[5].images.original.url);
            if (clickCheck === 0) {
                clickCheck++
            }
            else {
                clickCheck--
                $(this).attr("src", results[5].images.original_still.url);
            }
        });
        $(".image5").on("click", function () {
            $(this).attr("src", results[4].images.original.url);
            if (clickCheck === 0) {
                clickCheck++
            }
            else {
                clickCheck--
                $(this).attr("src", results[4].images.original_still.url);
            }
        });
        $(".image4").on("click", function () {
            $(this).attr("src", results[3].images.original.url);
            if (clickCheck === 0) {
                clickCheck++
            }
            else {
                clickCheck--
                $(this).attr("src", results[3].images.original_still.url);
            }
        });
        $(".image3").on("click", function () {
            $(this).attr("src", results[2].images.original.url);
            if (clickCheck === 0) {
                clickCheck++
            }
            else {
                clickCheck--
                $(this).attr("src", results[2].images.original_still.url);
            }
        });
        $(".image2").on("click", function () {
            $(this).attr("src", results[1].images.original.url);
            if (clickCheck === 0) {
                clickCheck++
            }
            else {
                clickCheck--
                $(this).attr("src", results[1].images.original_still.url);
            }
        });
        $(".image1").on("click", function () {
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

$("#search-button").on("click", function (event) {
    event.preventDefault()
    var userInput = $("#input").val();
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=xRK1KaHGDNPmpkTkb0GWbJVWI9TUgiEu&q=" +
        userInput + "&limit=10&offset=0&rating=G&lang=en";
    topics.push(userInput);
    userButton =
    console.log(topics);
    $(".search").val("");

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        imageCount = 0;
        var results = response.data;
        var endOfArray = topics[topics.length - 1];
        console.log(results);
        console.log(endOfArray)
        var newButton = $("<button>").html(endOfArray);
        newButton.addClass("space-buttons");
        newButton.attr("data-space", endOfArray);
        $("#button-holder").append(newButton);
        $(".space-buttons").on("click", function () {
            var imageCount = 0;
            var clickCheck = 0;
            for (var i = 0; i < results.length; i++) {
                imageCount++
                console.log(imageCount);
                var newDiv = $("<div>");
                var newImage = $("<img>");
                newImage.attr("src", results[i].images.original_still.url);
                newImage.addClass("image" + imageCount);
                newDiv.addClass("new-div");

                var p = $("<p>");
                p.html("Rating: " + results[i].rating);

                newDiv.append(p);
                newDiv.append(newImage);
                $("#image-holder").prepend(newDiv);

            };
            $(".image10").on("click", function () {
                $(this).attr("src", results[9].images.original.url);
                if (clickCheck === 0) {
                    clickCheck++
                }
                else {
                    clickCheck--
                    $(this).attr("src", results[9].images.original_still.url);
                }
            });
            $(".image9").on("click", function () {
                $(this).attr("src", results[8].images.original.url);
                if (clickCheck === 0) {
                    clickCheck++
                }
                else {
                    clickCheck--
                    $(this).attr("src", results[8].images.original_still.url);
                }
            });
            $(".image8").on("click", function () {
                $(this).attr("src", results[7].images.original.url);
                if (clickCheck === 0) {
                    clickCheck++
                }
                else {
                    clickCheck--
                    $(this).attr("src", results[7].images.original_still.url);
                }
            });
            $(".image7").on("click", function () {
                $(this).attr("src", results[6].images.original.url);
                if (clickCheck === 0) {
                    clickCheck++
                }
                else {
                    clickCheck--
                    $(this).attr("src", results[6].images.original_still.url);
                }
            });
            $(".image6").on("click", function () {
                $(this).attr("src", results[5].images.original.url);
                if (clickCheck === 0) {
                    clickCheck++
                }
                else {
                    clickCheck--
                    $(this).attr("src", results[5].images.original_still.url);
                }
            });
            $(".image5").on("click", function () {
                $(this).attr("src", results[4].images.original.url);
                if (clickCheck === 0) {
                    clickCheck++
                }
                else {
                    clickCheck--
                    $(this).attr("src", results[4].images.original_still.url);
                }
            });
            $(".image4").on("click", function () {
                $(this).attr("src", results[3].images.original.url);
                if (clickCheck === 0) {
                    clickCheck++
                }
                else {
                    clickCheck--
                    $(this).attr("src", results[3].images.original_still.url);
                }
            });
            $(".image3").on("click", function () {
                $(this).attr("src", results[2].images.original.url);
                if (clickCheck === 0) {
                    clickCheck++
                }
                else {
                    clickCheck--
                    $(this).attr("src", results[2].images.original_still.url);
                }
            });
            $(".image2").on("click", function () {
                $(this).attr("src", results[1].images.original.url);
                if (clickCheck === 0) {
                    clickCheck++
                }
                else {
                    clickCheck--
                    $(this).attr("src", results[1].images.original_still.url);
                }
            });
            $(".image1").on("click", function () {
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


