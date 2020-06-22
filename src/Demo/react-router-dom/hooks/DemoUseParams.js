import React from "react";

import {Link, Switch, Route, useParams} from 'react-router-dom'

/*
* useParams()钩子函数
*   返回一个对象 该对象的属性由在声明路由组件的path决定
*   eg:<Route path='/:id/:user' component={<Child/>}/>
*       按照上述的声明：那么在Child函数组件中使用useParams()函数返回的对象就是{id:'xxx',user:'yyy'}
*
* */
function Child() {
  console.log(useParams())
  let {fruit, number} = useParams();

  return (
      <div>
        <h3>Fruit: {fruit}</h3>
        <h3>Number+1: {number + 1}</h3>
      </div>
  );
}

export default class DemoUseParams extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div>
          <h2>Accounts</h2>
          <ul>
            <li>
              <Link to="/apple/10">Apple:10</Link>
            </li>
            <li>
              <Link to="/banana/9">Banana:9</Link>
            </li>
          </ul>
          <Switch>
            <Route path="/:fruit/:number" children={<Child/>}/>
          </Switch>
        </div>
    );
  }

}
