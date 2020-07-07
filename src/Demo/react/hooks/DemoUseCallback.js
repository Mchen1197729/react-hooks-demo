import React, {useState, useCallback} from "react";

/*
* useCallback(callback,dependencies)钩子函数返回一个memorized函数
* 只有当依赖项数组发生变化时才会重新计算返回的函数的值
* */
export default function DemoUseCallback() {
  const [height, setHeight] = useState(0);

  const measuredRef = useCallback(node => {
    if (node !== null) {
      setHeight(node.getBoundingClientRect().height);
    } else {
      console.log('node is null')
    }
  }, [])

  const handleCLick = () => {
    console.log(measuredRef)
  }

  return (
      <>
        <h1 ref={measuredRef}>Hello, world</h1>
        <h2>The above header is {Math.round(height)}px tall</h2>
        <button onClick={handleCLick}>click</button>
      </>
  )
}
