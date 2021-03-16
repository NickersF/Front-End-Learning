window.onload=function() {
	
	var svgObject = document.getElementById("svgObject"); 	// Get the Object by ID
	var svgDocument = svgObject.contentDocument; 			// Get the SVG document inside the Object tag
	var svgItem = svgDocument.getElementById("Shape_A"); 	// Get one of the SVG items by ID;

	//svgItem.setAttribute("fill", "lime"); 				// Set the colour to something else
    console.log(svgItem);

};

$(document).ready(function(){

	$("#Shape_A").mouseover(function() {
		
	});
  
  }); 