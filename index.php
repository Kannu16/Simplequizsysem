<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<link rel="stylesheet" href="css/style.css" />
	<link rel="stylesheet" href="css/all.min.css" />
	<title>Document</title>
</head>

<body>
	<div class="nav-content">
		<img src="image/kannulogo.jpg" class="logo" id="home-logo">
		<h1 class="quiz-text">Kannu Quiz System</h1>
	</div>
	<form name="login" class="mt-5" method="POST">
		<h4 class="user-name">User Login</h4>
		<div class="input-box"> <span><i class="my-icon fas fa-user"></i></span> 
			<input type="text" placeholder="Username" value="admin" name="username" id="username" required />
		</div>
		<div class="input-box"> <span><i class="my-icon fas fa-lock"></i></span> 
			<input type="password" placeholder="Password" id="password" name="password" required />
		</div>
		<button type="submit" id="submit-btn" class="btn-register" onClick="check(this.form)">NEXT</button>
	</form>
	<script>
		function check(form) {if(form.username.value=="admin"&&form.password.value=="admin") {alert("login success");window.open("quizRules.php");} else {alert("Invalid username or password")}};
	</script>
	<script src="js/jquery.js"></script>
	<script src="js/all.min.js"></script>
	<script src="js/jquery.passwordstrength.js"></script>
	<script type="text/javascript">
		$(function(){$("#password").passwordStrength();});
	</script>
	<script>
		document.getElementById("home-logo").onclick=function(){location.href="index.php"};
	</script>
</body>

</html>