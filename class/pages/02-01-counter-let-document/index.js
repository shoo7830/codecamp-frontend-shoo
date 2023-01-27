// counter let
const CounterLetDoucmentPage = () => {
  
  // 함수이름에 handleClick 또는 onClick 많이 씀
  function onClickCountUp() {
    const count = Number(document.getElementById('count').innerText) + 1;
    document.getElementById('count').innerText  = count;
  }

  function onClickCountDown() {
    const count = Number(document.getElementById('count').innerText) - 1;
    document.getElementById('count').innerText = count;
  }

  return (
    <>
      <div id="count">0</div>
      <button onClick={onClickCountUp}>카운트 올리기!!</button>
      <button onClick={onClickCountDown}>카운트 내리기!!</button>
    </>
  )
}

export default CounterLetDoucmentPage