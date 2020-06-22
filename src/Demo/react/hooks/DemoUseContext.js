import React, {useContext, useReducer} from "react"

function SubComponent({count}) {
  const dispatch = useContext(DispatchContext)

  const handleAdd = () => {
    dispatch({type: 'ADD'})
  }

  const handleMinus = () => {
    dispatch({type: 'MINUS'})
  }

  return (
      <div>
        <h1>The count is now :{count}</h1>
        <button onClick={handleAdd}>add</button>
        <button onClick={handleMinus}>minus</button>
      </div>
  )
}

//创建Context组件
const DispatchContext = React.createContext(null)

export default function DemoUseContext() {
  const [count, dispatch] = useReducer((count, actions) => {
    switch (actions.type) {
      case 'ADD':
        return count + 1
      case 'MINUS':
        return count - 1
      default:
        return count
    }
  }, 0)

  return (
      <DispatchContext.Provider value={dispatch}>
        <SubComponent count={count}/>
      </DispatchContext.Provider>
  )
}
