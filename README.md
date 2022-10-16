# Understanding TypeScript - 2022 Edition

A [Udemy](https://www.udemy.com/) course by Maximilian Schwarzmüller
Click [here](https://www.udemy.com/course/understanding-typescript/) to see the course.

## Table of Contents

- [Understanding TypeScript - 2022 Edition](#understanding-typescript---2022-edition)
  - [Table of Contents](#table-of-contents)
  - [Section 1: Getting Started](#section-1-getting-started)
    - [What is TypeScript & Why Should You Use It?](#what-is-typescript--why-should-you-use-it)
    - [Installing & Using TypeScript](#installing--using-typescript)
    - [TypeScript Advantages - Overview](#typescript-advantages---overview)
  - [Section 2: TypeScript Basics & Basic Types](#section-2-typescript-basics--basic-types)
    - [Using Types](#using-types)
    - [TypeScript Types vs. JavaSCript Types](#typescript-types-vs-javascript-types)
    - [Type Casing](#type-casing)
    - [Working with Numbers, Strings and Booleans](#working-with-numbers-strings-and-booleans)
    - [Type Assignment & Type Inference](#type-assignment--type-inference)
  - [Section 3: The TypeScript Compiler (and its Configuration)](#section-3-the-typescript-compiler-and-its-configuration)
  - [Section 4: Next-generation JavaScript & TypeScript](#section-4-next-generation-javascript--typescript)
  - [Section 5: Classes & Interfaces](#section-5-classes--interfaces)
  - [Section 6: Advanced Types](#section-6-advanced-types)
  - [Section 7: Generics](#section-7-generics)
  - [Section 8: Decorators](#section-8-decorators)
  - [Section 9: Modules & Namespaces](#section-9-modules--namespaces)

## Section 1: Getting Started

### What is TypeScript & Why Should You Use It?

[transcript](/assets/transcripts/1.01.what_is_typescript_and_why_should_you_use_it.txt)

What is TypeScript?

- JavaScript superset[^1]
- makes JavaScript code easier and more powerful
- one huge disadvantage
  - cannot be executed by JavaScript environments like the browser

What's the idea behind TypeScript then?

- TypeScript is a programming language, but it's also a tool
  - powerful compiler which you run over your code to compile your TypeScript code to JavaScript code
  - the compiler compiles these new features to JavaScript workarounds
- TypeScript does one important thing: it adds types
  - actually gives the developer an opportunity of identifying errors in the code earlier before your script runs and the errors at runtime in the browser

So why use TypeScript?

```javascript
function add(num1, num2) {
  return num1 + num2;
}

console.log(add('2', '3')); // '23'
```

### Installing & Using TypeScript

_js_only.js_

```javascript
const button = document.querySelector('button');
const input1 = document.getElementById('num1'); // string
const input2 = document.getElementById('num2'); // string

const add = (num1, num2) => {
  if (num1 === 'number' && num2 === 'number') {
    return num1 + num2;
  } else {
    return +num1 + +num2; // convert to number
  }
};

button.addEventListener('click', () =>
  console.log(add(input1.value, input2.value))
);
```

_use-ts.ts_

```typescript
const button = document.querySelector('button');
const input1 = document.getElementById('num1')! as HTMLInputElement;
const input2 = document.getElementById('num2')! as HTMLInputElement;

const add = (num1: number, num2: number) => num1 + num2;

button.addEventListener('click', () =>
  console.log(add(+input1.value, +input2.value))
);
```

### TypeScript Advantages - Overview

TypeScript adds:

- Types
  - have to be way more explicit about how things work
  - avoid many unexpected & unnecessary errors by using TypeScript
  - using modern IDEs which have built in TypeScript support which can pick up on these types and give us better auto-completion & built in errors which show before we even compile the code because they also understand TypeScript
- Next-generation JS features (compiled down to older browsers)
- Also adds certain features which only TS can understand
  - interfaces
  - generics
  - can't be compiled down to JS but don't need to be because they are features that help us during development that give us cleaner errors and help us avoid even more errors
- Gives us certain meta-programming features
  - decorators
- Higly configurable
- Modern tooling that helps even in non-TS projects
  - IDEs are able to use some TS features under the hood with out you explicitly using TS

## Section 2: TypeScript Basics & Basic Types

### Using Types

**Core Types**

- number: 1, 5.3, -10
  - all numbers, no differentiation between integersor floats
- string: 'Hi', "Hi", `Hi`
  - all text values
- boolean: true, false
  - just these two, no "truthy" or "falsey" values

```typescript
const add = (n1: number, n2: number) => n1 + n2;

const num1 = 5;
const num2 = 2.8;

const result = add(num1, num2);

console.log(result);
```

TypeScript only helps us during compilation. This means TypeScript's type system only helps during development (i.e. before code gets compiled)

:heavy_exclamation_mark: Remember browsers do not have built in support for TS

> :paperclip: **NOTE**: don't have a TS file open along with its JS file - could cause errors fo duplicate functions

### TypeScript Types vs. JavaSCript Types

```typescript
const add = (n1: number, n2: number) => {
  // console.log('n1:', typeof n1);
  // console.log('n2:', typeof n2);

  // JavaScript way
  // if (typeof n1 !== 'number' || typeof n2 !== 'number') {
  //   throw new Error('Incorrect input!');
  // }

  return n1 + n2;
};

const number1 = 5;
const number2 = 2.8;

const result = add(number1, number2);
console.log(result);
```

JS is dynamically typed (variables can switch types at anytime, resolved at runtime)

TS is statically typed (variables are declared a type and must always be that type during the life of the app running, set during development)

### Type Casing

> **:heavy_exclamation_mark: Important: Type Casing**
>
> In TypeScript, you work with types like `string` or `number` all the time.
>
> **:heavy_exclamation_mark: Important**:
>
> It is `string` and `number` (etc.), **NOT** `String`, `Number`, etc.

**The core primitive types in TypeScript are all lowercase!**

### Working with Numbers, Strings and Booleans

- as in JS, there is no difference between integers like the five here and floats or doubles
- all numbers are floats by default

example: No difference between 5 and 5.0

### Type Assignment & Type Inference

```typescript
function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  const result = n1 + n2;
  if (showResult) {
    console.log(phrase + result);
  } else {
    return result;
  }
}

const number1 = 5; // type inference
const number2 = 2.8;
const printResult = true;
const resultPhrase = 'Result is: ';

add(number1, number2, printResult, resultPhrase);
```

- in the main part of the code (not in a function), if you declare a variable and initialize it to a value, (`const number1 = 5;`) TS uses type inference to understand that `number1` will always be of type `number`.
- that is not to say that you cannot assign a type to the variable `number1` in the main part of the code, you just don't need to
- here is how it would look if you did `let number1: number = 5;`
  - however, this is redundant and not considered to be good practice
- now, if you declare a variable but don't initialize it right off, then you should explicitly assign a type to it (`let number1: number;`)

## Section 3: The TypeScript Compiler (and its Configuration)

## Section 4: Next-generation JavaScript & TypeScript

## Section 5: Classes & Interfaces

## Section 6: Advanced Types

## Section 7: Generics

## Section 8: Decorators

## Section 9: Modules & Namespaces

[^1]: A programming language that contains all the features of a given language and has been expanded or enhanced to include other features as well.
