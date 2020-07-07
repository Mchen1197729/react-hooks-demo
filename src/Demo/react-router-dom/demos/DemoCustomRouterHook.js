import React from "react"
import {
  Link,
  Switch,
  Route,
  useLocation
} from 'react-router-dom'

export default function DemoCustomRouterHook() {
  return (
      <div>
        <ul>
          <li>
            <Link to='/user?name=jack'>jack</Link>
          </li>
          <li>
            <Link to='/user?name=rose'>rose</Link>
          </li>
          <li>
            <Link to='/user?name=jerry'>jerry</Link>
          </li>
          <li>
            <Link to='/user?name=tom'>tom</Link>
          </li>
        </ul>
        <hr/>
        <Switch>
          <Route path='/user' component={User}/>
        </Switch>
      </div>
  )
}

//自定义钩子函数
const useParams = () => {
  console.log(useLocation())
  return new URLSearchParams(useLocation().search)
}

const User = () => {
  const params = useParams()
  return (
      <h1>The name of params is: {params.get("name")}</h1>
  )
}
