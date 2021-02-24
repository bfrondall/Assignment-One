console.log("extension is running!")

$("body").on("click", function(){
	$("body").addClass("noise");
	$("field-team even").addClass("shakytext");
	$("h2").addClass("Headershake");
	$("p").addClass("shakytext");
	$("a").addClass("Headershake");

	//Attempted to change the background color on the footer of the page
	$("footer").addClass("footer1");
})


//More to the failed gif overlay button, i tried your recorded popup lectures and attempted to rework it so i could send an overlay to the webpage rather than a message, however, I was unssuccessful.

//chrome.runtime.onMessage.addListener(
  //function(request, sender, sendResponse) {
    //var url = request.message;
    //$("body").css("background", url)

  //}
// );



 // TRY: updating the text content of an element or set of elements on one or more pages

// TRY: adding a click event listener to an element that changes the background of that element to a new color

// TRY: using a mouseenter event listener to update text to something new.