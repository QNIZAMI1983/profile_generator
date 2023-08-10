//require the readline function
const readline = require('readline');

//create a user Interface with readline
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// store all your questions in an array to be iterated upon later by readline
const questions = [
  "What's your name? Nicknames are also acceptable :)",
  "Where are you from?",
  "What's your favorite color?",
  "Tell me about your hobbies.",
  // Add more questions as needed
];

//create empty object to store answers
const answers = {};

//prompt questions through iteration over questions array
function promptQuestion(index) {
  if (index === questions.length) {
    // All questions answered, generate the narrative paragraph
    generateNarrative();
    rl.close();
    return;
  }

  const question = questions[index];

  rl.question(question + ' ', (answer) => {
    answers[index] = answer;
    promptQuestion(index + 1);
  });
}

function generateNarrative() {
  console.log(`\nHere's your narrative paragraph:\n`);
  let narrative = `Hello, my name is ${answers[0]}. I'm from ${answers[1]}.`;
  narrative += ` My favorite color is ${answers[2]} and in my free time, I enjoy ${answers[3]}.`;
  console.log(narrative);
}

promptQuestion(0);
