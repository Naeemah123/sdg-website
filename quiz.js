
const submitBtn = document.getElementById('submit-btn');
const result = document.getElementById('result');
const scoreDisplay = document.getElementById('score-display');

submitBtn.addEventListener('click', function() {
  let score = 0;

  // Question 1
  const answer1 = document.querySelector('input[name="q1"]:checked');
  if (answer1 && answer1.value === 'b') {
    score++;
    document.getElementById('feedback1').textContent = "Correct! SDG 4 aims to ensure inclusive and equitable quality education.";
  } else {
    document.getElementById('feedback1').textContent = "Incorrect. The correct answer is 'B) Ensure inclusive and equitable quality education'.";
  }

  // Question 2
  const answer2 = document.querySelector('input[name="q2"]:checked');
  if (answer2 && answer2.value === 'b') {
    score++;
    document.getElementById('feedback2').textContent = "Correct! SDG 13 focuses on climate action.";
  } else {
    document.getElementById('feedback2').textContent = "Incorrect. The correct answer is 'B) SDG 13'.";
  }

  // Question 3
  const answer3 = document.querySelector('input[name="q3"]:checked');
  if (answer3 && answer3.value === 'b') {
    score++;
    document.getElementById('feedback3').textContent = "Correct! SDG 12 aims to ensure sustainable consumption and production.";
  } else {
    document.getElementById('feedback3').textContent = "Incorrect. The correct answer is 'B) Ensure sustainable consumption and production'.";
  }

  // Question 4
  const answer4 = document.querySelector('input[name="q4"]:checked');
  if (answer4 && answer4.value === 'a') {
    score++;
    document.getElementById('feedback4').textContent = "Correct! SDG 10 aims to reduce inequality.";
  } else {
    document.getElementById('feedback4').textContent = "Incorrect. The correct answer is 'A) SDG 10'.";
  }

  // Question 5
  const answer5 = document.querySelector('input[name="q5"]:checked');
  if (answer5 && answer5.value === 'a') {
    score++;
    document.getElementById('feedback5').textContent = "Correct! SDG 14 aims to protect life below water.";
  } else {
    document.getElementById('feedback5').textContent = "Incorrect. The correct answer is 'A) Protect life below water'.";
  }

  scoreDisplay.textContent = "Your score: " + score;

  let message;
  if (score >= 3) {
    message = "Great job! You have a good understanding of the SDGs.";
  } else if (score >= 2) {
    message = "You have a basic understanding of the SDGs. Review the information again.";
  } else {
    message = "Let's learn more about the SDGs. Check the resources provided.";
  }

  result.textContent = message;
});
