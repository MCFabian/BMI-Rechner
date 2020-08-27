// JavaScript Document

// Set CSS Style for active Gender
femalelabel = document.getElementById("femalelabel");
malelabel = document.getElementById("malelabel");

malelabel.addEventListener("click", function(){
	malelabel.classList.add("genderlabel-active");
	femalelabel.classList.remove("genderlabel-active");
});

femalelabel.addEventListener("click", function(){
	malelabel.classList.remove("genderlabel-active");
	femalelabel.classList.add("genderlabel-active");
});



// Öffentliche Variablen

//var auswertung;
var bmi;

function getGender(){
	var gender;
	if(document.getElementById("female").checked) {
		gender = 1;
	}

	else if (document.getElementById("male").checked){
		gender = 2;
	}

	return gender;
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

function reporter() {
	var hint = document.getElementById("report");
	var agevalue = document.getElementById("age").value;
	var auswertung;

	// Norminalalter = 0
	agedif = agevalue - 0;

	// BMI Skalieren für Vergleich
	reportbmi = bmi - agedif;
	alert(reportbmi + bmi + agedif);

	if(getGender() == 1){
		reportbmi = reportbmi - 1;
		alert("Ja");
		if(reportbmi < 18){
			auswertung = "Dein BMI ist zu klein.";	
		}
		
		else if(reportbmi >= 18 && reportbmi <= 24){
			auswertung = "Alles im grünen Bereich.";

		}
		
		else if(reportbmi > 24){
			auswertung = "Du solltest mehr Sport treiben.";
		}
		alert(auswertung);


	}

	else if(getGender() == 2) {
			if(reportbmi < 19){
				auswertung = "Dein BMI ist zu klein.";	
			}
			
			else if(reportbmi >= 19 && reportbmi <= 24){
				auswertung = "Alles im grünen Bereich.";

			}
			
			else if(reportbmi > 24){
				auswertung = "Du solltest mehr Sport treiben.";
			}
			alert(auswertung);
	}



	hint.innerHTML = auswertung;

}

function reporteroutput() {
	var hint = document.getElementById("hint");

	hint.innerHTML = auswertung;
}

function berechnen(){
	berechnenBMI();
	reporter();
	//reporteroutput();
}