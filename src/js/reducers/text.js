const textReducer = (state = {pokemon: []}, action) => {
    switch(action.type) {
        case 'ADD_TEXT':
            return {
                ...state,
                pokemon: [action.data, ...state.pokemon]
            };
        case 'DELETE_TEXT':
            return {
                ...state,
                pokemon: []
            };
        default:
            return state;
    };
};
export default textReducer;