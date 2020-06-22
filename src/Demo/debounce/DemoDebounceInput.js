import React from "react"

/*
* 对可控组件进行debounce处理
* class组件
* */

const debounce = (fn, delay) => {
  console.log('debounce()')
  let timer
  return (...args) => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(this, args)
    }, delay)
  }
}

export default class DemoDebounceInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ''
    }
  }

  updateState = (username) => {
    this.setState({username})
  }

  //this.updateState的debounce版本
  debounceHandleChange = debounce(this.updateState, 250)


  //只有这个事件处理函数能够拿到事件对象e
  handleChange = (e) => {
    //调用handleChange事件处理函数的debounce版本 并且将e.target.value当做参数传递出去
    this.debounceHandleChange(e.target.value)
  }


  render() {
    return (
        <div>
          <input type="text" value={this.state.username} onChange={this.handleChange}/>
        </div>
    )
  }
}
