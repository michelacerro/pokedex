// listReducer
export const  createList = (array) => {
    return {
        type: 'CREATE_LIST',
        data: array
    }
}

export const deleteList = () => {
    return {
        type: 'DELETE_LIST'
    }
}


// textReducer
export const addText = (array) => {
    return {
        type: 'ADD_TEXT',
        data: array
    }
}

export const deleteText = () => {
    return {
        type: 'DELETE_TEXT'
    }
}


// warningReducer 
export const saveWarning = (string) => {
    return {
        type: 'SAVE_WARNING',
        data: string
    }
}

export const deleteWarning = () => {
    return {
        type: 'DELETE_WARNING'
    }
}


// typeReducer
export const addType = (array) => {
    return {
        type: 'ADD_TYPE',
        data: array
    }
}

export const deleteType = () => {
    return {
        type: 'DELETE_TYPE'
    }
}

// elementReducer
export const addElement = (object) => {
    return {
        type: 'ADD_ELEMENT',
        data: object
    }
}

export const deleteElement = () => {
    return {
        type: 'DELETE_ELEMENT'
    }
}


// teamReducer
export const addTeam = (object) => {
    return {
        type: 'ADD_TEAM',
        data: object
    }
}

export const deleteTeam = (string) => {
    return {
        type: 'DELETE_TEAM',
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