import React, {useEffect, useState} from "react";

import {CountUp} from 'countup.js'

export default function DemoCountUp() {
  const [countUp, setCountUp] = useState(null)

  useEffect(() => {
    setCountUp(new CountUp('number', 2020))
  }, [])

  const handleClick = () => {
    if (!countUp.error) {
      countUp.reset()
      countUp.start(() => {
        console.log('end')
      });
    } else {
      console.error(countUp.error);
    }
  }

  return (
      <div>
        {/*<span id="number"></span>*/}
        <input type="text" id="number"/>
        <button onClick={handleClick}>click</button>
      </div>
  )
}