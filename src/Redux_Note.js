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
    type: 'TOGGLE_TODO';
    id: 0;
}

{
    type: 'ADD_GOAL';
    goal: {
        id: 0;
        name: 'Run a Marathon';
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

function createStore (reducer) {
    // The store should have four parts
    // 1. The state
    // 2. Get the State
    // 3. Listen to changes on the State
    // 4. Update the state

    // Once dispatch... pass in action in the action, this 'state' will be overwritten
    // Internal State
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
            // Return 'True' if specific listener 'l' that is looping over does not match 'listener'.
            listeners = listeners.filter((l) => l !== listener)
        }
    }


    const dispatch = (action) => {
        // Call todos
        // Passing in root reducer... state and action which will give a brand new 'state'
        state = reducer(state, action)
        // loop over listeners and invoke them -- state changed
        // Loop through listeners and invoke function, letting them know that the state is now changed
        listeners.forEach((listener) => listener())
    }

    return {
        // properties/methods.
        getState,
        subscribe,
        dispatch,

    }
}

// App Code
const ADD_TODO = 'ADD_TODO'
const REMOVE_TODO = 'REMOVE_TODO'
const TOGGLE_TODO = 'TOGGLE_TODO'
const ADD_GOAL = 'ADD_GOAL'
const REMOVE_GOAL = 'REMOVE_GOAL'

function addTodoAction (todo) {
    return {
        type: ADD_TODO,
        todo,
    }
}

function removeTodoAction (id) {
    return {
        type: REMOVE_TODO,
        id,
    }
}

function toggleTodoAction (id) {
    return {
        type: TOGGLE_TODO,
        id,
    }
}

function addGoalAction (goal) {
    return {
        type: ADD_GOAL,
        goal,
    }
}

function removeGoalAction (id) {
    return {
        type: REMOVE_GOAL,
        id,
    }
}

// Reducer function (Pure Function)
function todos (state = [], action) {
    switch(action.type) {
    case ADD_TODO :
        return state.concat([action.todo])
    case REMOVE_TODO :
        return state.filter((todo) => todo.id !== action.id)
    case TOGGLE_TODO :
        return state.map((todo) => todo.id !== action.id ? todo :
        Object.assign({}, todo, {complete: !todo.complete})
        )
    default :
        return state
    }
}

function goals (state = [], action) {
    switch(action.type) {
    case ADD_GOAL :
        return state.concat([action.goal])
    case REMOVE_GOAL :
        return state.filter((goal) => goal.id !== action.id)
    default :
        return state
    }
}

function app (state = {}, action) {
    return {
    todos: todos(state.todos, action),
    goals: goals(state.goals, action)
    }
}

const store = createStore(app)

store.subscribe(() => {
    console.log('The new state is: ', store.getState())
})
  
// addTodoAction
// removeTodoAction
// toggleTodoAction
// addGoalAction
// removeGoalAction

store.dispatch(addTodoAction({
    id: 0,
    name: 'Walk the dog',
    complete: false,
}))

store.dispatch(addTodoAction({
    id: 1,
    name: 'Wash the car',
    complete: false,
}))

store.dispatch(addTodoAction({
    id: 2,
    name: 'Go to the gym',
    complete: true,
}))

store.dispatch(removeTodoAction(1))

store.dispatch(toggleTodoAction(0))

store.dispatch(addGoalAction({
    id: 0,
    name: 'Learn Redux'
}))

store.dispatch(addGoalAction({
    id: 1,
    name: 'Lose 20 pounds'
}))

store.dispatch(removeGoalAction(0))

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