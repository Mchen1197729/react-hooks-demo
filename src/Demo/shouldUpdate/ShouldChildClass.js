import React from "react"

/*
* 子组件使用React.PureComponent可以实现父组件渲染 子组件不做无谓的重新渲染(子组件的props&state都没有发生变化)
*
* */
export default class ShouldChildClass extends React.PureComponent {

  render() {
    console.log('ShouldChildClass render()')
    return (
        <h1>This is ShouldChildClass Component</h1>
    )
  }
}
