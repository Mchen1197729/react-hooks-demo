import React, {useState, useEffect, useMemo} from "react"
import rafSchedule from 'raf-schd'

/*eslint-disable*/

import avatar from './images/avatar.png'
import github from './images/github.jpg'

/*eslint-enable*/

/*
* 对可控组件进行debounce处理
* function组件
* 使用requestAnimationFrame来达到防抖的效果
* */

export default function DemoDebounceInput3() {
  const [username, setUsername] = useState('')

  const scheduleChange = rafSchedule(username => setUsername(username))

  useEffect(() => {
    return () => {
      scheduleChange.cancel()
    }
  })

  const handleChange = (e) => {
    scheduleChange(e.target.value)
  }

  return (
      <div>
        username:<input type="text" value={username} onChange={handleChange}/>
        <input type="text"/>
      </div>
  )
}

