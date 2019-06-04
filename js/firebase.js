entraButton.classList.add("hide");
// Click entra event listener
entraButton.addEventListener('click', function () {
    firebase.auth().signInAnonymously();
    info.style.display = "none";
  closeInfoBox.classList.remove('hide');
  }, false);

// Database Reference
var database = firebase.database();
var ref = database.ref("eventi");
ref.on("value", prendiDati, erroreDati);

// Get a reference to the storage service, which is used to create references in your storage bucket
var storage = firebase.storage();

// Create a storage reference from our storage service
var storageRef = storage.ref();

// Create a child reference
var imagesRef = storageRef.child('immagini');
// imagesRef now points to 'images'
// Child references can also take paths delimited by '/'

//var filename = 'immaginazione' + n + "jpg";

var audioRef = storageRef.child('audio');

var msgRef = storageRef.child('messaggi');

// Prendi dati
function prendiDati(data) {
	//var a = $("#place").val();
	//console.log(data.val());
	var eventi = data.val();
	var keys = Object.keys(eventi);
	//console.log(keys);
	for (var i = 0; i < keys.length; i++) {
		var k = keys[i];
		var cosa = eventi[k].cosa;
		var place = eventi[k].place;
		var quandoGiorno = eventi[k].giorno;
		var quandoMese = eventi[k].mese;
		var da = eventi[k].from;
		var to = eventi[k].to;
		//console.log(cosa, place, quandoGiorno, quandoMese, da, to);
	}
}

// Errore dati
function erroreDati(err) {
	console.log('Error!')
	console.log(err);
}


// Inserisci evento
$(document).ready(function() {
    if ($('#nuovoEvento').length > 0 ) {
       inserisciEventoFirebase('spaziazioni');
   }
});

function inserisciEventoFirebase(value) {

	// Variabile servizio database
	var database = firebase.database().ref("eventi");
	database.on("value", prendiInfo, erroreInfo);

	// Prendi info
	function prendiInfo(data) {
		var eventi = data.val();
		var keys = Object.keys(eventi);
		var keyLength = keys.length + 1;
		var keyLengthNumero;
		var partecipanti = 1;

		if (keyLength > 9) {
			keyLengthNumero = keyLength;
			$("#keyLengthNumeroCrea").text(keyLengthNumero);
		} else {
				 keyLengthNumero = keyLength;
			$("#keyLengthNumeroCrea").text(keyLengthNumero);
		}

		if (partecipanti > 9) {
			partecipantiNumero = partecipanti;
			$("#partecipantiNumeroCrea").text(partecipantiNumero);
		} else {
			partecipantiNumero = partecipanti;
			$("#partecipantiNumeroCrea").text(partecipantiNumero);
		}

	}
	// Errore info
	function erroreInfo(err) {
		console.log('Error!')
		console.log(err);
	}

		$("#nuovoEvento").submit(function(config) { $(this), console.log("Submit to Firebase");
		//prendiInfo();
    var a = $("#place").val(),
        b = $("#cosa").val(),
        quandoGiorno = parseInt($("#quandoGiorno").val(), 10),
        quandoMese = parseInt($("#quandoMese").val(), 10),
        //quandoGiorno = 17,
        //quandoMese = 2,
        d = $("#daOra").val(),
				e = $("#aOra").val(),
        azioneUno = $("#azioneUno").val(),
        azioneDue = $("#azioneDue").val(),
        azioneTre = $("#azioneTre").val(),
        numero = $("#keyLengthNumeroCrea").text(),
        users = [];

			geocodingClient.forwardGeocode({
				query: a
			})
				.send()
				.then(response => {
					const match = response.body;
					const coordinates = match.features[0].geometry.coordinates;
					var f = {
						place: a,
						cosa: b,
            giorno: quandoGiorno,
            mese: quandoMese,
						from: d,
						to: e,
						partecipanti: 1,
						coordinate: coordinates,
						num: numero,
            a1: azioneUno,
            a2: azioneDue,
            a3: azioneTre,
            users: users
					};
					 return database.push(f).then(function (config) {
						$("#progressoTesto").text("Nuova spaziazione creata!")
						$("#evento").removeAttr("style").fadeOut(3000);
            location.reload();
            //window.open("https://www.spaziazione.me","_self")
						//console.log(textlabels);
          });
				}),
     !1 })
}
