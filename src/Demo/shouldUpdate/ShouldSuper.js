import React, {useState} from "react"

import ShouldChild from './ShouldChild'

export default function ShouldSuper() {
  console.log('ShouldSuper render()')

  const [number, setNumber] = useState(0)
  const [todo, setTodo] = useState([])

  const handleClick = () => {
    setNumber(number + 1)
  }

  const handleSetTodo = () => {
    setTodo([{title: 'Learn React'}])
  }

  return (
      <div>
        <ShouldChild todo={todo}/>
        <h2>The number is now: {number}</h2>
        <button onClick={handleClick}>click me</button>
        <button onClick={handleSetTodo}>setTodo</button>
      </div>
  )
}
