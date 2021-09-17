const filterReducer = (state = false, action) => {
    switch(action.type) {
        case 'OPEN_FILTER':
            return {
                state: action.data
            };
        case 'CLOSE_FILTER':
            return {
                state: action.data
            };
        default:
            return state;
    };
};
export default filterReducer;