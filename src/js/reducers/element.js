const elementReducer = (state = {pokemon: {}}, action) => {
    switch(action.type) {
        case 'ADD_ELEMENT':
            return {
                ...state,
                pokemon: action.data
            };
        case 'DELETE_ELEMENT':
            return {
                ...state,
                pokemon: {}
            };
        default:
            return state;
    };
};
export default elementReducer;