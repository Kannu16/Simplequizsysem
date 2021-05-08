const quizDB = [{
	question: "Q1: What was the official name of the first World Cup?",
	a: "Fsesset world cup",
	b: "georgesp world cup",
	c: "Typocrscy world cup",
	d: "Prudential World Cup.",
	ans: "ans4",
}, {
	question: "Q2: Who was ‘the Man of the match’ in the 1975 World Cup final?",
	a: "Mike Denness ",
	b: "Clive Lloyd.",
	c: "Glenn Turner. ",
	d: "Ian Chappell.",
	ans: "ans2",
}, {
	question: "Q3: What was total number of matches played in the 1975 World Cup?",
	a: "Thirteen.",
	b: "Fourteen.",
	c: "Fifteen.",
	d: "Sixteen.",
	ans: "ans3",
}, {
	question: "Q4:India achieved its first Test victory against Australia in?",
	a: "calcutta",
	b: "Mumbai",
	c: "Hydrabad",
	d: "Kanpur",
	ans: "ans4",
}, {
	question: "Q5: In 2009 Indian Premier League who got the title of Player of the series?",
	a: "Adam Gilchrist",
	b: "Sachin Tendulkar",
	c: "Robin Uthappa",
	d: "Shane Watson",
	ans: "ans1",
}, {
	question: "Q6: Which cricketer had scored fastest century in ODI cricket?",
	a: "Vivian Richards",
	b: "Corey Anderson",
	c: "Shahid Afridi",
	d: "AB de Villiers",
	ans: "ans4",
}, {
	question: "Q7: Which player scored most runs in IPL (2009)?",
	a: "Sanath Jaysuriya",
	b: "Sachin Tendulkar",
	c: "Matthew Hayden",
	d: "Virender Sehwag",
	ans: "ans3",
}, {
	question: "Q8: Which cricketer has bowled the most number of dot balls in the IPL?",
	a: "Praveen Kumar",
	b: "Lasith Malinga",
	c: "Harbhajan Singh",
	d: "Sunil Narine",
	ans: "ans3",
}, {
	question: "Q9: Which company replaced DLF as the new title sponsor in 2013 IPL?",
	a: "PepsiCo",
	b: "Hindustan Unilever",
	c: "Nokia",
	d: "Patanjali",
	ans: "ans1",
}, {
	question: "Q10: Which International star performed in the opening ceremony of 2013 IPL?",
	a: "Jennifer Lopez",
	b: "Akon",
	c: "Pitbull",
	d: "None of the above",
	ans: "ans4",
}, {
	question: "Q11: Which team won the 2014 Indian Premier League tournament?",
	a: "Kolkata Knight Riders",
	b: "Chennai Super Kings",
	c: "Deccan Chargers",
	d: "Royal Challengers Bangalore",
	ans: "ans1",
}, {
	question: "Q12: Which team won Indian Premier League 2010?",
	a: "Chennai Super Kings",
	b: "Kolkata Knight Riders",
	c: "Deccan Chargers",
	d: "Delhi Daredevils",
	ans: "ans1",
}, {
	question: "Q13: Who hit the first century of IPL 2012?",
	a: "Adam Gilchrist",
	b: "Ajinkya Rahane",
	c: "Virat Kohli",
	d: "Ambati Rayudu",
	ans: "ans2",
}, {
	question: "Q14: Who holds the infamous record of most number of ducks in IPL 2012?",
	a: "Manish Pandey",
	b: "Munaf Patel",
	c: "Morne Morkel",
	d: "None of the above",
	ans: "ans1",
}, {
	question: "Q15: Who hit the longest six in fifth edition of IPL?",
	a: "Chris Gayle",
	b: "Yusuf Pathan",
	c: "MS Dhoni",
	d: "None of the above",
	ans: "ans4",
}, {
	question: "Q16: Which team won the IPL (2013)?",
	a: "Mumbai Indians",
	b: "Kolkata Knight Riders",
	c: "Royal Challengers Bangalore",
	d: "Delhi Daredevils",
	ans: "ans1",
}, {
	question: "Q17: In IPL 2010, who was the most Fan-Friendly Cricketer?",
	a: "Adam Gilchrist",
	b: "Virat Kohli",
	c: "Rohit Sharma",
	d: "Lasith Malinga",
	ans: "ans1",
}, {
	question: "Q18: In IPL 2010, who gave the best Debut Performance?",
	a: "Kieron Pollard",
	b: "Yusuf Pathan",
	c: "Rohit Sharma",
	d: "Ambati Rayudu",
	ans: "ans4",
}, {
	question: "Q19: Which cricketer has taken most catches in ODI cricket?",
	a: "Ricky Ponting",
	b: "Mahela Jayawardene",
	c: "Rohit Sharma",
	d: "Mark Waugh",
	ans: "ans2",
}, {
	question: "Q20: Which team won the IPL (2009)?",
	a: "Deccan Chargers",
	b: "Chennai Super Kings",
	c: "Kolkata Knight Riders",
	d: "Delhi Daredevils",
	ans: "ans1",
}, ];
const question = document.querySelector(".question");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
const submit = document.querySelector("#submit");
const previous = document.querySelector("#previous");
const answers = document.querySelectorAll(".answer");
const showScore = document.querySelector("#showscore");
let questionCount = 0;
let score = 0;
const loadQuestion = () => {
	const questionList = quizDB[questionCount];
	question.innerHTML = questionList.question;
	option1.innerHTML = questionList.a;
	option2.innerHTML = questionList.b;
	option3.innerHTML = questionList.c;
	option4.innerHTML = questionList.d;
};
loadQuestion();
const getCheckAnswer = () => {
	let answer;
	answers.forEach((curAnsElem) => {
		if (curAnsElem.checked) {
			answer = curAnsElem.id;
		}
	});
	return answer;
};
const deselectAll = () => {
	answers.forEach((curAnsElem) => (curAnsElem.checked = false));
};
submit.addEventListener("click", () => {
	const checkedAnswer = getCheckAnswer();
	if (checkedAnswer == quizDB[questionCount].ans) {
		score++;
	}
	questionCount++;
	deselectAll();
	if (questionCount < quizDB.length) {
		loadQuestion();
	} else {
		showScore.innerHTML =`<h4 class="percentage-score">Your result percentage ${(score/quizDB.length)*100}%</h4><br><br><table class="GeneratedTable"><tbody><tr><td>Total number of Questions</td><td>${quizDB.length}</td></tr><tr><td class="wright-score">Total number of Correct Answer</td><td>${score}</td></tr><tr><td class="wrong-score">Total number of Wrong Answer</td><td>${quizDB.length-score}</td></tr></tbody></table><button class="btn"onclick="location.reload()">Try again</button>`;
		showScore.classList.remove("scorearea");
    if(score == quizDB.length){
     const score = window.open("congrats.php");
    }
	}
});