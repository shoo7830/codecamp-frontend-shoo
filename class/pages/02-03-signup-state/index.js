import { useState } from "react"
const SignUpStatePage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')

  // 이벤트핸들러 함수에는 이벤트가 들어온다.
  function onChangeEmail(event) {
    // event : 나의 행동
    // event.target : 작동된 태그
    // event.tagret.value : 태그에 입력된 값
    setEmail(event.target.value)
  }

  function onChangePassword(event) {
    setPassword(event.target.value)
  }

  function onClickSignUp() {
    //검증하기
    !email.includes('@') ? setEmailError("잘못된 이메일 @ 내놔") : (alert('회원가입 축하'))
  }

  return (
    <>
      이메일: <input type="text" onChange={onChangeEmail} />
      <div>{emailError}</div>
      비밀번호: <input type="password" onChange={onChangePassword} />
      <button onClick={onClickSignUp}>회원가입</button>
    </>
  )
}

export default SignUpStatePage