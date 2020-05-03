import { SET_WEATHERS, INPUT_VALUE } from '../actions/index'

const initial = {
    weathers: [],
    value: ''
}

export default (state = initial, action) => {
    const { type, payload } = action
    switch (type) {
        case SET_WEATHERS:
            return { ...state, weathers: payload }
        case INPUT_VALUE:
            return { ...state, value: payload }
        default:
            return state
    }
}