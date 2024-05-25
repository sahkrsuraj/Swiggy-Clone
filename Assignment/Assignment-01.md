## What is Emmet?
Emmet is a web development tool and abbreviation engine that helps web developers and designers write HTML and CSS code more quickly and efficiently. It's a plugin or feature that can be integrated into various text editors and integrated development environments (IDEs).

## What is the difference between Library and Framework?

- A library is a collection of pre-written functions, classes, and procedures that can be used by a developer to perform common tasks or operations. Libraries are typically designed to be reusable, and they provide specific functionality or utility functions. Developers can choose to use specific components of a library in their application. It's more like a "take what you need" approach.

- A framework is a more comprehensive and structured pre-built environment or architecture for developing applications.
Frameworks provide a complete structure for building an application, including the organization of code, the flow of control, and the use of certain design patterns.
Developers work within the framework's constraints and extend or customize it to build their application.

- The technical difference between a framework and a library is defined by a concept known as inversion of control. When you use a library, you control the application flow, including when and where to contact the library. When you use a framework, the framework itself controls the flow.



## What is CDN? Why do we use it?

- Lets say I have a website and users from all around the world, the farther the user the website gets slower and increases traffic for the website as different user access it simultaneoulsy. To solve this problem we use CDN(Content Delivery Network), to improve the performance and availability of the website while reducing load on the origin server.

- So CDN is a network of geographically distributed servers that work together to deliver web content. When a user requests a web page the CDN helps deliver the content by serving it from a server that is physically closer to the user, reducing load time.

## Why is React called React?

- React is called React because of its core feature which is the ability to react or response dynamically to changes in data.

## What is cross-origin in the script tag?

- Cross-origin issues or Cross Origin Resource Sharing arises when a web-page from a diffrent origin tries to load or access resources from another. This is asecurity measure to prevent harmful interactions between websites. CORS error occurs when a webpage makes an HTTP request (eg. XMLHttpsRequest or Fetch API) from one domain(origin) to a different domain. If the server that host the resources do not have appropriate CORS header then the web browser will block the request and prevents the JavaScript from loading or executing.

- Thus, cross-origin in the script tag refers to the security policy enforced by the web browsers that prevents the webpage from loading or executing script from a different domain. Adding this attribute defines how the browser will handle CORS related behavior.

## What is the difference between React and ReactDom?

1) <u>React</u>:
    - React is the core library for building user interfaces in JavaScript. It provides logic and structure to build components based on its states and props. React is used in various rendering environment and not just web browsers.

2) <u>ReactDOM</u>: 
    - ReactDom is the binding between React and web browser's DOM. It takes the React component and renders it into DOM of the web browser. It updates the actual HTML element of the web pageon the virtual DOM representation maintained by React.

## What is the diffreence between react.development.js and react.production.js ?

1) <u>react.development.js</u>: It is used in development phase. The file size is larger as it containes error maessages and warning which is helpful in debugging. It gives detailed error messages in the browsers's console and warnings about best practices and potential issues.

2) <u>react.production.js</u>: It is used in production. The file size is smaller as it does not contain error messages and warnings, but this results in more optimized and faster runtime for the application.

## What are async and defer?

async and defer are attributes that can be added to HTML script tags to control how scripts are loaded and executed in web pages. They are commonly used to improve page loading performance and ensure that scripts do not block the rendering of the page.

1) <u>async</u>: 

    - When you include the async attribute in a script tag, the browser will begin to download the script file in the background while the HTML parsing and rendering continue.
  
    - The script is executed as soon as it's downloaded, even if the HTML parsing is not yet complete. This means that the script can be executed out of order, and it may not have access to the DOM elements that appear after the script tag in the HTML.

    - async is useful for non-essential scripts that can run independently and do not need to wait for the HTML to be fully parsed.

2) <u>defer</u>: 

    - When you include the defer attribute in a script tag, the browser will also download the script file in the background, but it will not execute the script until the HTML parsing is complete.

    - Scripts with the defer attribute will be executed in the order they appear in the HTML, just before the DOMContentLoaded event is fired.

    - defer is ideal for scripts that rely on the DOM being fully parsed and for maintaining the order of script execution.


## Code:

```jsx
const content="Hello World from React!";
const heading = React.createElement("h1",{id:"heading"},content);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
```

<!-- nested html
<div id="parent">
 <div id="child">
  <h1>Nested HTML Content</h1>
 </div>
</div> -->

```jsx
const parent = React.createElement("div",{id:"parent"},
            React.createElement("div",{id:"child"},
            [React.createElement("h1",{id:"child1"},"Nested HTML Content"),
            React.createElement("h2",{id:"child2"},"Sibling")]));
root.render(parent);
```