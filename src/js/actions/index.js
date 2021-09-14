// teamReducer
export const addPokemon = (object) => {
    return {
        type: 'ADD_POKEMON',
        data: object
    }
}

export const deletePokemon = (string) => {
    return {
        typre: 'DELETE_POKEMON',
        id: string
    }
}