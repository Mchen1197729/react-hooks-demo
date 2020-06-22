import React, {useEffect, useState, useRef} from "react";

/*
* 自定义Hook实例
* */
export default function DemoCustomHook() {
  const [count, setCount] = useState(0)

  const prevCount = usePrevious(count)

  useEffect(() => {
    console.log('useEffect:', count)
  })

  return (
      <div>
        <h1>prev:{prevCount}, now:{count}</h1>
        <button onClick={() => setCount(count + 1)}>click</button>
      </div>
  )
}

/*
* 自定义的Hook
* 接收一个值作为参数
*
* */
function usePrevious(value) {
  const valueRef = useRef()
  useEffect(() => {
    // 该赋值操作会在每次组件渲染时(组件挂载&组件更新)进行
    valueRef.current = value
  })
  return valueRef.current
}