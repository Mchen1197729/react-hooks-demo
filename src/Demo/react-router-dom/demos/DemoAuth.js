import React from "react";

import {Switch, Route, Redirect, Link, useLocation, useHistory} from 'react-router-dom'

//用来记录登录状态的对象
const authInfo = {
  isAuthed: false,
  login(callback) {
    authInfo.isAuthed = true
    //异步执行回调函数
    setTimeout(() => {
      callback()
    }, 300)
  },
  logout(callback) {
    authInfo.isAuthed = false
    //异步执行回调
    setTimeout(() => {
      callback()
    }, 300)
  }
}

function PublicContent() {
  return (
      <div>
        <h2>This is public page</h2>
      </div>
  )
}

function PrivateContent() {
  return (
      <div>
        <h2>This is private page</h2>
      </div>
  )
}

//登录组件
function Login() {
  let history = useHistory()
  let location = useLocation()
  console.log(location)
  const handleLogin = () => {
    //先调用authInfo.login()
    authInfo.login(() => {
      //登录成功后需要导航到原来的目标地址
      history.replace(location.target)
    })
  }
  //Login组件也需要根据authInfo进行条件渲染
  return (
      <div>
        {
          authInfo.isAuthed ? (
              <h1>You have already login </h1>
          ) : (
              <button onClick={handleLogin}>login</button>
          )
        }
      </div>
  )
}

export default function DemoAuth() {
  return (
      <div>
        {
          !authInfo.isAuthed ? (
              <p>You have not login in</p>
          ) : (
              <p>Welcome you</p>
          )
        }
        <ul>
          <li>
            <Link to='/public'>public contents</Link>
          </li>
          <li>
            <Link to='/private'>private contents</Link>
          </li>
        </ul>
        <hr/>
        <Switch>
          <Route path='/public' component={PublicContent}/>
          <Route path='/private' render={() => {
            if (!authInfo.isAuthed) {
              return <Redirect to={{
                //用来标识该重定向是从哪里来的(验证完以后需要再跳转回该target)
                target: '/private',
                pathname: '/login'
              }}/>
            } else {
              return <PrivateContent/>
            }
          }}/>
          <Route path='/login' component={Login}/>
        </Switch>
      </div>
  )
}
