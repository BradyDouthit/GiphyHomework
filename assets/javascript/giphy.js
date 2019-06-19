var topics = ["Goats", "Cats", "Dogs", "Apes"];

$(".test").on("click", function(){
for (var i = 0; i < topics.length; i++) {
    console.log(topics[i]);
    var p = $("<p>").html(topics[i]);
    $("#test").prepend(p);
}
});