const initialState = 0;

const changeTheNumber = (state = initialState, action) => {
    switch (action.type) {
        case "INCREMENT": return state + action.payload;
        case "DECREMENT": return state - 1;
        case "MULTIPLY": return state *action.payload;
        case "DIVIDE": return state /action.payload;
        default: return state;
    }
}

export default changeTheNumber;