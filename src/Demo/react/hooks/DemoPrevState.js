import React, {useEffect, useState, useRef} from "react";

/*
* 组件第一次渲染(挂载)
*   1.调用useState()->count = 0
*   2.调用useRef()->countRef = {current:undefined}
*   3.执行const prevCount = countRef.current->prevCount = undefined
*   4.执行return 将返回的dom元素渲染到浏览器中
*   5.浏览器渲染完成后 再过一段时间 useEffect()执行->countRef.current = 0
*   至此 组件的第一次渲染结束
* 当点击了click按钮后触发组件的第二次渲染(更新渲染)
*   1.执行setCount(count + 1)->count = 1
*   2.执行useRef()->但是此时 countRef = {current:0}
*   3.执行const prevCount = countRef.current ->prevCount = 0
*   4.执行return语句 ->将最新的dom元素都渲染到浏览器中 浏览器完成更新渲染
*   5.过了一段时间后 执行useEffect()->countRef = {current:1}
*   至此 组件的更新渲染就结束了
*
*
*   重要：在useEffect()的回调函数中拿到的组件的state才是最新的数据
*        其他地方得到的state数据都有可能不是最新的
* */

export default function DemoPrevState() {
  const [count, setCount] = useState(0)

  //useRef()这个Hook也是会在每次组件渲染时都被执行一次
  const countRef = useRef()

  //useEffect()是在浏览器渲染完成以后延迟一段时间后被第一次执行
  useEffect(() => {
    countRef.current = count
  })

  //组件第一次渲染时 prevCount是 undefined
  const prevCount = countRef.current

  return (
      <div>
        <h1>prev:{prevCount}, now:{count}</h1>
        <button onClick={() => setCount(count + 1)}>click</button>
      </div>
  )
}