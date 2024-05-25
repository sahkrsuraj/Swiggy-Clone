## What is microservice?

Microservices is an architectural style that structures an application as a collection of services. Each of these services is:
 1. independently deployable: Independently deployable refers to the capability of a component or module to be deployed or updated without affecting or requiring changes or deployment of other parts of the application. Such a service has there own source code repository and deployment pipeline 
 2. loosely coupled: Coupling means dependencies of services. There are to types of coupling:
    - run-time coupling: Run-time coupling is the interdependence or connection between services, which means the availability of one service is affected by the availability of another service.
    Example: createOrder() system operation is implemented by an HTTP POST /orders endpoint in the Order Service. The Order Service handles the HTTP POST by invoking other services, waiting for them to response, and then sending a response to its client. In this design, the Order Service cannot respond to the POST request until the other services respond to it. The Order Service (or createOrder() operation) is said to be runtime coupled to those other services. As a result, the availability of the createOrder() operation is reduced since all services must be available.

    - design-time coupling: If two services are loosely coupled, then a change to one service rarely requires a change to the other service. However, if two services are tightly coupled, then a change to one service often requires a change to the other service. These types of lock step changes are expensive since it typically involves breaking API changes.

## What is Monolith architecture?

Monolith architecture is a traditional unified model for designing a software application. It is single-tiered, which means multiple components are combined into one large application. If one component of the program has to be updated, then other components may also require rewriting and the whole application needs to be recompiled and tested. This process is time consuming and may limit the agility of the software development team.

## What is the difference between Monolight and Microservices?

|Monolith|Microservices|
|:-------|:------------|
|It is a traditional software development model that uses one code base to perform multiple functions.|It is an architectural approach that composes a software into small independent components or services.| 
|All the software components in monolith architecture are interdependent as there is data exchange mechanism within the system.|Each component or service performs a specific function and communicates with other services through a well-defined interface.|
|It is time-consuming to modify monolith-architecture as small changes impact large area of the code base, and the entire application is required to be recompile and tested. |As each services is an independent executable unit, they can be updated, modify, tested or deployed independently.|

## Why do we need useEffect Hook?

In context to React, "side effects" refers to any operations that is not related to the output of the component. Common side effects are:
1. DOM Manipulation: Direct manipulation of browser's DOM outside the regular flow of the component's rendering is a side effect as React effectively manages and updates DOM and thus direct manipulation bypasses this mechanism.

2. Asynchronous API calls: Fetch data and rendering the UI is a comonent's objectibe but making the API call is not.

3. Writing Storage
4. I/O operations
5. console.log()

useEffect comes to picture in handling this side effects and operation that is not directly related to component's rendering and not the major objective is achieved through useEffect.

Six different use cases of useEffect:
1. 
```jsx
// if the dependency array is not passs then it runs after every render
// which means useEffect is called on every render
//Run after every render
useEffect(()=>{
    // side-effect
});
```
2. 
```jsx
// if we want to run once after initial render
//Run once after
// Mounting (Initial Render)
useEffect(()=>{
    // side-effect
},[]);
```

3. 
```jsx
//Run only after
// state changes
useEffect(()=>{
    // side-effect
},[state]);
```

```jsx
//eg
import {useState, useEffect} from 'react';

const Greeting = ()=>{
    const[randomNumber, setRandomNumber] = useState(
        Math.floor(Math.random()*5)+1
    );
    cosnt[greeting, setGreeting] = useState("");
    
    useEffect(()=>{
        switch (randomNumber){
            case 1: 
                setGreeting("Hi");
                break;
            case 2: 
                setGreeting("Bonjour");
                break;
            case 3: 
                setGreeting("Welcome!");
                break;
            case 4: 
                setGreeting("Hola");
                break;
            case 5: 
                setGreeting("aloha");
                break;
            default: 
                setGreeting("HELLO");
        }
    },[]);
    return(
        <div className="greeting">
            <h1> Random Greeting! </h1>
            <h2>{greeting}</h2>
        </div>
    )
}

export default Greeting;
```

4. 
```jsx
//Run only after
// props changes
useEffect(()=>{
    // side-effect
},[props]);
```

5. 
```jsx
//Run only after
// props and/or state changes
useEffect(()=>{
    // side-effect
},[props, state]);
```

```jsx
//eg

import {useState, useEffect} from 'react';

const Greeting = (randomMax)=>{
    const[randomNumber, setRandomNumber] = useState(
        Math.floor(Math.random()*5)+1
    );
    cosnt[greeting, setGreeting] = useState("");
    
    useEffect(()=>{
        window.localStorage.setItem("random",randomNumber);
        if(randomMax===randomNumer){
            window.localStorage.setItem("jackpot",true);
        }
        else{
            window.localStorage.setItem("jackpot",false);
        }
        switch (randomNumber){
            case 1: 
                setGreeting("Hi");
                break;
            case 2: 
                setGreeting("Bonjour");
                break;
            case 3: 
                setGreeting("Welcome!");
                break;
            case 4: 
                setGreeting("Hola");
                break;
            case 5: 
                setGreeting("aloha");
                break;
            default: 
                setGreeting("HELLO");
        }
    },[]);
    return(
        <div className="greeting">
            <h1> Random Greeting! </h1>
            <h2>{greeting}</h2>
        </div>
    )
}

export default Greeting;
```

6. 
```jsx
//to clear after the component unmount or before next render
// eg. setTimeOut or storage
useEffect(()=>{
    // side-effect
     
},[props, state]);
```

## What is Optional Chaning?

Optional Chaning (?.) is an operator that accesses an object's property or calls a function. if the object accessed or function called is undefined or null, the expression evaluates to underfined instead of throwing error.

```jsx

const person = {
    name: "Alex",
    cat:{
        name: "Billy",
    },
};

const petName = person.dog?.name;
console.log(petName) //undefined

const walk = person?.petWalk();
console.log(walk) //undefined
```

## What is Shimmer UI?

Shimmer UI is a visual effect in the user interface which is a better way to show loading effect. It is the mimics the layout or the skeletonof the content that will eventually appear without actual content. It uses a gradient animation that produces a shimmering effect over the placeholder, giving the user a sense of process.

## What is the difference between JS expression and JS statement?

All programs in JavaScript are made of statements and they end with semicolons, except block statements which is used to group zero or more statements. Statements are just perform some actions but do not produce any value or output whereas expressions return some value. When interpreter sees an expression it retrieves its value and replaces expression with new value. Statements are used to manipulate those expressions.

## What is Conditional Rendering, explain with a code example?

Conditional Rendering is the practice of rendering or displaying the UI based on certain conditions or states. This allows to create dynamic user interface that can adapt to changes in data or user interaction.

```jsx

import {useState} from 'react';

const App = ()=>{
    const [isClicked, setIsClicked] = useState(false);
    return(
        <div className="display">
        <button className="toggle-btn" onClick={()=>setIsClicked(!isClicked)}>Click</button>
        {isClicked?<p>Is Clicked!</p>:<p>Is Unclicked!</p>}
        </div>
    );
}

export default App;
```

The above example is a "Conditional Rendering" the p tag is rendered based on the state of isClicked.

## What is CORS?

Cross-origin issues or Cross Origin Resource Sharing arises when a web-page from a diffrent origin tries to load or access resources from another. This is asecurity measure to prevent harmful interactions between websites. CORS error occurs when a webpage makes an HTTP request (eg. XMLHttpsRequest or Fetch API) from one domain(origin) to a different domain. If the server that host the resources do not have appropriate CORS header then the web browser will block the request and prevents the JavaScript from loading or executing.

## What is async and await?

"async" is a keyword that is used in front of an asynchronous function. This async function always returns a promise, if a value is returned instead of a promise then that value will be wrapped and returned as promise. async and await is used to handled promises.The keyword "await" is only used in front of the promise that needs to be resolved inside the async func. The difference between the traditional way of resolving promise using then and await is that the JS Engine waits for the promise to resolve in await but not in the case of then.

## What is the use of `const json = await data.json();` in getRestaurants()?

In getRestaurants() the use of `const json = await data.json();` is that data which is the response object of the fetch request, is read as JSON to extract restaurant's information. The "await" keyword indicates that the JS Engine will wait for the response to resolve before proceeding, making the code execution synchronous and allowing us to work with the JSON data obtained from the response.