# React Testing

### Filename Conventions

- Files with `.test.js` or `.test.tsx` suffixes in `src` folder will be picked up by Jest automatically.
- Files with `.spec.js` or `.spec.tsx` suffixes in `src` folder will be picked up by Jest automatically.
- Files with `.js` or `.tsx` suffixes in `__tests__` folder will be picked up by Jest automatically.

Recommendation is to always put your tests next to the code they are testing so that relative imports appear shorter. For example, if `App.tsx` has a test, it should be placed in `App.test.tsx` next to the component.

### Code Coverage

A metric that can help you understand how much of your software code is tested

- **Statement coverage**: how many of the statements in the software code have been executed
- **Branches coverage**: how many of the branches of the control structures (if statements for instance) have been executed
- **Function coverage**: how many of the functions defined have been called and finally
- **Line coverage**: how many lines of code have been executed
