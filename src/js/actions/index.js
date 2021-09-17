// teamReducer
export const addPokemon = (object) => {
    return {
        type: 'ADD_POKEMON',
        data: object
    }
}

export const deletePokemon = (string) => {
    return {
        type: 'DELETE_POKEMON',
        id: string
    }
}


// filterReducer
export const openFilter = (bool) => {
    return {
        type: 'OPEN_FILTER',
        data: bool
    }
}

export const closeFilter = (bool) => {
    return {
        type: 'CLOSE_FILTER',
        data: bool
    }
}