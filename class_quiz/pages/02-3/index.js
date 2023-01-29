import { useState } from "react"

const AuthNumber = () => {
  // let
  const getAuthNumberLet = () => {
    let str = ''
    for (let i=0; i < 6;i++) {
      str += Math.floor(Math.random() * 10)
    }
    console.log(str)
    document.getElementById('authnumber').innerText = str
  }

  //state
  const [rendomnumber, setRendomnumber] = useState('000000')

  const getAuthNumber = () => {
    let str = ''
    for (let i = 0; i < 6; i++) {
      str += Math.floor(Math.random() * 10)
    }

    setRendomnumber(str)
  }
  return (
    <>
      <div>
        <div>let</div>
        <div id="authnumber">000000</div>
        <button onClick={getAuthNumberLet}>인증번호전송</button>
      </div>
      <div>
        <div>state</div>
        <div>{rendomnumber}</div>
        <button onClick={getAuthNumber}>인증번호전송</button>
      </div>
    </>
  )
}

export default AuthNumber