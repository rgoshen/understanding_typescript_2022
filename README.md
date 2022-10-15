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

## Section 3: The TypeScript Compiler (and its Configuration)

## Section 4: Next-generation JavaScript & TypeScript

## Section 5: Classes & Interfaces

## Section 6: Advanced Types

## Section 7: Generics

## Section 8: Decorators

## Section 9: Modules & Namespaces

[^1]: A programming language that contains all the features of a given language and has been expanded or enhanced to include other features as well.
