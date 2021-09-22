const warningReducer = (state = {warning: ''}, action) => {
    switch(action.type) {
        case 'SAVE_WARNING':
            return {
                warning: action.data
            };
        case 'DELETE_WARNING':
            return {
                warning: ''
            };
        default:
            return state;
    };
};
export default warningReducer;