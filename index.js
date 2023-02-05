const { fifaData } = require('./fifa.js');

// ⚽️ M  V P ⚽️ //

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 1: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Practice accessing data by console.log-ing the following pieces of data note. 

    "Year": 1930,
    "Datetime": "13 Jul 1930 - 15:00",
    "Stage": "Group 1",
    "Stadium": "Pocitos",
    "City": "Montevideo",
    "Home Team Name": "France",
    "Home Team Goals": 4,
    "Away Team Goals": 1,
    "Away Team Name": "Mexico",
    "Win conditions": "",
    "Attendance": 4444,
    "Half-time Home Goals": 3,
    "Half-time Away Goals": 0,
    "Referee": "LOMBARDI Domingo (URU)",
    "Assistant 1": "CRISTOPHE Henry (BEL)",
    "Assistant 2": "REGO Gilberto (BRA)",
    "RoundID": 201,
    "MatchID": 1096,
    "Home Team Initials": "FRA",
    "Away Team Initials": "MEX"

💡 HINT: You may want to filter the data first 😉*/

const year2014 = fifaData.filter((team) => {
  return team['Year'] === 2014 && team['Stage'] === 'Final';
});
console.log(year2014);

//(a) Home Team name for 2014 world cup final
console.log('a', year2014[0]['Home Team Name']);

//(b) Away Team name for 2014 world cup final

console.log('b', year2014[0]['Away Team Name']);

//(c) Home Team goals for 2014 world cup final
console.log('c', year2014[0]['Home Team Goals']);

//(d) Away Team goals for 2014 world cup final
console.log('d', year2014[0]['Away Team Goals']);

//(e) Winner of 2014 world cup final */

console.log('e', year2014[0]['Win conditions']);

// console.log(winner2014);

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 2: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Use getFinals to do the following:
1. Receive an array as a parameter that will take the fifa data as its argument
2. Return an array of objects with the data of the teams that made it to the final stage

💡 HINT - you should be looking at the stage key inside of the objects
*/

function getFinals(arr) {
  /* code here */
  const teamFinals = arr.filter((team) => {
    return team['Stage'] === 'Final';
  });

  return teamFinals;
}

console.log(getFinals);

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 3: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher-order function called getYears to do the following: 
1. Receive an array as the first parameter that will take fifaData as an argument
2. Receive a callback function as the second parameter that will take getFinals from task 2 as an argument
3. Return an array called years containing all of the years in the getFinals data set*/

function getYears(arr, cb) {
  /* code here */
  const newArr = cb(arr);
  const years = newArr.map((team) => {
    return team['Year'];
  });
  return years;
}

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 4: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher-order function getWinners to do the following:  
1. Receive an array as the first parameter that will take fifaData as an argument
2. Receive a callback function as the second parameter that will take getFinals from task 2 as an argument
3. Determines the winner (home or away) of each `finals` game. 
💡 HINT: Don't worry about ties for now (Please see the README file for info on ties for a stretch goal.)
4. Returns the names of all winning countries in an array called `winners` */

function getWinners(/* code here */) {
  /* code here */
}

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 5: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Use the higher-order function getWinnersByYear to do the following:
1. Receive an array as the first parameter that will take fifaData as an argument
2. Receive a callback function as the second parameter that will take getFinals from task 2 as an argument
3. Receive a callback function as the third parameter that will take getYears from task 3 as an argument
4. Receive a callback function as the fourth parameter that will take getWinners from task 4 as an argument
5. Return an array of strings that say "In {year}, {country} won the world cup!" 

💡 HINT: the strings returned need to exactly match the string in step 4.
 */

function getWinnersByYear(/* code here */) {
  /* code here */
}

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 6: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher order function `getAverageGoals` to do the following: 
 1. Receive a callback function as a parameter that will take `getFinals` (from task 2) as an argument; ensure you pass in `fifaData` as its argument
 
 💡 HINT: Example of invocation: `getAverageGoals(getFinals(fifaData));`

 2. Calculate the AVERAGE number of the TOTAL home team goals AND TOTAL away team goals scored PER MATCH

 3. Round to the second decimal place and return the value
 
 💡 HINT: use .reduce, .toFixed (refer to MDN for syntax), and do this in 2 steps) 
 
*/

function getAverageGoals(/* code here */) {
  /* code here */
}

/// 🥅 STRETCH 🥅 ///

/* 💪💪💪💪💪 Stretch 1: 💪💪💪💪💪 
Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {
  /* code here */
}

/* 💪💪💪💪💪 Stretch 2: 💪💪💪💪💪 
Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {
  /* code here */
}

/* 💪💪💪💪💪 Stretch 3: 💪💪💪💪💪
Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {
  /* code here */
}

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */

/* 🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑 */
function foo() {
  console.log('its working');
  return 'bar';
}
foo();
module.exports = {
  foo,
  getFinals,
  getYears,
  getWinners,
  getWinnersByYear,
  getAverageGoals,
};
