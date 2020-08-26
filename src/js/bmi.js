// JavaScript Document

// Deklarieren Sie zwei öffentliche Variablen "auswertung" und "bmi"

function berechnenBMI(){
	// Berechnen Sie hier den BMI.
	// Formel: Gewicht in kg / (Größe in cm/100 * Größe in cm/100)
	// Der BMI soll nur auf zwei Nachkommastellen berechnet werden.
	// Nutzen Sie dazu die Anweisung: bmi = bmi.toFixed(2);
}

function auswertungMann(){
	// Werten Sie hier den BMI für Männer aus.
	// Beispiel: Auswertung Mann, Alter 19-24
	if(document.getElementById('alter').value == 0){
		if(bmi < 19){
			auswertung = "Dein BMI ist zu klein.";	
		}
		
		if(bmi > 18 && bmi < 25){
			auswertung = "Alles im grünen Bereich.";
		}
		
		if(bmi > 24){
			auswertung = "Du solltest mehr Sport treiben.";
		}	
		
	}
}

function auswertungFrau(){
	// Werten Sie hier den BMI für Frauen aus.
}

function berechnen(){
	// Berechnen Sie hier den BMI, unterscheiden dabei zwischen Mann und Frau und geben Sie das Ergebnis aus.
	// Sie können zur Ausgabe ein "alert" nutzen oder ein zusätzliches Textfeld in Ihrem Dokument einfügen.
	// Hinweis: Da Sie für die Berechnung und Auswertung schon eigene Funktionen haben, können Sie diese hier einfach aufrufen,
	// z.B.: "berechnenBMI();"
}