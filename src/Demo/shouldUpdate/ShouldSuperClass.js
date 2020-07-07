import React from "react"

import ShouldChildClass from './ShouldChildClass'

export default class ShouldSuperClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0
    }
  }

  handleClick = () => {
    this.setState((state) => ({number: state.number + 1}))
  }

  render() {
    console.log('ShouldSuperClass render()')
    return (
        <div>
          <ShouldChildClass/>
          <h2>The number is now: {this.state.number}</h2>
          <button onClick={this.handleClick}>click me</button>
        </div>
    )
  }
}
