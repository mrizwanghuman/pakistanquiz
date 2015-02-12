function removeButton() {
 var elem = document.getElementById('buttonClass');
 elem.parentNode.removeChild(elem);
}

var pos = 0, test, test_status, question, choice, choices, 
chA, chB, chC, correct=0;

var questions = [
["What is the meaning of Pakistan?", "Muslim Land", "Land of five rivers","Holy Land","C"],
["Who is the first Governor General of Pakistan?", "Mohammed Ali Jinnah", "Liaquat Ali Khan","Iskander Mirza","A"],
["What was the major event of 1971?", "Bangladesh broke away from Pakistan", "Explosion of nuclear bomb", "Nawaz Sharif became Prime Minister", "A"],
[ "When Musharraf overthrew the government of Nawaz Sharif what designation did he take?", "Dictator", "Prime Minister", "Chief Executive", "C"],
["In which year did Pakistan win the Cricket World Cup?", "1987", "1992", "1996", "B"],
[" When did Pakistan win Olympic gold medal in Hockey for the first time?",  "1952", "1960", "1964", "B"],
[ "Which party was in power in North West Frontier Province at the time of independence?",  "Muslim League",  "Congress", "Communist Party", "B"]

];
function _(x){
	return document.getElementById(x);
}

function renderQuestion(){
	test=_("test");
	if(pos >= questions.length){
		test.innerHTML ="<h2> You got " + correct + " of " + questions.length + " questions correct</h2>";
		_("test_status").innerHTML = "Test completed";
		pos= 0;
		correct = 0;
		return false;
	}
	_("test_status").innerHTML = "Question " + (pos + 1 ) + "of " +questions.length;
	question = questions[pos][0];
	chA = questions[pos][1]; 
	chB = questions[pos][2]; 
	chC = questions[pos][3];
	test.innerHTML = "<h3>"+question+"</h3>";
	test.innerHTML += "<div class='parahQuestion'>Choice A: <input type='radio' name='choices' value='A' class='big'> " + chA + '</div>';
	test.innerHTML += "<div class='parahQuestion'>Choice B: <input type='radio' name='choices' value='B' class='big'> " + chB + '</div>';
	test.innerHTML += "<div class='parahQuestion'>Choice C: <input type='radio' name='choices' value='C' class='big'> " + chC + '</div>';
	test.innerHTML += "<button class='button' onclick='checkAnswer()'> Submit Answer </button> ";

}
function checkAnswer(){
   choices = document.getElementsByName("choices");
   for(var i=0; i < choices.length; i++){
      if(choices[i].checked){
   choice = choices[i].value;

}
} 
if (choice == questions[pos][4]){
   correct++;

   }
   pos++;
   renderQuestion();
}

// $(".button").click(function(){
// $(".mainParah .button").html()
// });
/********************************************
Creat a quiz program-


********************************************/
