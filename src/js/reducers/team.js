const teamReducer = (state = {pokemon: []}, action) => {
    switch(action.type) {
        case 'ADD_POKEMON':
            return {
                ...state,
                pokemon: [action.data, ...state.pokemon.filter(poke => poke.id !== action.data.id)]
            };
        case 'DELETE_POKEMON':
            return {
                ...state,
                pokemon: state.pokemon.filter(poke => poke.id !== action.id)
            };
        default:
            return state;
    };
};
export default teamReducer;