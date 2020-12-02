# Greet By Time
[![Coverage Status](https://coveralls.io/repos/github/balibee/greet-by-time/badge.svg?branch=main)](https://coveralls.io/github/balibee/greet-by-time?branch=main)
[![Build Status](https://travis-ci.com/balibee/greet-by-time.svg?branch=main)](https://travis-ci.com/balibee/greet-by-time)


Greet By Time is a simple greeting generator which displays a unique, randomized greeting to the user based on the time of day.

![greet-by-time](https://user-images.githubusercontent.com/30849213/100917906-13851080-34d8-11eb-9f14-a4db2874fa9b.gif)


## Installation

```bash
$ npm i greet-by-time
```

## Usage

To use it, simply require it as any other npm module.

```js
const greet = require("greet-by-time");
```

Here's an example of how to greet a user in an app, passing the user's name as the first parameter and the hour in the second parameter.

```js
const hour = new Date().getHours();

console.log(greet("Jill", hour));

// Output: Wakey, wakey, Jill!
```

To customize the greetings, you just need to add a line like below. There are three categories of greetings: morning, day and evening.

```js
greet.morningGreetings = ["Hola", "Buenos dias"];
greet.dayGreetings = ["Hola", "Buenos dias"];
greet.eveningGreetings = ["Hola", "Buenos dias"];
```

### Time Definitions

Time is based on a 24 hour clock. Below are the times I've set as morning, day and evening. I will add functionality later so these times can be customized.

- Mornings hours are between 4:00 and 12:00

- Day hours are between 12:00 and 18:00

- Evening hours are between 18:00 and 4:00

### Greetings

Below are the default greetings, which can be customized as shown above.

```js
{
  "morning": [
    "Good morning",
    "Wakey, wakey",
    "Guten Morgen",
    "Rise and shine",
    "Morning",
    "Top of the morning to you",
    "Have a great day",
    "Look alive"
  ],

  "day": [
    "Hiya",
    "Hi",
    "Guten Tag",
    "Good afternoon",
    "Howdy",
    "Buenos dias",
    "G'day",
    "Hello there"
  ],

  "evening": [
    "Good evening",
    "Nice to see you",
    "Hellooooo",
    "Konbanwa",
    "Enjoy the rest of your evening",
    "Fancy seeing you here",
    "Hi there",
    "It's late. Time to rest"
  ]
}
```

## Contributing

Any suggestions are welcome. If you can think of other ways to greet someone, feel free to open a pull request!

## License

MIT License

Copyright (c) 2020 Regina Boebner

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
