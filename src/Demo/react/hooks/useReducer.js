import {useState} from 'react'

//简化版的useReducer Hook
function useReducer(reducer, initialState) {
  const [state, setState] = useState(initialState)

  const dispatch = action => {
    const newState = reducer(initialState, action)
    setState(newState)
  }

  return [state, dispatch]
}
