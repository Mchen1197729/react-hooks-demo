import React, {useState} from "react";

const compute = () => {
  console.log('compute()')
  return 100
}

export default function DemoLazyUseState() {
  /*
  * 使用惰性初始state
  *   这样useState中的compute函数只会在该组件第一次渲染的时候被调用一次 以后组件更新渲染不会再次调用compute函数
  * */
  //const [count, setCount] = useState(() => compute())
  //或者简写：
  // const [count, setCount] = useState(compute)

  /*
  * 不适用惰性初始state
  *   这样的方式 每一次该组件渲染时(第一次&更新渲染) compute函数都会被调用 如果compute函数非常耗时 那么这样就会造成性能损耗
  * */
  const [count, setCount] = useState(compute())

  const handleClick = () => {
    setCount(c => c + 1)
  }

  return (
      <div>
        <h1>The count is {count}</h1>
        <button onClick={handleClick}>click</button>
      </div>
  )
}
