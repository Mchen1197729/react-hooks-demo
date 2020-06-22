import React from "react";
import {Switch, Route, Link, useHistory} from 'react-router-dom'

function Visitor() {
  const history = useHistory()
  const toLogin = () => {
    history.replace('/login')
  }
  return (
      <div>
        <h1>Visitor Page</h1>
        <button onClick={toLogin}>To Login</button>
      </div>
  )
}

function Login() {
  console.log(useHistory())
  return (
      <div>
        <h1>Login Page</h1>
      </div>
  )
}

export default function DemoUseHistory() {
  return (
      <div>
        <ul>
          <li>
            <Link to='/visitor'>visitor</Link>
          </li>
          <li>
            <Link to='/login'>login</Link>
          </li>
        </ul>
        <hr/>
        <Switch>
          <Route path='/visitor' component={Visitor}/>
          <Route path='/login' component={Login}/>
        </Switch>
      </div>
  )
}
