## What are different types for testing?
Testing can be broadly classified into: 

1. Manual Testing: Manually testing the functionality of each components and feature like search bar, cart feature.

2. Automatic Testing: Write test cases to test the functionality.
  a. Unit Testing: Test a specific part like a component in isolation with tets cases.

  b. Integration Testing: Testing components that are related and changes to one cause changes to another like search can change retaurant body and selection of restaurant changes cart page.

  c. End to end Testing:  writing testcases from user enters into the website to user leaves the website

## What is Enzyme?
Enzyme is a popular testing utility used primarily for React applications. Enzyme is often used in combination with testing frameworks like Jest, Mocha, or Jasmine to write unit tests, integration tests, and end-to-end tests for React applications. It helps developers ensure that their React components behave as expected under different scenarios and conditions.

## Enzyme vs React Testing Library?

1. Component-Focused Testing: Enzyme provides a component-centric testing approach. It allows you to test React components in isolation by rendering them into a virtual DOM and providing utilities to interact with and assert on the component's output.
While React Testing Library:
User-Centric Testing: React Testing Library encourages a user-centric testing approach. It focuses on testing components as users would interact with them, emphasizing testing behavior rather than implementation details.

2. Shallow and Full DOM Rendering: Enzyme offers different rendering modes, including shallow rendering, which renders only the component itself without its children, and full DOM rendering, which renders the component and its children into a simulated DOM environment.
While React Testing Library:
DOM-Based Testing: React Testing Library promotes testing components as they would be used in a real application, encouraging full DOM rendering. It discourages accessing a component's internal state and methods directly, advocating for testing components through their public API.

## What is Jest and why do we use it?

1. Simple Setup: Jest comes pre-configured with many sensible defaults, requiring minimal setup to get started with testing. This makes it easy for developers to start writing tests without spending a lot of time on configuration.

2. Fast and Parallel Execution: Jest is designed to run tests quickly, utilizing parallelization to maximize performance. This is particularly useful for projects with large test suites, allowing developers to get rapid feedback on the codebase's health.

3. Built-in Features: Jest provides a comprehensive set of features out of the box, including assertion libraries, mocking utilities, code coverage reporting, and snapshot testing. These built-in functionalities streamline the testing process and reduce the need to rely on external libraries or tools.