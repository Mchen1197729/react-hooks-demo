import React, {useEffect, memo} from "react"

function ShouldChild({todo}) {
  console.log('ShouldChild render()')

  useEffect(() => {
    console.log('useEffect()')
  })

  return (
      <div>
        <h1>This is ShouldChild Component</h1>
        <h3>{todo[0] ? todo[0].title : ''}</h3>
        <span>纯&middot;简拉基&middot;茨德</span>
      </div>
  )
}

/*
* 1.在函数组件中使用React.memo就相当于在类组件中使用React.PureComponent
*
* 2.默认React.memo默认只比较props 而且只对深层对象进行浅比较
*
* 3.可以传入第二个参数来实现自定义比较规则
* */
export default memo(ShouldChild, (prevProps, nextProps) => {
  //todo... do something...
  /*
  如果把 nextProps 传入 render 方法的返回结果与
  将 prevProps 传入 render 方法的返回结果一致则返回 true，
  否则返回 false
  */
  console.log(prevProps, nextProps)
  return true
})
