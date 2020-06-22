import React, {useState, useMemo} from "react"

/*
* 对可控组件进行debounce处理
* function组件
* */

const debounce = (fn, delay) => {
  console.log('debounce()')
  let timer
  return (...args) => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(this, args)
    }, delay)
  }
}

export default function DemoDebounceInput2() {
  const [username, setUsername] = useState('')


  const updateUsername = (username) => {
    setUsername(username)
  }

  //这种写法每次input触发onChange事件时 debounce函数都会被调用 浪费性能
  //const debounceHandleOnChange = debounce(updateUsername, 250)

  //使用useMemo()函数来缓存那些开销大的函数调用的结果 优化性能
  const debounceHandleOnChange = useMemo(() => debounce(updateUsername, 250), [])

  const handleOnChange = (e) => {
    debounceHandleOnChange(e.target.value)
  }

  return (
      <div>
        <input type="text" value={username} onChange={handleOnChange}/>
      </div>
  )
}
