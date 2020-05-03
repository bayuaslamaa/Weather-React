import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getWeathers } from '../store/actions'

export default () => {
    const dispatch = useDispatch()
    const value = useSelector(state => state.value)
    const weathers = useSelector(state => state.weathers)
    useEffect(() => {
        dispatch(getWeathers(value))
    }, [dispatch, value])

    return (
        <>
            {JSON.stringify(weathers)}
        </>
    )
}