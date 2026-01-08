$(document).ready(function () {
    
			$("button.toggle-toc-off-button").on("click touch", function () {
			$("button.toggle-toc-on-button").show();
			$(this).hide();
			$(".sidenav-wrapper").toggle();
			});
    
			$("button.toggle-toc-on-button").on("click touch", function () {
			$(this).hide();
			$("button.toggle-toc-off-button").show();
			$(".sidenav-wrapper").toggle();
			});
		});