import React, {useState, useMemo, useCallback} from "react"

export default function DemoHooksMemo() {
  const [count, setCount] = useState(1)
  const [val, setValue] = useState('')

  /*
  * useMemo()钩子函数返回一个memorized的值 只有依赖项发生变化才会去重新计算该值
  * 主要用于缓存那些需要耗时的操作才能得到的值
  * */
  const expensive = useMemo(() => {
    console.log('expensive compute')
    let sum = 0
    for (let i = 0; i < count * 100; i++) {
      sum += i
    }
    return sum
  }, [count])

  return (
      <div>
        <h4>{count}-{expensive}</h4>
        <h3>输入的值：{val}</h3>
        <div>
          <button onClick={() => setCount(count + 1)}>count+1</button>
          <input value={val} onChange={event => setValue(event.target.value)}/>
        </div>
      </div>
  )
}
