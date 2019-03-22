const count = (state = {
    num: 0,
}, action) => {
    switch (action.type) {
        case 'ADD': {
            return Object.assign({}, state, {
                num: state.num + 1
            })
        }
        case 'MINUS': {
            return Object.assign({}, state, {
                num: state.num - 1
            })
        }
        case 'RESET': {
            return Object.assign({}, state, {
                num: 0
            })
        }
        default:
            return state
    }
}

export {
    count
}