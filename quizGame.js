"use strict";

/* PLANNING / PSEUDOCODE

1. Initialize score = 0 */

let score = 0;

/*
2. Question 1: What year is it? */

   // -Variable name personalized to question (no answer1)


//6. Math: How will I calculate the percentage? Add one to score every correct answer and divide by 5 after the last question

//7. Final feedback logic (if / else if / else):

// Question 1 -----------------------------------------------------------------
let math1 = prompt("Solve: 5 + 3 = ", "");
const mathAns1 = 8;
if (math1 == mathAns1){
    Alert("Great Job!");
} else if (math1 <= mathAns1) {
    Alert("Just a little higher");
} else {
    Alert("Well, being wrong can be a learning experience sometimes");
}


// Question 2 ------------------------------------------------------------------------
let math2 = prompt("Solve: 10 - 4 = ", "");
const mathAns2 = 6;
if (math2 == mathAns2){
    Alert("Great Job!");
} else if (math2 <= mathAns2) {
    Alert("Just a little higher");
} else {
    Alert("Well, being wrong can be a learning experience sometimes");
}


// Question 3 --------------------------------------------------------------------
let math3 = prompt("Solve: 4 x 3 = ", "");
const mathAns3 = 12;
if (math3 == mathAns3){
    Alert("Great Job!");
} else if (math3 <= mathAns3) {
    Alert("Just a little higher");
} else {
    Alert("Well, being wrong can be a learning experience sometimes");
}


// Question 4 --------------------------------------------------------------------
let math4 = prompt("Solve: 20 / 5 = ", "");
const mathAns4 = 4;
if (math4 == mathAns4){
    Alert("Great Job!");
} else if (math1 <= mathAns1) {
    Alert("Just a little higher");
} else {
    Alert("Well, being wrong can be a learning experience sometimes");
}


// Question 5 --------------------------------------------------------------------
let year = prompt("What year is it? ", "");
const yearAns = 2026;
if (year == yearAns){
    Alert("Good job!");
    score++;
} else if (year >= 2026) {
    Alert("Greetings time traveller");
} else {
    Alert("You lie for fun and it shows.");
}



// Calculate percentage using math
let finalScore = score/5;

// Final feedback using if / else if / else
if (finalScore == 1)
{
    Alert("Perfect Score");
} else if (finalScore >= 0.6){
    Alert("Not Bad");
} else {
    Alert("Yikes");
}

