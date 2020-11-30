const greet = require("./index");

test("check for string output", () => {
  const expectedOutput = "string";
  const actualOutput = greet("Jill", 5);
  expect(typeof actualOutput).toBe(expectedOutput);
});

test("display morning greeting if morning", () => {
  const greetMessage = greet("Jill", 5);
  expect(greet.morningGreetings).toContain(
    greetMessage.substring(0, greetMessage.length - 7)
  );
});

test("display day greeting if day", () => {
  const greetMessage = greet("Jill", 13);
  expect(greet.dayGreetings).toContain(
    greetMessage.substring(0, greetMessage.length - 7)
  );
});

test("display evening greeting if evening", () => {
  const greetMessage = greet("Jill", 20);
  expect(greet.eveningGreetings).toContain(
    greetMessage.substring(0, greetMessage.length - 7)
  );
});
