<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<link rel="stylesheet" href="css/style1.css" />
	<title>Quiz website</title>
</head>
<style>
	table.GeneratedTable{width:100%;background-color:#fff;border-collapse:collapse;border-width:2px;border-color:#fc0;border-style:solid;color:#000}table.GeneratedTable td, table.GeneratedTable th{border-width:2px;border-color:#fc0;border-style:solid;padding:3px;font-size:2rem}table.GeneratedTable thead{background-color:#fc0}.quiz-text{margin-left:30%;font-family:monospace;font-size:3rem}.previous{padding:1rem 3rem;outline:none;font-size:2rem;cursor:pointer;border:none;color:#fff;background-color:hsl(258,83%,45%);margin-top:4rem;border-radius:50px}.wrong-score{color:#dc143c;position:relative;margin:1rem}.wright-score{color:#228b22;position:relative;margin:1rem}
</style>

<body>
	<div class="nav-content">
		<img src="image/kannulogo.jpg" class="logo" id="home-logo">
		<h1 class="quiz-text">Kannu Quiz System</h1>
	</div>
	<div class="container">
		<div class="content-part">
			<h2 class="question">Question Comes here</h2>
			<ul>
				<li>
					<input type="radio" name="answer" id="ans1" class="answer" />
					<label for="ans1" id="option1">Answer Option</label>
				</li>
				<li>
					<input type="radio" name="answer" id="ans2" class="answer" required />
					<label for="ans2" id="option2">Answer Option</label>
				</li>
				<li>
					<input type="radio" name="answer" id="ans3" class="answer" required />
					<label for="ans3" id="option3">Answer Option</label>
				</li>
				<li>
					<input type="radio" name="answer" id="ans4" class="answer" required />
					<label for="ans4" id="option4">Answer Option</label>
				</li>
			</ul>
			<button id="previous" class="previous">PREV</button>
			<button id="submit">NEXT</button>
			<div id="showscore" class="scorearea"></div>
		</div>
	</div>
	<script>
		document.getElementById("home-logo").onclick=function(){location.href="index.php"};
	</script>
	<script src="js/index.js"></script>
	<script></script>
</body>

</html>