//Things we are going to see in Redux
//Since we are executing this code form Node, we use the Node syntax, not the typical "import".
const redux = require('redux');

//We create this which refers to "Redux" create store, but do not execute it yet.
const createStore = redux.createStore;

//Initialize the state
const initialState = {
    counter: 0
};

//Reducer
//We create this first before creating the "store" because it is so closly tied to the store.
//With "currentState = initialState" it can create the state if state is not defined yet.
const rootReducer = (currentState = initialState, action) => {
    if (action.type === "INC_COUNTER") {
        console.log('[INC_COUNTER] triggered');
        return {
            ...currentState,
            counter: currentState.counter + 1 
        };
    }
    if (action.type === "ADD_COUNTER") {
        console.log('[ADD_COUNTER] triggered');
        return {
            ...currentState,
            counter: currentState.counter + action.value 
        };
    }
    return currentState;
};

//Store
const store = createStore(rootReducer);
console.log('[Initial Store]', store.getState());               //Gets triggered first

//Subscription
//This gets triggered whenever an action is dispatched.
store.subscribe(() => {
    console.log('[Subscription Update]', store.getState());     //Triggered after 1st and 2nd dispatch
});

//Dispatching Action
//We set a type and then whatever other property we want.
store.dispatch({type: 'INC_COUNTER'});                          //Happens before the first subscription
store.dispatch({type: 'ADD_COUNTER', value: 10});               //Happens after the first subscription
console.log('[Final result]', store.getState());                //Happens after everthing is done