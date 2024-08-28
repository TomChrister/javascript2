const regex = /[abc]/;
console.log(regex.test('apple')); // true (matches 'a')
console.log(regex.test('banana')); // true (matches 'a')
console.log(regex.test('cherry')); // true (matches 'c')
console.log(regex.test('date')); // false (no match)


const regex2 = /[a-z]/;
console.log(regex2.test('apple')); // true (matches 'a')
console.log(regex2.test('Banana')); // true (matches 'a', 'n')
console.log(regex2.test('12345')); // false (no match)


const regex3 = /[a-zA-Z0-9]/;
console.log(regex3.test('apple')); // true (matches 'a')
console.log(regex3.test('Banana')); // true (matches 'B')
console.log(regex3.test('12345')); // true (matches '1')
console.log(regex3.test('!@#$%')); // false (no match)


const regexDigit = /\d/;
console.log(regexDigit.test('123')); // true (matches '1')
console.log(regexDigit.test('abc')); // false (no match)

const regexNonDigit = /\D/;
console.log(regexNonDigit.test('123')); // false (no match)
console.log(regexNonDigit.test('abc')); // true (matches 'a')

const regexWord = /\w/;
console.log(regexWord.test('hello_world123')); // true (matches 'h')
console.log(regexWord.test('!@#$%')); // false (no match)

const regexWhitespace = /\s/;
console.log(regexWhitespace.test('hello world')); // true (matches space)
console.log(regexWhitespace.test('helloworld')); // false (no match)


