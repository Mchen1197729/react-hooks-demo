import React, {useState, useEffect} from "react"

import hljs from 'highlight.js'

import 'highlight.js/styles/dark.css'

import {queryHighlight} from '../../api'


export default function DemoHighlight() {
  const [state, setState] = useState({username: '林志玲', age: 38})

  const handleClick = () => {
    //模拟延时效果
    setState({loading: true})
    queryHighlight()
        .then(response => {
          // console.log(response)
          setTimeout(() => {
            setState(response)
          }, 3000)
        })
        .catch(error => {
          console.log(error)
          setState({request: false})
        })
  }
  useEffect(() => {
    document.querySelectorAll('code').forEach((block) => {
      hljs.highlightBlock(block)
    })
  })

  return (
      <div>
        <h3>响应数据：</h3>
        <pre>
          <code className="javascript">{JSON.stringify(state, null, 4)}</code>
        </pre>
        <hr/>
        <button onClick={handleClick}>按钮</button>
      </div>
  )
}