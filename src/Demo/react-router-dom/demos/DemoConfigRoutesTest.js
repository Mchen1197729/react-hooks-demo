import React from "react";

import {Link, Switch, Route, useRouteMatch, useLocation} from 'react-router-dom'

/*
* 注意：如果一个路由中还包含子路由 那么需要将该路由的exact设置为false
*
* */
const routes = [
  {
    path: '/male',
    exact: false,
    component: Male,
    children: [
      {
        path: 'jack',
        exact: true,
        component: Jack
      },
      {
        path: 'tom',
        exact: true,
        component: Tom
      }
    ]
  },
  {
    path: '/female',
    exact: false,
    component: Female,
    children: [
      {
        path: 'rose',
        exact: true,
        component: Rose
      },
      {
        path: 'jerry',
        exact: true,
        component: Jerry
      }
    ]
  }
]

export default function DemoConfigRoutesTest() {
  const location = useLocation()
  console.log(location.pathname)
  return (
      <div>
        <ul>
          <li>
            <Link to='/male'>男</Link>
          </li>
          <li>
            <Link to='/female'>女</Link>
          </li>
        </ul>
        <hr/>
        <Switch>
          {
            routes.map((route, index) => {
              return (
                  //加上exact 就无法正确渲染 ？？？这是为什么？？？
                  // -->匹配子路由之前会先匹配父路由 如果父路由使用了精确匹配 则无法匹配成功
                  //eg:目前的位置是：'/male/jack' 如果父路由的配置为 exact path='/male'... 那么匹配父路由会失败 就不会进行子路由的匹配了
                  <Route path={route.path} exact={route.exact} key={index}>
                    <route.component children={route.children}/>
                  </Route>
              )
            })
          }
        </Switch>
      </div>
  )
}

function Male({children}) {
  const {url, path} = useRouteMatch()
  return (
      <div>
        <ul>
          <li>
            <Link to={`${url}/jack`}>jack</Link>
          </li>
          <li>
            <Link to={`${url}/tom`}>tom</Link>
          </li>
        </ul>
        <hr/>
        <Switch>
          {
            children.map((route, index) => {
              return (
                  <Route path={`${path}/${route.path}`} exact={route.exact} key={index}>
                    <route.component children={route.children}/>
                  </Route>
              )
            })
          }
        </Switch>
      </div>
  )
}

function Female({children}) {
  //console.log(children)
  const {url, path} = useRouteMatch()
  return (
      <div>
        <ul>
          <li>
            <Link to={`${url}/rose`}>rose</Link>
          </li>
          <li>
            <Link to={`${url}/jerry`}>jerry</Link>
          </li>
        </ul>
        <hr/>
        <Switch>
          {
            children.map((route, index) => {
              return (
                  <Route path={`${path}/${route.path}`} exact={route.exact} key={index}>
                    <route.component children={route.children}/>
                  </Route>
              )
            })
          }
        </Switch>
      </div>
  )
}

function Jack() {
  return <h1>This is Jack!</h1>
}

function Tom() {
  return <h1>This is Tom!</h1>
}

function Rose() {
  return <h1>This is Rose!</h1>
}

function Jerry() {
  return <h1>This is Jerry!</h1>
}
