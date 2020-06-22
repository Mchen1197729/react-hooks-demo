import React from "react";
import {Switch, Route, Link} from 'react-router-dom'

function Home() {
  return (
      <h1>This is Home page</h1>
  )
}

function About() {
  return (
      <h1>This is About page</h1>
  )
}

function Dashboard() {
  return (
      <h1>This is Dashboard page</h1>
  )
}

export default class DemoBasic extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/dashboard'>Dashboard</Link>
            </li>
          </ul>
          <hr/>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/about' component={About}/>
            <Route path='/dashboard' component={Dashboard}/>
          </Switch>
        </div>
    );
  }

}
