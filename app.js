const correctAnswers = ['B', 'B', 'B', 'B'];
const form = document.querySelector('.quiz-form');
const showResult = document.querySelector('.result');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  let score = 0;
  const userAnswers = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value,
  ];

  // check answers
  userAnswers.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
      score += 25;
    }
  });
  // console.log(score);
  // show result of poll
  scrollTo(0, 0);
  // showResult.querySelector('span').textContent = `${score}%`;
  showResult.classList.remove('d-none');

  let output = 0;
  const timer = setInterval(() => {
    showResult.querySelector('span').textContent = `${output}%`;
    if (output === score) {
      clearInterval(timer);
    } else {
      output++;
    }
  }, 10);
});

// console.log('hello');
// document.querySelector('form');
// console.log(form);
// setTimeout(() => {
//   alert('hello ninjas');
// }, 5000);
// setInterval

// let i = 0;
// const timer = setInterval(() => {
//   console.log('hello');
//   i++;
//   if (i === 5) {
//     clearInterval(timer);
//   }
// }, 1000);
