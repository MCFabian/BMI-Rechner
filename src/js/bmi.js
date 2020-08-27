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
var bmi;
var underweight;
var optimum = "<div class='hint optimum'><strong>Alles im grünen Bereich</strong><br>Du brauchst dir keine Sorgen machen, dein BMI liegt im grünen Bereich.</div>"; 
var overweight = "<div class='hint underweight'><strong>Übergewicht</strong><br>Du leidest an Übergewicht.</div>";


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
}

function reporter() {
	var agevalue = document.getElementById("age").value;
	var auswertung;

	// Norminalalter = 0
	agedif = agevalue - 0;

	// BMI Skalieren für Vergleich
	reportbmi = bmi - agedif;

	if(getGender() == 1){
		reportbmi = reportbmi - 1;
		if(reportbmi < 18){
			auswertung = underweight;	
		}
		
		else if(reportbmi >= 18 && reportbmi <= 24){
			auswertung = optimum;
		}
		
		else if(reportbmi > 24){
			auswertung = overweight;
		}
	}

	else if(getGender() == 2) {
			if(reportbmi < 19){
				auswertung = underweight;	
			}
			
			else if(reportbmi >= 19 && reportbmi <= 24){
				auswertung = optimum;
			}
			
			else if(reportbmi > 24){
				auswertung = overweight;
			}
	}
	
	var poster = document.getElementById("report");
	poster.innerHTML = auswertung;
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}

// Reporter Output vars


function berechnen(){
	berechnenBMI();
	underweight = "<div class='hint underweight'><div>" +bmi +"</div><div></div><strong>Untergewicht</strong><br>Du leidest an Untergewicht.</div>"; 

	reporter();
}

