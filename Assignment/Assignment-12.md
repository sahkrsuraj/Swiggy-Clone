# useContext vs Redux ?

useContext and Redux are both tools to manage and share data between components of the application.
1. <b>useContext</b>: useContext is an in-built React Context-API hook, it is used to share and manage state at a global component tree. It provides a way to pass data within nested-components without having the need to pass props at every level. It has Context Provider which provides and manage state and Context Cosumer which access the state. It is easier to use and implement. But when application grows with a number of components and comples data sharing useContext is not efficient for debugging and data management.

2. <b>Redux</b>: Redux is a state management library commonly use with React. It is more efficient when handling and managing state with complex data sharing. It has a single centralize store which manages the apllication's state. The store can be divided into logical chunks called slice. A slice is a group of the application's state and its corresponding reducers and actions, grouped together for a specific feature. When user interact with a specific component an action is dispatched and a function is called, the function is termed as a reducer. Actions and Reducers are used to write or modifies the slice. To read the data from the store selector is used, this is know as subscribing. 

<b>Comparison</b>:

- useContext is suitable for simpler data-sharing scenarios within a component tree, whereas Redux excels in managing complex application states with a centralized store and organized slices.
- useContext is straightforward and built into React, whereas Redux requires additional setup but provides robust state management capabilities for larger applications.

# Advantage of using Redux Toolkit over Redux?

Issues with plain Redux-
1. It is difficult to configure.
2. Redux requires a lot of packages to become powerful and able to handle large application.
3. It prohibits mutation of reducers state directly.
4. Redux requires too much boilerplate code which makes it cumbersome to write efficient and clean code.

Redux Toolkit solves this issues-

1. We can write reducers that mutate state directly, making your code more readable and easier to write.
2. Redux Toolkit encourages organizing state into slices using the createSlice function. Each slice encapsulates its own initial state, reducers, and action creators, making it easier to manage and reason about different parts of your application's state.
3. It automatically generates action types and action creators based on the reducer logic defined using the createSlice function.

# Explain Dispatcher.

In Redux, state changes in response to an action. An action is a JavaScript object that which intention is to change the state. When an interaction happens it triggers the change of state by dispatching an action. In redux, dispatch is a function which is returned by the useDispatch hook of the react-redux library. This function dispatch the action.

```jsx
import { useDispatch } from "react-redux";

export const Billing = (props) => {
  const {handleCheckout} = props;
  const dispatch = useDispatch();

  const deliverOrder = ()=>{
    dispatch(clearCart());
    handleCheckout();
  }

  return (
    // jsx
  )
}
```

# Explain Reducer?

Reducer is a function responsible for handling actions and updating the data for a given slice.
In the old redux we would manually define action types, action creators, and reducers.

```jsx
// Action Types
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const INCREMENT_BY_AMOUNT = 'INCREMENT_BY_AMOUNT';
```

```jsx
// Action Creators
const increment = () => ({
  type: INCREMENT,
});

const decrement = () => ({
  type: DECREMENT,
});

const incrementByAmount = (amount) => ({
  type: INCREMENT_BY_AMOUNT,
  payload: amount,
});
```

```jsx
// Initial State
const initialState = {
  counter: 0,
};

// Reducer Function
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, counter: state.counter + 1 };
    case DECREMENT:
      return { ...state, counter: state.counter - 1 };
    case INCREMENT_BY_AMOUNT:
      return { ...state, counter: state.counter + action.payload };
    default:
      return state;
  }
};
```

```jsx
import { createStore } from 'redux';

// Create Redux Store
const store = createStore(counterReducer);
```

In the new approach with Redux Toolkit, it simplifies by introducing "createSlice".

```jsx
import { createSlice } from '@reduxjs/toolkit';

// Initial State
const initialState = {
  counter: 0,
};

// Create a Slice
const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      state.counter += 1;
    },
    decrement(state) {
      state.counter -= 1;
    },
    incrementByAmount(state, action) {
      state.counter += action.payload;
    },
  },
});

// Export Actions and Reducer
export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
```

# Explain slice.

Redux has a single centralize store which manages the apllication's state. The store can be divided into logical chunks called slice. A slice is a group of the application's state and its corresponding reducers and actions, grouped together for a specific feature. 

```jsx
// store
import { configureStore } from "@reduxjs/toolkit";
import counterSlice from './counterSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer
  }
});

export default store;
```

```jsx
import { createSlice } from '@reduxjs/toolkit';

// Initial State
const initialState = {
  counter: 0,
};

// Create a Slice
const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      state.counter += 1;
    },
    decrement(state) {
      state.counter -= 1;
    },
    incrementByAmount(state, action) {
      state.counter += action.payload;
    },
  },
});
```

# Explain selector.

Selector is a function that extracts specific pieces of state from the Redux store.It is used to read the data from the store, this is know as subscribing. 

```jsx
import { useDispatch, useSelector } from "react-redux";

export const Billing = (props) => {
  const {handleCheckout} = props;
  const dispatch = useDispatch();
   const itemCount = useSelector((store) => store.cart.itemCount);

  const deliverOrder = ()=>{
    dispatch(clearCart());
    handleCheckout();
  }

  return (
    // jsx
  )
}
```

# Explain createSlice and the configuration it takes.

createSlice is a utility function provided by Redux Toolkit that simplifies the process of creating Redux slice reducers along with action creators. It encapsulates the definition of a slice of state, including its initial state, reducers, and automatically generated action creators. createSlice helps reduce boilerplate code and promotes a more efficient and intuitive way to manage Redux state.

```jsx
import { createSlice } from '@reduxjs/toolkit';

const sliceNameSlice = createSlice({
  name: 'sliceName', // Name of the slice (used in action types)
  initialState: {}, // Initial state of the slice
  reducers: {
    // Reducer functions (mutate the state)
    reducerName: (state, action) => {
      // Update the state based on the action payload
    },
    // Additional reducer functions...
  },
  extraReducers: (builder) => {
    // Additional reducers for handling action types from other slices
    // builder.addCase(actionType, (state, action) => { ... })
  },
});
```