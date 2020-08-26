// JavaScript Document

// Deklarieren Sie zwei öffentliche Variablen "auswertung" und "bmi"

var gender; // 1 = Female, 2 = Male

function getGender(){
	if(document.getElementById("female").checked) {
		var gender = 1;
	}

	else if (document.getElementById("male").checked){
		var gender = 2;
	}

	alert(gender);
}

function berechnenBMI(){
	// Daten holen
	var weight = document.getElementById("weight").value;
	var size = document.getElementById("size").value;

	// BMI errechenn
	bmi = parseInt(weight) / ((parseInt(size) / 100) * (parseInt(size) / 100));
	bmi = bmi.toFixed(2);

	// Dev Ausgabe
	alert(bmi);
}

function auswertungMann(){
	// Werten Sie hier den BMI für Männer aus.
	// Beispiel: Auswertung Mann, Alter 19-24
	if(document.getElementById('age').value == 0){
		if(bmi < 19){
			auswertung = "Dein BMI ist zu klein.";	
		}
		
		if(bmi > 18 && bmi < 25){
			auswertung = "Alles im grünen Bereich.";

		}
		
		if(bmi > 24){
			auswertung = "Du solltest mehr Sport treiben.";
		}
		alert(auswertung);
	}
}

function auswertungFrau(){
	if(document.getElementById('age').value == 0){
		if(bmi < 18){
			auswertung = "Dein BMI ist zu klein.";	
		}
		
		if(bmi > 17 && bmi < 24){
			auswertung = "Alles im grünen Bereich.";

		}
		
		if(bmi > 23){
			auswertung = "Du solltest mehr Sport treiben.";
		}
		alert(auswertung);
	}
}

function berechnen(){

	berechnenBMI();
	alert("BMI" +bmi);

	if(document.getElementById("female").checked) {
		var gender = 1;
	}

	else if (document.getElementById("male").checked){
		var gender = 2;
	}

	if(gender == 1){
		alert("Female");
		auswertungFrau();
	}

	else if (gender == 2){
		alert("Male");
		auswertungMann();
	}

	// Berechnen Sie hier den BMI, unterscheiden dabei zwischen Mann und Frau und geben Sie das Ergebnis aus.
	// Sie können zur Ausgabe ein "alert" nutzen oder ein zusätzliches Textfeld in Ihrem Dokument einfügen.
	// Hinweis: Da Sie für die Berechnung und Auswertung schon eigene Funktionen haben, können Sie diese hier einfach aufrufen,
	// z.B.: "berechnenBMI();"
}