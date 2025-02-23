function greet(person: string): string {
  return `Hello, ${person}!`;
}

function printTwice(message: string): void {
  console.log(message);
  console.log(message);
}

printTwice(greet('world'))

// this works but the following doesn't

// const res = greet('world')
// printTwice(res)