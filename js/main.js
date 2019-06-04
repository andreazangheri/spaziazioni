MY_ACCESS_TOKEN = 'pk.eyJ1IjoidHlwZXJyb3IiLCJhIjoiY2pzMmk5OTEzMDZ6ZDQ0dDlhOXZ1ZmpiaCJ9.mcgUo3mvobOjbzdYg6lxUQ';
var mapboxClient = mapboxSdk({ accessToken: MY_ACCESS_TOKEN });
var geocodingClient = mapboxClient.geocoding;

mapboxgl.accessToken = 'pk.eyJ1IjoidHlwZXJyb3IiLCJhIjoiY2pzMmk5OTEzMDZ6ZDQ0dDlhOXZ1ZmpiaCJ9.mcgUo3mvobOjbzdYg6lxUQ';
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/light-v10',
  //center: [12.912952, 43.909735],
  zoom: 12
});

var geocoder = new MapboxGeocoder({
  accessToken: mapboxgl.accessToken,
  placeholder: "dove (via, città, luogo)",
  countries: "it",
  language: "it",
  //proximity: [12.912952, 43.909735],
  zoom: 12
});

map.addControl(geocoder);

$(".mapboxgl-ctrl-geocoder").insertBefore("#map");


window.onload = function() {
  closeInfoBox.classList.remove('hide');
		if (navigator.geolocation) {
		} else {
			alert("Attiva la geolocalizzazione per partecipare!");
		}

	$('.mapboxgl-ctrl-geocoder').attr('id', 'mapboxGeocoder');
	$('#mapboxGeocoder').css({
		"background": "none",
		"box-shadow": "none",
		"font": "inherit",
		"padding": "0px"
	});
		$('#mapboxGeocoder ul').css({
		"box-shadow": "none"
	});
	$('#mapboxGeocoder input').attr('id', 'place');
	$('#mapboxGeocoder input').attr('class', 'form__input');
	$('#mapboxGeocoder input').attr('form', 'nuovoEvento');
	$('#mapboxGeocoder input').attr('maxlenght', '30');
	$('#mapboxGeocoder input').prop('required', true);
	$('#mapboxGeocoder input').css({
		"color": "#000",
		"font-size": "12px",
		"padding": "0px"
	});
	$('#mapboxGeocoder span').hide();

setTimeout(function () {

}, 3000);
};

  // Restricts input for the given textbox to the given inputFilter.
  function setInputFilter(textbox, inputFilter) {
    ["input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop"].forEach(function (event) {
      textbox.addEventListener(event, function () {
        if (inputFilter(this.value)) {
          this.oldValue = this.value;
          this.oldSelectionStart = this.selectionStart;
          this.oldSelectionEnd = this.selectionEnd;
        } else if (this.hasOwnProperty("oldValue")) {
          this.value = this.oldValue;
          this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
        }
      });
    });
  }


// TEMPO
function tempoOra() {
	var dataOggi = new Date();
	var o = checkTime(dataOggi.getHours());
	var m = checkTime(dataOggi.getMinutes());
	var s = checkTime(dataOggi.getSeconds());
	document.getElementById('clock').innerHTML = o + '<span class="blink">:</span>' + m + '<span class="blink">:</span>' + s;
}

var t = setInterval(tempoOra, 1000);
function checkTime(i) {
	if (i < 10)
		i = "0" + i;
	return i;
}

tempoOra();

	// BARRA PROGRESSO

	function barraProgresso() {
		var barra = document.getElementById('barraProgresso__barra');
		var dataOggi = new Date();
		var o = dataOggi.getHours();
		var m = dataOggi.getMinutes();
		var round = 4.167; // numero moltiplicatore per portare le 24 ore a 100
		var width = Math.floor(o * round);
		var id = setInterval(frame, 1000);
		function frame() {
			if (width >= 100) {
				clearInterval(id);
			} else {
				barra.style.width = width + '%';
			}
		}
	}

	var k = setInterval(barraProgresso, 1000);

	barraProgresso();
