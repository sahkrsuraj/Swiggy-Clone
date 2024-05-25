## What are various ways to add images into our App? Explain with code examples?

There are 4 ways to add images in React App:

1) Using "import" keyword: Adding image in React using "import" keyword will ensure the bundler(like webpack, parcel) to include the images in the build folder when the project is built.

```jsx
  import "icon" from "./icon.jpg";

  const Header = ()=>{
    return(
      <div className="header">
        <img src= {icon} alt="icon">
      </div>
    )
  }

  export default Header;
```

2) Using "require" keyword: Adding image in React using "require" keyword loads the image into the component.

```jsx

const Header = ()=>{
    return(
      <div className="header">
        <img src= {require("./icon.jpg")} alt="icon">
      </div>
    )
  }

  export default Header;
```

3) Directly loading images from network: To do this the link of the image is directlt provided.

```jsx

const Header = ()=>{
    return(
      <div className="header">
        <img src= "https://cdn-icons-png.flaticon.com/512/2815/2815428.png" alt="icon">
      </div>
    )
  }

  export default Header;

```

4) Displaying SVG image: To display SVG image

```jsx
  import "Logo from "./components/icons/Logo"; 

  const Header = ()=>{
    return(
      <div className="header">
        <Logo/>
      </div>
    )
  }

  export default Header;
```

## What would happen if we do console.log(useState())?

The useState() hook should only be used within the body of the functional component. When console.log(useState()) it returns an array of 2 elements. The 1st element is the current state value and the 2nd element is the function to update state. The name of the function is call "bound DispatchSetState";

## How will useEffect behave if we don't add a dependency array?

If we don't add dependency array the useEffect() hook will be called once after initial render.

## What is SPA?

SPA stands for Single Page Application where in React it means dynamically updating the content of a single web page without requiring to reload the entire page. React is a library well know for component based architecture and efficient rendering algorithm. So navigation betwwen pages or sections is handled by client-side routing where changing the url triggers the rendering of new React component without requesting a new page from the server. 

## What is difference between Client Side Routing and Server Side Routing?

Client Side Routing and Server Side Routing are ways to handle navigation and routing between web applications.

1) Client Side Routing: In Client Side Routing the navigation and routing is handled at client-side that is by the web browser. When interacting or navigating to a different view, the browser does not make a request to the server instead the JavaScript code running in the browser dynamically updates the content of the page for the different view. At initial rendering the server sends the basic skeleton of HTML followed by the CSS and JavScript separately which is them loaded in the browser which takes lesser time to load as they were loaded separately.

2) Server Side Routing: In Server Side Routing the navigation and routing is handled by the server. When interacting or navigating to a different view, the browser does makes a request to the server, the server then evalutes the request and sends back a preloaded HTML, CSS and JavaScript inside a full-fledge HTML document this makes the loading time longer for every different view.