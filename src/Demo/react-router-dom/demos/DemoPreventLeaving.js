import React, {useState, useEffect} from "react"
import {
  Link,
  Route,
  Switch,
  Prompt
} from 'react-router-dom'

export default function DemoPreventLeaving() {
  return (
      <div>
        <ul>
          <li>
            <Link to='/'>home</Link>
          </li>
          <li>
            <Link to='/one'>one</Link>
          </li>
          <li>
            <Link to='/two'>two</Link>
          </li>
        </ul>
        <hr/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/one'>
            <h1>This is page one</h1>
          </Route>
          <Route path='/two'>
            <h1>This is page two</h1>
          </Route>
        </Switch>
      </div>
  )
}

const Home = () => {
  const [inputVal, setInputVal] = useState('')

  useEffect(() => {
    return () => {
      //该函数会在组件卸载时被调用
      if (inputVal !== '') {
        window.confirm('确定要离开吗？')
      }
    }
  }, [Boolean(inputVal)])

  const handleInputChange = e => {
    setInputVal(e.target.value)
  }
  const handleClearInput = () => {
    setInputVal('')
  }
  return (
      <div>
        <input type="text" value={inputVal} onChange={handleInputChange}/>
        <button onClick={handleClearInput}>clear input</button>
      </div>
  )
}
