## Is JSX mandatory for React?

No, JSX is not mandatory for React as we can build UI structures with the use of core React. But it is recommended to use JSX because of the following reasons:

1. Readability and Conciseness : JSX helps building complex UI structure much easier with its syntax resemblance with HTML or XML. It helps developers to avoid errors, making it more readable and maintainable.

2. JavaScript Expression : JSX allows embedding JavaScript expressions within curly braces { }. It helps in incoreparating logics and dynamic values directly into UI.

3. Integration with JavaScript Ecosystem : Tools like Babel can transpiled JSX into regular JavaScript which browsers can understand.

## Is ES6 mandatory for React?

ES6 is not mandatory for React, React does not require a specific version for JavaScript. But it is recommended because of the following advantages :

1. Arrow Functions : ES6 introduces arrow functions syntax ,which is more concise than regular function expressions. Arrow functions are used in React for defining functional components and methods.

2. let and const : ES6 introduces <b>'let'</b> and <b>'const'</b> for variable declaration, which are block-scopes. This prevents problems associated with <b>'var'</b>.

3. Classes : ES6 provides much clearer syntax for defining React class components as compared to the older way of using 'createClass' method.

4. Destructuring : ES6 allows destructuring of objects and arrays. Destructuring is widely used in React components props and states.

5. Spread operator : ES6 spread operator is useful for copying arrays and objects, it is used commonly for spreading React props and states.

6. Template literal : ES6 template literal makes string interpolation much easier. It is useful when defining dynamic content in JSX.

## How to write comments in JSX ?

JSX comments is similar to JavaScript comments. For single-line comment '//' and multi-line comment '/* */'

```jsx
// this is a single-line comment

/* this is
multi-line
comment */
```

## What is <React.Fragment></React.Fragment> and <></> ?

In React, when a component's render method returns an element, React expects it to be a single root element. It helps React to efficiently update and manipulate the DOM. Which meant that a component much return a single parent element. All the JSX of a component must be wrapped inside a parent div, but if we don't want to use an extra parent div then another alternative is to use <React.Fragment></React.Fragment> where <></> is short-hand or empty tag fragment.

```jsx
const CardComponent = ()=>{
  return(
    <div className="parent">
      <h1>Card</h1>
      <p>Welcome to the mart!</p>
    </div>
  )
}

// or

const CardComponent = ()=>{
  return(
    <React.Fragment>
      <h1>Card</h1>
      <p>Welcome to the mart!</p>
    </React.Fragment>
  )
}

// or
const CardComponent = ()=>{
  return(
    <>
      <h1>Card</h1>
      <p>Welcome to the mart!</p>
    </>
  )
}
```

## What is Virtual DOM ?

- Virtual DOM (Document Object Model) is a programming concept used in React which main advantage is optimization thereby improving the performance of the web application.

- Browser maintains a tree-like data structure called DOM which represents the structure of the HTML document. Manipulating this real DOM is costly in terms of performance.

- React introduces Virtual DOM which is a lightweight copy of the Real DOM, it mirrors the structure of the Real DOM.

- When component's state and props changes React do not directly update the Real DOM, but it first updates the Virtual DOM. Then React undergoes a process call reconciliation which is to identify the differences between the current Virtual DOM and the previous one.

- After identifying the differences during the diffing process, React finds the best way to update the Real DOM thereby reducing the number of manipulation. React also allows batch update, which means instead of updating the Real DOM one component at a time, React groups multiple changes and apply all the changes to the Real DOM in one update, this also reduces the number of updates and hence improves performance.

## What is Reconciliation in React ?

Reconciliation in React is a process of identifying differences between the current Virtual DOM and the previous one when component's state or props changes. When the differences is identified the actual DOM is then updated.

## What is React Fiber ? 

React Fiber is an internal implementation details of the React library. Before React Fiber, the reconciliation process was performed using stack-based algorithm which has its limitations when dealing with asynchronous updates and handling complex component tree. To handle this limitations React Fiber is introduced, which is a complete reimplementation of the algorithm for handling Virtual DOM.Fiber is the name of the data-structure used in the new algorithm.

## Why we need keys in React ? When do we need keys in React ?

Keys are important for identifying or keeping a track of individual components or elements in a list. Here are some reasons :

1. Identifying components in a list : When we render a list of components a unique key is required for each components. This helps React to identify different components and to efficiently update DOM.

2. Reconciliation : Keys help React's reconciliation algorithm to optimize updates. When React needs to update a list, it compares keys of the new components with the existing components, thus helps updating efficiently.

3. Avoiding rendering issues : Without keys we might encounter rendering issues.

## Can we use index as keys in React ?

Using index as keys in React is not recommended as it might cause rendering issues. If the list is static and the components do not have unique identifier then using index as keys may not cause issue. But if he list is dynamic which means items can be added, removed or reordered then using index as keys will cause rendering issues as React might reuse incorrect components.

## What is props in React ?

props are informations that are passed to a React components. props allows us to pass data from parent component to child component. props are immutable which means their values cannot be change within the components that recieve them. We can pass any data like the attributes of HTML (src, className, etc) or JavaScript values including objects, arrays and functions.

```jsx
// ways of recieving props
// 1.
const Card = (props)=>{
  return (
    <>
      <h1>{props.heading}</h1>
      <p>{props.content}</p>
      <p>{props.statement}</p>
    </>
  );
}

// 2. Destructuring Directly in Function Parameters
const Card = ({heading, content, statement})=>{
  return (
    <>
      <h1>{heading}</h1>
      <p>{content}</p>
      <p>{statement}</p>
    </>
  );
}

// 3. Destructuring inside the Function
const Card = ({props})=>{
  const {heading, content, statement} = props;
  return (
    <>
      <h1>{heading}</h1>
      <p>{content}</p>
      <p>{statement}</p>
    </>
  );
}

const Container = ()={
  return(
    const message = "Select a cuisine of your choice...";
    <Card 
      heading="Restaurant"
      content="Welcome"
      statement={message}
    />
  );
}
```
## What is a Config Driven UI ?

Config Driven UI is a technique which allows us to create a User Interface which layouts and contents are defined based on the configuration file like JSON. It makes the UIs more dynamic and cutomizable instead of hard coding them.