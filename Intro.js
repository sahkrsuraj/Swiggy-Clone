import React from 'react';
import ReactDOM from 'react-dom';

const content="Hello World from React!";
const heading = React.createElement("h1",{id:"heading"},content);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

console.log(heading);
// ************
// React.createElement returns an object
// It has 3 args
// 1st args --> element to be created
// 2nd args --> props
// 3rd args --> textContent of the element created or the child
// *************

// nested html
// <div id="parent">
//   <div id="child">
//     <h1>Nested HTML Content</h1>
//   </div>
// </div>
// ********

const parent = React.createElement("div",{id:"parent"},
              React.createElement("div",{id:"child"},
              [React.createElement("h1",{id:"child1"},"Nested HTML Content"),
              React.createElement("h2",{id:"child2"},"Sibling")]));
root.render(parent);
// if my root has already html content it will be replaced by root.render()
// root.render() replace the content of the root and not append to it

console.log(parent);