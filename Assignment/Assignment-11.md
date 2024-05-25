# What is prop drilling?

Props are objects that are passed as data from parent component to child component. Prop drilling is the situation where same props are passed thorugh multiple levels of nested components to reach the data to the deepest or last component. With the increase in application size the maintainance becomes tough, in some situtaions props are passed down to nested components but used only in the deepest level. To avoid prop drilling React hook useContext or state management libraries like Redux is used. 

# What is lifting the state up?

Liftting the state up is a techninque of managing state of multiple components by moving the state up to the most common ancestor component. This allows updating and managing the sate from a single location.

# What is Context Provider and Context Consumer?

Context Provider and Context Consumer are components that pass data thorugh components without having to pass as props at every level.

Context Provider component is used to pass data to components that are nested within its component tree. A context object is created using React.createContext() eg 
```jsx
const Context = React.createContext();
```
And use Context.Provider to wrap the component tree to which data has to be shared. This has a 'value' prop which can be accessed by the Context Consumer.

```jsx
<Context.Provider value={/*data*/}>
{/* Components that can consume the context */}
</Context.Provider>
```
The Context Consumer component is used to access the data (or state) provided by the Context Provider.

```jsx
<MyContext.Consumer>
  {value => /* render something based on the context value */}
</MyContext.Consumer>
```

# If you don’t pass a value to the provider does it take the default value?

If a value is not pass to the provider then

1. If a Context Provider is created using a default value like this than the default value will be used as value by the provider.

```jsx
const Context = React.createContext('default value');
```

2. If default value is not specified at the time of context creation then the value recieved by the Consumer will be undefined. 