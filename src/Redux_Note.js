


// State and Action (Object/Action - change state of the store)
// 'Type' Property
{
    type: 'ADD_TODO';
    todo: {
        id: 0;
        name: 'Learn Redux';
        complete: false;
    }
}

{
    type: 'REMOVE_TODO';
    id: 0;
}

{
    type: 'TOGGLE_TODO';
    id: 0;
}

{
    type: 'ADD_GOAL';
    goal: {
        id: 0;
        name: 'Run a Marathon'
    }
}

{
    type: 'REMOVE_GOAL';
    id: 0;
}

// Charateristics of a Pure Function
// 1. They always return the same result if they same arguments are passed in.
// 2. They depend only on the arguments passed into them.
// 3. Never produce any side effects.

function todos (state = [], action) {
    if (action.type === 'ADD_TODO') {
        return state.concat([action.todo])
    }
  
    return state
  }

function createStore (reducer) {
    // The store should have four parts
    // 1. The state
    // 2. Get the State
    // 3. Listen to changes on the State
    // 4. Update the state

    let state

    // Array of functions
    let listeners = []

    const getState = () => state



    // 1. When user calls 'subscribe' passing in a function 'listener'
    // 2. Function 'listener' is pushed on to (into) 'listeners' array
    const subscribe = (listener) => {
        listeners.push(listener)

        // 3. but if a user calls the function below that was return to the user when user calls 'subscribe'
        // Return brand new function from 'subscribe'
        return () => {
            // 4. Filter 'listeners' array of functions
            // 5. Remove the initial function that was passed in ('listener') when user first invoked 'subscribe'
            // Return 'True' if specific listener 'l' that is looping over does not match 'listener'
            listeners = listeners.filter((l) => l !== listener)
        }
    }

    const dispatch = (action) => {
        // Call todos
        state = reducer(state, action)
        // loop over listeners and invoke them -- state changed
        listeners.forEach((listener) => listener())
    }

    return {
        // properties/methods.
        getState,
        subscribe,
        dispatch,

    }
}

const store = createStore()
// Call store.dispatch, pass the action, dispatch function is going to be invoked
// todo is going to be invoked
store.dispatch({
    type: 'ADD_TODO',
    todo: {
        id: 0,
        name: 'Learn Redux',
        complete: false,
    }
})