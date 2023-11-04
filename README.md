# React Testing

### What to test?

- Test component renders
- Test component renders with props
- Test component renders in different states
- Test component reacts to events

### What not to test?

- Implementation details
- Third party libraries (unless you are testing your own wrapper)
- Code that is not important from a user point of view

### Filename Conventions

- Files with `.test.js` or `.test.tsx` suffixes in `src` folder will be picked up by Jest
  automatically.
- Files with `.spec.js` or `.spec.tsx` suffixes in `src` folder will be picked up by Jest
  automatically.
- Files with `.js` or `.tsx` suffixes in `__tests__` folder will be picked up by Jest automatically.

Recommendation is to always put your tests next to the code they are testing so that relative
imports appear shorter. For example, if `App.tsx` has a test, it should be placed in `App.test.tsx`
next to the component.

### Code Coverage

A metric that can help you understand how much of your software code is tested

- **Statement coverage**: how many of the statements in the software code have been executed
- **Branches coverage**: how many of the branches of the control structures (if statements for
  instance) have been executed
- **Function coverage**: how many of the functions defined have been called and finally
- **Line coverage**: how many lines of code have been executed

```json
{
  "scripts": {
    "coverage": "npm test -- --coverage --watchAll=true --collectCoverageFrom='src/components/**/*.{ts,tsx}' --collectCoverageFrom='!src/components/**/*.{types,stories,constants,test,spec}.{ts,tsx}'"
  },
  "jest": {
    "coverageThreshold": {
      "global": {
        "branches": 80,
        "functions": 80,
        "lines": 80,
        "statements": 80
      }
    }
  }
}

```

### RTL (React Testing Library) Queries

Every test we write generally involves the following base steps:

1. Render the component
2. Find an element rendered by the component
3. Assert against the element found in step 2 which will pass or fail the test

To render the component, we use the render method from RTL

For assertion, we use expect passing in a value and combine it with a matcher function from jest or
jest-dom

### Priority Order for Queries

"Your test should resemble how users interact with your code (component, page, etc.) as much as
possible"

The priority order for queries is as follows:

1. getByRole
2. getByLabelText
3. getByPlaceholderText
4. getByText
5. getByDisplayValue
6. getByAltText
7. getByTitle
8. getByTestId

### RTL `getBy` and `getAllBy` Queries

| getBy                | getAllBy                |
|----------------------|-------------------------| 
| getByRole            | getAllByRole            |
| getByLabelText       | getAllByLabelText       |
| getByPlaceholderText | getAllByPlaceholderText |
| getByText            | getAllByText            |
| getByDisplayValue    | getAllByDisplayValue    |
| getByAltText         | getAllByAltText         |
| getByTitle           | getAllByTitle           |
| getByTestId          | getAllByTestId          |

