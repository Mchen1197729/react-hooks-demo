import React, {useRef, useEffect, useState} from 'react'

export default function DemoUseRef() {
  const [count, setCount] = useState(0)
  /*
  * 可以使用useRef()的返回值作为容器
  * useRef('initialVal')函数返回一个普通的js对象{current:'initialVal'}
  * 但是useRef()保证组件初次渲染以及更新渲染时返回的是同一个对象
  * */
  const intervalRef = useRef()
  console.log(intervalRef)
  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus()
    intervalRef.current = setInterval(setCount, 2 * 1000, count + 1)

    return () => {
      clearInterval(intervalRef.current)
    }
  })


  return (
      <div>
        <h2>{count}</h2>
        <button onClick={() => clearInterval(intervalRef.current)}>click</button>
        姓名：<input type="text" ref={inputRef}/>
      </div>
  )
}
