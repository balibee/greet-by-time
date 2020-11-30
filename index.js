const greetings = require("./greetings.json");

const greet = (name, hour) => {
  let timeOfDay;

  if (hour > 4 && hour < 12) {
    timeOfDay = greet.morningGreetings;
  } else if (hour < 18) {
    timeOfDay = greet.dayGreetings;
  } else {
    timeOfDay = greet.eveningGreetings;
  }

  const greeting = timeOfDay[Math.floor(Math.random() * timeOfDay.length)];

  return `${greeting}, ${name}!`;
};

module.exports = greet;
greet.morningGreetings = greetings.morning;
greet.dayGreetings = greetings.day;
greet.eveningGreetings = greetings.evening;
