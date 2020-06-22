import React from "react";

import {Link, Switch, Route, useLocation} from 'react-router-dom'

function Visitor() {
  let location = useLocation()
  console.log(location)
  return (
      <div>
        <h1>Visitor Page</h1>
      </div>
  )
}

function Admin() {
  return (
      <div>
        <h1>Admin Page</h1>
      </div>
  )
}

export default function DemoUseLocation() {
  return (
      <div>
        <ul>
          <li>
            <Link to={{
              pathname: '/visitor',
              hash: 'the-hash',
              state: {money: 100},
              search: 'name=chen'
            }}>visitor</Link>
          </li>
          <li>
            <Link to='/admin'>admin</Link>
          </li>
        </ul>
        <hr/>
        <Switch>
          <Route path='/visitor' component={Visitor}/>
          <Route path='/admin' component={Admin}/>
        </Switch>
      </div>
  )
}
