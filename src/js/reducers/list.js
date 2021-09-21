const listReducer = (state = {pokemon: []}, action) => {
    switch(action.type) {
        case 'CREATE_LIST':
            return {
                ...state,
                pokemon: [action.data]
            };
        case 'DELETE_LIST':
            return {
                ...state,
                pokemon: []
            };
        default:
            return state;
    };
};
export default listReducer;