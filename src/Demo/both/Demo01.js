import React, {useEffect, useState} from "react"

import {Link, Switch, Route, useParams} from 'react-router-dom'

import {queryUser} from '../../api'

//User组件
function User({id}) {
  const {username} = useParams()

  const [user, setUser] = useState(null)

  useEffect(() => {
    //定义与后台交互的功能函数
    queryUser({username})
        .then(response => {
          if (response.user) {
            setUser(response.user)
          }
        })
        .catch(error => {
          console.log(error)
        })
  }, [username])

  return (
      <div>
        <h1>This is User Component</h1>
        {
          user ?
              (<h3>{id}---{user.username}---{user.age}---{user.married ? 'married' : 'unMarried'}</h3>)
              :
              (<h3>There is no user like this</h3>)
        }
      </div>
  )
}

//容器组件
export default function Demo01() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCount(c => c + 1)
    }, 10 * 1000)
    return () => {
      clearInterval(timer)
    }
  })

  return (
      <div>
        <h1>The count is {count}</h1>
        <ul>
          <li>
            <Link to='/user/jack'>jack</Link>
          </li>
          <li>
            <Link to='/user/rose'>rose</Link>
          </li>
        </ul>
        <hr/>
        <Switch>
          <Route path='/user/:username'>
            <User id='1001'/>
          </Route>
        </Switch>
      </div>
  )
}
