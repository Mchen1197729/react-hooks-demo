import React, {useState} from "react";

export default function DemoUseState() {
  const [count, setCount] = useState(0)
  //初始的state值也可以传入一个function 在函数中计算并返回初始的state 该函数只会在初始渲染时被调用一次
  const [number, setNumber] = useState(() => Math.floor(Math.random() * 10))

  const handleClickButton = () => {
    setCount(prevCount => (prevCount + 1))
    /*
    * 1.在setXxx之后立即去获取xxx的值是得不到最新的值的 只能得到上次xxx的值
    * 2.与class组件中的setState()不同 setXxx()不会自动合并对象
    * */
    console.log(count)
  }

  return (
      <div>
        <h2>You have clicked {count} times</h2>
        <h3>The number is {number}</h3>
        <button onClick={handleClickButton}>click</button>
      </div>
  )
}
