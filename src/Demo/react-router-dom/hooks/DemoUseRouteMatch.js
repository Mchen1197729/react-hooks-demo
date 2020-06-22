import React from "react";
import {
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";

// Since routes are regular React components, they may be rendered anywhere in the app, including in
// child elements.
//
// This helps when it's time to code-split your app into multiple bundles because code-splitting a
// React Router app is the same as code-splitting any other React app.

export default function DemoUseRouteMatch() {
  return (
      <div>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/topics'>Topics</Link>
          </li>
        </ul>
        <hr/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/topics" component={Topics}/>
        </Switch>
      </div>
  );
}

function Home() {
  console.log('Home', useRouteMatch())
  return (
      <div>
        <h2>Home</h2>
      </div>
  );
}

function Topics() {
  console.log('Topic', useRouteMatch())
  let {path, url} = useRouteMatch();

  return (
      <div>
        <h2>Topics</h2>
        <ul>
          <li>
            <Link to={`${url}/rendering`}>Rendering with React</Link>
          </li>
          <li>
            <Link to={`${url}/components`}>Components</Link>
          </li>
          <li>
            <Link to={`${url}/props-v-state`}>Props v. State</Link>
          </li>
        </ul>

        <Switch>
          <Route exact path={path}>
            <h3>Please select a topic.</h3>
          </Route>
          <Route path={`${path}/:topicId`} component={Topic}/>
        </Switch>
      </div>
  );
}

function Topic() {
  // The <Route> that rendered this component has a path of `/topics/:topicId`.
  // The `:topicId` portion  of the URL indicates a placeholder that we can get from `useParams()`.
  let {topicId} = useParams();

  return (
      <div>
        <h3>{topicId}</h3>
      </div>
  );
}
