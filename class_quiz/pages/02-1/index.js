import { useState } from 'react'

const SayHello = () => {
  //let, document.getElementById
  const onClickSayHelloLet = () => {
    const text = '반갑습니다.'
    document.getElementById('hello').innerText = text
  }

  // state
  const [comment, setComment] = useState('안녕하세요.')
  const onClickSayHello = () => {
    setComment('반갑습니다.')
  }


  return (
    <>
      <button onClick={onClickSayHelloLet}  id="hello">안녕하세요.</button>

      <button onClick={onClickSayHello}>{comment}</button>
    </>
  )
}

export default SayHello