/*
Alex Johannes 10/11/26


variable: myName
type: let
exp: 

variable: myColor
type: const
exp: a single input 

variable: myFood
type: array
exp: I have multiple favorite foods and it would be beneficial to give multiple entries

variable: myAnimal
type: const
exp: I have one and it's not changing

variable: mySeason
type: const
exp: one singular entry

variable: myAge
type: let
exp: entry changes annually

variable: status
type: let
exp: entry may need update in future

*/

let myName = "Alex Johannes";
const myColor = "red";
let myFood = ["Korean Bugolgi Beef", "Roast Beef"];
const myAnimal = "Penguin";
const mySeason = "Fall/Autumn";
let myAge = 23;
let status = "active";

/*
Which could have wrong var?
 - myAge could be misjudged to be static
 - the mistake could be that creator thinks age will be single static entry, whereas
 it will actually update every year, making production a headache if for an actual site.

*/

console.log("Hello, my name is " + myName + ", with the age of " + myAge + ", and some of my favorite meals include" + myFood[0] + " and " + myFood[1] + ". Judging by my proclivity for the autumnal, my favorite color coincidentally happens to be " + myColor + ", being only natural with my favored season being " + mySeason + ", which my choice of animal, the" + myAnimal + ", would not thrive during, and because of my student status being '" + status + "', I wouldn't be able to take care of them.");

/*

 1. Which data type was easiest to choose? Why?
  - The easiest to choose was my favorite animal, as it hasn't changed in years and the overall appeal of penguins never truly wanes in my heart.
 2. Which variable was hardest to decide a data type for?
  - Favorite food was the hardest, as it's hard to pick my favorite
 3. What happens if a number is stored as a string in JavaScript?
  - it will be treated as a string and will only be concatenated when using '+'.
 4. Why is it helpful to plan data types before coding?
 - you won't know if the data will need to be mutable entirely.

*/