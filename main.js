//Quiz

document.getElementById("btn").addEventListener("click", clicked);

function clicked() {
  // Responses
  let answer1 = document.getElementById("ans1").value.toLowerCase();
  let answer2 = document.getElementById("ans2").value.toLowerCase();
  let answer3 = document.getElementById("ans3").value.toLowerCase();
  let answer4 = document.getElementById("ans4").value.toLowerCase();

  // Correct or Incorrect
  let answer4style = document.getElementById("ans4");
  let answer4feedback = document.getElementById("ques4");

  let answer3style = document.getElementById("ans3");
  let answer3feedback = document.getElementById("ques3");

  let answer2style = document.getElementById("ans2");
  let answer2feedback = document.getElementById("ques2");

  let answer1style = document.getElementById("ans1");
  let answer1feedback = document.getElementById("ques1");

  // Scoring
  let response = document.getElementById("feedback");
  score = 0;
  let percent;

  // Answer 1
  if (answer1 == "twice shy") {
    answer1feedback.innerHTML = `Correct!`;
    answer1feedback.style.color = "seagreen";
    answer1feedback.style.backgroundColor = "lime";
    answer1feedback.style.fontWeight = "bold";

    answer1style.style.backgroundColor = "lime";
    answer1style.style.color = "seagreen";
    score++;
  } else {
    answer1feedback.innerHTML = `Incorrect!`;
    answer1feedback.style.backgroundColor = "red";
    answer1feedback.style.color = "darkred";
    answer1feedback.style.fontWeight = "bold";

    answer1style.style.backgroundColor = "red";
    answer1style.style.color = "darkred";
  }

  // Answer 2
  if (answer2 == "very infrequently" || answer2 == "very rarely") {
    answer2feedback.innerHTML = `Correct!`;
    answer2feedback.style.backgroundColor = "lime";
    answer2feedback.style.color = "seagreen";
    answer2feedback.style.fontWeight = "bold";

    answer2style.style.backgroundColor = "lime";
    answer2style.style.color = "seagreen";
    score++;
  } else {
    answer2feedback.innerHTML = `Incorrect!`;
    answer2feedback.style.backgroundColor = "red";
    answer2feedback.style.color = "darkred";
    answer2feedback.style.fontWeight = "bold";

    answer2style.style.backgroundColor = "red";
    answer2style.style.color = "darkred";
  }

  // Answer 3
  if (answer3 == "bolt from the blue") {
    answer3feedback.innerHTML = `Correct!`;
    answer3feedback.style.backgroundColor = "lime";
    answer3feedback.style.color = "seagreen";
    answer3feedback.style.fontWeight = "bold";

    answer3style.style.backgroundColor = "lime";
    answer3style.style.color = "seagreen";
    score++;
  } else {
    answer3feedback.innerHTML = `Incorrect!`;
    answer3feedback.style.backgroundColor = "red";
    answer3feedback.style.color = "darkred";
    answer3feedback.style.fontWeight = "bold";

    answer3style.style.backgroundColor = "red";
    answer3style.style.color = "darkred";
  }

  // Answer 4
  if (answer4 == "miss the boat") {
    answer4feedback.innerHTML = `Correct!`;
    answer4feedback.style.backgroundColor = "lime";
    answer4feedback.style.color = "seagreen";
    answer4feedback.style.fontWeight = "bol";

    answer4style.style.backgroundColor = "lime";
    answer4style.style.color = "seagreen";
    score++;
  } else if (answer4 == "that ship has sailed") {
    answer4feedback.innerHTML = `Correct!`;
    answer4feedback.style.backgroundColor = "lime";
    answer4feedback.style.color = "seagreen";
    answer4feedback.style.fontWeight = "bold";

    answer4style.style.backgroundColor = "lime";
    answer4style.style.color = "seagreen";
    score++;
  } else {
    answer4feedback.innerHTML = `Incorrect!`;
    answer4feedback.style.backgroundColor = "red";
    answer4feedback.style.color = "darkred";
    answer4feedback.style.fontWeight = "bold";

    answer4style.style.backgroundColor = "red";
    answer4style.style.color = "darkred";
  }

  // Final Score
  percent = (score / 4) * 100;
  document.getElementById("score").innerHTML = `  ${score}/4 || ${percent}% `;

  // Feedback
  if (percent == 25) {
    response.innerHTML =
      "You don't know english idioms at all! Check the link below to learn!";
  } else if (percent == 50) {
    response.innerHTML = "You just barely passed! Study up on your idioms!";
  } else if (percent == 75) {
    response.innerHTML = "Good job, you're almost there!";
  } else if (percent == 0) {
    response.innerHTML =
      "How is this even possible?! Have you been living under a rock?!";
  } else {
    response.innerHTML = "AMAZING! You really know your expressions!";
  }
}
