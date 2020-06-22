import React from "react";
import {
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";


export default function CustomLinkExample() {
  return (
      <div>
        <OldSchoolMenuLink
            activeOnlyWhenExact={true}
            to="/"
            label="Home"/>
        <OldSchoolMenuLink to="/about" label="About"/>
        <hr/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
        </Switch>
      </div>
  );
}

function OldSchoolMenuLink({label, to, activeOnlyWhenExact}) {
  console.log(label, to, activeOnlyWhenExact)
  let match = useRouteMatch({
    path: to,
    exact: activeOnlyWhenExact
  });

  return (
      <div className={match ? "active" : ""}>
        {match && "> "}
        <Link to={to}>{label}</Link>
      </div>
  );
}

function Home() {
  return (
      <div>
        <h2>Home</h2>
      </div>
  );
}

function About() {
  return (
      <div>
        <h2>About</h2>
      </div>
  );
}
