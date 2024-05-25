## Q1. What is the difference between Named export, Default export and * as export ?

1. <u>Named export</u> : We can use named export to explicitly specify which variable or function to be exported from a module. A single module can have multiple named export.

In the exporting module:

```jsx
export const name = {userName};
export const handleClick = ()=>{
  console.log("Clicked");
}
```

In the importing module:

```jsx
import {name, handleClick} from './nameOfExportingModule';
```

2. <u>Default export</u> : A module has only one default export. Both named export and default export can be used within a single module.

In the exporting module:

```jsx
const Header = ()=>{
  return(
    <div className="headerContainer">
      <div className="title">Welcome!!</div>
    </div>
  );
}

export default Header;
```

In the exporting module:

```jsx
import Header from './nameOfExportingModule';
```

3. <u>* as Syntax(Namespace)Import*</u> : The * as syntax is used to import all exports from a module as properties of a single object. All the exports from the exporting module can be accessed as propterties in the importing module.

In the exporting module:

```jsx
// named export
export const name = {userName};
export const handleClick = ()=>{
  console.log("Clicked");
}
// default export
const Header = ()=>{
  return(
    <div className="headerContainer">
      <div className="title">Welcome!!</div>
    </div>
  );
}

export default Header;
```

In the exporting module:

```jsx
import * as myModule from './nameOfExportingModule';

console.log(myModule.name);
console.log(myModule.handleClick());
console.log(myModule.default);
```

## Q2. What is the importance of config.js file ?

The config.js file is a common practice for organizing configuration settings, utility functions or constant in a centralized file. It consists of configuration setting for the application which includes environment-specific variables, API endpoints, database connection strings and other settings that may need to be easily configurable without modifying the actual code. It also exports constants and functions that are reusable.

## Q3. What are React hooks?

React hooks are JavaScript functions that enables functional components to have state and lifecycle features. Before the introduction of hooks, only class components are the means of managing state and lifecycle methods in React.

Some of the commonly used hooks are: 

1. useState: It allows functional components to manage state. It is a function that takes one argument which is the initial state of the component and returns an array of two elements: the current state value and a function to update the state.

```jsx
import React, {useState} from 'react';

const CountClick = ()=>{
  const [count,setCount] = useState(0);
  const updateCount=()=>{
    setCount(count+1);
  }
  return(
    <div>
      <p> You have click {count} times.</p>
      <button onClick={updateCount}>Click me </button>
    </div>
  );
}

export default CountClick;
```

2. useEffect: it allows functional components to use lifecycle methods. It is used for side effects in components, such as data fetching, subscriptions, or manually changing the DOM. It has two arguments a callback function and a dependency array, the callback func will be called after the component is rendered.

```jsx
import React, {useEffect} from 'react';

export const Component = ()=>{
  useEffect(()=>{
    console.log('Component did mount');

    return ()=>{
      console.log('Component will unmount');
    };
  },[]);

  return(
    <div> Component </div>
  );
}
```

## Q4. Why do we need useState Hook?

We need useState hook because of the following :

1. <u>Functional components with state</u>: useState enables functional components to have local state. It enables funtional components to handle and manage its own state, making them more versatile.

2. <u>Immutable state</u>: The state return by useState is immutable which means that to update the state value , we need to call the function return by useState with the new state value. This helps in avoiding unintentional side effects and makes state management more predictable.