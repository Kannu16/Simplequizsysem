<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<link rel="stylesheet" href="css/quiz-box.css" />
	<title>Quiz Rules</title>
	<style>
		
    .agree{
    color: hsl(258, 83%, 45%);;
}

	</style>
</head>


<body onload="disableSubmit()">
	<div class="nav-content">
		<img src="image/kannulogo.jpg" class="logo" id="home-logo">
		<h1 class="quiz-text">Kannu Quiz System</h1>
	</div>
	<div class="quiz-box">
		<div class="quiz-header">
			<h3>Rules and regulations for the Quiz</h3>
		</div>
		<div class="quiz-regulations">
			<p>1. Quiz will contain total 20 questions.</p>
			<p>2. Without selecting the answer submitted as a wrong answer</p>
			<p>3. No half marks will be awarded.</p>
			<p>4. Each question has 4 options.</p>
			<p>5. Do not refresh the page.</p>
			<p>6. Final score will be shown after the submission of the quiz.</p>
			<p>7. Do not move out of the quiz window else your quiz will be auto submitted.</p>
			<div class="check-box">
				<input type="checkbox" name="terms" id="terms" onchange="activateButton(this)" /> <span class="agree"> I Agree Terms & Conditions</span>
				<input type="submit" name="submit" id="submit" />
			</div>
		</div>
	</div>
	<script>
		function disableSubmit(){document.getElementById("submit").disabled=true;} function activateButton(element){if(element.checked){document.getElementById("submit").disabled=false;}else{document.getElementById("submit").disabled=true;}} document.getElementById("submit").onclick=function(){location.href="quiz.php"};
	</script>
	<script>
		document.getElementById("home-logo").onclick=function(){location.href="index.php"};
	</script>
</body>

</html>