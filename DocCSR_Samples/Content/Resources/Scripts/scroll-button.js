(function() {
	if ($(".body-container").length === 1) {
		var bodyContainer = $ ('.body-container')[0];
		var mybutton = document.createElement ("button");          
		//Creates a <button> node
		var textnode = document.createTextNode("Top"); 
		//Creates a textnode            
		mybutton.appendChild(textnode);
		//Appends the text
		mybutton.setAttribute("id","myBtn");
		//Sets id
		mybutton.addEventListener("click",topFunction);
		//Sets on click event handler
		bodyContainer.appendChild(mybutton);
		//Appends button element to main element
		//When the user scrolls down 100px from the top of the document, shows the button
		//Both functions are used based on the responsive portion of the output
		bodyContainer.onscroll = function() {scrollFunction()};
		window.onscroll = function() {scrollFunctionx()};
		
		function scrollFunction() {
			if (bodyContainer.scrollTop > 100 ||
document.documentElement.scrollTop > 100) {
				mybutton.style.display="block";
			} else {
				mybutton.style.display="none";
			}
		}
		function scrollFunctionx() {
			if(document.body.scrollTop > 100||
document.documentElement.scrollTop > 100) {
				mybutton.style.display="block";
			} else {
				mybutton.style.display="none";
			}
		}
		//When the user clicks on the button, scroll to the top of the document 
		function topFunction(){
		$('html,body').animate({ scrollTop:0},"smooth");
		$('html,documentElement').animate({ scrollTop:0},"smooth");
        $('.body-container').animate({ scrollTop:0},"smooth");
		}        
	}   
})();