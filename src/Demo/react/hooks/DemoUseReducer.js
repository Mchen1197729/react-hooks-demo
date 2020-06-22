import React, {useReducer, useState} from 'react'

export default function DemoUseReducer() {
  const [index, setIndex] = useState(0)

  /*
  * useReducer() Hook接受两个参数
  * 第一个：reducer函数
  * */

  const [todos, dispatch] = useReducer((todos, action) => {
    console.log(todos)
    switch (action.type) {
      case 'ADD':
        return [...todos, action.todo]
      default:
        return todos
    }
  }, [])

  const arr = [
    {id: 1, title: '吃饭1', completed: false},
    {id: 2, title: '吃饭2', completed: true},
    {id: 3, title: '吃饭3', completed: true},
    {id: 4, title: '吃饭4', completed: false},
    {id: 5, title: '吃饭4', completed: false}
  ]

  const handleAdd = () => {
    setIndex(index + 1)
    dispatch({
      type: 'ADD', todo: arr[index]
    })
  }

  return (
      <div>
        {
          todos.map(todo => (
              <h2 key={todo.id}>{todo.id}--{todo.title}--{todo.completed}</h2>
          ))
        }
        <button onClick={handleAdd}>add</button>
      </div>
  )
}
