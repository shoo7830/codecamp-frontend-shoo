import { useState } from "react"

const Counter = () => {
  //let
  const onClickCountupLet = () => {
    const count = Number(document.getElementById('count').innerText) + 1
    document.getElementById('count').innerText = count 
  }

  //state 
  const [statecount, setStatecount] = useState(0)
  const onClickCountup = () => {
    setStatecount(statecount + 1)
  }
  return (
    <>
      <div>
        <div>let과 document.getElementById() 카운터 만들기</div>
        <div id="count">0</div>
        <button onClick={onClickCountupLet}>카운트증가</button>
      </div>
      <div>
        <div>state를 활용하여 카운터 만들기</div>
        <div>{statecount}</div>
        <button onClick={onClickCountup}>카운트증가</button>
      </div>

    </>
  )
}

export default Counter