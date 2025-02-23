function greet(person: string): string {
  return `Hello, ${person}!`;
}

function printTwice(message: string | void): void {
  if (message) {
    console.log(message);
    console.log(message);
  }
}

printTwice(greet('world'))

const res = greet('world')
printTwice(res) 