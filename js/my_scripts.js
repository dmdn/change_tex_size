function changeFontSize(btn, textElementId, step) {
	var stepSize = parseInt(step, 10);	
	var changeElement = document.getElementById(textElementId);
	var changeFont = parseInt(changeElement.style.fontSize, 10);
	var newFontSize = changeFont + step;

	if (newFontSize > 8 && newFontSize < 20){		
		changeElement.style.fontSize = newFontSize + 'px';
		enableBtn();
	} else if (newFontSize == 8 || newFontSize == 20) {
    	changeElement.style.fontSize = newFontSize + 'px';
    	disabledBtn(btn);
  	} else {
    	disabledBtn(btn);
  	}
}

function disabledBtn(btn) {
	btn.setAttribute('disabled','disabled');
}

function enableBtn() {
	if (document.getElementById('lessBtn').disabled) {
		document.getElementById('lessBtn').removeAttribute('disabled');
	}
	if (document.getElementById('moreBtn').disabled) {
		document.getElementById('moreBtn').removeAttribute('disabled');
	}
}

var reset = document.getElementById("resetBtn");
reset.onclick = function() {
	document.getElementById('text').style.fontSize = 12 + 'px';
	enableBtn();	
};