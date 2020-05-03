import React from 'react'
import { DebounceInput } from 'react-debounce-input'
import { useDispatch } from 'react-redux'
import { inputValue } from '../store/actions'

export default () => {
    const dispatch = useDispatch()
    return (
        <div>
            <DebounceInput
                minLength={2}
                debounceTimeout={300}
                onChange={event => dispatch(inputValue(event.target.value))} />
        </div>
    )
}