const initialState = {
    counter: 0,
    results: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                counter: state.counter + 1
            }
        case 'DECREMENT':
            return {
                counter: state.counter - 1
            }
        case 'ADDFIVE':
            return {
                counter: state.counter + action.value
            }
        case 'SUBTRACTFIVE':
            return {
                counter: state.counter - action.value
            }
    }
    return state;
};

export default reducer;