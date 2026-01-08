document.addEventListener("DOMContentLoaded", function(){
	var els = document.getElementsByClassName("copy-btn");
	Array.prototype.forEach.call(els, function(el) {
		el.addEventListener("click", function(event) {
			event.preventDefault();
			const code = this.nextElementSibling.getElementsByTagName("code")[0];
			copyCode(code);
			addTooltip(this, 'Copied!');
		});
	});
});

// Copy text as text
function executeCopy(text) {
	var input = document.createElement('textarea');
	document.body.appendChild(input);
	input.value = text;
	input.select();
	document.execCommand('Copy');
	input.remove();
}

// Copy HTML as text (without HTML tags)
function copyCode(html) {
	var text = html.innerHTML.replace(/<br>/g, "\r\n");
	text = text.replace(/&nbsp;/g, " ");
	text = text.replace(/(<([^>]+)>)/ig, "");
	return executeCopy(unescapeHtml(text));
}

function unescapeHtml(html) {
	var el = document.createElement('div');
	return html.replace(/\&[#0-9a-z]+;/gi, function (enc) {
		el.innerHTML = enc;
		return el.innerText;
	});
}

function addTooltip(el, title) {
	if (el.getElementsByClassName("custom-tooltip").length == 0) {
		el.innerHTML = el.innerHTML + '<span class="custom-tooltip">' + title + '</span>';
		var tooltipSpan = el.getElementsByClassName("custom-tooltip")[0];
		tooltipSpan.style.opacity = 1;
 
		el.onmouseout = function () {
			tooltipSpan.remove();
		};
	}
}