const loggedReducer = (state = false, action) => {

    switch (action.actiontype) {
        case "IS_LOGGED":
            return !state;

        default:
            return false;
    }
}
export default loggedReducer;