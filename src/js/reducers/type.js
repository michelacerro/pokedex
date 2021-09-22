const typeReducer = (state = {pokemon: []}, action) => {
    switch(action.type) {
        case 'ADD_TYPE':
            return {
                ...state,
                pokemon: [action.data, ...state.pokemon]
            };
        case 'DELETE_TYPE':
            return {
                ...state,
                pokemon: []
            };
        default:
            return state;
    };
};
export default typeReducer;