
$.clearInput = function () {
	$('form').find('input[type=text], input[type=password], input[type=number], input[type=email], textarea').val('');
};

$.clearInputCerca = function () {
	$('div').find('input[type=text], input[type=password], input[type=number], input[type=email], textarea').val('');
};

// CREA

btnCrea.onclick = function() {
	eventoBox.style.display = "flex";
	document.getElementById("place").focus();
	$("#evento").show().fadeIn(3000);
	setTimeout(function () {
	}, 3000);
}

// INFO

btnInfo.onclick = function() {
  infoBox.scroll(0, 0);
	infoBox.style.display = "flex";
	$("#info").show().fadeIn(3000);
}

closeEventoBox.onclick = function() {
	eventoBox.removeAttribute("style");
	$.clearInput();
	$("close").show().fadeOut(3000);
}

closeCercaBox.onclick = function() {
	cerca.removeAttribute("style");
	a = document.getElementsByTagName("a");
	for (i = 0; i < a.length; i++) {
			a[i].style.display = "";
	}
	$.clearInputCerca();
	$("close").show().fadeOut(3000);
}

closeInfoBox.onclick = function() {
	infoBox.removeAttribute("style");
	$("close").show().fadeOut(3000);
}

closeEventoEventi.onclick = function() {
	eventoEventi.removeAttribute("style");
	$("close").show().fadeOut(3000);
	$("#eventoEventiBox").empty();
}

closeEventoEventiFile.onclick = function() {
  $("#barraFile").css("display", "none");
}

// CLOSE BOX

window.onclick = function(event) {
	if(event.target == eventoBox) {
	eventoBox.removeAttribute("style");
		$.clearInput();
} else if(event.target == cerca) {
	cerca.removeAttribute("style");
		$.clearInputCerca();
		a = document.getElementsByTagName("a");
		for (i = 0; i < a.length; i++) {
			a[i].style.display = "";
		}
} else if (event.target == eventoEventi) {
	eventoEventi.removeAttribute("style");
	$("#eventoEventiBox").empty();
}
}
