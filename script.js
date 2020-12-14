var counter = 0;

var pokemon = ["https://www.ssbwiki.com/images/thumb/6/6a/Jigglypuff_SSBU.png/1200px-Jigglypuff_SSBU.png", "https://www.ssbwiki.com/images/thumb/9/93/Pikachu_SSBU.png/1200px-Pikachu_SSBU.png", "https://www.mariowiki.com/images/thumb/2/21/Charizard_SSBU.png/1200px-Charizard_SSBU.png", "https://www.mariowiki.com/images/thumb/d/de/Mewtwo_SSBU.png/1200px-Mewtwo_SSBU.png"];

$("button").click(function(){
    var age = $(".age").val();
	var appearance = $(".appearance").val();
    $(".results").empty();
    $(".age").val("");
    $(".appearance").val("");
    counter = counter + 1;
    $(".counter").text("This quiz has been taken " + counter + " times");
    
if (age < 18 && appearance === "cute") {     	
   $(".results").append("<img src =" + pokemon[0] + ">" + "<p>" + "You are Jigglypuff!" + "</p>");
	}
else if (age >= 18 && appearance === "cute") {
    $(".results").append("<img src =" + pokemon[1] + ">" + "<p>" + "You are Pikachu!" + "</p>");
	}
else if (age < 18 && appearance === "cool") {
    $(".results").append("<img src =" + pokemon[2] + ">" + "<p>" + "You are Charizard!" + "</p>");
	}
else if (age >= 18 && appearance === "cool") {
    $(".results").append("<img src =" + pokemon[3] + ">" + "<p>" + "You are Mewtwo!" + "</p>");
	}
else {
    $(".results").text("There seems to be an error. Please fill out both questions before submitting.");
	}
});