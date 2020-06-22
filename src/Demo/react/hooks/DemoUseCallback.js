import React, {useState, useCallback} from "react";

/*
* useCallback 返回一个ref
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
