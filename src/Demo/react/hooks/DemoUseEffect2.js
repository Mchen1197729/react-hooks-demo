import React, {useState, useEffect} from "react";

export default function DemoUseEffect2() {
  const [number, setNumber] = useState(0)

  useEffect(() => {
    let intervalID = setInterval(() => {
      console.log('hello')
    }, 10 * 1000)
    console.log(intervalID)
    return () => {
      clearInterval(intervalID)
    }
  }, [number])

  const handleClickButton = () => {
    setNumber(number + 1)
  }
  return (
      <div>
        <h1>The number is {number}</h1>
        <button onClick={handleClickButton}>click</button>
      </div>
  )
}
