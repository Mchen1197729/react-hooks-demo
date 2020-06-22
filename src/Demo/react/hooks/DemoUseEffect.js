import React, {useState, useEffect} from "react";

import PubSub from 'pubsub-js'

export default function DemoUseEffect() {
  const [count, setCount] = useState(0)
  /*
  * useEffect(callback)接受一个callback作为参数 该回调函数会在每次页面进行渲染时都会被调用
  * 1.副作用分为两种情况:
  *   1.1 不需要处理的副作用 如：发送网络请求、手动变更DOM、记录日志、这些都是常见的无需清除的操作
  *   1.2 必须处理的副作用 如：设置的定时器、订阅的事件队列 如果不及时进行清除 会造成浏览器内存泄漏
  *
  * 2.在useEffect(callback) 在callback方法中返回一个function
  *   那么当组件被卸载或者被销毁时会主动调用该方法 以此达到清除副作用的功能
  * */
  useEffect(() => {
    document.getElementById('h1').innerText = `You have clicked ${count} times`

    //利用PubSub进行订阅监听
    const loginHandler = (msg, data) => {
      console.log(msg, data)
    }
    PubSub.subscribe('login', loginHandler)

    return () => {
      //在组件被卸载或者被销毁时 取消PubSUb订阅的实践队列(防止浏览器内存泄漏)
      PubSub.unsubscribe('login', loginHandler)
    }
  })
  const handleClickButton = () => {
    setCount(count + 1)
    if (count === 5) {
      PubSub.publish('login', 'Hello World')
    }
  }
  return (
      <div>
        <h1 id='h1'></h1>
        <button onClick={handleClickButton}>click</button>
      </div>
  )
}
