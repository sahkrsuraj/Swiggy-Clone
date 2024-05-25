## What is JSX ?

JSX is the syntax-extension of JavaScript, it looks similar to HTML or XML syntax but can be used with JavaScript. It is used with React to simplify the React UI component in a more readable format.

## React.createElement VS JSX ?

1. <b><u>React.createElement</u></b> : React.createElement is a function in React that is used to create React elements, it returns an object. It has three arguments:
  - type :- This represents the type of HTML element (like div, h1, span, etc) or React components (a class, function ,etc) that needs to be created.

  - props :- Props is an objects that contains the properties or attributes that are to be assign to the React element.
  Example : id, className, key, etc

  - children :- This is the content that will be placed inside the element that is to be created. It may be a string, React element or an array of React elements.

This is how React.createElement is used to create an element --

```javaScript
const card = React.createElement(
  "div",{className: "pricePackage"},
  [
  React.createElement("h1",{className:"heading"},"Premium Package"),
  React.createElement("p",{className:"price"},"$10 for 1 Year")
  ]
);
```
```html
<!-- Output-->
<div class="pricePackage">
  <h1 class="heading">Premium Package</h1>
  <p class="price">$10 for 1 Year</p>
</div>
```

2. <b><u>JSX</u></b> : JSX is the syntax-extension of JavaScript, it looks similar to HTML or XML syntax but can be used with JavaScript. It is used with React to simplify the React UI component in a more readable format.

This is how JSX is used to create an element --

```jsx
const card = (
<div className="pricePackage">
  <h1 className="heading">Premium Package</h1>
  <p className="price">$10 for 1 Year</p>
</div>
);
```
```html
<!-- Output-->
<div class="pricePackage">
  <h1 class="heading">Premium Package</h1>
  <p class="price">$10 for 1 Year</p>
</div>
```


Both React.createElement and JSX gives the same output but the React UI component creation is simplified with the use of JSX.

## Behind the Scenes of JSX ?

JSX is a syntax-extension of JavaScript, it is used along with JavaScript. The JS engines in browsers do not understand JSX. It is transpiled into JavaSciprt by a tool "Babel" which is used by bundlers like Webpack, Parcel, etc. Babel at build-time transforms JSX into a series of React.createElement calls, which create React elements.

## Advantages of JSX ?

1. <b><u>Readability and Maintainability</u></b> : JSX syntax is similar to HTML, which makes the code more readable and maintainable for developers to understand the UI structure.

2. <b><u>Integration with JavaScript</u></b> : JSX allows embedding JavaScript expressions directly within curly braces {}.

```jsx
const heading = "Welcome to React!";
const header = <h1>Hello, {heading}</h1>;
// output
// Hello, Welcome to React!
```

3. <b><u>Component composition</u></b> : JSX supports the composition of React components. Components can be nested and reuse to create a complex UI by combining simple components.

## What are components ?

Components are reuseable blocks of code that are the fundamental structure for building the user interface. There are two types of components - functional components and class components.

1. Functional components : These are JavaScript functions that takes props as arguments and return React elements, they are stateless components.

```jsx
function Card (){
  return (
    <div>
      <h1>Premium Package</h1>
      <p> $10 for 1 year</p>
    </div>
  );
}
```

2. Class components: These are components that manages its own states and lifecycle. They extends React.Component class and have a render menthod that return React element.

```jsx
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  render() {
    return <p>Count: {this.state.count}</p>;
  }
}
```

## What is the role of type attribute in script tag ? What options can I use there?

The 'type' attribute in script tag is to specify the scripting language of the embedded code. It helps browser to correctly interprete and execute the script.

The most commonly use values of 'type' attribute are:

1. <u>empty or omitted</u> : If the type attribute is omitted or the value is not specified than the browser automatically assumes that the script is JavaScript by default.

2. <u>JavaScript</u> : We can explicitly mention type as JavaScript but it is not necessary as the browser by defalut assume the script as JavaScript.

3. <u>Module</u> : Module are way to organise and structure JavaScript code in a more reusable and maintainable manner that can be use to import and export. 

``` html
<script type="module">
    // JavaScript module code here
</script>
```

## {TitleComponent} vs `<TitleComponent/>` vs  `<TitleComponent> </TitleComponent>` in JSX?

1. {TitleComponent} : In JSX, JavaScript can be embedded within {}. If "TitleComponent" is a variable or an expression that evaluates to a React component, it will be rendered.

2. `<TitleComponent/>`: It is a self-closing tag syntax for rendering React component. It is equivalent to writing `<TitleComponent> </TitleComponent>`. It is used for stateless functional components or class components.

3. `<TitleComponent> </TitleComponent>`: It represents the opening and closing tags of a React component. It is used to render some contents or child components within the opening and closing tags.

## Code:

```jsx
// using React.createElement()
const container = React.createElement("div",{className:"title"},
  [
    React.createElement("h1",{},"This is header1"),
    React.createElement("h2",{},"This is header2"),
    React.createElement("h3",{},"This is header3")
  ]
);

// using jsx
const containerJSX = (
<div className='title'>
  <h1>This is header1</h1>
  <h2>This is header2</h2>
  <h3>This is header3</h3>
</div>
);

// using functional component
const TitleComponent = ()=>{
  return (
    <div className='title'>
      <h1>This is header1</h1>
      <h2>This is header2</h2>
      <h3>This is header3</h3>
    </div>
  );
}

// passing attributes into tag
const TitleComponentTag = ({header1,header2,header3})=>{
  return (
    <div className='title'>
      <h1>{header1}</h1>
      <h2>{header2}</h2>
      <h3>{header3}</h3>
    </div>
  );
}
root.render(<TitleComponentTag
            header1="This is header1 with tag"
            header2="This is header2 with tag"
            header3="This is header3 with tag"/>);

// component composition
const ParaComponent = ()=>{
  return (
    <p>This is a para</p>
  );
}

const TitleComponent = ()=>{
  return (
    <div className='title'>
      <h1>This is header1</h1>
      <h2>This is header2</h2>
      <h3>This is header3</h3>
      <ParaComponent/>
    </div>
  );
}
root.render(<TitleComponent);

// {TitleComponent} vs `<TitleComponent/>` vs  `<TitleComponent> </TitleComponent>` in JSX

root.render({<TitleComponent});
root.render(<TitleComponent/>);
root.render(<TitleComponent>
<p> These are headers </p>
 <TitleComponent/>
);

// header component
const HeaderComponent = ()=>{
  return(
    <div className='header'>
      <img src='https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg' alt='bird' className='logo'/>
      <input type='text' placeholder='Search...' className='searchBar' />
      <img src='https://cdn-icons-png.flaticon.com/128/260/260236.png' alt='person' className='icon'/>
    </div>
  );
}

root.render(<HeaderComponent/>);
```

```css
/* style for header component */
body{
  margin: 0;
  padding: 0;
}

.header{
  background-color: beige;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 1rem;
}

.logo{
  border-radius: 50%;
  width: 120px;
}

.searchBar{
  outline:none;
  font-size: 18px;
  border-radius: 6px;
  padding: 1rem;
  width: 80%;
}

.icon{
  width: 70px;
}
```