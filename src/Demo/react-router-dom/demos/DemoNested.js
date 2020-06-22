import React from 'react'
import {Switch, Route, Link, useRouteMatch} from 'react-router-dom'

function Home() {
  return (
      <h1>This is Home page</h1>
  )
}

function Dog() {
  return (
      <h1>This is Dog topic page</h1>
  )
}

function Cat() {
  return (
      <h1>This is Cat topic page</h1>
  )
}

function Topic() {
  let {url, path} = useRouteMatch()
  return (
      <div>
        <h1>Please select one topic</h1>
        <ul>
          <li>
            <Link to={`${url}/cat`}>Cat</Link>
          </li>
          <li>
            <Link to={`${url}/dog`}>Dog</Link>
          </li>
        </ul>
        <hr/>
        <Switch>
          <Route path={`${path}/dog`} component={Dog} key='1'/>
          <Route path={`${path}/cat`} component={Cat} key='2'/>
        </Switch>
      </div>
  )
}

export default function DemoNested() {
  return (
      <div>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/topic'>Topic</Link>
          </li>
          <hr/>
          <Switch>
            <Route exact path='/' component={Home} key='3'></Route>
            <Route path='/topic' component={Topic} key='4'></Route>
          </Switch>
        </ul>
      </div>
  )
}
