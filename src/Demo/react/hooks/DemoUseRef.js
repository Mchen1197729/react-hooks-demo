import React, {useRef, useEffect} from 'react'

export default function DemoUseRef() {
  /*
  * 可以使用useRef()的返回值作为容器 
  *
  * */
  const intervalRef = useRef()
  const inputRef = useRef()

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      console.log('Hello World')
    }, 5 * 1000)

    return () => {
      clearInterval(intervalRef.current)
    }
  })

  let timerId
  useEffect(() => {
    timerId = setInterval(() => {
      console.log('timerId')
    }, 3 * 1000)
    return () => {
      clearInterval(timerId)
      //timerId = undefined
      console.log(timerId)
    }
  })

  const clearTimerId = () => {
    clearInterval(timerId)
    console.log(timerId)
  }

  return (
      <div>
        <button onClick={() => clearInterval(intervalRef.current)}>click</button>
        <button onClick={clearTimerId}>clear timerId</button>
        <input type="text" ref={inputRef}/>
        <button onClick={() => console.log(inputRef.current.value)}>show</button>
      </div>
  )
}