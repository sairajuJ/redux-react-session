const counterReducer = (state = 5 , action) => {
    switch (action.type) {
        case 'INCREAMENT':
            return state + 10;
        case "DECREAMENT":
            return state - 1;
        default:
            return state;   
    }
}
export default counterReducer;