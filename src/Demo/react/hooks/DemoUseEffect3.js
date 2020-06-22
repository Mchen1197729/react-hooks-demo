import React, {useState, useEffect} from "react";


// export default class BasicExample extends React.Component{
//   constructor(props){
//     super(props)
//     this.state = {
//       count:0,
//       money:100
//     }
//     this.h1Ref = React.createRef()
//   }

//   handleCountAdd = ()=>{
//     this.setState({
//       count:this.state.count+1
//     })
//   }

//   handleMoneyAdd = ()=>{
//     this.setState({
//       money:this.state.money+1
//     })
//   }

//  handleUpdateDom = ()=>{
//    console.log(this.h1Ref.current)
//    this.h1Ref.current.innerText = 'update innerText'
//    console.log(this.h1Ref.current)
//    //React.forceUpdate()
//  }


//   render(){
//     console.log('render()')
//     return(
//     <div>
//       <h1 id="h1" ref={this.h1Ref}>this is h1 tag</h1>
//       <h2>you have clicked {this.state.count} times</h2>
//       <button onClick={this.handleCountAdd}>count++</button>
//       <button onClick={this.handleMoneyAdd}>money++</button>
//       <button onClick={this.handleUpdateDom}>update dom</button>
//     </div>
//     )
//   }
// }

export default function DemoUseEffect3() {
  const [count, setCount] = useState(0)

  /*
  * * 组件和虚拟dom并不等价:虚拟dom是根据组件生成的 并不一定使用了组件所有的属性
  *   所以:组件重新渲染并不一定会导致虚拟dom变动，因此也就不一定会导致真实dom变动
  *
  * * 组件内部的state,props发生变化->一定会触发组件的重新渲染->不一定会触发浏览器更新
  * * 组件内部的state,props都没有发生变化->一定不会触发组件的重新渲染->但是浏览器也可能会触发更新(通过直接操作dom的方式来触发浏览器的更新)
  *
  * 1.虽然每次组件重新渲染时 useEffect会清除上一次的 effect 重新生成最新的effect
  *   但是 对于那些需要清除的副作用 必须手动返回一个function用于清除effect的副作用
  *
  * 2.useEffect中可以保证得到最新的dom元素(类似于Vue中的this.$nextTick(callback))
  *
  * */
  useEffect(() => {
    console.log(document.getElementById('h1').innerText)
  })

  const handleClick = () => {
    setTimeout(() => {
      setCount(count + 1)
      // console.log('click')
    }, 1000)
  }

  return (
      <div>
        <h1 id="h1">you have clicked {count} times</h1>
        <button onClick={handleClick}>click</button>
      </div>
  );
}

