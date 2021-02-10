console.log("extension is running!")

$("header").after("hello from the extension")

// TRY: updating the text content of an element or set of elements on one or more pages
$(".hero-header .brand-header span").text("I've got big news")
// TRY: adding a click event listener to an element that changes the background of that element to a new color
$(".hero-header").on("click", function(){
	alert("bonjour")
})
// TRY: using a mouseenter event listener to update text to something new.