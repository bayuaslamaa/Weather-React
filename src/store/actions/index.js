import axios from 'axios'

export const SET_WEATHERS = 'SET_WEATHERS'
export const INPUT_VALUE = ''

export const setWeathers = (data) => {
    return { type: SET_WEATHERS, payload: data }
}

export const inputValue = (value) => {
    return { type: INPUT_VALUE, payload: value }
}

const fetchWeathers = (value) => {
    return axios({
        method: 'get',
        url: 'https://www.metaweather.com/api/location/search/',
        params: {
            query: value
        }
    })
}

export const getWeathers = (value) => {
    return dispatch => {
        fetchWeathers(value)
            .then(({ data }) => dispatch(setWeathers(data)))
            .catch(console.log)
    }
}
